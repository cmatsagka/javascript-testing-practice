const lowercase = Array.from({ length: 26 }, (_, i) =>
	String.fromCharCode(97 + i)
);
const capitals = Array.from({ length: 26 }, (_, i) =>
	String.fromCharCode(65 + i)
);

function shiftChar(char, shiftFactor) {
	let index;
	if (lowercase.includes(char)) {
		index = lowercase.indexOf(char);
		return lowercase[(index + shiftFactor) % 26];
	}
	if (capitals.includes(char)) {
		index = capitals.indexOf(char);
		return capitals[(index + shiftFactor) % 26];
	}
	return char;
}

export function ceasarCipher(string, shiftFactor) {
	return string
		.split('')
		.map((char) => shiftChar(char, shiftFactor))
		.join('');
}
