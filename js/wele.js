/*
wele.js
用于对WaitingForShow元素的管理与控制
@zsh2401
Jun 15,2019
*/
const WELE_PREFIX=  STR_WELE_PREFIX;
var wfsEles = {};
function wele_init(){

    var elements = document.getElementsByTagName("*");
    for(let i =0;i<elements.length;i++){
       if(elements[i].id.startsWith(WELE_PREFIX)){
           var id = elements[i].id
           var wid = id.slice(2,id.length);
            wele_set(wid,elements[i]);
            if(!LAYOUT_EDIT_MODE){
                wele_hide(wid);
            }
       }
    }
}
function wele_get(id){
    return wfsEles[id];
}
function wele_set(id,ele){
    wfsEles[id] = ele;
}
function wele_show(id){
    var ele = wele_get(id);
    var wns = ele.getAttribute("wns");
    if(wns == null)
    {
        ele.style.visibility="visible";
    }else{
        $(ele).show();
    }
    
}
function wele_hide(id){
    var ele = wele_get(id);
    var wns = ele.getAttribute("wns");
    if(wns == null)
    {
        ele.style.visibility="hidden";
    }else{
        $(ele).hide();
    }
}
function wele_getJQuery(id){
    return $(wele_get());
}
function wele_showInnerHTML_OBO(id,callback,_intervalTime=100)
{
    wele_show(id);
    var ele = wele_get(id);
    var buffer = ele.innerHTML;
    ele.innerHTML="";
    var index = 0;
    var interval = setInterval(()=>{
        ele.innerHTML += buffer[index];
        index++;
        if(index == buffer.length){
            clearInterval(interval);
            if(callback != null){
                callback();
            }
        }
    },_intervalTime);
}
function wele_showInnerHTML_OBO_ARRAY(ids,callback,_intervalTime=100,index=0){
    if(index == ids.length)
    {
        if(callback != null)
        {
            callback();
        }
    }else{
        wele_showInnerHTML_OBO(ids[index],()=>{
            wele_showInnerHTML_OBO_ARRAY(ids,callback,_intervalTime,++index);
        },_intervalTime);
    }
}