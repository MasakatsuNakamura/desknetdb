/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.agentset={PAGE_AGENTSETADMIN:"agentsetadmin",PAGE_AGENTINDEX:"agentindex",init:function(){var b=a("#jco-pv-funcid").val();desknets.pageframe.setFuncSel(b);desknets.hashobserver.init(desknets.agentset);if(b=="agentpsetgen"){desknets.agentset.agentpsetgen.init()}else{if(b=="agentsetadmin"){desknets.agentset.agentsetadmin.init()}else{if(b=="agentsetgen"){desknets.agentset.agentsetgen.init()}}}}};desknets.page(desknets.agentset,"agentpsetgen",desknets.PageSet,{_getNextCmd:function(){return desknets.agentset.PAGE_AGENTINDEX}});desknets.page(desknets.agentset,"agentsetadmin",desknets.PageBase,{});desknets.page(desknets.agentset,"agentsetgen",desknets.PageSet,{_getNextCmd:function(){return desknets.agentset.PAGE_AGENTSETADMIN}});app.addInitialAction(function(){desknets.agentset.init()})})(jQuery);