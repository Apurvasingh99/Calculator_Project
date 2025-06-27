const display = document.getElementById("input");

function valueInDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
    
}

document.addEventListener('keydown', function(a) {
  const key = a.key;

  if (/[\d+\-*/^%.]/.test(key)) {
    valueInDisplay(key);
  }

  else if (key === 'Enter') {
    calculate();
  }

  else if (key === 'Escape') {
    clearDisplay();
  }
});