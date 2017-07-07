/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.ntwiset={MODULE_NTWI:"zntwi",MODULE_API_NTWI:"zrntwi",PAGE_NTWIPSETGEN:"ntwipsetgen",CMD_NTWIPSETGEN:"ntwipsetcmdgen",PAGE_NTWIPSETNOTICE:"ntwipsetnotice",CMD_NTWIPSETNOTICE:"ntwipsetcmdnotice",PAGE_NTWIPSETCONT:"ntwipsetcont",CMD_NTWIPSETCONT:"ntwipsetcmdcont",PAGE_NTWIMSETINDEX:"ntwimsetindex",CMD_NTWIMSETINDEX:"ntwimsetcmdindex",PAGE_NTWIMSETTALKLIST:"ntwimsettalklist",CMD_NTWIMSETTALKLIST:"ntwimsetcmdtalklist",PAGE_NTWIMSETREFER:"ntwimsetrefer",CMD_NTWIMSETREFER:"ntwimsetcmdrefer",CMD_NTWIMSETDEL:"ntwimsetcmddel",CMD_NTWIMSETLISTDEL:"ntwimsetcmdlistdel",PAGE_NTWIMSETSTAMPINDEX:"ntwimsetstampcatindex",CMD_NTWIMSETSTAMPCATLIST:"ntwimsetcmdstampcatlist",CMD_NTWIMSETSTAMPLIST:"ntwimsetcmdstamplist",PAGE_NTWIMSETSTAMPDLINDEX:"ntwimsetstampdlindex",CMD_NTWIMSETSTAMPDEL:"ntwimsetcmdstampdel",CMD_NTWIMSETSTAMPDOWNLOAD:"ntwimsetcmdstampdl",CMD_NTWIMSETSTAMPDLSTOP:"ntwimsetcmdstampdlstop",PAGE_NTWISETADMIN:"ntwisetadmin",PAGE_NTWISETGEN:"ntwisetgen",CMD_NTWISETGEN:"ntwisetcmdgen",PAGE_NTWISETMANAGER:"ntwisetmanager",CMD_NTWISETMANAGER:"ntwisetcmdmanager",PAGE_NTWIDISPATTACH:"ntwidispattach",init:function(){var b=a("#jco-pv-funcid").val();desknets.pageframe.setFuncSel(b);if(b==desknets.ntwiset.PAGE_NTWIPSETGEN){desknets.ntwiset.ntwipsetgen.init()}else{if(b==desknets.ntwiset.PAGE_NTWIPSETNOTICE){desknets.ntwiset.ntwipsetnotice.init()}else{if(b==desknets.ntwiset.PAGE_NTWIPSETCONT){desknets.ntwiset.ntwipsetcont.init()}else{if(b==desknets.ntwiset.PAGE_NTWIMSETINDEX){desknets.hashobserver.init(desknets.ntwiset);desknets.ntwiset.ntwimsetindex.init()}else{if(b==desknets.ntwiset.PAGE_NTWIMSETSTAMPINDEX){desknets.hashobserver.init(desknets.ntwiset);desknets.ntwiset.ntwimsetstampcatindex.init()}else{if(b==desknets.ntwiset.PAGE_NTWISETGEN){desknets.ntwiset.ntwisetgen.init()}else{if(b==desknets.ntwiset.PAGE_NTWISETMANAGER){desknets.ntwiset.ntwisetmanager.init()}}}}}}}}};desknets.page(desknets.ntwiset,"ntwipsetgen",desknets.PageSet,{$mjNtwiPage:null,init:function(){var b=this;b.$mjNtwiPage=a("#frm");b.callBase("init");b._initOtherToSetUp();var c=function(){b._updateCheckbox()};if(desknets.browser.tablet||desknets.browser.safari){a(window).on("pageshow",c)}else{a(document).ready(function(){c()})}b.initChkBox()},_initOtherToSetUp:function(){var b=this;desknets.chooser.setUpEntry(a(".jntwi-otherto-area"),b._getTargets(),{dialogID:"jntwi-entry-other-to-dialog",dialogOptions:b._getChooserOptions(),extraVars:{user:{keyName:"otherto"}}})},_getTargets:function(){var b=[];var b=desknets.chooser.getItemsFromElement(a(".jntwi-otherto-area"));return b},_getChooserOptions:function(){return{choosePrivateGroup:true,unassignGroup:"readonly",lockedItems:[{id:desknets.pageframe.getLoginUid(),type:"user"}]}},_getNextCmd:function(){return desknets.MODULE_MAIN},_updateCheckbox:function(){var c=this;var b=(a(".jntwi-alluser").attr("checked"))?true:false;c.showSearchTarget(b)},initChkBox:function(){var b=this;a(".jntwi-alluser").click(function(d){var c=(a(this).attr("checked"))?true:false;b.showSearchTarget(c)})},showSearchTarget:function(d){var b=this;var c=b.$mjNtwiPage.find(".co-selmulti-btn").find(".jco-sel-btn");if(d){c.attr("disabled",d);b.$mjNtwiPage.find(".jntwi-alluser").attr("checked",d);b.$mjNtwiPage.find(".co-selmulti-items-scroll").hide()}else{c.attr("disabled",d);b.$mjNtwiPage.find(".jntwi-alluser").attr("checked",d);b.$mjNtwiPage.find(".co-selmulti-items-scroll").show()}}});desknets.page(desknets.ntwiset,"ntwipsetnotice",desknets.PageSet,{_getNextCmd:function(){return desknets.MODULE_MAIN},init:function(){var b=this;b.callBase("init");b._listSet()},_listSet:function(){var b=this;if(a(".co-tbody-list").find("tr").length==0){b._listNodata()}else{b._listView()}},_listNodata:function(){var b=this;a(".jntwi-msg").hide();a(".co-table-set").hide();a(".jntwi-preservation-botton").hide();a(".co-nodata").show()},_listView:function(){var b=this;a(".co-nodata").hide();a(".jntwi-preservation-botton").show()}});desknets.page(desknets.ntwiset,"ntwipsetcont",desknets.PageSet,{_getNextCmd:function(){return desknets.MODULE_MAIN}});desknets.page(desknets.ntwiset,"ntwimsetindex",desknets.PageListBase,{_getListAjaxSuccess:function(c){var b=this;b.callBase("_getListAjaxSuccess",c);desknets.page.groupSelect.editSelectedGroup(a(".jco-sel-items"),c)},_listLine:function(c,d){var b=this;c=b.callBase("_listLine",c,d);if(!neo.isSet(d[desknets.user.KEY_ASSIGNGROUP])){c=desknets.tmpl.replaceWordHtml(c,desknets.user.KEY_ASSIGNGROUP,"&nbsp;");c=desknets.tmpl.replaceWordHtml(c,"assigntitle","&nbsp;")}return c},_replaceListLine:function(c,e,d){var b=this;if(e=="assigngrp"){c=b._replaceGrpLine(c,e,d)}else{c=b.callBase("_replaceListLine",c,e,d)}return c},_replaceGrpLine:function(c,f,e){var d=[];d=desknets.user.getListAssignGroups(e[f].Name);var b="";if(d.assigntitle!==""){b='<span title="'+d.assigntitle+'">'+d.assign+"</span>"}c=desknets.tmpl.replaceWordHtml(c,f,b);return c},_hashUpdatePageView:function(c){var b=this;var e=desknets.paramanalyzer.getHashParams();if(c==desknets.ntwiset.PAGE_NTWIMSETTALKLIST){var d=a("#jco-m-talk-container").find(".jco-back-page-data");if(d.length>0&&!neo.isSet(e.init)){desknets.ntwiset.ntwimsetlist._getListAjax(e.row)}else{desknets.ntwiset.ntwimsetlist.initPage(desknets.ntwiset.PAGE_NTWIMSETINDEX,"jco-m-list-container")}}else{if(c==desknets.ntwiset.PAGE_NTWIMSETREFER){desknets.ntwiset.ntwimsetdisp.initPage(desknets.ntwiset.PAGE_NTWIMSETTALKLIST,"jco-m-talk-container")}}},_initListStart:function(){var b=this;b.callBase("_initListStart");var c={allGroup:"choosable",unassignGroup:"choosable"};desknets.page.groupSelect.init({},c)},_initListStartChk:function(){},_initListStartModLink:function(){},_getIdListPageForm:function(){return"topfrm"},_getRestModule:function(){return desknets.ntwiset.MODULE_API_NTWI},_getListCmd:function(){return desknets.ntwiset.PAGE_NTWIMSETINDEX},_getListExecCmd:function(){return desknets.ntwiset.CMD_NTWIMSETINDEX}});desknets.page(desknets.ntwiset,"ntwimsetlist",desknets.PageListBase,{boSetwatermark:false,_getFieldsCheckScroll:function(){return["uid"]},_listMoveScroll:function(){this._setClearScrollPosition();this.callBase("_listMoveScroll")},_setTitle:function(d){var c=this;var b={};b.uname=c.$mjListPage.find(".jntwi-user-name").val();c.callBase("_setTitle",d,b)},initPage:function(e,c){var b=this;b.boSetwatermark=false;if(b.$mjListPage!=null){var d=b.$mjListPage.find(".co-list-search-text");if(d.is(":focus")){d.blur()}}b.callBase("initPage",e,c)},initGetPageId:function(){var b=this;b.callBase("initGetPageId");b.boGetHtmlSingle=false},_initListEnd:function(){var b=this;b.callBase("_initListEnd");var d=b.$mjListPage.find(".co-list-search-text");var c=function(){var e=b.$mjListPage.find(".jco-back-page-data").find('input[name="srch_key"]');if(!b.chkListSearchKeyLength(d.val())){return}if(e.val()!=desknets.escape(d.val())){e.val(d.val());b.boChangePageNoHide=true;b._listPage("0")}};b.$mjListPage.find(".co-list-search-btn").find("a").click(function(e){e.preventDefault();c()});desknets.keysearch.setUp("ntwimsetcmdlist",d,c)},changPage:function(){var b=this;b.callBase("changPage");if(!b.boSetwatermark){b.boSetwatermark=true;desknets.watermark.set(b.$mjListPage.find(".co-list-search-text"))}},_initListEndButton:function(){var b=this;b.callBase("_initListEndButton");b.$mjListPage.find(".co-pageback").click(function(c){c.preventDefault();b.dispBackListPage()})},_initListStartModLink:function(){},_listLine:function(c,i){var j=this;var f={};var b="";var k=false;var g="";var d="";var h="";var e=desknets.paramanalyzer.getHashParams();c=j._listLineCmd(c);if(neo.isSet(e.uid,{blank:false})){g=e.uid;c=desknets.tmpl.replaceWordHtml(c,"uid",g)}if(typeof i=="object"){g=i.id;c=desknets.tmpl.replaceWordHtml(c,"id",g);g=desknets.escapeSpace(desknets.escapeValue(desknets.escape(i.attachcnt)));if(g!==""&&parseInt(g,10)>0){k=true}else{k=false}if(k){g="on"}else{g=" "}c=desknets.tmpl.replaceWordHtml(c,"attachcnt",g);if(k){g=desknets.Resource.attachLabel}else{g=" "}c=desknets.tmpl.replaceWordHtml(c,"attachcnton",g);g=desknets.dateTime.dispDateTime(i.cretime,{type:"list"});c=desknets.tmpl.replaceWordHtml(c,"cretime",g);if(neo.isSet(i.detail,{blank:false})){g=desknets.escapeSpace(desknets.escapeValue(desknets.escape(i.detail)))}else{g=desknets.escapeSpace(desknets.escapeValue(desknets.escape(i.dispname)))}c=desknets.tmpl.replaceWordHtml(c,"detail",g)}return c},_getListAjaxSuccessEnd:function(){var b=this;var c=desknets.paramanalyzer.getHashParams();b.callBase("_getListAjaxSuccessEnd");desknets.keysearch.fixListWatermark(b.$mjListPage,c)},_getSearchExecParam:function(){var b=this;var d=desknets.paramanalyzer.getHashParams();var c=b.callBase("_getSearchExecParam");if(!neo.isSet(d.num,{blank:false})){c.num=a("#jco-m-list-container").find(".jco-pv-num").val()}return c},inputModPage:function(c){var b=this;b.inputDispPage(c)},_getDispPageParam:function(){var b={};var c=desknets.paramanalyzer.getHashParams();b.uid=c.uid;return b},_getDelAddPrm:function(){var c=desknets.paramanalyzer.getHashParams();var b={};b.uid=c.uid;b.srch_key=c.srch_key;return b},_getIdListPage:function(){return"jco-m-talk-container"},_getRestModule:function(){return desknets.ntwiset.MODULE_API_NTWI},_getListCmd:function(){return desknets.ntwiset.PAGE_NTWIMSETTALKLIST},_getListExecCmd:function(){return desknets.ntwiset.CMD_NTWIMSETTALKLIST},_getListDispCmd:function(){return desknets.ntwiset.PAGE_NTWIMSETREFER},_getDelExecCmd:function(){return desknets.ntwiset.CMD_NTWIMSETLISTDEL}});desknets.page(desknets.ntwiset,"ntwimsetdisp",desknets.PageDispBase,{_setTitle:function(d){var c=this;var b={};b.uname=c.$mjPage.find(".jntwi-user-name").val();c.callBase("_setTitle",d,b)},getLocationFormParam:function(){var b=this;var c={};var d=desknets.paramanalyzer.getHashParams();if(!neo.isSet(b.mBackCmd)||!neo.isSet(b.mIdBack)){return null}var e=a("#"+b.mIdBack).find(".jco-back-page-data");if(e.length>0){c=desknets.getInputDataToObj(e);c.cmd=b.mBackCmd}else{c.uid=d.uid;c.cmd=b.mBackCmd}return c},getAttachDownloadParams:function(){var b={};var c=desknets.paramanalyzer.getHashParams();b={cmd:desknets.ntwiset.PAGE_NTWIDISPATTACH,id:c.id,uid:c.uid};return b},_getDelPrm:function(){var b={};var c=desknets.paramanalyzer.getHashParams();b.uid=c.uid;return b},_getRestModule:function(){return desknets.ntwiset.MODULE_API_NTWI},_getDispExecCmd:function(){return desknets.ntwiset.CMD_NTWIMSETREFER},_getDelExecCmd:function(){return desknets.ntwiset.CMD_NTWIMSETDEL}});desknets.page(desknets.ntwiset,"ntwimsetstampcatindex",desknets.PageListBase,{init:function(){this.callBase("init");if(desknets.pageframe.getTopMsg().length>0){desknets.pageframe.viewTopMsg("","")}},_initListStartTemplate:function(){var b=this;b._mcListTemplate=b.$mjTableList.find("script").html();b.$mjTableList.empty()},exitStampDownload:function(){var b=this;b._getListAjax(b._getListRow())},_initListEndButton:function(){var b=this;b.callBase("_initListEndButton");b.$mjListPage.find(".jntwi-stamp-dl").click(function(c){c.preventDefault();desknets.pageframe.closeTopMsg();desknets.ntwiset.stampSelDlg.open()})},_initListStartModLink:function(){var b=this;b.$mjTableList.on("click",".jco-modlink",function(d){var c=a(this).parent().parent().find(".jco-id").val();desknets.ntwiset.stampRefDlg.open(c);return false})},_getRestModule:function(){return desknets.ntwiset.MODULE_API_NTWI},_getListCmd:function(){return desknets.ntwiset.PAGE_NTWIMSETSTAMPINDEX},_getListExecCmd:function(){return desknets.ntwiset.CMD_NTWIMSETSTAMPCATLIST},_getDelExecCmd:function(){return desknets.ntwiset.CMD_NTWIMSETSTAMPDEL},_delConfMessage:function(){var b=this;return desknets.Resource.Message.ntwi_stamp_delconf+"<br/>"+b.callBase("_delConfMessage")}});desknets.ntwiset.stampRefDlg={_DIALOG_ID:"ntwi-stampcategory-referdlg",_DIALOG_LIST_CLASS:"ntwi-stampcategory-refer",_DIALOG_WIDTH:600,$dialog:null,catid:null,open:function(b){if(!!b){this.catid=b}if(!this.$dialog){this.$dialog=desknets.dialog.make(this._DIALOG_ID,this._getDialogOption())}this.readStamp()},_getDialogOption:function(){var b=this;var c=a.extend(desknets.dialog.getDialogOption(),{width:b._DIALOG_WIDTH,title:desknets.Resource.ntwi.stamprefTitle,buttons:{}});c.buttons[desknets.Resource.CloseButtonLabel]=function(){b.$dialog.dialog("close")};return c},readStamp:function(){var b=this;desknets.ajax.rest({url:desknets.getUrl(desknets.ntwiset.MODULE_API_NTWI),data:b._getRestParams(),success:function(d,c,e){b._setList(d);b.$dialog.dialog("open")}})},_getRestParams:function(){return{cmd:desknets.ntwiset.CMD_NTWIMSETSTAMPLIST,id:this.catid}},_setList:function(e){var c=this;var f=[];var g=c._getJsonStampList(e);if(!g){c.$dialog.addClass("ntwi-list-no-items")}else{var b=desknets.ajax.getItems(g.item);f.push('<div class = "'+c._DIALOG_LIST_CLASS+'"><ul>');for(var d=0;d<b.length;d++){f.push(c.getListItemHtml(b[d],d))}f.push("</ul></div>");c.$dialog.html(f.join(""));c.$dialog.removeClass("ntwi-list-no-items")}},_getJsonStampList:function(b){if(!b){return null}return b.attach},getListItemHtml:function(d,e){var c=d.attachdisp.replace(/\.gif$|\.jp(e|g|eg)$|\.png$/i,"");var b='<li><img title="'+c+'" src="'+d.referurl+'"></li>';return b}};desknets.ntwiset.stampSelDlg=a.extend({},desknets.ntwiset.stampRefDlg,{_DIALOG_ID:"ntwi-stampcategory-selectdlg",_DIALOG_LIST_CLASS:"ntwi-stampcategory-select",_DIALOG_WIDTH:780,_STAMP_WIDTH:50,_DOWNLOAD_INTERVAL:1000,$dialogexec:null,_searching:false,readStamp:function(){var b=this;desknets.ajax.rest({url:desknets.getUrl(desknets.ntwiset.MODULE_API_NTWI),data:b._getRestParams(),dataType:desknets.ajax.RESTYPE_HTML,success:function(d){var e=desknets.ajax.chkAjaxHtmlError(d);if(e.status=="ok"){b._setList(d);b.$dialog.dialog("open")}else{var c=desknets.dialog.alert(e.message,{errorNo:e.no})}}})},_getDialogOption:function(){var b=this;var c=a.extend(desknets.dialog.getDialogOption(),{width:b._DIALOG_WIDTH,title:desknets.Resource.ntwi.stampselTitle,buttons:{}});c.buttons[desknets.Resource.ntwi.stampDLButtonLabel]=function(){b._stampDownload()};c.buttons[desknets.Resource.CancelButtonLabel]=function(){b.$dialog.dialog("close")};return c},_getRestParams:function(){return{cmd:desknets.ntwiset.PAGE_NTWIMSETSTAMPDLINDEX}},_setList:function(e){var b=this;var c=a("<div>").html(e);var d=c.find("li");if(d.length==0){c.find(".co-nodata").show()}else{c.find(".co-nodata").hide();d.each(function(){if(a(this).find(".ntwi-stamp-new").length==0){a(this).find("input").attr("disabled",true)}})}b.$dialog.html(c.html())},_stampDownload:function(){var b=this;var d={};var c=[];if(b._searching==true){return}d.cmd=desknets.ntwiset.CMD_NTWIMSETSTAMPDOWNLOAD;b.$dialog.find('input[type="checkbox"]:checked').each(function(){if(a(this).closest("div").hasClass("ntwi-stamp-exist")){return}c[c.length]=a(this).val()});if(c.length==0){desknets.dialog.alert(desknets.Resource.Message.ntwi_stampdl_selectnothing,{type:"warn"});return}d.ids=c.join(",");b._searching=true;b._stampDownloadAjax(d)},_stampDownloadAjax:function(c){var b=this;desknets.ajax.rest({url:desknets.getUrl(desknets.ntwiset.MODULE_API_NTWI),data:c,success:function(e,d,f){b._checkStampDownload(e)},error:function(e,d,f){b._showDownloadResultDialog(f,false)}})},_checkStampDownload:function(c){var b=this;if(!c.execflg){return}if(c.execflg=="0"){b._exitStampDownload(c);return}if(!neo.isSet(b.$dialogexec)){b._initDownloadDialog()}setTimeout(function(){b._stampDownloadAjax(b._checkStampDownloadParam())},b._DOWNLOAD_INTERVAL)},_checkStampDownloadParam:function(){return{cmd:desknets.ntwiset.CMD_NTWIMSETSTAMPDOWNLOAD,execcheck:"1"}},_initDownloadDialog:function(){var b=this;var c=b._getDialogSelfOptions();b.$dialogexec=desknets.dialog.alert(b._getExecMessage(),c);var d={};d[desknets.Resource.abortLabel]=function(){b.$dialogexec.dialog("close")};b.$dialogexec.dialog("option","buttons",d)},_getExecMessage:function(){var b=desknets.Resource.Message.com_dialog_execmsg;b=desknets.tmpl.replaceWordHtml(b,"msg",desknets.Resource.Message.ntwi_stampdl_nowexec);return b},_getDialogSelfOptions:function(){var b=this;return{type:"message",extraMessage:desknets.Resource.Message.com_dialog_execaddmsg,extraClass:"co-loading-dialog",btnLabel:desknets.Resource.abortLabel,close:function(){if(!!b._searching){b.stampDownloadStop();return false}desknets.submitform.clearDisabled(b.$dialogexec);b.$dialogexec=null}}},stampDownloadStop:function(){var b=this;desknets.submitform.setDialogDisabled(b.$dialogexec);b._searching=false;b._stampDownloadAjax({cmd:desknets.ntwiset.CMD_NTWIMSETSTAMPDLSTOP})},_exitStampDownload:function(c){var b=this;var e=true;var d;var f;if(!!c.batmessage){d=c.batmessage;if(desknets.parseErrorInfo(d).level!="warn"){e=false}}else{if(!b._searching){d=desknets.Resource.Message.ntwi_stampdl_stop}else{d=desknets.Resource.Message.ntwi_stampdl_finish}}b._showDownloadResultDialog(d,e)},_showDownloadResultDialog:function(c,d){var b=this;b._searching=false;if(!!b.$dialogexec&&b.$dialogexec.dialog("isOpen")){b.$dialogexec.dialog("close")}desknets.dialog.alert(c,{btnLabel:desknets.Resource.OKButtonLabel,close:function(){b.$dialog.dialog("close");if(d){location.reload()}}})}});desknets.page(desknets.ntwiset,"ntwisetgen",desknets.PageSet,{_getNextCmd:function(){return desknets.ntwiset.PAGE_NTWISETADMIN}});desknets.page(desknets.ntwiset,"ntwisetmanager",desknets.PageAdmin,{_getNextCmd:function(){return desknets.ntwiset.PAGE_NTWISETADMIN}});app.addInitialAction(function(){desknets.ntwiset.init()})})(jQuery);