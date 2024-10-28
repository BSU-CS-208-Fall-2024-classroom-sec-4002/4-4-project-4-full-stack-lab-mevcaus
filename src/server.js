import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

// Create an in memory table to use
const db = new sqlite3.Database(':memory:')

// This is just for testing you would not want to create the table every
// time you start up the app feel free to improve this code :)
db.run(`CREATE TABLE todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL)`)

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  const local = { tasks: [] }
  db.each('SELECT id, task FROM todo', function (err, row) {
    if (err) {
      console.log(err)
    } else {
      local.tasks.push({ id: row.id, task: row.task })
    }
  }, function (err, numrows) {
    if (!err) {
      res.render('index', local)
    } else {
      console.log(err)
    }
  })
})

app.post('/', function (req, res) {
  console.log('adding todo item')
  console.log(req.body)
  const stmt = db.prepare('INSERT INTO todo (task) VALUES (?)')
  stmt.run(req.body.todo)
  stmt.finalize()
  res.sendStatus(200)
})

app.post('/delete', function (req, res) {
  console.log('deleting todo item')
  const stmt = db.prepare('DELETE FROM todo where id = (?)')
  console.log(req.body.id)
  stmt.run(req.body.id)
  stmt.finalize()
  res.sendStatus(200)
})

// Start the web server
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
