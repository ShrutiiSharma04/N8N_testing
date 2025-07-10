// src/math.test.js
import { describe, it, expect } from 'vitest';
import { add } from './Header.jsx';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds negative and positive number', () => {
    expect(add(-2, 5)).toBe(3);
  });

  it('adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('adds with zero', () => {
    expect(add(0, 10)).toBe(10);
  });
});
