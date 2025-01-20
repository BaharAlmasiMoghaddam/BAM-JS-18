// ? Question-1:follow these steps:
//todo-1:Write a function called "calculate" that takes 4 parameters.
//todo-2:The first and seconde parameters should be numbers.
//todo-3:The third parameter should be a string indicating either "add => addition" or "multiply => multiplication".
//todo-4:The fourth parameter should be a function that log the result of the calculation.

function calculate(num1, num2, operations, logResult) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("The 1st & 2nd parameters need to be numbers!");
    return;
  }

  //

  let result;
  if (operations === "add") {
    result = num1 + num2;
  } else if (operations === "multiply") {
    result = num1 * num2;
  } else {
    console.error("You can only use 'add' or 'multiply as the 3rd parameter!");
    return;
  }

  //

  if (typeof logResult === "function") {
    logResult(result);
  } else {
    console.error("You need to call its function!");
  }
}

function handleCalculationResult(result) {
  console.log("The result is : " + result);
}

calculate(5, 3, "add", handleCalculationResult);
calculate(4, 6, "multiply", handleCalculationResult);
