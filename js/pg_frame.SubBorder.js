(function(b){var c=neo.core.readyNamespace("neo.webdb.pg_frame.SubBorder");if(!c){return}var a=neo.webdb.pg_frame.SubBorder=new neo.core.Class({superClass:neo.webdb.pg_frame.MenuBorder,classProperties:{defaultSetting:{},draggableSetting:{axis:"y"},banpei:null},properties:{setting:null,__constructor:function(d){this.setting=d||{}},initialize:function(){this._initSetting();this._hook()},_getDefaultSetting:function(){return b.extend({},a.defaultSetting)},_getDraggableSetting:function(){var d=this.__call("_getDraggableSetting");return b.extend(d,a.draggableSetting)},_adjustPosition:function(){var g=this._getMediator();var k={};k.left=g.getMenuWidth(true);var e=this._getElBorder();var i=e.offset();var d=g.getHeaderHeight();var f=this._getMinHeight();var h=(d+g.getMiddleHeight())-f;if(i.top>h){var j=d+f;if(h<j){k.top=j}else{k.top=h}}e.css(k)},_adjustSize:function(){var h=this._getMediator();var f=h.getClientSize();var g=h.getMenuWidth(true);var e=f.width-g;var d=this._getElBorder();d.width(e)},_adjustContainment:function(){var i=this._getMediator();var h=this._getMinHeight();var j=i.getHeaderHeight()+h;var g=i.getClientSize();var d=g.height-(i.getFooterHeight()+h);if(d<j){d=j}var e=this._getElBorder();var f=[0,j,0,d];e.draggable("option","containment",f)},_getMinHeight:function(){return this.setting.minHeight},banpei:null}})})(jQuery);