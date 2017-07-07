(function(a){var c=neo.core.readyNamespace("neo.webdb.pg_editLayout");if(!c){return}var b=neo.webdb.pg_editLayout={LAYOUT_LINE_HEIGHT:15,_form:null,_getForm:function(){return this._form||this._initForm()},_initForm:function(){var d={general:this._getGeneralData(),page:this};var e=new neo.webdb.pg_editLayout.Form(d);e.initialize();return this._form=e},_layout:null,_getLayout:function(){return this._layout||this._initLayout()},_initLayout:function(){var d={layoutitems:this._getLayoutItemData(),elAddDetailRowBtn:this._getElAddDetailRowBtn(),elAddDetailSeparatorBtn:this._getElAddDetailSeparatorBtn(),elDetail:this._getElDetailLayout(),elDetailColLen:this._getElDetailColLen(),elDetailContainer:this._getElDetailLayoutContainer(),elDetailRowHeightVal:this._getElDetailRowHeightVal(),elDetailRowHeightSettingBalloon:this._getElDetailRowHeightSettingBalloon(),elDetailRowTemplate:this._getElDetailLayoutRowTemplate(),elHiddenList:this._getElHiddenList(),elHiddenListContainer:this._getElHiddenListContainer(),elJoinDetailColsBtn:this._getElJoinDetailColsBtn(),elJoinDetailColsVal:this._getElJoinDetailColsVal(),elLayoutPanel:this._getElLayoutPanel(),elOneDetailRowHeightVal:this._getElOneDetailRowHeightVal(),elReadyingOverlay:this._getElReadyingOverlay(),elReadyingOverlayBg:this._getElReadyingOverlayBg(),elRemoveDetailRowBtn:this._getElRemoveDetailRowBtn(),elSetDetailRowHeightBtn:this._getElSetDetailRowHeightBtn(),elTable:this._getElTableLayout(),elTableContainer:this._getElTableLayoutContainer(),elTableDummyItem:this._getElLayoutTableDummyItem(),elTableHeight:this._getElTableHeight(),format:this._getFormatData(),layout:this._getLayoutData(),lineHeight:b.LAYOUT_LINE_HEIGHT,page:this};var e=new b.Layout(d);e.initialize();return this._layout=e},_format:null,_getFormat:function(){return this._format||this._initFormat()},_initFormat:function(){var d={layoutitems:this._getLayoutItemData(),elColorCodeB:this._getElFormatEditColorCodeB(),elColorCodeG:this._getElFormatEditColorCodeG(),elColorCodeR:this._getElFormatEditColorCodeR(),elColorPaletteBtn:this._getElFormatEditColorPaletteBtn(),elDecreaseFontSizeBtn:this._getElFormatDecreaseFontSize(),elEditor:this._getElFormatEditor(),elColorTarget:this._getElFormatColorTarget(),elIncreaseFontSizeBtn:this._getElFormatIncreaseFontSize(),elSample:this._getElFormatSample(),elSetBoldBtn:this._getElFormatSetBoldBtn(),elSetItalicBtn:this._getElFormatSetItalicBtn(),elSetPosBtns:this._getElFormatSetPosBtns(),elTable:this._getElFormatTable(),format:this._getFormatData(),layout:this._getLayoutData(),page:this};var e=new neo.webdb.Format(d);e.initialize();return this._format=e},_elSettingTab:null,_getElSettingTab:function(){return this._elSettingTab||this._initElSettingTab()},_initElSettingTab:function(){return this._elSettingTab=a("#setting_tab")},_elSwitchLayoutTypeBtn:null,_getElSwitchLayoutTypeBtn:function(){return this._elSwitchLayoutTypeBtn||this._initElSwitchLayoutTypeBtn()},_initElSwitchLayoutTypeBtn:function(){return this._elSwitchLayoutTypeBtn=a("#layout-switch_type")},_elTableLayoutContainer:null,_getElTableLayoutContainer:function(){return this._elTableLayoutContainer||this._initElTableLayoutContainer()},_initElTableLayoutContainer:function(){return this._elTableLayoutContainer=a("#layout-table_type-container")},_elLayoutPanel:null,_getElLayoutPanel:function(){return this._elLayoutPanel||this._initElLayoutPanel()},_initElLayoutPanel:function(){return this._elLayoutPanel=a("#layout_setting")},_elTableLayout:null,_getElTableLayout:function(){return this._elTableLayout||this._initElTableLayout()},_initElTableLayout:function(){return this._elTableLayout=a("#layout-table")},_elLayoutTableDummyItem:null,_getElLayoutTableDummyItem:function(){return this._elLayoutTableDummyItem||this._initElLayoutTableDummyItem()},_initElLayoutTableDummyItem:function(){return this._elLayoutTableDummyItem=a("#layout-table-item-dummy")},_elTableHeight:null,_getElTableHeight:function(){return this._elTableHeight||this._initElTableHeight()},_initElTableHeight:function(){return this._elTableHeight=a("#layout-table-height")},_elDetailLayoutContainer:null,_getElDetailLayoutContainer:function(){return this._elDetailLayoutContainer||this._initElDetailLayoutContainer()},_initElDetailLayoutContainer:function(){return this._elDetailLayoutContainer=a("#layout-detail_type-container")},_elDetailLayout:null,_getElDetailLayout:function(){return this._elDetailLayout||this._initElDetailLayout()},_initElDetailLayout:function(){return this._elDetailLayout=a("#layout-detail")},_elDetailLayoutRowTemplate:null,_getElDetailLayoutRowTemplate:function(){return this._elDetailLayoutRowTemplate||this._initElDetailLayoutRowTemplate()},_initElDetailLayoutRowTemplate:function(){var f=this._getElDetailLayout();var e=f.find(">tr:last, >tbody>tr:last").remove();var d=e.clone();return this._elDetailLayoutRowTemplate=d},_elAddDetailRowBtn:null,_getElAddDetailRowBtn:function(){return this._elAddDetailRowBtn||this._initElAddDetailRowBtn()},_initElAddDetailRowBtn:function(){return this._elAddDetailRowBtn=a("#layout-detail-append_row")},_elAddDetailSeparatorBtn:null,_getElAddDetailSeparatorBtn:function(){return this._elAddDetailSeparatorBtn||this._initElAddDetailSeparatorBtn()},_initElAddDetailSeparatorBtn:function(){return this._elAddDetailSeparatorBtn=a("#layout-detail-append_separator")},_elRemoveDetailRowBtn:null,_getElRemoveDetailRowBtn:function(){return this._elRemoveDetailRowBtn||this._initElRemoveDetailRowBtn()},_initElRemoveDetailRowBtn:function(){return this._elRemoveDetailRowBtn=a("#layout-detail-remove_row")},_elJoinDetailColsBtn:null,_getElJoinDetailColsBtn:function(){return this._elJoinDetailColsBtn||this._initElJoinDetailColsBtn()},_initElJoinDetailColsBtn:function(){return this._elJoinDetailColsBtn=a("#layout-detail-join")},_elJoinDetailColsVal:null,_getElJoinDetailColsVal:function(){return this._elJoinDetailColsVal||this._initElJoinDetailColsVal()},_initElJoinDetailColsVal:function(){return this._elJoinDetailColsVal=a("#layout-detail-join-val")},_elSetDetailRowHeightBtn:null,_getElSetDetailRowHeightBtn:function(){return this._elSetDetailRowHeightBtn||this._initElSetDetailRowHeightBtn()},_initElSetDetailRowHeightBtn:function(){return this._elSetDetailRowHeightBtn=a("#layout-detail-set_height")},_elDetailRowHeightVal:null,_getElDetailRowHeightVal:function(){return this._elDetailRowHeightVal||this._initElDetailRowHeightVal()},_initElDetailRowHeightVal:function(){return this._elDetailRowHeightVal=a("#layout-detail-set_height-val")},_elDetailColLen:null,_getElDetailColLen:function(){return this._elDetailColLen||this._initElDetailColLen()},_initElDetailColLen:function(){return this._elDetailColLen=a("#layout-detail-outer-col_len")},_elHiddenListContainer:null,_getElHiddenListContainer:function(){return this._elHiddenListContainer||this._initElHiddenListContainer()},_initElHiddenListContainer:function(){return this._elHiddenListContainer=a("#layout-hidden-container")},_elHiddenList:null,_getElHiddenList:function(){return this._elHiddenList||this._initElHiddenList()},_initElHiddenList:function(){return this._elHiddenList=a("#layout-hidden")},_elOkBtn:null,_getElOkBtn:function(){return this._elOkBtn||this._initElOkBtn()},_initElOkBtn:function(){return this._elOkBtn=a("#ok")},_elApplyBtn:null,_getElApplyBtn:function(){return this._elApplyBtn||this._initElApplyBtn()},_initElApplyBtn:function(){return this._elApplyBtn=a("#apply")},_elDetailRowHeightSettingBalloon:null,_getElDetailRowHeightSettingBalloon:function(){return this._elDetailRowHeightSettingBalloon||this._initElDetailRowHeightSettingBalloon()},_initElDetailRowHeightSettingBalloon:function(){return this._elDetailRowHeightSettingBalloon=a("#layout-detail-set_height-editor")},_elOneDetailRowHeightVal:null,_getElOneDetailRowHeightVal:function(){return this._elOneDetailRowHeightVal||this._initElOneDetailRowHeightVal()},_initElOneDetailRowHeightVal:function(){var d=this._getElDetailRowHeightSettingBalloon();return this._elOneDetailRowHeightVal=d.find("select")},_elFormatTable:null,_getElFormatTable:function(){return this._elFormatTable||this._initElFormatTable()},_initElFormatTable:function(){return this._elFormatTable=a("#format")},_elFormatSample:null,_getElFormatSample:function(){return this._elFormatSample||this._initElFormatSample()},_initElFormatSample:function(){return this._elFormatSample=a(".format-sample_cell")},_elFormatEditor:null,_getElFormatEditor:function(){return this._elFormatEditor||this._initElFormatEditor()},_initElFormatEditor:function(){return this._elFormatEditor=a("#format-editor")},_elFormatSetPosBtns:null,_getElFormatSetPosBtns:function(){return this._elFormatSetPosBtns||this._initElFormatSetPosBtns()},_initElFormatSetPosBtns:function(){return this._elFormatSetPosBtns=a(".format-editor-pos")},_elFormatSetBoldBtn:null,_getElFormatSetBoldBtn:function(){return this._elFormatSetBoldBtn||this._initElFormatSetBoldBtn()},_initElFormatSetBoldBtn:function(){return this._elFormatSetBoldBtn=a("#format-editor-style-bold")},_elFormatSetItalicBtn:null,_getElFormatSetItalicBtn:function(){return this._elFormatSetItalicBtn||this._initElFormatSetItalicBtn()},_initElFormatSetItalicBtn:function(){return this._elFormatSetItalicBtn=a("#format-editor-style-italic")},_elFormatIncreaseFontSize:null,_getElFormatIncreaseFontSize:function(){return this._elFormatIncreaseFontSize||this._initElFormatIncreaseFontSize()},_initElFormatIncreaseFontSize:function(){return this._elFormatIncreaseFontSize=a("#format-editor-style-increase_font_size")},_elFormatDecreaseFontSize:null,_getElFormatDecreaseFontSize:function(){return this._elFormatDecreaseFontSize||this._initElFormatDecreaseFontSize()},_initElFormatDecreaseFontSize:function(){return this._elFormatDecreaseFontSize=a("#format-editor-style-decrease_font_size")},_elFormatColorTarget:null,_getElFormatColorTarget:function(){return this._elFormatColorTarget||this._initElFormatColorTarget()},_initElFormatColorTarget:function(){return this._elFormatColorTarget=a("#format-editor-color-target")},_elFormatEditColorCodeR:null,_getElFormatEditColorCodeR:function(){return this._elFormatEditColorCodeR||this._initElFormatEditColorCodeR()},_initElFormatEditColorCodeR:function(){return this._elFormatEditColorCodeR=a("#format-editor-color-code-r")},_elFormatEditColorCodeG:null,_getElFormatEditColorCodeG:function(){return this._elFormatEditColorCodeG||this._initElFormatEditColorCodeG()},_initElFormatEditColorCodeG:function(){return this._elFormatEditColorCodeG=a("#format-editor-color-code-g")},_elFormatEditColorCodeB:null,_getElFormatEditColorCodeB:function(){return this._elFormatEditColorCodeB||this._initElFormatEditColorCodeB()},_initElFormatEditColorCodeB:function(){return this._elFormatEditColorCodeB=a("#format-editor-color-code-b")},_elFormatEditColorPaletteBtn:null,_getElFormatEditColorPaletteBtn:function(){return this._elFormatEditColorPaletteBtn||this._initElFormatEditColorPaletteBtn()},_initElFormatEditColorPaletteBtn:function(){return this._elFormatEditColorPaletteBtn=a(".format-editor-color-palette-item")},_elReadyingOverlay:null,_getElReadyingOverlay:function(){return this._elReadyingOverlay||this._initElReadyingOverlay()},_initElReadyingOverlay:function(){return this._elReadyingOverlay=a("#readying_overlay")},_elReadyingOverlayBg:null,_getElReadyingOverlayBg:function(){return this._elReadyingOverlayBg||this._initElReadyingOverlayBg()},_initElReadyingOverlayBg:function(){return this._elReadyingOverlayBg=a("#readying_overlay-bg")},_getGeneralData:function(){return window.neo_webdb_pg_edit_view_general},_getLayoutItemData:function(){return window.neo_webdb_layoutitems},_getLayoutData:function(){return window.neo_webdb_pg_edit_view_layout},_getFormatData:function(){return window.neo_webdb_pg_edit_view_format},constructor:function(){},initialize:function(){this._initLayout();this._initFormat();this._hook()},_hook:function(){var d;d=this._getElSettingTab();d.webdbTabs();d=this._getElOkBtn();this.__bind(d,"click","Ok");d=this._getElApplyBtn();this.__bind(d,"click","Apply");this._hookLayoutSetting()},_hookLayoutSetting:function(){},finish:function(){var d=this._getForm();d.finish()},apply:function(){var d=this._getForm();d.apply()},getLayoutData:function(e){var d=this._getLayout();return d.getData(e)},getFormatData:function(d){var e=this._getFormat();return e.getData(d)},buttonOff:function(){var d;d=this._getElOkBtn();d.attr("disabled","disabled");d=this._getElApplyBtn();d.attr("disabled","disabled")},buttonOn:function(){var d;d=this._getElOkBtn();d.removeAttr("disabled");d=this._getElApplyBtn();d.removeAttr("disabled")},__bind:neo.jq.bindListener,onclickSwitchLayoutType:function(d){this.switchLayoutType()},onclickOk:function(d){this.finish()},onclickApply:function(d){this.apply()},banpei:null};a(document).ready(function(){b.initialize()})})(jQuery);