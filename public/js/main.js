// TODO: Add any JavaScript here to make your page fancy :)
function submitAddForm (e) {
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

function submitDeleteForm (e) {
  e.preventDefault()
  const form = e.target
  const formData = new FormData(form)
  console.log(formData.get('id'))
  fetch('/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: formData.get('id') })
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

function submitForm (e) {
  e.preventDefault()
  console.log(e.submitter.value)
  if (e.submitter.value === 'Delete') {
    submitDeleteForm(e)
  } else {
    submitAddForm(e)
  }
}
document.addEventListener('submit', submitForm)

console.log('main js loaded')
