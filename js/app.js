document.addEventListener("DOMContentLoaded", () => {
 
    const operand1Input = document.getElementById("op1");
    const operand2Input = document.getElementById("op2");
    const resultOutput = document.getElementById("res");
   
    document.getElementById("add-button").addEventListener("click", () => {
      calculate("+");
    });
   
    document.getElementById("sub-button").addEventListener("click", () => {
      calculate("-");
    });
   
    document.getElementById("mul-button").addEventListener("click", () => {
      calculate("*");
    });
   
    document.getElementById("div-button").addEventListener("click", () => {
      calculate("/");
    });
   
    document.getElementById("log-button").addEventListener("click", () => {
      calculateLog();
    });
   
    document.getElementById("sin-button").addEventListener("click", () => {
      calculateTrig("sin");
    });
   
    document.getElementById("tan-button").addEventListener("click", () => {
      calculateTrig("tan");
    });
   
    const calculate = (operation) => {
      const op1 = parseFloat(operand1Input.value);
      const op2 = parseFloat(operand2Input.value);
   
      if (isNaN(op1)  isNaN(op2)) {
        resultOutput.textContent = "Please enter valid numbers";
        return;
      }
      
      switch (operation) {
        case "+":
          resultOutput.textContent = "Result: " + (op1 + op2);
          break;
        case "-":
          resultOutput.textContent = "Result: " + (op1 - op2);
          break;
        case "*":
          resultOutput.textContent = "Result: " + (op1 * op2);
          break;
        case "/":
          if (op2 !== 0) {
            resultOutput.textContent = "Result: " + (op1 / op2);
          } else {
            resultOutput.textContent = "Cannot divide by zero";
          }
          break;
      }
    }
   
    const calculateLog = () => {
      const op1 = parseFloat(operand1Input.value);
      if (isNaN(op1)  op1 <= 0) { 
        resultOutput.textContent = "Please enter a valid positive number for log";
        return;
      }
      
      $ajaxUtils.sendGetRequest("data/log.json", function (response) {
        resultOutput.innerHTML = "log(" + op1 + ") = " + Math.log(op1) + "<br>";
        resultOutput.innerHTML += "<strong>" + response.name + "</strong><br>";
        resultOutput.innerHTML += response.description + "<br>";
        resultOutput.innerHTML += "<img src='images/" + response.image_name + "' alt='Logarithm'>";
      });
    }
   
    const calculateTrig = (operation) => {
      const op1 = parseFloat(operand1Input.value);
   
      if (isNaN(op1)) {
        resultOutput.textContent = "Please enter a valid number for trigonometric functions";
        return;
      }
      
      const radians = op1 * (Math.PI / 180);
   
      $ajaxUtils.sendGetRequest("data/" + operation + ".json", function (response) {
        resultOutput.innerHTML = operation + "(" + op1 + "°) = " + Math[operation](radians) + "<br>";
        resultOutput.innerHTML += "<strong>" + response.name + "</strong><br>";
        resultOutput.innerHTML += response.description + "<br>";
        resultOutput.innerHTML += "<img src='images/" + response.image_name + "' alt='" + response.name + "'>";
      });
    }
  });
