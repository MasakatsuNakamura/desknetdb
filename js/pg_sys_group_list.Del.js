(function(b){var d=neo.core.readyNamespace("neo.webdb.sysGroupList.Del");if(!d){return}var a=neo.webdb.sysGroupList;var c=neo.webdb.sysGroupList.Del=new neo.core.Class({classProperties:{URL:location.pathname,CMD:"delgroup"},properties:{setting:null,_ajax:null,_getAjax:function(){return this._ajax||this._initAjax()},_initAjax:function(){var e={url:c.URL,getSendData:this.__closure(this.getSendData),onsuccess:this.__closure(this.onsuccess)};var f=new neo.webdb.Ajax(e);f.initialize();return this._ajax=f},_ids:null,_getIds:function(){return this._ids},_setIds:function(e){return this._ids=e},_selectarea:null,_getSelectarea:function(){return this._selectarea},_setSelectarea:function(e){return this._selectarea=e},__constructor:function(e){this.setting=e||{}},initialize:function(){},exec:function(e,f){if(f=="1"){if(!e||e.length<1){return}}if(f!="1"&&f!="2"){return}this._setIds(e);this._setSelectarea(f);var g=this._getAjax();g.sendRequest()},getSendData:function(){var e={cmd:c.CMD,chkgid:this._getIds(),selectarea:this._getSelectarea()};return e},onsuccess:function(){location.href=location.href},__closure:neo.core.getClosure}})})(jQuery);