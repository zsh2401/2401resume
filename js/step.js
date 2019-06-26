/*
step.js
调用其它函数库,一步步完成所有效果
@zsh2401
Jun 15,2019
*/
var _indexofstep = FIRST_STEP;
function nextStep(delay){
    if(delay == null || delay <0){
        executeNextStep();
    }else{
        setTimeout(()=>{
            executeNextStep();
        },delay)
    }
}
function executeNextStep(){
    eval("step" + _indexofstep + "()");
    _indexofstep++;
}
function step1(){
    timer_start_dtimer();
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
                    sysemu_writeLine("<span class='warning'>不支持完整gui模式</span>");
                    sysemu_writeLine("请尝试<span style='color:green'>lgui launch</span>");
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
    guiemu_launch(()=>{
        setTimeout(()=>{
            nextStep();
        },3000);
    });
}
function step9(){
    sysemu_inputCommand("resume mode",function(){
        sysemu_writeLine("<span class='sender'>[LGUI]</span>:正在切换到简历模式");
        sysemu_writeLine("<span class='sender'>[Resume Generator]</span>: 简历生成器V2.3启动");
        setTimeout(()=>{
            sysemu_writeLine("进入简历编辑模式");
            wele_hide("idle");
            wele_show("resume");
            wele_show("details");
            sysemu_finish();
            nextStep(1000);
        },2000);
    });
}
function step10(){
    sysemu_inputCommand("resume profile zsh2401",function(){
        sysemu_writeLine("正在查询zsh2401的简历信息...");
        setTimeout(()=>{
            sysemu_writeLine("查询完毕,姓名:张顺泓");
            sysemu_writeLine("结果已缓存为默认设置 [OK]");
            sysemu_finish();
            nextStep();
        },2500);
    });
}
function step11(){
    sysemu_inputCommand("resume display head",function(){
        sysemu_writeLine("显示头像");
        wele_show("head");
        wele_showInnerHTML_OBO_ARRAY(["cname","ename","want"],()=>{
            sysemu_finish();
            nextStep(500);
        });
    });
}
function step12(){
    sysemu_inputCommand("resume display edu",function(){
        sysemu_writeLine("显示教育信息");
        timer_after1Sec(()=>{
            wele_show("edu");
            wele_showInnerHTML_OBO_ARRAY(["edu-title","edu-period","edu-pro","edu-where"],()=>{
                sysemu_finish();
                nextStep(500);
            });
        });
    });
}
function step13()
{
    sysemu_inputCommand("resume display cer",function(){
        sysemu_writeLine("显示获奖情况");
        timer_after1Sec(()=>{
            wele_show("cer");
            wele_showInnerHTML_OBO_ARRAY(["cer-title","cer-ncre3","cer-cet4","cer-rkm"],()=>{
                sysemu_finish();
                nextStep(1500);
            });
        });
    });
}
function step14(){
    sysemu_inputCommand("resume display contact",()=>{
        sysemu_writeLine("显示联系信息");
        wele_show("contact");
        pageScrollToEnd();
        wele_showInnerHTML_OBO_ARRAY(["contact-title","contact-tel","contact-mail","contact-qq","contact-wechat","contact-website"],()=>{
            sysemu_finish();
            nextStep(1500);
        });
    });
}
function step15(){
    sysemu_inputCommand("resume display skills",()=>{
        sysemu_writeLine("显示技能信息");
        pageScrollToTop();
        wele_show("skills");
        wele_show("skills-title");
        nextStep(1500);
    });
}
function step16(){
    wele_show("skill-csharp");
        wele_showInnerHTML_OBO("skill-csharp-title");
        wele_showInnerHTML_OBO("skill-csharp-1");
        wele_showInnerHTML_OBO("skill-csharp-2");
        setTimeout(()=>{
            nextStep(1500);
    },2000);
}
function step17(){
    wele_show("skill-java");
        wele_showInnerHTML_OBO("skill-java-title");
        wele_showInnerHTML_OBO("skill-java-1");
        wele_showInnerHTML_OBO("skill-java-2");
        setTimeout(()=>{
            nextStep(300);
    },2000);
}
function step18(){
    wele_show("skill-web");
        wele_showInnerHTML_OBO("skill-web-title");
        wele_showInnerHTML_OBO("skill-web-1");
        wele_showInnerHTML_OBO("skill-web-2");
        setTimeout(()=>{
            sysemu_finish();
            nextStep(300);
    },2000);
}
function step19(){
    sysemu_inputCommand("resume display jhistory",()=>{
        sysemu_writeLine("显示获奖历史");
        wele_show("j-history");
        wele_show("j-title");
        nextStep(2000);
    });
}
function step20(){
    wele_show("j-1");
    wele_showInnerHTML_OBO("j-date-1");
    wele_showInnerHTML_OBO("j-name-1");
    wele_showInnerHTML_OBO("j-tip-1");
    setTimeout(()=>{
        nextStep(2000);
    },2000);
}
function step21(){
    wele_show("j-2");
    wele_showInnerHTML_OBO("j-date-2");
    wele_showInnerHTML_OBO("j-name-2");
    wele_showInnerHTML_OBO("j-tip-2",()=>{
        sysemu_finish();
        nextStep(2000);
    });
}
function step22(){
    sysemu_inputCommand("resume display intr",()=>{
        sysemu_writeLine("显示简介");
        wele_show("introduction");
        wele_show("introduction-title");
        pageScrollToEnd();
        wele_showInnerHTML_OBO_ARRAY(["introduction-content-1","introduction-content-2","introduction-content-3"],()=>{
            sysemu_finish();
            nextStep(2000);
        },50);
    });
}
function step24(){
    sysemu_inputCommand("resume display cover",()=>{
        sysemu_writeLine("显示封面");
        wele_show("cover");
        pageScrollToTop();
        sysemu_finish();
        nextStep(2000);
    });
}
function step23(){
    sysemu_inputCommand("resume display letter",()=>{
        sysemu_writeLine("显示自荐信");
        wele_show("self-recommendation");
        pageScrollToEnd();
        sysemu_finish();
        nextStep(2000);
    });
}
function step25(){
    sysemu_inputCommand("lgui setbg ./media/img/bg.jpg",()=>{
        sysemu_writeLine("设置背景.....");
        document.body.style.background = "url(\'./media/img/bg.jpg\')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        nextStep(3000);
    }); 
}
function step26(){
    sysemu_inputCommand("resume fullscreen",()=>{
        sysemu_writeLine("全面展示..");
        sysemu_writeLine("加载中");
        sysemu_writeLine("<h1><i>再见!太阳系<i></h1>");
        nextStep(4500);
    }); 
}
function step27(){
    fullGuiLayout();
    wele_show("topbtns");
    timer_stop_dtimer();
   var ms = timer_get_d_millseconds();
   console.log("used " + (ms/1000) +"s");
}