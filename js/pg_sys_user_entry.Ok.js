(function(b){var d=neo.core.readyNamespace("neo.webdb.pg_sys_user_entry.Ok");if(!d){return}var c=neo.webdb.pg_sys_user_entry;var a=neo.webdb.pg_sys_user_entry.Ok=new neo.core.Class({classProperties:{URL:location.pathname},properties:{setting:null,_ajax:null,_getAjax:function(){return this._ajax||this._initAjax()},_initAjax:function(){var e={url:a.URL,getSendData:this.__closure(this.getSendData),onsuccess:this.__closure(this.onsuccess)};var f=new neo.webdb.Ajax(e);f.initialize();return this._ajax=f},_form:null,_getForm:function(){return this._form},_setForm:function(e){return this._form=e},__constructor:function(e){this.setting=e||{}},initialize:function(){},exec:function(e){this._setForm(e);var f=this._getAjax();f.sendRequest()},getSendData:function(){return this._form.serialize()},onsuccess:function(){location.href=location.pathname+"?pg=sysuserlist"},__closure:neo.core.getClosure}})})(jQuery);