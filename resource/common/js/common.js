/**
 * 模块化
 * true :   显示
 * false:   隐藏
 */
module_key = {
    'head': true,
    'tail': true,
    'main': true,
    'ad_module': true,
    'login': true,
    'register': true
};

/**
 * 表单验证
 */

/**
 * cookie
 */
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
/**
 * 提示框
 */
function msgTip(msg) {

}
/**
 * 确认
 */
function confirmMsg(msg, callBack) {

    callBack();
}

/**
 * url 取参
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
};



/**
 * 头尾 
 */
function loadHead() {
    var headUrl = './resource/common/html/head.html'
    $.get(headUrl, {}, function (head) {
        $('.common_head').append(head);
        $('.common_head .home').bind('click', function () {
            location.href = 'index.html';
        });
        $('.common_head .login').bind('click', function () {
            location.href = 'login.html';
        });
        $('.common_head .register').bind('click', function () {
            location.href = 'login.html?register=true';
        });
        $('.common_head .contact').bind('click', function () {
    
        });
        $('.common_head .user_info').bind('click', function () {
    
        });
    });  
}
function loadTail() {
    var tailUrl = './resource/common/html/tail.html';
    $.get(tailUrl, {}, function (tail) {
        $('.common_tail').append(tail);
    });
}


// 初始化
$(function () {
    loadHead();
    loadTail();
})