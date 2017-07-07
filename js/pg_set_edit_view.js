(function(b){var c=neo.core.readyNamespace("neo.webdb.pg_editView");if(!c){return}var a=neo.webdb.pg_editView={LAYOUT_LINE_HEIGHT:15,_form:null,_getForm:function(){return this._form||this._initForm()},_initForm:function(){var d={elBasicDispNum:this._getElBasicDispNum(),elBasicSortCol:this._getElBasicSortCol(),elBasicSortOrder:this._getElBasicSortOrder(),elCommonViewName:this._getElCommonViewName(),general:this._getGeneralData(),page:this};var e=new a.Form(d);e.initialize();return this._form=e},_filterMan:null,_getFilterMan:function(){return this._filterMan||this._initFilterMan()},_initFilterMan:function(){var e={columns:this._getColumnData(),editable:false,elConditionsContainer:this._getElConditionsContainer(),elDispNum:this._getElBasicDispNum(),elSortCol:this._getElBasicSortCol(),elSortOrder:this._getElBasicSortOrder(),filterDetails:neo_webdb_Filter_details};var d=new neo.webdb.Filter.Manager(e);d.initialize();return this._filterMan=d},_layout:null,_getLayout:function(){return this._layout||this._initLayout()},_initLayout:function(){var d={layoutitems:this._getLayoutItemData(),elAddDetailRowBtn:this._getElAddDetailRowBtn(),elAddDetailSeparatorBtn:this._getElAddDetailSeparatorBtn(),elDetail:this._getElDetailLayout(),elDetailColLen:this._getElDetailColLen(),elDetailContainer:this._getElDetailLayoutContainer(),elDetailRowHeightVal:this._getElDetailRowHeightVal(),elDetailRowHeightSettingBalloon:this._getElDetailRowHeightSettingBalloon(),elDetailRowTemplate:this._getElDetailLayoutRowTemplate(),elHiddenList:this._getElHiddenList(),elHiddenListContainer:this._getElHiddenListContainer(),elJoinDetailColsBtn:this._getElJoinDetailColsBtn(),elJoinDetailColsVal:this._getElJoinDetailColsVal(),elOneDetailRowHeightVal:this._getElOneDetailRowHeightVal(),elRemoveDetailRowBtn:this._getElRemoveDetailRowBtn(),elSetDetailRowHeightBtn:this._getElSetDetailRowHeightBtn(),elTable:this._getElTableLayout(),elTableContainer:this._getElTableLayoutContainer(),elTableDummyItem:this._getElLayoutTableDummyItem(),elTableHeight:this._getElTableHeight(),format:this._getFormatData(),layout:this._getLayoutData(),lineHeight:a.LAYOUT_LINE_HEIGHT,page:this};var e=new neo.webdb.Layout(d);e.initialize();return this._layout=e},_format:null,_getFormat:function(){return this._format||this._initFormat()},_initFormat:function(){var d={layoutitems:this._getLayoutItemData(),elColorCodeB:this._getElFormatEditColorCodeB(),elColorCodeG:this._getElFormatEditColorCodeG(),elColorCodeR:this._getElFormatEditColorCodeR(),elColorPaletteBtn:this._getElFormatEditColorPaletteBtn(),elDecreaseFontSizeBtn:this._getElFormatDecreaseFontSize(),elEditor:this._getElFormatEditor(),elColorTarget:this._getElFormatColorTarget(),elIncreaseFontSizeBtn:this._getElFormatIncreaseFontSize(),elSample:this._getElFormatSample(),elSetBoldBtn:this._getElFormatSetBoldBtn(),elSetItalicBtn:this._getElFormatSetItalicBtn(),elSetPosBtns:this._getElFormatSetPosBtns(),elTable:this._getElFormatTable(),format:this._getFormatData(),layout:this._getLayoutData(),page:this};var e=new neo.webdb.Format(d);e.initialize();return this._format=e},_elCommonViewName:null,_getElCommonViewName:function(){return this._elCommonViewName||this._initElCommonViewName()},_initElCommonViewName:function(){return this._elCommonViewName=b("#common-view_name")},_elPreviewBtn:null,_getElPreviewBtn:function(){return this._elPreviewBtn||this._initElPreviewBtn()},_initElPreviewBtn:function(){return this._elPreviewBtn=b("#preview")},_elSettingTab:null,_getElSettingTab:function(){return this._elSettingTab||this._initElSettingTab()},_initElSettingTab:function(){return this._elSettingTab=b("#setting_tab")},_elBasicFilterSelector:null,_getElBasicFilterSelector:function(){return this._elBasicFilterSelector||this._initElBasicFilterSelector()},_initElBasicFilterSelector:function(){var d=b(".search-filter_selector");d.val("");return this._elBasicFilterSelector=d},_elBasicSortCol:null,_getElBasicSortCol:function(){return this._elBasicSortCol||this._initElBasicSortCol()},_initElBasicSortCol:function(){return this._elBasicSortCol=b(".sort")},_elBasicSortOrder:null,_getElBasicSortOrder:function(){return this._elBasicSortOrder||this._initElBasicSortOrder()},_initElBasicSortOrder:function(){return this._elBasicSortOrder=b(".sort-order")},_elBasicDispNum:null,_getElBasicDispNum:function(){return this._elBasicDispNum||this._initElBasicDispNum()},_initElBasicDispNum:function(){return this._elBasicDispNum=b('[name="rowsperpage"]')},_elConditionsContainer:null,_getElConditionsContainer:function(){return this._elConditionsContainer||this._initElConditionsContainer()},_initElConditionsContainer:function(){return this._elConditionsContainer=b("#filter_condition-container")},_elSwitchLayoutTypeBtn:null,_getElSwitchLayoutTypeBtn:function(){return this._elSwitchLayoutTypeBtn||this._initElSwitchLayoutTypeBtn()},_initElSwitchLayoutTypeBtn:function(){return this._elSwitchLayoutTypeBtn=b("#layout-switch_type")},_elTableLayoutContainer:null,_getElTableLayoutContainer:function(){return this._elTableLayoutContainer||this._initElTableLayoutContainer()},_initElTableLayoutContainer:function(){return this._elTableLayoutContainer=b("#layout-table_type-container")},_elTableLayout:null,_getElTableLayout:function(){return this._elTableLayout||this._initElTableLayout()},_initElTableLayout:function(){return this._elTableLayout=b("#layout-table")},_elLayoutTableDummyItem:null,_getElLayoutTableDummyItem:function(){return this._elLayoutTableDummyItem||this._initElLayoutTableDummyItem()},_initElLayoutTableDummyItem:function(){return this._elLayoutTableDummyItem=b("#layout-table-item-dummy")},_elTableHeight:null,_getElTableHeight:function(){return this._elTableHeight||this._initElTableHeight()},_initElTableHeight:function(){return this._elTableHeight=b("#layout-table-height")},_elDetailLayoutContainer:null,_getElDetailLayoutContainer:function(){return this._elDetailLayoutContainer||this._initElDetailLayoutContainer()},_initElDetailLayoutContainer:function(){return this._elDetailLayoutContainer=b("#layout-detail_type-container")},_elDetailLayout:null,_getElDetailLayout:function(){return this._elDetailLayout||this._initElDetailLayout()},_initElDetailLayout:function(){return this._elDetailLayout=b("#layout-detail")},_elDetailLayoutRowTemplate:null,_getElDetailLayoutRowTemplate:function(){return this._elDetailLayoutRowTemplate||this._initElDetailLayoutRowTemplate()},_initElDetailLayoutRowTemplate:function(){var f=this._getElDetailLayout();var e=f.find(">tr:last, >tbody>tr:last").remove();var d=e.clone();return this._elDetailLayoutRowTemplate=d},_elAddDetailRowBtn:null,_getElAddDetailRowBtn:function(){return this._elAddDetailRowBtn||this._initElAddDetailRowBtn()},_initElAddDetailRowBtn:function(){return this._elAddDetailRowBtn=b("#layout-detail-append_row")},_elAddDetailSeparatorBtn:null,_getElAddDetailSeparatorBtn:function(){return this._elAddDetailSeparatorBtn||this._initElAddDetailSeparatorBtn()},_initElAddDetailSeparatorBtn:function(){return this._elAddDetailSeparatorBtn=b("#layout-detail-append_separator")},_elRemoveDetailRowBtn:null,_getElRemoveDetailRowBtn:function(){return this._elRemoveDetailRowBtn||this._initElRemoveDetailRowBtn()},_initElRemoveDetailRowBtn:function(){return this._elRemoveDetailRowBtn=b("#layout-detail-remove_row")},_elJoinDetailColsBtn:null,_getElJoinDetailColsBtn:function(){return this._elJoinDetailColsBtn||this._initElJoinDetailColsBtn()},_initElJoinDetailColsBtn:function(){return this._elJoinDetailColsBtn=b("#layout-detail-join")},_elJoinDetailColsVal:null,_getElJoinDetailColsVal:function(){return this._elJoinDetailColsVal||this._initElJoinDetailColsVal()},_initElJoinDetailColsVal:function(){return this._elJoinDetailColsVal=b("#layout-detail-join-val")},_elSetDetailRowHeightBtn:null,_getElSetDetailRowHeightBtn:function(){return this._elSetDetailRowHeightBtn||this._initElSetDetailRowHeightBtn()},_initElSetDetailRowHeightBtn:function(){return this._elSetDetailRowHeightBtn=b("#layout-detail-set_height")},_elDetailRowHeightVal:null,_getElDetailRowHeightVal:function(){return this._elDetailRowHeightVal||this._initElDetailRowHeightVal()},_initElDetailRowHeightVal:function(){return this._elDetailRowHeightVal=b("#layout-detail-set_height-val")},_elDetailColLen:null,_getElDetailColLen:function(){return this._elDetailColLen||this._initElDetailColLen()},_initElDetailColLen:function(){return this._elDetailColLen=b("#layout-detail-outer-col_len")},_elHiddenListContainer:null,_getElHiddenListContainer:function(){return this._elHiddenListContainer||this._initElHiddenListContainer()},_initElHiddenListContainer:function(){return this._elHiddenListContainer=b("#layout-hidden-container")},_elHiddenList:null,_getElHiddenList:function(){return this._elHiddenList||this._initElHiddenList()},_initElHiddenList:function(){return this._elHiddenList=b("#layout-hidden")},_elOkBtn:null,_getElOkBtn:function(){return this._elOkBtn||this._initElOkBtn()},_initElOkBtn:function(){return this._elOkBtn=b("#ok")},_elApplyBtn:null,_getElApplyBtn:function(){return this._elApplyBtn||this._initElApplyBtn()},_initElApplyBtn:function(){return this._elApplyBtn=b("#apply")},_elDetailRowHeightSettingBalloon:null,_getElDetailRowHeightSettingBalloon:function(){return this._elDetailRowHeightSettingBalloon||this._initElDetailRowHeightSettingBalloon()},_initElDetailRowHeightSettingBalloon:function(){return this._elDetailRowHeightSettingBalloon=b("#layout-detail-set_height-editor")},_elOneDetailRowHeightVal:null,_getElOneDetailRowHeightVal:function(){return this._elOneDetailRowHeightVal||this._initElOneDetailRowHeightVal()},_initElOneDetailRowHeightVal:function(){var d=this._getElDetailRowHeightSettingBalloon();return this._elOneDetailRowHeightVal=d.find("select")},_elFormatTable:null,_getElFormatTable:function(){return this._elFormatTable||this._initElFormatTable()},_initElFormatTable:function(){return this._elFormatTable=b("#format")},_elFormatSample:null,_getElFormatSample:function(){return this._elFormatSample||this._initElFormatSample()},_initElFormatSample:function(){return this._elFormatSample=b(".format-sample_cell")},_elFormatEditor:null,_getElFormatEditor:function(){return this._elFormatEditor||this._initElFormatEditor()},_initElFormatEditor:function(){return this._elFormatEditor=b("#format-editor")},_elFormatSetPosBtns:null,_getElFormatSetPosBtns:function(){return this._elFormatSetPosBtns||this._initElFormatSetPosBtns()},_initElFormatSetPosBtns:function(){return this._elFormatSetPosBtns=b(".format-editor-pos")},_elFormatSetBoldBtn:null,_getElFormatSetBoldBtn:function(){return this._elFormatSetBoldBtn||this._initElFormatSetBoldBtn()},_initElFormatSetBoldBtn:function(){return this._elFormatSetBoldBtn=b("#format-editor-style-bold")},_elFormatSetItalicBtn:null,_getElFormatSetItalicBtn:function(){return this._elFormatSetItalicBtn||this._initElFormatSetItalicBtn()},_initElFormatSetItalicBtn:function(){return this._elFormatSetItalicBtn=b("#format-editor-style-italic")},_elFormatIncreaseFontSize:null,_getElFormatIncreaseFontSize:function(){return this._elFormatIncreaseFontSize||this._initElFormatIncreaseFontSize()},_initElFormatIncreaseFontSize:function(){return this._elFormatIncreaseFontSize=b("#format-editor-style-increase_font_size")},_elFormatDecreaseFontSize:null,_getElFormatDecreaseFontSize:function(){return this._elFormatDecreaseFontSize||this._initElFormatDecreaseFontSize()},_initElFormatDecreaseFontSize:function(){return this._elFormatDecreaseFontSize=b("#format-editor-style-decrease_font_size")},_elFormatColorTarget:null,_getElFormatColorTarget:function(){return this._elFormatColorTarget||this._initElFormatColorTarget()},_initElFormatColorTarget:function(){return this._elFormatColorTarget=b("#format-editor-color-target")},_elFormatEditColorCodeR:null,_getElFormatEditColorCodeR:function(){return this._elFormatEditColorCodeR||this._initElFormatEditColorCodeR()},_initElFormatEditColorCodeR:function(){return this._elFormatEditColorCodeR=b("#format-editor-color-code-r")},_elFormatEditColorCodeG:null,_getElFormatEditColorCodeG:function(){return this._elFormatEditColorCodeG||this._initElFormatEditColorCodeG()},_initElFormatEditColorCodeG:function(){return this._elFormatEditColorCodeG=b("#format-editor-color-code-g")},_elFormatEditColorCodeB:null,_getElFormatEditColorCodeB:function(){return this._elFormatEditColorCodeB||this._initElFormatEditColorCodeB()},_initElFormatEditColorCodeB:function(){return this._elFormatEditColorCodeB=b("#format-editor-color-code-b")},_elFormatEditColorPaletteBtn:null,_getElFormatEditColorPaletteBtn:function(){return this._elFormatEditColorPaletteBtn||this._initElFormatEditColorPaletteBtn()},_initElFormatEditColorPaletteBtn:function(){return this._elFormatEditColorPaletteBtn=b(".format-editor-color-palette-item")},_getGeneralData:function(){return window.neo_webdb_pg_edit_view_general},_getLayoutItemData:function(){return window.neo_webdb_layoutitems},_getColumnData:function(){return window.neo_webdb_columns},_getLayoutData:function(){return window.neo_webdb_pg_edit_view_layout},_getFormatData:function(){return window.neo_webdb_pg_edit_view_format},_getFilterList:function(){return window.neo_webdb_pg_editView_filters},setViewId:function(d){var e=this._getGeneralData();e.vid=d},setLayoutId:function(d){var e=this._getGeneralData();e.sid=d},_getDbTree:function(){var d=neo.webdb.getTopWindow();return d.neo.webdb.pg_frame._getDbTree()},constructor:function(){},initialize:function(){this._initFilters();this._initLayout();this._initFormat();this._hook()},_initFilters:function(){var f=this._getFilterList();var e=f||[];for(var d=0;d<e.length;d++){this._addFilter(e[d])}},_hook:function(){var d;d=this._getElSettingTab();d.webdbTabs();d=this._getElOkBtn();this.__bind(d,"click","Ok");d=this._getElApplyBtn();this.__bind(d,"click","Apply");this._hookBasicSetting();this._hookLayoutSetting()},_hookBasicSetting:function(){var d;d=this._getElBasicFilterSelector();this.__bind(d,"change","SelectFilter")},_hookLayoutSetting:function(){var d;d=this._getElSwitchLayoutTypeBtn();this.__bind(d,"click","SwitchLayoutType")},addSelectedFilter:function(){var e=this._getElBasicFilterSelector();var d=e.val();e.val("");this._addFilter(d)},_addFilter:function(h){var g=this._getElBasicFilterSelector();var e=g.children("[value="+h+"]").text();var d=this._getFilterMan();var f=d.getElFilter(h,e);if(f){f.insertBefore(g)}},switchLayoutType:function(){var d=this._getLayout();d.switchType()},finish:function(){var d=this._getForm();d.finish()},apply:function(){var d=this._getForm();d.apply()},getLayoutData:function(e){var d=this._getLayout();return d.getData(e)},getFormatData:function(d){var e=this._getFormat();return e.getData(d)},getFilterIdList:function(){var d=this._getFilterMan();return d.getFilterIdList()},buttonOff:function(){var d;d=this._getElOkBtn();d.attr("disabled","disabled");d=this._getElApplyBtn();d.attr("disabled","disabled")},buttonOn:function(){var d;d=this._getElOkBtn();d.removeAttr("disabled");d=this._getElApplyBtn();d.removeAttr("disabled")},__bind:neo.jq.bindListener,onchangeSelectFilter:function(d){this.addSelectedFilter()},onclickSwitchLayoutType:function(d){this.switchLayoutType()},onclickOk:function(d){this.finish()},onclickApply:function(d){this.apply()}};b(document).ready(function(){a.initialize()})})(jQuery);