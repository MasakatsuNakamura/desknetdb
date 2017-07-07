/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config


	CKEDITOR.config.enterMode = 2;
	CKEDITOR.config.height = '280px';
	CKEDITOR.config.resize_enabled = false;

    //---------------
	CKEDITOR.lang.medialanguages=['en', 'ja', 'zh-cn'];
	CKEDITOR.lang.languages={"en":1,"ja":1,"zh-cn":1};
	if (desknets.Resource.code == 'zh_CN') {
	    CKEDITOR.config.language = 'zh-cn';
	}
	else {
		CKEDITOR.config.language = desknets.Resource.code;
	}
    //---------------

    if (desknets.browser.msie8 || desknets.browser.msie9) {
		CKEDITOR.config.toolbar = 
		[
			['FontSize'],
			['TextColor','BGColor'],
			['Bold','Italic','Underline','Strike','HorizontalRule'],
			['JustifyLeft','JustifyCenter','JustifyRight'],
			['NumberedList','BulletedList'],
			['Link','Unlink'],
			['ImgEditor'],
			'/',
			// ['Flash','Iframe','MediaEmbed','Image','Preview'],
			['Image','Media','Preview'],
			['Maximize'],
			['Find','Replace'],
			['Undo','Redo'],
			['Table']
		];
    }
    else {
		CKEDITOR.config.toolbar = 
		[
			['FontSize'],
			['TextColor','BGColor'],
			['Bold','Italic','Underline','Strike','HorizontalRule'],
			['JustifyLeft','JustifyCenter','JustifyRight'],
			['NumberedList','BulletedList'],
			['Link','Unlink'],
			['ImgEditor'],
			'/',
			// ['Flash','Iframe','MediaEmbed','Image','Preview'],
			['Image','Media','Preview'],
			['Source'],
			['Maximize'],
			['Find','Replace'],
			['Undo','Redo'],
			['Table']
		];
	}
	// Dialog windows are also simplified.
	config.removeDialogTabs = 'image:advanced;link:advanced;link';
	config.extraPlugins = 'media';

	// ���Ώ�(�ǉ���): �v�f[����]{CSS�v���p�e�B};
	config.extraAllowedContent = '*[type,title]{*};pre;';
	// �֎~�Ώ�: �v�f[����]{CSS�v���p�e�B};
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
        // �\�[�X�������ꂽ��
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

