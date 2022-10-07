import capitalize from './task4.js';

describe('First letter of string should return capitalized', () => {
  test('santiago should return Santiago', () => {
    expect(capitalize('santiago')).toBe('Santiago');
  })
})