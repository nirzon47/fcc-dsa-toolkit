const steamrollArray = () => {
	let arr = document.getElementById('arr').value
	const result = document.getElementById('result')

	arr = JSON.parse(arr)

	result.innerText =
		'[' +
		arr
			.toString()
			.replace('[', '')
			.replace(']', '')
			.replace(',,', ',')
			.replace('object Object', '{}') +
		']'
}
