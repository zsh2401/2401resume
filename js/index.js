/*
cursor.js
提供与index主页控件直接相关的js方法以及引导等
@zsh2401
Jun 14,2019
*/
var vm = null;
function init(){
    hljs.initHighlightingOnLoad();
    cursor_init();
    initVue();
}
function start(){
    cursor_enable(document.getElementById("cursor"));
    // nextStep();
}
function initVue(){
    vm = new Vue({
        el:"#vueapp",
        data:{
            outputs:[],
        }
    });
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
    $("#guiHTML").html(html);
}
function guiLayout(){
    $("#guiHTML").show();
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