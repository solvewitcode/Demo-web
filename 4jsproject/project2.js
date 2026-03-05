const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    //form has default get and post method,we dont have any server so we have to prevent it
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    // const recommend = document.createElement('span')

    // recommendation = '\n Normal'
    // if(bmi<18.6){recommendation = '\n UnderWeight'}
    // else if(bmi>24.9){recommendation = '\n OverWeight'}
    // recommend.appendChild(document.createTextNode(recommendation))
    // results.appendChild(recommend)

  }
});