// Complex class with various member types
export class ComplexClass {
  // Public field
  publicField = "value";

  // Function field
  functionField = /*#__NO_SIDE_EFFECTS__*/ function () {
    return "function field";
  };

  // Arrow function field
  arrowField = /*#__NO_SIDE_EFFECTS__*/ () => "arrow field";

  // Constructor
  /*#__NO_SIDE_EFFECTS__*/
  constructor(value) {
    this.value = value;
  }

  // Regular method
  /*#__NO_SIDE_EFFECTS__*/
  regularMethod() {
    return this.value;
  }

  // Async method
  /*#__NO_SIDE_EFFECTS__*/
  async asyncMethod() {
    return Promise.resolve(this.value);
  }

  // Generator method
  /*#__NO_SIDE_EFFECTS__*/
  *generatorMethod() {
    yield this.value;
  }

  // Getter
  /*#__NO_SIDE_EFFECTS__*/
  get computedValue() {
    return this.value * 2;
  }

  // Setter
  /*#__NO_SIDE_EFFECTS__*/
  set computedValue(newValue) {
    this.value = newValue / 2;
  }

  // Static method
  /*#__NO_SIDE_EFFECTS__*/
  static staticMethod() {
    return "static";
  }

  // Static field
  static staticField = "static value";

  // Static arrow function
  static staticArrow = /*#__NO_SIDE_EFFECTS__*/ () => "static arrow";
}