import React from 'react';

var xmlHttp,url,code=" ";

function createXmlHttp() {
    //根据window.XMLHttpRequest对象是否存在使用不同的创建方式
    if (window.XMLHttpRequest) {
       xmlHttp = new XMLHttpRequest();                  //FireFox、Opera等浏览器支持的创建方式
    } else {
       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");//IE浏览器支持的创建方式
    }
}

//将远程网页源代码写入页面文字区域
function writeSource() {
    if (xmlHttp.readyState == 4) {
        code = xmlHttp.responseText;
    }
}

function getSource(url){
    createXmlHttp();                                            //创建XMLHttpRequest对象  
    xmlHttp.open("GET", url, false);                            //改为同步的，异步的无法将code赋值
    xmlHttp.onreadystatechange = writeSource;                   //设置回调函数
    xmlHttp.send(null);
}
//直接通过XMLHttpRequest对象获取远程网页源代码
export default function getCode(url) {
    getSource(url);
    return code;
}