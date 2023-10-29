const Person = () => {
	const firstName = document.getElementById('fName').value
	const lastName = document.getElementById('lName').value
	const result = document.getElementById('result')

	result.innerText = `${firstName} ${lastName}`
}
