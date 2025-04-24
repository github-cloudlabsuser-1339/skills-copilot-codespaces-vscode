const Calculator = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize result to 0', () => {
        expect(calculator.getResult()).toBe(0);
    });

    test('should add a number to the result', () => {
        expect(calculator.add(5)).toBe(5);
        expect(calculator.add(-3)).toBe(2);
    });

    test('should subtract a number from the result', () => {
        calculator.add(10); // Set initial result to 10
        expect(calculator.subtract(4)).toBe(6);
        expect(calculator.subtract(-2)).toBe(8);
    });

    test('should multiply the result by a number', () => {
        calculator.add(5); // Set initial result to 5
        expect(calculator.multiply(3)).toBe(15);
        expect(calculator.multiply(-2)).toBe(-30);
    });

    test('should divide the result by a number', () => {
        calculator.add(20); // Set initial result to 20
        expect(calculator.divide(4)).toBe(5);
        expect(calculator.divide(-1)).toBe(-5);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(0)).toThrow('Cannot divide by zero');
    });

    test('should reset the result to zero', () => {
        calculator.add(10); // Set initial result to 10
        expect(calculator.reset()).toBe(0);
    });

    test('should return the current result', () => {
        calculator.add(7);
        expect(calculator.getResult()).toBe(7);
    });
});