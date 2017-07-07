/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config


	CKEDITOR.config.enterMode = 2;
	CKEDITOR.config.height = '0px';
	CKEDITOR.config.resize_enabled = false;
	CKEDITOR.config.htmlEncodeOutput = false;
	CKEDITOR.config.entities = false;

    //---------------
	CKEDITOR.lang.languages={"en":1,"ja":1,"zh-cn":1};
	if (desknets.Resource.code == 'zh_CN') {
	    CKEDITOR.config.language = 'zh-cn';
	}
	else {
		CKEDITOR.config.language = desknets.Resource.code;
	}
    //---------------

	CKEDITOR.config.toolbar = 
	[
		['FontSize'],
		['TextColor'],
		['Bold','Italic','Underline','HorizontalRule'],
		['JustifyLeft','JustifyCenter','JustifyRight'],
		['Link','Unlink'],
		['Undo','Redo']
	];

	// Dialog windows are also simplified.
	config.removeDialogTabs = 'image:advanced;link:advanced;link';

	// 許可対象(追加分): 要素[属性]{CSSプロパティ};
    config.extraAllowedContent = 
		' *[id,title,dir,lang]{*}(*);'
		+ ' em i strong b cite dfn code samp kbd var abbr acronym sub sup p br pre span ul ol li dl dt dd caption;'
		+ ' div[align];'
		+ ' blockquote q[cite];'
		+ ' table[border,cellspacing,cellpadding,width,frame,rules,height,align,summary,bgcolor,background,bordercolor];'
		+ ' tbody thead tfoot tr[height,align,valign,bgcolor,background,bordercolor];'
		+ ' col[align,char,charoff,span,valign,width];'
		+ ' colgroup[align,char,charoff,span,valign,width];'
		+ ' td th[colspan,rowspan,width,height,align,valign,bgcolor,background,bordercolor,scope];'
		+ ' a[rel,rev,charset,hreflang,tabindex,accesskey,type,name,href,target];'
		+ ' img[longdesc,usemap,src,border,alt,hspace,vspace,width,height,align];'
		+ ' object[classid,codebase,data,type,width,height,align,name,codetype,archive,standby,usemap,tabindex];'
		+ ' param[name,value];'
		+ ' embed[src,type,width,height,align,name,pluginspage];'
		+ ' big small tt strike s u font[size,color,face];'
		+ ' hr[align,size,noshade,width];'
		+ ' iframe[src,align,width,height,name,frameborder,longdesc,marginwidth,marginheight,scrolling];'
    ;
	// 禁止対象: 要素[属性]{CSSプロパティ};
	config.disallowedContent = '*{behavior}';
};
CKEDITOR.dom.window.prototype.getViewPaneSize = function() {
  var a = this.$.document, f = (a.compatMode == "CSS1Compat" && !desknets.browser.tablet);
  return {
      width: (f ? a.documentElement.clientWidth : a.body.clientWidth) || 0,
      height: (f ? a.documentElement.clientHeight : a.body.clientHeight) || 0
  }
}
CKEDITOR.on('dialogDefinition', function(event) {
    var dialog = event.data;
    if (dialog.name == 'table') {
        var def = event.data.definition;
        def.onShow = function() {
            var text = this.getContentElement( 'info', 'txtBorder' );
            text.disable();
        }
    }
});
CKEDITOR.on( 'instanceReady', function( ev ){
    var editor = ev.editor;
    editor.on( 'beforeCommandExec', function( ev ){
        // 繧ｽ繝ｼ繧ｹ縺梧款縺輔ｌ縺溘ｉ
        if (ev.data.name == 'source') {
            var $button = $('.cke_button__imgeditor');
            if ($button.length > 0) {
                $button.toggleClass('sourceview');
            }
        }
        else if (ev.data.name == 'maximize') {
            var $button = $('.cke_button__imgeditor');
            if ($button.length > 0) {
                $button.toggleClass('maximizeview');
            }
        }
    } );
});

