/*
index.js
提供与index主页控件直接相关的js方法以及引导等
@zsh2401
Jun 14,2019
*/
var vm = null;
const LAYOUT_DEBUG_MODE = true;
var bgm =null;
function click(){
    bgm.play();
}
function init(){
    hljs.initHighlightingOnLoad();
    cursor_init();
    initVue();
    wele_init();
    wele_show("tip");
    bgm = document.getElementById("bgmusic");
    bgm.onplaying = ()=>{
        wele_hide("tip");
        cursor_enable(document.getElementById("cursor"));
        if(!LAYOUT_EDIT_MODE){
            nextStep();
        }
    }
    bgm.volume = 0.35;
    setTimeout(()=>{
        bgm.play();
    },3000);
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
function initVue(){
    vm = new Vue({
        el:"#vueapp",
        data:{
            outputs:[],
        }
    });
}
function pageScrollToEnd(){
    $('body').animate( {scrollTop: $(document).height()}, 500);
}
function pageScrollToTop(){
    $('body').animate( {scrollTop: 0}, 500);
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
    wele_show("gui");
}
function fullGuiLayout(){
    $("#vueapp").hide();
    $("#w-gui").attr("class","col-md-12");
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
};