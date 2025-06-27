/*#__NO_SIDE_EFFECTS__*/
// Mixed exports with functions, classes, and objects
export function regularFunction() {
  return 1;
}
export class MixedClass {
  /*#__NO_SIDE_EFFECTS__*/
  constructor() {}
  /*#__NO_SIDE_EFFECTS__*/
  method() {
    return 2;
  }
  /*#__NO_SIDE_EFFECTS__*/
  static staticMethod() {
    return 3;
  }
}
export const mixedObject = {
  fn: /*#__NO_SIDE_EFFECTS__*/ () => 4,
  nested: {
    deepFn: /*#__NO_SIDE_EFFECTS__*/ function () {
      return 5;
    },
  },
};
export const arrowFn = /*#__NO_SIDE_EFFECTS__*/ () => 6;

// Non-function exports should be ignored
export const value = 42;
export const array = [1, 2, 3];