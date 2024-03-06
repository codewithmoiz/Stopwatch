let numbers = document.querySelector('.container>h1');
let [seconds, minutes, hours] = [0,0,0]
let timer = null;

function stopWatchTimer(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    numbers.innerHTML = h+":"+m+":"+s;
}

function startTimer(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatchTimer, 1000);
};

document.querySelector('.start').addEventListener('click', startTimer);

document.querySelector('.stop').addEventListener('click', function(){
    clearInterval(timer);
});

document.querySelector('.restart').addEventListener('click', function(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0]
    numbers.innerHTML = '00:00:00'
});
