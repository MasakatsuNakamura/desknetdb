(function(c){var d=neo.core.readyNamespace("neo.webdb.sysGroupImport.UpDown");if(!d){return}var a=neo.webdb.sysGroupImport;var b=neo.webdb.sysGroupImport.UpDown=new neo.core.Class({classProperties:{URL:location.pathname,CMD:"groupcsvindex"},properties:{setting:null,_ajax:null,_getAjax:function(){return this._ajax||this._initAjax()},_initAjax:function(){var e={url:b.URL,getSendData:this.__closure(this.getSendData),onsuccess:this.__closure(this.onsuccess)};var f=new neo.webdb.Ajax(e);f.initialize();return this._ajax=f},_btn:null,_getBtn:function(){return this._btn},_setBtn:function(e){return this._btn=e},_selVal:null,_getSelVal:function(){return this._selVal},_setSelVal:function(e){return this._selVal=e},__constructor:function(e){this.setting=e||{}},initialize:function(){},exec:function(f,e){this._setBtn(f);this._setSelVal(e);var g=this._getAjax();g.sendRequest()},getSendData:function(){var e={cmd:b.CMD,btn:this._getBtn(),imexfld:this._getSelVal()};return e},onsuccess:function(){location.href=location.pathname+"?pg=sysgroupimport&imexfld="+this._getSelVal()},__closure:neo.core.getClosure}})})(jQuery);