// Complex class with various member types
export class ComplexClass {
  // Public field
  publicField = "value";
  
  // Function field
  functionField = function() {
    return "function field";
  };
  
  // Arrow function field
  arrowField = () => "arrow field";
  
  // Constructor
  constructor(value) {
    this.value = value;
  }
  
  // Regular method
  regularMethod() {
    return this.value;
  }
  
  // Async method
  async asyncMethod() {
    return Promise.resolve(this.value);
  }
  
  // Generator method
  *generatorMethod() {
    yield this.value;
  }
  
  // Getter
  get computedValue() {
    return this.value * 2;
  }
  
  // Setter
  set computedValue(newValue) {
    this.value = newValue / 2;
  }
  
  // Static method
  static staticMethod() {
    return "static";
  }
  
  // Static field
  static staticField = "static value";
  
  // Static arrow function
  static staticArrow = () => "static arrow";
}