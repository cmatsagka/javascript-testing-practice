import { calculator } from './calculator.js';

test('add two numbers', () => {
	expect(calculator.add(3, 2)).toEqual(5);
});

test('subtrack two numbers', () => {
	expect(calculator.subtrack(3, 2)).toEqual(1);
});

test('multiply two numbers', () => {
	expect(calculator.multiply(3, 2)).toEqual(6);
});

test('divide two numbers', () => {
	expect(calculator.divide(3, 2)).toEqual(1.5);
});
