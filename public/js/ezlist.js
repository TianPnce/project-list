const addForm = document.querySelector("#addItem")
addForm.addEventListener('submit', e => {
  e.preventDefault()
  const listId = e.target.getAttribute("data-listId")
  const itemObj = {
    name: document.querySelector('#itemName').value,
    priority: document.querySelector('#priorityLevel').value,
    ezlist_id: listId
  }
  fetch(`/api/items`, {
    method: 'POST',
    body: JSON.stringify(itemObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      location.reload()
    } else {
      alert('error')
    }
  })
})

const priorityEls = document.querySelectorAll('.priority')
priorityEls.forEach(element => {
  switch (element.innerHTML.toLowerCase()) {
    case 'low':
      element.className = 'text-bg-success'
      break
    case 'medium':
      element.className = 'text-bg-warning'
      break
    case 'high':
      element.className = 'text-bg-danger'
      break
  }
})

const editForm = document.querySelector("#editEzlist")
editForm.addEventListener('submit', e => {
  e.preventDefault()
  const listId = e.target.getAttribute("data-listId")
  const nameObj = {
    name: document.querySelector('#editListName').value
  }
  fetch(`/api/ezlists/${listId}`, {
    method: 'PUT',
    body: JSON.stringify(nameObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok) {
      location.reload()
    } else {
      alert('Error')
    }
  })
})

const delItemBtns = document.querySelectorAll('.delItemBtn')
delItemBtns.forEach(itemBtn => {
  itemBtn.addEventListener('click', e => {
    const itemId = e.target.parentElement.getAttribute("data-itemId")
    fetch(`/api/items/${itemId}`, {
      method: 'DELETE'
    }).then(res => {
      if (res.ok) {
        location.reload()
      } else {
        alert('error')
      }
    })
  })
})

const delBtn = document.querySelector("#delBtn");
delBtn.addEventListener('click', e => {
  const listId = e.target.parentElement.getAttribute("data-listId")
  fetch(`/api/ezlists/${listId}`, {
    method: 'DELETE'
  }).then(res => {
    if (res.ok) {
      location.replace('/profile')
    } else {
      alert("error")
    }
  })
})