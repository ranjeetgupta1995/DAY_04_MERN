function createRateLimiter(limit, interval) {
    let count = 0;
    let lastResetTime = Date.now();

    function allow() {
        const now = Date.now();
        if (now - lastResetTime >= interval) {
            count = 0;
            lastResetTime = now;
        }
        return count < limit;
    }

    function increment() {
        count++;
    }

    return {
        allow,
        increment
    };
}

// Usage
const limiter = createRateLimiter(3, 5000); // Limit: 3 requests per 5 seconds

// Wait for 5 seconds
setTimeout(() => {
    console.log(limiter.allow()); // Output: true (Limit reset)
}, 5000);