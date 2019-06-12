var __displayArea = null;
var __inputArea = null;
var __INPUT_INTERVAL = 200;
function sysemu_init(outputArea,inputArea){
    __displayArea = outputArea;
    __inputArea = inputArea;
}
function sysemu_writeLine(text){
    __displayArea.innerHTML += "<p class='outputLine'>" + text + "</p>";
}
function sysemu_inputCommand(text,callback){
    obo_input(inputArea,text,function(){
        setTimeout(function(){
            inputArea.innerHTML = "";
            sysemu_writeLine("<span class='userName'>zsh2401@/users/zsh2401/$</span><span class='inputArea'> " + text + "</span>");
            if(callback != null){
                callback();
            }
        },400)
    });
}
function sysemu_writeLineOBO(text,callback){
    var randomId = Math.random();
    var domHtml = "<p id='"+ randomId + "' class='outputLine'></p>";
    __displayArea.innerHTML += domHtml;
    var dom = document.getElementById(randomId);
    console.log(dom);
    var inputIndex = 0;
    var interval = setInterval(()=>{
        dom.innerHTML += text[inputIndex];
        inputIndex++;
        if(inputIndex == text.length){
            clearInterval(interval);  
            if(callback != null){
                callback();
            }
        }
    },100);
}
function sysemu_clear(){
    __displayArea.innerHTML = "";
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