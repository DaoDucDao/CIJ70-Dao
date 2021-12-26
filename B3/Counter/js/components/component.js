import { counting } from "../Counting/Counting.js";
// create the clock class
class Clock {
    $clockContainer;
    $display;
    $start;
    $stop;
    $pause;
    $counter;
    $button;
    $intervalCounting;

    constructor(clockId){      // line 18   
        this.$button = 0;
        this.$counter = 0;
        //container
        this.$clockContainer = document.createElement('div');
        this.$clockContainer.id = clockId;// we put id in so everytime we create a new counter in the script, that counter's ID will automatically set to the name we set it
        this.$clockContainer.classList.add('myClock');
        //display
        this.$display = document.createElement('div');
        this.$display.textContent = '00:00';
        this.$display.classList.add ('mydisplay');
        // Start 
        this.$start = document.createElement('button');
        this.$start.textContent = 'Start';
        this.$start.classList.add ('btn', 'btn-primary', 'all-btn');
        this.$start.addEventListener('click', this.startFunction);
        //Pause
        this.$pause = document.createElement('button');
        this.$pause.textContent = 'Pause';
        this.$pause. classList.add('btn', 'btn-success', 'all-btn');
        this.$pause.addEventListener('click', this.pauseFunction);
        //Stop 
        this.$stop = document.createElement('button');
        this.$stop.textContent = 'Stop';
        this.$stop.classList.add('btn','btn-danger', 'all-btn');
        this.$stop.addEventListener('click', this.stopFunction);
    }

    renderClock (){
        this.$clockContainer.append(this.$display, this.$start, this.$pause, this.$stop);
        return this.$clockContainer;
    }
    startFunction = () =>{
        this.$button++;
        if(this.$button ===1 ){
            this.$intervalCounting = setInterval(() =>{
                    this.$counter++;
                    this.$display.textContent = counting (this.$counter);
                },1000)
        }
    }
    stopFunction = () =>{
        clearInterval(this.$intervalCounting);
        this.$counter = 0;
        this.$button = 0;
        this.$display.textContent = '00:00';
    }
    pauseFunction = () =>{
        clearInterval(this.$intervalCounting);
        this.$button = 0;
    }
}
export default Clock;