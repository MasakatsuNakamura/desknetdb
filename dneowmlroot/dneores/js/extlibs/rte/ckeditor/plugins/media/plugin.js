CKEDITOR.plugins.add('media', {
    icons: 'media',
    lang: ['en', 'ja'],

    types: {},

    /**
     * エディターを初期化する。
     *
     * @param {CKEDITOR.editor} editor エディター
     */
    init: function(editor) {
        var self = this, lm = editor.lang.media;
        this.types['video'] = {'label': lm.typeVideo, 'tagName': 'video', 'attrs': {'controls': 'controls'}};
        this.types['audio'] = {'label': lm.typeAudio, 'tagName': 'audio', 'attrs': {'controls': 'controls'}, 'noSize': true};
        this.types['wmedia'] = {'label': lm.typeWMedia, 'tagName': 'embed', 'attrs': {'type': 'application/x-mplayer2'}};
        this.types['rplayer'] = {'label': lm.typeReal, 'tagName': 'embed', 'attrs': {'type': 'audio/x-pn-realaudio-plugin'}};
        this.types['qt'] = {'label': lm.typeQt,  'tagName': 'embed', 'attrs': {'type': 'video/quicktime'}};
        this.types['flash'] = {'label': lm.typeFlash, 'tagName': 'embed', 'attrs': {'type': 'application/x-shockwave-flash'}};
//        this.types['shockwave'] = {'label': lm.typeShockwave, 'tagName': 'embed', 'attrs': {'type': 'application/x-director'}};
        this.types['iframe'] = {'label': lm.typeIframe, 'tagName': 'iframe'};

        editor.addCommand('media', new CKEDITOR.dialogCommand('mediaDialog', {
            'allowedContent': 'video[src,width,height];audio[src];iframe[src,width,height];object[data,type,width,height];embed[src,type,width,height]'
        }));
        editor.ui.addButton('Media', {'label': lm.menu, 'command': 'media', 'toolbar': 'insert'});
        editor.addContentsCss(this.path + 'styles/media.css');
        CKEDITOR.dialog.add( 'mediaDialog', this.path + 'dialogs/media.js' );

        if ( editor.contextMenu ) {
            editor.addMenuGroup('mediaGroup');
            editor.addMenuItem( 'mediaItem', {'label': lm.menuItemTitle, 'icon': this.path + 'icons/media.png', 'command': 'media', 'group': 'mediaGroup'});
            editor.contextMenu.addListener( function(element) {
                if (String(element.getAttribute('data-cke-real-element-type')).indexOf('media') == 0) {
                    return {'mediaItem': CKEDITOR.TRISTATE_OFF};
                }
            });
        }

        editor.on('mode', function(e) {
            if (editor.mode == 'wysiwyg') {
                self.convertMediaElements(editor);
            }
        });
    },

    /**
     * エディターのメディア要素を置き換え要素に変換する。
     *
     * @param {CKEDITOR.editor} editor エディター
     */
    convertMediaElements: function(editor) {
        var tagNames = ['embed', 'object', 'video', 'audio', 'iframe'], nsNames = ['cke', 'cke', null, null, null];
        for (var iTag = 0; iTag < tagNames.length; iTag++) {
            var elements = editor.document.getElementsByTag(tagNames[iTag], nsNames[iTag]);
            var nItems = elements.count();
            for (var iElm = 0; iElm < nItems; iElm++) {
                var element = elements.getItem(iElm);
                var properties = this.getPropertiesFromElement(element);
                var elFake = this.createMediaElement(editor, properties, true);
                // embedの親がobject, videoの場合、親と入れ替える。
                var elParent = element.getParent(), name = elParent.getName();
                elFake.replace(CKEDITOR.tools.indexOf(tagNames, name) >= 0 ? elParent : element);
            }
        }
    },

    /**
     * 要素からプロパティを取得する。
     *
     * @param {CKEDITOR.dom.element} element 対象要素
     * @returns {String} .url URL
     * @returns {String} .type 種類
     * @returns {String} .width 幅
     * @returns {String} .height 高さ
     */
    getPropertiesFromElement: function(element) {
        var props = { 'type': 'iframe' };
        var name = element.getName(), mime = element.getAttribute('type');
        if (name == 'video' || name == 'audio' || name == 'iframe') {
            props = { 'type': name };
        } else {
            for (var key in this.types) {
                if ((!!this.types[key].attrs && this.types[key].attrs.type == mime) || this.types[key].embedType == mime) {
                    props = { 'type': key };
                    break;
                }
            }
        }
        props.url = element.getAttribute(name == 'object' ? 'data' : 'src');
        props.width = element.getAttribute('width') || 320;
        props.height = element.getAttribute('height') || 240;
        return props;
    },

    /**
     * メディア用の要素を作成する。
     *
     * @param {CKEDITOR.editor} editor エディター
     * @param {String} properties.url URL
     * @param {String} properties.type 種類
     * @param {String} properties.width 幅
     * @param {String} properties.height 高さ
     * @param {Boolean} isFake trueならエディター置き換え用にする
     * @returns {CKEDITOR.dom.element}
     */
    createMediaElement: function(editor, properties, isFake) {
        var element = null, detail = this.types[properties.type || ''];
        if (!!detail && !!properties.url) {
            element = editor.document.createElement(detail.tagName);
            element.setAttribute('src', properties.url);
            // サイズ
            if (!detail.noSize) {
                if (properties.width > 0) {
                    element.setAttribute('width', properties.width);
                }
                if (properties.height > 0) {
                    element.setAttribute('height', properties.height);
                }
            }
            // 他の属性
            if (!!detail.attrs) {
                for (var name in detail.attrs) {
                    element.setAttribute(name, detail.attrs[name]);
                }
            }
            // Editor用
            if (isFake) {
                element = editor.createFakeElement(element, 'co-cke-media-placeholder ' + properties.type, 'media_' + properties.type, !detail.noSize);
            }
        }

        return element;
    },

    /**
     * 種類の選択肢を取得する。
     *
     * @returns {Array}
     */
    getTypeSelection: function() {
        var items = [];
        for (var value in this.types) {
            items.push([this.types[value].label, value]);
        }
        return items;
    }
});
