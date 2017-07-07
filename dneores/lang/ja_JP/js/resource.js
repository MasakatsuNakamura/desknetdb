var app = app ? app : {};
var neo = neo ? neo : {};
var desknets = desknets ? desknets : {};

/// <summary>文言</summary>
if (!neo.Resource) {
    neo.Resource = {};
}
if (!neo.Resource.ajax) {
    neo.Resource.ajax = {};
}
$.extend(neo.Resource.ajax, {
    '400_errorMessage' : 'W:この処理は完了しているか手順を踏まえていない可能性があります。 作業を中断し、最初からやり直してください。',
// ブラウザが勝手に認証ダイアログを表示するので403に統括    "401_errorMessage" : "W:認証できませんでした。再度ログインしてください。",
    '403_errorMessage' : 'W:要求された処理にアクセスできません。<br/>権限の変更が発生したかセッションが切れた可能性があります。作業を中断し、最初からやり直してください。',
    '404_errorMessage' : 'URLが間違っている可能性があります。',
    '408_errorMessage' : 'W:データベースサーバーが混み合っています。しばらく待ってから再度実行してください。',
    '409_errorMessage' : 'データベースが停止している、または作業領域にアクセス権がない等、サーバーで異常が発生しました。システム管理者に問い合わせてください。',

    '500_errorMessage' : 'サーバーで異常が発生しました。システム管理者に問い合わせてください。',

    // Webサーバーの接続制限に達した
    '503_errorMessage' : 'W:サーバーが混み合っています。しばらく待ってから再度実行してください。',

    '504_errorMessage' : 'サーバーでタイムアウトが発生しました。',

    // Webサーバーが停止しているときに発生
    'errorMessage' : 'サーバーが停止しているか、ネットワークが込み合っている可能性があります。[{{status}}]'
});

if (!neo.Resource.dateTime) {
    neo.Resource.dateTime = {};
}
$.extend(neo.Resource.dateTime, {
    /* 短い月の名前 */
    'shortMonthes': ['1','2','3','4','5','6','7','8','9','10','11','12'],
    /* 長い月の名前 */
    'longMonthes': ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    /* 短い週の名前(日曜日から) */
    'shortWeeks': ['日','月','火','水','木','金','土'],
    /* 長い週の名前(日曜日から) */
    'longWeeks': ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    /* 午前/午後 */
    'periods': ['午前','午後']
});

/// <summary>文言</summary>
if (!desknets.Resource) {
    desknets.Resource = {};
}
$.extend(desknets.Resource, {
      'code': 'ja_JP'
/*
ダイアログのタイトル
*/
    , 'errorDefaultTitle'   : 'エラー'
    , 'warnDefaultTitle'    : '警告'
    , 'confirmDefaultTitle' : '確認'
    , 'messageDefaultTitle' : 'メッセージ'

/*
ダイアログのボタン
*/
    , 'CloseButtonLabel': '閉じる' // 参照系ダイアログの確認ボタン
    , 'OKButtonLabel': 'OK' // 選択、変更系ダイアログの決定ボタン
    , 'CancelButtonLabel': 'キャンセル' // 選択、変更系ダイアログの取り消しボタン
    , 'ConfOKButtonLabel': 'はい' // 確認ダイアログの肯定ボタン
    , 'ConfCancelButtonLabel': 'いいえ' // 確認ダイアログの否定ボタン
/*
ソート
*/
    , 'listSortableCountFormat': '{{count}}件選択中'
/**
 よく使う文言
 */
   , 'closeLabel': '閉じる'
   , 'openLabel': '開く'
   , 'allLabel': 'すべて'
   , 'nothingLabel': 'なし'
   , 'nameLabel': '名称'
   , 'searchLabel': '検索'
   , 'addLabel' : '追加'
   , 'modLabel': '変更'
   , 'editLabel': '編集'
   , 'saveLabel': '保存'
   , 'delLabel' : '削除'
   , 'cancelLabel': 'キャンセル'
   , 'selectLabel': '選択'
   , 'deselectLabel': '選択を解除'
   , 'abortLabel' : '中止'
   , 'confirmedLabel': '確認済み'
   , 'showLabel': '表示'
   , 'hideLabel': '非表示'
   , 'kara': '～'
   , 'comma': '、'
   , 'setAccess': 'アクセス権設定'
   , 'selItemDlgTitle': 'ユーザー／組織／ロール選択'
   , 'modRight': '権限変更'
   , 'acceccOpen': '参照'
   , 'acceccAdd': '追加'
   , 'acceccMod': '変更'
   , 'acceccDel': '削除'
   , 'attachLabel':'添付'
   , 'setnot': '設定なし'
   , 'enable': '有効'
   , 'disables': '無効'
   , 'capaenable': '制限する'
   , 'capadisables': '制限しない'
   , 'importance_highest': '緊'
   , 'importance_high': '高'
   , 'importance_low': '低'
   , 'optionSelect' : '▼選択'
   , 'members': '{{members}}人'
   , 'searchcond': '検索条件'
   , 'preview': 'プレビュー'
   , 'shortprivate': '[個]'
   , 'prevmonth': '前月'
   , 'nextmonth': '翌月'
   , 'prevyear': '前年'
   , 'nextyear': '翌年'
   , 'today': '今日'
   , 'week': '週'
   , 'year': '年'
   , 'UserSelDlgTitle_UserRole': 'ユーザー／ロール選択'
   , 'NoSetData': '未設定'

/**
 管理者設定
 */
   , 'setAdminTarget': '管理対象設定'
   , 'setAdminAllUser': 'すべて'
   , 'setAdminAssignOnly': '所属組織のみ'
   , 'setAdminSelectGroup': '選択した組織'
   , 'setAdminSelectGroupDialog': '管理対象組織選択'

/**
 画面部品
 */
   , 'processingLabel': '処理中...'
/**
 レイアウト
 */
   , 'resizeWidthLabel': '幅を変更'
   , 'resizeHeightLabel': '高さを変更'
   , 'resizeOpenLabel': '開く'
   , 'resizeCloseLabel': '閉じる'
/**
 各設定値
 */
   , 'allow': '許可する'
   , 'disallow': '許可しない'
   , 'unlimited': '無期限'
   , 'nolimited': '制限なし'

/**
 日時関連
 */
// date format start	←このコメントは削除しないでください
   , 'dateFormat': 'yyyy/MM/dd'
   , 'dateTimeFormat': 'yyyy/MM/dd HH:mm'
   , 'dateTimeFormatWithSecond': 'yyyy/MM/dd HH:mm:ss'
   , 'timeFormat': 'HH:mm'
   , 'longYMFormat': 'yyyy年MM月'
   , 'longYMDFormat' : 'yyyy年MM月dd日'     // キャビネットの更新日過去検索時のタイトル表記で使用
   , 'longDateFormat': 'yyyy年MM月dd日(E)'
   , 'longDateTimeFormat': 'yyyy年MM月dd日(E) HH:mm'
   , 'longMDFormat': 'MM月dd日(E)'
   , 'longMDFormatBirthday': 'MM月dd日'
   , 'longDayFormat': 'd(E)'
   , 'shortYMFormat': 'yyyy/MM'
   , 'shortDateFormat': 'MM/dd'
   , 'shortDateTimeFormat': 'MM/dd HH:mm'
   , 'shortTimeFormat': 'HH:mm'             // 他言語を考慮しtimeFormatと分けた
   , 'serverTime': 'yyyy/MM/dd HH:mm'
   , 'longSchTimeFormat24': 'kk:mm'         // 24時表記
   , 'shortSchTimeFormat24': 'kk:mm'        // 24時表記(他言語を考慮)
   , 'dateFormat_dd'  : 'dd(E)'
   , 'dateFormat_mmdd': 'MM/dd(E)'
   , 'timePickerHourFormat': '{{hour}}時'       // {{hour}}=時間(上限なし) 時間選択(いつ)
   , 'timePickerHourSpanFormat': '{{hour}}時間' // {{hour}}=時間(上限なし) 時間選択(長さ)
   , 'timePickerMinuteFormat': 'm分'            // 時間選択
// date format end	←このコメントは削除しないでください
// datepicker format start	←このコメントは削除しないでください(http://docs.mobiscroll.com/283/datetime#opt-dateOrder)
   , 'scrFormat_date': 'yy/mm/dd'           // スマホ版日付選択プラグインの初期設定で使用(表示形式)
   , 'scrFormat_dateorder': 'yymmdd'        // スマホ版日付選択プラグインの初期設定で使用(入力形式)
   , 'scrFormat_time': 'HH:ii'              // スマホ版時間選択プラグインの初期設定で使用(表示形式)
   , 'scrFormat_timewheels': 'HHii'         // スマホ版時間選択プラグインの初期設定で使用(入力形式)
   , 'dateFormat4': 'yy/mm/dd'              // 年4桁 フロー系書式で使用
   , 'dateFormat2': 'y/mm/dd'               // 年2桁 フロー系書式で使用
// datepicker format end	←このコメントは削除しないでください

/**
 アラーム関連
 */
   , 'alarmDayLabel': '{{num}}日'
   , 'alarmHourLabel': '{{num}}時間'
   , 'alarmMinuteLabel': '{{num}}分'

/**
 添付
 */
   , 'attachTitle': '添付ファイル'
   , 'attachInvSize': '紛失'
/**
 認証
 */
   , 'setAdminAuthTitle': '管理者パスワードの入力'
   , 'loginRePwdTitle': 'パスワード変更'
   , 'loginLicenseTitle': 'ライセンス設定'
/**
 ユーザー情報
 */
   , 'userLevel_0': '一般ユーザー'
   , 'userLevel_1': 'システム管理者'
   , 'userGender_m': '男性'
   , 'userGender_f': '女性'

/**
  プロフィールダイアログ
 */
   , 'profUserTitle': 'プロフィール'
   , 'profGroupTitle': '組織'

/**
 項目値に付加する文字列
 */
   , 'com_overitemcnt': '…'        // 一項目に表示する最大アイテム数 を超えた場合に項目値の末尾に付加する
/**
 キャビネット連携
 */
   , 'com_cab' : 'キャビネット'
/**
 検索
 */
    , 'com_srch_noset': '検索条件'
    , 'com_srch_keyword': 'キーワード'
/**
 回覧レポート
 */
    , 'setcreport': '回覧・レポート'
    , 'setprivate': '（個人）'
    , 'routetitle': '通知先選択'
 /**
 共有リンク
 */
   , 'com_share_title' : '共有'
   , 'com_share_mail' : 'メール'
   , 'com_share_ntwi' : 'つぶやき'
   , 'com_share_dm': 'ダイレクトメッセージ'
   , 'com_share_url': 'URL'
 /**
 ブラウザのタイトル
 */
   , 'com_page_title' : '新着{{count}}件'
});

