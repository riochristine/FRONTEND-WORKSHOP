let anotherCalc = true;

while (anotherCalc) {
    let num1, num2, operator, result;

do {
    num1 = parseFloat(prompt("Enter the first number:"));
    if (isNaN(num1)) {
        alert("Invalid input. Please enter a valid number.");
        console.log("Invalid input. Please enter a valid number.");
        
    } else {
        console.log(`First number entered: ${num1}`);
    }
} while (isNaN(num1));

do {
    num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num2)) {
        alert("Invalid input. Please enter a valid number.");
    } else {
        console.log(`Second number entered: ${num2}`);
    }
} while (isNaN(num2));

operator = prompt("How would you like to calculate the numbers (+, -, *, /, %)?") 
console.log(`Chosen operation: ${operator}`);


switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    case '%':
        result = num1 % num2;
        break;
    default: 
        alert("Invalid.")
}

alert(`Result: ${result}`)
console.log(`${num1} ${operator} ${num2} = ${result}`);

anotherCalc = confirm("Do you want to perform another calculation?")
}