(function(b){var e=neo.core.readyNamespace("neo.webdb.db_credbcsv2");if(!e){return}var d="が複数選択されています。\n";var c="は１つまでしか指定できません。";var a=neo.webdb.db_credbcsv2={_elBtnNext:null,_getElBtnNext:function(){return this._elBtnNext||this._initElBtnNext()},_initElBtnNext:function(){return this._elBtnNext=b("#btnnext")},_elBtnBack:null,_getElBtnBack:function(){return this._elBtnBack||this._initElBtnBack()},_initElBtnBack:function(){return this._elBtnBack=b("#btnback")},_elBtnAdd:null,_getElBtnAdd:function(){return this._elBtnAdd||this._initElBtnAdd()},_initElBtnAdd:function(){return this._elBtnAdd=b("#btnadd")},_elBtnDel:null,_getElBtnDel:function(){return this._elBtnDel||this._initElBtnDel()},_initElBtnDel:function(){return this._elBtnDel=b("#btndel")},_elChkboxInHeader:null,_getElChkboxInHeader:function(){return this._elChkboxInHeader||this._initElChkboxInHeader()},_initElChkboxInHeader:function(){return this._elChkboxInHeader=b("#chkboxinheader")},_elSelColType:null,_getElSelColType:function(){return this._elSelColType||this._initElSelColType()},_initElSelColType:function(){return this._elSelColType=b("select.sel-coltype")},constructor:function(){},initialize:function(){this._hook();this._hookSelectUser()},_hook:function(){elBtnNext=this._getElBtnNext();this.__bind(elBtnNext,"click","Next");elBtnBack=this._getElBtnBack();this.__bind(elBtnBack,"click","Back");elBtnAdd=this._getElBtnAdd();this.__bind(elBtnAdd,"click","Add");elBtnDel=this._getElBtnDel();this.__bind(elBtnDel,"click","Del");elChkboxInHeader=this._getElChkboxInHeader();this.__bind(elChkboxInHeader,"click","InHeader");elSelColType=this._getElSelColType();this.__bind(elSelColType,"change","ColType")},_hookSelectUser:function(){var f=this._getElBtnAdd();var g={selectedUsers:this.selectedUsers(),freeVisibility:true,selectedUserVisibility:true,single:false,updateIdList:this.__closure(this.selectedUsers),callbackOnChange:this.__closure(this.onchangeUser)};neo.webdb.bindUserSelectDialog(f,g)},selectedUsers:function(){var h=[];var f=b("#tbladmins").find("option");for(var g=0;g<f.length;g++){var j=f.eq(g);if(j.val()==""){break}h[g]={id:j.val(),name:j.text()}}return h},onchangeUser:function(g){var f=b("#tbladmins");f.children().remove();if(g.length<=0){return}for(var j=0;j<g.length;j++){var k=b("<option />").attr("title",g[j].name).text(g[j].name);k.val(g[j].id);f.append(k)}var h='<option value="" disabled="disabled">&nbsp;</option>';f.append(h)},saveSetting:function(){var f=b("#credbcsv-form");var g={url:f.attr("action"),getSendData:function(){return f.serialize()},onsuccess:function(){var i=b("input[name='np']").val();location.href=i},onerror:function(){}};var h=new neo.webdb.Ajax(g);h.initialize();h.sendRequest()},__closure:neo.core.getClosure,__bind:neo.jq.bindListener,onclickNext:function(g){g.preventDefault();var f=b("#tbladmins").find("option");f.attr("selected","selected");this.saveSetting()},onclickBack:function(g){g.preventDefault();var f=b("input[name='bp']").val();location.href=f},onclickAdd:function(f){f.preventDefault()},onclickDel:function(g){g.preventDefault();var f=b("#tbladmins");f.children().remove(":selected")},onclickInHeader:function(j){var g=this._getElChkboxInHeader();if(!!g.attr("checked")==true){b("#send_inheader").val("1");var k=b("#first_row").children("td");for(var f=0;f<k.size();f++){var h="#id-colname_"+(f+1);b(h).val(k.eq(f).text())}}else{b("#send_inheader").val("0")}},onchangeColType:function(j){var h=b(arguments[arguments.length-1]);var f=h.val();var l=h.find("option:selected").text();if(f!="key"&&f!="reg_date"&&f!="reg_uid"&&f!="upd_date"&&f!="upd_uid"){return}var k=this._getElSelColType();var m=0;for(var g=0;g<k.size();g++){if(k.eq(g).val()==f){m++;if(m>1){var n=l+d+l+c;neo.webdb.alert(n);break}}}}};b(document).ready(function(){a.initialize()})})(jQuery);