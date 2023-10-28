const sumFibs = () => {
	const num = Number(document.getElementById('num').value)
	const result = document.getElementById('result')

	let prev = 0,
		curr = 1,
		res = 0

	while (curr <= num) {
		if (curr % 2 !== 0) {
			res += curr
		}
		curr += prev
		prev = curr - prev
	}

	result.innerText = res
}
