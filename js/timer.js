/*
timer.js
一些关于时间的函数
@zsh2401
Jun 14,2019
*/
var __TIMER_INTERVAL = 200;
function timer_after1Sec(callback){
    setTimeout(callback,1000);
}
function timer_after2Sec(callback){
    setTimeout(callback,2000);
}
function timer_afterHalfSec(callback){
    setTimeout(callback,500);
}
function timer_start(times,timer,finishHandler){
    var index = 0;
    var interval = setInterval(()=>{
        timer(index)
        index++;
        if(index == times){
            clearInterval(interval);
            if(finishHandler != null){
                finishHandler();
            }
        }
    },__TIMER_INTERVAL);
}