(function(b){var c=neo.core.readyNamespace("neo.webdb.pg_set_dbacc");if(!c){return}var a=neo.webdb.pg_set_dbacc={_permissionSetting:null,_getPermissionSetting:function(){return this._permissionSetting||this._initPermissionSetting()},_initPermissionSetting:function(){var e={elMultiEditor:this._getElPermissionMultiSettingEditor(),elTable:this._getElSettingTable(),elToggleMultiEditorStatus:this._getElTogglePermissionMultiEditorStatus().find(".permission-status"),page:this,tableId:this._getSetting("tableId")};var d=new a.PermissionSetting(e);return this._permissionSetting=d},_getSetting:function(d){var e=window.neo_webdb_pg_permissionSetting_setting;if(d){return e[d]}else{return e}},_elRemoveSetting:null,_getElRemoveSetting:function(){return this._elRemoveSetting||this._initElRemoveSetting()},_initElRemoveSetting:function(){return this._elRemoveSetting=b("#permission-remove")},_elTogglePermissionMultiSettingEditor:null,_getElTogglePermissionMultiSettingEditor:function(){return this._elTogglePermissionMultiSettingEditor||this._initElTogglePermissionMultiSettingEditor()},_initElTogglePermissionMultiSettingEditor:function(){return this._elTogglePermissionMultiSettingEditor=b("#permission-multi_editor-toggle")},_elPermissionMultiSettingEditor:null,_getElPermissionMultiSettingEditor:function(){return this._elPermissionMultiSettingEditor||this._initElPermissionMultiSettingEditor()},_initElPermissionMultiSettingEditor:function(){return this._elPermissionMultiSettingEditor=b("#permission-multi_editor")},_elTogglePermissionMultiEditorStatus:null,_getElTogglePermissionMultiEditorStatus:function(){return this._elTogglePermissionMultiEditorStatus||this._initElTogglePermissionMultiEditorStatus()},_initElTogglePermissionMultiEditorStatus:function(){return this._elTogglePermissionMultiEditorStatus=b(".permission-multi_editor-toggle-cell")},_elDecidePermissionMultiSettingEditor:null,_getElDecidePermissionMultiSettingEditor:function(){return this._elDecidePermissionMultiSettingEditor||this._initElDecidePermissionMultiSettingEditor()},_initElDecidePermissionMultiSettingEditor:function(){return this._elDecidePermissionMultiSettingEditor=b("#permission-multi_editor-ok")},_elSettingTable:null,_getElSettingTable:function(){return this._initElSettingTable()},_initElSettingTable:function(){return this._elSettingTable=b("#permission-table")},_elToggleStatus:null,_getElToggleStatus:function(){return this._initElToggleStatus()},_initElToggleStatus:function(){return this._elToggleStatus=b("td.permission-toggle-cell")},_tmTmRedrawList:null,_getTmRedrawList:function(){return this._tmTmRedrawList},_setTmRedrawList:function(d){return this._tmTmRedrawList=d},_boolScrollReset:false,_getScrollReset:function(){return this._boolScrollReset},_setScrollReset:function(d){return this._boolScrollReset=d},_boolScrollReset:false,_getScrollReset:function(){return this._boolScrollReset},_setScrollReset:function(d){return this._boolScrollReset=d},elItem:null,boolFirst:true,_elBody:null,_getElBody:function(){return this._elBody||this._initElBody()},_initElBody:function(){return this._elBody=b("#pg_set_dbacc")},constructor:function(){},initialize:function(){this._hook();var d=this.getElTreeOrg();this.elItem=d;this.updateToggleContent("");this._setScrollReset(true);this.getListHtml("all_group","0","1")},_hook:function(){var e;var d=this._getPermissionSetting();e=this._getElRemoveSetting();this.__bind(e,"click","RemoveSetting");e=this._getElTogglePermissionMultiSettingEditor();this.__bind(e,"click","TogglePermissionMultiEditor");e=this._getElTogglePermissionMultiEditorStatus();this.__bind(e,"click","TogglePermissionMultiEditorStatus");e=this._getElDecidePermissionMultiSettingEditor();this.__bind(e,"click","DecidePermissionMultiEditor")},removeSetting:function(){var d=this._getPermissionSetting();d.removeSetting()},togglePermissionMultiEditor:function(){var d=this._getPermissionSetting();d.togglePermissionMultiEditor()},togglePermissionMultiEditorStatus:function(e){var d=this._getPermissionSetting();d.toggleMultiEditorStatus(e)},decidePermissionMultiEditor:function(){var d=this._getPermissionSetting();d.decidePermissionMultiEditor()},toggleStatus:function(e){var d=this._getPermissionSetting();d.toggleStatus(e)},setRefreshListTimer:function(){var d=this._getTmRedrawList();if(d){clearTimeout(d)}var g=1000;var f=this;var e=setTimeout(function(){f.refreshList()},g);this._setTmRedrawList(e)},refreshList:function(){var d=b('input[name="gid"]').val();var e=b('input[name="cur_row"]').val();this._setScrollReset(false);this.getListHtml(d,e)},refreshListGroup:function(e){var d=e.closest(".permission-row");var f=d.attr("data-id");var g="0";if(f=="-1"){f="all"}this._setScrollReset(true);this.getListHtml(f,g)},refreshListPage:function(d){var e=b('input[name="gid"]').val();var f=d.attr("data-row");this._setScrollReset(true);this.getListHtml(e,f)},getListHtml:function(e,f){this.changeCursorWaiting();var d=this;setTimeout(function(){var g=neo.webdb.getDbSettingUrl();var h={cmd:"dbsetdbaccinner",tid:d._getSetting("tableId"),gid:e,row:f,__time:(new Date()).getTime()};b.ajax({async:false,url:g,data:h,cache:false,success:d.__closure(d.onSuccessListHtml)})},1)},onSuccessListHtml:function(d,e){this._redraw(d);if(this._getScrollReset()){b("#right_pain").scrollTop(0)}this._hooklist();this.changeCursorNormal()},_redraw:function(e){var d=b("#permission-list-area");b("#permission-list").remove();d.html(e)},_hooklist:function(){var e;var d=this._initPermissionSetting();e=this._getElSettingTable();e.webdbSelectableTable();e=this._getElToggleStatus();this.__bind(e,"click","ToggleStatus");e=b(".permission-pagelink");this.__bind(e,"click","PageLink")},changeCursorWaiting:function(){this._getElBody().addClass("cursor-wait")},changeCursorNormal:function(){this._getElBody().removeClass("cursor-wait")},getElOrgBlock:function(){return b("#selgrp-leftpane-inner_block")},getElTreeOrg:function(){return b("#select_groups-org_tree-root")},getElFreeItem:function(){var e=this.getElTreeOrg();var d=e.find("[data-id=free]");return d},updateLastItem:function(){var g="last";var f=this.getElTreeOrg();var d=f.find("> .selectorg-list > ."+g);d.removeClass(g);var e=this.getElFreeItem();e.addClass(g)},onOrgLabelClick:function(g){g.preventDefault();a._setScrollReset(true);var f=a.getElTreeOrg().find("a");var d=b(this);f.removeClass("select_groups-focused");d.addClass("select_groups-focused");var e=d.parent().attr("data-id");var h="0";a.getListHtml(e,h)},onClickTvToggle:function(f){var e=b(f);var d=b(f).find("ul:first");if(d.length>0&&d.hasClass("selectorg-list-dmy")==true&&e.hasClass("collapsable")==true){a.elItem=e;var g=e.attr("data-id");a.updateToggleContent(g);return}},updateToggleContent:function(e){var d=this.getObjAjaxToggleUpdate(e);d.sendRequest()},getObjAjaxToggleUpdate:function(e){var d=this.getOptionsAjaxToggleUpdate(e);this._objAjax=new neo.webdb.Ajax(d);this._objAjax.initialize();return this._objAjax},getOptionsAjaxToggleUpdate:function(e){var d={url:neo.webdb.getMainUrl(),getSendData:function(){var f={cmd:"getselectgroups",gid:e};return f},onsuccess:this.__closure(this.onAjaxToggleUpdateSuccess)};return d},onAjaxToggleUpdateSuccess:function(g){var e=g.result.groupinfo||[];var f=this._buildElOrgList(e);this.updateToggleLow(f);this.updateLastItem();if(this.boolFirst){this.boolFirst=false;var d=this.getElTreeOrg().find('li[data-id="all_group"] > a');d.addClass("select_groups-focused")}},_buildElOrgList:function(l){var m=this.getElTreeOrg();if(this.elItem[0]==m[0]){var n={haschildren:0,id:"all_group",name:"すべて （グループ一覧）",constid:""};l.unshift(n);var g={haschildren:0,id:"all_user",name:"すべて （ユーザー一覧）",constid:""};l.unshift(g);var e={haschildren:0,id:"free",name:"グループに属さない",constid:""};l.push(e)}if(!l){return null}var r=b("#select_groups-org_tree-node-prototype");var p=b("#select_groups-org_tree-node-dummy-prototype");var k=r.clone().removeAttr("id");var f=k.children();f.remove();for(var h=0;h<l.length;h++){var q=l[h];if(!q){continue}var o=f.clone().removeAttr("id");o.attr("data-id",q.id);o.attr("const-id",q.constid);var j=o.find("a");j.attr("title",q.name).text(q.name);if(q.haschildren){var d=p.clone().removeAttr("id");o.append(d)}k.append(o)}return k},updateToggleLow:function(n){if(this.elItem!=null){var o=this.elItem.find("ul.selectorg-list-dmy");o.remove();var d=b(n);this.elItem.append(d);var l=this.getElOrgBlock();var h=l.scrollTop();var k=l.scrollLeft();var g=this.getElTreeOrg().parent();g.find("div.hitarea").remove();g.find("li.expandable").removeClass("expandable");g.find("li.collapsable").removeClass("collapsable");g.find("li.lastExpandable").removeClass("lastExpandable");g.find("li.lastCollapsable").removeClass("lastCollapsable");g.treeview({collapsed:true,unique:true,toggle:function(){a.onClickTvToggle(this)}});var r=this.elItem;while(-1){r.find("div:first").click();r.removeClass("expandable").addClass("collapsable");r.find("div:first").removeClass("expandable-hitarea").addClass("collapsable-hitarea");var f=r.attr("data-id");var e=r.parent().children();var j=false;for(i=0;i<e.length;i++){if(b(e[i]).attr("data-id")==f){j=true}}if(j==true&&e.length==i+1){r.removeClass("lastExpandable").addClass("lastCollapsable");r.find("div:first").removeClass("lastExpandable-hitarea").addClass("lastCollapsable-hitarea")}var p=r.parent().parent();if(p.hasClass("expandable")==true){r=p}else{break}}var q=b("#left_pain");var m=q.find("div.selectorg-with-path a.selectorg-label").click(a.onOrgLabelClick);l.scrollTop(h);l.scrollLeft(k)}},__closure:neo.core.getClosure,__bind:neo.jq.bindListener,onclickRemoveSetting:function(d){this.removeSetting()},onclickTogglePermissionMultiEditor:function(d){this.changeCursorNormal();this.togglePermissionMultiEditor()},onclickTogglePermissionMultiEditorStatus:function(d){var f=b(arguments[arguments.length-1]);var e=f.find(".permission-status");this.togglePermissionMultiEditorStatus(e)},onclickDecidePermissionMultiEditor:function(d){this.decidePermissionMultiEditor()},onclickToggleStatus:function(d){var f=b(arguments[arguments.length-1]);var e=f.find(".permission-status");this.toggleStatus(e)},onclickPageLink:function(e){var d=b(arguments[arguments.length-1]);this.refreshListPage(d)}};b(document).ready(function(){a.initialize()})})(jQuery);