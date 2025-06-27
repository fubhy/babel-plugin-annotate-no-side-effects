// Edge cases and special scenarios

// Empty function
export const emptyFn = /*#__NO_SIDE_EFFECTS__*/ () => {};

// Function with complex body
/*#__NO_SIDE_EFFECTS__*/
export function complexFunction() {
  const nested = function () {
    return "nested";
  };
  return {
    method: () => "method",
    nested,
  };
}

// Class with computed property names
export class ComputedClass {
  /*#__NO_SIDE_EFFECTS__*/
  ["computed" + "Method"]() {
    return "computed";
  }
}

// Object with computed property names
export const computedObject = {
  ["computed" + "Prop"]: /*#__NO_SIDE_EFFECTS__*/ () => "computed",
  // Method with symbol key
  [Symbol.iterator]: /*#__NO_SIDE_EFFECTS__*/ function* () {
    yield 1;
  },
};

// Multiple variable declarations
export const fn1 = /*#__NO_SIDE_EFFECTS__*/ () => 1,
  fn2 = /*#__NO_SIDE_EFFECTS__*/ () => 2,
  notFn = "value";

// Destructuring exports (should be ignored as they're not direct function exports)
const obj = {
  method: () => "method",
};
export const { method } = obj;

// Re-export (should not be annotated here)
export { default as imported } from "./other-module";

// Export all (should not be annotated)
export * from "./other-module";