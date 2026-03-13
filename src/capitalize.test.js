import { capitalize } from './capitalize.js';

test('capitalizes first letter of string', () => {
	expect(capitalize('boom')).toBe('Boom');
});
