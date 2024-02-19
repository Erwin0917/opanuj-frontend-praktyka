function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', onValidMassage);
  button2.addEventListener('click', clear);

  function clear() {
    input.value = '';
    result.innerHTML = '';
  }

  function onValidMassage() {
    if (input.value.trim() === '') {
      return;
    }
    const isValidRange = checkRange(input.value, 0, 100);
    result.innerHTML =  isNumber(input.value) && isValidRange ? 'Valid' : 'Invalid';
  }
}

function isNumber(value){
  const parsedValue = parseInt(value, 10);
  return !isNaN(parsedValue)
}
function checkRange(value, min, max) {
  return Number(value) >= min && Number(value) <= max;
}


validator();
