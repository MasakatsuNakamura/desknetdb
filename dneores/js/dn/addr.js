/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){(function(b){desknets.addr={MODULE_API_ADDR:"zrmail",PAGE_ADDRINDEX:"addrindex",init:function(){var c=b("#jco-pv-funcid").val();desknets.pageframe.setFuncSel(c);if(c==desknets.addr.PAGE_ADDRINDEX){desknets.addr.addrindex.init()}}}})(jQuery);(function(b){desknets.page(desknets.addr,"addrindex",desknets.PageBase,{init:function(){var c=this;var g=(b("#jaddr-logcntflg").val()=="1");var d;var f=location.href;f=f.substr(0,(f+"#").indexOf("#"));var h=desknets.splitParam(f);if(!!h&&neo.isSet(h.key,{blank:false})){d=h.key}var e=c._getMailObject();b(".jaddr-open").click(function(i){i.preventDefault();e.openAddressSearchList(d,g)});if(neo.isSet(d,{blank:false})){e.openAddressSearchList(d,g)}else{e.openAddressList(g)}},_getMailObject:function(){var c=b("#jaddr-addrtarget").val();if(c=="2"){return desknets.webmailimap}return desknets.webmail}})})(jQuery);app.addInitialAction(function(){desknets.addr.init()})})(jQuery);