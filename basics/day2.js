// Day 2: Functions

// 1. Normal function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Abdullah"));


// 2. Function with calculation
function square(num) {
    return num * num;
}

console.log("Square:", square(5));


// 3. Even / Odd check
function isEven(n) {
    return n % 2 === 0;
}

console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));


// 4. Arrow function (modern JS)
const add = (a, b) => {
    return a + b;
};

console.log("Sum:", add(10, 5));