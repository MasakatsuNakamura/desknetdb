CKEDITOR.dialog.add( 'mediaDialog', function ( editor ) {
    var properties = {}, elPreviewFrame = null;
    var lc = editor.lang.common, lm = editor.lang.media;
    var urlRequired = CKEDITOR.dialog.validate.notEmpty(lm.urlMissing);
    var mediaNS = CKEDITOR.plugins.get('media');
    var htmlPreview = 
       '<div>' + 
           '<div class="co-cke-media-dialog-preview-title">' + lm.preview + '</div>' +
           '<div class="co-cke-media-dialog-preview-container">' +
             '<iframe class="co-cke-media-dialog-preview-body" src="' + mediaNS.path + 'dialogs/preview.html"></iframe>' +
           '</div>' +
       '</div>';

    //- 初期化 -----------------------------------------------------------------
    /**
     * 初期値を設定する関数を取得する。
     *
     * @param {String} propName 初期値取得元の属性名
     * @returns {Function}
     */
    function getDefaultSetter(propName) {
        return function (element) {
            this.setValue(properties[propName]);
        }
    }

    /**
     * サイズの入力欄の値を取得する。
     *
     * @param {String} id 要素ID
     * @param {String} invalidMessage 不正の場合のメッセージ
     * @returns {CKEDITOR.dialog.definition.textInput}
     */
    function getSizeInput(id, invalidMessage, options) {
        var opts = { 
            'type': 'text', 'id': id, 'label': lc[id], 
            'validate': CKEDITOR.dialog.validate.number(invalidMessage),
            'setup': getDefaultSetter(id)
        };

        if (!!options) { CKEDITOR.tools.extend(opts, options); }
        return opts;
    }

    /**
     * 切り替えボタンを取得する。
     *
     * @param {String} id 要素ID
     * @param {String[]} classes [offのクラス, onのクラス]
     * @param {String[]} titles [offのツールチップ, onのツールチップ]
     * @returns {CKEDITOR.dialog.definition.textInput}
     */
    function getToggleButton(id, classes, titles) {
        return {
            'type': 'html', 'id': id,
            'html': '<a ' +
                    'class="co-cke-media-dialog-button ' + id + ' ' + classes[0] + '" ' + 
                    'title="' + titles[0] + '"></a>',
            'onLoad': function(event) {
                var element = CKEDITOR.document.getById(this.domId);
                element.on('mouseover', function() { this.addClass('cke_btn_over'); });
                element.on('mouseout', function(){ this.removeClass('cke_btn_over'); });
                element.on('click', function(){
                    var state = this.hasClass(classes[1]), index = state ? 1 : 0;
                    this.removeClass(classes[index]);
                    this.addClass(classes[(index + 1) % 2]);
                    this.setAttribute('title', titles[(index + 1) % 2]);
                    properties[id] = state;
                });
            }
        }
    }

    //- 編集 -------------------------------------------------------------------
    /**
     * 入力値を変更するたびに呼ばれる。
     *
     * @param {CKEDITOR.dialog} dialog 親のダイアログ
     */
    function onChangeInput(dialog) {
        updateGuide(dialog);
        updateSize(dialog);
        updatePreview(dialog);
    }

    /**
     * 説明を更新する。
     *
     * @param {CKEDITOR.dialog} dialog 親のダイアログ
     */
    function updateGuide(dialog) {
        var isFrame = dialog.getValueOf('tab-basic', 'type') == 'iframe';
        var elGuide = dialog.getElement().findOne('.co-cke-media-type-guide');
        elGuide.setStyle('visibility', isFrame ? 'visible' : 'hidden');
    }

    /**
     * 幅と高さを更新する。(縦横比を固定したときの反映)
     *
     * @param {CKEDITOR.dialog} dialog 親のダイアログ
     */
    function updateSize(dialog) {
        var width = Number(dialog.getValueOf('tab-basic', 'width'));
        var height = Number(dialog.getValueOf('tab-basic', 'height'));
        if (width > 0 && height > 0 && properties.width > 0 && !!properties.height > 0 && properties.ratioLock) {
            if (properties.width != width && properties.height == height) {
                height = Math.floor(width / properties.width * properties.height);
                dialog.setValueOf('tab-basic', 'height', String(height));
            } else if (properties.width == width && properties.height != height) {
                width = Math.floor(height / properties.height * properties.width);
                dialog.setValueOf('tab-basic', 'width', String(width));
            }
        }
        properties.width = width;
        properties.height = height;
    }

    /**
     * プレビュー要素を取得する。
     *
     * @param {Function} callback プレビュー要素を引数に持つ関数
     */
    function getPreviewElement(callback) {
        if (!!elPreviewFrame.$.contentDocument && !!elPreviewFrame.$.contentDocument.body) { 
            callback(new CKEDITOR.dom.element(elPreviewFrame.$.contentDocument.body));
        } else {
            elPreviewFrame.once('load', function () {
                callback(new CKEDITOR.dom.element(elPreviewFrame.$.contentDocument.body));
            });
        }
    }

    /**
     * プレビューを更新する。
     *
     * @param {CKEDITOR.dialog} dialog 自身のダイアログ
     */
    function updatePreview(dialog) {
        getPreviewElement(function (elPreview){
            var elObject = elPreview.getChild(0);
            var type = dialog.getValueOf('tab-basic', 'type'), url = dialog.getValueOf('tab-basic', 'url');
            var detail = mediaNS.types[type || ''];

            // メディアの入れ替え
            if (properties.type != type || properties.url != url || !elObject) {
                properties.type = type;
                properties.url = url;
                if (!!elObject) { 
                    elObject.remove();
                    elObject = null;
                }
                if (!!type && !!url) {
                    elObject = mediaNS.createMediaElement(editor, properties, false);
                    elPreview.append(elObject); 
                }
            }
            // サイズの設定
            if (!!elObject && !detail.noSize) {
                elObject[properties.width > 0 ? 'setAttribute' :  'removeAttribute']('width', String(properties.width));
                elObject[properties.height > 0 ? 'setAttribute' :  'removeAttribute']('height', String(properties.height));
            }
        });
    }

    return {
        title: lm.title, minWidth: 480, minHeight: 360,
        contents: [
            {
                'id': 'tab-basic',
                'label': lm.basicSettings,
                'elements': [
                    { 'type': 'select', 'id': 'type', 'label': lm.type, 'items': mediaNS.getTypeSelection(), 'default': 'video', 'className': 'jco-cke-media-cascade-input', 'setup': getDefaultSetter('type') },
                    { 'type': 'text', 'id': 'url', 'label': 'URL', 'className': 'jco-cke-media-cascade-input', 'validate': urlRequired, 'setup': getDefaultSetter('url') },
                    { 'id': 'type_guide', 'type': 'html', 'className': 'co-cke-media-type-guide', 'html': lm.IframeMessage },
                    { 'type': 'hbox', 'widths': [ '', '360px' ], children: [
                        { 'type': 'hbox', 'widths': [ '', '24px' ], children: [
                            { 'type': 'vbox', children: [
                                getSizeInput('width', lm.validateWidth, {'default': '320', 'className': 'jco-cke-media-cascade-input'}),
                                getSizeInput('height', lm.validateHeight, {'default': '240', 'className': 'jco-cke-media-cascade-input'})
                            ]},
                            getToggleButton('ratioLock', ['cke_btn_locked', 'cke_btn_unlocked'], [lm.unlockRatio, lm.lockRatio])
                        ]},
                        { 'id': 'preview', 'type': 'html', 'html': htmlPreview }
                    ]}
                ]
            }
        ],

        /**
         * ダイアログ作成時の処理
         */
        onLoad: function() {
            var dialog = this, elInputs = null, nItems = 0, elInput = null, evName = '';
            // 初期値設定
            elPreviewFrame = dialog.getElement().findOne('.co-cke-media-dialog-preview-body');
            properties = {'ratioLock': true};
            // 変更イベント(select)
            elInputs = dialog.getElement().find('.jco-cke-media-cascade-input select');
            nItems = elInputs.count();
            for (var i = 0; i < nItems; i++) {
                elInputs.getItem(i).on('change', function (event){ onChangeInput(dialog); });
            }
            // 変更イベント(input)
            elInputs = dialog.getElement().find('.jco-cke-media-cascade-input input');
            nItems = elInputs.count();
            for (var i = 0; i < nItems; i++) {
                elInputs.getItem(i).on('blur', function (event){ onChangeInput(dialog); });
            }
        },

        /**
         * ダイアログ表示前の処理
         */
        onShow: function() {
            var dialog = this, element = editor.getSelection().getStartElement();
            var elFirstInput = dialog.getElement().findOne('input');
            if (!!element && String(element.getAttribute('data-cke-real-element-type')).indexOf('media') == 0) {
                var elTarget = editor.restoreRealElement(element);
                CKEDITOR.tools.extend(properties, mediaNS.getPropertiesFromElement(elTarget), true);
                this.setupContent(elTarget);
            } else {
                CKEDITOR.tools.extend(properties, {'type': '', 'url': '', 'width': 0, 'height': 0}, true);
            }
            // URL欄をフォーカス
            elFirstInput.focus(); // iPadでSELECTのドロップダウンが出ないようにする
            setTimeout(function() { elFirstInput.focus(); }, 1); // IEは表示後にフォーカス
            // プレビューの初期化
            getPreviewElement(function (elPreview) {
                elPreview.setHtml('');
                updateGuide(dialog);
                updateSize(dialog);
                updatePreview(dialog);
            });
        },

        /**
         * 決定ボタンを押したときの処理
         */
        onOk: function() {
            var element = mediaNS.createMediaElement(editor, properties, true);
            editor.insertElement(element);
        }
    };
});