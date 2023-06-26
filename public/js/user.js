const searchForm = document.querySelector("#searchUser");
searchForm.addEventListener("submit", e => {
	e.preventDefault();
	const userName = document.querySelector("#searchUsername").value
	fetch(`/api/users/search/${userName}`, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => {
		if (res.ok) {
			location.replace(`/api/users/search/${userName}`)
		} else {
			alert("error")
		}
  })
})