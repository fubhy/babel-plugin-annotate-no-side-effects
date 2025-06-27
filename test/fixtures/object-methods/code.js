export const objectWithMethods = {
  method1() {
    return 42;
  },

  method2: function() {
    return "function";
  },

  arrowMethod: () => {
    return "arrow";
  },

  async asyncMethod() {
    return Promise.resolve(1);
  },

  *generatorMethod() {
    yield 1;
  },

  get getter() {
    return "value";
  },

  set setter(value) {
    console.log(value);
  },

  // Should not annotate non-function properties
  property: "value",
  number: 42,
  nested: {
    value: true
  }
};

export default {
  defaultMethod() {
    return "default";
  }
};

const declaredThenExported = {
  method() {
    return "exported";
  }
};

export { declaredThenExported };

// Should not annotate non-exported objects
const internalObject = {
  method() {
    return "internal";
  }
};

// Mixed exports
export const mixedObject = {
  fn1: () => 1,
  value: "string",
  fn2() {
    return 2;
  },
  nested: {
    nestedFn: () => "nested"
  }
};
