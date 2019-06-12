var eleInputLine = null;
function start(){
    __drawHighLight();
    cursor_enable(document.getElementById("cursor"));
    obo_input(eleInputLine,"There will be a day");
}
function __initlibs(){
    hljs.initHighlightingOnLoad();
    cursor_init();
}
function __initConstantEle(){
    eleInputLine = document.getElementById("commandLine");
}
function nextStep(){}
function __inputNextChar(){}
function __nextLine(){}
function __drawHighLight(){
    var codeBlocks = document.getElementsByTagName("code");
    for(var i = 0;i<codeBlocks.length;i++){
        hljs.highlightBlock(codeBlocks[i]);
    }
}
function drawHighlight(domEle){
    hljs.highlightBlock(domEle);
}
function __executeCurrentLine(){}
window.onload = ()=>{
    __initlibs();
    __initConstantEle();
    start();
};