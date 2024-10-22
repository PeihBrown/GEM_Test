const replaceSize = (url, size) => {
  // Regex để tìm kích thước cuối cùng
  const sizeRegex = /(_(?:\d+x\d*|x\d+))?\.(?:jpg|jpeg|png|gif|webp|avif)(?=[^.]*$)/i;
  
  return url.replace(sizeRegex, (match, p1) => {
    if (!p1 || p1.slice(1) !== size) {
      return `_${size}.jpg`;
    }
    return match;
  });
};

// Test cases
const tests = [
  {
    "input": "https://cdn.shopify.com/s.jpg?v=15",
    "output": "https://cdn.shopify.com/s_100x.jpg?v=15",
    "size": "100x"
  },
  {
    "input": "https://cdn.shopify.com/s_100x200.jpg?v=15",
    "output": "https://cdn.shopify.com/s_x200.jpg?v=15",
    "size": "x200"
  },
  {
    "input": "https://cdn.shopify.com/s-jpg_200x100.jpg?v=15",
    "output": "https://cdn.shopify.com/s-jpg_100x.jpg?v=15",
    "size": "100x"
  },
  {
    "input": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
    "output": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15",
    "size": "x100"
  },
  {
    "input": "https://cdn.shopify.com/s-800x600-jpg.jpg?v=15",
    "output": "https://cdn.shopify.com/s-800x600-jpg_100x200.jpg?v=15",
    "size": "100x200"
  }
];

// Chạy các test cases
tests.forEach((test, index) => {
  const result = replaceSize(test.input, test.size);
  console.log(`Test case ${index + 1}:`);
  console.log(`Input: ${test.input}`);
  console.log(`Size: ${test.size}`);
  console.log(`Expected output: ${test.output}`);
  console.log(`Actual output: ${result}`);
  console.log(`Result: ${result === test.output ? 'PASS' : 'FAIL'}`);
  console.log('---');
});
