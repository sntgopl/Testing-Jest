class Calculator {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }

  sum = () => {
    return this.a + this.b; 
  }
  
  substract = () => {
    return this.a - this.b; 
  }
  
  multiply = () => {
    return this.a * this.b; 
  }
  
  divide = () => {
    return this.a / this.b; 
  }
}

export default Calculator;