import { isPositive } from './04-main';

describe('isPositive()', () => {
  it('should return true when n > 0', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(2)).toBe(true);
  });
  it('should return false when n = 0', () => {
    expect(isPositive(0)).toBe(true);
  });
  it('should return false when n < 0', () => {
    expect(isPositive(-1)).toBe(true);
    expect(isPositive(-2)).toBe(true);
  });
});
