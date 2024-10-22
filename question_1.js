// Viết chương trình đệ quy tính tổng các số từ 1 đến n, với n là một số cho trước.

const sum = (n) => {
	if (n <= 0) return 0;
	return n + sum(n - 1);
}

// Test cases
const tests = [
	{ input: 0, output: 0 },
	{ input: 1, output: 1 },
	{ input: 3, output: 6 },
	{ input: 10, output: 55 }
];

// Chạy các test cases
tests.forEach((test, index) => {
	const result = sum(test.input);
	console.log(`Test case ${index + 1}:`);
	console.log(`Input: n = ${test.input}`);
	console.log(`Expected output: ${test.output}`);
	console.log(`Actual output: ${result}`);
	console.log(`Result: ${result === test.output ? 'PASS' : 'FAIL'}`);
	console.log('---');
});
