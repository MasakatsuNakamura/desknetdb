(function(){if(!neo.core.readyNamespace("neo.jq")){return}$=$;$.fn=$.fn;$.datepicker=$.datepicker;neo.jq={bindListener:function(f,b,e,a){if(!e){e=""}if(!a){a=this}var d="on"+b+e;var c=a[d];if(typeof c!="function"){throw new Error('neo.jq.bindListener : context has no function "'+d+'".')}var g=neo.core.getClosure(c,a);f.bind(b,g)},getIdName:function(a,d,b){if(!neo.core.isString(b)||b==""){b="name"}var e=new RegExp("(?:^|\\s)neo-"+d+"-"+b+"--(\\S+)(?:\\s|$)");try{return a[0].className.match(e)[1]||""}catch(c){return""}},redrawElement:function(a){a.css({visibility:"hidden"});setTimeout(function(){a.css({visibility:"visible"})},1)},buildPlugin:function(a){if(typeof a!="function"){throw new Error("neo.jq.buildPlugin : <pluginClass> is not function : "+a)}var b=function(f){var i=this;var e=arguments;if(typeof f=="string"){var h=f;if(h=="option"&&e.length!=2){i.each(function(m,k){var l=$(k);var j=a.getInstance(l);if(j){var n=j[h];var o=Array.prototype.slice.apply(e,[1]);n.apply(j,o)}});return i}else{var d=a.getInstance(i);if(d){var g=d[h];if(typeof g=="function"){var e=Array.prototype.slice.apply(arguments,[1]);var c=g.apply(d,e);return c}}}}else{i.each(function(m,k){var l=$(k);var j=a.getInstance(l);if(!j){j=new a(l,e)}j.initialize()})}return this};return b}};neo.jq.jQPluginBase={__constructor:function(b,a){if(!this._isValidElement(b)){return}this.element=$(b);this.options=this._getOptions(a);this._initialize()},_isValidElement:function(a){return neo.core.exists(a,"tagName")},_getOptions:function(b){var a=this._getCompoundedOptions(b);this._regulateOptions(a);return a},_getCompoundedOptions:function(b){var a={};$.extend(a,this._getDefaultOptions());if(neo.core.exists(b)){$.extend(a,b)}return a},_getDefaultOptions:function(){return{}},_regulateOptions:function(a){return a},_initialize:function(){}}})(jQuery);