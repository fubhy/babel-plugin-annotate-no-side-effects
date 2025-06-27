// Edge cases and special scenarios

// Empty function
export const emptyFn = () => {};

// Function with complex body
export function complexFunction() {
  const nested = function() {
    return "nested";
  };
  
  return {
    method: () => "method",
    nested
  };
}

// Class with computed property names
export class ComputedClass {
  ["computed" + "Method"]() {
    return "computed";
  }
}

// Object with computed property names
export const computedObject = {
  ["computed" + "Prop"]: () => "computed",
  
  // Method with symbol key
  [Symbol.iterator]: function*() {
    yield 1;
  }
};

// Multiple variable declarations
export const fn1 = () => 1, fn2 = () => 2, notFn = "value";

// Destructuring exports (should be ignored as they're not direct function exports)
const obj = { method: () => "method" };
export const { method } = obj;

// Re-export (should not be annotated here)
export { default as imported } from './other-module';

// Export all (should not be annotated)
export * from './other-module';