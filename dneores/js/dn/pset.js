/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){desknets.pset={CMD_DELETEPHOTO:"psetcmdprofilephotodelete",PAGE_GROUPLIST:"psetgroup",CMD_GROUPLIST:"psetcmdgroup",PAGE_GROUPENTRY:"psetgroupentry",CMD_GROUPENTRY:"psetcmdgroupentry",CMD_GROUPMOVE:"psetgroupmove",CMD_GROUPDELETE:"psetgroupdel",PAGE_MENULIST:"psetmenulist",CMD_MODULELIST:"psetcmdmodulelist",CMD_OPTMENULIST:"psetcmdoptmenulist",CMD_BOOKMARKLIST:"psetcmdbookmarklist",CMD_PBOOKMARKLIST:"psetcmdpbookmarklist",init:function(){var c=a("#jco-pv-funcid").val();var b=desknets.pset[c];desknets.hashobserver.init(desknets.pset);desknets.pageframe.setFuncSel(c);if(!!b){a(function(){b.init()})}if(desknets.pageframe.isCost()){a("#pset-cost-list-open").click(function(d){d.preventDefault();desknets.popUp.hide(a(this));desknets.cost.list.open()})}else{a("#co-m-h-setting-menus").find(".jpset-cost-setting-link").remove()}}};desknets.page(desknets.pset,"psetindex",desknets.PageInputBase,{mlinehtml:"",_initSet:function(){var b=this;if(!desknets.pageframe.isCost()){this.$mjPage.find("#jpset-profile-cost-data").remove()}else{b._initSetCost()}this.callBase("_initSet");desknets.htmlparts.setUpForm(this.$mjPage.find("form"));this.$mjPage.find(".co-user-edit-toggle").click(function(d){d.preventDefault();var c=a(this).toggleClass("on").attr("href");a(c).toggleClass("show")});desknets.img.fitSize(this.$mjPage.find(".co-image-box > img"),{width:80,height:80})},_getAreaTitle:function(b){return b.find(".co-setting-title").text()},_inputAjaxFormOption:function(){var b=this;var c=b.callBase("_inputAjaxFormOption");c.dataType="xml";c.success=function(){b._onEntriesSent(function(){desknets.execLocation(desknets.getUrl(desknets.MODULE_MAIN))})};return c},_initSetCost:function(){var b=this;b.mlinehtml='<li><input type="hidden" name="dep_st_name" value="{{dep_st_name}}"><input type="hidden" name="arv_st_name" value="{{arv_st_name}}"><input type="hidden" name="line_name" value="{{line_name}}"><a href="#" class="del" title="'+desknets.Resource.deselectLabel+'"></a><dl><dt>'+desknets.Resource.cost.section+'<span class="co-colon-span">:</span></dt><dd><div class="start">{{dep_st_nameview}}</div><div class="goal">{{arv_st_nameview}}</div><div class="line"></div></dd></dl></li>';if(b.$mjPage.find(".jpset-cost-nochg").val()=="1"){b._initSetCostChgOk()}else{b._initSetCostChgNg()}b.makeTransportationClass()},_initSetCostChgNg:function(){var b=this;b.$mjPage.find(".cost-btn").remove();b.$mjPage.find("#pset-profile-cost .list-pass").on("click","li",function(c){c.preventDefault()});b.$mjPage.find("#pset-profile-cost").removeClass("chg").addClass("nochg")},_initSetCostChgOk:function(){var b=this;var d=null;var c={type:"teiki",oncomplete:function(e){if(d!=null){$this.remove()}b.makeTransportationOk(e)},};b.$mjPage.find(".cost-btn").click(function(e){e.preventDefault();d=null;c.data={dep_st_name:"",arv_st_name:""};c.title=desknets.Resource.cost.title_routine_add;c.mod=false;desknets.cost.search.open(c)});b.$mjPage.find("#pset-profile-cost .list-pass").on("click","li",function(e){e.preventDefault();$this=a(this);if(a(e.target).hasClass("del")){$this.remove();b.makeTransportationClass()}else{d=$this;c.data={dep_st_name:$this.find('input[name="dep_st_name"]').val(),arv_st_name:$this.find('input[name="arv_st_name"]').val()};c.title=desknets.Resource.cost.title_routine_mod;c.mod=true;desknets.cost.search.open(c)}})},makeTransportationOk:function(b){var d=this;var c="";a.each(b,function(e,g){var f=d.mlinehtml;f=desknets.tmpl.replaceWordHtml(f,"dep_st_name",desknets.escapeValue(g.dep_st_name));f=desknets.tmpl.replaceWordHtml(f,"arv_st_name",desknets.escapeValue(g.arv_st_name));f=desknets.tmpl.replaceWordHtml(f,"line_name",desknets.escapeValue(g.line_name));f=desknets.tmpl.replaceWordHtml(f,"dep_st_nameview",desknets.tmpl.dispStr(g.dep_st_name));f=desknets.tmpl.replaceWordHtml(f,"arv_st_nameview",desknets.tmpl.dispStr(g.arv_st_name));c=c+f});d.$mjPage.find("#pset-profile-cost .list-pass").append(c);d.makeTransportationClass()},makeTransportationClass:function(){var b=this;var c=b.$mjPage.find("#pset-profile-cost .list-pass");c.find("li").removeClass("last");c.find("li:last").addClass("last");if(c.find("li").length==0){b.$mjPage.find(".cost-pr-nodata").show()}else{b.$mjPage.find(".cost-pr-nodata").hide()}},_onEntriesSent:function(d){var c=a("#pset-profile-delphotoflg");var b=this.$mjPage.find('input[name="photo"]');if(!!c.attr("checked")&&!b.val()){this._confirmToDeletePhoto(d)}else{d()}},_confirmToDeletePhoto:function(f){var c=this;var e=desknets.Resource.Message.pset_del_usericon;var b=function(){c._beginToDeletePhoto(f)};var d={cancel:f};desknets.dialog.confirm(e,b,d)},_beginToDeletePhoto:function(b){desknets.ajax.rest({url:desknets.getUrl(this._getRestModule()),data:{cmd:desknets.pset.CMD_DELETEPHOTO},complete:b})}});(function(b){desknets.page(desknets.pset,"pseticon",desknets.PageInputBase,{init:function(){var c=this;c._initDispControl();c.callBase("init")},_initDispControl:function(){var f=b("#inputfrm");var d;var c=desknets.pageframe.isShownMenu("mail");var g=desknets.pageframe.isShownMenu("mailimap");var e=desknets.pageframe.isShownMenu("addr");if(!c){d=f.find("#maillink2");if(d&&d.is(":checked")){f.find("[name=maillink]").val(["0"])}d.closest("div").remove()}if(!g){d=f.find("#maillink3");if(d&&d.is(":checked")){f.find("[name=maillink]").val(["0"])}d.closest("div").remove()}if(!e||!c||!g){f.find(".jpset-design-addrtarget").hide()}if(!c&&!g){f.find(".jpset-design-connectmail").hide()}else{if(!c){d=f.find("#connectmail1");if(d&&d.is(":checked")){f.find("[name=connectmail]").val(["0"])}d.closest("div").remove()}else{if(!g){d=f.find("#connectmail2");if(d&&d.is(":checked")){f.find("[name=connectmail]").val(["0"])}d.closest("div").remove()}}}},_getAreaTitle:function(c){return c.find(".co-setting-title").text()},_inputAjaxFormOption:function(){var c=this;var d=c.callBase("_inputAjaxFormOption");d.success=function(){desknets.execLocation(desknets.getUrl(desknets.MODULE_MAIN))};return d}})})(jQuery);desknets.page(desknets.pset,"psetlang",desknets.PageInputBase,{_getAreaTitle:function(b){return b.find(".co-setting-title").text()},_inputAjaxFormOption:function(){var b=this;var c=b.callBase("_inputAjaxFormOption");c.success=function(){desknets.execLocation(desknets.getUrl(desknets.MODULE_MAIN))};return c}});desknets.page(desknets.pset,"psetgroup",desknets.PageInputList,{_getListCmd:function(){return desknets.pset.PAGE_GROUPLIST},_getListExecCmd:function(){return desknets.pset.CMD_GROUPLIST},_getListAddCmd:function(){return desknets.pset.PAGE_GROUPENTRY},_getListModCmd:function(){return this._getListAddCmd()},_getMoveExecCmd:function(){return desknets.pset.CMD_GROUPMOVE},_getDelExecCmd:function(){return desknets.pset.CMD_GROUPDELETE},_getListEntryClass:function(){return desknets.pset[desknets.pset.PAGE_GROUPENTRY]},_getListModClass:function(){return this._getListEntryClass()}});desknets.page(desknets.pset,"psetgroupentry",desknets.PageInputBase,{_tmplItem:'<tr><td class="co-td icon"><a class="co-btn co-btn-close" href="#" title="{{L_Delete}}">x</a><input type="hidden" name="uid" value="{{id}}" /></td><td class="co-td"><span class="pset-name-text" title="{{name}}"><a href="#" class="jco-ref-dialog-link" data-refid="user{{id}}">{{name}}</a></span></td><td class="co-td co-busyo" title="{{summaryAsText}}">{{summary}}</td></tr>',_userEntry:null,changPage:function(){this._destroyUserEntry();this.callBase("changPage")},_initSet:function(){this.callBase("_initSet");var c=desknets.Resource,b=this._tmplItem;b=desknets.tmpl.replaceWordHtml(b,"L_Delete",c.deselectLabel);this._tmplItem=b;this._initUserEntry()},_getAddExecCmd:function(){return desknets.pset.CMD_GROUPENTRY},_getModExecCmd:function(){return desknets.pset.CMD_GROUPENTRY},_getDelExecCmd:function(){return desknets.pset.CMD_GROUPDELETE},_initUserEntry:function(){var d=this.$mjPage.find(".co-sel-items-entry").parent();var c=d.find("tbody");var b=desknets.chooser.getItemsFromElement(d);this._userEntry=desknets.chooser.setUpEntry(d,b,{change:function(){c.tableDnD()},template:this._tmplItem,dialogOptions:{allGroup:"readonly",unassignGroup:"readonly",choosePrivateGroup:"readonly"}});c.show().tableDnD()},_destroyUserEntry:function(){if(!!this._userEntry){this._userEntry.destroy()}},_getInitialItems:function(c){var b=[];var d=c.children('input[name="uid"]');d.each(function(){var f=a(this);var e={id:f.val(),type:"user"};e.name=f.data("name");e.description=f.data("description");e.descriptionAsText=desknets.stripTags(e.description);e.descriptionAsText=desknets.escapeValue(e.descriptionAsText);b.push(e)});d.remove();return b}});desknets.page(desknets.pset,"psetdisplaysize",desknets.pset.pseticon,{});desknets.page(desknets.pset,"psetmenu",desknets.PageInputBase,{_inputAjaxFormOption:function(){var b=this;var c=b.callBase("_inputAjaxFormOption");c.success=function(){desknets.submitform.clearDisabled(a(b._mIdPageForm));desknets.menu.reload();desknets.dialog.alert(desknets.Resource.Message.com_setting_changed)};return c}});desknets.page(desknets.pset,"psetmenubar",desknets.PageInputBase,{_inputAjaxFormOption:function(){var b=this;var c=this.callBase("_inputAjaxFormOption");c.success=function(){desknets.submitform.clearDisabled(a(b._mIdPageForm));desknets.menu.reload();desknets.dialog.alert(desknets.Resource.Message.com_setting_changed)};return c}});desknets.page(desknets.pset,"psetmenulist",desknets.menu.PageMenuListBase,{pageBookmarkList:"portalpsetbookmarklist",buttonAreas:{bookmark:a(),pbookmark:a()},area:"P",_listLine:function(b,d){var c=desknets.Resource,e;if(!!this._tmpls[this.kind]){b=this._tmpls[this.kind]}b=this.callBase("_listLine",b,d);e=Number(d.target)>0?c.menu.targetBlankLabel:c.menu.targetSelfLabel;b=desknets.tmpl.replaceWordHtml(b,"targetLabel",e);e=Number(d.off)>0?c.hideLabel:c.showLabel;b=desknets.tmpl.replaceWordHtml(b,"offLabel",e);return b},_getListCmd:function(){return desknets.pset.PAGE_MENULIST},_getListExecCmd:function(){var b={optmenu:desknets.pset.CMD_OPTMENULIST,bookmark:desknets.pset.CMD_BOOKMARKLIST,pbookmark:desknets.pset.CMD_PBOOKMARKLIST};return b[this.kind]||desknets.pset.CMD_MODULELIST}});desknets.page(desknets.pset,"psetexternalservice",desknets.PageInputBase,{_$accessToken:a(),_$buttons:a(),_initSet:function(){var b=this;this.callBase("_initSet");this._$accessToken=this.$mjPage.find(".pset-external-service-access-token");this._$buttons=this.$mjPage.find(".pset-external-service-buttons");if(!this._$accessToken.text()){this._setAccessToken("")}this._$buttons.on("click","input",function(c){c.preventDefault();b._updateAccessToken(a(this).data("cmd"))})},_getAreaTitle:function(b){return b.find(".co-setting-title").text()},_updateAccessToken:function(c){var b=this;desknets.ajax.rest({url:desknets.getUrl(b._getRestModule()),data:{cmd:c},success:function(e,d,f){b._setAccessToken(e.access_token)}})},_setAccessToken:function(c){var b=this._$buttons.find("input").eq(1);if(!!c){this._$accessToken.text(c);b.show()}else{this._$accessToken.text(this._$accessToken.data("default"));b.hide()}}});app.addInitialAction(function(){desknets.pset.init()})})(jQuery);