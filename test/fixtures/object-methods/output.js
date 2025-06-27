export const objectWithMethods = {
  /*#__NO_SIDE_EFFECTS__*/ method1() {
    return 42;
  },
  method2: /*#__NO_SIDE_EFFECTS__*/ function () {
    return "function";
  },
  arrowMethod: /*#__NO_SIDE_EFFECTS__*/ () => {
    return "arrow";
  },
  /*#__NO_SIDE_EFFECTS__*/ async asyncMethod() {
    return Promise.resolve(1);
  },
  /*#__NO_SIDE_EFFECTS__*/ *generatorMethod() {
    yield 1;
  },
  /*#__NO_SIDE_EFFECTS__*/ get getter() {
    return "value";
  },
  /*#__NO_SIDE_EFFECTS__*/ set setter(value) {
    console.log(value);
  },
  // Should not annotate non-function properties
  property: "value",
  number: 42,
  nested: {
    value: true,
  },
};
export default {
  /*#__NO_SIDE_EFFECTS__*/ defaultMethod() {
    return "default";
  },
};
const declaredThenExported = {
  /*#__NO_SIDE_EFFECTS__*/ method() {
    return "exported";
  },
};
export { declaredThenExported };

// Should not annotate non-exported objects
const internalObject = {
  method() {
    return "internal";
  },
};

// Mixed exports
export const mixedObject = {
  fn1: /*#__NO_SIDE_EFFECTS__*/ () => 1,
  value: "string",
  /*#__NO_SIDE_EFFECTS__*/ fn2() {
    return 2;
  },
  nested: {
    nestedFn: /*#__NO_SIDE_EFFECTS__*/ () => "nested",
  },
};