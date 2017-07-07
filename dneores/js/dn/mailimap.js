/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){(function(b){desknets.mailimap={MODULE_API_MAILIMAP:"zrmailimap",PAGE_MAILIMAPLIST:"mailimaplist",init:function(){var c=b("#jco-pv-funcid").val();desknets.pageframe.setFuncSel(c);if(c==desknets.mailimap.PAGE_MAILIMAPLIST){desknets.mailimap.mailindex.init()}}}})(jQuery);(function(b){desknets.page(desknets.mailimap,"mailindex",desknets.PageBase,{init:function(){var e=(b("#jmail-logcntflg").val()=="1");var c;var d=location.href;d=d.substr(0,(d+"#").indexOf("#"));var f=desknets.splitParam(d);if(!!f&&neo.isSet(f.key,{blank:false})){c=f.key}b(".jmail-open").click(function(g){g.preventDefault();desknets.webmailimap.openMailSearchList(c,e)});if(neo.isSet(c,{blank:false})){desknets.webmailimap.openMailSearchList(c,e)}else{desknets.webmailimap.openMailList(e)}}})})(jQuery);app.addInitialAction(function(){desknets.mailimap.init()})})(jQuery);