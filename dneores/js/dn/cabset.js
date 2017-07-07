/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.webClip={SCRIPT:'javascript:(function(c,a){c=document,a=window;function b(){var f="{{host}}",i="{{lang}}",d=1,h=c.URL.match(/^https:/)&&f.match(/^http:/)?"{{L_SECURE_ERROR}}":"{{L_ERROR}}";if(!c.getElementsByClassName||!c.querySelectorAll||!a.postMessage){alert("{{L_UNSUPPORTED_ERROR}}")}else{function g(){if(d){alert(h)}d=0}function e(m,k,j){j=c.createElement("script");j.setAttribute("type","text/javascript");j.setAttribute("charset","UTF-8");j.setAttribute("src",m);j.onerror=g;j.onload=k;try{c.body.appendChild(j)}catch(l){g()}}e(f+"dneores/lang/"+i+"/js/pubwclip.js",function(){e(f+"dneores/js/dnpub/wclipmain.js?url="+f+"&cgipath={{path}}&lang="+i+"&cmd={{type}}&mod={{ext}}",null)})}}c.readyState=="complete"?b():a.addEventListener("load",b)})()',TMPL_VIDEO:'<video width="320" height="180" controls=""><source src="/dneores/images/webclip/webclip-guide_{{target}}.mp4" type="video/mp4"></video>',init:function(c){var b=this;b._initScript(c);b._initTutorial(c);b._initHelp(c);c.find(".co-webclip-buttons > a").click(function(d){d.preventDefault()});if(desknets.browser.ipad){c.find(".co-webclip-paste-me textarea").click(function(d){if(typeof this.setSelectionRange=="function"){this.setSelectionRange(0,this.value.length)}})}},_initScript:function(f){var e=this;var d=this.SCRIPT,c,b;var g=location.protocol+"//"+location.host+"/";var h=location.pathname.replace(/[.\w]*$/,"");d=desknets.tmpl.replaceWord(d,"host",g);d=desknets.tmpl.replaceWord(d,"path",h);d=desknets.tmpl.replaceWordHtml(d,"lang",desknets.Resource.code);d=desknets.tmpl.replaceWordHtml(d,"ext",desknets.getExtension());d=desknets.tmpl.replaceWord(d,"L_ERROR",desknets.Resource.Message.com_webclip_error);d=desknets.tmpl.replaceWord(d,"L_SECURE_ERROR",desknets.Resource.Message.com_webclip_secure_error);d=desknets.tmpl.replaceWord(d,"L_UNSUPPORTED_ERROR",desknets.Resource.Message.com_webclip_unsupported_error);c=desknets.tmpl.replaceWordHtml(d,"type","img");f.find(".co-webclip-clip-image").attr("href",c);a("#jco-webclip-textarea-image").val(c);b=desknets.tmpl.replaceWordHtml(d,"type","html");f.find(".co-webclip-clip-page").attr("href",b);a("#jco-webclip-textarea-page").val(b)},_initTutorial:function(c){var b=this;var d=c.find("video > source");if(desknets.browser.msie){this._setUpGuide(c,"msie")}else{if(desknets.browser.firefox){this._setUpGuide(c,"firefox")}else{if(desknets.browser.chrome){this._setUpGuide(c,"chrome")}else{if(desknets.browser.safari){this._setUpGuide(c,"safari")}}}}},_initHelp:function(c){var b=this;var d=a(".co-m-h-setting-menu.hplink > a").attr("href");d=String(d).replace(/\w+\.html$/,"webclip.html");c.find(".co-webclip-link > a").attr("href",d)},_setUpGuide:function(c,e){var b=this;var d=this.TMPL_VIDEO;d=desknets.tmpl.replaceWordHtml(d,"target",e);c.find(".co-webclip-guides").html(d)}};desknets.cabset={MODULE_CABINET:"zcabinet",MODULE_API_CABINET:"zrcabinet",PAGE_CABLIST:"cabindex",PAGE_CABSEARCH:"cabsearch",PAGE_CABPSETGEN:"cabpsetgen",CMD_CABPSETGEN:"cabpsetcmdgen",PAGE_CABPSETFILTERLIST:"cabpsetfilterlist",CMD_CABPSETFILTERLIST:"cabpsetcmdfilterlist",PAGE_CABPSETFILTERENTRY:"cabpsetfilterentry",CMD_CABPSETFILTERENTRY:"cabpsetcmdfilterentry",CMD_CABPSETFILTERENTRYS:"cabpsetcmdfilterentrys",CMD_CABPSETDELFILTER:"cabpsetdelfilter",PAGE_CABPSETWEBCLIP:"cabpsetwebclip",PAGE_CABMSETINDEX:"cabmsetindex",PAGE_CABMSETLIST:"cabmsetlist",PAGE_CABMSETENTRY:"cabmsetentry",PAGE_CABMSETREFER:"cabmsetrefer",PAGE_CABMSETSEARCH:"cabmsetsearch",PAGE_CABMSETFOLDERACCESS:"cabmsetfolderaccess",CMD_CABMSETINDEX:"cabmsetcmdindex",CMD_CABMSETLIST:"cabmsetcmdlist",CMD_CABMSETENTRY:"cabmsetcmdentry",CMD_CABMSETDEL:"cabmsetdel",CMD_CABMSETDELINDEX:"cabmsetdelindex",CMD_CABMSETCONFDELINDEX:"cabmsetconfdelindex",CMD_CABMSETREFER:"cabmsetcmdrefer",CMD_CABMSETREGIST:"cabmsetregist",CMD_CABMSETUSERSEL:"cabmsetcmdusersel",CMD_CABMSETMOVE:"cabmsetmove",CMD_CABMSETSEARCH:"cabmsetcmdsearch",CMD_CABMSETSEARCHSTOP:"cabmsetsearchstop",CMD_CABMSETSEARCHDEL:"cabmsetdelsearch",CMD_CABMSETSEARCHCONFDEL:"cabmsetconfsearchdel",CMD_CABMSETSEARCHBAT:"cabmsetsearchbat",CMD_CABMSETADDATTACH:"cabmsetcmdaddattach",CMD_CABMSETDELATTACH:"cabmsetcmddelattach",CMD_CABMSETFOLDERLIST:"cabmsetcmdfolderlist",CMD_CABMSETFOLDERLISTCHILD:"cabmsetcmdfolderlistchild",CMD_CABMSETFOLDERMOVE:"cabmsetcmdfoldermove",CMD_CABMSETFOLDERMOVEPARENT:"cabmsetcmdfolderpmove",CMD_CABMSETFOLDERENTRY:"cabmsetcmdfolderentry",CMD_CABMSETFOLDERDELETE:"cabmsetcmdfolderdel",CMD_CABMSETFOLDERACCESS:"cabmsetcmdfolderaccess",CMD_CABMSETFOLDERACCSAUTH:"cabmsetcmdfolderaccessauth",CMD_CABMSETCONNECTAPP:"cabmsetcmdconnectapp",CMD_CABMSETREFATTACH:"cabmsetdispattach",CMD_CABMSETADDATTACH:"cabmsetcmdaddattach",CMD_CABMSETDELATTACH:"cabmsetcmddelattach",PAGE_CABSETADMIN:"cabsetadmin",PAGE_CABSETGEN:"cabsetgen",CMD_CABSETGEN:"cabsetcmdgen",PAGE_CABSETMANAGER:"cabsetmanager",PAGE_CABSETCAPACITY:"cabsetcapacity",CMD_CABSETCAPACITY:"cabsetcmdcapacity",PAGE_CABSETCAPACITYENTRY:"cabsetcapacityentry",CMD_CABSETCAPACITYENTRY:"cabsetcmdcapacityentry",CMD_CABSETCAPACITYENTRYS:"cabsetcmdcapacityentrys",init:function(){var b=a("#jco-pv-funcid").val();desknets.pageframe.setFuncSel(b);if(b==desknets.cabset.PAGE_CABPSETGEN){desknets.cabset.cabpsetgen.init();desknets.cab.subwin.init();desknets.cab.subwinuser.init()}else{if(b==desknets.cabset.PAGE_CABPSETFILTERLIST){desknets.hashobserver.init(desknets.cabset);desknets.cabset.cabpsetfilterlist.init();desknets.cab.subwin.init();desknets.cab.subwinuser.init()}else{if(b==desknets.cabset.PAGE_CABPSETWEBCLIP){desknets.cabset.cabpsetwebclip.init();desknets.cab.subwin.init();desknets.cab.subwinuser.init()}else{if(b==desknets.cabset.PAGE_CABMSETINDEX){desknets.hashobserver.init(desknets.cabset);desknets.cabset.subwin.init();desknets.cabset.cabmsetindex.init()}else{if(b==desknets.cabset.PAGE_CABSETGEN){desknets.cabset.cabsetgen.init()}else{if(b==desknets.cabset.PAGE_CABSETMANAGER){desknets.cabset.cabsetmanager.init()}else{if(b==desknets.cabset.PAGE_CABSETCAPACITY){desknets.hashobserver.init(desknets.cabset);desknets.cabset.cabsetcapacity.init()}}}}}}}},getFolderCmd:function(){var b=this;return{restAPI:b.MODULE_API_CABINET,listCMD:b.CMD_CABMSETFOLDERLIST,listchildCMD:b.CMD_CABMSETFOLDERLISTCHILD,moveparentCMD:b.CMD_CABMSETFOLDERMOVEPARENT,movebetweenCMD:b.CMD_CABMSETFOLDERMOVE}},};desknets.page(desknets.cabset,"subwin",desknets.cab.subwin,{_setInit:function(){var c=this;var b=desknets.paramanalyzer.getHashParams();c.setSubWinSelectFolder(false);if(b.cmd==null||b.cmd==desknets.cabset.PAGE_CABMSETINDEX){c.setBtnDisable(true)}},setBtnDisable:function(b){var c=this;c.$_inputArea.find(".co-guide-searchbtn").attr("disabled",b)},_getSearchPrm:function(e){var b=this;var f=null;var c=b.$_inputArea;var d=desknets.paramanalyzer.getHashParams();e=b.callBase("_getSearchPrm",e);e.userid=d.userid;f=c.find('select[name="sfolder"]').val();if(neo.isSet(f,{blank:false})&&!neo.isSet(e.folder)){e.folder=a("#jcab-m-list-container").find(".co-listview-item").find(".on").parent("li").attr("data-fid")}return e},_getInputFolderValue:function(){return a("#jcab-m-list-container").find(".jco-back-page-data").find('input[name="folder"]').val()},_getMainCmd:function(){return desknets.cabset.PAGE_CABMSETLIST},_getSearchCmd:function(){return desknets.cabset.PAGE_CABMSETSEARCH}});desknets.page(desknets.cabset,"cabattach",desknets.cab.cabattach,{_initSetDefPrm:function(){var c=this;var b=desknets.paramanalyzer.getHashParams();c.callBase("_initSetDefPrm");this._objDefPrm.userid=b.userid},_getUploadCmd:function(){return desknets.cabset.CMD_CABMSETADDATTACH},_getDelCmd:function(){return desknets.cabset.CMD_CABMSETDELATTACH},_getDownLoadCmd:function(){return desknets.cabset.CMD_CABMSETREFATTACH}});desknets.page(desknets.cabset,"cabfolderlist",desknets.cab.cabfolderlist,{boCabInit:true,init:function(e,d,b){var c=this;c._initfid="";c.boCabInit=true;c.callBase("init",e,d,b)},_getRequestFirstParams:function(){var b=this;var e=b._initfid;var d={cmd:this._getFolderListCmd()};var c=desknets.paramanalyzer.getHashParams();if(e.length>0){d.folder=e}d.userid=c.userid;return d},_getRequestParams:function(e){var b=this;var d=b.callBase("_getRequestParams",e);var c=desknets.paramanalyzer.getHashParams();d.userid=c.userid;return d},_getRequestMoveParams:function(g,f,b){var c=this;var e=c.callBase("_getRequestMoveParams",g,f,b);var d=desknets.paramanalyzer.getHashParams();e.userid=d.userid;return e},_getHtmlFromJson:function(e){var c=this;var f="";if(c._boUpdate){f=c.callBase("_getHtmlFromJson",e)}else{if(c.boCabInit){c.boCabInit=false;a("#jcab-m-list-container").find(".jco-back-page-data").find('input[name="folder"]').val(e.folder);var d=desknets.paramanalyzer.getHashParams();var b=0;if(neo.isSet(d.row)){b=d.row}desknets.cabset.cabmsetlist._getListAjax(b)}f=c.callBase("_getHtmlFromJson",e)}return f},_isGetFirstTreeAjax:function(){var b=desknets.paramanalyzer.getHashParams();return(b.cmd==desknets.cab.PAGE_CABMSETLIST)}});desknets.page(desknets.cabset,"cabfolderaccess",desknets.cab.cabfolderaccess,{init:function(e,d){var b=this;b.callBase("init",e,d);var c=desknets.paramanalyzer.getHashParams();a("#Accessfrm").append('<input type="hidden" name="userid" value="'+c.userid+'" />')},_getRequestAccsAuthParams:function(c){var b=this;var e=desknets.paramanalyzer.getHashParams();var d=b.callBase("_getRequestAccsAuthParams",c);d.userid=e.userid;return d},_getRequestAccsAuthCmd:function(){return desknets.cabset.CMD_CABMSETFOLDERACCSAUTH},_isMSetCmd:function(){return true}});desknets.page(desknets.cabset,"cabfolderdialog_entry",desknets.cab.cabfolderdialog_entry,{_getRequestEntryParams:function(b){var c=this;var e=desknets.paramanalyzer.getHashParams();var d=c.callBase("_getRequestEntryParams",b);d.userid=e.userid;return d},_getFolderEntryCmd:function(){return desknets.cabset.CMD_CABMSETFOLDERENTRY},});desknets.page(desknets.cabset,"cabfolderdialog_access",desknets.cab.cabfolderdialog_access,{_getAccsTmplParams:function(){var b=this;var d=desknets.paramanalyzer.getHashParams();var c=b.callBase("_getAccsTmplParams");c.userid=d.userid;return c},_getRequestAccsCmd:function(){return desknets.cabset.PAGE_CABMSETFOLDERACCESS},_initFolderAccessDlg:function(){desknets.cabset.cabfolderaccess.init(this._getAjaxFormAccsDlgOption())},});desknets.page(desknets.cabset,"cabfolderdialog_delete",desknets.cab.cabfolderdialog_delete,{_getRequestDelParams:function(){var b=this;var d=desknets.paramanalyzer.getHashParams();var c=b.callBase("_getRequestDelParams");c.userid=d.userid;return c},_getFolderDelCmd:function(){return desknets.cabset.CMD_CABMSETFOLDERDELETE},});desknets.page(desknets.cabset,"cabfolderinput",desknets.cab.cabfolderinput,{_getRequestFirstParams:function(){var c=this;var e=c._initfid;var b=desknets.paramanalyzer.getHashParams();var d={cmd:this._getFolderListCmd()};if(e.length>0){d.folder=e}d.userid=b.userid;return d},_getRequestParams:function(e){var c=this;var d=c.callBase("_getRequestParams",e);var b=desknets.paramanalyzer.getHashParams();d.userid=b.userid;return d},});desknets.page(desknets.cabset,"cabfolderdisp",desknets.cab.cabfolderdisp,{_getRequestFirstParams:function(){var c=this;var e=c._initfid;var b=desknets.paramanalyzer.getHashParams();var d={cmd:this._getFolderListCmd()};if(e.length>0){d.folder=e}d.userid=b.userid;return d},_getRequestParams:function(e){var c=this;var d=c.callBase("_getRequestParams",e);var b=desknets.paramanalyzer.getHashParams();d.userid=b.userid;return d},});desknets.page(desknets.cabset,"cabpsetgen",desknets.PageSet,{init:function(){var b=this;b.callBase("init");b._initSetUpFolderSel()},_initSetUpFolderSel:function(){var b=this;var c={};c.module=desknets.cab.MODULE_API_CABINET;c.cmddef=desknets.cab.CMD_CABFOLDERLIST;c.cmdchild=desknets.cab.CMD_CABFOLDERLISTCHILD;desknets.chooserSingleSelFolder.init(a("#jcab-foldersel-area"),c)},_getNextCmd:function(){return desknets.cabset.PAGE_CABLIST}});desknets.page(desknets.cabset,"cabpsetfilterlist",desknets.PageInputList,{_sDelFlg:"0",_replaceListLine:function(c,e,d){var b=this;if(e=="filter"){c=b._replacEnableLine(c,e,d)}else{c=b.callBase("_replaceListLine",c,e,d)}return c},_replacEnableLine:function(c,f,e){var b="";var d="";if(e[f]=="1"){b=desknets.Resource.enable}else{b=desknets.Resource.disables;d="co-tr-off"}c=desknets.tmpl.replaceWordHtml(c,"trclass",d);c=desknets.tmpl.replaceWordHtml(c,f,b);return c},_initListEndButton:function(){var b=this;b.callBase("_initListEndButton");b.$mjListPage.find(".jcab-list-del-submit").click(function(c){b._sDelFlg="0";b._listDelSubmit(c)});b.$mjListPage.find(".jcab-list-enable-submit").click(function(c){b._sDelFlg="1";b._listDelSubmit(c)});b.$mjListPage.find(".jcab-list-disables-submit").click(function(c){b._sDelFlg="2";b._listDelSubmit(c)})},_delNoChkMessage:function(){var b=this;if(b._sDelFlg=="1"){return desknets.Resource.Message.com_enable_nochecked}else{if(b._sDelFlg=="2"){return desknets.Resource.Message.com_disenable_nochecked}}return b.callBase("_delNoChkMessage")},_delConfMessage:function(){var c=this;var b="";if(c._sDelFlg=="1"){if(c.$mjListPage.find(".co-chk-cnt-all").css("display")=="block"){return desknets.Resource.Message.com_enable_allconf}else{b=desknets.Resource.Message.com_enable_listconf}return desknets.tmpl.replaceWordHtml(b,"count",c._getListCheckCount())}else{if(c._sDelFlg=="2"){if(c.$mjListPage.find(".co-chk-cnt-all").css("display")=="block"){return desknets.Resource.Message.com_disenable_allconf}else{b=desknets.Resource.Message.com_disenable_listconf}return desknets.tmpl.replaceWordHtml(b,"count",c._getListCheckCount())}}return c.callBase("_delConfMessage")},_initListEndChk:function(){var b=this;b.$mjListPage.find(".co-table-list").find("thead").delegate(".jco-checkbox-all","click",function(d){var c=(a(this).attr("checked"))?true:false;b.$mjTableList.find("input[type=checkbox]").attr("checked",c);if(c){b.$mjTableList.find("tr").addClass("co-tr-selected")}else{b.$mjTableList.find("tr").removeClass("co-tr-selected")}if(b.$mjListPage.find(".jco-sort-change").css("display")!="block"){if(c){b.$mjListPage.find(".co-chk-cnt-all").show()}else{b.$mjListPage.find(".co-chk-cnt-some").hide();b.$mjListPage.find(".co-chk-cnt-all").hide()}}});b.$mjListPage.find(".co-chk-cnt-all").find("a").remove()},_listAllChkDataCnt:function(){var b=this;var d=0;d=b.$mjListPage.find(".co-tbody-list").find("tr").length;var c=desknets.Resource.Message.com_listchk_cnt_all_disp;c=desknets.tmpl.replaceWordLF(c,"num",d+" ");b.$mjListPage.find(".jco-span-chk-msg-all").html(c);return},_getDelAddPrm:function(){var b=this;var c={};if(b._sDelFlg=="1"){c.filter="1"}else{if(b._sDelFlg=="2"){c.filter="0"}}return c},_getDelExecCmd:function(){var b=this;if(b._sDelFlg=="1"){return desknets.cabset.CMD_CABPSETFILTERENTRYS}else{if(b._sDelFlg=="2"){return desknets.cabset.CMD_CABPSETFILTERENTRYS}}return desknets.cabset.CMD_CABPSETDELFILTER},_getListAjaxSuccessOtherSet:function(c){var b=this;var d=this._getListAjaxSuccessData(c);b.callBase("_getListAjaxSuccessOtherSet",c);if(d.length==c.dispmodulecnt){b.$mjListPage.find(".jco-list-add-page").attr("disabled","disabled")}else{b.$mjListPage.find(".jco-list-add-page").removeAttr("disabled")}},_getRestModule:function(){return desknets.cabset.MODULE_API_CABINET},_getListCmd:function(){return desknets.cabset.PAGE_CABPSETFILTERLIST},_getListExecCmd:function(){return desknets.cabset.CMD_CABPSETFILTERLIST},_getListAddCmd:function(){return desknets.cabset.PAGE_CABPSETFILTERENTRY},_getListModCmd:function(){return desknets.cabset.PAGE_CABPSETFILTERENTRY},_getListEntryClass:function(){return desknets.cabset.cabpsetfilterentry},_getListModClass:function(){return desknets.cabset.cabpsetfilterentry}});desknets.page(desknets.cabset,"cabpsetfilterentry",desknets.PageInputBase,{_initSet:function(c){var b=this;b.callBase("_initSet",c);b._initSetUpFolderSel()},_initSetUpFolderSel:function(){var b={};b.module=desknets.cab.MODULE_API_CABINET;b.cmddef=desknets.cab.CMD_CABFOLDERLIST;b.cmdchild=desknets.cab.CMD_CABFOLDERLISTCHILD;desknets.chooserSingleSelFolder.init(a("#jcab-foldersel-area"),b,{keyName:"savefolder"})},_inputAddSubmit:function(){var b=this;b.callBase("_inputAddSubmit");b._setFolderId()},_inputModSubmit:function(){var b=this;b.callBase("_inputModSubmit");b._setFolderId()},_setFolderId:function(){var b=this;var c=b.$mjPage.find(".jco-sel-items");if(c.find('input[name="savefolder"]').length==0){c.append('<input type="hidden" name="savefolder" value="" />')}},_getRestModule:function(){return desknets.cabset.MODULE_API_CABINET},_getDelExecCmd:function(){return desknets.cabset.CMD_CABPSETDELFILTER},_getAddExecCmd:function(){return desknets.cabset.CMD_CABPSETFILTERENTRY},_getModExecCmd:function(){return this._getAddExecCmd()}});desknets.page(desknets.cabset,"cabpsetwebclip",desknets.PageSet,{init:function(){var b=this;b.callBase("init");desknets.webClip.init(a(".co-setarea"))},});desknets.page(desknets.cabset,"cabmsetindex",desknets.PageListBase,{initParamsFromHash:function(c){var b=this;b.changeSubWin();b.callBase("initParamsFromHash",c)},changeSubWin:function(){var c=this;var b=desknets.paramanalyzer.getHashParams();if(!neo.isSet(b.cmd)||b.cmd==c._getListCmd()){desknets.cabset.subwin.setBtnDisable(true)}else{desknets.cabset.subwin.setBtnDisable(false)}if(b.cmd==desknets.cabset.PAGE_CABMSETLIST||(b.cmd==desknets.cabset.PAGE_CABMSETSEARCH&&neo.isSet(b.sfolder,{blank:false}))){desknets.cabset.subwin.setSubWinSelectFolder(true)}else{desknets.cabset.subwin.setSubWinSelectFolder(false)}},_hashUpdatePageView:function(c){var b=this;var e=desknets.paramanalyzer.getHashParams();if(c==desknets.cabset.PAGE_CABMSETLIST){var d=a("#jcab-m-list-container").find(".jco-back-page-data");if(d.length>0&&!neo.isSet(e.init)){desknets.cabset.cabmsetlist._hashUpdateListPage(e)}else{desknets.cabset.cabmsetlist.mboSetwatermark=false;desknets.cabset.cabmsetlist.initPage(desknets.cabset.PAGE_CABMSETINDEX,"jco-m-list-container")}b.mhashBackErrCmd=b.mhashBackCmd;b.mhashIdErrBack=b.mhashIdBack;b.mhashBackCmd=c;b.mhashIdBack="jcab-m-list-container"}else{if(c==desknets.cabset.PAGE_CABMSETREFER){desknets.cabset.cabmsetdisp.initPage(b.mhashBackCmd,b.mhashIdBack)}else{if(c==desknets.cabset.PAGE_CABMSETENTRY){desknets.cabset.cabmsetentry.initPage(b.mhashBackCmd,b.mhashIdBack)}else{if(c==desknets.cabset.PAGE_CABMSETSEARCH){desknets.cabset.cabmsetsearch.initPage(desknets.cabset.PAGE_CABMSETLIST,"jcab-m-list-container");b.mhashBackErrCmd=b.mhashBackCmd;b.mhashIdErrBack=b.mhashIdBack;b.mhashBackCmd=c;b.mhashIdBack="jco-m-search-container"}}}}},_getListAjaxSuccess:function(c){var b=this;b.callBase("_getListAjaxSuccess",c);desknets.page.groupSelect.editSelectedGroup(a(".jco-sel-items"),c)},_listLine:function(c,d){var b=this;c=b.callBase("_listLine",c,d);if(!neo.isSet(d[desknets.user.KEY_ASSIGNGROUP])){c=desknets.tmpl.replaceWordHtml(c,desknets.user.KEY_ASSIGNGROUP,"&nbsp;");c=desknets.tmpl.replaceWordHtml(c,"assigntitle","&nbsp;")}return c},_replaceListLine:function(c,e,d){var b=this;if(e=="assigngrp"){c=b._replaceGrpLine(c,e,d)}else{if(e=="size"){c=b._replaceSizeLine(c,e,d)}else{if(e=="capa"){c=b._replaceCapaLine(c,e,d)}else{c=b.callBase("_replaceListLine",c,e,d)}}}return c},_replaceGrpLine:function(c,f,e){var d=[];d=desknets.user.getListAssignGroups(e[f].Name);var b="";if(d.assigntitle!==""){b='<span title="'+d.assigntitle+'">'+d.assign+"</span>"}c=desknets.tmpl.replaceWordHtml(c,f,b);return c},_replaceSizeLine:function(c,e,d){var b="";if(d[e]===""){b=desknets.Resource.setnot}else{b=desknets.numberFormatByte(parseInt(d[e],10),0,2,2)}c=desknets.tmpl.replaceWordHtml(c,e,b);return c},_replaceCapaLine:function(c,h,f){var b=parseInt(f[h]||"0",10);var e=desknets.numberFormatByte(b,0,0,2);var d="";if(f.size!==""){var g=parseInt(f.size,10)*1024*1024;d=" ("+desknets.capacity.formatPercentage(b,g)+")"}c=desknets.tmpl.replaceWordHtml(c,h,e);c=desknets.tmpl.replaceWordHtml(c,"rate",d);return c},_initListStart:function(){var b=this;b.callBase("_initListStart");var c={allGroup:"choosable",unassignGroup:"choosable"};desknets.page.groupSelect.init({},c)},_initListStartChk:function(){},_initListStartModLink:function(){},_getIdListPageForm:function(){return"topfrm"},_getRestModule:function(){return desknets.cabset.MODULE_API_CABINET},_getListCmd:function(){return desknets.cabset.PAGE_CABMSETINDEX},_getListExecCmd:function(){return desknets.cabset.CMD_CABMSETINDEX},});desknets.page(desknets.cabset,"cabmsetlist",desknets.cab.cabindex,{initPage:function(e,c){var b=this;if(b.$mjListPage!=null){var d=b.$mjListPage.find(".co-list-search-text");if(d.is(":focus")){d.blur()}}b.callBase("initPage",e,c)},initLeftTree:function(){var b=this;desknets.cabset.cabfolderlist.init(b.$mjListPage,b._getOptionLeftTree(),b._optTreeGetCmd())},treeUpdateListWidth:function(){desknets.cabset.cabfolderlist._updateItemsWidth()},treeUpdateList:function(){desknets.cabset.cabfolderlist.updateTreeList()},_optTreeGetCmd:function(){return desknets.cabset.getFolderCmd()},_optTreeIsEdit:function(){return true},_optTreeInitFuncDialog:function(c,b){desknets.cabset.cabfolderdialog_access.init(c,b);desknets.cabset.cabfolderdialog_entry.init(c,b);desknets.cabset.cabfolderdialog_delete.init(c,b)},_setTitle:function(d){var c=this;var b={};b.username=c.$mjListPage.find(".jcab-title-username").val();c.callBase("_setTitle",d,b)},_getFolderTitleClass:function(){return"co-title-size-half"},_chkDefFolder:function(b){},_getSearchPageParam:function(){return desknets.paramanalyzer.getHashParams()},_initListEndButton:function(){var b=this;b.callBase("_initListEndButton");b.$mjListPage.find(".co-pageback").click(function(c){c.preventDefault();b.dispBackListPage()})},_listLinePrm:function(c,d){var b=this;c=b.callBase("_listLinePrm",c,d);var e=desknets.paramanalyzer.getHashParams();c=desknets.tmpl.replaceWord(c,"userid",e.userid);return c},_getSearchParam:function(){var b=this;var d=desknets.paramanalyzer.getHashParams();var c={};c=b.callBase("_getSearchParam");c.userid=d.userid;return c},_getDispPageParam:function(){var b=this;var d=desknets.paramanalyzer.getHashParams();var c={};c=b.callBase("_getDispPageParam");c.userid=d.userid;return c},_getModPageParam:function(){var b=this;var d=desknets.paramanalyzer.getHashParams();var c={};c=b.callBase("_getModPageParam");c.userid=d.userid;return c},_listPageLinkOption:function(){var c=this;var b={};var d=a("#jco-m-list-container").find('input[name="cabnum"]').val();b=c.callBase("_listPageLinkOption");b.pageMaxView=d;return b},_getIdListPage:function(){return"jcab-m-list-container"},_getListCmd:function(){return desknets.cabset.PAGE_CABMSETLIST},_getListExecCmd:function(){return desknets.cabset.CMD_CABMSETLIST},_getMoveListCmd:function(){return desknets.cabset.CMD_CABMSETMOVE},_getListDispCmd:function(){return desknets.cabset.PAGE_CABMSETREFER},_getListModCmd:function(){return desknets.cabset.PAGE_CABMSETENTRY},_getDelCmd:function(){return desknets.cabset.CMD_CABMSETCONFDELINDEX},_getDelExecCmd:function(){return desknets.cabset.CMD_CABMSETDELINDEX}});desknets.page(desknets.cabset,"cabmsetentry",desknets.cab.cabentry,{initLeftTree:function(){var b=this;desknets.cabset.cabfolderinput.init(b.$mjPage,b._getOptionLeftTree(),b._optTreeGetCmd())},treeUpdateListWidth:function(){desknets.cabset.cabfolderinput._updateItemsWidth()},_optTreeGetCmd:function(){return desknets.cabset.getFolderCmd()},_getOptionLeftTree:function(){var b=this;var c=b.callBase("_getOptionLeftTree");c.listAreaObj=a("#jcab-m-list-container");return c},_getAreaTitle:function(b){var c=this;return b.find(".jco-title-mset").val()},_initSetTag:function(){},_setAttachArea:function(){var b=this;desknets.cabset.cabattach.init(b.$mjPage,false)},_updatePageListId:function(){var b=this;var f=a("#jcab-m-list-container").find(".jco-back-page-data");var e=b.$mjPage.find("#jco-add-folder");var c=b.getInputFieldName();var d=e.find(".co-selitem").eq(0).find('input[name="'+c+'"]').val();f.find('input[name="folder"]').val(d)},getLocationFormParam:function(){var b=this;var c={};var d=desknets.paramanalyzer.getHashParams();if(!neo.isSet(b.mBackCmd)||!neo.isSet(b.mIdBack)){return null}if(b.mBackCmd===desknets.cabset.PAGE_CABMSETINDEX){c.userid=d.userid;c.folder=d.folder;c.cmd=desknets.cabset.PAGE_CABMSETLIST}else{c=b.callBase("getLocationFormParam")}return c},getSearchExec:function(){var b=this;if(b.mbSearch===true){if(neo.isSet(b.mBackCmd)&&b.mBackCmd==desknets.cabset.PAGE_CABMSETSEARCH){desknets.cabset.cabmsetsearch._onSrchExec=true}}},_getDelPrm:function(){var c=this;var d={};var b=desknets.paramanalyzer.getHashParams();d.userid=b.userid;return d},_getDelExecCmd:function(){return desknets.cabset.CMD_CABMSETDEL},_getAddExecCmd:function(){return desknets.cabset.CMD_CABMSETENTRY},_getSearchCmd:function(){return desknets.cabset.PAGE_CABMSETSEARCH},_setTitle:function(d){var c=this;var b={};b.username=c.$mjPage.find(".jcab-title-username").val();c.callBase("_setTitle",d,b)},_getAreaTitle:function(b){return b.find(".jco-title-other").val()}});desknets.page(desknets.cabset,"cabmsetdisp",desknets.cab.cabdisp,{initLeftTree:function(){var b=this;desknets.cabset.cabfolderdisp.init(b.$mjPage,b._getOptionLeftTree(),b._optTreeGetCmd());b._treeClass=desknets.cabset.cabfolderdisp},treeUpdateListWidth:function(){desknets.cabset.cabfolderdisp._updateItemsWidth()},_optTreeGetCmd:function(){return desknets.cabset.getFolderCmd()},_getOptionLeftTree:function(){var b=this;var c=b.callBase("_getOptionLeftTree");c.listAreaObj=a("#jcab-m-list-container");return c},_setTitle:function(d){var c=this;var b={};b.username=c.$mjPage.find(".jcab-title-username").val();c.callBase("_setTitle",d,b)},_getAreaTitle:function(b){var c=this;return b.find(".jco-title-mset").val()},_getDelPrm:function(){var c=this;var d={};var b=desknets.paramanalyzer.getHashParams();d.userid=b.userid;return d},_initSetTag:function(){},getCabUserId:function(){var c=this;var b=desknets.paramanalyzer.getHashParams();return b.userid},getLocationFormParam:function(){var b=this;var c={};var d=desknets.paramanalyzer.getHashParams();if(!neo.isSet(b.mBackCmd)||!neo.isSet(b.mIdBack)){return null}if(b.mBackCmd===desknets.cabset.PAGE_CABMSETINDEX){c.userid=d.userid;c.folder=d.folder;c.cmd=desknets.cabset.PAGE_CABMSETLIST}else{c=b.callBase("getLocationFormParam")}return c},getSearchExec:function(){var b=this;if(b.mbSearch===true){if(neo.isSet(b.mBackCmd)&&b.mBackCmd==desknets.cabset.PAGE_CABMSETSEARCH){desknets.cabset.cabmsetsearch._onSrchExec=true}}},_optTreeSelItemParams:function(){var b=this;if(b.mIdBack=="jco-m-search-container"){return{cmd:desknets.cabset.PAGE_CABMSETLIST,userid:b.getCabUserId()}}return b.callBase("_optTreeSelItemParams")},editDispFolderList:function(e){var c=this;var d={};var f=a("#jcab-m-list-container").find(".jco-back-page-data");var b=desknets.paramanalyzer.getHashParams();d.cmd=desknets.cab.PAGE_CABMSETLIST;d.userid=b.userid;d.srch_key="";d.row="0";d.fldsort=f.find('input[name="fldsort"]').val();d.order=f.find('input[name="order"]').val();return desknets.folderdisp.editDispFolderList(e,null,d)},_getDispExecCmd:function(){return desknets.cabset.CMD_CABMSETREFER},_getDispModCmd:function(){return desknets.cabset.PAGE_CABMSETENTRY},_getDelExecCmd:function(){return desknets.cabset.CMD_CABMSETDEL},_getDispAttachCmd:function(){return desknets.cabset.CMD_CABMSETREFATTACH},_getSearchCmd:function(){return desknets.cabset.PAGE_CABMSETSEARCH},_getConnectAppCmd:function(){return desknets.cabset.CMD_CABMSETCONNECTAPP},});desknets.page(desknets.cabset,"cabmsetsearch",desknets.cab.cabsearch,{_getSearchConditionParams:function(){var b=this;var c=[];c=b.callBase("_getSearchConditionParams");c.push("userid");return c},_setTitle:function(d){var c=this;var b={};b.username=c.$mjListPage.find(".jcab-username").val();c.callBase("_setTitle",d,b)},_getAreaTitle:function(b){var d=this;var e="";var c="";if(d._msStartDate!=""){e=d._getAreaTitleDate()}c=b.find(".jco-title-mset").val()+e;return c},getLocationFormParam:function(){var b=this;var c={};var d=desknets.paramanalyzer.getHashParams();if(!neo.isSet(b.mBackCmd)||!neo.isSet(b.mIdBack)){return null}var e=a("#"+b.mIdBack).find(".jco-back-page-data");if(e.length>0){c=b.callBase("getLocationFormParam")}else{c.userid=d.userid;c.cmd=b.mBackCmd}return c},_listLinePrm:function(c,d){var b=this;var e=desknets.paramanalyzer.getHashParams();c=desknets.tmpl.replaceWord(c,"userid","&userid="+e.userid);return c},_getSearchPageParam:function(){var c=this;var d={};var b=desknets.paramanalyzer.getHashParams();if(!this.boGetHtmlSingle){d=b}d.userid=b.userid;return d},_getDelAddPrm:function(){var c=this;var d={};var b=desknets.paramanalyzer.getHashParams();d=c.callBase("_getDelAddPrm");d.userid=b.userid;return d},_getDispPageParam:function(){var c=this;var d={};var b=desknets.paramanalyzer.getHashParams();d=c.callBase("_getModPageParam");d.userid=b.userid;return d},_getModPageParam:function(){var c=this;var d={};var b=desknets.paramanalyzer.getHashParams();d=c.callBase("_getModPageParam");d.userid=b.userid;return d},_getListCmd:function(){return desknets.cabset.PAGE_CABMSETSEARCH},_getListExecCmd:function(){return desknets.cabset.CMD_CABMSETSEARCH},_getStopBatSearchCmd:function(){return desknets.cabset.CMD_CABMSETSEARCHSTOP},_getListDispCmd:function(){return desknets.cabset.PAGE_CABMSETREFER},_getListAddCmd:function(){return desknets.cabset.PAGE_CABMSETENTRY},_getListModCmd:function(){return desknets.cabset.PAGE_CABMSETENTRY},_getDelCmd:function(){return desknets.cabset.CMD_CABMSETSEARCHCONFDEL},_getDelExecCmd:function(){return desknets.cabset.CMD_CABMSETSEARCHDEL}});desknets.page(desknets.cabset,"cabsetgen",desknets.PageSet,{_getNextCmd:function(){return desknets.cabset.PAGE_CABSETADMIN}});desknets.page(desknets.cabset,"cabsetmanager",desknets.PageAdmin,{_getSetCondition:function(){return false},_getNextCmd:function(){return desknets.cabset.PAGE_CABSETADMIN}});desknets.page(desknets.cabset,"cabsetcapacity",desknets.PageCapacityList,{_getRestModule:function(){return desknets.cabset.MODULE_API_CABINET},_getListCmd:function(){return desknets.cabset.PAGE_CABSETCAPACITY},_getListExecCmd:function(){return desknets.cabset.CMD_CABSETCAPACITY},_getListAddCmd:function(){return desknets.cabset.PAGE_CABSETCAPACITYENTRY},_getListModCmd:function(){return desknets.cabset.PAGE_CABSETCAPACITYENTRY},_getDelExecCmd:function(){return desknets.cabset.CMD_CABSETCAPACITYENTRYS},_getListEntryClass:function(){return desknets.cabset.cabsetcapacityentry},_getListModClass:function(){return desknets.cabset.cabsetcapacityentry},_getBackCmd:function(){return desknets.cabset.PAGE_CABSETADMIN}});desknets.page(desknets.cabset,"cabsetcapacityentry",desknets.PageCapacityInput,{_getRestModule:function(){return desknets.cabset.MODULE_API_CABINET},_getAddExecCmd:function(){return desknets.cabset.CMD_CABSETCAPACITYENTRYS},_getModExecCmd:function(){return desknets.cabset.CMD_CABSETCAPACITYENTRY}});app.addInitialAction(function(){desknets.cabset.init()})})(jQuery);