(function(b){var c=neo.core.readyNamespace("neo.webdb.pg_editLayout.Form");if(!c){return}var a=neo.webdb.pg_editLayout.Form=new neo.core.Class({classProperties:{defaultSetting:{}},properties:{setting:null,_needToMoveBack:null,_isNeedToMoveBack:function(){return this._needToMoveBack},_setNeedToMoveBack:function(d){return this._needToMoveBack=d},_connecting:null,_isConnecting:function(){return this._connecting},_setConnecting:function(d){return this._connecting=d},_ajaxEditLayout:null,_getAjaxEditLayout:function(){return this._ajaxEditLayout||this._initAjaxEditLayout()},_initAjaxEditLayout:function(){var d={url:neo.webdb.getDbSettingUrl(),getSendData:this.__closure(function(){var f=this._getData();f.cmd="dbsetdetaillayoutset";return f}),onbeforesend:this.__closure(function(){this._setConnecting(true);var f=this._getPage();f.buttonOff()}),onsuccess:this.__closure(this.onsuccessEditLayout),onerror:this.__closure(function(){var f=this._getPage();f.buttonOn()}),onfinish:this.__closure(function(){this._setConnecting(false)})};var e=new neo.webdb.Ajax(d);e.initialize();return this._ajaxEditLayout=e},_getGeneralSetting:function(){return this.setting.general},_getPage:function(){return this.setting.page},__constructor:function(d){this.setting=d||{}},initialize:function(){this._initSetting()},_initSetting:function(){var d=this._getDefaultSetting();this.setting=b.extend({},d,this.setting)},_getDefaultSetting:function(){return b.extend({},a.defaultSetting)},finish:function(){this._setNeedToMoveBack(true);this._submit()},apply:function(){this._setNeedToMoveBack(false);this._submit()},_submit:function(){if(!this._isConnecting()){var d=this._getAjaxEditLayout();d.sendRequest();return true}else{return false}},_getData:function(){var d={};this._getGeneralData(d);this._getFormatData(d);this._getLayoutData(d);for(var e in d){if(d[e]===undefined){delete d[e]}}return d},_getGeneralData:function(e){var d=this._getGeneralSetting();e.tid=d.tid;e.vid=d.vid;e.l_id=d.lid;return e},_getLayoutData:function(e){var d=this._getPage();return d.getLayoutData(e)},_getFormatData:function(e){var d=this._getPage();return d.getFormatData(e)},_moveBack:function(){var d=this._getGeneralSetting();var f=d.tid;var e=neo.webdb.getDbSettingUrl({pg:"dbsetmenu",tid:f});location.href=e},__closure:neo.core.getClosure,onsuccessEditLayout:function(d,e){if(this._isNeedToMoveBack()){this._moveBack()}else{var f="設定内容を保存しました。";neo.webdb.info(f);var g=this._getPage();g.buttonOn()}}}})})(jQuery);