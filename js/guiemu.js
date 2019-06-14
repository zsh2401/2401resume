/*
guiemu.js
用于控制和模拟gui界面
@zsh2401
Jun 14,2019
*/
var _setter = null;
function guiemu_launch(callback){
    sysemu_writeLine("分割式图形界面启动中...");
    sysemu_writeLine("初始化模拟GPU驱动");
    sysemu_writeLine("构建基础环境");
    sysemu_writeLine("30%");
    timer_after1Sec(()=>{
        sysemu_writeLine("95%");
        timer_after2Sec(()=>{
            sysemu_writeLine("开始展示");
            guiLayout();
            $("#guiWelcome").show();
            setTimeout(()=>{
                $("#guiWelcome").hide();
                $("#guiIdle").show();
                sysemu_finish();
                if(callback != null){
                    callback();
                }
            },7000);
        });
    });
}
function guiemu_set(content)
{
    setGUI(content);
}
function guiemu_getGUIDom(){
    return document.getElementById("guiHTML");
}
