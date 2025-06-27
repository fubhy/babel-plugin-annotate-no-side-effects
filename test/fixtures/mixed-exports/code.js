// Mixed exports with functions, classes, and objects
export function regularFunction() {
  return 1;
}

export class MixedClass {
  constructor() {}
  
  method() {
    return 2;
  }
  
  static staticMethod() {
    return 3;
  }
}

export const mixedObject = {
  fn: () => 4,
  nested: {
    deepFn: function() {
      return 5;
    }
  }
};

export const arrowFn = () => 6;

// Non-function exports should be ignored
export const value = 42;
export const array = [1, 2, 3];