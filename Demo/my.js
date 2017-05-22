/**
 * Created by weiyongle on 2016/12/4.
 */
function $(id) {
    return document.getElementById(id);
}
function  scroll() {
    if(window.pageXOffset != null){//注意这里都是window
        return {
            top:window.pageYOffset,
            left:window.pageXOffset
        }
    }
    else if(document.compatMode == "CSS1Compat"){//检测是否是怪异模式
        //如果不是怪异模式
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }

    }
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }
}
/**
 * Created by andy on 2015/11/19.
 */
/*function $(id) {return document.getElementById(id);}
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}*/