/// <summary>Neo Twi文言</summary>
if (!desknets.Resource.ntwi) {
    desknets.Resource.ntwi = {};
}
$.extend(desknets.Resource.ntwi, {
  'andNItemsLabel': '他{{count}}件',
  'toDoItemsLabel': '期限:今日 {{count}}件',
  'toDoExpiredLabel': '期限切れ {{othercnt}}件',
  'readByMeLabel': '既読',
  'readByYouLabel': '開封',
  'cabinetMessageTitle': '{{name}}({{start}}～{{end}})',
  'advancedSearchLabel': '検索条件入力',
  'surlClick': '{{click_cnt}}クリック',
  'urlShorten': '上記のURLを短縮しました',
  'urlShortenExist': '作成済みの短縮URLを表示しました',
  'stamprefTitle': 'カテゴリー参照',
  'stampselTitle': 'カテゴリー選択',
  'stampDLButtonLabel': 'ダウンロード',
  'historyLabel': '履歴'
});

/// <summary>付箋共通文言</summary>
if (!desknets.Resource.tags) {
    desknets.Resource.tags = {};
}
$.extend(desknets.Resource.tags, {
  'deleteTagLabel': 'はがす',
  'hideTagLabel': 'とじる',
  'memofromLabel': '{{nameNode}}さんから',
  'color1': '青',
  'color2': '緑',
  'color3': '黄色',
  'color4': '桃色',
  'color5': '赤',
  'color6': '灰色'
});

/// <summary>ファイル選択</summary>
if (!desknets.Resource.rtfile) {
    desknets.Resource.rtfile = {};
}
$.extend(desknets.Resource.rtfile, {
  'title': 'ファイルの挿入',
  'insertLabel': '挿入',
  'sizingLabel': '{{name}}({{width}}×{{height}})',
  'msgInputHere': '入力してください',
  'msgStartApplyFilter': 'フィルターの適用には時間がかかる場合があります。',
  'errCanvasSizeLimitSmall': 'これ以上小さくできません。',
  'errCanvasSizeLimitLarge': 'これ以上大きくできません。',
  'errTooManyObjectSelected': '申し訳ありませんが、同時に編集できる図形は{{count}}個までです。',
  'confReset': 'リセットします。よろしいですか？',
  'title_imagemod': '画像を編集',
  'maximize': '最大化',
  'restore': '元に戻す（縮小）',
});

/// <summary>組織・ユーザー選択ダイアログ共通文言</summary>
if (!desknets.Resource.chooser) {
    desknets.Resource.chooser = {};
}
$.extend(desknets.Resource.chooser, {
  'singleGroupTitle': '組織選択',
  'singleGroupTitle_p': '組織/個人グループ選択',
  'allGroupName': '(すべて)',
  'allUserName': '(すべてのユーザー)',
  'unassignGroupName': '(組織に属さない)',
  'suspensionGroupName': '(使用停止中)',
  'loginlockGroupName': '(ログイン拒否中)',
  'deletedUsersGroupName': '(削除済み)',
  'allDescendantsLabel': '下位も含む',
  'offDescendantsLabel': '下位は除く',
  'descendantUsersLabel': 'この組織以下のユーザーをすべて追加',
  'privateGroupUsersLabel': 'この個人グループのユーザーをすべて追加'
});

/// <summary>フォルダ一覧系共通文言</summary>
if (!desknets.Resource.folderlist) {
    desknets.Resource.folderlist = {};
}
$.extend(desknets.Resource.folderlist, {
  'menuFolderSet': '設定',
  'menuFolderAdd': 'フォルダの作成',
  'menuFolderMod': 'フォルダの変更',
  'menuFolderAcc': 'アクセス権設定',
  'menuFolderDel': 'フォルダの削除',
  'accessConf':'アクセス権変更確認',
  'moveDest': '移動先'
});

/**
 * @class ラベル系共通文言
 */
/// <summary>ラベル系共通文言</summary>
if (!desknets.Resource.PageLabelList) {
    desknets.Resource.PageLabelList = {};
}
$.extend(desknets.Resource.PageLabelList, {
    'menuLabelAdd': 'ラベルの追加'
  , 'menuLabelMod': 'ラベルの変更'
  , 'menuLabelDel': 'ラベルの削除'
});

/// <summary>容量文言</summary>
if (!desknets.Resource.capacity) {
    desknets.Resource.capacity = {};
}
$.extend(desknets.Resource.capacity, {
    'UseCapacity' : '使用容量'
  , 'FreeCapacity': '空き容量'
  , 'Capacity'    : '容量'
  , 'LessThanOne' : '1%未満'
});

/// <summary>フォルダ選択共通文言</summary>
if (!desknets.Resource.folderselect) {
    desknets.Resource.folderselect = {};
}
$.extend(desknets.Resource.folderselect, {
    'dialogTitleFolderSelect': 'フォルダ選択'
  , 'folderGoParent': '上のフォルダ一覧に移動'
  , 'folderRoot': 'ルート'
  , 'folderRootReal': 'ルートフォルダ'
});

/// <summary>インポート・エクスポート共通</summary>
if (!desknets.Resource.ImEx) {
    desknets.Resource.ImEx = {};
}
$.extend(desknets.Resource.ImEx, {
    'charCode0': 'シフトJIS'
  , 'charCode1': 'BOMなしUTF8'
  , 'charCode2': 'BOM付きUTF8'
  , 'charSep0': 'カンマ'
  , 'charSep1': 'タブ'
  , 'exportConfig': 'エクスポート設定'
});

/// <summary>メニュー文言</summary>
if (!desknets.Resource.menu) {
    desknets.Resource.menu = {};
}
$.extend(desknets.Resource.menu, {
    'groupCreateTitle': 'メニューグループの追加',
    'groupModifyTitle': 'メニューグループの変更',
    'targetSelfLabel': '同一',
    'targetBlankLabel': '別'
});

/// <summary>スマホ関連</summary>
if (!desknets.Resource.sp) {
    desknets.Resource.sp = {};
}
$.extend(desknets.Resource.sp, {
    'search': '検索中'
  , 'searchstop': '検索中止'
  , 'profdisabled': '現在プロフィールは表示できません。'
});

