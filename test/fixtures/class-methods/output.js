export class SimpleClass {
  /*#__NO_SIDE_EFFECTS__*/
  method1() {
    return 42;
  }
  method2 = /*#__NO_SIDE_EFFECTS__*/ () => {
    return "arrow";
  };
  /*#__NO_SIDE_EFFECTS__*/
  static staticMethod() {
    return true;
  }
  static staticArrow = /*#__NO_SIDE_EFFECTS__*/ () => {
    return "static arrow";
  };
  /*#__NO_SIDE_EFFECTS__*/
  async asyncMethod() {
    return Promise.resolve(1);
  }
  /*#__NO_SIDE_EFFECTS__*/
  *generatorMethod() {
    yield 1;
  }
  /*#__NO_SIDE_EFFECTS__*/
  get getter() {
    return "value";
  }
  /*#__NO_SIDE_EFFECTS__*/
  set setter(value) {
    console.log(value);
  }
}
export class ClassWithConstructor {
  /*#__NO_SIDE_EFFECTS__*/
  constructor(value) {
    this.value = value;
  }
  /*#__NO_SIDE_EFFECTS__*/
  getValue() {
    return this.value;
  }
}
export default class DefaultClass {
  /*#__NO_SIDE_EFFECTS__*/
  method() {
    return "default";
  }
}
class DeclaredThenExported {
  /*#__NO_SIDE_EFFECTS__*/
  method() {
    return "exported";
  }
}
export { DeclaredThenExported };

// Class expression
export const ClassExpression = class {
  /*#__NO_SIDE_EFFECTS__*/
  method() {
    return "expression";
  }
};

// Should not annotate non-exported classes
class InternalClass {
  method() {
    return "internal";
  }
}
