/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.todo={CMD_TODOLIST:"todocmdlist",CMD_TODOTASKREF:"todocmdtaskref",CMD_TODOTASKENTRY:"todocmdtaskentry",CMD_TODOTASKDEL:"todocmdtaskdelete",CMD_TODOTASKCOMPLETE:"todocmdtaskcomplete",CMD_TODODISPATTACH:"tododispattach",CMD_TODOTAGENTRY:"todocmdtagentry",CMD_TODOLISTSEARCH:"todocmdlistsearch",CMD_TODOLISTLIMIT:"todocmdlistlimit",CMD_TODOLABELLIST:"todocmdlabellist",CMD_TODOFILTARGET:"todocmdfiltarget",VALUE_TODOALARMEVERY:1,VALUE_TODOALARMONCE:2,form_sts:"{{sts}}",TaskRefSetAlarmInfo:function(f,i,k){var l=this;var j="";var g="";var b="";if(f&&i&&k){var c=parseInt(f);var e=parseInt(i);var m=parseInt(k);var d=c/1440;if((d>=1&&d<=7)&&(m===desknets.todo.VALUE_TODOALARMEVERY||m===desknets.todo.VALUE_TODOALARMONCE)){var h=desknets.Resource.todo.alarmform;b=desknets.tmpl.replaceWordHtml(h,"alarmtime",d)}}return b},dispItems:function(j,p,e,f){var h="";var k=[];var i=[];if(!j||!j.item){return"&nbsp;"}k=desknets.ajax.getItems(j.item);var d=k.length;if(d==0){return"&nbsp;"}if(p!=undefined){if(!(!p||!p.item)){i=desknets.ajax.getItems(p.item)}}var m=i.length;for(var o=0;o<d;o++){var q="";var n="";var c=k[o];if(o!=0){q=",&#x0A;"}if(c.val!=undefined){n=desknets.tmpl.escapeWord(c.val)}q=q+n;if(m>o&&(c.user_state!=1&&c.user_state!=2)){var g="";var b=i[o];if(b.val){g=desknets.tmpl.escapeWord(b.val)}if(g.length>0){if(e){var l=desknets.tmpl.replaceWordChkHtml(e,f,g);q=q+l}else{q=q+"("+g+")"}}}h=h+q}return h},};desknets.todoset={CMD_TODOPSETLABELLIST:"todopsetcmdlabellist",CMD_TODOPSETLABELDEL:"todopsetcmdlabeldelete",CMD_TODOPSETLABELENTRY:"todopsetcmdlabelentry"};desknets.sp.todo={mboMyTask:true,init:function(){desknets.sp.mobjPages["label-page"]=desknets.sp.todo.LabelList;desknets.sp.mobjPages["labelentry-page"]=desknets.sp.todo.LabelEntry;desknets.sp.mobjPages["d-labeldel-page"]=desknets.sp.todo.LabelDel;desknets.sp.mobjPages["limit-page"]=desknets.sp.todo.TaskLimitList;desknets.sp.mobjPages["task-page"]=desknets.sp.todo.TaskList;desknets.sp.mobjPages["todoref-page"]=desknets.sp.todo.TodoRef;desknets.sp.mobjPages["todoentry-page"]=desknets.sp.todo.TodoEntry;desknets.sp.mobjPages["setlabel-page"]=desknets.sp.todo.TodoSetLabel;desknets.sp.mobjPages["setuser-page"]=desknets.sp.todo.UserSelPage;desknets.sp.mobjPages["srch-page"]=desknets.sp.todo.TodoSrch;desknets.sp.mobjPages["srchset-page"]=desknets.sp.todo.TodoSetSrch;desknets.sp.mobjPages["d-todocomplete-page"]=desknets.sp.todo.TodoComplete;desknets.sp.mobjPages["d-tododel-page"]=desknets.sp.todo.TodoDel;desknets.sp.mobjPages["d-todotag-page"]=desknets.sp.todo.TodoTag;desknets.sp.mobjPages["d-todoalarm-page"]=desknets.sp.todo.TodoAlarm;desknets.sp.mobjPages["profile-page"]=desknets.sp.UserProfile;desknets.sp.mobjPages["d-userdeselect-page"]=desknets.sp.UserDeselect;desknets.sp.mobjPages["neotwi-page"]=desknets.sp.Neotwi;var c=[];var b=desknets.sp.getPrm();if(neo.isSet(b.id)){c=["todoref-page"]}desknets.sp.initSetEvents(c)},getRequestURL:function(){return desknets.sp.getUrl(desknets.MODULE_API_MAIN)},chgMyTask:function(){desknets.sp.todo.LabelList.invalidate();desknets.sp.todo.TaskLimitList.invalidate();desknets.sp.todo.TaskList.invalidate();if(desknets.sp.todo.mboMyTask){desknets.sp.todo.mboMyTask=false}else{desknets.sp.todo.mboMyTask=true}},fullInvalidate:function(){desknets.sp.todo.LabelList.invalidate();desknets.sp.todo.TaskLimitList.invalidate();desknets.sp.todo.TaskList.invalidate();desknets.sp.todo.TodoSrch.invalidate()}};desknets.page(desknets.sp.todo,"LabelList",desknets.sp.ListSetPage,{init:function(c){var b=this;b.mboChk=false;b.callBase("init",c);b.$_TmplAll=b.$mRootElement.find(".jtodo-all").remove();b.$_TmplNoLbl=b.$mRootElement.find(".jtodo-nolbl").remove();b.$mRootElement.find(".jtodo-add").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoEntry.setPage("");desknets.sp.changePage("todoentry")});b.$mRootElement.find(".jtodo-labeladd").on("vclick",function(d){d.preventDefault();desknets.sp.todo.LabelEntry.setEntries({name:""});desknets.sp.todo.LabelEntry.setPage("");desknets.sp.changePage("labelentry")});b.$mRootElement.find(".jtodo-srch").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoSrch.getDefSrch(true);desknets.sp.changePage("srch")});b.$mRootElement.find(".co-nav-send").on("vclick",function(d){b.$mRootElement.find(".co-nav-send").removeClass("co-hover-clear");d.preventDefault();desknets.sp.todo.chgMyTask();b.reload()})},getListRequestURL:function(){return desknets.sp.todo.getRequestURL()},getListRequestData:function(d,f){var b=this;var e="0";if(!desknets.sp.todo.mboMyTask){e="1"}var c={row:d,num:f,mytask:e};if(b.mboSet){c.cmd=desknets.todoset.CMD_TODOPSETLABELLIST}else{c.cmd=desknets.todo.CMD_TODOLABELLIST}return c},getAjaxId:function(){return"dnsp-todolabel"},delMore:function(){var b=this;b.callBase("delMore");b.$listElement.find(".jtodo-all").remove();b.$listElement.find(".jtodo-nolbl").remove()},updateContainerElement:function(c){var b=this;if(b.miStartIndex==0&&!b.mboSet){b.$listElement.show();b.$noItemsContainerElement.hide();var d=b.$listElement.children(":first-child");b.$_TmplAll.find(".ui-li-count").html(c.lblassigncntall);b.$_TmplNoLbl.find(".ui-li-count").html(c.lblassigncntnone);if(d.length==0){b.$listElement.append(b.$_TmplAll.clone());b.$listElement.append(b.$_TmplNoLbl.clone())}else{b.$_TmplAll.clone().insertBefore(d);b.$_TmplNoLbl.clone().insertBefore(d)}}b.$mRootElement.find(".co-nav-send").removeClass("ui-btn-active").addClass("co-hover-clear");b.callBase("updateContainerElement",c)},setUpListItem:function(d,c){var b=this;this.callBase("setUpListItem",d,c);c.find("h3").html(desknets.tmpl.escapeWord(d.labelname));if(!b.mboSet){c.find(".ui-li-count").text(d.labelassigncnt)}},openListItem:function(c,d){var b=this;if(b.mboSet){desknets.sp.todo.LabelEntry.setEntries({name:c.find("h3").text()});desknets.sp.todo.LabelEntry.setPage(d);desknets.sp.changePage("labelentry")}else{desknets.sp.todo.TaskLimitList.setLabel(d,c.find("h3").text());desknets.sp.changePage("limit")}},replaceItems:function(){var b=this;b.callBase("replaceItems");if(b.mboSet){b.$mRootElement.find(".co-subtitle").hide()}else{if(desknets.sp.todo.mboMyTask){sTitle=desknets.Resource.todo.list_title_mytask}else{sTitle=desknets.Resource.todo.list_title_reqtask}b.$mRootElement.find(".co-subtitle").html(sTitle).show()}if(!desknets.sp.todo.mboMyTask){b.$mRootElement.find(".co-nav-send").removeClass("jtodo-sendtask").removeClass("ui-icon-send").addClass("jtodo-mytask").addClass("ui-icon-todo-mytask")}else{b.$mRootElement.find(".co-nav-send").removeClass("jtodo-mytask").removeClass("ui-icon-todo-mytask").addClass("jtodo-sendtask").addClass("ui-icon-send")}},setListMytask:function(){var b=this;if(desknets.sp.todo.mboMyTask){sTitle=desknets.Resource.todo.list_title_mytask;b.$mRootElement.find(".co-nav-send").removeClass("jtodo-mytask").removeClass("ui-icon-todo-mytask").addClass("jtodo-sendtask").addClass("ui-icon-send")}else{sTitle=desknets.Resource.todo.list_title_reqtask;b.$mRootElement.find(".co-nav-send").removeClass("jtodo-sendtask").removeClass("ui-icon-send").addClass("jtodo-mytask").addClass("ui-icon-todo-mytask")}b.$mRootElement.find(".co-subtitle").html(sTitle)}});desknets.page(desknets.sp.todo,"LabelEntry",desknets.sp.EntryPage,{init:function(c){var b=this;b.callBase("init",c);b.$mRootElement.find(".jtodo-label-del").on("vclick",function(d){d.preventDefault();desknets.sp.todo.LabelDel.setPage(b.msId);desknets.sp.changePage("d-labeldel",{changeHash:false})})},replaceItems:function(){var b=this;b.setUpReferItemFromEntries();b.$mRootElement.find(".co-area").show();b.pageViewEnd()},invalidateEntry:function(){var b=this},setUpReferItemFromEntries:function(){var b=this;b.$mRootElement.find('input[name="Name"]').val(b.mobjEntries.name)},getEntriesFromReferItem:function(){var b=this;var c={};c.cmd=desknets.todoset.CMD_TODOPSETLABELENTRY;c.Name=b.$mRootElement.find('input[name="Name"]').val();if(!!b.msId&&b.msId!==""){c.id=b.msId}return c},getSubmitRequestURL:function(){return desknets.sp.todo.getRequestURL()},completeToSendEntries:function(){var b=this;desknets.sp.todo.LabelList.invalidate();b.callBase("completeToSendEntries")}});desknets.page(desknets.sp.todo,"LabelDel",desknets.sp.DelPage,{delCloseId:function(){return"labelentry"},setInvalidate:function(){var b=this;desknets.sp.todo.LabelList.invalidate()},getEntriesFromReferItem:function(){var b=this;var c=b.callBase("getEntriesFromReferItem");c.cmd=desknets.todoset.CMD_TODOPSETLABELDEL;return c},getSubmitRequestURL:function(){return desknets.sp.todo.getRequestURL()}});desknets.page(desknets.sp.todo,"TaskLimitList",desknets.sp.ListPage,{msLabelId:"",msLabelName:"",miListItemsCnt:5,init:function(c){var b=this;b.callBase("init",c);b._initPage()},showing:function(){var b=this;b.callBase("showing");b.showingPage()},_initPage:function(){var b=this;b.$mRootElement.find(".jtodo-add").on("vclick",function(c){c.preventDefault();desknets.sp.todo.TodoEntry.setPage("");desknets.sp.changePage("todoentry")});b.$mRootElement.find(".jtodo-srch").on("vclick",function(c){c.preventDefault();desknets.sp.todo.TodoSrch.getDefSrch(true);desknets.sp.changePage("srch")});b.$mRootElement.find(".co-nav-send").on("vclick",function(c){b.$mRootElement.find(".co-nav-send").removeClass("co-hover-clear");c.preventDefault();desknets.sp.todo.chgMyTask();b.reload()});b.$mRootElement.find(".jtodo-labellist").on("vclick",function(c){c.preventDefault();desknets.sp.changePage("label",{reverse:true})});b.$mRootElement.find(".jtodo-list-limit").on("vclick",function(c){desknets.sp.todo.TaskList.setCond(b.msLabelId,b.msLabelName,a(this).data("limit"));desknets.sp.changePage("task")})},showingPage:function(){var b=this;b.$mRootElement.find(".jtodo-label").html(b.msLabelName)},setLabel:function(d,c){var b=this;b.msLabelId=d;b.msLabelName=c;b.invalidate()},getListRequestURL:function(){return desknets.sp.todo.getRequestURL()},getListRequestData:function(e,h){var b=this;var c={};var d={};var i=desknets.sp.todo.mboMyTask==true?"0":"1";var g={cmd:desknets.todo.CMD_TODOLISTLIMIT,labelid:b.msLabelId,mytask:i,limit:"1",num:b.miListItemsCnt};var f={cmd:desknets.todo.CMD_TODOLISTLIMIT,labelid:b.msLabelId,mytask:i,limit:"2",num:b.miListItemsCnt};c[0]=g;c[1]=f;d=desknets.ajax.arrayToMultiCmdData(c);return d},getAjaxId:function(){return"dnsp-todolimitlist"},getRequestOption:function(){var b=this;var c={};c=b.callBase("getRequestOption");a.extend(c,{detectMultiError:true});return c},executeOnItemsGot:function(e,f,d){var c=this;var f=[];var b="";c.setUpListTitle();f=desknets.sp.ajax.getJsonItems(e[0]);c.addListElements(f,"jtodo-list-over",e[0].allcnt);f=desknets.sp.ajax.getJsonItems(e[1]);c.addListElements(f,"jtodo-list-today",e[1].allcnt);c.updateContainerElement(e)},setUpListTitle:function(){var b=this;if(desknets.sp.todo.mboMyTask){sTitle=desknets.Resource.todo.list_title_mytask}else{sTitle=desknets.Resource.todo.list_title_reqtask}sTitle=sTitle+desknets.Resource.todo.list_title_sep;if(neo.isSet(b.msLabelName,{blank:false})){sTitle=sTitle+desknets.tmpl.escapeWord(b.msLabelName)}else{sTitle=sTitle+desknets.Resource.todo.srch_set_allTask;b.msLabelName=desknets.Resource.todo.srch_set_allTask}b.$mRootElement.find(".co-subtitle").html(sTitle)},updateContainerElement:function(c){var b=this;if(!desknets.sp.todo.mboMyTask){b.$mRootElement.find(".co-nav-send").removeClass("ui-btn-active").addClass("co-hover-clear").removeClass("jtodo-sendtask").removeClass("ui-icon-send").addClass("jtodo-mytask").addClass("ui-icon-todo-mytask")}else{b.$mRootElement.find(".co-nav-send").removeClass("ui-btn-active").addClass("co-hover-clear").removeClass("jtodo-mytask").removeClass("ui-icon-todo-mytask").addClass("jtodo-sendtask").addClass("ui-icon-send")}b.$listElement.show();b.$listElement.enhanceWithin()},clearItems:function(){var b=this;if(b.$mRootElement!=null){b.miStartIndex=0;b.$listElement.hide();b.$listElement.find(".jtodo-list-data").remove();b.$mRootElement.find(".co-subtitle").empty()}},addListElements:function(i,c,f){var d=this;var h=d.$listElement.find("."+c).filter(":first");var e=i.length;for(var g=0;g<e;g++){var b=null;b=d.addListElementsTmpl();b.insertAfter(h);d.setUpListItem(i[g],b);h=b}if(f==0){d.$listElement.find("."+c+"-none").show();d.$listElement.find("."+c+"-more").hide()}else{d.$listElement.find("."+c+"-none").hide();if(f>d.miListItemsCnt){d.$listElement.find("."+c+"-more").show()}else{d.$listElement.find("."+c+"-more").hide()}}},setUpListItem:function(d,c){var b=this;this.callBase("setUpListItem",d,c);c.find("h3").html(desknets.tmpl.escapeWord(d.memo))},openListItem:function(c,d){var b=this;if(!!neo.isSet(d)&&Number(d)>0){desknets.sp.todo.TodoRef.setPage(d);desknets.sp.changePage("todoref")}}});desknets.page(desknets.sp.todo,"TaskList",desknets.sp.ListSetPage,{msLabelId:"",msLabelName:"",msLimit:"",mboProcComplete:false,init:function(c){var b=this;b.callBase("init",c);b.$mRootElement.find(".jtodo-add").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoEntry.setPage("");desknets.sp.changePage("todoentry")});b.$mRootElement.find(".jtodo-srch").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoSrch.getDefSrch(true);desknets.sp.changePage("srch")});b.$mRootElement.find(".co-nav-send").on("vclick",function(d){b.$mRootElement.find(".co-nav-send").removeClass("co-hover-clear");d.preventDefault();desknets.sp.todo.chgMyTask();b.reload()});b.$mRootElement.find(".jtodo-del").on("vclick",function(e){e.preventDefault();b.mboProcComplete=false;var d=b.getChkId(true);if(d!==false){desknets.sp.todo.TodoDel.setPage(d,true);desknets.sp.changePage("d-tododel")}});b.$mRootElement.find(".jtodo-complete").on("vclick",function(e){e.preventDefault();b.mboProcComplete=true;var d=b.getChkId(true);if(d!==false){desknets.sp.todo.TodoComplete.setPage(d);desknets.sp.changePage("d-todocomplete")}})},clearItems:function(){var b=this;b.callBase("clearItems");b.$mRootElement.find(".jtodo-list-comp").hide();b.$mRootElement.find(".jtodo-list-nocomp").hide()},setCond:function(e,d,c){var b=this;b.msLabelId=e;b.msLabelName=d;b.msLimit=c;b.mboSet=false;b.invalidate()},getListRequestURL:function(){return desknets.sp.todo.getRequestURL()},getListRequestData:function(d,f){var b=this;var e="0";if(!desknets.sp.todo.mboMyTask){e="1"}var c={row:d,num:f,mytask:e,limit:b.msLimit,labelid:b.msLabelId,cmd:desknets.todo.CMD_TODOLISTLIMIT};return c},getAjaxId:function(){return"dnsp-todolist"},setUpListItem:function(f,d){var c=this;var b="tasklistid";var e=f.id;this.callBase("setUpListItem",f,d);d.find("h3").html(desknets.tmpl.escapeWord(f.memo));d.find("input[type=checkbox]").attr("id",b+f.id);d.find("label").attr("for",b+f.id)},openListItem:function(c,d){var b=this;if(b.mboSet){}else{desknets.sp.todo.TodoRef.setPage(d);desknets.sp.changePage("todoref")}},replaceItems:function(){var b=this;var c="";b.callBase("replaceItems");if(desknets.sp.todo.mboMyTask){sTitle=desknets.Resource.todo.list_title_mytask}else{sTitle=desknets.Resource.todo.list_title_reqtask}b.$mRootElement.find(".co-bar-msg").html(sTitle);sTitle=sTitle+desknets.Resource.todo.list_title_sep;sTitle=sTitle+desknets.tmpl.escapeWord(b.msLabelName);sTitle=sTitle+desknets.Resource.todo.list_title_sep;c="list_title_limit"+b.msLimit;sTitle=sTitle+desknets.Resource.todo[c];b.$mRootElement.find(".co-subtitle").html(sTitle);if(!desknets.sp.todo.mboMyTask){b.$mRootElement.find(".co-nav-send").removeClass("jtodo-sendtask").removeClass("ui-icon-send").addClass("jtodo-mytask").addClass("ui-icon-todo-mytask")}else{b.$mRootElement.find(".co-nav-send").removeClass("jtodo-mytask").removeClass("ui-icon-todo-mytask").addClass("jtodo-sendtask").addClass("ui-icon-send")}b.$mRootElement.find(".co-nav-send").enhanceWithin();if(b.msLimit=="5"){b.$mRootElement.find(".jtodo-list-comp").show()}else{b.$mRootElement.find(".jtodo-list-nocomp").show()}},updateContainerElement:function(c){var b=this;b.$mRootElement.find(".co-nav-send").removeClass("ui-btn-active").addClass("co-hover-clear");b.callBase("updateContainerElement",c)},setChgView:function(){var b=this;b.callBase("setChgView");if(b.mboSet){b.$mRootElement.find(".co-nav-send").removeClass("jtodo-sendtask").removeClass("ui-icon-send").addClass("jtodo-mytask").addClass("ui-icon-todo-mytask");b.$mRootElement.find(".jco-list-itemdata").addClass("_edit")}else{b.$mRootElement.find(".co-nav-send").removeClass("jtodo-mytask").removeClass("ui-icon-todo-mytask").addClass("jtodo-sendtask").addClass("ui-icon-send");b.$mRootElement.find(".jco-list-itemdata").removeClass("_edit")}b.$mRootElement.find(".co-nav-send").enhanceWithin()},getNoChkMsg:function(){var b=this;if(b.mboProcComplete){return desknets.Resource.Message.todo_end_nochecked}else{return b.callBase("getNoChkMsg")}}});desknets.page(desknets.sp.todo,"TodoRef",desknets.sp.RefPage,{msTag:"",initPage:function(){var b=this;b.callBase("initPage");if(!neo.isSet(b.msId,{blank:false})){var c=desknets.sp.getPrm();if(neo.isSet(c.id)){b.setPage(c.id)}else{desknets.sp.resetPage()}}b.$mRootElement.find(".jtodo-mod").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoEntry.setPage(b.msId);desknets.sp.changePage("todoentry")});b.$mRootElement.find(".jtodo-del").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoDel.setPage(b.msId,false);desknets.sp.changePage("d-tododel",{changeHash:false})});b.$mRootElement.find(".jtodo-tag").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoTag.setPage(b.msId,b.msTag);desknets.sp.changePage("d-todotag")});b.$mRootElement.find(".jtodo-complete").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoComplete.setPage(b.msId);desknets.sp.changePage("d-todocomplete")})},getReferRequestURL:function(){return desknets.sp.todo.getRequestURL()},getReferRequestData:function(){var b=this;var c={cmd:desknets.todo.CMD_TODOTASKREF,id:b.msId,};return c},setUpReferItem:function(f){var c=this;c.msTag=f.tagcolor;c.setUpText(".jtodo-label",f.labelname);c.setUpBody(".jtodo-memo",f.memo);c.setUpDate(".jtodo-limdate",f.limdate+f.limtime);var g=desknets.todo.dispItems(f.name,f.compsts,desknets.todo.form_sts,"sts");c.$mRootElement.find(".jtodo-otherto").html(g);var d={cmd:desknets.todo.CMD_TODODISPATTACH,id:c.msId,uid:desknets.sp.getLoginUid()};c.setUpFile(".jtodo-attach",f.attach,d);var e=f.entry+" ("+desknets.dateTime.dispDateTime(f.cretime,"dateTimeFormat")+")";c.setUpText(".jtodo-entry",e);if(desknets.sp.menu.boView("agent")){var b="";if(f.alarmtime){b=desknets.Resource.todo.disp_alarm_send+desknets.todo.TaskRefSetAlarmInfo(f.alarmtime,f.alarmcnt,f.alarminterval)}else{b=desknets.Resource.todo.disp_alarm_nosend}c.$mRootElement.find(".jtodo-alarm").html(b)}else{c.$mRootElement.find(".jtodo-alarm").closest("li").remove()}}});desknets.page(desknets.sp.todo,"TodoEntry",desknets.sp.EntryPage,{init:function(c){var b=this;b.callBase("init",c);desknets.sp.seldate.setUpDate(b.$mRootElement);desknets.sp.seldate.setUpTime(b.$mRootElement);b.$mRootElement.find(".jtodo-entry-label").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoSetLabel.invalidate();desknets.sp.changePage("setlabel")});b.$mRootElement.find(".jtodo-entry-user").on("vclick",function(d){d.preventDefault();desknets.sp.changePage("setuser")});b.$mRootElement.find(".jtodo-alarm-send").on("vclick",function(d){d.preventDefault();desknets.sp.todo.TodoAlarm.invalidate();desknets.sp.todo.TodoAlarm.setUpEntryAlarm(b.mobjEntries);desknets.sp.changePage("d-todoalarm")})},getReferRequestURL:function(){return desknets.sp.todo.getRequestURL()},getReferRequestData:function(){var b=this;var c={cmd:desknets.todo.CMD_TODOTASKREF,id:b.msId,};return c},setUpReferItemFromEntries:function(){var c=this;var b="";var d="";c.$mRootElement.find('input[name="labelname"]').val(c.mobjEntries.labelname);if(neo.isSet(c.mobjEntries.memo)){c.$mRootElement.find(".jtodo-memo").val(c.mobjEntries.memo).keyup()}else{c.$mRootElement.find(".jtodo-memo").val("").keyup()}if(neo.isSet(c.mobjEntries.limdate,{blank:false})){b=desknets.sp.seldate.changeFormatDate(c.mobjEntries.limdate)}c.$mRootElement.find('input[name="limdate"]').val(b).change();if(neo.isSet(c.mobjEntries.limtime,{blank:false})){d=desknets.dateTime.formatHour(desknets.sp.seldate.formatTime,c.mobjEntries.limtime)}c.$mRootElement.find('input[name="limtime"]').val(d).change();c.$mRootElement.find('input[name="alarm"]').val(c.mobjEntries.alarm);c.$mRootElement.find('input[name="alarmtime"]').val(c.mobjEntries.alarmtime);c.$mRootElement.find('input[name="alarmcnt"]').val(c.mobjEntries.alarmcnt);c.$mRootElement.find('input[name="alarminterval"]').val(c.mobjEntries.alarminterval);if(neo.isSet(c.mobjEntries.name)){c.setSelUsers(desknets.ajax.getItems(c.mobjEntries.name.item))}else{c.setSelUsers([{id:desknets.sp.getLoginUid(),val:desknets.sp.getLoginName()}])}c.$mRootElement.find(".jco-entry-accdel").remove();c.setUpAlarmInfo()},setUpAlarmInfo:function(){var c=this;var b="";if(desknets.sp.menu.boView("agent")){if(c.mobjEntries.alarm=="1"){b=desknets.Resource.todo.disp_alarm_send+desknets.todo.TaskRefSetAlarmInfo(c.mobjEntries.alarmtime,c.mobjEntries.alarmcnt,c.mobjEntries.alarminterval)}else{b=desknets.Resource.todo.disp_alarm_nosend}c.$mRootElement.find(".jtodo-alarm-send").html(b)}else{c.$mRootElement.find(".jtodo-alarm-send").closest("ul").remove()}},getEntriesFromReferItem:function(){var d=this;var e={};var c=[];e.cmd=desknets.todo.CMD_TODOTASKENTRY;e.labelname=d.$mRootElement.find('input[name="labelname"]').val();e.memo=d.$mRootElement.find(".jtodo-memo").val();e.limdate=d.$mRootElement.find('input[name="limdate"]').data("rval");e.limtime=d.$mRootElement.find('input[name="limtime"]').data("rval");var b=d.$mRootElement.find('input[name="otherto"]');b.each(function(){c[c.length]=a(this).val()});e.otherto=c;if(!!d.msId&&d.msId!==""){e.id=d.msId}e.alarm=d.$mRootElement.find('input[name="alarm"]').val()=="1"?1:0;e.alarmtime=d.$mRootElement.find('input[name="alarmtime"]').val();e.alarmcnt=d.$mRootElement.find('input[name="alarmcnt"]').val();return e},completeToSendEntries:function(){var b=this;desknets.sp.todo.TaskLimitList.invalidate();desknets.sp.todo.TaskList.invalidate();desknets.sp.todo.TodoRef.invalidate();desknets.sp.todo.LabelList.invalidate();desknets.sp.todo.TodoSrch.invalidate();b.callBase("completeToSendEntries")},setUpEntryAlarm:function(b){var c=this;a.extend(c.mobjEntries,b);c.$mRootElement.find('input[name="alarm"]').val(b.alarm);c.$mRootElement.find('input[name="alarmtime"]').val(b.alarmtime);c.$mRootElement.find('input[name="alarmcnt"]').val(b.alarmcnt);c.$mRootElement.find('input[name="alarminterval"]').val(b.alarminterval);c.setUpAlarmInfo()},setTodoLabel:function(c){var b=this;b.$mRootElement.find('input[name="labelname"]').val(c)},setSelUsers:function(c,e,f){var b=this;b.callBase("setSelUsers",c,e);if(neo.isSet(f,{blank:false})){if(b.$mRootElement.find(".jco-entry-accdel").length<=0){var d=a('<div class="jco-entry-accdel"> '+f+"</div>");d.appendTo(b.$mRootElement.find(".co-input-selected").closest("li"))}}},setPage:function(c){var b=this;b.setEntries({});b.callBase("setPage",c);desknets.sp.todo.UserSelPage.invalidate()}});desknets.page(desknets.sp.todo,"TodoDel",desknets.sp.DelPage,{delCloseId:function(){return"todoref"},setInvalidate:function(){var b=this;desknets.sp.todo.fullInvalidate()},getEntriesFromReferItem:function(){var b=this;var c=b.callBase("getEntriesFromReferItem");c.cmd=desknets.todo.CMD_TODOTASKDEL;return c},getSubmitRequestURL:function(){return desknets.sp.todo.getRequestURL()}});desknets.page(desknets.sp.todo,"TodoSetLabel",desknets.sp.ListPage,{init:function(c){var b=this;b.mboChk=false;b.callBase("init",c);b.$mRootElement.find(".jtodo-set").on("vclick",function(e){e.preventDefault();var d=b.$mRootElement.find("input[type=radio]:checked").closest("li").find("h3").text();desknets.sp.todo.TodoEntry.setTodoLabel(d);history.back()})},getListRequestURL:function(){return desknets.sp.todo.getRequestURL()},getListRequestData:function(d,e){var b=this;var c={cmd:desknets.todoset.CMD_TODOPSETLABELLIST,row:d,num:e};return c},getAjaxId:function(){return"dnsp-todosellabel"},setUpListItem:function(d,c){var b=this;this.callBase("setUpListItem",d,c);c.find("input[type=radio]").attr("id","todo-chk-label-"+d.id);c.find("label").attr("for","todo-chk-label-"+d.id);c.find("h3").html(desknets.tmpl.escapeWord(d.labelname))},openListItem:function(c,d){var b=this}});desknets.page(desknets.sp.todo,"UserSelPage",desknets.sp.UserSelPage,{openMultiItems:function(c){var b=this;b.othertoFilter(c)},othertoFilter:function(d){var c=this;var e={};var b=[];c.execBeforAjaxStart();if(d.length<=0){history.back()}else{e.cmd=desknets.todo.CMD_TODOFILTARGET;a.each(d,function(f,g){b[b.length]=g.id});e.id=b;e.accesskind="2";desknets.sp.ajax.rest({url:c.getSubmitRequestURL(),data:e,success:function(g,f,h){c.execAfterajaxStop();c.completeToFilter(d,g)},errorconvmsg:function(f,g){var h=desknets.getErrField(f,g);return desknets.getErrConvMsg(h)}})}},getSubmitRequestURL:function(){return desknets.sp.todo.getRequestURL()},completeToFilter:function(d,f){var c=this;var g=desknets.ajax.getJsonItems(f);var b=c._filterWithIDs(d,g);var h="";if(d.length>b.length){h=desknets.Resource.Message.com_accs_otherto_add}var e=desknets.parseErrorInfo(h);desknets.sp.todo.TodoEntry.setSelUsers(b,"otherto",e.message);history.back()},_filterWithIDs:function(e,c){var d={},b=[];a.each(c,function(f,g){d[g.id]=true});a.each(e,function(f,g){if(!!d[g.id]){b.push(g)}});return b},});desknets.page(desknets.sp.todo,"TodoTag",desknets.sp.TagPage,{setInvalidate:function(){var b=this;desknets.sp.todo.fullInvalidate()},getEntriesFromReferItem:function(){var b=this;var c=b.callBase("getEntriesFromReferItem");c.cmd=desknets.todo.CMD_TODOTAGENTRY;return c},getSubmitRequestURL:function(){return desknets.sp.todo.getRequestURL()},completeTag:function(c){var b=this;desknets.sp.todo.TodoRef.msTag=c}});desknets.page(desknets.sp.todo,"TodoComplete",desknets.sp.EntryPage,{replaceItems:function(){var b=this;b.pageViewEnd()},showingPage:function(){var b=this},getEntriesFromReferItem:function(){var b=this;var c={};c.cmd=desknets.todo.CMD_TODOTASKCOMPLETE;c.id=b.msId;return c},getSubmitRequestURL:function(){return desknets.sp.todo.getRequestURL()},completeToSendEntries:function(){var b=this;desknets.sp.todo.TaskLimitList.invalidate();desknets.sp.todo.TaskList.invalidate();desknets.sp.todo.TodoSrch.invalidate();desknets.sp.todo.TodoRef.invalidate();b.$mRootElement.dialog("close")}});desknets.page(desknets.sp.todo,"TodoSrch",desknets.sp.SearchPage,{mobjSrch:{},initPage:function(){var b=this;b.callBase("initPage");b.$mRootElement.find(".jtodo-add").on("vclick",function(c){c.preventDefault();desknets.sp.todo.TodoEntry.setPage("");desknets.sp.changePage("todoentry")});b.$mRootElement.find(".jtodo-srchset").on("vclick",function(c){c.preventDefault();b._handleListClickSrch()})},showFirstPage:function(){var b=this;b.callBase("showFirstPage");b.setSrchView()},_handleListClickSrch:function(){var b=this;desknets.sp.todo.TodoSetSrch.invalidate();desknets.sp.todo.TodoSetSrch.setPage(b.mobjSrch);desknets.sp.changePage("srchset")},chkSearch:function(){var d=this;if(d.$mRootElement.find('input[name="srch_key"]').val()==""&&d.mobjSrch.sdate==""&&d.mobjSrch.edate==""&&d.mobjSrch.mytask=="2"&&d.mobjSrch.complete=="2"){var b=desknets.Resource.searchcond;var c="";var e=desknets.tmpl.replaceWordHtml(desknets.Resource.Message.com_search_required,"item",b);desknets.sp.msg.view(c,"W:"+e,false);return false}return true},replaceItems:function(){var b=this;b.callBase("replaceItems");b.setSrchView()},setSrchView:function(){var b=this;var c="";if(b.mobjSrch.mytask=="0"){c=desknets.Resource.todo.list_title_mytask}else{if(b.mobjSrch.mytask=="1"){c=desknets.Resource.todo.list_title_reqtask}else{c=desknets.Resource.todo.srch_set_allTask}}b.$mRootElement.find('input[name="srch_key"]').val(b.mobjSrch.srch_key).searchkeychg();b.$mRootElement.find(".jtodo-mytask").html(c);if(!neo.isSet(b.mobjSrch.sdate,{blank:false})&&!neo.isSet(b.mobjSrch.edate,{blank:false})){b.$mRootElement.find(".jtodo-credate").hide()}else{b.$mRootElement.find(".jtodo-scredate").text(b.mobjSrch.sdate);b.$mRootElement.find(".jtodo-ecredate").text(b.mobjSrch.edate);b.$mRootElement.find(".jtodo-credate").show()}b.$mRootElement.find(".jtodo-complete-label").html(desknets.Resource.todo["srch_set_complete"+b.mobjSrch.complete])},getAjaxId:function(){return"dnsp-todosrch"},setLabel:function(e,d,b){var c=this;c.callBase("setLabel",e,d);c.mobjSrch=b},getListRequestURL:function(){return desknets.sp.todo.getRequestURL()},getListRequestData:function(d,f){var c=this;var g=desknets.Resource.dateFormat;var b=desknets.sp.changeDateFormat_JP(g,c.mobjSrch.sdate);var e=desknets.sp.changeDateFormat_JP(g,c.mobjSrch.edate);return{cmd:desknets.todo.CMD_TODOLISTSEARCH,mytask:c.mobjSrch.mytask,srch_key:c.mobjSrch.srch_key,srch_limdate_s:b,srch_limdate_e:e,complete:c.mobjSrch.complete,row:d,num:f}},getDefSrch:function(c){var b=this;b.callBase("getDefSrch",c);b.mobjSrch={srch_key:"",mytask:"0",srch_limdate_s:"",srch_limdate_e:"",complete:"2"}},setUpListItem:function(d,c){var b=this;this.callBase("setUpListItem",d,c);c.find("h3").html(desknets.tmpl.escapeWord(d.memo))},openListItem:function(c,d){var b=this;desknets.sp.todo.TodoRef.setPage(d);desknets.sp.changePage("todoref")},setSrch:function(b){var c=this;c.callBase("setSrch",b);c.msLabelName=b.labelname}});desknets.page(desknets.sp.todo,"TodoSetSrch",desknets.sp.RefPage,{mobjSrch:{},initPage:function(){var b=this;desknets.sp.seldate.setUpDate(b.$mRootElement);b.$mRootElement.find(".jtodo-srch").on("vclick",function(h){h.preventDefault();if(!desknets.sp.validation.isSrchInputDateFromTo(b.$mRootElement)){return}var e={};e.srch_key=b.$mRootElement.find('input[name="srch_key"]').val();e.mytask=b.$mRootElement.find('select[name="mytask"] option:selected').val();e.sdate=b.$mRootElement.find('input[name="sdate"]').val();e.edate=b.$mRootElement.find('input[name="edate"]').val();var d=b.$mRootElement.find('input[name="complete"]');d.each(function(j){if(a(this).prop("checked")){e.complete=j}});if(e.srch_key==""&&e.sdate==""&&e.edate==""&&e.mytask=="2"&&e.complete=="2"){var c=desknets.Resource.searchcond;var f="";var g=desknets.tmpl.replaceWordHtml(desknets.Resource.Message.com_search_required,"item",c);desknets.sp.msg.view(f,"W:"+g,false)}else{a.extend(b.mobjSrch,e);desknets.sp.todo.TodoSrch.setSrch(b.mobjSrch);history.back()}});b.$mRootElement.find(".jtodo-clear").on("vclick",function(c){c.preventDefault();b.$mRootElement.find('input[name="srch_key"]').val("").searchkeychg();b.$mRootElement.find('select[name="mytask"]').val("0").selectmenu("refresh");b.$mRootElement.find('input[name="sdate"]').val("");b.$mRootElement.find('input[name="edate"]').val("");b.$mRootElement.find("#todo_srchset_comp_0").prop("checked",false).checkboxradio("refresh");b.$mRootElement.find("#todo_srchset_comp_1").prop("checked",false).checkboxradio("refresh");b.$mRootElement.find("#todo_srchset_comp_2").prop("checked",true).checkboxradio("refresh")})},showingPage:function(){var b=this},setPage:function(b){var c=this;c.callBase("setPage","");c.mobjSrch=b},replaceItems:function(){var b=this;b.setUpReferItem();b.pageViewEnd()},setUpReferItem:function(){var c=this;c.$mRootElement.find('input[name="srch_key"]').val(c.mobjSrch.srch_key).searchkeychg();var d=c.$mRootElement.find('select[name="mytask"]');d.val(c.mobjSrch.mytask);c.$mRootElement.find('input[name="sdate"]').val(c.mobjSrch.sdate);c.$mRootElement.find('input[name="edate"]').val(c.mobjSrch.edate);var b=c.$mRootElement.find('input[name="complete"]');if(c.mobjSrch.complete=="0"){c.$mRootElement.find("#todo_srchset_comp_0").prop("checked",true).checkboxradio("refresh");c.$mRootElement.find("#todo_srchset_comp_1").prop("checked",false).checkboxradio("refresh");c.$mRootElement.find("#todo_srchset_comp_2").prop("checked",false).checkboxradio("refresh")}else{if(c.mobjSrch.complete=="1"){c.$mRootElement.find("#todo_srchset_comp_0").prop("checked",false).checkboxradio("refresh");c.$mRootElement.find("#todo_srchset_comp_1").prop("checked",true).checkboxradio("refresh");c.$mRootElement.find("#todo_srchset_comp_2").prop("checked",false).checkboxradio("refresh")}else{c.$mRootElement.find("#todo_srchset_comp_0").prop("checked",false).checkboxradio("refresh");c.$mRootElement.find("#todo_srchset_comp_1").prop("checked",false).checkboxradio("refresh");c.$mRootElement.find("#todo_srchset_comp_2").prop("checked",true).checkboxradio("refresh")}}}});desknets.page(desknets.sp.todo,"TodoAlarm",desknets.sp.EntryPage,{init:function(c){var b=this;b.callBase("init",c);b.$mRootElement.find(".jtodo-alarm-clear").on("vclick",function(e){var d={alarm:"0",alarmtime:"",alarmcnt:"",alarminterval:""};desknets.sp.todo.TodoEntry.setUpEntryAlarm(d);b.$mRootElement.dialog("close")})},replaceItems:function(){var b=this;b.pageViewEnd()},showingPage:function(){var b=this;if(!b.mbItemRetrieved){b.setUpReferItemFromEntries()}},setUpEntryAlarm:function(c){var b=this;b.mbItemRetrieved=false;b.mobjEntries=c},setUpReferItemFromEntries:function(){var e=this;var f=e.$mRootElement.find('select[name="alarmtime"]');var d=e.$mRootElement.find('select[name="alarmcnt"]');var c=2;var b=0;var g=0;if(e.mobjEntries.alarmtime&&e.mobjEntries.alarmcnt&&e.mobjEntries.alarminterval){c=parseInt(e.mobjEntries.alarmtime);b=parseInt(e.mobjEntries.alarmcnt);g=parseInt(e.mobjEntries.alarminterval);var h=c/1440;if((h>=1&&h<=7)&&(g===desknets.todo.VALUE_TODOALARMEVERY||g===desknets.todo.VALUE_TODOALARMONCE)){c=h-1;g=g-1}else{c=2;g=0}}f[0].selectedIndex=c;d[0].selectedIndex=g;f.selectmenu("refresh");d.selectmenu("refresh")},sendEntries:function(){var c=this;var b={alarm:"1",alarmtime:c.$mRootElement.find('select[name="alarmtime"] option:selected').val(),alarmcnt:c.$mRootElement.find('select[name="alarmcnt"] option:selected').val(),alarminterval:c.$mRootElement.find('select[name="alarmcnt"] option:selected').val()};desknets.sp.todo.TodoEntry.setUpEntryAlarm(b);c.$mRootElement.dialog("close")}});desknets.sp.todo.init()})(jQuery);