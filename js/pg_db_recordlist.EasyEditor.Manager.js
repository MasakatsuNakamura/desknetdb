(function(b){var c=neo.core.readyNamespace("neo.webdb.pg_view.EasyEditor.Manager");if(!c){return}var a=neo.webdb.pg_view.EasyEditor.Manager=new neo.core.Class({classProperties:{defaultSetting:{}},properties:{setting:null,_editors:null,_initEditors:function(){return this._editors=new neo.core.Strage()},_showingEditor:null,_getShowingEditor:function(){return this._showingEditor},_setShowingEditor:function(d){return this._showingEditor=d},_getTableId:function(){return this.setting.tableId},_getPage:function(){return this.setting.page},_getElFixedGroup:function(){return this.setting.elFixedGroup},_getElScroller:function(){return this.setting.elScroller},_getElTable:function(){return this.setting.elTable},isContinuing:false,__constructor:function(d){this.setting=d||{}},initialize:function(){this._initEditors();this._initSetting()},_initSetting:function(){var d=this._getDefaultSetting();this.setting=b.extend({},d,this.setting)},_getDefaultSetting:function(){return b.extend({},a.defaultSetting)},startEditing:function(j,g,i,k){if(this.isConnectingAt(j,g)){return}var h=this._getPage();h.showCell(j,g);var e=this._getShowingEditor();if(e){e.close()}var f=this._getEditor(j,g);var d=this;f.openAfterPreparation(i,function(l){if(l){d._setShowingEditor(f);h.setCellHighlight(j,g)}},k);this.isContinuing=false},startNextEditing:function(h,e,g,i){this.isContinuing=true;var f,d;switch(g){case"down":f=this._getNextRowId(h);d=e;break;case"right":d=this._getNextColId(e);if(d){f=h}else{f=this._getNextRowId(h);d=this._getFirstColId()}break}if(f&&d){this.startEditing(f,d,g,i);return true}else{this.isContinuing=false;return false}},finishEditing:function(d){var e=this._getPage();e.removeCellHighlight()},isConnectingAt:function(f,e){var d=this._getEditor(f,e);return d&&d.isConnecting()},getRectOfShowingEditorRect:function(){var f;var d=this._getShowingEditor();if(d){var e=d.isOpen();if(e){f=d.getRect()}}return f},_getNextRowId:function(i){var g=this._getElTable();var h=this._getPage();var e=h.getElRowOf(i,g);var d=e.next();var f=h.getRowIdOf(d);return f},_getNextColId:function(j){var h=this._getElTable();var i=this._getPage();var e=i.getElColCellsOf(j,h);var d=e.next();while(d.length>0){var f=d.css("display");if(f!="none"){break}d=d.next()}var g=i.getColIdOf(d);return g},_getFirstColId:function(){var d=this._getElTable();var g=d.find("td:eq(2)");var f=this._getPage();var e=f.getColIdOf(g);return e},_getEditor:function(f,e){var g=f+"_"+e;var d=this._editors.get(g);if(!d){d=this._buildEditor(f,e)}return d},_buildEditor:function(g,f){var e={colId:f,elTable:this._getElTable(),manager:this,page:this._getPage(),rowId:g,tableId:this._getTableId()};var d=new neo.webdb.pg_view.EasyEditor(e);this._setEditor(g,f,d);return d},_setEditor:function(f,e,d){var g=f+"_"+e;this._editors.set(g,d)},updateBadgePos:function(){var g=this._editors;var f=g.getIdList();for(var d=0;d<f.length;d++){var h=f[d];var e=g.get(h);e.updateBadgePos()}}}})})(jQuery);