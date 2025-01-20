/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/

function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("You can not use negative numbers!!");
      } else {
        resolve(a + b);
      }
    }, 500);
  });
}

//

document.getElementById("sumApp").addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  sum(num1, num2)
    .then((result) => {
      document.getElementById("result").textContent =
        "Sum is:  " + result + "  🎉";
    })
    .catch((error) => {
      document.getElementById("result").textContent = "Error" + error;
    });
});
