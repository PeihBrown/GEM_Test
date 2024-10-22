// Câu 2: Cho một dãy số [1, 25, 7, -7, -3, 12, -22, 0], sắp sếp dãy số theo thứ tự tăng dần

// Sắp sếp dãy số theo thứ tự tăng dần
const quickSort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const customAbs = (num) => {
    return num < 0 ? -num : num;
}

// Sắp sếp dãy số theo thứ tự tăng dần theo giá trị tuyệt đối
const quickSortByAbsValue = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        const pivotIndex = partitionByAbsValue(arr, low, high);
        quickSortByAbsValue(arr, low, pivotIndex - 1);
        quickSortByAbsValue(arr, pivotIndex + 1, high);
    }
    return arr;
}

const partitionByAbsValue = (arr, low, high) => {
    const pivot = arr[high];
    const pivotAbs = customAbs(pivot);
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        const currentAbs = customAbs(arr[j]);
        if (currentAbs < pivotAbs || (currentAbs === pivotAbs && arr[j] < pivot)) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Test cases
const tests = [
    {
        input: [1, 25, 7, -7, -3, 12, -22, 0],
        output: [-22, -7, -3, 0, 1, 7, 12, 25],
        description: "Sắp xếp tăng dần"
    },
    {
        input: [1, 25, 7, -7, -3, 12, -22, 0],
        output: [0, 1, -3, -7, 7, 12, -22, 25],
        description: "Sắp xếp theo giá trị tuyệt đối"
    }
];

// Chạy các test cases
tests.forEach((test, index) => {
    const result = index === 0 ? quickSort([...test.input]) : quickSortByAbsValue([...test.input]);
    console.log(`Test case ${index + 1}:`);
    console.log(`Input: [${test.input.join(', ')}]`);
    console.log(`Description: ${test.description}`);
    console.log(`Expected output: [${test.output.join(', ')}]`);
    console.log(`Actual output: [${result.join(', ')}]`);
    console.log(`Result: ${JSON.stringify(result) === JSON.stringify(test.output) ? 'PASS' : 'FAIL'}`);
    console.log('---');
});
