import Big from 'big.js';

function render() {
  // create first input;
  const inputFir = document.createElement('input');
  inputFir.setAttribute('type', 'text');
  inputFir.setAttribute('class', 'fir');

  // create second input;
  const inputSec = document.createElement('input');
  inputSec.setAttribute('type', 'text');
  inputSec.setAttribute('class', 'sec');

  // create tag 'br' for a carryover second input;
  const br = document.createElement('br');

  // create tag 'br' for a carryover button;
  const brSec = document.createElement('br');

  // create div  for output the result;
  const divOne = document.createElement('div');
  divOne.setAttribute('class', 'error-message');

  // create button;
  const button = document.createElement('button');
  button.innerText = 'count';

  // bind all elements to the 'body' tag;
  const body = document.querySelector('body');

  // output elements;
  body.appendChild(inputFir);
  body.appendChild(br);
  body.appendChild(inputSec);
  body.appendChild(brSec);
  body.appendChild(button);
  body.appendChild(divOne);

  // function for a count result;
  function sum() {
    let a = document.querySelector('.fir').value;
    let b = document.querySelector('.sec').value;

    a = Number(a);
    b = Number(b);

    if (Number.isNaN(a) || Number.isNaN(b) || a === Infinity || b === Infinity) {
      document.querySelector('.error-message').innerHTML = 'this is not a number!';
    } else {
      const one = new Big(a);
      const two = new Big(b);
      document.querySelector('.error-message').innerHTML = one.plus(two);
    }
  }

  // applying 'onClick' for checking when user click on button;
  document.querySelector('button').onclick = sum;
}

window.addEventListener('load', render);
