/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.log={MODULE_API_LOG:"zrlog",PAGE_SETADMIN:"setadmin",PAGE_LOGACCLOGGINGSET:"logaccloggingset",PAGE_LOGACCLOGGINGGET:"logaccloggingget",PAGE_LOGACCLOGGINGDEL:"logaccloggingdel",CMD_LOGACCLOGGINGDEL:"logcmdaccloggingdel",PAGE_LOGACCLOGGINGLST:"logacclogginglst",CMD_LOGACCLOGGINGLST:"logcmdacclogginglst",CMD_LOGACCLOGGINGDL:"logcmdaccloggingdl",CMD_LOGACCLOGGINLSTGDEL:"logcmdacclogginglstdel",PAGE_LOGACCSYSTEM:"logaccsystem",CMD_LOGACCSYSTEM:"logcmdaccsystem",CMD_LOGACCSYSTEMCNT:"logcmdaccsystemcnt",CMD_LOGACCSYSTEMRECNT:"logcmdaccsystemrecnt",CMD_LOGACCSYSTEMDEL:"logcmdaccsystemdel",CMD_LOGACCSSYTEMLIST:"logcmdaccsystemlist",init:function(){var b=a("#jco-pv-funcid").val();desknets.hashobserver.init(desknets.log);desknets.pageframe.setFuncSel(b);if(b){a("li.sysad-setting-toggle").find("#"+b).parents("li.sysad-setting-toggle",a("li.sysad-setting-toggle")).addClass("open")}a("li.sysad-setting-toggle").children("a").click(function(){a(this).parent().siblings().removeClass("open");a(this).parent().toggleClass("open");return false});a("#co-m-h-setting-menus").find(":not(.hplink)>.co-m-h-setting-list-label").unbind("click");if(b==desknets.log.PAGE_LOGACCLOGGINGSET){desknets.log.logaccloggingset.init()}else{if(b==desknets.log.PAGE_LOGACCLOGGINGGET){desknets.log.logaccloggingget.init()}else{if(b==desknets.log.PAGE_LOGACCLOGGINGDEL){desknets.log.logaccloggingdel.init()}else{if(b==desknets.log.PAGE_LOGACCSYSTEM){desknets.log.logaccsystem.init()}}}}}};desknets.page(desknets.log,"logaccloggingset",desknets.PageSet,{_getNextCmd:function(){return desknets.log.PAGE_SETADMIN}});desknets.page(desknets.log,"logaccloggingget",desknets.PageSet,{_$entryTarget:null,_boLoad:false,init:function(){var b=this;var d="";b.callBase("init");var c=function(){b.showSearchTarget(true)};if(desknets.browser.tablet||desknets.browser.safari){a(window).on("pageshow",c)}else{a(document).ready(function(){c()})}b._initSearchCheck();d=desknets.paramanalyzer.getLocationHash();if(d!==""){b.funcHashObserver();return}else{a("#jco-m-input-page").show()}b.initFormSet()},_initSearchCheck:function(){var c=this;var b=a("#jlog-row-check-sproc_outline");var e=a("#jlog-row-check-saccloggingmodule");var d=a("#jlog-row-check-scarrier_flg");c._setCheckboxEvent(b);c._setCheckboxEvent(e);c._setCheckboxEvent(d)},_setCheckboxEvent:function(b){var c=b.find(".chkbox_loggingget_table");b.delegate(".chkbox_loggingget_check","click",function(e){var d=(a(this).attr("checked"))?true:false;c.find("input[type=checkbox]").attr("checked",d)});c.delegate("input[type=checkbox]","click",function(d){b.find(".chkbox_loggingget_check").attr("checked",false)})},initFormSet:function(){var b=this;var c=a(".jlog-row-datetime");desknets.submitform.clearDisabled(a("#frm"));desknets.htmlparts.setUpForm(a("#frm"));b._$entryTarget=a(".jlog-row-other-to");b._setUpTarget();desknets.timePicker.create(c.find('input[name="starttime"]'));desknets.timePicker.create(c.find('input[name="endtime"]'));b._boLoad=true;b.initFormButton();b.initChkBox()},_setUpTarget:function(){var b=this;var d=b._$entryTarget.children("td");var c=a("#jlog-search-target-to-dialog");desknets.chooser.setUpEntry(d,b._getTargets(),{dialogID:"jlog-search-target-to-dialog",dialogOptions:b._getChooserOptions(),change:function(){b._updateCheckbox()}})},_getTargets:function(){var b=[];this._$entryTarget.find(".jco-sel-items>input").each(function(){var d=a(this);var c="";if(d.attr("name")=="gid"){c="group"}else{c="user"}b.push({id:this.value,type:c,name:a(this).data("name"),description:""})});return b},_getChooserOptions:function(){return{chooseTarget:["user","group"],unassignGroup:"choosable",cmdusers:desknets.CMD_CHOOSERMSETUSERSEL}},_updateCheckbox:function(){var c=this;var b=a(".co-selmulti-items-scroll").find(".jco-sel-items").find("input");if(b.length==0){c.showSearchTarget(true)}else{c.showSearchTarget(false)}},_onAjaxFormSuccess:function(c){var b=this;var d="";d="cmd="+desknets.log.PAGE_LOGACCLOGGINGLST;b._setLocationHash(d)},initParamsFromHash:function(d){var c=this;var e="";var f="";e=d.cmd;f=desknets.paramanalyzer.getHashParams();if(e==""||e==desknets.log.PAGE_LOGACCLOGGINGGET){a(".jco-page").hide();a("#jco-m-input-page").show();a("#jco-m-search-container").empty();c._setTitle(c._getAreaTitle(a("#jco-m-input-page")));if(!c._boLoad){c.initFormSet()}else{desknets.submitform.clearDisabled(a("#frm"))}var b=(a("input[name=_alluser]").attr("checked"))?true:false;c.showSearchTarget(b)}else{if(e==desknets.log.PAGE_LOGACCLOGGINGLST){if(a("#jco-m-search-container").find(".jco-title").length>0){desknets.log.logacclogginglst._getListAjax(f.row)}else{desknets.log.logacclogginglst.initPage(desknets.log.PAGE_LOGACCLOGGINGGET,"jco-m-input-page")}c.mhashBackCmd=desknets.log.PAGE_LOGACCLOGGINGLST;c.mhashIdBack="jco-m-search-container"}}},initFormButton:function(){a(".jlog-acclogging-srch").click(function(f){var b=0;var c=0;var h=0;var e=0;var g="";f.preventDefault();a("#jco-m-input-page").find('input[type="checkbox"]').filter(":checked").each(function(){g=a(this).attr("name");if(g.indexOf("sproc_outline")>=0){b+=1}if(g.indexOf("saccloggingmodule")>=0){c+=1}if(g.indexOf("scarrier_flg")>=0){h+=1}if(g=="_alluser"){e+=1}});if(a(".co-table-set").find("input").hasClass("ui-invalid-mismatch")){var i=a(".jlogging-get-term").find(".co-colon").text()+desknets.merrMsgConnect;var d=desknets.Resource.Message.com_invalid_date;d=desknets.getErrConvMsg({msg:d,fieldid:"date",fieldname:i});desknets.dialog.alert(d,{type:"warn"});return false}if(!desknets.validation.isInputDateTimeFromTo(a(".jlogging-get-term").closest("tr").find("td"),false)){return false}e=e+a("#jco-m-input-page").find('input[name="uid"]').length+a("#jco-m-input-page").find('input[name="gid"]').length;if(b<=0||c<=0||h<=0||e<=0){desknets.dialog.alert(desknets.Resource.Message.log_srch_notarget,{type:"warn"});return false}a("#frm").submit()})},initChkBox:function(){var b=this;b._$entryTarget.find('input[name="_alluser"]').click(function(d){var c=(a(this).attr("checked"))?true:false;if(c){b.showSearchTarget(c)}else{b.showSearchTarget(c)}})},showSearchTarget:function(d){var b=this;var c=a(".co-selmulti-btn").find(".jco-sel-btn");if(d){c.attr("disabled",d);a("input[name=_alluser]").attr("checked",d);a(".co-selmulti-items-scroll").hide()}else{c.attr("disabled",d);a("input[name=_alluser]").attr("checked",d);a(".co-selmulti-items-scroll").show()}},_formObserveisChanged:function(){return false}});desknets.page(desknets.log,"logacclogginglst",desknets.PageListBase,{initPage:function(d,c){var b=this;b.boGetHtmlSingle=false;b.callBase("initPage",d,c)},_initListEndButton:function(){var b=this;b.callBase("_initListEndButton");b._initDownloadButtons();b._initBackPageButton()},_replaceListLine:function(b,e,c){var d=desknets.escape(c[e]);d=desknets.escapeValue(d);d=desknets.escapeSpace(d);if(e=="proc_result"){d=d.replace(/(\r\n)+|\n+/g,"<br />")}else{if(e=="access_time"){d=desknets.dateTime.dispDateTime(c[e].substring(0,12),{type:"list"})}else{if(e=="remote_ip"){d=desknets.escape(c[e]);d=d.replace(/[\x20\t]+$/,"");d=desknets.escapeValue(d)}}}b=desknets.tmpl.replaceWordHtml(b,e,d);return b},_initDownloadButtons:function(){var b=this;a(".jco-export-submit").click(function(c){c.preventDefault();b._execDownload()})},_execDownload:function(){var c=this;var d=0;var f=a('input[name="cmd"]').val();var e=a("#listfrm").attr("action");a("#listfrm").find('input[name="cmd"]').val(desknets.log.CMD_LOGACCLOGGINGDL);var b=desknets.MODULE_MAIN+"."+desknets._msExtension;a("#listfrm").attr("action",b);a("#listfrm").submit();a("#listfrm").find('input[name="cmd"]').val(f);a("#listfrm").attr("action",e);return false},_listDelSubmit:function(d){var b=this;var c="";d.preventDefault();c=b._delConfMessage();b._setDelConfirm(c);return},_delConfMessage:function(){return desknets.Resource.Message.com_del_allconf},_initBackPageButton:function(){var b=this;var c="";a(".jlog-list-input-page").click(function(d){d.preventDefault();c="cmd="+desknets.log.PAGE_LOGACCLOGGINGGET;b._setLocationHash(c)})},_getListCmd:function(){return desknets.log.PAGE_LOGACCLOGGINGLST},_getListExecCmd:function(){return desknets.log.CMD_LOGACCLOGGINGLST},_getDelExecCmd:function(){return desknets.log.CMD_LOGACCLOGGINLSTGDEL},_getRestModule:function(){return desknets.log.MODULE_API_LOG},_getIdListPage:function(){return"jco-m-search-container"}});desknets.page(desknets.log,"logaccloggingdel",desknets.PageSet,{init:function(){var b=this;b.callBase("init");b.initButton()},initButton:function(){var b=this;a(".jco-input-del-submit-conf").click(function(c){b._inputDelConfSubmit()})},_inputDelConfSubmit:function(f){var c=this;var b=a('input[name="delall"]').attr("checked")?true:false;if(!b){e=c._delNoChkMessage();desknets.dialog.alert(e,{type:"warn"});return}var e=c._delConfMessage();var d=desknets.dialog.confirm(e,function(){desknets.submitform.setDialogDisabled(d);c._inputDelSubmit(d);return false})},_inputDelSubmit:function(d){var b=this;var c={};d.dialog("close");a("#frm").submit()},_delNoChkMessage:function(){return desknets.Resource.Message.log_del_nochecked},_delConfMessage:function(){return desknets.Resource.Message.com_del_conf},_getRestModule:function(){return desknets.log.MODULE_API_LOG},_getNextCmd:function(){return desknets.log.PAGE_SETADMIN}});desknets.page(desknets.log,"logaccsystem",desknets.PageSet,{$mjTableList:null,_mcListTemplate:null,VALUE_STOPGETLOG:"2",init:function(){var b=this;b.callBase("init");b.$mjTableList=a(".co-tbody-list");b._mcListTemplate=b.$mjTableList.html();if(batexec==false&&(typeof jsonRest)!="undefined"){b._getListAjaxSuccess(jsonRest)}else{if(batexec){b._updateAccCnt(desknets.log.CMD_LOGACCSYSTEMCNT)}}b._switchDispInitButton();b._initButtons()},_switchDispInitButton:function(){var e=this;var b=a(".co-m-content").find(".co-setarea").find(".co-table-set");var d=b.find(".co-tr-noline").find(".co-td");var g=d.find(".log-switch-acccnt-button.start");var c=d.find(".log-switch-acccnt-button.stop");var f=d.find('input[name="status"]').val();if(neo.isSet(f)&&f==e.VALUE_STOPGETLOG){g.hide();c.show()}else{g.show();c.hide()}},_getListAjaxSuccess:function(j){var m=this;var h=this._getListAjaxSuccessData(j);var l=[];var b=[];var e=0;var k=0;var d=m._mcListTemplate;var g=j.terms;var i=j.terme;var f=j.allcnt;var c="";if(h.length<=0){a(".log-acclogsystem-table").hide()}else{e=h.length;for(k=0;k<e;k++){l=h[k];b[b.length]=m._listLineTemplate(d,l)}m.$mjTableList.empty();m.$mjTableList.html(b.join(""));desknets.htmlparts.addStripeClass(m.$mjTableList,"co-tr-even");c=desknets.tmpl.replaceWordHtml(desknets.Resource.set.acclogTermMessage,"start",g);c=desknets.tmpl.replaceWordHtml(c,"end",i);a(".jlog-acc-cnt-msg").html(c);a(".jlog-acclog-allcnt").text(f);a(".log-acclogsystem-table").show();m.$mjTableList.find("tr").each(function(){var n=a(this).find(".sysad-size-bar-in").text();var o="width:"+n+"%;";a(this).find(".sysad-size-bar-in").attr("style",o)})}},_listLineTemplate:function(d,e){var c=this;var b="";if(typeof e=="object"){for(b in e){d=c._replaceListLine(d,b,e)}}return d},_replaceListLine:function(b,d,c){b=desknets.tmpl.replaceWord(b,d,c[d]);return b},_getListAjaxSuccessData:function(b){return desknets.ajax.getJsonItems(b)},_initButtons:function(){var b=this;a(".log-switch-acccnt-button").click(function(c){c.preventDefault();b._buttonAccCnt()});a(".jlog-acccnt-update").click(function(c){c.preventDefault();b._updateAccCnt(desknets.log.CMD_LOGACCSYSTEMRECNT)});a(".jlog-acccnt-delete").click(function(c){c.preventDefault();var e=desknets.Resource.Message.com_del_allconf;var d=desknets.dialog.confirm(e,function(){desknets.submitform.setDialogDisabled(d);b._deleteAccCnt(d);return false})})},_buttonAccCnt:function(){var e=this;var h={};var f={};var b=a(".co-m-content").find(".co-setarea").find(".co-table-set");var d=b.find(".co-tr-noline").find(".co-td");var c=d.find('input[name="status"]').val();h.cmd=desknets.log.CMD_LOGACCSYSTEM;h.status=c;f=e._getExecAjaxOptions();var g={success:function(j,i,k){e._locationPageTop()}};if(neo.isSet(g)){a.extend(f,g)}e._sendRequestAjax(desknets.ajax.REQTYPE_SINGLE,desknets.ajax.RESTYPE_JSON,h,f);return false},_locationPageTop:function(){var d=this;var c=a("#dn-main").find("#co-m-h-setting-menus");var b=c.find("#"+d._getSelfCmd()).find("a");desknets.clickAlink(b)},_updateAccCnt:function(e){var b=this;var d={};var c={};d.cmd=e;c=b._getExecAjaxOptions();b._sendRequestAjax(desknets.ajax.REQTYPE_SINGLE,desknets.ajax.RESTYPE_JSON,d,c)},_getExecAjaxOptions:function(){var b=this;var c={};c={success:function(e,d,f){b._observe()}};return c},_observe:function(){var b=this;setTimeout(function(){b._getListAjax()},500)},_deleteAccCnt:function(g){var b=this;var f={};var e={};var d={};var c={};f.cmd=desknets.log.CMD_LOGACCSYSTEMDEL;e.cmd=desknets.log.CMD_LOGACCSSYTEMLIST;c["0"]=f;c["1"]=e;d.success=function(h){if(h[0]["status"]!=desknets.RES_STATUS_SUCCESS){desknets.ajax.onError(h[0]["errorno"],h[0]["errormessage"])}else{if(h[1]["status"]!=desknets.RES_STATUS_SUCCESS){desknets.ajax.onError(h[1]["errorno"],h[1]["errormessage"])}else{if(g!=null){desknets.submitform.clearDialogDisabled(g);g.dialog("close")}b._getListAjaxSuccessExec(h[1])}}};b._sendRequestAjax(desknets.ajax.REQTYPE_MULTI,desknets.ajax.RESTYPE_JSON,c,d)},_getListAjax:function(){var b=this;var d={};var c={};d.cmd=desknets.log.CMD_LOGACCSSYTEMLIST;c=b._getListAjaxOptions();b._sendRequestAjax(desknets.ajax.REQTYPE_SINGLE,desknets.ajax.RESTYPE_JSON,d,c)},_getListAjaxOptions:function(){var b=this;var c={};c={success:function(e,d,f){b._getListAjaxSuccessExec(e)}};return c},_getListAjaxSuccessExec:function(c){var b=this;var d=this._getListAjaxSuccessData(c);if(d.length<=0){b._observe()}else{b._getListAjaxSuccess(c)}},_getSelfCmd:function(){return desknets.log.PAGE_LOGACCSYSTEM},_getNextCmd:function(){return desknets.log.PAGE_SETADMIN},_getRestModule:function(){return desknets.log.MODULE_API_LOG}});app.addInitialAction(function(){desknets.log.init()})})(jQuery);