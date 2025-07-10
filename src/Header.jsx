import { add } from './Header.jsx';
import { describe, it, expect } from 'vitest';
 
 describe('add', () => {
   it('adds two positive numbers', () => {
-    expect(add(2, 3)).toBe(5);
+    expect(add(2, 4)).toBe(6);
   });
  });