/// <summary>メッセージリソース</summary>
if (!desknets.Resource.Message) {
    desknets.Resource.Message = {};
}
$.extend(desknets.Resource.Message, {

//-----------------------------------------------------------
// 共通
//-----------------------------------------------------------
    'com_search' : 'M:検索中です...'
    , 'com_itemnothing_listreload': 'W:該当データが存在しません。一覧画面を再読み込みしてください。'
    , 'com_copy_attachsize_over': 'M:添付ファイルのサイズが制限を超えたため、添付できませんでした。'
    , 'com_copy_attachs_missing': 'M:添付ファイルのコピーに失敗しました。<br />人為的もしくはアンチウィルス等の外部プログラムに削除された可能性があります。添付ファイルを再度選択してください。'
    , 'com_accs_otherto_add': 'M:追加権限のないユーザーは除外しました。'
    , 'com_datechk_fromto': 'W:期間が不正です。 '
    , 'com_datechk_fromto_item': 'W:{{item}}に指定された期間が不正です。 '
    , 'com_datechk_fromto_required': 'W:期間が未入力です。'
    , 'com_invalid_number': 'W:半角の数値を入力してください。'
    , 'com_invalid_date': 'W:日付が不正です。'
    , 'com_underflow_date': 'W:日付を{{value}}以後にしてください。'
    , 'com_overflow_date': 'W:日付を{{value}}以前にしてください。'
    , 'com_minus_data': 'W:正の値を入力してください。'
    , 'com_dialog_execmsg': '{{msg}}<br />しばらくお待ちください。'
    , 'com_dialog_execaddmsg': '<span class="dn-loading-message">読込中</span>'
    , 'com_search_nokey': '検索条件を指定してください。'
//-----------------------------------------------------------
// 削除共通
//-----------------------------------------------------------
    , 'com_del_nochecked': '削除対象を選択してください。'
    , 'com_del_allconf': 'すべてを削除してよろしいですか？'
    , 'com_del_someconf': '表示中の{{count}}件を削除してよろしいですか？'
    , 'com_del_listconf': '選択した{{count}}件を削除してよろしいですか？'
    , 'com_del_conf': '削除してよろしいですか？'
    , 'com_sel_nochecked': '解除対象を選択してください。'
//-----------------------------------------------------------
// 移動共通
//-----------------------------------------------------------
    , 'com_move_allconf': 'すべてを移動してよろしいですか？'
    , 'com_move_someconf': '表示中の{{count}}件を移動してよろしいですか？'
    , 'com_move_listconf': '選択した{{count}}件を移動してよろしいですか？'
//-----------------------------------------------------------
// 表示順変更共通
//-----------------------------------------------------------
    , 'com_move_nochecked': '移動対象を選択してください。'
    , 'com_move_allchecked': 'すべてを選択した状態での表示順変更はできません。このページ内で移動対象を選択してください。'
    , 'com_move_conf': '移動してよろしいですか？'
//-----------------------------------------------------------
// インポート共通
//-----------------------------------------------------------
    , 'com_import_nofile': 'インポートファイルを選択してください。'
    , 'com_import_nowexec': 'インポート中です。'
    , 'com_import_end': 'インポートが完了しました。'
//-----------------------------------------------------------
// フォルダ共通
//-----------------------------------------------------------
    , 'com_folder_del' : '[{{FolderName}}]を削除しますか？'
    , 'com_folder_move': '[{{FolderName}}]を移動しますか？'
    , 'com_folder_errlist': 'E:画面の要素の取得に失敗しました。画面を再読み込みしてください。'
    , 'com_folder_accsauth': 'アクセス権を設定可能でないユーザー、組織、ロールは追加されませんでした。'
    , 'com_folder_listdrag': '{{count}}件選択中'

//-----------------------------------------------------------
// ラベル共通
//-----------------------------------------------------------
    , 'com_label_del' : '[{{LabelName}}]を削除しますか？'
    , 'com_label_datamod' : 'ラベルを変更しますか？'
    , 'com_label_datadel' : 'ラベルをはがしますか？'
//-----------------------------------------------------------
// 管理者設定共通
//-----------------------------------------------------------
    , 'com_set_nochecked': '設定対象を選択してください。'
//-----------------------------------------------------------
// 有効 無効共通
//-----------------------------------------------------------
    , 'com_enable_nochecked': '有効にする対象を選択してください。'
    , 'com_enable_allconf': 'すべてを有効にしてよろしいですか？'
    , 'com_enable_someconf': '表示中の{{count}}件を有効にしてよろしいですか？'
    , 'com_enable_listconf': '選択した{{count}}件を有効にしてよろしいですか？'
    , 'com_disenable_nochecked': '無効にする対象を選択してください。'
    , 'com_disenable_allconf': 'すべてを無効にしてよろしいですか？'
    , 'com_disenable_someconf': '表示中の{{count}}件を無効にしてよろしいですか？'
    , 'com_disenable_listconf': '選択した{{count}}件を無効にしてよろしいですか？'

//-----------------------------------------------------------
// 制限する 制限しない共通
//-----------------------------------------------------------
    , 'com_capaenable_nochecked': '制限する対象を選択してください。'
    , 'com_capaenable_allconf': 'すべてを制限してよろしいですか？'
    , 'com_capaenable_someconf': '表示中の{{count}}件を制限してよろしいですか？'
    , 'com_capaenable_listconf': '選択した{{count}}件を制限してよろしいですか？'
    , 'com_capadisenable_nochecked': '制限しない対象を選択してください。'
    , 'com_capadisenable_allconf': 'すべてを制限しないにしてよろしいですか？'
    , 'com_capadisenable_someconf': '表示中の{{count}}件を制限しないにしてよろしいですか？'
    , 'com_capadisenable_listconf': '選択した{{count}}件を制限しないにしてよろしいですか？'

//-----------------------------------------------------------
// 検索共通
//-----------------------------------------------------------
    , 'com_search_required': '{{item}}を指定してください。'
    , 'com_search_nowexec': '検索中です。'
    , 'com_search_keyword' : 'W:キーワードを入力してください。'
    , 'com_search_keyword_toolarge': 'キーワードの文字数が制限を越えました。127文字まで入力できます。'
    , 'com_search_keyword_toolarge_short': 'キーワードの文字数が制限を越えました。63文字まで入力できます。'

//-----------------------------------------------------------
// インポート、エクスポート共通
//-----------------------------------------------------------
    , 'com_exportnoselect': 'W:エクスポート対象を選択してください。'

//-----------------------------------------------------------
// 検索共通
//-----------------------------------------------------------
    , 'com_attachlist_confirm_one': '選択したファイルを解除します。よろしいですか？'
    , 'com_attachlist_confirm_all': 'すべてのファイルを解除します。よろしいですか？'

//-----------------------------------------------------------
// 選択ダイアログ
//-----------------------------------------------------------
    , 'com_chooser_note': '※ 下部が選択中の一覧です。[OK]ボタンを押すと確定します。'
    , 'com_chooser_note_single': '※ 右の一覧から選択したいものを選び、[OK]ボタンを押してください。'
    , 'com_chooser_required_group': 'W:組織を選択してください。'
    , 'com_chooser_required_user': 'W:ユーザーを選択してください。'
    , 'com_chooser_required_user_group': 'W:組織またはユーザーを選択してください。'
    , 'com_chooser_required_group_folder': 'W:フォルダを選択してください。'
    , 'com_chooser_required_role': 'W:ロールを選択してください。'
    , 'com_chooser_no_groups': 'W:選択できる組織がありません。'

//-----------------------------------------------------------
// 設定系共通
//-----------------------------------------------------------
    , 'com_setting_beforeentry_msg': '設定されたデータは保存されていません。'
    , 'com_setting_changed': 'M:設定を変更しました。'

//-----------------------------------------------------------
// 登録共通
//-----------------------------------------------------------
    , 'com_input_beforeentry_msg': '入力されたデータは保存されていません。'
    , 'com_input_beforeentry_autosave_msg': '自動保存を行っておりますが、入力されたデータがすべて保存されていない可能性があります。'
    , 'com_input_beforeentry_addmsg': 'このページから他のページに移動しますか？<br />続行する場合は[はい]をクリックし、現在のページから他のページに移動しない場合は[いいえ]をクリックしてください。'

//-----------------------------------------------------------
// 伝言(共通機能)
//-----------------------------------------------------------
    , 'com_memo_confirm_to_read': '伝言を確認済みにします。'
    , 'com_memo_not_peel': '付箋は残しておく'
    , 'com_memo_peel': '付箋も一緒にはがす'
    , 'com_memo_delete': '伝言を削除する'
    , 'com_memo_dialogtitle': '伝言の作成'
    , 'com_memo_where_schmore': '(他{{morecnt}}件の予定)'

//-----------------------------------------------------------
// 通知共通
//-----------------------------------------------------------
    , 'com_notice_settransmit': '<br />[<a href="{{module}}?cmd={{cmd}}">プロフィールの変更</a>]で通知メールアドレスを設定してください。'

//-----------------------------------------------------------
// ページ替え共通
//-----------------------------------------------------------
    , 'com_listchk_cnt_some_disp': 'このページ内の{{num}}件すべてが選択されています。'
    , 'com_listchk_cnt_all_link': '{{num}}件すべてを選択'
    , 'com_listchk_cnt_all_disp': '{{num}}件すべてが選択されています。'
    , 'com_listchk_cnt_move': '{{num}}件を選択しています。移動先をクリックしてください。'

//-----------------------------------------------------------
// webクリップ
//-----------------------------------------------------------
    , 'com_webclip_error': 'クリップ機能のロードに失敗しました。desknetsサーバーへのネットワークが未接続の可能性があります。'
    , 'com_webclip_secure_error': 'httpsのコンテンツをクリップする為には、desknetsサーバーもhttpsの必要があります。'
    , 'com_webclip_unsupported_error': 'サポート対象外のブラウザの為、クリップできません。'

//-----------------------------------------------------------
// NeoTwi
//-----------------------------------------------------------
    , 'ntwi_new_item_memo': '{{detail}}'
    , 'ntwi_new_item_todo': '「{{detail}}」の期限が近づいています。'
    , 'ntwi_new_item_todo_end': '「{{detail}}」の期限が過ぎています。'
    , 'ntwi_new_item_mail': '新着メールを受信しました。'
    , 'ntwi_new_item_creport': '「{{detail}}」が届きました。'
    , 'ntwi_new_item_flow': '「{{detail}}」が届きました。'
    , 'ntwi_new_item_enq': '「{{detail}}」が届きました。'
    , 'ntwi_new_item_forum': '「{{detail}}」に新しい投稿がありました。'
    , 'ntwi_new_item_safety': '{{detail}}'
    , 'ntwi_new_item_info': '{{detail}}'
    , 'ntwi_new_item_info_approval': '{{detail}}'
    , 'ntwi_new_item_-1': '{{target}}'
    , 'ntwi_no_stamps': 'W:使用できるスタンプがありません。'
    , 'ntwi_confirm_to_post': 'この内容で投稿してよろしいですか？'
    , 'ntwi_ntwi_required': 'W:投稿を入力、又は添付ファイルを選択してください。'
    , 'ntwi_ntwi_too_long': 'W:投稿内容の入力文字数がオーバーしています。'
    , 'ntwi_message_required': 'W:メッセージを入力、又は添付ファイルを選択してください。'
    , 'ntwi_message_too_long': 'W:メッセージの入力文字数がオーバーしています。'
    , 'ntwi_message_to_required': 'W:宛先を選択してください。'
    , 'ntwi_complete_talk': 'M:つぶやきを投稿しました。'
    , 'ntwi_complete_message': 'M:ダイレクトメッセージを送信しました。'
    , 'ntwi_surl_entryconf': '既に同じURLが短縮URLとして作成されています。新たに短縮URLを作成しますか？'
    , 'ntwi_surl_entryconf_extra': '「いいえ」を選択すると、作成済みの短縮URLが表示されます。'
    , 'ntwi_stamp_delconf': 'スタンプを削除すると、既に使用しているスタンプが表示されなくなります。'
    , 'ntwi_stampdl_selectnothing': 'W:ダウンロード対象のスタンプがありません。'
    , 'ntwi_stampdl_nowexec': 'ダウンロード中です。'
    , 'ntwi_stampdl_finish': 'M:ダウンロードが完了しました。'  // ダウンロード正常終了
    , 'ntwi_stampdl_stop': 'M:ダウンロードを中断しました。'    // ダウンロードを中断して正常終了
    , 'ntwi_message_confirm_to_delete': '表示中のユーザーとのすべてのダイレクトメッセージを削除してよろしいですか？'
    , 'ntwi_confirm_to_close': '{{name}}に入力されたデータは保存されていません。<br />ネオツイを閉じてよろしいですか？'
    , 'ntwi_sp_send_stamp': 'M:スタンプを送信しました。'
    , 'ntwi_sp_send_emoji': 'M:絵文字を送信しました。'

//-----------------------------------------------------------
// 付箋
//-----------------------------------------------------------
    , 'tag_memo_truncated_shown': '伝言一覧に遷移しますか？'
    , 'tag_confirm_to_delete': '付箋をはがしますか？'

//-----------------------------------------------------------
// リッチテキストファイル選択
//-----------------------------------------------------------
    , 'rtfile_no_cabinet_folder': 'W:キャビネットにフォルダがありません。<br />{{cabinet}}からフォルダを作成してください。'
    , 'rtfile_no_image': 'W:ファイルを選択してください。'
    , 'rtfile_any_image_not_added': '一部の画像が追加されませんでした。'

//-----------------------------------------------------------
// メニュー
//-----------------------------------------------------------
    , 'com_menu_move_without_save': '変更されたパレットメニューは保存されていません。'

//-----------------------------------------------------------
// カレンダー
//-----------------------------------------------------------
    , 'cal_targetdate_recurrence': 'これは定期的な予定です。'
    , 'cal_targetdate_dates': 'これは不定期な予定です。'
    , 'cal_targetdate_message_mod': '変更する対象を以下から選択して「OK」ボタンを押してください。<br />「キャンセル」ボタンを押下した場合は、操作を取り消します。 '
    , 'cal_targetdate_message_del': '削除する対象を以下から選択して「OK」ボタンを押してください。<br />「キャンセル」ボタンを押下した場合は、操作を取り消します。 '
    , 'cal_targetdate_choice_1': '{{date}}の予定のみ'
    , 'cal_targetdate_choice_2': '{{date}}以降の予定'
    , 'cal_targetdate_choice_3': 'すべての予定'
    , 'cal_deltargets_all': 'この予定は複数のユーザーまたは設備に登録されている予定です。<br />登録先や利用設備に指定されている予定もすべて削除しますがよろしいですか？'

//-----------------------------------------------------------
// 共有リンク
//-----------------------------------------------------------
    , 'share_confirm': '短縮URLを発行します。よろしいですか？'
    , 'share_popmsg_copy': 'コピーしてご利用ください。'

//-----------------------------------------------------------
// 個人設定
//-----------------------------------------------------------
    , 'pset_del_usericon': 'プロフィールの変更は完了しました。画像を削除しますが、よろしいですか？'

//-----------------------------------------------------------
// ポータル設定
//-----------------------------------------------------------
    , 'portalset_folder_delconfadd': 'フォルダ内のブックマーク、サブフォルダも削除されます。'
    , 'portalset_no_menu_contents': 'W:メニューコンテンツを選択してください。'

//-----------------------------------------------------------
// スケジュール
//-----------------------------------------------------------
    , 'sch_free_usetime': 'W:利用時間が長すぎます。選択した設備の利用制限を確認してください。'
    , 'sch_guide_open_noperm': 'M:参照権限のないユーザーは対象から除外しました。'
    , 'sch_guide_import_noperm': 'M:追加権限のないユーザーは選択できません。'
    , 'sch_guide_add_noperm': 'M:追加権限のないユーザーまたは設備は対象から除外しました。'
    , 'sch_confirm_admit': '承認してよろしいですか？'           // スマホ版で使用
    , 'sch_confirm_denial': '否認してよろしいですか？'
    , 'sch_msetaccentry_noperm': 'M:管理できる組織に所属するユーザーのみアクセス権の設定が可能です。<br />設定できないユーザーは対象から除外しました。'
    , 'sch_visitor_no_locations': 'W:応対場所を追加してから来訪者の設定を行なってください。'
    , 'sch_visitor_no_details': 'W:会社名（部署名）か氏名を入力してください。'
    , 'sch_freetargetselect': 'W:検索対象を選択してください。'
    , 'sch_userselectover': 'M:最大選択ユーザー数を超えたため、100ユーザーまでの予定を表示します。'
    , 'sch_userselectnotview': 'M:参照権限のないユーザーは対象から除外しました。'
    , 'sch_checkselectover': 'W:絞り込み可能なユーザー数は100ユーザーまでです。'
    , 'sch_no_permit_users': 'W:閲覧を許可するユーザーを選択してください。'
    , 'sch_free_no_available': 'W:予約可能な設備がありません。検索対象設備の予約状況、設備の制限及び追加権限を確認してください。'
    , 'sch_free_available_exist': '検索対象設備のうち、以下の設備が予約可能です。<br/>{{plantnames}}<br/><br/>上記の設備に予定を追加しますか？'

//-----------------------------------------------------------
// 設備予約
//-----------------------------------------------------------
    , 'plant_selectover': 'M:最大選択設備数を超えたため、100設備までの予定を表示します。'
    , 'plant_checkselectover': 'W:絞り込み可能な設備数は100設備までです。'
//-----------------------------------------------------------
// ToDo
//----------------------------------------------------------
    , 'todo_attach_entrydel': '登録者のタスクが削除されたため、添付ファイルを参照することができません。'
    , 'todo_end_nochecked': '完了にするタスクを選択してください。'
    , 'todo_end_allconf': 'すべてを完了にしてよろしいですか？'
    , 'todo_end_someconf': '表示中の{{count}}件を完了にしてよろしいですか？'
    , 'todo_end_listconf': '選択した{{count}}件を完了にしてよろしいですか？'
//-----------------------------------------------------------
// 伝言・所在
//-----------------------------------------------------------
    , 'memo_readed_nocecked': '確認済みにする伝言を選択してください。'
    , 'memo_readed_allconf': 'すべてを確認済みにしてよろしいですか？'
    , 'memo_readed_someconf': '表示中の{{count}}件を確認済みにしてよろしいですか？'
    , 'memo_readed_listconf': '選択した{{count}}件を確認済みにしてよろしいですか？'
    , 'memo_deltag_nocecked': '付箋をはがす伝言を選択してください。'
    , 'memo_deltag_allconf': 'すべての付箋をはがしてよろしいですか？'
    , 'memo_deltag_someconf': '表示中の{{count}}件の付箋をはがしてよろしいですか？'
    , 'memo_deltag_listconf': '選択した{{count}}件の付箋をはがしてよろしいですか？'
    , 'memo_addmsg_senddel': '登録先の伝言も削除されます。'

//-----------------------------------------------------------
// キャビネット連携
//-----------------------------------------------------------
    , 'com_cab_regist': 'キャビネットに追加します。よろしいですか？'
    , 'com_cab_finregist': 'キャビネットのフォルダ（{{FolderName}}）に追加しました。'
    , 'com_cab_folderadd': '{{cabinet}}からフォルダを作成してください。'

//-----------------------------------------------------------
// 機能間連携
//-----------------------------------------------------------
    , 'com_open_mailadd': 'メール作成画面を開きます。よろしいですか？'
    , 'com_open_schadd': 'スケジュールの予定の追加画面を開きます。よろしいですか？'
    , 'com_open_infoadd': 'インフォメーションの作成画面を開きます。よろしいですか？'
    , 'com_open_creportadd': '回覧・レポートの作成画面を開きます。よろしいですか？'
    , 'com_open_agendaadd': '議事録の作成画面を開きます。よろしいですか？'

//-----------------------------------------------------------
// 文書管理
//-----------------------------------------------------------
    , 'doc_folder_accsconf': '下位階層のフォルダ、文書に設定されているアクセス権の変更方法を選択してください。'  // フォルダアクセス権変更確認
    , 'doc_folder_delconf': 'フォルダ内の文書、及びサブフォルダも削除されます。'     // フォルダ削除確認メッセージ
    , 'doc_notice_errormsg': '通知メールの処理でエラーが発生しました。<br/><a class="doc-err-detail" href="#">エラーの詳細を表示</a>'
    , 'doc_nofolder_add': '文書を作成できるフォルダはありません。'
    , 'doc_nofolder_search': '文書を検索するフォルダを選択してください。'
    , 'com_entry_changeaccess': 'フォルダのアクセス権が変更されています。<br />一覧画面を再読み込みしてください。'
    , 'doc_rev_rollback_conf': '選択した履歴に文書を戻します。よろしいですか？'
    , 'doc_rev_rollback_nochecked': 'ロールバック対象を選択してください。'
    , 'doc_undoedit_conf': '文書を一時保存前の情報に戻します。よろしいですか？'
    , 'docset_autohandload_nocecked': '取込対象を選択してください。'
    , 'docset_autohandload_allconf': 'すべてを手動取込してよろしいですか？'
    , 'docset_autohandload_someconf': '表示中の{{count}}件を手動取込してよろしいですか？'
    , 'docset_autohandload_listconf': '選択した{{count}}件を手動取込してよろしいですか？'
    , 'docset_delmanage_delall_nowexec': '削除中です。'

//-----------------------------------------------------------
// キャビネット
//-----------------------------------------------------------
    , 'cab_folder_accsconf': '下位階層のフォルダに設定されているアクセス権の変更方法を選択してください。'  // フォルダアクセス権変更確認
    , 'cab_nofolder_addcab': 'キャビネットを作成できるフォルダはありません。'
    , 'cab_nofolder': 'フォルダが作成されていません。'
    , 'cab_nofolder_add': '自動でフォルダの作成とフィルタの設定を行う'
    , 'cab_nofolder_addnot': '手動でフォルダの作成を行う'
    , 'cab_folder_delconf': 'フォルダ内のキャビネットデータ、及びサブフォルダも削除されます。'
    , 'cab_nofolder_search': 'キャビネットを検索するフォルダを選択してください。'
    , 'com_search_extension_toolarge': '拡張子は63文字まで入力できます。'
    , 'cab_deffolderadd': '「desknet\'s NEO」フォルダと「Webクリップ」フォルダを作成し、フィルタの設定を行います。よろしいですか？'
    , 'cab_deffoldersubadd': '※それぞれのフォルダ配下に機能別フォルダを作成します。<br />※フィルタの設定を行う為、現在設定されているフィルタは削除されます。'
    , 'cab_refersizewarn': '表示対象のファイルが{{size}}MBを超えているため、正しく画面が表示されない可能性があります。表示してもよろしいですか？'
    , 'cab_refersizewarnsub': '[{{CancelButton}}]をクリックすると添付ファイルとして表示されます。'

//-----------------------------------------------------------
// 安否確認
//-----------------------------------------------------------
    , 'safetyMailSendMsg': '配信確認メールを送信しました。'
    , 'safetyClearDiaMsg': '緊急連絡先確認情報をすべてクリアします。よろしいですか？'
    , 'warnSafetyAnswerMsg': '安否状況の報告を行います。よろしいですか？'
    , 'safetyAnswerTextAreaRequiredMsg': '現在の状況を報告してください。'
    , 'safetyAnswerTextAreaMsg': '状況に変化があったときに報告してください。'
    , 'safetyAnswerSuccessMsg': '安否状況の報告が完了しました。'
    , 'safetyAnswerNoWriteMsg': '安否状況が選択されていません。'
    , 'safetyContactSuccessMsg': '緊急連絡先の変更が完了しました。'
    , 'safetyRegUnconfDiaMsg': '{{gname}}に所属するユーザーで未確認者の「緊急連絡先」宛てに、登録状況の確認メールを再送信します。よろしいですか？'
    , 'safetyNoSelectGroup': '配信先組織一覧から、組織を選択してください。'
    , 'safetyConsendGrpConfirm': '{{gname}}に所属するユーザーの[プロフィール]で通知メールの送信先に設定されているメールアドレス宛てに、緊急連絡先の登録確認メールを配信します。よろしいですか？'
    , 'safetyRegsendGrpConfirm': '{{gname}}に所属するユーザーの「緊急連絡先」宛てに、登録状況の確認メールを配信します。よろしいですか？'
    , 'safetyRetlyMailConfirm':'{{gname}}に所属するユーザーで未確認者の「緊急連絡先」宛てに、安否状況の確認メールを再送信します。よろしいですか？'
    , 'safetySendGrpConfirm':'{{gname}}に所属するユーザーの「緊急連絡先」宛てに、安否状況の確認メールを配信します。よろしいですか？'
    , 'safetyTrgSendGrpConfirm': '{{gname}}に所属するユーザーの「緊急連絡先」宛てに、安否状況（防災訓練）の確認メールを配信します。よろしいですか？'

//-----------------------------------------------------------
// インフォメーション
//-----------------------------------------------------------
    // カテゴリー削除の確認メッセージ
    , 'info_folderDelConf': 'サブカテゴリーも削除されます。<br />インフォメーションに設定されているカテゴリーが<br />１つもない状態になった場合、「カテゴリーなし」として扱われます。'
    , 'info_guide_add_noperm': 'M:作成権限があるカテゴリーが1つもない為、インフォメーションを作成・変更する事はできません。'
    , 'info_approve_confirmok': '承認します。よろしいですか？'

//-----------------------------------------------------------
// アクセスログ
//-----------------------------------------------------------
    , 'log_del_nochecked': 'すべてのアクセスログを削除するには、チェックボックスにチェックを入れてください。'
    , 'log_srch_notarget': 'アクセスログの検索を実行する場合、検索対象 / 処理 / 機能 / クライアント情報の各条件をそれぞれ１つ以上選択してください。'

//-----------------------------------------------------------
// ログインデザイン設定
//-----------------------------------------------------------
    , 'warnResetLoginWinMsg': '現在の設定を解除します。よろしいですか？<br />※「変更」ボタンを押すまで、設定は保存されません。'
    , 'warnSetLoginWinMsg': 'このデザインをログイン画面に使用します。よろしいですか？<br />※「変更」ボタンを押すまで、設定は保存されません。'
    , 'warnDelLoginWinMsg': '選択した画像を削除します。よろしいですか？'
    , 'warnDelLoginWinAddMsg': '※ デザイン設定に使用されている画像を削除すると、デザイン設定も初期状態に戻ります。'
    , 'warnSaveLoginWinMsg': '現在の設定を保存します。よろしいですか？'

//-----------------------------------------------------------
// 購買予約
//-----------------------------------------------------------
    , 'koubai_fin_nochecked': '取寄完了にする商品を選択してください。'
    , 'koubai_cancel_nochecked': '注文キャンセルにする商品を選択してください。'
    , 'koubai_def_nochecked': '注文再受付にする商品を選択してください。'
    , 'koubai_defend_nochecked': '未取寄せにする商品を選択してください。'
    , 'koubai_fin_allconf': 'すべてを取寄完了にしてよろしいですか？'
    , 'koubai_fin_someconf': '表示中の{{count}}件を取寄完了にしてよろしいですか？'
    , 'koubai_fin_listconf': '選択した{{count}}件を取寄完了にしてよろしいですか？'
    , 'koubai_cancel_allconf': 'すべてを注文キャンセルにしてよろしいですか？'
    , 'koubai_cancel_someconf': '表示中の{{count}}件を注文キャンセルにしてよろしいですか？'
    , 'koubai_cancel_listconf': '選択した{{count}}件を注文キャンセルにしてよろしいですか？'
    , 'koubai_def_allconf': 'すべてを注文再受付にしてよろしいですか？'
    , 'koubai_def_someconf': '表示中の{{count}}件を注文再受付にしてよろしいですか？'
    , 'koubai_def_listconf': '選択した{{count}}件を注文再受付にしてよろしいですか？'
    , 'koubai_defend_allconf': 'すべてを未取寄せにしてよろしいですか？'
    , 'koubai_defend_someconf': '表示中の{{count}}件を未取寄せにしてよろしいですか？'
    , 'koubai_defend_listconf': '選択した{{count}}件を未取寄せにしてよろしいですか？'
    , 'koubai_ordermg': '{{count}}人目の注文数'
    , 'koubai_orderrv': '{{count}}つ目の商品'

//-----------------------------------------------------------
// 備品管理
//-----------------------------------------------------------
    , 'stock_warnsendmsgbodyempty': 'メッセージの本文を入力してください。'
    , 'stock_warndownloadtargetempty': '履歴をダウンロードしたい備品を選択してください。'
    , 'stock_warndownloaddateinvalid': 'ダウンロードの開始日は終了日よりも過去の日付を指定してください。'
    , 'stock_warnsearchstocknuminvalid': '在庫数に指定された値が不正です。'
//-----------------------------------------------------------
// 回覧レポート
//-----------------------------------------------------------
    , 'creport_formatnoselect' : '書式が選択されていません。'
    , 'creport_complete_nochecked': '完了にする回覧・レポートを選択してください。'
    , 'creport_complete_conf' : '完了してよろしいですか？'
    , 'creport_check_nochecked': '確認済みにする回覧・レポートを選択してください。'
    , 'creport_check_allconf' : 'すべてを確認済みにしてよろしいですか？'
    , 'creport_check_someconf' : '表示中の{{count}}件を確認済みにしてよろしいですか？'
    , 'creport_check_listconf' : '選択した{{count}}件を確認済みにしてよろしいですか？'
    , 'creport_read_nochecked': '既読にする回覧・レポートを選択してください。'
    , 'creport_unread_nochecked': '未読にする回覧・レポートを選択してください。'
    , 'creport_folderDelConf': 'サブフォルダも同時に削除されます。<br />フォルダ内の回覧・レポートは削除されません。'
    , 'creport_formatNotSelected': '書式を選択してください。'
    , 'creport_successNoticeSend': '未確認者への通知が完了しました。'
    , 'creport_confirm_subjectChange': '選択した表題(書式)の内容を設定します。よろしいですか？'
    , 'creport_edit_suspensionuser': '以下のユーザーは使用停止中のため、通知先から除外しました。'
    , 'creport_edit_deleteuser': '以下のユーザーは削除されたため、通知先から除外しました。'
    , 'creport_check_nocheckeddel': 'ゴミ箱に移動する回覧・レポートを選択してください。'
    , 'creport_selectformat' : '書式を選択してください。'
    , 'creport_confirm_format_chg': '入力モードを切り替えると、現在の入力内容は破棄されます。切り替えてもよろしいですか？'

//-----------------------------------------------------------
// アンケート
//-----------------------------------------------------------
    , 'enq_complete_confirm': '完了にしてよろしいですか？'
    , 'enq_finish_nochecked': '完了にするアンケートを選択してください。'
    , 'enq_formatnoselect' : '書式が選択されていません。'
    , 'enq_anonymouse_notice' : 'このアンケートの回答は匿名で作成されます。作成者、管理者であっても回答者は特定されません。'
    , 'enq_selectformat' : '書式を選択してください。'
    // 書式選択ダイアログ
    , 'enq_format_noselected': '書式を選択してください。'
    // 通知先選択ダイアログ
    , 'enq_route_notselected': '通知先を選択してください。'
    , 'enq_notice_success': '未回答者への通知が完了しました。'    // 未回答者へ通知成功メッセージ
    , 'enq_confirm_subjectChange': '選択した表題(書式)の内容を設定します。よろしいですか？'
    , 'enq_edit_suspensionuser': '以下のユーザーは使用停止中のため、送信先から除外しました。'
    , 'enq_edit_deleteuser': '以下のユーザーは削除されたため、送信先から除外しました。'

//-----------------------------------------------------------
// ワークフロー
//-----------------------------------------------------------
    , 'flow_selectformat' : '書式を選択してください。'
    , 'flow_formatnoselect' : '書式が選択されていません。'
    // 未読
    , 'flow_unread_nochecked': '未読にする申請を選択してください。'
    // 取り消し
    , 'flow_cancel_confirm': '申請を取消してよろしいですか？'
    , 'flow_cancel_nochecked': '取消し対象を選択してください。'
    , 'flow_cancel_all': 'すべての申請を取消してよろしいですか？'
    , 'flow_cancel_some': '表示中の{{count}}件の申請を取消してよろしいですか？'
    , 'flow_cancel_list': '選択した{{count}}件の申請を取消してよろしいですか？'
    // 差戻し
    , 'flow_remand_confirm': '申請を差戻してよろしいですか？'
    , 'flow_remand_nochecked': '差戻し対象を選択してください。'
    , 'flow_remand_all': 'すべての申請を差戻してよろしいですか？'
    , 'flow_remand_some': '表示中の{{count}}件の申請を差戻してよろしいですか？'
    , 'flow_remand_list': '選択した{{count}}件の申請を差戻してよろしいですか？'
    // 強制完了
    , 'flow_forcedend_confirm': '申請を強制完了してよろしいですか？'
    , 'flow_forcedend_nochecked': '強制完了する対象を選択してください。'
    // ダウンロード
    , 'flow_download_nochecked': 'ダウンロード対象を選択してください。'
    // 経路編集
    , 'flow_route_remove_confirm': '解除してよろしいですか？'
    , 'flow_route_no_approval_group_name': 'W:承認グループ名を入力してください。'
    , 'flow_route_no_approver_users': 'W:承認者を選択してください。'
    , 'flow_route_no_approver_role': 'W:ロールを選択してください。'
    , 'flow_route_no_branch': 'W:条件を選択してください。'
    // 書式選択ダイアログ
    , 'flow_format_noselected': '書式を選択してください。'
    // 申請先選択ダイアログ
    , 'flow_route_noselected': '申請先を選択してください。'
    // 承認確認ダイアログ
    , 'flow_approve_confirm1': '決裁します。よろしいですか？'
    , 'flow_approve_confirm2': '承認します。よろしいですか？'
    , 'flow_approve_confirm3': '確認します。よろしいですか？'
    , 'flow_approve_confirmng': '否認します。よろしいですか？'
    // 分岐条件設定のアラート
    , 'flow_unselectedformat': '親書式が選択されていません。親書式を選択してください。'
    , 'flow_invalidbranch': '分岐条件が無効になりました。'
    , 'flow_remainerror': '経路にエラーが存在しています。'
    // 組織内承認者設定
    , 'flow_on_nochecked': '組織内承認者に設定する対象を選択してください。'
    , 'flow_on_allconf': 'すべてを組織内承認者に設定してよろしいですか？'
    , 'flow_on_someconf': '表示中の{{count}}件を組織内承認者に設定してよろしいですか？'
    , 'flow_on_listconf': '選択した{{count}}件を組織内承認者に設定してよろしいですか？'
    , 'flow_off_nochecked': '組織内承認者を解除する対象を選択してください。'
    , 'flow_off_allconf': 'すべての組織内承認者を解除してよろしいですか？'
    , 'flow_off_someconf': '表示中の{{count}}件の組織内承認者を解除してよろしいですか？'
    , 'flow_off_listconf': '選択した{{count}}件の組織内承認者を解除してよろしいですか？'
    , 'flow_keyword_err_message': 'W:キーワードには次の文字は使えません。'
    , 'flow_keyword_err_message_ex': '&#92 / : , ; * ? &#34; &#60; &#62; | '
    // 回覧・レポート連携
    , 'flow_creport_addcomplete': '回覧・レポートを作成しました。'
//-----------------------------------------------------------
// 仮払精算
//-----------------------------------------------------------
    , 'pay_repuser': '{{name}}さん'
    , 'pay_rep_msg': '{{namelist}}に報告することができます。報告してよろしいですか？'
    , 'pay_item_not': '精算の「項目」が存在しないため、精算内容を作成することができません。'
    , 'pay_item_notlink': 'こちらから項目を追加してください。'
    , 'pay_item_notmanager': '管理者に問い合わせてください。'
      // 精算のメッセージ
    , 'pay_demand_on_nochecked': '精算済み対象を選択してください。'
    , 'pay_demand_on_allconf': 'すべてを精算済みにしてよろしいですか？'
    , 'pay_demand_on_someconf': '表示中の{{count}}件を精算済みにしてよろしいですか？'
    , 'pay_demand_on_listconf': '選択した{{count}}件を精算済みにしてよろしいですか？'
    , 'pay_demand_on_conf': '精算済みにしてよろしいですか？'
      // 未精算のメッセージ
    , 'pay_demand_off_nochecked': '未精算対象を選択してください。'
    , 'pay_demand_off_allconf': 'すべてを未精算にしてよろしいですか？'
    , 'pay_demand_off_someconf': '表示中の{{count}}件を未精算にしてよろしいですか？'
    , 'pay_demand_off_listconf': '選択した{{count}}件を未精算にしてよろしいですか？'
    , 'pay_demand_off_conf': '未精算にしてよろしいですか？'
      // 報告のメッセージ
    , 'pay_report_nochecked': '報告対象を選択してください。'
    , 'pay_report_allconf': 'すべてを報告してよろしいですか？'
    , 'pay_report_someconf': '表示中の{{count}}件を報告してよろしいですか？'
    , 'pay_report_listconf': '選択した{{count}}件を報告してよろしいですか？'
      // エクスポート
    , 'pay_dl_nochecked': 'エクスポート対象を選択してください。'
    
//-----------------------------------------------------------
// 議事録
//-----------------------------------------------------------
    , 'agenda_schedule_notselected': 'スケジュールが選択されていません。'
    , 'agenda_schedule_conflicted': '選択したスケジュールには、既に議事録が作成されているため、新たに議事録を作成することはできません。他のスケジュールを選択してください。'
    , 'agenda_schedule_noaccess': '参照権限のないスケジュールが選択されています。'
//-----------------------------------------------------------
// プロジェクト
//-----------------------------------------------------------
    , 'prj_task_del' : '[{{TaskName}}]を削除しますか？'
    , 'prj_task_datemove' : '期間を変更しますか？'
    , 'prj_taskuser_itemnothing': 'W:該当データが存在ません。タスク担当者の取得に失敗しました。'
//-----------------------------------------------------------
// 利用者名簿
//-----------------------------------------------------------
    , 'uset_del_alluser': 'すべてのユーザーを削除することはできません。'
    , 'uset_del_usericon': 'ユーザー情報の変更は完了しました。画像を削除しますが、よろしいですか？'
    , 'uset_suspension_nochecked_on': '使用停止にする対象を選択してください。'
    , 'uset_suspension_nochecked_off': '使用再開にする対象を選択してください。'
    , 'uset_conf_suspension_on': '使用停止にしてよろしいですか？'
    , 'uset_conf_suspension_off': '使用再開にしてよろしいですか？'
    , 'uset_conf_loginreset': 'ログイン拒否を解除してよろしいですか？'
    , 'uset_conf_deletedatabase': 'このユーザー情報をデータベースから削除してよろしいですか？'
    , 'uset_conf_deletecancel': 'このユーザー削除を取り消してもよろしいですか？'
    , 'uset_loginreset_nochecked': 'ログイン拒否を解除する対象を選択してください。'
    , 'uset_conf_addmsg_deletedatabase': '「はい」ボタンを押すと、データベースから対象のユーザー情報が削除され、スケジュールの予定データや、ウェブメールのメールデータなど、すべてのユーザーデータが削除されます。'
    , 'uset_conf_addmsg_deletecancel': '削除を取り消すと、このユーザーは、削除済みではなく、使用停止の状態になります。'
//-----------------------------------------------------------
// 組織
//-----------------------------------------------------------
    , 'set_group_delconf': '対象組織の下位の組織も削除されます。'
    , 'set_group_notaccs': 'アクセス権がありません。'
//-----------------------------------------------------------
// ウェブメール
//-----------------------------------------------------------
    // アカウント設定
    , 'mail_acc_nodata': '該当するデータはありません。'
    // メール索引の最適化
    , 'mail_vac_alluserconf': '全ユーザーを一括最適化してよろしいですか？ '
    , 'mail_vac_allshareconf': '全共有アカウントを一括最適化してよろしいですか？ '
    , 'mail_vac_allconf': '一覧すべてを最適化してよろしいですか？ '
    , 'mail_vac_someconf': '表示中の{{count}}件を最適化してよろしいですか？'
    , 'mail_vac_listconf': '選択した{{count}}件を最適化してよろしいですか？'
    , 'mail_vac_nowexec': 'メール索引の最適化中です。'
    // 容量設定
    , 'mail_cap_ddelday': 'メール日付から{{days}}日間'
    , 'mail_cap_dindelday': '削除した日から{{days}}日間'
    // メール作成画面起動時のアカウント存在チェック用
    , 'mail_noaccset': 'メールアカウントが設定されていないため利用できません。'
    , 'mail_move_accset': 'メールアカウントが設定されていません。<br />メールアカウントを設定しますか？'
    // スマホ版用
    , 'sp_mail_send_required': '宛先を設定してください。'
    , 'sp_mail_filter_error': 'フィルタ処理に失敗しました。'
    , 'sp_mail_filter_errcnt': '{{count}}件'
    , 'sp_mail_warning_manysend': '宛先，CCに多数のアドレスが指定され情報漏洩の危険性があります。BCCの使用をご検討ください。'
    // 共有アカウントの利用有無(利用させる)
    , 'mail_accuse_on_nochecked': '利用させる対象を選択してください。'
    , 'mail_accuse_on_allconf': 'すべてを利用させるにしてよろしいですか？'
    , 'mail_accuse_on_someconf': '表示中の{{count}}件を利用させるにしてよろしいですか？'
    , 'mail_accuse_on_listconf': '選択した{{count}}件を利用させるにしてよろしいですか？'
    // 共有アカウントの利用有無(利用させない)
    , 'mail_accuse_off_nochecked': '利用させない対象を選択してください。'
    , 'mail_accuse_off_allconf': 'すべてを利用させないにしてよろしいですか？'
    , 'mail_accuse_off_someconf': '表示中の{{count}}件を利用させないにしてよろしいですか？'
    , 'mail_accuse_off_listconf': '選択した{{count}}件を利用させないにしてよろしいですか？'
    // 個人アカウント・共有アカウント削除時の追加メッセージ
    , 'mail_delmessage_option': '※ 削除アカウントに存在するメールデータもすべて削除されます。'
//-----------------------------------------------------------
// ウェブメールIMAP
//-----------------------------------------------------------
    // ディレクトリサービス設定設定
    , 'mailimap_dir_connect': 'ディレクトリサービスの接続に成功しました。'
//-----------------------------------------------------------
// タイムカード
//-----------------------------------------------------------
    , 'tcard_sync_nowexec': 'M:就業実績の再集計を実行中です。'
    , 'tcard_sync_end': 'M:就業実績の再集計が完了しました。'
    , 'tcard_sync_noconf': 'W:就業実績の再集計のチェックを付けてください。'
//-----------------------------------------------------------
// 電子会議室
//-----------------------------------------------------------
    , 'forum_log_del_nochecked': 'アクセスログの削除を実行するには、チェックボックスにチェックを入れてください。'
    , 'forum_log_del_run': 'アクセスログの削除を実行しますか？'
//-----------------------------------------------------------
// 来訪者
//-----------------------------------------------------------
    , 'visitor_search_target': 'W:検索対象を選択してください。 '
//-----------------------------------------------------------
// 印刷関連
//-----------------------------------------------------------
    , 'print_noset_javascript': '印刷用画面が表示できません。' // 印刷用画面起動時に、HTMLを設定するjavascriptが未設定
    , 'print_mainwindow_no': '起動元の画面が閉じられたため、印刷用表示することができません。<br />このブラウザを終了して、最初からやり直してください。' // 印刷用画面を起動したwindowが存在しない
    , 'print_mainwindow_chg': '起動元の画面を移動したため、印刷用表示することができません。<br />このブラウザを終了して、再度「印刷」リンクをクリックしてください。' // 印刷用画面を起動した画面が別画面に移動している。
//-----------------------------------------------------------
// モバイルログイン設定
//-----------------------------------------------------------
    , 'set_mblogin_saveterm_0': 'W:セッション情報の有効期間には、0より大きい数値を設定してください。'
    , 'set_mblogin_savelogininfo_both': 'ログインIDとパスワードをモバイル端末のブラウザに保存する場合、モバイル端末を紛失した際など、不特定の第三者がログインできてしまいます。'
    , 'set_mblogin_savesidterm_ever': 'セッション情報の有効期間を長期間あるいは無期限に設定する場合、モバイル端末を紛失した際など、不特定の第三者がログインできてしまう期間が長期化してしまう恐れがあります。'
    , 'set_mblogin_savesidterm_ever_reconfirm': 'セッション情報の有効期間が{{savesidterm}}に設定されています。<br />モバイル端末を紛失した際などのリスクが大きくなりますが、本当にこの内容で設定しますか？'
    , 'set_mblogin_confirm_saveset': 'この内容で設定してよろしいですか？'
    , 'set_mblogin_savesidterm_nolimit': '無期限'
    , 'set_mblogin_savesidterm_long': '長期間'
//-----------------------------------------------------------
// desknet's メニュー設定
//-----------------------------------------------------------
    , 'set_menu_groupdisplay_on': '使用有無の設定が変更されています。これまでこの機能を使用できなかったユーザーに使用される可能性があります。本当にこの内容で変更しますか？'
    , 'set_menu_groupdisplay_off': '使用有無の設定が変更されています。これまでこの機能を使用していたユーザーが使用できなくなる可能性があります。本当にこの内容で変更しますか？'
//-----------------------------------------------------------
// プロキシサーバー設定
//-----------------------------------------------------------
    , 'set_proxy_success': 'M:プロキシサーバーの接続に成功しました。'
//-----------------------------------------------------------
// 添付ファイル関連
//-----------------------------------------------------------
    , 'att_total_size_over':     'W:アップロード可能な合計サイズを超えています。合計サイズ({{total}})／アップロード可能サイズ({{limit}})'
    , 'att_filesize_zero':       'W:０バイトのファイルはアップロードできません。({{filenames}})'
    , 'att_overlap_file_single': 'ファイル名が重複しています。上書きしますか？({{filenames}})'
    , 'att_overlap_file_multi':  'ファイル名が重複しているファイルが{{num}}個あります。上書きしますか？({{filenames}})'
    , 'att_other_files':         '．．．他({{num}}ファイル)'
    , 'att_drop_max_over':       'W:ドロップ可能なファイル数を超えています。{{num}}個指定されました。最大は{{max}}個です'
    , 'att_illegal_filename':    'W:指定されたファイルのファイル名が無効です。'
    , 'att_file_select':         'W:アップロードするファイルを指定してください。'
    , 'att_detach_all':          'すべてのファイルを解除します。よろしいですか？'
    , 'att_close_dialog':        '指定したファイルはアップロードされません。よろしいですか？'
    , 'att_close_clear':         'アップロードしたファイルを取り消しますか？'
    , 'att_del_confirm':         '「{{filenames}}」を解除します。よろしいですか？'
    , 'att_network_err':         'サーバーの接続に失敗しました。'
    , 'att_upload_now':          'アップロード中です。'
    , 'att_flash_reject_cancel_single': 'W:上書きしたファイル「{{filenames}}」は取り消されませんでした。'
    , 'att_flash_reject_cancel_multi' : 'W:上書きしたファイル「{{filenames}}」他({{num}}ファイル)は取り消されませんでした。'
    , 'att_flash_reject_delete'       : 'W:上書きしたファイル「{{filenames}}」は削除できません。'
    , 'att_404_errorMessage' : 'URLが間違っているか、またはウェブサーバーの設定により、アップロードできるファイルサイズに制限がある可能性があります。システム管理者に問い合わせてください。'
// NVP350_0028781 start
    , 'att_zip_download':        'ファイルの一括ダウンロード'
    , 'att_zip_exec' :           'M:ただいま圧縮しています。<br />しばらくお待ちください...'
    , 'att_zip_fin' :            'ファイルの圧縮が完了しました。<br />以下のリンクをクリックしてダウンロードしてください。'
    , 'att_zip_downlink' :       '圧縮ファイルのダウンロード'
// NVP350_0028781 end
//-----------------------------------------------------------
// メールインポート関連
//-----------------------------------------------------------
    , 'emlimport_total_size_over':     'W:インポート可能な合計サイズを超えています。合計サイズ({{total}})／インポート可能サイズ({{limit}})'
    , 'emlimport_filesize_zero':       'W:０バイトのファイルはインポートできません。({{filenames}})'
    , 'emlimport_file_select':         'W:インポートするファイルを指定してください。'
    , 'emlimport_close_dialog':        'インポートされていないファイルがあります。よろしいですか？' //'指定したファイルはインポートされません。よろしいですか？'
    , 'emlimport_upload_now':          'インポート中です。'
//-----------------------------------------------------------
// 自動保存
//-----------------------------------------------------------
    , 'auto_save_msg': '作成途中の情報が存在します。<br>作成途中の情報を再表示しますか？<br><br>再表示しない場合は、作成途中の情報が削除されます。'
    , 'auto_save_mod_msg': '変更途中の情報が存在します。<br>変更していた情報を再表示しますか？<br><br>再表示しない場合は、変更途中の情報が削除されます。'
});

