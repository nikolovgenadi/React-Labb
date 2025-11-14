import { filterEvenNumbers } from './filterEvenNumbers';

test('filters even numbers from an array', () => {
  const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([2, 4, 6]);
});
