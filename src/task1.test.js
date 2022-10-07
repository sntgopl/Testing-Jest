import stringCount from './task1.js';

test('string length hello should be 5', () => {
  expect(stringCount('hello')).toBe(5);
})

test('string length Emilio should be 6', () => {
  expect(stringCount('Emilio')).toBe(6);
})

test('string length Que catzo fai has more than 10 characters', () => {
  expect(stringCount('Que catzo fai')).toBe('Error: string must have more than 1 and less than 10');
})
