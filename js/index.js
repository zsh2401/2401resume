var inputArea = null;
var outputArea = null;
var guiArea = null;
function init(){
    inputArea = document.getElementById("inputArea");
    outputArea = document.getElementById("textOutputArea");
    guiArea = document.getElementById("guiArea");
    hljs.initHighlightingOnLoad();
    cursor_init();
    sysemu_init(outputArea,inputArea);
    guiemu_init(guiArea);
}
function after1Sec(callback){
    setTimeout(callback,1000);
}
function after2Sec(callback){
    setTimeout(callback,2000);
}
function afterHalfSec(callback){
    setTimeout(callback,500);
}
function start(){
    cursor_enable(document.getElementById("cursor"));
    step1();
    // gotoLaunchingGUI();
}
function highlightAllCode(){
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
    init();
    start();
};