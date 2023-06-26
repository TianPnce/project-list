const baseUrl = 'http://localhost:3001/'

const emailBtn = document.querySelector('#sendEzlist')
emailBtn.addEventListener('submit', e => {
  e.preventDefault()

  console.log(e)
  const receivingEmail = document.querySelector('#receivingEmail').value
  const userName = document.querySelector('#emailBtn').getAttribute('data-userName')
  const ezlistId = document.querySelector('#ezlistSelect').value

  const emailObj = {
    from: 'helloezlist@gmail.com',
    to: receivingEmail,
    subject: 'Ezlist',
    text: userName + ' sent you a list ' + baseUrl + 'api/ezlists/' + ezlistId
  }

  fetch('/api/mailer', {
    method: 'POST',
    body: JSON.stringify(emailObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      alert('Hooray!')
    } else {
      alert('error')
    }
  })
})