// Deeply nested objects and complex structures
export const deeplyNested = {
  level1: {
    level2: {
      level3: {
        deepFunction: () => "deep",
        
        deepMethod() {
          return "method";
        },
        
        level4: {
          veryDeep: function() {
            return "very deep";
          }
        }
      }
    },
    
    parallelBranch: {
      fn: () => "parallel"
    }
  },
  
  topLevel: () => "top"
};

// Array with function elements (should not be annotated)
export const arrayWithFunctions = [
  () => "first",
  function() { return "second"; }
];

// Function that returns an object with methods
export const factoryFunction = () => {
  return {
    method1: () => "method1",
    method2() {
      return "method2";
    }
  };
};