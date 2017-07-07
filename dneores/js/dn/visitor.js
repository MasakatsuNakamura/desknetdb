/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.visitor={MODULE_MAIN_VISITOR:"zvisitor",MODULE_API_VISITOR:"zrvisitor",CMD_VISITORINDEX:"visitorcmdindex",PAGE_VISITORINDEX:"visitorindex",CMD_VISITORMODSTATUS:"visitorcmdmodsts",PAGE_VISITORINFO:"visitorinfo",CMD_VISITORINFO:"visitorcmdinfo",CMD_VISITORINFOMODSTATUS:"visitorcmdinfomodsts",PAGE_VISITORUSERLIST:"visitoruserlist",CMD_VISITORUSERLIST:"visitorcmduserlist",PAGE_VISITORSEARCH:"visitorsearch",CMD_VISITORSEARCH:"visitorcmdsearch",PAGE_VISITORPRINT:"visitorprint",PAGE_VISITORSEARCHPRINT:"visitorprintsearch",statusText_default:"--",placesText_noplace:"----",DATA_SELDATE:"seldate",init:function(){var b=a("#jco-pv-funcid").val();if(this.isVisitor(b)){desknets.hashobserver.init(desknets.visitor)}if(b==desknets.visitor.PAGE_VISITORINDEX){desknets.visitor.visitorindex.init()}desknets.visitor.subwin.init()},isVisitor:function(c){var b=this;if(c.indexOf("visitor")>=0&&c.indexOf("pset")==-1&&c.indexOf("mset")==-1){return true}return false}};desknets.page(desknets.visitor,"subwin",desknets.PageSubwinSearch,{init:function(){var b=this;var c=a(".jco-subwindow-search");var f=desknets.paramanalyzer.getHashParams();var d=(f.swlocation)?f.swlocation:"0";var e=(f.target)?f.target:"0";c.find('input[name="srch_key"]').val(f.srch_key);c.find('input[name="sdate"]').val(f.sdate);c.find('input[name="edate"]').val(f.edate);c.find('select[name="swlocation"]').val(d);c.find('select[name="target"]').val(e);b.callBase("_initSearch");desknets.htmlparts.setUpForm(b.$_inputArea);b._initPrint()},_getSearchPrm:function(d){var b=this;var c=b.$_inputArea;d.fldsort="MEMO";d.order="1";d.row="0";d.srch_key=c.find('input[name="srch_key"]').val();d.sdate=c.find('input[name="sdate"]').val();d.edate=c.find('input[name="edate"]').val();d.target=c.find('select[name="target"]').val();d.swlocation=c.find('select[name="swlocation"]').val();return d},_initPrint:function(){var b=this;a(".jvist-swin-print").click(function(g){var f;var d=[];var h="";g.preventDefault();var e=desknets.getUrl(desknets.visitor.MODULE_MAIN_VISITOR);var c=a(this).attr("target");if(a("#jco-m-list-container").css("display")=="block"){d=desknets.getInputDataToObj(a("#jco-m-list-container").find(".jco-back-page-data"));h=b._getPrintCmd()}else{if(a("#jco-m-search-container").css("display")=="block"){d=desknets.getInputDataToObj(a("#jco-m-search-container").find(".jco-back-page-data"));h=b._getSearchPrintCmd()}else{return}}e=e+"?cmd="+h+"&"+desknets.getNeoParam(d);desknets.execLocation(e,c);desknets.pageframe.closeSubWin()})},_execInitSearch:function(){var b=this;var c={};c=b._getSearchPrm(c);c.cmd=b._getSearchCmd();c._=desknets.createRandomId();c.s_init="1";b._setLocationHash(c)},_execClear:function(){this.callBase("_execClear");this.$_inputArea.find('select[name="target"]').val("0");this.$_inputArea.find('select[name="swlocation"]').val("0")},_chkInputSearchDateChk:function(){var c=this;var b=true;c.$_inputArea.find(".jco-search-date").each(function(){if(!desknets.validation.isInputDateFromTo(a(this),false)){b=false;return false}});return b},_getMainCmd:function(){return desknets.visitor.PAGE_VISITORINDEX},_getSearchCmd:function(){return desknets.visitor.PAGE_VISITORSEARCH},_getPrintCmd:function(){return desknets.visitor.PAGE_VISITORPRINT},_getSearchPrintCmd:function(){return desknets.visitor.PAGE_VISITORSEARCHPRINT},_getRestModule:function(){return desknets.visitor.MODULE_API_VISITOR},_chkInputSearchRequired:function(){var d=this;var e=d.$_inputArea;var f="";var c=true;if(e.find('input[name="srch_key"]').val()==""&&e.find('input[name="sdate"]').val()==""&&e.find('input[name="edate"]').val()==""&&e.find('select[name="target"]').val()=="0"&&e.find('select[name="swlocation"]').val()=="0"){var b=desknets.Resource.searchcond;f=desknets.tmpl.replaceWordHtml(desknets.Resource.Message.com_search_required,"item",b);c=false}else{if(e.find('input[name="srch_key"]').val()==""&&e.find('select[name="target"]').val()!="0"){f=desknets.Resource.Message.com_search_keyword;c=false}else{if(e.find('input[name="srch_key"]').val()!=""&&e.find('select[name="target"]').val()=="0"){f=desknets.Resource.Message.visitor_search_target;c=false}}}if(!c){desknets.dialog.alert(f,{type:"warn"});return false}return d.callBase("_chkInputSearchRequired")}});desknets.page(desknets.visitor,"visitorindex",desknets.PageListBase,{$mjLocationList:null,$mjStatusList:null,$mjSetStateList:null,_mcLocationTemplate:"",_mcStatusTemplate:"",_mcSetStateTemplate:"",boSearchList:false,_startDate:"",_mcSepDate:"",_separateDaysFormat:'<li class="visitor-list-appointment separator">   <strong class="co-small">{{separate_date}}</strong></li>',_initListStartSet:function(){var b=this;b.$mjTableList=b.$mjListPage.find(".co-table-list");b.$mjLocationList=b.$mjListPage.find('select[name="visitlocation"]');b.$mjStatusList=b.$mjListPage.find('select[name="status"]');b.$mjSetStateList=b.$mjListPage.find('select[name="set_state"]')},_initListStartTemplate:function(){var b=this;b._mcListTemplate=b.$mjTableList.html();b.$mjTableList.empty();b._mcLocationTemplate=b.$mjLocationList.html();b.$mjLocationList.empty();b._mcStatusTemplate=b.$mjStatusList.html();b.$mjStatusList.empty();if(b.boSearchList==false){b._mcSetStateTemplate=b.$mjSetStateList.html();b.$mjSetStateList.empty()}},_initListStartChk:function(){var b=this;b.$mjTableList.delegate("input[type=checkbox]","click",function(c){if(a(this).attr("checked")){a(this).parent().parent().addClass("visitor-li-selected")}else{a(this).parent().parent().removeClass("visitor-li-selected")}})},_getListAjaxSuccess:function(c){var b=this;var d=this._getListAjaxSuccessData(c);this._startDate=c.sdate;if(d.length<=0){b.$mjListPage.find(".co-mainarea").hide();b.$mjListPage.show()}else{b.$mjListPage.find(".co-mainarea").show()}b.callBase("_getListAjaxSuccess",c)},_getListAjaxSuccessOtherSet:function(f){var e=this;e._setTargetDate(f);e.$mjListPage.find('select[name="time"]').val(f.time);e.$mjListPage.find('select[name="days"]').val(f.days);var b=e._getListItems(f.visitlocation);e._pageoutListLocations(b);e.$mjListPage.find('select[name="visitlocation"]').val(f.location);var c=e._getListItems(f.statuslist);e._pageoutListStatus(c);e.$mjListPage.find('select[name="status"]').val(f.statusval);if(e.boSearchList==false){var d=e._getListItems(f.set_state);e._pageoutListSetState(d);e.$mjListPage.find('select[name="set_state"]').val()}},_pageoutListLocations:function(h){var d=this;var g;var f=[];var b=h.length;var e=d._mcLocationTemplate;var c=[];for(g=0;g<b;g++){f=h[g];c[c.length]=d._listLine(e,f)}d.$mjLocationList.empty();d.$mjLocationList.html(c.join(""))},_pageoutListStatus:function(d){var e=this;var h;var g=[];var b=d.length;var f=e._mcStatusTemplate;var c=[];for(h=0;h<b;h++){g=d[h];c[c.length]=e._listLine(f,g)}e.$mjStatusList.empty();e.$mjStatusList.html(c.join(""))},_pageoutListSetState:function(h){var d=this;var g;var f=[];var b=h.length;var e=d._mcSetStateTemplate;var c=[];for(g=0;g<b;g++){f=h[g];c[c.length]=d._listLine(e,f)}d.$mjSetStateList.empty();d.$mjSetStateList.html(c.join(""))},_listLine:function(e,f){var d=this;var b="";var h=true;if(typeof f=="object"){if(!neo.isSet(f.visitors)){h=false}for(b in f){if(b=="visitors"){var c=d._getListItems(f[b]);e=d._replaceListVisitors(e,c)}else{e=d._replaceListLine(e,b,f)}}}if(h&&(d._getListCmd()=="visitorindex"||d._getListCmd()=="visitormsetindex")){var g=d._createSeparator(f);e=g+e}return e},_createSeparator:function(d){var c=this;var b=d.startdate;var h=c._mcSepDate;c._mcSepDate=b;if(h!=b){var f=neo.dateTime.parse(d.startdate);var e=neo.dateTime.format(desknets.Resource.longDateFormat,f);var g=c._separateDaysFormat;g=desknets.tmpl.replaceWord(g,"separate_date",e);return g}else{return""}},_editDateTime:function(c,e,b){var d="";if(!b){b="shortDateFormat"}if(this._startDate!=c){d=desknets.dateTime.dispDateTime(c,b)}if(neo.isSet(e,{blank:false})){if(d.length!=0){d=d+"&nbsp;"}d+=desknets.cal.tmplRef.dispTimeLong(e)}return d},_editStartEndDateTime:function(c,f){var d;var b=this._editDateTime(f.startdate,f.starttime);var e=this._editDateTime(f.enddate,f.endtime);if(b.length>10&&e.length!=0||b.length!=0&&e.length>10){d=b+"&nbsp;-<br />"+e}else{if(b.length!=0||e.length!=0){if(b!=e){d=b+"&nbsp;-&nbsp;"+e}else{d=b}}else{d=desknets.Resource.visitor.dateText_noTime}}c=desknets.tmpl.replaceWordHtml(c,desknets.visitor.DATA_SELDATE,f.startdate);return desknets.tmpl.replaceWordHtml(c,"scheduledate",d)},_getContactString:function(d,b,e){var c;c=d;if(neo.isSet(b)&&b.length>0){c=c+" ("+b+")"}return c},_replaceListLine:function(d,i,g){var c=this;var e="";var h="";if(i=="status"){if(!!g.statusstr){e=g.statusstr}else{e="("+desknets.Resource.NoSetData+")"}d=desknets.tmpl.replaceWord(d,"statustext",e)}else{if(i=="startdate"){d=this._editStartEndDateTime(d,g)}else{if(i=="contact"){e=c._getContactString(g[i],g.Naisen,g);d=desknets.tmpl.replaceWord(d,"contactname",e);return d}else{if(i=="location"){e="";var b="";if(neo.isSet(g.location,{blank:false})){e=g.location;if(neo.isSet(g.locationdtl,{blank:false})){e=e+" - "+g.locationdtl}}else{if(neo.isSet(g.locationdtl,{blank:false})){e=g.locationdtl}}if(neo.isSet(g.locationplt,{blank:false})){var f="\n";b=g.locationplt;if(b.length>0){if(c.boSearchList){f=" "}b=f+"("+b+")"}}e=e+b;if(e.length<=0){e=desknets.visitor.placesText_noplace}d=desknets.tmpl.replaceWordLF(d,"locationtext",e);return d}else{if(i=="id"){d=desknets.tmpl.replaceWordLF(d,"sid",g[i].slice(0,12));d=desknets.tmpl.replaceWordLF(d,"modcmd",c._getListModCmd());d=desknets.tmpl.replaceWordLF(d,"dispcmd",c._getListDispCmd())}}}}}return c.callBase("_replaceListLine",d,i,g)},_replaceListVisitors:function(c,k){var l=this;var g;var h=[];var d=k.length;var i="";var j="";var b="";var e="";var f="";for(g=0;g<d;g++){h=k[g];i=l._escapeValue(h.Name);j=l._escapeValue(h.officename);b=l._escapeValue(h.members);if(e.length>0){e=e+"<br />"}if(f.length>0){f=f+"&#10;"}e=e+j;if(e.length>0){e=e+" "}e=e+i;if(e.length>0){e=e+" "}if(b.length>0){e=e+"("+b+")"}f=f+j;if(f.length>0){f=f+"&nbsp;"}f=f+i;if(f.length>0){f=f+"&nbsp;"}if(b.length>0){f=f+"("+b+")"}}if(e==""){e="&nbsp;"}c=l._replaceListValue(c,"visitorstitle",f);return l._replaceListValue(c,"visitors",e)},_escapeValue:function(b){var c=desknets.escape(b);c=desknets.escapeValue(c);c=desknets.escapeSpace(c);return c},_replaceListValue:function(b,d,c){b=desknets.tmpl.replaceWordHtml(b,d,c);return b},_setListStyle:function(d){var c=this;var b=c.$mjTableList.find("li:not(.separator)");b.removeClass("even");b.each(function(f){if((f+2)%2!=0){var e=a(this);e.addClass("even")}});c._setNowBar(d);c._mcSepDate=""},_setNowBar:function(f){var c=this;var b=f.sdate;var e=desknets.pageframe.getServerDate();var i=e.getHours()*100+e.getMinutes();var h=false;var g=neo.dateTime.format("yyyyMMdd",e);if(b==g){h=true}var d=c.$mjTableList.find("li:not(.separator)");d.each(function(k){var l=a(this).data("starttime");if(k==0&&neo.isSet(l)&&Number(l)>i){h=false}if(neo.isSet(l)&&Number(l)>i&&k>0&&h){var j='<li class="visitor-list-appointment now"></li>';a(j).insertBefore(a(this));h=false}})},_setTargetDate:function(b){var d=neo.dateTime.parse(b.sdate);var c=neo.dateTime.format(desknets.Resource.longMDFormat,d);a(".jvist-date").text(c)},_getListItems:function(b){if(!b||!b.item){return[]}else{if(!a.isArray(b.item)){return[b.item]}else{return b.item}}},_initListEndButton:function(){var b=this;b.$mjListPage.find(".co-btn-update").click(function(i){var g;i.preventDefault();var h=b.getListParamToObj();h.row=b._getListRow();h.cmd=b._getListCmd();delete h.sdate;g=desknets.getUrl(desknets.msModuleName);g+="?cmd="+b._getListCmd()+"&_="+desknets.createRandomId();g+="#"+desknets.getNeoParam(h);desknets.saveHashCmdCookie(b._getListCmd());desknets.execLocation(g)});var c=b.$mjListPage.find('select[name="time"]');c.bind("change",function(g){a(g.target).blur();b._listModPage("time",g.target.value)});var f=b.$mjListPage.find('select[name="status"]');f.bind("change",function(g){a(g.target).blur();b._listModPage("status",g.target.value)});var d=b.$mjListPage.find('select[name="visitlocation"]');d.bind("change",function(g){a(g.target).blur();b._listModPage("visitlocation",g.target.value)});var e=b.$mjListPage.find('select[name="days"]');e.bind("change",function(g){a(g.target).blur();b._listModPage("days",g.target.value)});b.$mjListPage.find(".jvist-list-set-state").click(function(g){var h=b.$mjListPage.find('select[name="set_state"]').val();b._modVisitorStatus(h)})},_listModPage:function(d,c){var b=this;b.$mjListPage.find(".jco-back-page-data").find('input[name="'+d+'"]').val(c);b._listPage("0")},_modVisitorStatus:function(b){var c=this;c._listModStatus(desknets.visitor.CMD_VISITORMODSTATUS,b)},_listModStatus:function(e,b){var d=this;var c=[];var i={};var g={};var f={};var h={};d.$mjListPage.find('input[name="'+d._getIDName()+'"]:checked').each(function(){c[c.length]=a(this).val()});if(!d._checkSelectTarget(c,desknets.Resource.Message.com_set_nochecked)){return}d._mchkIDs=d._getListAjaxGetId();h=d._getDelAddPrm();h[d._getIDName()]=c;h.cmd=e;h.modstatus=b;g=d.getListParamToObj();i["0"]=h;i["1"]=g;f=a.extend({},d._getListAjaxOptionsExec(null));desknets.submitform.setDisabled(a(d._mIdPageForm));d._sendRequestAjax(desknets.ajax.REQTYPE_MULTI,desknets.ajax.RESTYPE_JSON,i,f);return},_getListAjaxSuccessExec:function(c){var b=this;desknets.submitform.clearDisabled(a(b._mIdPageForm));b.callBase("_getListAjaxSuccessExec",c)},_checkSelectTarget:function(b,c){if(b.length<=0){desknets.dialog.alert(c,{type:"warn"});return false}return true},_initListStartModLink:function(){},initParamsFromHash:function(c){var b=this;var d="";d=c.cmd;if(!neo.isSet(d)||d==b._getListCmd()||d==b._getListSearchCmd()){a(".jvist-subwin-guide-useful").show()}else{a(".jvist-subwin-guide-useful").hide()}b.callBase("initParamsFromHash",c)},_hashUpdatePageView:function(c){var b=this;var d=desknets.paramanalyzer.getHashParams();if(c==desknets.visitor.PAGE_VISITORSEARCH){if(a("#jco-m-search-container").find(".jco-title").length>0){desknets.visitor.visitorsearch._getListAjax(d.row)}else{desknets.visitor.visitorsearch.initPage(desknets.visitor.PAGE_VISITORINDEX,"jco-m-list-container")}b.mhashBackErrCmd=b.mhashBackCmd;b.mhashIdErrBack=b.mhashIdBack;b.mhashBackCmd=desknets.visitor.PAGE_VISITORSEARCH;b.mhashIdBack="jco-m-search-container"}},_getRestModule:function(){return desknets.visitor.MODULE_API_VISITOR},_getListCmd:function(){return desknets.visitor.PAGE_VISITORINDEX},_getListExecCmd:function(){return desknets.visitor.CMD_VISITORINDEX},_getListDispCmd:function(){return desknets.visitor.PAGE_VISITORUSERLIST},_getListModCmd:function(){return desknets.visitor.PAGE_VISITORINFO},_getListDispClass:function(){return desknets.visitor.visitoruserlist},_getListModClass:function(){return desknets.visitor.visitorinfo},_getListSearchCmd:function(){return desknets.visitor.PAGE_VISITORSEARCH},_getModExecCmd:function(){return desknets.visitor.CMD_VISITORINFOMODSTATUS}});desknets.page(desknets.visitor,"visitorinfo",desknets.PageDispBase,{$mjStatusList:null,_mcStatusTemplate:"",_initSet:function(d){var c=this;var e={selected:d[0]["modstatus"]};c.$mjStatusList=c.$mjPage.find('select[name="modstatus"]');c._mcStatusTemplate=c.$mjStatusList.html();c.$mjStatusList.empty();var b=c._getItems(d[0]["statuslist"]);desknets.htmlparts.setSelectOption(c.$mjPage.find('select[name="modstatus"]'),b,"id","Name",e);if(d[0].contactexist=="0"){a(".visitor-username").find("a").replaceWith(a(".visitor-username").find("a").html())}desknets.htmlparts.addStripeClass(c.$mjPage.find(".co-table-list"),"co-tr-even");c.callBase("_initSet",d);c._inputAjaxForm()},_getItems:function(b){if(!b||!b.item){return[]}else{if(!a.isArray(b.item)){return[b.item]}else{return b.item}}},_inputAjaxForm:function(){var b=this;var c={};c=b._inputAjaxFormOption();b._initFormRequestAjax(b._mIdPageForm,c)},_inputButton:function(){var b=this;b.callBase("_inputButton");b.$mjPage.find(".jvist-info-modsts").click(function(c){b.vistInfoModStatus()})},vistInfoModStatus:function(){var c=this;var d="";var e=desknets.paramanalyzer.getHashParams();var b=desknets.visitor.MODULE_API_VISITOR+"."+desknets._msExtension;a("#dispfrm").attr("action",b);d=c._getModExecCmd();a('input[name="cmd"]').val(d);a('input[name="id"]').val(e[c._getIDName()])},dispVisitors:function(g){var e="";var h=[];var f=[];if(!g||!g.item){return"&nbsp;"}h=desknets.ajax.getItems(g.item);if(h.length==0){return"&nbsp;"}for(var i=0;i<h.length;i++){var j="";var c="";var d="";var b=h[i];c=desknets.tmpl.escapeWord(b.officename);d=desknets.tmpl.escapeWord(b.Name);j="<TR>";j=j+'<TD TITLE="'+c+'">'+c+"</TD>";j=j+'<TD TITLE="'+d+'">'+d+"</TD>";if(b.members&&b.members>0){j=j+"<TD>"+b.members+desknets.Resource.visitor.membersNum+"</TD>"}else{j=j+"<TD></TD>"}j=j+"</TR>";e=e+j}return e},_getRestModule:function(){return desknets.visitor.MODULE_API_VISITOR},_getDispExecCmd:function(){return desknets.visitor.CMD_VISITORINFO},_getModExecCmd:function(){return desknets.visitor.CMD_VISITORINFOMODSTATUS},_getIdPageForm:function(){return"dispfrm"}});desknets.page(desknets.visitor,"visitoruserlist",desknets.PageListBase,{_getFieldsCheckScroll:function(){return["id"]},_listMoveScroll:function(){this._setClearScrollPosition();this.callBase("_listMoveScroll")},initPage:function(d,c){var b=this;b.boGetHtmlSingle=false;b.callBase("initPage",d,c)},_initListStart:function(){var b=this;b.callBase("_initListStart");b._initListStartPageBack()},_initListStartPageBack:function(){var b=this;b.$mjListPage.find(".co-pageback").click(function(c){c.preventDefault();b._visitorListPage()})},_visitorListPage:function(){var b=this;var c={};if(!neo.isSet(b.mBackCmd)||!neo.isSet(b.mIdBack)){return null}c=desknets.getInputDataToObj(a("#"+b.mIdBack).find(".jco-back-page-data"));c.cmd=b.mBackCmd;if(neo.isSet(c)){b._setLocationHash(c)}},_getListAjaxSuccessOtherSet:function(c){var b=this;b.callBase("_getListAjaxSuccessOtherSet",c);if(b.$mjListPage.find(".jvist-userlist-disparea").html().length==0){b.$mjListPage.find(".jco-disp-tmplset").tmpl(c).appendTo("#"+b._getIdListPage()+" .jvist-userlist-disparea")}},_listLine:function(b,c){if(typeof c=="object"){if(!c.assigngrp){b=desknets.tmpl.replaceWordHtml(b,"assigngrp","")}}return this.callBase("_listLine",b,c)},_replaceListLine:function(d,f,e){var c=this;if(f==desknets.user.KEY_ASSIGNGROUP){var b=this.dispAssign(e[f]);d=desknets.tmpl.replaceWordHtml(d,f,b);return d}return c.callBase("_replaceListLine",d,f,e)},_getIdListPage:function(){return"jco-m-disp-page"},_getIdListPageForm:function(){return"visitoruserlistform"},_getRestModule:function(){return desknets.visitor.MODULE_API_VISITOR},_getListCmd:function(){return desknets.visitor.PAGE_VISITORUSERLIST},_getListExecCmd:function(){return desknets.visitor.CMD_VISITORUSERLIST},dispAssign:function(d){var c=[];c=desknets.user.getListAssignGroups(d.Name);var b="";if(c.assigntitle!==""){b='<span title="'+c.assigntitle+'">'+c.assign+"</span>"}return b}});desknets.page(desknets.visitor,"visitorsearch",desknets.visitor.visitorindex,{_initListStart:function(){var b=this;b.boSearchList=true;b.callBase("_initListStart");var c=b.$mjListPage;var d=desknets.paramanalyzer.getHashParams();c.find('input[name="srch_key"]').val(d.srch_key);c.find('input[name="sdate"]').val(d.sdate);c.find('input[name="edate"]').val(d.edate);c.find('input[name="target"]').val(d.target);c.find('input[name="swlocation"]').val(d.swlocation)},_initListStartSet:function(){var c=this;c.$mjTableList=c.$mjListPage.find(".co-tbody-list");c.$mjLocationList=c.$mjListPage.find('select[name="visitlocation"]');var d=c.$mjListPage.find(".co-table-list").find("thead").find("tr");for(var b=0;b<d.length;b++){desknets.htmlparts.addLastClass(a(d[b]),"last-child")}c.$mjStatusList=c.$mjListPage.find('select[name="status"]')},getListParamToObj:function(){var b=this;var c={};c=b.callBase("getListParamToObj");if(neo.isSet(c.s_init,{blank:false})){c.s_init="1"}return c},_initListEndButton:function(){var b=this;b.callBase("_initListEndButton");b.$mjListPage.find(".co-pageback").click(function(c){c.preventDefault();b.dispBackListPage()});b.$mjListPage.find(".co-btn-update").unbind("click");b.$mjListPage.find(".co-btn-update").click(function(c){c.preventDefault();a(this).addClass("on");desknets.scrollManager.clearScrollPosition(b._getListCmd());b._getListAjaxUpdate(b._getListRow())})},_getListAjaxUpdate:function(d){var b=this;var e={};var c={};b._hashUpdatePageParams();e=b.getListParamToObj();e.row=d;e.s_init="1";b._mchkIDs=b._getListAjaxGetId();c=b._getListAjaxOptions();b._sendRequestAjax(desknets.ajax.REQTYPE_SINGLE,desknets.ajax.RESTYPE_JSON,e,c)},_setListStyle:function(c){var b=this;desknets.htmlparts.addStripeClass(b.$mjTableList,"co-tr-even")},_listModPage:function(d,c){var b=this;b.$mjListPage.find(".jco-back-page-data").find('input[name="row"]').val("0");b.$mjListPage.find(".jco-back-page-data").find('input[name="'+d+'"]').val(c);var e=desknets.getInputDataToUrl(b.$mjListPage.find(".jco-back-page-data"));e=e+"&cmd="+b._getListCmd();e=e+"&s_init=1";b._setLocationHash(e)},_getRestModule:function(){return desknets.visitor.MODULE_API_VISITOR},_getListCmd:function(){return desknets.visitor.PAGE_VISITORSEARCH},_getListExecCmd:function(){return desknets.visitor.CMD_VISITORSEARCH},_getIdListPage:function(){return"jco-m-search-container"},_getIdListPageForm:function(){return"searchfrm"},_editStartEndDateTime:function(c,d){var b=desknets.cal.tmplList.getRowHtml(c,d,{intervalSepa:"-",dateTimeDisp:true,addSameDate:true});b=desknets.tmpl.replaceWordHtml(b,desknets.visitor.DATA_SELDATE,d.startdate);return b}});app.addInitialAction(function(){desknets.visitor.init()})})(jQuery);