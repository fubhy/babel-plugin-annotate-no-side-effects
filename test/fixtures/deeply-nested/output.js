// Deeply nested objects and complex structures
export const deeplyNested = {
  level1: {
    level2: {
      level3: {
        deepFunction: /*#__NO_SIDE_EFFECTS__*/ () => "deep",
        /*#__NO_SIDE_EFFECTS__*/ deepMethod() {
          return "method";
        },
        level4: {
          veryDeep: /*#__NO_SIDE_EFFECTS__*/ function () {
            return "very deep";
          },
        },
      },
    },
    parallelBranch: {
      fn: /*#__NO_SIDE_EFFECTS__*/ () => "parallel",
    },
  },
  topLevel: /*#__NO_SIDE_EFFECTS__*/ () => "top",
};

// Array with function elements (should not be annotated)
export const arrayWithFunctions = [
  () => "first",
  function () {
    return "second";
  },
];

// Function that returns an object with methods
export const factoryFunction = /*#__NO_SIDE_EFFECTS__*/ () => {
  return {
    method1: () => "method1",
    method2() {
      return "method2";
    },
  };
};