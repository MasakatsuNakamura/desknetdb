(function(b){var c=neo.core.readyNamespace("neo.webdb.pg_view.DlgVisibleColsSetting");if(!c){return}var a=neo.webdb.pg_view.DlgVisibleColsSetting=new neo.core.Class({classProperties:{defaultSetting:{},dialogDefaultSetting:{buttons:null,onsubmit:null,onsuccessSubmit:null}},properties:{setting:null,_dlg:null,_getDlg:function(){return this._dlg||this._initDlg()},_initDlg:function(){var d=this.setting.elDlg;if(d.length==0){return null}var f=b.extend(a.dialogDefaultSetting,{buttons:{},onsubmit:this.__closure(this.onsubmit)});f.buttons.OK="submit";var e=neo.webdb.getDialog(d,f);e._reset=this.__closure(this._reset);return this._dlg=e},_getPage:function(){return this.setting.page},_elDlg:null,_getElDlg:function(){return this._elDlg||this._initElDlg()},_initElDlg:function(){var d=this._getDlg();if(d){return this._elDlg=d._getElSelfOrg()}return null},__constructor:function(d){this.setting=d||{}},initialize:function(){this._initSetting()},_initSetting:function(){var d=this._getDefaultSetting();this.setting=b.extend({},d,this.setting)},_getDefaultSetting:function(){return b.extend({},a.defaultSetting)},open:function(){var d=this._getDlg();d.open();if(b.browser.msie&&b.browser.version<7){this._reset()}},close:function(){var d=this._getDlg();d.close()},_reset:function(){this._updateVisibilitySetting()},_updateVisibilitySetting:function(){var d=this._getElDlg();var g=d.find("[name=visible]");var f=this._getPage();var e=f.getColVisibilityList(true);g.each(function(j,h){var l=b(h);var k=l.val();var m=!!e[k];l.attr("checked",m)})},_getElVisibility:function(){var d=this._getElDlg();var e=d.find("[name=visible]");return e},__closure:neo.core.getClosure,onsubmit:function(d){this.close();var f=this._getElVisibility();var e=this._getPage();e.setColVisibilityBy(f);e.saveColVisibility();return false},banpei:null}})})(jQuery);