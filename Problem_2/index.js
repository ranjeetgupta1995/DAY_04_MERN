function customMap(array, transformFunction) {
    const result = []; // Initialize an empty array to store the transformed elements

    // Iterate through each element of the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the transformation function to the current element
        const transformedElement = transformFunction(array[i]);
        // Add the transformed element to the result array
        result.push(transformedElement);
    }

    return result; // Return the array containing the transformed elements
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

// Define a transformation function (e.g., double the number)
function doubleNumber(num) {
    return num * 2;
}

// Apply custom map function with the transformation function
const doubledNumbers = customMap(numbers, doubleNumber);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]