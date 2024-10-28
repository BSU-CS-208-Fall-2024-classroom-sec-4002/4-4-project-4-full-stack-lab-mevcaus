// TODO: Add any JavaScript here to make your page fancy :)
function submitForm (e) {
  e.preventDefault()
  const form = document.forms.toDoForm
  const formData = new FormData(form)
  console.log(formData.get('todo'))
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo: formData.get('todo') })
  })
    .then(res => {
      if (res.ok) {
        console.log('i reloaded the page!')
        window.location.reload()
      } else {
        console.log('error getting from db')
      }
    })
}
document.getElementById('toDoForm').addEventListener('submit', submitForm)
console.log('main js loaded')
