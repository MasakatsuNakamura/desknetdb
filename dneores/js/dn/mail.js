/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){(function(b){desknets.mail={MODULE_API_MAIL:"zrmail",PAGE_MAILLIST:"maillist",init:function(){var c=b("#jco-pv-funcid").val();desknets.pageframe.setFuncSel(c);if(c==desknets.mail.PAGE_MAILLIST){desknets.mail.mailindex.init()}}}})(jQuery);(function(b){desknets.page(desknets.mail,"mailindex",desknets.PageBase,{init:function(){var e=(b("#jmail-logcntflg").val()=="1");var c;var d=location.href;d=d.substr(0,(d+"#").indexOf("#"));var f=desknets.splitParam(d);if(!!f&&neo.isSet(f.key,{blank:false})){c=f.key}b(".jmail-open").click(function(g){g.preventDefault();desknets.webmail.openMailSearchList(c,e)});if(neo.isSet(c,{blank:false})){desknets.webmail.openMailSearchList(c,e)}else{desknets.webmail.openMailList(e)}}})})(jQuery);app.addInitialAction(function(){desknets.mail.init()})})(jQuery);