/// <summary>ページ遷移</summary>
if (!desknets.Resource.Pager) {
    desknets.Resource.Pager = {};
}
$.extend(desknets.Resource.Pager, {
    'msgPageNavi': '全{{allcnt}}件'
  , 'msgPageMove': '{{nowpage}}/{{allpage}}'
  , 'msgPageInput': 'ページ ： '
  , 'msgPageInputBtn': '移動'
  , 'msgPageFirst': '最初'
  , 'msgPagePrev': '前'
  , 'msgPageNext': '次'
  , 'msgPageLast': '最後'
});

/// <summary>添付ファイル関連</summary>
if (!desknets.Resource.attach) {
    desknets.Resource.attach = {};
}
$.extend(desknets.Resource.attach, {
    // 処理中表示で100%の場合、プログレスバーに表示する文言
  'saveMsg': '<span class="co-pop-tp-file-save">保存中です...</span>'
  , 'saveMsgIE': '保存中です...'
    // IEでアップロード中にプログレスバーへ表示しておく文言
  , 'uploadMsg': '保存中です...'
    // ドロップ可能な最大数を表示
  , 'dropMaxMsg': 'ここにファイルをドロップ（最大{{maxdrop}}個）するか'
    // Flashに渡すラベル
  , 'saveLabel': '保存中です...'
  , 'deleteAllLabel': 'すべての選択を解除'
  , 'flashChangeMsg': '<p class="co-msg">※&nbsp;複数添付機能の添付ボタンに戻す場合は、アップロード方法を切り替えてください。→<a href="#" class="co-pop-tp-flash-mode-change-btn">切替</a></p>'
  , 'flashChangeMsgNormal': '<p class="co-msg">※&nbsp;添付ボタンが正常に動作しない場合は、アップロード方法を切り替えてください。→<a href="#" class="co-pop-tp-flash-mode-change-btn">切替</a></p>'
  , 'flashDownloadMsg': '<p class="co-msg"><FONT color="red">※&nbsp;FlashPlayerがインストールされていません。FlashPlayerをインストールしてください。</FONT><a href="http://www.adobe.com/go/getflashplayer" target="flash"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p>'

  , 'cancelAllUploadLabel': '全アップロード中止'
  , 'dropHereLabel': 'ここにファイルをドロップするか、'
  , 'clickFileSelectLabel': 'クリックしてファイルを選択してください。'
  , 'selectFromButtonLabel': '添付ボタンからファイルを選択してください。'
  , 'attachLabel': '添付'
  , 'releaseLabel': '選択を解除'
  , 'deleteLabel': '削除'
  , 'fileUploadLabel': 'ファイルをアップロード'
  , 'dialogTitle': '添付ファイル'
});

