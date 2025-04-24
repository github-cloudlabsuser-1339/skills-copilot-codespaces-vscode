// Calculator class definition
class Calculator {
    constructor() {
        this.result = 0;
    }

    // Add a number to the result
    add(number) {
        this.result += number;
        return this.result;
    }

    // Subtract a number from the result
    subtract(number) {
        this.result -= number;
        return this.result;
    }

    // Multiply the result by a number
    multiply(number) {
        this.result *= number;
        return this.result;
    }

    // Divide the result by a number
    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= number;
        return this.result;
    }

    // Reset the result to zero
    reset() {
        this.result = 0;
        return this.result;
    }

    // Get the current result
    getResult() {
        return this.result;
    }
}

// Example usage
const calculator = new Calculator();

console.log("Initial result:", calculator.getResult());
console.log("Add 5:", calculator.add(5));
console.log("Subtract 2:", calculator.subtract(2));
console.log("Multiply by 3:", calculator.multiply(3));
console.log("Divide by 2:", calculator.divide(2));
console.log("Reset:", calculator.reset());