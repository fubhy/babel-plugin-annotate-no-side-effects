export class SimpleClass {
  method1() {
    return 42;
  }

  method2 = () => {
    return "arrow";
  }

  static staticMethod() {
    return true;
  }

  static staticArrow = () => {
    return "static arrow";
  }

  async asyncMethod() {
    return Promise.resolve(1);
  }

  *generatorMethod() {
    yield 1;
  }

  get getter() {
    return "value";
  }

  set setter(value) {
    console.log(value);
  }
}

export class ClassWithConstructor {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

export default class DefaultClass {
  method() {
    return "default";
  }
}

class DeclaredThenExported {
  method() {
    return "exported";
  }
}

export { DeclaredThenExported };

// Class expression
export const ClassExpression = class {
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
