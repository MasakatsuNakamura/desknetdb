(function(b){var c=neo.core.readyNamespace("neo.webdb.Record");if(!c){return}var a=neo.webdb.Record=new neo.core.Class({classProperties:{defaultSetting:{editable:false},initialize:function(){},banpei:null},properties:{setting:null,_getRecordId:function(){return this.setting.recordid},__constructor:function(d){this.setting=d||{}},initialize:function(){this._initSetting()},_initSetting:function(){this.setting=b.extend({},a.defaultSetting,this.setting)},_getDefaults:function(){return b.extend({},a.defaultSetting)},_initElColumns:function(j){var e=j.find(".layout-item-data");for(var f=0;f<e.length;f++){var h=e.eq(f);if(!h){continue}var g=h.attr("data-id");if(!g){continue}var k=this.setting.columnManipulatorManager;var d=k.getManipulator(g);this._hookColumn(h,g)}},_hookColumn:function(g,f){var e={recordId:this._getRecordId()};if(this._isEditable()){var h=this.setting.columnManipulatorManager;var d=h.getManipulator(f);if(d){d.hookColumn(g,e)}}},_isEditable:function(){return this.setting.editable},_getQueryOne:function(g){var f=g.attr("data-id");var i=this.setting.columnManipulatorManager;var d=i.getManipulator(f);if(!d){return null}var e=d.getColumnMap(g);if(!e){return null}var h=neo.core.joinParam(e);return h},banpei:null}});b(document).ready(function(){a.initialize()})})(jQuery);