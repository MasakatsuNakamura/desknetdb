/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){(function(b){desknets.stockset={MODULE_API_STOCK:"zrstock",PAGE_STOCKINDEX:"stockindex",CMD_STOCKMSETLIST:"stockmsetcmdindex",CMD_STOCKMSETSTORE:"stockmsetcmdstore",PAGE_STOCKMSETSTORE:"stockmsetstore",CMD_STOCKMSETTRADE:"stockmsetcmdtrade",PAGE_STOCKMSETTRADE:"stockmsettrade",CMD_STOCKMSETENTRY:"stockmsetcmdentry",CMD_STOCKMSETDEL:"stockmsetcmddel",CMD_STOCKMSETDELCONF:"stockmsetcmddelconf",PAGE_STOCKMSETHISTORY:"stockmsethistory",CMD_STOCKMSETHISTORY:"stockmsetcmdhistory",PAGE_STOCKMSETDETAIL:"stockmsetdetail",PAGE_STOCKSETADMIN:"stocksetadmin",PAGE_STOCKMSETHISTORYEX:"stockmsethistoryex",CMD_STOCKMSETHISTORYEX:"stockmsetcmdhistoryex",CMD_STOCKMSETHISTORYCMDEX:"stockmsetcmdhistorycmdex",PAGE_STOCKMSETHISTORYDEL:"stockmsethistorydel",CMD_STOCKMSETHISTORYDEL:"stockmsetcmdhistorydel",CMD_STOCKMSETHISTORYDELCONF:"stockmsetcmdhistorydelconf",CMD_STOCKMSETHISTORYDELEXEC:"stockmsetcmdhistorydelexec",CMD_STOCKSEARCH:"stockcmdsearchlist",init:function(){var c=b("#jco-pv-funcid").val();desknets.hashobserver.init(desknets.stockset);desknets.pageframe.setFuncSel(c);if(c=="stockpsetgen"){desknets.stockset.psetgen.init();desknets.stock.subwin.init()}else{if(c=="stockmsetindex"){desknets.stockset.stockmsetindex.init()}else{if(c=="stockmsethistoryex"){desknets.stockset.stockmsethistoryex.init()}else{if(c=="stockmsethistorydel"){desknets.stockset.stockmsethistorydel.init()}else{if(c=="stocksetadmin"){b("#jco-m-sub-title").html(b(".jco-title").val())}else{if(c=="stocksetgen"){desknets.stockset.setgen.init()}else{if(c=="stocksetmanager"){desknets.stockset.setmanager.init()}}}}}}}}}})(jQuery);(function(b){desknets.page(desknets.stockset,"subwin",desknets.stock.subwin,{_initSearch:function(){return}})})(jQuery);(function(b){desknets.page(desknets.stockset,"psetgen",desknets.PageSet,{init:function(){var c=this;c.callBase("init")},_getNextCmd:function(){return desknets.stockset.PAGE_STOCKINDEX}})})(jQuery);(function(b){desknets.page(desknets.stockset,"setadmin",desknets.PageSet,{})})(jQuery);(function(b){desknets.page(desknets.stockset,"setgen",desknets.PageSet,{_getNextCmd:function(){return desknets.stockset.PAGE_STOCKSETADMIN}})})(jQuery);(function(b){desknets.page(desknets.stockset,"setmanager",desknets.PageAdmin,{_getSetCondition:function(){return true},_getNextCmd:function(){return desknets.stockset.PAGE_STOCKSETADMIN}})})(jQuery);(function(b){desknets.page(desknets.stockset,"stockmsetindex",desknets.stock.stockindex,{sAllGroupName:"allStockGroupName",_getGroupSelectDialogOpt:function(){var c=this;var d=c.$mjListPage.find(".jco-sel-btn");var e={};if(d.data("type")=="assign"){e={allGroup:"choosable",allGroupLabel:desknets.Resource.stock[c.sAllGroupName],cmdgroups:"constructmsetugroups",cmdgrouptree:"constructmsetcmdgrouptree",moduletype:d.data("module")}}else{e=c.callBase("_getGroupSelectDialogOpt")}return e},inputDispPage:function(f){var c=this;var e="";var d={};e=c._getListDispCmd();d=c._getDispPageParam();d.cmd=e;d.id=f;c._inputPage(d)},_hashUpdatePageView:function(e){var d=this;var c="";if(e==desknets.stockset.stockmsethistory._getListCmd()){desknets.stockset.stockmsethistory.initPage(d.mhashBackCmd,d.mhashIdBack)}else{if(e==desknets.stockset.PAGE_STOCKMSETTRADE){desknets.stockset.msettrade.initPage(d.mhashBackCmd,d.mhashIdBack)}else{if(e==desknets.stockset.PAGE_STOCKMSETSTORE){desknets.stockset.msetstore.initPage(d.mhashBackCmd,d.mhashIdBack)}}}},_getAddPageParam:function(){var c=this;var e={};var d="";e=c.callBase("_getAddPageParam");if(c.$mjListPage.find('select[name="gid"]').length>0){d=c.$mjListPage.find('select[name="gid"] option:selected').val()}else{d=c.$mjListPage.find('input[name="gid"]').val()}if(d=="all"){d="0"}e.gid=d;return e},_hashUpdateAddPage:function(){var c=this;desknets.stockset.msetentry.initPage(c.mhashBackCmd,c.mhashIdBack)},_getRestModule:function(){return desknets.stockset.MODULE_API_STOCK},_getListCmd:function(){return desknets.stock.PAGE_STOCKMSETLIST},_getListExecCmd:function(){return desknets.stockset.CMD_STOCKMSETLIST},_getListAddCmd:function(){return desknets.stock.PAGE_STOCKMSETENTRY},_getListModCmd:function(){return desknets.stock.PAGE_STOCKMSETENTRY},_getListDispCmd:function(){return desknets.stockset.PAGE_STOCKMSETDETAIL},_getDelCmd:function(){return desknets.stockset.CMD_STOCKMSETDELCONF},_getDelExecCmd:function(){return desknets.stockset.CMD_STOCKMSETDEL},_getHistoryCmd:function(){return desknets.stockset.PAGE_STOCKMSETHISTORY},_getListEntryClass:function(){return desknets.stockset.msetentry},_getListDispClass:function(){return desknets.stockset.msetdisp}})})(jQuery);(function(b){desknets.page(desknets.stockset,"stockmsethistory",desknets.stock.stockhistory,{_getRestModule:function(){return desknets.stockset.MODULE_API_STOCK},_getListCmd:function(){return desknets.stockset.PAGE_STOCKMSETHISTORY},_getListExecCmd:function(){return desknets.stockset.CMD_STOCKMSETHISTORY}})})(jQuery);(function(b){desknets.page(desknets.stockset,"msetentry",desknets.PageInputBase,{_inputButton:function(){var c=this;c.callBase("_inputButton");c._initGroupSelectDialog()},_initGroupSelectDialog:function(){var c=this;var d={assign:true,pageID:"jco-m-input-page",dialogID:"jstock-sel-chooser-dialog"};desknets.page.groupSelect.init(d,c._getGroupSelectDialogOptions(),true)},_getGroupSelectDialogOptions:function(){var c=this;var e=c.$mjPage.find(".jco-sel-btn");var d={};if(e.data("type")=="assign"){d={mode:"single",cmdgroups:"constructmsetugroups",cmdgrouptree:"constructmsetcmdgrouptree",moduletype:e.data("module")}}else{d={mode:"single",chooseTarget:["group"],unassignGroupLabel:desknets.Resource.stock.commonGroupName,unassignGroup:"choosable"}}return d},getLocationFormParam:function(){var c=this;var d={};if(!neo.isSet(c.mBackCmd)||!neo.isSet(c.mIdBack)){return null}d=desknets.getInputDataToObj(b("#"+c.mIdBack).find(".jco-back-page-data"));d.cmd=c.mBackCmd;return d},_inputDelSubmit:function(d){var c=this;c.mBackCmd=desknets.stock.PAGE_STOCKMSETLIST;c.callBase("_inputDelSubmit",d)},_getRestModule:function(){return desknets.stockset.MODULE_API_STOCK},_getAddExecCmd:function(){return desknets.stockset.CMD_STOCKMSETENTRY},_getModExecCmd:function(){var c=this;return c._getAddExecCmd()},_getDelExecCmd:function(){return desknets.stockset.CMD_STOCKMSETDEL}})})(jQuery);(function(b){desknets.page(desknets.stockset,"msetdisp",desknets.PageDispBase,{_initSet:function(){var c=this;var d=b(".jstock-stock-cnt");var e=d.html();if(neo.isSet(e)&&isNaN(e)!=true&&e<0){d.addClass("stock-minus")}c.callBase("_initSet")},_inputAjaxForm:function(){var c=this;var d={};d=c._inputAjaxFormOption();c._initFormRequestAjax(c._mIdPageForm,d)},_inputButton:function(){var c=this;b("#jco-m-disp-page").find(".jstock-pagemod").click(function(e){e.preventDefault();var d=b("#jco-m-disp-page").find('input[name="id"]').val();c.inputModPage(d)});b(".jstock-pagemod-store").click(function(e){e.preventDefault();var d=b("#jco-m-disp-page").find('input[name="id"]').val();c.inputStorePage(d)});b(".jstock-pagemod-trade").click(function(e){e.preventDefault();var d=b("#jco-m-disp-page").find('input[name="id"]').val();c.inputTradePage(d)});c.callBase("_inputButton")},inputModPage:function(g){var c=this;var e="";var d={};var f={};e=c._getModCmd();d.cmd=e;d.id=g;f=desknets.paramanalyzer.getHashParams();b.extend(f,d);c._setLocationHash(f)},inputTradePage:function(e){var c=this;var d=[];c.inputStockPage(e,desknets.stockset.PAGE_STOCKMSETTRADE)},inputStorePage:function(e){var c=this;var d=[];c.inputStockPage(e,desknets.stockset.PAGE_STOCKMSETSTORE)},inputStockPage:function(g,f,d){var c=this;var e={};var h={};e.cmd=f;e.id=g;h=desknets.paramanalyzer.getHashParams();b.extend(h,e);c._setLocationHash(h)},_getRestModule:function(){return desknets.stockset.MODULE_API_STOCK},_getDispExecCmd:function(){return desknets.stock.CMD_STOCKDETAIL},_getDispModCmd:function(){return desknets.stockset.PAGE_STOCKMSETSTORE},_getDelExecCmd:function(){return desknets.stockset.CMD_STOCKMSETDEL},_getModCmd:function(){return desknets.stock.PAGE_STOCKMSETENTRY}})})(jQuery);(function(b){desknets.page(desknets.stockset,"stockmsethistoryex",desknets.PageInputList,{init:function(){var c=this;c.callBase("init");c._initDownloadButtons()},_initListEnd:function(){var c=this;c.callBase("_initListEnd");var f=c.$mjListPage.find(".jco-sel-btn");var e={};if(f.data("type")=="assign"){e={allGroup:"choosable",allGroupLabel:desknets.Resource.stock.allStockGroupName,cmdgroups:"constructmsetugroups",cmdgrouptree:"constructmsetcmdgrouptree",moduletype:f.data("module")}}else{e={allGroup:"choosable",unassignGroupLabel:desknets.Resource.stock.commonGroupName,allGroupLabel:desknets.Resource.stock.allStockGroupName,unassignGroup:"choosable"}}var d={assign:true,onSelectGroupHide:true};desknets.page.groupSelect.init(d,e);desknets.htmlparts.setUpForm(b("#listfrm"),{date:true,validateDate:true})},_getListAjaxSuccess:function(d){var c=this;c.callBase("_getListAjaxSuccess",d);desknets.page.groupSelect.editSelectedAssignGroup(c.$mjListPage,c.$mjListPage.find(".jco-sel-items"),d)},_initListEndAjaxForm:function(){},_initDownloadButtons:function(){var c=this;b(".jco-export-submit").click(function(h){var f="";var g="";var j=b('input[name="sdate"]');var e=b('input[name="edate"]');h.preventDefault();f=j.val();g=e.val();j.attr("disabled",true);e.attr("disabled",true);f=f.replace(/-/g,"");g=g.replace(/-/g,"");var i=parseInt(f,10);var d=parseInt(g,10);if(i>d){desknets.dialog.alert(desknets.Resource.Message.stock_warndownloaddateinvalid,{type:"warn"});return}j.attr("disabled",false);e.attr("disabled",false);c._execDownload();desknets.submitform.clearDisabled(b("#listfrm"))})},_execDownload:function(){var c=this;var d=0;b('input[name="cmd"]').val(desknets.stockset.CMD_STOCKMSETHISTORYCMDEX);c.$mjTableList.find("input[type=checkbox]").each(function(){if(b(this).attr("checked")){d++;return false}});if(d<1){desknets.dialog.alert(desknets.Resource.Message.stock_warndownloadtargetempty,{type:"warn"});return false}if(b(".co-chk-cnt-all").css("display")=="block"){c.$mjListPage.find("input[type=checkbox]").attr("disabled",true)}b("#listfrm").submit();b('input[name="cmd"]').val(desknets.stockset.PAGE_STOCKMSETHISTORYEX);c.$mjListPage.find("input[type=checkbox]").attr("disabled",false)},_getRestModule:function(){return desknets.stockset.MODULE_API_STOCK},_getListCmd:function(){return desknets.stockset.PAGE_STOCKMSETHISTORYEX},_getListExecCmd:function(){return desknets.stockset.CMD_STOCKMSETHISTORYEX}})})(jQuery);(function(b){desknets.page(desknets.stockset,"stockmsethistorydel",desknets.PageInputList,{_initListEnd:function(){var c=this;c.callBase("_initListEnd");var f=c.$mjListPage.find(".jco-sel-btn");var e={};if(f.data("type")=="assign"){e={allGroup:"choosable",allGroupLabel:desknets.Resource.stock.allStockGroupName,cmdgroups:"constructmsetugroups",cmdgrouptree:"constructmsetcmdgrouptree",moduletype:f.data("module")}}else{var e={allGroup:"choosable",unassignGroupLabel:desknets.Resource.stock.commonGroupName,allGroupLabel:desknets.Resource.stock.allStockGroupName,unassignGroup:"choosable"}}var d={assign:true,onSelectGroupHide:true};desknets.page.groupSelect.init(d,e);desknets.htmlparts.setUpForm(b("#listfrm"),{date:true,validateDate:true})},_listDelSubmit:function(d){var c=this;if(b(".co-table-set").find("input").hasClass("ui-invalid-mismatch")){return}c.callBase("_listDelSubmit",d)},_getListAjaxSuccess:function(d){var c=this;c.callBase("_getListAjaxSuccess",d);desknets.page.groupSelect.editSelectedAssignGroup(c.$mjListPage,c.$mjListPage.find(".jco-sel-items"),d)},_listCompleteAjaxForm:function(){var c=this;b(".co-actionwrap").find('input[name="edate"]').attr("disabled",false);c.callBase("_listCompleteAjaxForm")},_getDelAddPrm:function(){var c={};c={edate:b('input[name="edate"]').val(),gid:b('input[name="gid"]').val()};return c},_getRestModule:function(){return desknets.stockset.MODULE_API_STOCK},_getListCmd:function(){return desknets.stockset.PAGE_STOCKMSETHISTORYDEL},_getListExecCmd:function(){return desknets.stockset.CMD_STOCKMSETHISTORYDEL},_getDelCmd:function(){return desknets.stockset.CMD_STOCKMSETHISTORYDELCONF},_getDelExecCmd:function(){return desknets.stockset.CMD_STOCKMSETHISTORYDELEXEC}})})(jQuery);(function(b){desknets.page(desknets.stockset,"msetstore",desknets.stock.stocktrade,{_inputButton:function(){var c=this;c.callBase("_inputButton");b("#jstock-stockaddnum").keyup(function(d){var f=b(d.target).val();if(!isNaN(f)&&f!=""){b("#jstock-stocknum").text(parseInt(b("#jstock-stocknownum").text(),10)+parseInt(f,10));f=b("#jstock-stocknum").text();if(neo.isSet(f)&&isNaN(f)!=true&&f<0){b("#jstock-stocknum").addClass("stock-minus")}if(neo.isSet(f)&&isNaN(f)!=true&&f>=0){b("#jstock-stocknum").removeClass("stock-minus")}}else{b("#jstock-stocknum").text(b("#jstock-stocknownum").text());b("#jstock-stocknum").removeClass("stock-minus")}})},getLocationFormParam:function(){var c=this;var d={};d=desknets.getInputDataToObj(b("#"+c.mIdBack).find(".jco-back-page-data"));d.cmd=c.mBackCmd;return d},_getTradeExecCmd:function(){return desknets.stockset.CMD_STOCKMSETSTORE}})})(jQuery);(function(b){desknets.page(desknets.stockset,"msettrade",desknets.stock.stocktrade,{getLocationFormParam:function(){var c=this;var d={};d=desknets.getInputDataToObj(b("#"+c.mIdBack).find(".jco-back-page-data"));d.cmd=c.mBackCmd;return d},_getTradeExecCmd:function(){return desknets.stockset.CMD_STOCKMSETTRADE}})})(jQuery);app.addInitialAction(function(){desknets.stockset.init()})})(jQuery);