(function(b){var c=neo.core.readyNamespace("neo.webdb.db_credbtemplate3");if(!c){return}var a=neo.webdb.db_credbtemplate3={_elBtnNext:null,_getElBtnNext:function(){return this._elBtnNext||this._initElBtnNext()},_initElBtnNext:function(){return this._elBtnNext=b("#btnnext")},_elBtnBack:null,_getElBtnBack:function(){return this._elBtnBack||this._initElBtnBack()},_initElBtnBack:function(){return this._elBtnBack=b("#btnback")},_getDbTree:function(){var d=neo.webdb.getTopWindow();return d.neo.webdb.pg_frame._getDbTree()},constructor:function(){},initialize:function(){this._hook()},_hook:function(){elBtnNext=this._getElBtnNext();this.__bind(elBtnNext,"click","Next");elBtnBack=this._getElBtnBack();this.__bind(elBtnBack,"click","Back")},execRegDb:function(){var d={url:neo.webdb.getDbSettingUrl(),getSendData:function(){var f={cmd:"dbsetcredbtemplatedo"};return f},onsuccess:this.__closure(function(f){var g=neo.webdb.getDbSettingUrl({pg:"dbsetcreatedbmenu"});neo.webdb.locate(g,true)}),onerror:function(){b("#credb_tmpl-conf").show();b("#credb_tmpl-working").hide()}};var e=new neo.webdb.Ajax(d);e.initialize();e.sendRequest();b("#credb_tmpl-conf").hide();b("#credb_tmpl-working").show()},__closure:neo.core.getClosure,__bind:neo.jq.bindListener,onclickNext:function(d){d.preventDefault();this.execRegDb()},onclickBack:function(e){e.preventDefault();var d=b("input[name='bp']").val();location.href=d}};b(document).ready(function(){a.initialize()})})(jQuery);