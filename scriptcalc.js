function calculateResult() {
    let display = document.getElementById('display');
    let submitbtn = document.getElementById('submit');
    let resultDisplay = document.getElementById('result');
  
    // try {
    //   let result = eval(display.value);
    //   console.log(result);
    //   if (Number.isNaN(result)) {
    //     resultDisplay.textContent = 'Invalid expression';
    //   } else {
    //     resultDisplay.textContent = result;
    //   }
    // } catch (error) {
    //   resultDisplay.textContent = 'Invalid expression';
    // }

    let result = eval(display.value);
      console.log(result);

      submitbtn.addEventListener("click", () => {
            resultDisplay.innerHTML = result;
        
        });
  }
  