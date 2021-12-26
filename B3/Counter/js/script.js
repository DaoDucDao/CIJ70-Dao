import { counting } from "./Counting/Counting.js";
import Clock from "./components/component.js";
const container = document.getElementById('container');

const c1 = new Clock('c1');
const c2 = new Clock('c2');
const c3 = new Clock('c3');
const c4 = new Clock('c4');
const c5 = new Clock('c5');
container.append(c1.renderClock(),c2.renderClock(),c3.renderClock(),c4.renderClock(), c5.renderClock());

// create the All button
const containerAllButton = document.createElement('div');
containerAllButton.classList.add('myClock')
let allButton = [c1 , c2 , c3 , c4 , c5];

const startAllButton = document.createElement('button');
startAllButton.textContent = "Start All";
startAllButton.classList.add ('btn' , 'btn-primary', 'all-btn');
startAllButton.addEventListener('click', startAllFunction);

const stopAllButton = document.createElement('button');
stopAllButton.textContent = 'Stop All';
stopAllButton.classList.add('btn' , 'btn-success', 'all-btn');
stopAllButton.addEventListener ('click', stopAllFunction);

const pauseAllButton = document.createElement('button');
pauseAllButton.classList.add ('btn', 'btn-danger', 'all-btn');
pauseAllButton.textContent = 'Pause All';
pauseAllButton.addEventListener('click', pauseAllFunction);

// the all Functions

function startAllFunction (){
    allButton.forEach((e) =>{
        e.$button++;
        if (e.$button ===1){
            e.$intervalCounting = setInterval(()=>{
                e.$counter++;
                e.$display.textContent = counting(e.$counter);
            },1000)
        }
    })
}

function stopAllFunction () {
    allButton.forEach((e)=>{
        clearInterval (e.$intervalCounting);
        e.$display.textContent = '00:00';
        e.$button = 0;
        e.$counter = 0;
    })
}
function pauseAllFunction(){
    allButton.forEach((e)=>{
        clearInterval(e.$intervalCounting);
        e.$button = 0 ;
    })
}

containerAllButton.append(startAllButton, pauseAllButton, stopAllButton);
container.appendChild(containerAllButton);