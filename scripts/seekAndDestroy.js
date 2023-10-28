const seekAndDestroy = () => {
	const arr = document.getElementById('arr').value.split(' ')
	const destroy = document.getElementById('remove').value.split(' ')
	const res = document.getElementById('result')

	res.innerText = arr.filter((num) => !destroy.includes(num))
}
