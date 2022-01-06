function solve() {
	const inputElementValue = document.getElementById("input").value;
	const resultElement = document.getElementById("resultOutput");

	let sum = getSum(inputElementValue);

	function getSum(value) {
		let result = value;

		while (result.length > 1) {
			let sum = 0;

			for (const item of result) {
				sum += Number(item);
			}

			result = sum.toString();
		}

		return result;
	};

	let slicedText = inputElementValue.slice(sum, inputElementValue.length - sum);

	function fromBinaryToChar(binary) {
		const decimal = parseInt(binary, 2);
		const char = String.fromCharCode(decimal);

		return char;
	};

	const output = slicedText
		.split(/([\d]{8})/g)
		.filter(e => e)
		.map(e => fromBinaryToChar(e))
		.filter(e => /[a-zA-Z ]+/g.test(e))
		.join("");

	resultElement.textContent = output;
}