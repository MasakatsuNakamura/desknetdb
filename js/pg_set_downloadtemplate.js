(function(b){var c=neo.core.readyNamespace("neo.webdb.pg_set_downloadtemplate");if(!c){return}var a=neo.webdb.pg_set_downloadtemplate={PG_DOWNLOAD_TEMPLATE:"dbsetdownloadtemplate",_elBtnAdd:null,_getElBtnAdd:function(){return this._elBtnAdd||this._initElBtnAdd()},_initElBtnAdd:function(){return this._elBtnAdd=b("#dltmpl-add")},_elBtnDel:null,_getElBtnDel:function(){return this._elBtnDel||this._initElBtnDel()},_initElBtnDel:function(){return this._elBtnDel=b(".dltmpl-del")},_elSelTbls:null,_getElSelTbls:function(){return this._elSelTbls||this._initElSelTbls()},_initElSelTbls:function(){return this._elSelTbls=b("#dltmpl-seltbls")},_elHdnTids:null,_getElHdnTids:function(){return this._elHdnTids||this._initElHdnTids()},_initElHdnTids:function(){return this._elHdnTids=b('input[name="tid"]')},constructor:function(){},initialize:function(){this._hook()},_hook:function(){var d;d=this._getElBtnAdd();this.__bind(d,"click","Add");d=this._getElBtnDel();this.__bind(d,"click","Del")},_addDb:function(){var j=this._getElSelTbls().val();if(j==""){return}var d=this._getElHdnTids();var h="";for(var f=0;f<d.length;f++){var g=d.eq(f);if(!g){continue}h+="&tid="+g.val()}h+="&tid="+j;var e=neo.webdb.getDbSettingUrl()+"?pg="+neo.webdb.pg_set_downloadtemplate.PG_DOWNLOAD_TEMPLATE+h;location.href=e},_delDb:function(j){var k=j.attr("data-id");var d=this._getElHdnTids();var h="";for(var f=0;f<d.length;f++){var g=d.eq(f);if(!g){continue}if(k!=g.val()){h+="&tid="+g.val()}}var e=neo.webdb.getDbSettingUrl()+"?pg="+neo.webdb.pg_set_downloadtemplate.PG_DOWNLOAD_TEMPLATE+h;location.href=e},__closure:neo.core.getClosure,__bind:neo.jq.bindListener,onclickAdd:function(d){d.preventDefault();this._addDb()},onclickDel:function(d){d.preventDefault();var e=b(arguments[arguments.length-1]);this._delDb(e)}};b(document).ready(function(){a.initialize()})})(jQuery);