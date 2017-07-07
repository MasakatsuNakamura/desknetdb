(function(b){var c=neo.core.readyNamespace("neo.webdb.BatchController");if(!c){return}var a=neo.webdb.BatchController=new neo.core.Class({classProperties:{STATUS_START:"start",STATUS_OK:"ok",STATUS_NG:"ng",STATUS_BROKEN:"broken",STATUS_WORKING:"working",defaultSetting:{interval:1000}},properties:{setting:null,_working:null,isWorking:function(){return this._working},_setWorking:function(d){return this._working=d},_key:null,_getKey:function(){return this._key},_setKey:function(d){return this._key=d},_ajaxKick:null,_getAjaxKick:function(){return this._ajaxKick||this._initAjaxKick()},_initAjaxKick:function(){var d={getSendData:this.__closure(function(){var f={url:this._getUrlKick()};return f}),onsuccess:this.__closure(this.onsuccessKick),onerror:this.__closure(this.onerrorKick)};var e=new neo.webdb.Ajax(d);e.initialize();return this._ajaxKick=e},_setAjaxKick:function(d){return this._ajaxKick=d},_urlKick:null,_getUrlKick:function(){return this._urlKick},_setUrlKick:function(d){return this._urlKick=d},_ajaxWatch:null,_getAjaxWatch:function(){return this._ajaxWatch||this._initAjaxWatch()},_initAjaxWatch:function(){var d={getSendData:this.__closure(function(){var f={key:this._getKey(),url:this._getUrlWatch()};return f}),onsuccess:this.__closure(this.onsuccessWatch),onerror:this.__closure(this.onerrorWatch)};var e=new neo.webdb.Ajax(d);e.initialize();return this._ajaxWatch=e},_setAjaxWatch:function(d){return this._ajaxWatch=d},_urlWatch:null,_getUrlWatch:function(){return this._urlWatch},_setUrlWatch:function(d){return this._urlWatch=d},_tmWatch:null,_getTmWatch:function(){return this._tmWatch},_setTmWatch:function(d){return this._tmWatch=d},_getInterval:function(){return this.setting.interval},__constructor:function(d){this._working=false;this.setting=d||{}},initialize:function(){this._initSetting()},_initSetting:function(){var d=this._getDefaultSetting();this.setting=b.extend({},d,this.setting);this._initAjaxSetting(this.setting)},_getDefaultSetting:function(){return b.extend({},a.defaultSetting)},_initAjaxSetting:function(d){if(typeof d.ajaxKick=="string"){this._setUrlKick(d.ajaxKick)}else{this._setAjaxKick(d.ajaxKick)}if(typeof d.ajaxWatch=="string"){this._setUrlWatch(d.ajaxWatch)}else{this._setAjaxWatch(d.ajaxWatch)}},start:function(){this.kick()},kick:function(){if(this.isWorking()){return}this._setWorking(true);var d=this._getAjaxKick();d.sendRequest()},_startWatching:function(){var f=this._getInterval();var e=this;var d=setTimeout(function(){e.watch()},f);this._setTmWatch(d)},_stopWatching:function(){var d=this._getTmWatch();clearTimeout(d);this._setTmWatch(null)},watch:function(){this._stopWatching();var d=this._getAjaxWatch();d.sendRequest()},_checkStatus:function(f){var d=this._setWorkingBy(f);var e;if(d){e=a.STATUS_WORKING}else{e=a.STATUS_OK}if(typeof this.setting.onwatch=="function"){this.setting.onwatch({},e,f)}if(d){this._startWatching()}else{this._finish(e,f)}},_setWorkingBy:function(e){var d=neo.core.get(e,"result.working","0");d=(d=="1"?true:false);this._setWorking(d);return d},breakWatching:function(){if(!this.isWorking()){return}this._stopWatching();var d=a.STATUS_BROKEN;this._finish(d)},_finish:function(d,e){if(typeof this.setting.onstopwatching=="function"){this.setting.onstopwatching(d,e)}},__closure:neo.core.getClosure,onsuccessKick:function(e,g){var f=e.result.key;this._setKey(f);if(typeof this.setting.onstart=="function"){var d=a.STATUS_START;this.setting.onstart({},d,e)}this._startWatching()},onerrorKick:function(g,f,h){var d=a.STATUS_NG;var e=h.response;this._finish(d,e)},onsuccessWatch:function(d,e){this._checkStatus(d)},onerrorWatch:function(e,d,f){this.onerrorKick.apply(this,arguments)}}})})(jQuery);