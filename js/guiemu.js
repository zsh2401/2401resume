var _guiArea = null;
function guiemu_init(guiArea)
{
    _guiArea = guiArea;
}
function guiemu_launch(callback){
    sysemu_writeLine("分割式图形界面启动中...");
    sysemu_writeLine("初始化模拟GPU驱动");
    sysemu_writeLine("构建基础环境");
    sysemu_writeLine("30%");
    after1Sec(()=>{
        sysemu_writeLine("95%");
        after2Sec(()=>{
            sysemu_writeLine("开始展示");
            guiemu_set("<p>Welcome to HOMO OS LGUI SYSTEM</p>");
        });
    });
}
function guiemu_set(content)
{
    _guiArea.innerHTML = content;
}
