const randomNumber = Math.floor(Math.random()*17+4);
function findEven (num){
    console.log(`The random number is ${randomNumber}`);
    for (let i = 0 ; i < num ; i++){
        if (i%2 === 0)
        console.log(i);
    }
}
findEven(randomNumber);
// 
const color = document.getElementById('color');
color.addEventListener('mouseover', changeColourToMag);

function changeColourToMag (){
    color.style.backgroundColor = 'magenta';
}
color.addEventListener('mouseout', changeColourToCyan);

function changeColourToCyan (){
    color.style.backgroundColor = 'Cyan';
}

// 
function triangle (){
    const triangle = document.getElementById('triangle');
    for(let i = 0 ; i < 6 ; i++){
        let something = document.createElement('p');
        let text = '';
        for (let j = 0 ; j < i ; j++){
            text  += '1' ;
        }
        something.appendChild(document.createTextNode(text));
        triangle.appendChild(something);
        console.log(text);
    }
}
triangle();