/// <summary>メールインポート</summary>
if (!desknets.Resource.emlimport) {
    desknets.Resource.emlimport = {};
}
$.extend(desknets.Resource.emlimport, {
    // 処理中表示で100%の場合、プログレスバーに表示する文言
  'saveMsg': '<span class="co-pop-tp-file-save">インポート中</span>'
  , 'saveMsgIE': 'インポート中'
    // IEでアップロード中にプログレスバーへ表示しておく文言
  , 'uploadMsg': 'インポート中'
    // ドロップ可能な最大数を表示
  , 'dropMaxMsg': 'ここにメールファイルをドロップ（最大{{maxdrop}}個）するか'
    // Flashに渡すラベル
  , 'deleteAllLabel': 'すべての選択を解除'
  , 'cancelAllUploadLabel': '全インポート中止'
  , 'dropHereLabel': 'ここにメールファイルをドロップするか、'
  , 'clickFileSelectLabel': 'クリックしてメールファイルを選択してください。'
  , 'selectFromButtonLabel': '選択ボタンからメールファイルを選択してください。'
  , 'attachLabel': '選択'
  , 'releaseLabel': '選択を解除'
  , 'deleteLabel': '削除'
  , 'fileUploadLabel': 'メールをインポート'
  , 'dialogTitle': 'インポート'
});

/* 
 * datepickerのオプション(共通、local) 
 *
 * @see http://jqueryui.com/demos/datepicker/#Localization
 */
// @see http://docs.jquery.com/UI/Datepicker/setDefaults
if (typeof $.datepicker == 'object') {
    $.datepicker.setDefaults({
        closeText: desknets.Resource.closeLabel,
        prevYearText: desknets.Resource.prevyear,
        prevText: desknets.Resource.prevmonth,
        nextText: desknets.Resource.nextmonth,
        nextYearText: desknets.Resource.nextyear,
        currentText: desknets.Resource.today,
        monthNames: neo.Resource.dateTime['longMonthes'],
        monthNamesShort: neo.Resource.dateTime['longMonthes'],
        dayNames: neo.Resource.dateTime['longWeeks'],
        dayNamesShort: neo.Resource.dateTime['shortWeeks'],
        dayNamesMin: neo.Resource.dateTime['shortWeeks'],
        dateFormat: desknets.Resource.dateFormat4,
        showMonthAfterYear: true,
        weekHeader: desknets.Resource.week,
        yearSuffix: desknets.Resource.year,
        firstDay: 0,
        isRTL: false,
        yearNav: true
    });
}
