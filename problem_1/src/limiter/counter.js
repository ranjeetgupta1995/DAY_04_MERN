function createCounter() {
    let count = 0; // State variable
    
    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

export default createCounter;