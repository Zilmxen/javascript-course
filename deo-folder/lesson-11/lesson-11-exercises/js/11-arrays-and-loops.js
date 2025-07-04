let values = ['Hi', 'Hello', 'Good Evening'];

console.log(values);

function handleGetValue(){

  const inputElement = document.querySelector('.js-get-value');
  const number = inputElement.value;

  values.push(number);

  const lastIndex = values.length - 1;
  const tempoValue = values[0];
  values[0] = values[lastIndex];
  values[lastIndex] = tempoValue
  inputElement.value = '';

  console.log(values)

}

