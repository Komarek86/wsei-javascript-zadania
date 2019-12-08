function Calculator() {
    this.operations = []
}

Calculator.prototype.add = function(num1,num2){
    const result = num1 + num2;
    this.operations.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.multiply = function(num1,num2){
    const result = num1 * num2;
    this.operations.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
}

Calculator.prototype.subtract = function(num1,num2){
    const result = num1 - num2;
    this.operations.push(`subtracted ${num1} from ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function(num1,num2){
    const result = num1 / num2;
    this.operations.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function(){
    for(var i=0;i<this.operations.length;i++){
        console.log(this.operations[i]);
    }
}

Calculator.prototype.clearOperations = function(){
    this.operations = [];
    this.operations.length = 0;
}

var calc = new Calculator();
calc.add(42,3);
calc.multiply(2,5);
calc.subtract(122,21);
calc.divide(5,0);
calc.divide(50,5);
calc.printOperations();
calc.clearOperations();