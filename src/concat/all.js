/*! grunttest1 2016-04-08 */
function Ajax(){this.xmlHttp=null,window.XMLHttpRequest?this.xmlHttp=new XMLHttpRequest:window.ActiveXObject&&(this.xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")),this.ajaxOpen=function(a,b){this.xmlHttp.open(a,b,!0)},this.ajaxSetHeader=function(){this.xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")},this.bindReadyState=function(a){this.xmlHttp.onreadystatechange=a},this.ajaxSend=function(a){this.xmlHttp.send(a)}}
/*! grunttest1 2016-04-08 */
function test(){console.log("哈哈测试")}