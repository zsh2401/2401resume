/*
onebyone.js
用于实现逐个输入,其它代码中的OBO也正是代表的one by one逐个输入
@zsh2401
Jun 14,2019
*/

var __OBO_INTERVAL = 100;
function obo_input(ele,text,callback){
    var inputIndex = 0;
    var interval = setInterval(()=>{
        next(inputIndex,ele,text);
        inputIndex++;
        if(inputIndex == text.length){
            clearInterval(interval);
            if(callback != null){
                callback();
            }
        }
    },__OBO_INTERVAL);
}
function obo_eleInput(ele,callback){
    var text = ele.innerHTML;
    ele.innerHTML = "";
    obo_input(ele,text,callback);
}
function next(crtIndex,ele,text)
{
    ele.innerHTML += text[crtIndex];
}
