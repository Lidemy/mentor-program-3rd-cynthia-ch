const input = document.querySelectorAll('.need');
const necessary = document.querySelectorAll('.necessary');
const sub = document.querySelector('input[type=submit]');
const optm = document.querySelector('.opt-main');
const invalid = document.querySelectorAll('.invalid');
const optInvalid = document.querySelector('.opt-invalid');
const basic = document.querySelector('#basic');
const adv = document.querySelector('#advanced');
const other = document.querySelector('.other');
let result = [];

function check() {
  result = [];
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      necessary[i].classList.add('empty');
      input[i].classList.add('empty');
      invalid[i].classList.remove('none');
    } else if (input[i].value !== '') {
      necessary[i].classList.remove('empty');
      input[i].classList.remove('empty');
      invalid[i].classList.add('none');
      result.push(input[i].value);
    }
  } if (basic.checked || adv.checked) {
    optm.classList.remove('empty');
    optInvalid.classList.add('none');
  } else {
    optm.classList.add('empty');
    optInvalid.classList.remove('none');
  }
  return result;
}

sub.addEventListener('click', (e) => {
  check();
  if (result.length >= input.length && (basic.checked || adv.checked)) {
    if (basic.checked) {
      result.push('基礎班');
    } else if (adv.checked) {
      result.push('加強班');
    }
    result.push(other.value);
    console.log(result);
    alert('謝謝填答！');
  } else {
    e.preventDefault();
  }
});
