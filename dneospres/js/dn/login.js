/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.sp.login={init:function(){desknets.sp.mobjPages["login-page"]=desknets.sp.login.LoginPage;desknets.sp.mobjPages["d-logindialog-page"]=desknets.sp.login.LoginDialogPage;desknets.sp.initSetEvents()},};desknets.page(desknets.sp.login,"LoginPage",desknets.sp.ComPage,{show:function(){var b=this;b.callBase("show");setTimeout(function(){b.$mRootElement.find(".login-dialog").trigger("click")},200)},});desknets.page(desknets.sp.login,"LoginDialogPage",desknets.sp.ComPage,{init:function(c){var b=this;b.callBase("init",c);b.$mRootElement.find("#login-exec").click(function(d){b._beginLogin();d.preventDefault()})},_beginLogin:function(){var d=this;var f={cmd:"splogin",UserID:a("#UserID").val(),_word:a("#password").val()};var i=a("#jlogin-loginaction").val();if(!neo.isSet(i,{blank:false})){i=desknets.sp.getUrl(desknets.sp.MODULE_SPLOGIN)}else{if(i.indexOf("/")==0){var h;var c;var e;var b;h=desknets.msUrl.indexOf("//");if(h>=0){c=desknets.msUrl.substring(0,h+2);e=desknets.msUrl.substring(h+2);h=e.indexOf("/");if(h>=0){b=c+e.substring(0,h)}else{b=c+e+"/"}i=b+i}}else{if(i.indexOf("http://")==0||i.indexOf("https://")==0){}else{i=desknets.msUrl+i}}}var g={url:i,data:f,success:function(k,j,l){d._login(k);location.reload()}};desknets.sp.ajax.rest(g)},_login:function(d){var c="";var b=new Date();if(d.sidsaveterm!="0"&&!isNaN(d.sidsaveterm)){c=neo.dateTime.moveDate(b,Number(d.sidsaveterm))}else{c=new Date(2050,11,31,23,59,59)}desknets.saveCookie(desknets.sp.COOKIENAME_MBSESSION_ID,d.rssid,{expires:c});desknets.saveCookie(desknets.COOKIENAME_STOKEN,d.STOKEN,{expires:c});if(neo.isSet(d.dnzMbSv,{blank:false})){desknets.saveCookieToDisk(desknets.sp.COOKIENAME_MBLOGIN_SAVE,d.dnzMbSv)}desknets.saveCookieToDisk(desknets.COOKIENAME_LOGIN_INFO,d.id);neo.storage.local(desknets.sp.COOKIENAME_MAILACCOUNTID,null)}});desknets.sp.login.init()})(jQuery);