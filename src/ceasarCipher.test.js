import { ceasarCipher } from './ceasarCipher.js';

test('change string with ceasarCipher', () => {
	expect(ceasarCipher('hello', 3)).toMatch('khoor');
});

test('change string with ceasarCipher', () => {
	expect(ceasarCipher('xyz', 3)).toMatch('abc');
});

test('change string with ceasarCipher', () => {
	expect(ceasarCipher('HeLLo', 3)).toMatch('KhOOr');
});

test('change string with ceasarCipher', () => {
	expect(ceasarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
});
