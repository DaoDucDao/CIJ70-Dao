import cal from './calculation.js';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const addCal = document.getElementById('add');
const subCal = document.getElementById('sub');
const mulCal = document.getElementById('mul');
const diviCal = document.getElementById('divi');
const result = document.getElementById('result');

function check (a,b){
    if (isNaN(a) || isNaN(b) || a.length === 0 || b.length === 0) return false;
    return true;
}

function validate (sth){
    sth.textContent = "Please re-enter valid input!";
}

addCal.addEventListener('click', () =>{
    if (check(num1.value, num2.value) === false ) 
        validate (result);
     else { 
        result.textContent = cal.add (parseInt(num1.value),parseInt(num2.value));
    }
})
subCal.addEventListener('click', () =>{
    if (check(num1.value, num2.value) === false ) 
        validate (result);
    else { 
        result.textContent = cal.sub (parseInt(num1.value),parseInt(num2.value));
    }
})
mulCal.addEventListener('click', () =>{
    if (check(num1.value, num2.value) === false ) 
        validate (result);
     else { 
        result.textContent = cal.multiply(parseInt(num1.value),parseInt(num2.value));
    }
})
diviCal.addEventListener('click', () =>{
    if (check(num1.value, num2.value) === false ) 
        validate (result);
     else { 
        result.textContent = cal.divide (parseInt(num1.value),parseInt(num2.value));
    }
})