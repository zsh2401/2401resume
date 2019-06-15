/*
index.js
提供与index主页控件直接相关的js方法以及引导等
@zsh2401
Jun 14,2019
*/
var vm = null;
const LAYOUT_DEBUG_MODE = true;
function init(){
    hljs.initHighlightingOnLoad();
    cursor_init();
    initVue();
    wele_init();
    setInterval(()=>{
        scrollToEnd();
    },100);
    if(LAYOUT_EDIT_MODE){
        $("#gui").show();
        $("#idle").show();
        $("#welcome").show();
        $("#resume").show();
    }
}
function start(){
    cursor_enable(document.getElementById("cursor"));
    if(!LAYOUT_EDIT_MODE){
        nextStep();
    }
}
function initVue(){
    vm = new Vue({
        el:"#vueapp",
        data:{
            outputs:[],
        }
    });
}
function scrollToEnd(){
    var ele = document.getElementById("vueapp");
    ele.scrollTop = ele.scrollHeight;
}
function nextOutputPartion(){
    var index = vm.$data.outputs.length;
    return index;
}
function setOutputPartion(index,html){
    vm.$set(vm.$data.outputs,index,html);
}
function readOutputPartion(index){
    return vm.$data.outputs[index];
}
function clearPartion(){
    vm.$data.outputs = [];
}
function setGUI(html){
    $("#gui").html(html);
}
function guiLayout(){
    $("#gui").show();
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
window.onload = ()=>{
    init();
    start();
};