(function(a){var c=neo.core.readyNamespace("neo.webdb.dbset_column_number");if(!c){return}var b=neo.webdb.dbset_column_number={_elBtnOk:null,_getElBtnOk:function(){return this._elBtnOk||this._initElBtnOk()},_initElBtnOk:function(){return this._elBtnOk=a("#btnok")},_elSelRoundLvl:null,_getElSelRoundLvl:function(){return this._elSelRoundLvl||this._initElSelRoundLvl()},_initElSelRoundLvl:function(){return this._elSelRoundLvl=a("#id-sel-roundlevel")},constructor:function(){},initialize:function(){this._hook()},_hook:function(){elBtnOk=this._getElBtnOk();this.__bind(elBtnOk,"click","Ok");elSelRoundLvl=this._getElSelRoundLvl();this.__bind(elSelRoundLvl,"change","RoundLvl")},updateSetting:function(){this._buttonOff();var e=this;var d=a("#settblcol-form");var f={url:d.attr("action"),getSendData:function(){return d.serialize()},onsuccess:function(){var h=a("input[name='bp']").val();location.href=h},onerror:function(){e._buttonOn()}};var g=new neo.webdb.Ajax(f);g.initialize();g.sendRequest()},_buttonOff:function(){var d;d=this._getElBtnOk();d.attr("disabled","disabled").removeClass("btn")},_buttonOn:function(){var d;d=this._getElBtnOk();d.removeAttr("disabled").addClass("btn")},__closure:neo.core.getClosure,__bind:neo.jq.bindListener,onclickOk:function(d){d.preventDefault();this.updateSetting()},onchangeRoundLvl:function(e){var d=this._getElSelRoundLvl();if(d.val()=="nothing"){a("#id-roundtype").hide()}else{a("#id-roundtype").show()}}};a(document).ready(function(){b.initialize()})})(jQuery);