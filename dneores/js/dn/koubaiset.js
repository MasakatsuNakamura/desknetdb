/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.koubaiset={PAGE_KOUBAIINDEX:"koubaiindex",PAGE_KOUBAIPSETGEN:"koubaipsetgen",CMD_KOUBAIPSETGEN:"koubaipsetcmdgen",PAGE_KOUBAIMSETINDEX:"koubaimsetindex",CMD_KOUBAIMSETINDEX:"koubaimsetcmdindex",PAGE_KOUBAIMSETENTRY:"koubaimsetentry",CMD_KOUBAIMSETENTRY:"koubaimsetcmdentry",PAGE_KOUBAIMSETREFER:"koubaimsetrefer",CMD_KOUBAIMSETREFER:"koubaimsetcmdrefer",CMD_KOUBAIMSETDEL:"koubaimsetcmddel",CMD_KOUBAIMSETEND:"koubaimsetcmdend",PAGE_KOUBAIMSETORDER:"koubaimsetorder",CMD_KOUBAIMSETORDER:"koubaimsetcmdorder",CMD_KOUBAIMSETORDERENTRY:"koubaimsetcmdorderentry",CMD_KOUBAIMSETORDERDEL:"koubaimsetcmdorderdel",PAGE_KOUBAIMSETSHOHINENTRY:"koubaimsetshohinentry",CMD_KOUBAIMSETSHOHINENTRY:"koubaimsetcmdshohinentry",PAGE_KOUBAIMSETSHOHINREFER:"koubaimsetshohinrefer",CMD_KOUBAIMSETSHOHINREFER:"koubaimsetcmdshohinrefer",CMD_KOUBAIMSETSHOHINDEL:"koubaimsetcmdshohindel",CMD_KOUBAIMSETSHOHINSTS:"koubaimsetcmdshohinsts",CMD_KOUBAIMSETMVSHOHI:"koubaimsetcmdmvshohin",PAGE_KOUBAIMSETPRINT:"koubaimsetprint",CMD_KOUBAIMSETPRINT:"koubaimsetcmdprint",PAGE_KOUBAISETADMIN:"koubaisetadmin",PAGE_KOUBAISETGEN:"koubaisetgen",CMD_KOUBAISETGEN:"koubaisetcmdgen",PAGE_KOUBAISETMANAGER:"koubaisetmanager",init:function(){var b=a("#jco-pv-funcid").val();desknets.pageframe.setFuncSel(b);if(b==desknets.koubaiset.PAGE_KOUBAIPSETGEN){desknets.koubaiset.koubaipsetgen.init();desknets.koubai.subwin.init()}else{if(b==desknets.koubaiset.PAGE_KOUBAIMSETINDEX){desknets.hashobserver.init(desknets.koubaiset);desknets.koubaiset.koubaimsetindex.init()}else{if(b==desknets.koubaiset.PAGE_KOUBAISETGEN){desknets.koubaiset.koubaisetgen.init()}else{if(b==desknets.koubaiset.PAGE_KOUBAISETMANAGER){desknets.koubaiset.koubaisetmanager.init()}}}}}};desknets.page(desknets.koubaiset,"listleft",desknets.koubai.listleft,{_selectFirstItem:function(c){var b=this;if(c.find(".co-listview-item-inside.on").length>0){return}var d=desknets.paramanalyzer.getHashParams();var e="yoyaku";if(d.status=="0"){e="koubai-admin-reception"}else{if(d.status=="1"){e="koubai-admin-end"}else{e="koubai-admin"}}c.find("."+e).addClass("on")},_optTreeSelectFunc:function(d){var b=this;var c={};$a=d.find(".co-listview-item-inside:first");if($a.hasClass("koubai-admin")){c.cmd=desknets.koubaiset.PAGE_KOUBAIMSETINDEX;c.status="-1"}else{if($a.hasClass("koubai-admin-reception")){c.cmd=desknets.koubaiset.PAGE_KOUBAIMSETINDEX;c.status="0"}else{if($a.hasClass("koubai-admin-end")){c.cmd=desknets.koubaiset.PAGE_KOUBAIMSETINDEX;c.status="1"}}}desknets.paramanalyzer.setLocationHash(c);b._mboFirst=false}});desknets.page(desknets.koubaiset,"koubaipsetgen",desknets.PageSet,{_getNextCmd:function(){return desknets.koubai.PAGE_KOUBAIINDEX}});desknets.page(desknets.koubaiset,"koubaimsetindex",desknets.koubai.koubaimglist,{initLeftTree:function(){desknets.koubaiset.listleft.init(this.$mjListPage.find(".co-listview-left"))},initParamsFromHash:function(c){var b=this;var d="";d=c.cmd;if(!neo.isSet(d)||d==b._getListCmd()){b._hashUpdateListPage(c)}else{if(d==desknets.koubaiset.PAGE_KOUBAIMSETENTRY){desknets.koubaiset.koubaimsetentry.initPage(desknets.koubaiset.PAGE_KOUBAIMSETINDEX,"jkoubai-m-list-container")}else{if(d==desknets.koubaiset.PAGE_KOUBAIMSETREFER){var e=a("#jco-m-disp-page").find('input[name="pv-funcid"]');if(e.length>0&&e.val()==d){desknets.koubaiset.koubaimsetrefer._getListAjax(c.row)}else{desknets.koubaiset.koubaimsetrefer.initPage(desknets.koubaiset.PAGE_KOUBAIMSETINDEX,"jkoubai-m-list-container")}}else{if(d==desknets.koubaiset.PAGE_KOUBAIMSETORDER){if(a("#jkoubai-m-order-container").find(".jco-title").length>0){desknets.koubaiset.koubaimsetorder._getListAjax(c.row)}else{desknets.koubaiset.koubaimsetorder.initPage(desknets.koubaiset.PAGE_KOUBAIMSETREFER,"jco-m-disp-page")}}else{if(d==desknets.koubaiset.PAGE_KOUBAIMSETSHOHINENTRY){desknets.koubaiset.koubaimsetshohinentry.initPage(desknets.koubaiset.PAGE_KOUBAIMSETREFER,"jco-m-disp-page")}else{if(d==desknets.koubaiset.PAGE_KOUBAIMSETSHOHINREFER){desknets.koubaiset.koubaimsetshohinrefer.initPage(desknets.koubaiset.PAGE_KOUBAIMSETREFER,"jco-m-disp-page")}}}}}}},_getListCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETINDEX},_getListExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETINDEX},_getListAddCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETENTRY},_getListModCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETENTRY},_getListDispCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETREFER},_getDelExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETDEL}});desknets.page(desknets.koubaiset,"koubaimsetentry",desknets.koubai.koubaimgentry,{_getChooserOptions:function(){var b=this;var c=b.callBase("_getChooserOptions");delete c.choosePrivateGroup;c.cmdusers=desknets.CMD_CHOOSERMSETUSERSEL;return c},_getDelExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETDEL},_getAddExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETENTRY}});desknets.page(desknets.koubaiset,"koubaimsetrefer",desknets.koubai.koubaimgrefer,{koubaiModCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETENTRY},koubaiOrderCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETORDER},_getListCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETREFER},_getListExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETREFER},_getListAddCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETSHOHINENTRY},_getListModCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETSHOHINENTRY},_getListDispCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETSHOHINREFER},_getDelExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETSHOHINSTS},_getKoubaiEndCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETEND},_getMoveExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETMVSHOHI},_getPrintCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETPRINT},_getPrintExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETPRINT}});desknets.page(desknets.koubaiset,"koubaimsetshohinentry",desknets.koubai.koubaimgshohinentry,{_getDelExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETSHOHINDEL},_getAddExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETSHOHINENTRY}});desknets.page(desknets.koubaiset,"koubaimsetshohinrefer",desknets.koubai.koubaimgshohinrefer,{_getDispExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETSHOHINREFER},_getDispModCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETSHOHINENTRY},_getDelExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETSHOHINDEL}});desknets.page(desknets.koubaiset,"koubaimsetorder",desknets.koubai.koubaimgorder,{_getListCmd:function(){return desknets.koubaiset.PAGE_KOUBAIMSETORDER},_getListExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETORDER},getSubmitCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETORDERENTRY},_getDelExecCmd:function(){return desknets.koubaiset.CMD_KOUBAIMSETORDERDEL}});desknets.page(desknets.koubaiset,"koubaisetgen",desknets.PageSet,{_getNextCmd:function(){return desknets.koubaiset.PAGE_KOUBAISETADMIN}});desknets.page(desknets.koubaiset,"koubaisetmanager",desknets.PageAdmin,{_getSetCondition:function(){return false},_getNextCmd:function(){return desknets.koubaiset.PAGE_KOUBAISETADMIN}});app.addInitialAction(function(){desknets.koubaiset.init()})})(jQuery);