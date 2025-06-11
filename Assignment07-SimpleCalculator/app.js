// Simple Calculator

function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function calculator(a, b, operator) {
    a = Number (a)
    b = Number (b)
    if (!isNaN (a)){
        if (!isNaN (b)){
            if (operator === "+"){
            return add (a, b)
        }
        else if (operator === "-"){
            return sub (a, b)
        }
        else if(operator === "*"){
            return multiply(a, b)
        }
        else if (operator === "/"){
            return divide (a, b)
        }
        else {
            return "Invalid Operator"
        }

        } else{
            return "Second input is not a number. Please Enter a valid Number"
        }
    } else{
        return "First input is not a number. Please Enter a valid Number"
    }
}

console.log(calculator(7, "ksjkjs", "&"));

function calculate() {
    const a = document.getElementById("inputA").value;
    const b = document.getElementById("inputB").value;
    const operator = document.getElementById("operator").value;
    const result = calculator(a, b, operator);
    document.getElementById("result").textContent = "Result: " + result;
}
