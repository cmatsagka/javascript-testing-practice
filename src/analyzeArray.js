const getAverage = (array) => {
	const sum = array.reduce((total, current) => total + current, 0);
	return sum / array.length;
};

const getMin = (array) => Math.min(...array);

const getMax = (array) => Math.max(...array);

export function analyzeArray(array) {
	return {
		average: getAverage(array),
		min: getMin(array),
		max: getMax(array),
		length: array.length,
	};
}
