const orbitalPeriod = () => {
	const name = document.getElementById('name').value
	const avgAlt = document.getElementById('altitude').value
	const result = document.getElementById('result')

	const GM = 398600.4418
	const earthRadius = 6367.4447

	const earth = earthRadius + Number(avgAlt)
	const orbitalPeriod = Math.round(
		2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
	)

	result.innerText = ` name: ${name}, orbitalPeriod: ${orbitalPeriod} `
}
