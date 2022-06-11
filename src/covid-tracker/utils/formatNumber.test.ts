import { describe, it, expect } from 'vitest';
import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
  it('should add one dot for numbers >= 1000 and < 1000000', function () {
    const number = 45645;
    const formattedNumber = formatNumber(number);
    expect(formattedNumber).toBe('45.645');
  });

  it('should add dots for numbers >= 1000000', function () {
    const number = 123456789;
    const formattedNumber = formatNumber(number);
    expect(formattedNumber).toBe('123.456.789');
  });
});
