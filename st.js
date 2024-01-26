let stratBt=document.getElementById('start');
let pauseBt=document.getElementById('pause');
let resetBt=document.getElementById('reset');

let hour=0;
let min=0;
let sec=0;
let count=0;
let timer=null;

function start(){
        count++;
        if (count==100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hour++;
            min=0;
        }
       
    
    document.getElementById('hours').innerHTML=formatTime(hour);
    document.getElementById('minutes').innerHTML=formatTime(min);
    document.getElementById('seconds').innerHTML=formatTime(sec);
    document.getElementById('milli').innerHTML=formatTime(count);
}

// FUNCTION TO START THE WATCH

function startWatch(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(start,10);
}
//FUNCTION TO STOP WATCH

function stopWatch(){
    if (timer!=null){
        clearInterval(timer);
    }
}

//FUNCTION TO RESET WATCH

function resetWatch(){
    clearInterval(timer);
    hour=0;
    sec=0;
    count=0;
    min=0;
    document.getElementById('hours').innerHTML="00";
    document.getElementById('minutes').innerHTML="00";
    document.getElementById('seconds').innerHTML="00";
    document.getElementById('milli').innerHTML="00";
}

//FUNCTION TO SET TIME FORMAT

function formatTime(time){
    return time<10? '0'+time:time;
}