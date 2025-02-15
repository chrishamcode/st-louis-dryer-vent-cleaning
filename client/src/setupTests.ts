import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

declare global {
  // This solves the typescript error for extending the global object
  var expect: typeof expect;
  var vi: typeof vi;
}

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Make test functions available globally
globalThis.expect = expect;
globalThis.vi = vi;

// Cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  cleanup();
});