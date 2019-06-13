var _indexofstep = 8;
function nextStep(){
     eval("step" + _indexofstep + "()");
     _indexofstep++;
}
function step1(){
    sysemu_writeLineWithInterval([
        "<span style='color:orange'>Homo OS(TM)</span> is launching now...",
        "Checking disk status",
        "Disk Status: <span style='color:green'>[OK]</span>",
        "Checking ram status",
        "15MB used/ 128GB total",
        "Ram Status: <span style='color:green'>[OK]</span>",
        "---------------------------------",
    ],nextStep);
}
function step2(){
    setTimeout(function(){
        sysemu_writeLineWithInterval(
            [        "Checking other hardware system",
            "ZSH Bridge: <span style='color:green'>[OK]</span>",
            "Cal System: <span style='color:green'>[OK]</span>",
            "The Wandering Earth Management System: <span style='color:green'>[OK]</span>",
            "Homo I18 Support: <span style='color:green'>[OK]</span>",
            "Homo Language Runtime: <span style='color:green'>[OK]</span>",
            "Trump: <span style='color:red'>[DEAD]</span>",
            "All International Friends: <span style='color:lightgreen'>[GOOD]</span>",
            "---------------------------------"]
        ,nextStep);
    },1000);
}
function step3(){
    setTimeout(function(){
        sysemu_writeLineWithInterval([
            "Initing Chinese Envoirment...",
            "初始化中文系统: <span style='color:lightgreen'>[OK]</span>",
            "----------------------------",
        ],nextStep);
    },2000);
}
function step4(){
    sysemu_writeLine("您好,欢迎来到鸿蒙OS™")
    sysemu_writeLine("现在是" + new Date());
    sysemu_writeLine("您的权限为<span style='color:green'>-User(Group1)-</span>");
    sysemu_finish();
    timer_after1Sec(nextStep);
}
function step5()
{
    setTimeout(function(){
        sysemu_inputCommand("ls",function(){
            sysemu_writeLine("目录内容:/users/zsh2401/");
            sysemu_writeLine("7个文件,2个文件夹");
            sysemu_writeLine("<span style='color:green'>[D]</span> 鸿蒙开发文档");
            sysemu_writeLine("<span style='color:green'>[D]</span> 鸿蒙Office安装");
            sysemu_writeLine("PHP鸿蒙适配指南.pdf");
            sysemu_writeLine("流浪地球[4k].mp4");
            sysemu_writeLine("英雄联盟.homoexe");
            sysemu_writeLine("张顺泓的故事.pdf");
            sysemu_writeLine("test.txt");
            sysemu_writeLine("wow.png");
            sysemu_writeLine("流浪地球法案.pdf");
            sysemu_finish();
            nextStep();
        });
    },1000);
}
function step6(){
    setTimeout(function(){
        sysemu_inputCommand("cat test.txt",function(){
            sysemu_writeLine("HELLO WORLD!");
            sysemu_finish();
            nextStep();
        });
    },2000);
}
function step7(){
    setTimeout(function(){
        sysemu_inputCommand("view wow.png",function(){
            sysemu_writeLine("<span style='color:red'>警告</span> 图形界面未启动,无法浏览:");
            sysemu_writeLine("wow.png");
            sysemu_writeLine("通过<span style='color:green'>lgui launch</span>启动分割式图形界面");
            sysemu_finish();
            setTimeout(()=>{
                sysemu_inputCommand("gui launch",function(){
                    sysemu_writeLine("不支持完整gui模式,请尝试<span style='color:green'>lgui launch</span>");
                    sysemu_finish();
                    setTimeout(()=>{
                        sysemu_inputCommand("lgui launch",function(){
                            nextStep();
                        }) 
                    },1000);
                });
            },1000);
        });
    },2000);
}
function step8(){
    guiemu_launch(nextStep);
}
function step9(){
    sysemu_inputCommand("resume head wow.png",function(){
        $("#head").html("<img src='https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1999813445,981034292&fm=58&bpow=404&bpoh=600'>");
        sysemu_finish();
        nextStep();
    });
}
function step10(){
    sysemu_inputCommand("resume simple info:zsh2401",function(){
        var dom = guiemu_getGUIDom();
        var t = $(dom);
        sysemu_finish();
    });
}
