/*
cursor.js
实现指针效果
@zsh2401
Jun 13,2019
*/
var __INTERVAL = 500;
var __cursors = [];
function cursor_init(){
    setInterval(cursor_do,__INTERVAL);
}
function cursor_do(){
    for(var i =0;i<__cursors.length;i++){
        var crt = __cursors[i];
        cursor_switchStatus(crt);
    }
}
function cursor_switchStatus(crt){
    if(crt.innerHTML != "_")
    {
        crt.innerHTML = "_"
    }else{
        crt.innerHTML = "";
    }
}
function cursor_enable(cursor){
    __cursors[__cursors.length] = cursor;
}
function cursor_disable(cursor){
    var index = __cursors.indexOf(cursor);
    __cursors.splice(index, 1);
    cursor.style.display="none";
}