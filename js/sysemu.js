/*
sysemu.js
用于模拟标准输出输入命令行
@zsh2401
Jun 14,2019
*/
var __INPUT_INTERVAL = 200;
var sources = [];
function sysemu_writeLine(text){
    var index = nextOutputPartion();
    sources[index] = text;
    setOutputPartion(index,"<span>"+ text +"</span><br>");
    return index;
}
function sysemu_finish(){
    sysemu_writePrefix();
}
function sysemu_write(text){
    var index = nextOutputPartion();
    sources[index] = text;
    setOutputPartion(index,"<span>"+ text +"</span>");
    return index;
}
function sysemu_writePrefix(){
   return sysemu_write("<span style='color:lightgreen'>zsh2401@/users/zsh2401/$</span> ");
}
function sysemu_inputCommand(text,callback){
    timer_start(text.length,(index)=>{
        sysemu_write(text[index]);
    },()=>{
        if(callback != null){
            sysemu_write("<br>");
            callback();
        }
    });
}
function sysemu_clear(){
    clearPartion();
}
function sysemu_writeLineWithInterval(texts,callback)
{
    var crtIndex = 0;
    var interval = setInterval(function(){
        sysemu_writeLine(texts[crtIndex]);
        crtIndex++; 
        if(crtIndex == texts.length){
            clearInterval(interval);
            if(callback != null){
                callback();
            }
        }
    },__INPUT_INTERVAL)
}