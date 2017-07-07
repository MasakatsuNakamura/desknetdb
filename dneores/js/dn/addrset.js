/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){(function(b){desknets.addrset={MODULE_API_ADDR:"zrmail",PAGE_ADDRSETADMIN:"addrsetadmin",PAGE_ADDRSETGEN:"addrsetgen",CMD_ADDRSETGEN:"addrsetcmdgen",PAGE_ADDRSETMANAGER:"addrsetmanager",CMD_ADDRSETMANAGER:"addrsetcmdmanager",init:function(){var c=b("#jco-pv-funcid").val();desknets.pageframe.setFuncSel(c);if(c==desknets.addrset.PAGE_ADDRSETGEN){desknets.addrset.addrsetgen.init()}else{if(c==desknets.addrset.PAGE_ADDRSETMANAGER){desknets.addrset.addrsetmanager.init()}}}}})(jQuery);(function(b){desknets.page(desknets.addrset,"addrsetgen",desknets.PageSet,{_getNextCmd:function(){return desknets.addrset.PAGE_ADDRSETADMIN}})})(jQuery);(function(b){desknets.page(desknets.addrset,"addrsetmanager",desknets.PageAdmin,{_getSetCondition:function(){return false},_getNextCmd:function(){return desknets.addrset.PAGE_ADDRSETADMIN}})})(jQuery);app.addInitialAction(function(){desknets.addrset.init()})})(jQuery);