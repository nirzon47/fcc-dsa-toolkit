const pairElement = () => {
	const str = document.getElementById('str').value
	const res = document.getElementById('result')

	const match = function (char) {
		switch (char) {
			case 'A':
				return ['A', 'T']
			case 'T':
				return ['T', 'A']
			case 'C':
				return ['C', 'G']
			case 'G':
				return ['G', 'C']
		}
	}
	const pairs = []
	for (let i = 0; i < str.length; i++) {
		pairs.push(match(str[i]))
	}

	res.innerText = pairs
}
