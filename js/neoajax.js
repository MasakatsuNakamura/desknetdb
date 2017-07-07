(function(){if(!neo.core.readyNamespace("neo.Ajax")){return}neo.Ajax=function(){neo.Ajax.prototype.__constructor.apply(this,arguments)};neo.Ajax.prototype={options:{},_getElConMark:function(){return neo.Ajax._elConMark},_setElConMark:function(a){neo.Ajax._elConMark=a},__constructor:function(a){this.options=this._getOptions(a);this._initialize()},_getOptions:function(b){var a=this._getCompoundedOptions(b);this._regulateOptions(a);return a},_getCompoundedOptions:function(b){var a={};$.extend(a,neo.Ajax.defaultOptions);if(neo.core.exists(b)){$.extend(a,b)}return a},_regulateOptions:function(a){return a},_initialize:function(){this._initElements()},_initElements:function(){this._initElConMark()},_initElConMark:function(){var a;if(this.options.elConMark){a=this.options.elConMark}else{if(this.options.elConMark===null){a=null}else{a=$(neo.Ajax.SEL_CON_MARK);if(a.length<1){a=$('<span id="neo-ajax-con-mark">connecting...</span>').css({display:"none",position:"fixed",top:"0px",right:"0px",padding:"1px 5px",backgroundColor:"#900",color:"#f99"}).appendTo("body");if($.browser.msie&&$.browser.version<7){a.css({position:"absolute"})}}}}this._setElConMark(a)},sendRequest:function(){if(!neo.Ajax.moveConfIsBinded){neo.Ajax.moveDespiteConnecting.bindActions()}var a=this._getAjaxOptions();try{$.ajax(a)}catch(b){}},_getAjaxOptions:function(){var b=$.extend({},this.options);if(neo.core.exists(this.options,"getSendData","function")){var c=this.options.getSendData(this);if(typeof c!="string"){c=$.extend({},c)}b.data=c;if(neo.core.exists(b.data,"url","string")){b.url=b.data.url;delete b.data.url}}if(!b.url){b.url=this.options.url}if(!b.type){b.type=this._getHttpType(b.data)}if(this.options.cache===true){b.cache=true}else{b.cache=false}var a=this;b.beforeSend=function(){return a.beforeAjaxSend.apply(a,neo.Ajax.getProxyArguments(this,arguments))};b.success=function(){return a.onAjaxSuccess.apply(a,neo.Ajax.getProxyArguments(this,arguments))};b.error=function(){return a.onAjaxError.apply(a,neo.Ajax.getProxyArguments(this,arguments))};b.complete=function(){return a.onAjaxComplete.apply(a,neo.Ajax.getProxyArguments(this,arguments))};return b},_getHttpType:function(c){var a=1024;var b="";if(neo.core.exists(c)){if(neo.core.isString(c)){b=c}else{b=$.param(c)}}if(b.length>a){return"POST"}else{return"GET"}},beforeAjaxSend:function(a,b){this._showConMark();if(neo.core.exists(this.options,"beforeAjaxSend","function")){return this.options.beforeAjaxSend.apply(arguments[0],neo.Ajax.getRealArguments(arguments))}},onAjaxSuccess:function(c,b){if(this.options.useDefaultXml&&(c.dataType=="xml"||c.dataType==undefined)){var d=$(b);var a=d.find("result");if(!this._isStatusOk(a)){this._showError(c,{elResult:a});return}}if(neo.core.exists(this.options,"onAjaxSuccess","function")){this.options.onAjaxSuccess.apply(arguments[0],neo.Ajax.getRealArguments(arguments))}},_isStatusOk:function(a){if(!neo.core.exists(a,"find","function")){return false}var b=a.find("status");if(!neo.core.exists(b,"text","function")||b.text()!="ok"){return false}return true},onAjaxError:function(a,c,b){if(neo.core.exists(this.options,"onAjaxError","function")){this.options.onAjaxError.apply(arguments[0],neo.Ajax.getRealArguments(arguments))}this._showError(a,{xhr:c,statusText:b})},onAjaxComplete:function(a,c,b){this._hideConMark();if(neo.core.exists(this.options,"onAjaxComplete","function")){this.options.onAjaxComplete.apply(arguments[0],neo.Ajax.getRealArguments(arguments))}},_showConMark:function(){var a=this._getElConMark();if(!a){return}a.show();neo.Ajax._conCnt++},_hideConMark:function(){var a=this._getElConMark();if(!a){return}neo.Ajax._conCnt--;if(!neo.Ajax.isConnecting()){a.hide()}},_showError:function(b,d){var c=this._getErrorMessage(d);if(neo.core.exists(this.options,"beforeShowError","function")){var a=this.options.beforeShowError.apply(arguments[0],[d.xhr,d.statusText,c]);if(a===false){return}}neo.Ajax.showErrorMessage(c,this.options)},_getErrorMessage:function(g){var f="";if(neo.core.exists(g,"elResult.0")){var e="";var a=g.elResult.find("errorno");if(neo.core.exists(a,"text","function")){e=a.text()}var d="";var c=g.elResult.find("errormessage");if(neo.core.exists(c,"text","function")){d=c.text()}if(!isNaN(e)&&neo.core.isString(d)&&d!=""){f=d;if(neo.core.isString(e)&&e!=""){f+="["+e+"]"}return f}else{return neo.Ajax.ajaxMessages.parsererror}}if(neo.core.exists(g,"statusText")){switch(g.statusText){case"error":var b=neo.core.get(g,"xhr.status");return this._getMsgHttp(b);case"timeout":break;case"parsererror":return neo.Ajax.ajaxMessages.parsererror}}return neo.Ajax.ajaxMessages.defaultMessage},_getMsgHttp:function(b){var a=null;if(neo.core.exists(b)){a=neo.Ajax.ajaxMessages.errHttp[b]}if(a){return a}else{return neo.Ajax.ajaxMessages.defaultMessage}},onEvent:function(d){try{var a=this.element[0].tagName.toLowerCase();var b=this.element.attr("type").toLowerCase();if(a=="button"||(a=="input"&&(b=="button"||b=="submit"||b=="reset"||b=="image"))){d.preventDefault()}}catch(c){}this.sendRequest()}};neo.Ajax.SEL_CON_MARK="#neo-ajax-con-mark";neo.Ajax.CLS_NO_CONFIRM="neo-ajax-no-confirm";neo.Ajax._elConMark=null;neo.Ajax._conCnt=0;neo.Ajax.moveConfIsBinded=false;neo.Ajax.initDialog=function(){neo.Ajax.elDialog=$('<div id="'+neo.Ajax.ID_DIALOG_MSG+'" />');var a=neo.Ajax._getDialogOptions();neo.Ajax.elDialog.dialog(a);return neo.Ajax.elDialog};neo.Ajax._getDialogOptions=function(){var b=neo.Ajax.defaultDialogOptions;if(!neo.core.exists(b.title)||b.title==""){b.title=neo.Ajax.ajaxMessages.dialogTitle}var a=neo.Ajax.ajaxMessages.dialogCloseButtonCaption;b.buttons[a]=function(){$(this).dialog("close")};return b};neo.Ajax.setConfirm=function(b,a){if(a){b.removeClass(neo.Ajax.CLS_NO_CONFIRM)}else{b.addClass(neo.Ajax.CLS_NO_CONFIRM)}};neo.Ajax.bind=function(b,a){if(!neo.core.exists(a,"eventType")){a.eventType=neo.Ajax._getAutoEventType(b)}var c=new neo.Ajax(a);c.element=b;b.bind(a.eventType,function(){c.onEvent.apply(c,arguments)})};neo.Ajax._getAutoEventType=function(b){try{var a=b[0].tagName.toLowerCase();var c=b.attr("type").toLowerCase();if((a=="input"&&c=="text")||a=="select"||a=="textarea"){return"change"}}catch(d){}return"click"};neo.Ajax.getProxyArguments=function(b,a){var c=[b];for(var d=0;d<a.length;d++){c.push(a[d])}return c};neo.Ajax.getRealArguments=function(a){var b=[];for(var c=1;c<a.length;c++){b.push(a[c])}return b};neo.Ajax.showErrorMessage=function(c,a){var b=neo.Ajax.elDialog;if(!b){b=neo.Ajax.initDialog()}if(b.dialog("isOpen")){b.find("ul").append("<li>"+c+"</li>")}else{b.empty();b.append(neo.Ajax.ajaxMessages.errBase);b.unbind("dialogclose");if(typeof a.afterShowError=="function"){b.bind("dialogclose",a.afterShowError)}b.append("<ul><li>"+c+"</li></ul>");b.dialog("open")}};neo.Ajax.isConnecting=function(){if(neo.Ajax._conCnt>0){return true}else{return false}};neo.Ajax.ID_DIALOG_MSG="neo-ajax-dialogcontent";neo.Ajax.elDialog=null;neo.Ajax.defaultOptions={url:undefined,useDefaultXml:true,getSendData:null,eventType:null};neo.Ajax.defaultDialogOptions={autoOpen:false,draggable:false,resizable:false,modal:true,height:300,buttons:{}};neo.Ajax.moveDespiteConnecting={elTarget:null,getElDlgConfirmMove:function(){return this.elDlgConfirmMove||this.initElDlgConfirmMove()},initElDlgConfirmMove:function(){var a=this._getElDialogContent();var b=this._getDialogOptions();return this.elDlgConfirmMove=a.dialog(b)},elDlgConfirmMove:null,_getElDialogContent:function(){var a=$('<div class="dlg-ajax-confirm-move" />');var b=neo.Ajax.ajaxMessages.msgConfirmMove;a.text(b);return a},_getDialogOptions:function(){var b=neo.Ajax.moveDespiteConnecting;var a={autoOpen:false,draggable:false,modal:true,resizable:false,title:neo.Ajax.ajaxMessages.confirm,width:300,buttons:{}};a.buttons[neo.Ajax.ajaxMessages.cancel]=b.onCancel;a.buttons[neo.Ajax.ajaxMessages.OK]=b.onOk;return a},bindActions:function(d){var c=neo.core.get(d,"0.tagName","").toLowerCase();if(c=="a"){this._bindActionsToLinks(d);return}else{if(c=="form"){this._bindActionsToForms(d);return}}var b=$("a",d);this._bindActionsToLinks(b);var a=$("form",d);this._bindActionsToForms(a);neo.Ajax.moveConfIsBinded=true},_bindActionsToLinks:function(a){for(var c=0;c<a.length;c++){var b=a.eq(c);if(this._isTargetLink(b)){b.click(neo.Ajax.moveDespiteConnecting.onMove)}}},_isTargetLink:function(a){var g=a.attr("href");if(!g){return false}if(g.indexOf("javascript:")==0){return false}if(g.indexOf("#")<0){return true}var e=function(f){var j=f.indexOf("#");if(j>=0){f=f.substr(0,j)}return f};var d=e(g);if(d==""){return false}var c=e(location.href);if(d==c){return false}var b=c.substr(location.protocol.length+2,c.length);var i=b.substr(b.indexOf("/"),b.length);if(d==i){return false}var h=c.substr(c.lastIndexOf("/")+1,c.length);if(d==h){return false}return true},_bindActionsToForms:function(a){a.submit(neo.Ajax.moveDespiteConnecting.onMove)},onMove:function(c){var b=neo.Ajax.moveDespiteConnecting;b.elTarget=$(this);if(neo.Ajax.isConnecting()&&!b.elTarget.hasClass(neo.Ajax.CLS_NO_CONFIRM)){c.preventDefault();var a=b.getElDlgConfirmMove();a.dialog("open")}},onOk:function(){var b=neo.Ajax.moveDespiteConnecting;neo.Ajax.prototype.onAjaxError=function(){};var c=b.elTarget;if(c.get(0).tagName.toLowerCase()=="form"){neo.Ajax.setConfirm(c,false);c.submit();var a=b.getElDlgConfirmMove();a.dialog("close")}else{location.href=c.attr("href")}},onCancel:function(){var a=neo.Ajax.moveDespiteConnecting;a.elTarget=null;$(this).dialog("close")}}})();