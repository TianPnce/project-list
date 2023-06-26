const ezlistForm = document.querySelector("#addEzlist");
ezlistForm.addEventListener("submit", e => {
  e.preventDefault();
	const listObj = {
		 name: document.querySelector("#ezlistName").value,
		}
		fetch("/api/ezlists", {
			method: "POST",
			body: JSON.stringify(listObj),
			headers: {"Content-Type": "application/json"}
		}).then(res => {
			if (res.ok) {
				location.reload()
			} else {
				alert("error")
			}
  })
})