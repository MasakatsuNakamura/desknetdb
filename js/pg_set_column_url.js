(function(b){var c=neo.core.readyNamespace("neo.webdb.dbset_column_url");if(!c){return}var a=neo.webdb.dbset_column_url={_elBtnOk:null,_getElBtnOk:function(){return this._elBtnOk||this._initElBtnOk()},_initElBtnOk:function(){return this._elBtnOk=b("#btnok")},constructor:function(){},initialize:function(){this._hook()},_hook:function(){elBtnOk=this._getElBtnOk();this.__bind(elBtnOk,"click","Ok")},updateSetting:function(){this._buttonOff();var e=this;var d=b("#form");var f={url:d.attr("action"),getSendData:function(){var j=d.serialize();var k=b(":checkbox:enabled:not(:checked)");for(var h=0;h<k.size();h++){j+="&"+k.eq(h).attr("name")+"="}var l=b(":radio:enabled:not(:checked)");for(var h=0;h<l.size();h++){j+="&"+l.eq(h).attr("name")+"="}return j},onsuccess:function(){var h=b("input[name='bp']").val();location.href=h},onerror:function(){e._buttonOn()}};var g=new neo.webdb.Ajax(f);g.initialize();g.sendRequest()},_buttonOff:function(){var d;d=this._getElBtnOk();d.attr("disabled","disabled").removeClass("btn")},_buttonOn:function(){var d;d=this._getElBtnOk();d.removeAttr("disabled").addClass("btn")},__closure:neo.core.getClosure,__bind:neo.jq.bindListener,onclickOk:function(d){d.preventDefault();this.updateSetting()}};b(document).ready(function(){a.initialize()})})(jQuery);