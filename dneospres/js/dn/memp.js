/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.memp={MODULE_API_MEMP:"zrmemp",CMD_MEMPPSETLABELENTRY:"memppsetcmdlabelentry",CMD_MEMPPSETDELLABEL:"memppsetdellabel",CMD_MEMPLIST:"mempcmdindex",CMD_MEMPENTRY:"mempcmdentry",CMD_MEMPDEL:"mempdel",CMD_MEMPSEARCH:"mempcmdsearch",CMD_MEMPDISP:"mempcmddisp",CMD_MEMPREFSETTAG:"mempcmdsettag",CMD_MEMPLABEL:"mempcmdlabel",CMD_MEMPREFATTACH:"mempdispattach",};desknets.sp.memp={init:function(){desknets.sp.mobjPages["label-page"]=desknets.sp.memp.LabelList;desknets.sp.mobjPages["labelentry-page"]=desknets.sp.memp.LabelEntry;desknets.sp.mobjPages["d-labeldel-page"]=desknets.sp.memp.LabelDel;desknets.sp.mobjPages["memp-page"]=desknets.sp.memp.MempList;desknets.sp.mobjPages["mempref-page"]=desknets.sp.memp.MempRef;desknets.sp.mobjPages["mempentry-page"]=desknets.sp.memp.MempEntry;desknets.sp.mobjPages["d-mempdel-page"]=desknets.sp.memp.MempDel;desknets.sp.mobjPages["d-memptag-page"]=desknets.sp.memp.MempTag;desknets.sp.mobjPages["mempsetlabel-page"]=desknets.sp.memp.MempSetLabel;desknets.sp.mobjPages["mempsrch-page"]=desknets.sp.memp.MempSrch;desknets.sp.mobjPages["mempsetsrch-page"]=desknets.sp.memp.MempSetSrch;desknets.sp.mobjPages["neotwi-page"]=desknets.sp.Neotwi;desknets.sp.initSetEvents()},getRequestURL:function(){return desknets.sp.getUrl(desknets.memp.MODULE_API_MEMP)},};desknets.page(desknets.sp.memp,"LabelList",desknets.sp.ListSetPage,{$_TmplAll:null,$_TmplNoLbl:null,init:function(c){var b=this;b.mboChk=false;b.callBase("init",c);b.$_TmplAll=b.$mRootElement.find(".jmemp-all").remove();b.$_TmplNoLbl=b.$mRootElement.find(".jmemp-nolbl").remove();b.$mRootElement.find(".jmemp-add").bind("vclick",function(d){d.preventDefault();desknets.sp.memp.MempEntry.setEntries({});desknets.sp.changePage("mempentry")});b.$mRootElement.find(".jmemp-labeladd").bind("vclick",function(d){d.preventDefault();desknets.sp.memp.LabelEntry.setEntries({name:""});desknets.sp.memp.LabelEntry.setPage("");desknets.sp.changePage("labelentry")});b.$mRootElement.find(".jmemp-srch").bind("vclick",function(d){d.preventDefault();desknets.sp.memp.MempSrch.getDefSrch(true);desknets.sp.changePage("mempsrch")})},getListRequestURL:function(){return desknets.sp.memp.getRequestURL()},getListRequestData:function(d,e){var b=this;var c={row:d,num:e,};c.cmd=desknets.memp.CMD_MEMPLABEL;return c},getAjaxId:function(){return"dnsp-memplabel"},delMore:function(){var b=this;b.callBase("delMore");b.$listElement.find(".jmemp-all").remove();b.$listElement.find(".jmemp-nolbl").remove()},updateContainerElement:function(c){var b=this;b.callBase("updateContainerElement",c);if(b.miStartIndex==0&&!b.mboSet){b.$listElement.show();b.$noItemsContainerElement.hide();var d=b.$listElement.children(":first-child");b.$_TmplAll.find(".ui-li-count").html(c.lblassigncntall);b.$_TmplNoLbl.find(".ui-li-count").html(c.lblassigncntnone);if(d.length==0){b.$listElement.append(b.$_TmplAll.clone());b.$listElement.append(b.$_TmplNoLbl.clone())}else{b.$_TmplAll.clone().insertBefore(d);b.$_TmplNoLbl.clone().insertBefore(d)}}},setUpListItem:function(d,c){var b=this;b.callBase("setUpListItem",d,c);c.find("h3").html(desknets.tmpl.escapeWord(d.labelname));if(!b.mboSet){c.find(".ui-li-count").html(d.labelassigncnt)}},openListItem:function(c,d){var b=this;if(b.mboSet){desknets.sp.memp.LabelEntry.setEntries({name:c.find("h3").text()});desknets.sp.memp.LabelEntry.setPage(d);desknets.sp.changePage("labelentry")}else{desknets.sp.memp.MempList.setLabel(d,c.find("h3").text());desknets.sp.changePage("memp")}},});desknets.page(desknets.sp.memp,"LabelEntry",desknets.sp.EntryPage,{init:function(c){var b=this;b.callBase("init",c);b.$mRootElement.find(".jmemp-del").bind("vclick",function(d){d.preventDefault();desknets.sp.memp.LabelDel.setPage(b.msId);desknets.sp.changePage("d-labeldel",{changeHash:false})})},replaceItems:function(){var b=this;b.setUpReferItemFromEntries();b.pageViewEnd()},setUpReferItemFromEntries:function(){var b=this;b.$mRootElement.find('input[name="Name"]').val(b.mobjEntries.name)},getEntriesFromReferItem:function(){var b=this;var c={};c.cmd=desknets.memp.CMD_MEMPPSETLABELENTRY;c.Name=b.$mRootElement.find('input[name="Name"]').val();if(!!b.msId&&b.msId!==""){c.id=b.msId}return c},getSubmitRequestURL:function(){return desknets.sp.memp.getRequestURL()},completeToSendEntries:function(){var b=this;desknets.sp.memp.LabelList.invalidate();b.callBase("completeToSendEntries")},});desknets.page(desknets.sp.memp,"LabelDel",desknets.sp.DelPage,{delCloseId:function(){return"labelentry"},setInvalidate:function(){var b=this;desknets.sp.memp.LabelList.invalidate()},getEntriesFromReferItem:function(){var b=this;var c=b.callBase("getEntriesFromReferItem");c.cmd=desknets.memp.CMD_MEMPPSETDELLABEL;return c},getSubmitRequestURL:function(){return desknets.sp.memp.getRequestURL()},});desknets.page(desknets.sp.memp,"MempList",desknets.sp.ListSetPage,{msLabelId:"0",msLabelName:"",init:function(c){var b=this;b.callBase("init",c);b.initMempPage()},showing:function(){var b=this;b.callBase("showing");b.showingMempPage()},initMempPage:function(){var b=this;b.$mRootElement.find(".jmemp-add").bind("vclick",function(c){c.preventDefault();desknets.sp.memp.MempEntry.setEntries({});desknets.sp.changePage("mempentry")});b.$mRootElement.find(".jmemp-del").bind("vclick",function(d){d.preventDefault();var c=b.getChkId(true);if(c!==false){desknets.sp.memp.MempDel.setPage(c,true);desknets.sp.changePage("d-mempdel")}});b.$mRootElement.find(".jmemp-srch").bind("vclick",function(c){c.preventDefault(true);desknets.sp.memp.MempSrch.getDefSrch(true);desknets.sp.changePage("mempsrch")});b.$mRootElement.find(".jmemp-pagelabel").bind("vclick",function(c){c.preventDefault();desknets.sp.changePage("label",{reverse:true})})},showingMempPage:function(){var b=this;if(b.msLabelName!=""){b.$mRootElement.find(".jmemp-label").html(desknets.tmpl.escapeWord(b.msLabelName))}},setLabel:function(d,c){var b=this;b.msLabelId=d;b.msLabelName=c;b.invalidate()},getListRequestURL:function(){return desknets.sp.memp.getRequestURL()},getListRequestData:function(c,d){var b=this;return{cmd:desknets.memp.CMD_MEMPLIST,labelid:b.msLabelId,row:c,num:d,}},getAjaxId:function(){return"dnsp-memp"},setUpListItem:function(d,c){var b=this;this.callBase("setUpListItem",d,c);c.find("h3").html(desknets.tmpl.escapeWord(d.Name));c.find("input[type=checkbox]").attr("id","memp-chk-list-"+d.id);c.find("label").attr("for","memp-chk-list-"+d.id)},openListItem:function(c,d){var b=this;if(!b.mboSet){desknets.sp.memp.MempRef.setPage(d);desknets.sp.changePage("mempref")}},});desknets.page(desknets.sp.memp,"MempRef",desknets.sp.RefPage,{msTag:"0",initPage:function(){var b=this;b.callBase("initPage");b.$mRootElement.find(".jmemp-mod").bind("vclick",function(c){c.preventDefault();desknets.sp.memp.MempEntry.setPage(b.msId);desknets.sp.changePage("mempentry")});b.$mRootElement.find(".jmemp-del").bind("vclick",function(c){c.preventDefault();desknets.sp.memp.MempDel.setPage(b.msId,false);desknets.sp.changePage("d-mempdel",{changeHash:false})});b.$mRootElement.find(".jmemp-tag").bind("vclick",function(c){c.preventDefault();desknets.sp.memp.MempTag.setPage(b.msId,b.msTag);desknets.sp.changePage("d-memptag")})},getReferRequestURL:function(){return desknets.sp.memp.getRequestURL()},getReferRequestData:function(){var b=this;var c={cmd:desknets.memp.CMD_MEMPDISP,id:b.msId,};return c},setUpReferItem:function(d){var b=this;b.msTag=d.tagcolor;b.setUpText(".jmemp-label",d.labelname);b.setUpBody(".jmemp-memo",d.memo);var c={cmd:desknets.memp.CMD_MEMPREFATTACH,id:b.msId};b.setUpFile(".jmemp-attach",d.attach,c);b.setUpDate(".jmemp-cretime",d.cretime);b.setUpDate(".jmemp-updtime",d.updtime)},});desknets.page(desknets.sp.memp,"MempEntry",desknets.sp.EntryPage,{init:function(c){var b=this;b.callBase("init",c);b.$mRootElement.find(".jmemp-set").bind("vclick",function(d){d.preventDefault();desknets.sp.memp.MempSetLabel.invalidate();desknets.sp.changePage("mempsetlabel")})},setMempLabel:function(c){var b=this;b.$mRootElement.find('input[name="labelname"]').val(c)},getReferRequestURL:function(){return desknets.sp.memp.getRequestURL()},getReferRequestData:function(){var b=this;var c={cmd:desknets.memp.CMD_MEMPDISP,id:b.msId,};return c},setUpReferItemFromEntries:function(){var b=this;b.$mRootElement.find('input[name="labelname"]').val(b.mobjEntries.labelname);b.$mRootElement.find(".jmemp-memo").val(b.mobjEntries.memo).keyup()},getEntriesFromReferItem:function(){var b=this;var c={};c.cmd=desknets.memp.CMD_MEMPENTRY;c.labelname=b.$mRootElement.find('input[name="labelname"]').val();c.memo=b.$mRootElement.find(".jmemp-memo").val();if(!!b.msId&&b.msId!==""){c.id=b.msId}return c},completeToSendEntries:function(){var b=this;desknets.sp.memp.MempList.invalidate();desknets.sp.memp.MempRef.invalidate();desknets.sp.memp.LabelList.invalidate();desknets.sp.memp.MempSrch.invalidate();b.callBase("completeToSendEntries")},});desknets.page(desknets.sp.memp,"MempDel",desknets.sp.DelPage,{delCloseId:function(){return"mempref"},setInvalidate:function(){var b=this;desknets.sp.memp.MempList.invalidate();desknets.sp.memp.MempSrch.invalidate();desknets.sp.memp.LabelList.invalidate()},getEntriesFromReferItem:function(){var b=this;var c=b.callBase("getEntriesFromReferItem");c.cmd=desknets.memp.CMD_MEMPDEL;return c},getSubmitRequestURL:function(){return desknets.sp.memp.getRequestURL()},});desknets.page(desknets.sp.memp,"MempSetLabel",desknets.sp.ListPage,{init:function(c){var b=this;b.mboChk=false;b.callBase("init",c);b.$mRootElement.find(".jmemp-set").bind("vclick",function(e){e.preventDefault();var d=b.$mRootElement.find("input[type=radio]:checked").closest("li").find("h3").text();desknets.sp.memp.MempEntry.setMempLabel(d);history.back()})},getListRequestURL:function(){return desknets.sp.memp.getRequestURL()},getListRequestData:function(d,e){var b=this;var c={row:d,num:e,cmd:desknets.memp.CMD_MEMPLABEL,};return c},getAjaxId:function(){return"dnsp-memplabel"},setUpListItem:function(d,c){var b=this;this.callBase("setUpListItem",d,c);c.find("input[type=radio]").attr("id","memp-chk-labellist-"+d.id);c.find("label").attr("for","memp-chk-labellist-"+d.id);c.find("h3").html(desknets.tmpl.escapeWord(d.labelname))},openListItem:function(c,d){var b=this},});desknets.page(desknets.sp.memp,"MempTag",desknets.sp.TagPage,{setInvalidate:function(){var b=this;desknets.sp.memp.MempList.invalidate();desknets.sp.memp.MempSrch.invalidate()},getEntriesFromReferItem:function(){var b=this;var c=b.callBase("getEntriesFromReferItem");c.cmd=desknets.memp.CMD_MEMPREFSETTAG;return c},getSubmitRequestURL:function(){return desknets.sp.memp.getRequestURL()},completeTag:function(c){var b=this;desknets.sp.memp.MempRef.msTag=c},});desknets.page(desknets.sp.memp,"MempSrch",desknets.sp.SearchPage,{mobjSrch:{},initPage:function(){var b=this;b.callBase("initPage");b.$mRootElement.find(".jmemp-setsrch").bind("vclick",function(c){c.preventDefault();b._handleListClickSrch()});b.$mRootElement.find(".jmemp-add").bind("vclick",function(c){c.preventDefault();desknets.sp.memp.MempEntry.setEntries({});desknets.sp.changePage("mempentry")})},showFirstPage:function(){var b=this;b.callBase("showFirstPage");b.setSrchView()},replaceItems:function(){var b=this;b.callBase("replaceItems");b.setSrchView()},setSrchView:function(){var b=this;b.$mRootElement.find('input[name="srch_key"]').val(b.mobjSrch.srch_key).searchkeychg();b.$mRootElement.find(".jmemp-label").html(desknets.tmpl.escapeWord(b.mobjSrch.labelname));b.$mRootElement.find(".jmemp-scredate").html(b.mobjSrch.sdate);b.$mRootElement.find(".jmemp-ecredate").html(b.mobjSrch.edate);b.$mRootElement.find(".jmemp-supddate").html(b.mobjSrch.updsdate);b.$mRootElement.find(".jmemp-eupddate").html(b.mobjSrch.updedate);if(b.mobjSrch.sdate==""&&b.mobjSrch.edate==""){b.$mRootElement.find(".jmemp-credate").hide()}else{b.$mRootElement.find(".jmemp-credate").show()}if(b.mobjSrch.updsdate==""&&b.mobjSrch.updedate==""){b.$mRootElement.find(".jmemp-upddate").hide()}else{b.$mRootElement.find(".jmemp-upddate").show()}},getListRequestURL:function(){return desknets.sp.memp.getRequestURL()},getAjaxId:function(){return"dnsp-mempsrch"},getListRequestData:function(e,h){var d=this;var i=desknets.Resource.dateFormat;var c=desknets.sp.changeDateFormat_JP(i,d.mobjSrch.sdate);var f=desknets.sp.changeDateFormat_JP(i,d.mobjSrch.edate);var g=desknets.sp.changeDateFormat_JP(i,d.mobjSrch.updsdate);var b=desknets.sp.changeDateFormat_JP(i,d.mobjSrch.updedate);return{cmd:desknets.memp.CMD_MEMPSEARCH,labelid:d.mobjSrch.labelid,srch_key:d.mobjSrch.srch_key,sdate:c,edate:f,updsdate:g,updedate:b,row:e,num:h,}},setUpListItem:function(d,c){var b=this;this.callBase("setUpListItem",d,c);c.find("h3").html(desknets.tmpl.escapeWord(d.Name))},openListItem:function(c,d){var b=this;desknets.sp.memp.MempRef.setPage(d);desknets.sp.changePage("mempref")},_handleListClickSrch:function(){var b=this;desknets.sp.memp.MempSetSrch.setPage(b.mobjSrch);desknets.sp.changePage("mempsetsrch")},chkSearch:function(){var d=this;if(d.$mRootElement.find('input[name="srch_key"]').val()==""&&(d.mobjSrch.labelid==""||d.mobjSrch.labelid=="0")&&d.mobjSrch.sdate==""&&d.mobjSrch.edate==""&&d.mobjSrch.updsdate==""&&d.mobjSrch.updedate==""){var b=desknets.Resource.searchcond;var c="";var e=desknets.tmpl.replaceWordHtml(desknets.Resource.Message.com_search_required,"item",b);desknets.sp.msg.view(c,"W:"+e,false);return false}return true},getDefSrch:function(c){var b=this;b.callBase("getDefSrch",c);b.mobjSrch={labelid:"0",labelname:a("#mempsrch-page").find(".jmemp-deflabel").html(),srch_key:"",sdate:"",edate:"",updsdate:"",updedate:"",}},});desknets.page(desknets.sp.memp,"MempSetSrch",desknets.sp.RefPage,{mobjSrch:{},initPage:function(){var b=this;desknets.sp.seldate.setUpDate(b.$mRootElement);b.$mRootElement.find(".jmemp-srch").bind("vclick",function(h){h.preventDefault();if(!desknets.sp.validation.isSrchInputDateFromTo(b.$mRootElement)){return}var e=b.$mRootElement.find('select[name="labelid"] option:selected');var d={};d.labelid=e.val();d.labelname=e.text();d.srch_key=b.$mRootElement.find('input[name="srch_key"]').val();d.sdate=b.$mRootElement.find('input[name="sdate"]').val();d.edate=b.$mRootElement.find('input[name="edate"]').val();d.updsdate=b.$mRootElement.find('input[name="updsdate"]').val();d.updedate=b.$mRootElement.find('input[name="updedate"]').val();if((d.labelid==""||d.labelid=="0")&&d.srch_key==""&&d.sdate==""&&d.edate==""&&d.updsdate==""&&d.updedate==""){var c=desknets.Resource.searchcond;var f="";var g=desknets.tmpl.replaceWordHtml(desknets.Resource.Message.com_search_required,"item",c);desknets.sp.msg.view(f,"W:"+g,false)}else{a.extend(b.mobjSrch,d);desknets.sp.memp.MempSrch.setSrch(b.mobjSrch);history.back()}});b.$mRootElement.find(".jmemp-clear").bind("vclick",function(c){c.preventDefault();b.$mRootElement.find('input[name="srch_key"]').val("").searchkeychg();b.$mRootElement.find('select[name="labelid"]').val("0").selectmenu("refresh");b.$mRootElement.find('input[name="sdate"]').val("");b.$mRootElement.find('input[name="edate"]').val("");b.$mRootElement.find('input[name="updsdate"]').val("");b.$mRootElement.find('input[name="updedate"]').val("")})},showingPage:function(){var b=this},setPage:function(b){var c=this;c.callBase("setPage","");c.mobjSrch=b},getReferRequestURL:function(){return desknets.sp.memp.getRequestURL()},getReferRequestData:function(){var b=this;var c={cmd:desknets.memp.CMD_MEMPLABEL,};return c},setUpReferItem:function(g){var d=this;var b=d.$mRootElement.find('select[name="labelid"]');b.children().each(function(){var i=a(this);if(i.val()!="0"&&i.val()!="-1"){i.remove()}});var h=desknets.sp.ajax.getJsonItems(g);var e=h.length;for(var f=0;f<e;f++){var c=h[f];b.append('<option value="'+c.id+'">'+desknets.tmpl.escapeWord(c.labelname)+"</option>")}b.val(d.mobjSrch.labelid);b.selectmenu("refresh");d.$mRootElement.find('input[name="srch_key"]').val(d.mobjSrch.srch_key).searchkeychg();d.$mRootElement.find('input[name="sdate"]').val(d.mobjSrch.sdate);d.$mRootElement.find('input[name="edate"]').val(d.mobjSrch.edate);d.$mRootElement.find('input[name="updsdate"]').val(d.mobjSrch.updsdate);d.$mRootElement.find('input[name="updedate"]').val(d.mobjSrch.updedate)},});desknets.sp.memp.init()})(jQuery);