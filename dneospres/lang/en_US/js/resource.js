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
    '400_errorMessage' : 'W:This process has been done or is doing with wrong procedure. Stop the process and retry it.',
// ブラウザが勝手に認証ダイアログを表示するので403に統括    "401_errorMessage" : "W:認証できませんでした。再度ログインしてください。",
    '403_errorMessage' : 'W:Cannot access the requested operation. <br/>The session may has expired or privilege changes may occurred. Please interrupting the work, and try again from the beginning.',
    '404_errorMessage' : 'The URL of the server may be wrong.',
    '408_errorMessage' : 'W:The database server is too busy now. Please wait for a while and try it later on.',
    '409_errorMessage' : 'An error, such as the database is stopped or there is no access right to the work area occurred on the server. Please ask your system administrator.',

    '500_errorMessage' : 'An error occurred on the server. Please ask your system administrator.',

    // Webサーバーの接続制限に達した
    '503_errorMessage' : 'W:The server is too busy now. Please wait for a while and try it later on.',

    '504_errorMessage' : 'Timeout has occurred on the server.',

    // Webサーバーが停止しているときに発生
    'errorMessage' : 'The server may be stopped or network may be busy. [{{status}}]'
});

if (!neo.Resource.dateTime) {
    neo.Resource.dateTime = {};
}
$.extend(neo.Resource.dateTime, {
    /* 短い月の名前 */
    'shortMonthes': ['1','2','3','4','5','6','7','8','9','10','11','12'],
    /* 長い月の名前 */
    'longMonthes': ['January','February','March','April','May','June','July','August','September','October','November','December'],
    /* 短い週の名前(日曜日から) */
    'shortWeeks': ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    /* 長い週の名前(日曜日から) */
    'longWeeks': ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    /* 午前/午後 */
    'periods': ['AM','PM']
});

/// <summary>文言</summary>
if (!desknets.Resource) {
    desknets.Resource = {};
}
$.extend(desknets.Resource, {
      'code': 'en_US'
/*
ダイアログのタイトル
*/
    , 'errorDefaultTitle'   : 'Error'
    , 'warnDefaultTitle'    : 'Warning'
    , 'confirmDefaultTitle' : 'Confirmation'
    , 'messageDefaultTitle' : 'Message'

/*
ダイアログのボタン
*/
    , 'CloseButtonLabel': 'Close' // 参照系ダイアログの確認ボタン
    , 'OKButtonLabel': 'OK' // 選択、変更系ダイアログの決定ボタン
    , 'CancelButtonLabel': 'Cancel' // 選択、変更系ダイアログの取り消しボタン
    , 'ConfOKButtonLabel': 'Yes' // 確認ダイアログの肯定ボタン
    , 'ConfCancelButtonLabel': 'No' // 確認ダイアログの否定ボタン
/*
ソート
*/
    , 'listSortableCountFormat': '{{count}} item(s) selected'
/**
 よく使う文言
 */
   , 'closeLabel': 'Close'
   , 'openLabel': 'Open'
   , 'allLabel': 'All'
   , 'nothingLabel': 'None'
   , 'nameLabel': 'Name'
   , 'searchLabel': 'Search'
   , 'addLabel' : 'Add'
   , 'modLabel': 'Update'
   , 'editLabel': 'Edit'
   , 'saveLabel': 'Save'
   , 'delLabel' : 'Delete'
   , 'cancelLabel': 'Cancel'
   , 'selectLabel': 'Select'
   , 'deselectLabel': 'Unselect'
   , 'abortLabel' : 'Stop'
   , 'confirmedLabel': 'Confirmed'
   , 'showLabel': 'Show'
   , 'hideLabel': 'Hide'
   , 'kara': '-'
   , 'comma': ','
   , 'setAccess': 'Access Rights Settings'
   , 'selItemDlgTitle': 'Select User/Group/Role'
   , 'modRight': 'Change Rights'
   , 'acceccOpen': 'Read'
   , 'acceccAdd': 'Add'
   , 'acceccMod': 'Update'
   , 'acceccDel': 'Delete'
   , 'attachLabel':'Attach'
   , 'setnot': 'None'
   , 'enable': 'Enable'
   , 'disables': 'Disable'
   , 'capaenable': 'Limit'
   , 'capadisables': 'Do Not Limit'
   , 'importance_highest': 'U'
   , 'importance_high': 'H'
   , 'importance_low': 'L'
   , 'optionSelect' : '-- Choose One --'
   , 'members': '{{members}} Users'
   , 'searchcond': 'Search Criteria'
   , 'preview': 'Preview'
   , 'shortprivate': '[P]'
   , 'prevmonth': 'Previous Month'
   , 'nextmonth': 'Next Month'
   , 'prevyear': 'Previous Year'
   , 'nextyear': 'Next Year'
   , 'today': 'Today'
   , 'week': 'Week'
   , 'year': 'Year'
   , 'UserSelDlgTitle_UserRole': 'Select User/Role'
   , 'NoSetData': 'Not Yet Setup'

/**
 管理者設定
 */
   , 'setAdminTarget': 'Set Managed Group'
   , 'setAdminAllUser': 'All'
   , 'setAdminAssignOnly': 'Belonging Group'
   , 'setAdminSelectGroup': 'Selected Group'
   , 'setAdminSelectGroupDialog': 'Select Managed Group'

/**
 画面部品
 */
   , 'processingLabel': 'Processing...'
/**
 レイアウト
 */
   , 'resizeWidthLabel': 'Change Width'
   , 'resizeHeightLabel': 'Change Height'
   , 'resizeOpenLabel': 'Open'
   , 'resizeCloseLabel': 'Close'
/**
 各設定値
 */
   , 'allow': 'Allow'
   , 'disallow': 'Disallow'
   , 'unlimited': 'Indefinite Period'
   , 'nolimited': 'No Limit'

/**
 日時関連
 */
// date format start	←このコメントは削除しないでください
      , 'dateFormat' : 'MM/dd/yyyy'
      , 'dateTimeFormat' : 'MM/dd/yyyy h:mm a'
      , 'dateTimeFormatWithSecond' : 'MM/dd/yyyy h:mm:ss a'
      , 'timeFormat' : 'h:mm a'
      , 'longYMFormat' : 'MMMM yyyy'
      , 'longYMDFormat' : 'MM/dd/yyyy'
      , 'longDateFormat' : 'E MM/dd/yyyy'
      , 'longDateTimeFormat' : 'E MM/dd/yyyy h:mm a'
      , 'longMDFormat' : 'E MM/dd'
      , 'longMDFormatBirthday' : 'MM/dd'
      , 'longDayFormat' : 'E d'
      , 'shortYMFormat': 'yyyy/MM'
      , 'shortDateFormat' : 'MM/dd'
      , 'shortDateTimeFormat' : 'MM/dd h:mm a'
      , 'shortTimeFormat' : 'h:mm a'
      , 'serverTime' : 'MM/dd/yyyy h:mm a'
      , 'longSchTimeFormat24' : 'h:mm a'
      , 'shortSchTimeFormat24' : 'h:mm a'
      , 'dateFormat_dd' : 'E dd'
      , 'dateFormat_mmdd' : 'E MM/dd'
      , 'timePickerHourFormat' : 'h a'
      , 'timePickerHourSpanFormat' : '{{hour}}'
      , 'timePickerMinuteFormat' : 'mm'
// date format end	←このコメントは削除しないでください
// datepicker format start	←このコメントは削除しないでください(http://docs.mobiscroll.com/283/datetime#opt-dateOrder)
      , 'scrFormat_date' : 'mm/dd/yy'
      , 'scrFormat_dateorder' : 'mmddyy'
      , 'scrFormat_time' : 'HH:ii'
      , 'scrFormat_timewheels' : 'HHii'
      , 'dateFormat4' : 'mm/dd/yy'
      , 'dateFormat2' : 'mm/dd/y'
// datepicker format end	←このコメントは削除しないでください

/**
 アラーム関連
 */
   , 'alarmDayLabel': '{{num}} Day(s)'
   , 'alarmHourLabel': '{{num}} Hour(s)'
   , 'alarmMinuteLabel': '{{num}} Minutes'

/**
 添付
 */
   , 'attachTitle': 'Attachment Files'
   , 'attachInvSize': 'Lost'
/**
 認証
 */
   , 'setAdminAuthTitle': 'Enter Administrator Password'
   , 'loginRePwdTitle': 'Change Password'
   , 'loginLicenseTitle': 'License Settings'
/**
 ユーザー情報
 */
   , 'userLevel_0': 'General User'
   , 'userLevel_1': 'Administrator'
   , 'userGender_m': 'Male'
   , 'userGender_f': 'Female'

/**
  プロフィールダイアログ
 */
   , 'profUserTitle': 'Profile'
   , 'profGroupTitle': 'Group'

/**
 項目値に付加する文字列
 */
   , 'com_overitemcnt': '...'        // 一項目に表示する最大アイテム数 を超えた場合に項目値の末尾に付加する
/**
 キャビネット連携
 */
   , 'com_cab' : 'Cabinet'
/**
 検索
 */
    , 'com_srch_noset': 'Search Criteria'
    , 'com_srch_keyword': 'Keyword'
/**
 回覧レポート
 */
    , 'setcreport': 'Circulation/Report'
    , 'setprivate': '(Private)'
    , 'routetitle': 'Select Recipients'
 /**
 共有リンク
 */
   , 'com_share_title' : 'Public'
   , 'com_share_mail' : 'Email'
   , 'com_share_ntwi' : 'Tweets'
   , 'com_share_dm': 'Direct Messages'
   , 'com_share_url': 'URL'
 /**
 ブラウザのタイトル
 */
   , 'com_page_title' : '{{count}} new item(s)'
});

/// <summary>Neo Twi文言</summary>
if (!desknets.Resource.ntwi) {
    desknets.Resource.ntwi = {};
}
$.extend(desknets.Resource.ntwi, {
  'andNItemsLabel': 'Other {{count}} item(s)',
  'toDoItemsLabel': 'Today {{count}} item(s)',
  'toDoExpiredLabel': '{{othercnt}} overdue item(s)',
  'readByMeLabel': 'Read',
  'readByYouLabel': 'Opened',
  'cabinetMessageTitle': '{{name}}({{start}}-{{end}})',
  'advancedSearchLabel': 'Enter Search Criteria',
  'surlClick': '{{click_cnt}} clicks',
  'urlShorten': 'The above URL has shortened',
  'urlShortenExist': 'The created shortened URL has been displayed',
  'stamprefTitle': 'See Category',
  'stampselTitle': 'Choose Category',
  'stampDLButtonLabel': 'Download',
  'historyLabel': 'History'
});

/// <summary>付箋共通文言</summary>
if (!desknets.Resource.tags) {
    desknets.Resource.tags = {};
}
$.extend(desknets.Resource.tags, {
  'deleteTagLabel': 'Peel Off',
  'hideTagLabel': 'Hide',
  'memofromLabel': 'From {{nameNode}}',
  'color1': 'Blue',
  'color2': 'Green',
  'color3': 'Yellow',
  'color4': 'Pink',
  'color5': 'Red',
  'color6': 'Gray'
});

/// <summary>ファイル選択</summary>
if (!desknets.Resource.rtfile) {
    desknets.Resource.rtfile = {};
}
$.extend(desknets.Resource.rtfile, {
  'title': 'Insert File',
  'insertLabel': 'Insert',
  'sizingLabel': '{{name}}({{width}} x {{height}})',
  'msgInputHere': 'Input text here.',
  'msgStartApplyFilter': 'It may have time to work filters.',
  'errCanvasSizeLimitSmall': 'It is too small.',
  'errCanvasSizeLimitLarge': 'It is too big.',
  'errTooManyObjectSelected': 'Unfortunately, you can edit up to {{count}} items at the same time.',
  'confReset': 'You are about to reset the image. Are you sure you want to continue?',
  'title_imagemod': 'Edit Picture',
  'maximize': 'Maximize',
  'restore': 'Undo(Minimize)',
});

/// <summary>組織・ユーザー選択ダイアログ共通文言</summary>
if (!desknets.Resource.chooser) {
    desknets.Resource.chooser = {};
}
$.extend(desknets.Resource.chooser, {
  'singleGroupTitle': 'Select Group',
  'singleGroupTitle_p': 'Select Group/Private Group',
  'allGroupName': '(All)',
  'allUserName': '(All Users)',
  'unassignGroupName': '(Without Group)',
  'suspensionGroupName': '(Suspended)',
  'loginlockGroupName': '(Locked)',
  'deletedUsersGroupName': '(Deleted)',
  'allDescendantsLabel': 'Include Subordinates',
  'offDescendantsLabel': 'Exclude Subordinates',
  'descendantUsersLabel': 'Add All Users Under This Group',
  'privateGroupUsersLabel': 'Add Users in This Private Group'
});

/// <summary>フォルダ一覧系共通文言</summary>
if (!desknets.Resource.folderlist) {
    desknets.Resource.folderlist = {};
}
$.extend(desknets.Resource.folderlist, {
  'menuFolderSet': 'Settings',
  'menuFolderAdd': 'Create Folder',
  'menuFolderMod': 'Edit Folder',
  'menuFolderAcc': 'Access Rights Settings',
  'menuFolderDel': 'Delete Folder',
  'accessConf':'Confirm Changing Access Rights',
  'moveDest': 'Destination'
});

/**
 * @class ラベル系共通文言
 */
/// <summary>ラベル系共通文言</summary>
if (!desknets.Resource.PageLabelList) {
    desknets.Resource.PageLabelList = {};
}
$.extend(desknets.Resource.PageLabelList, {
    'menuLabelAdd': 'Add Label'
  , 'menuLabelMod': 'Edit Label'
  , 'menuLabelDel': 'Delete Label'
});

/// <summary>容量文言</summary>
if (!desknets.Resource.capacity) {
    desknets.Resource.capacity = {};
}
$.extend(desknets.Resource.capacity, {
    'UseCapacity' : 'Used Space'
  , 'FreeCapacity': 'Free Space'
  , 'Capacity'    : 'Space'
  , 'LessThanOne' : 'Less Than 1%'
});

/// <summary>フォルダ選択共通文言</summary>
if (!desknets.Resource.folderselect) {
    desknets.Resource.folderselect = {};
}
$.extend(desknets.Resource.folderselect, {
    'dialogTitleFolderSelect': 'Select Folder'
  , 'folderGoParent': 'Move to Folder List Above'
  , 'folderRoot': 'Root'
  , 'folderRootReal': 'Root Folder'
});

/// <summary>インポート・エクスポート共通</summary>
if (!desknets.Resource.ImEx) {
    desknets.Resource.ImEx = {};
}
$.extend(desknets.Resource.ImEx, {
    'charCode0': 'Shift_JIS'
  , 'charCode1': 'UTF-8 without BOM'
  , 'charCode2': 'UTF-8 with BOM'
  , 'charSep0': 'Comma'
  , 'charSep1': 'Tab'
  , 'exportConfig': 'Set Export'
});

/// <summary>メニュー文言</summary>
if (!desknets.Resource.menu) {
    desknets.Resource.menu = {};
}
$.extend(desknets.Resource.menu, {
    'groupCreateTitle': 'Add Menu Group',
    'groupModifyTitle': 'Edit Menu Group',
    'targetSelfLabel': 'Current',
    'targetBlankLabel': 'New'
});

/// <summary>スマホ関連</summary>
if (!desknets.Resource.sp) {
    desknets.Resource.sp = {};
}
$.extend(desknets.Resource.sp, {
    'search': 'Searching'
  , 'searchstop': 'Stop Searching'
  , 'profdisabled': 'You cannot display the profile now.'
});

/// <summary>メッセージリソース</summary>
if (!desknets.Resource.Message) {
    desknets.Resource.Message = {};
}
$.extend(desknets.Resource.Message, {

//-----------------------------------------------------------
// 共通
//-----------------------------------------------------------
    'com_search' : 'M:Search is in progress.'
    , 'com_itemnothing_listreload': 'W:Corresponding data does not exist. Please reload the list screen.'
    , 'com_copy_attachsize_over': 'M:Could not attach the attachment files because the attachment size exceeds the allowable limit.'
    , 'com_copy_attachs_missing': 'M:Failed to copy an attachment file. <br />The file may have been deleted by a user or the external program such as anti-virus program. Please select the attachment file again.'
    , 'com_accs_otherto_add': 'M:Users you do not have "Add" rights are excluded.'
    , 'com_datechk_fromto': 'W:Invalid period.'
    , 'com_datechk_fromto_item': 'W:The period specified in {{item}} is invalid.'
    , 'com_datechk_fromto_required': 'W:The period is not entered.'
    , 'com_invalid_number': 'W:Please enter a numeric value.'
    , 'com_invalid_date': 'W:Date is invalid.'
    , 'com_underflow_date': 'W:The date must be after {{value}}.'
    , 'com_overflow_date': 'W:The date must be before {{value}}.'
    , 'com_minus_data': 'W:Please enter a positive value.'
    , 'com_dialog_execmsg': '{{msg}}<br />Please wait for a while.'
    , 'com_dialog_execaddmsg': '<span class="dn-loading-message">Reading...</span>'
    , 'com_search_nokey': 'Please specify the search criteria.'
//-----------------------------------------------------------
// 削除共通
//-----------------------------------------------------------
    , 'com_del_nochecked': 'Please select items you want to delete.'
    , 'com_del_allconf': 'Are you sure you want to delete all?'
    , 'com_del_someconf': 'Are you sure you want to delete the displayed {{count}} item(s)?'
    , 'com_del_listconf': 'Are you sure you want to delete {{count}} item(s) you selected?'
    , 'com_del_conf': 'Are you sure you want to delete?'
    , 'com_sel_nochecked': 'Please select items you want to remove.'
//-----------------------------------------------------------
// 移動共通
//-----------------------------------------------------------
    , 'com_move_allconf': 'Are you sure you want to move all items?'
    , 'com_move_someconf': 'Are you sure you want to move the displayed {{count}} item(s)?'
    , 'com_move_listconf': 'Are you sure you want to move {{count}} item(s) you selected?'
//-----------------------------------------------------------
// 表示順変更共通
//-----------------------------------------------------------
    , 'com_move_nochecked': 'Please select items you want to move.'
    , 'com_move_allchecked': 'You cannot change the display order when you select all. Please select items you want to move in this page.'
    , 'com_move_conf': 'Are you sure you want to move them?'
//-----------------------------------------------------------
// インポート共通
//-----------------------------------------------------------
    , 'com_import_nofile': 'Please select a file to be imported.'
    , 'com_import_nowexec': 'Import is in progress.'
    , 'com_import_end': 'Import is completed.'
//-----------------------------------------------------------
// フォルダ共通
//-----------------------------------------------------------
    , 'com_folder_del' : 'Are you sure you want to delete [{{FolderName}}]?'
    , 'com_folder_move': 'Are you sure you want to to move [{{FolderName}}]?'
    , 'com_folder_errlist': 'E:Failed to get the screen elements. Please reload the screen.'
    , 'com_folder_accsauth': 'Users, groups, or roles to which the access rights could not be granted have not been added.'
    , 'com_folder_listdrag': '{{count}} item(s) selected'

//-----------------------------------------------------------
// ラベル共通
//-----------------------------------------------------------
    , 'com_label_del' : 'Are you sure you want to delete [{{LabelName}}]?'
    , 'com_label_datamod' : 'Do you want to change the label?'
    , 'com_label_datadel' : 'Do you want to peel the label off?'
//-----------------------------------------------------------
// 管理者設定共通
//-----------------------------------------------------------
    , 'com_set_nochecked': 'Please select the items you want to setup.'
//-----------------------------------------------------------
// 有効 無効共通
//-----------------------------------------------------------
    , 'com_enable_nochecked': 'Please select the items you want to enable.'
    , 'com_enable_allconf': 'Are you sure you want to enable all?'
    , 'com_enable_someconf': 'Are you sure you want to enable the displayed {{count}} item(s)?'
    , 'com_enable_listconf': 'Are you sure you want to enable {{count}} item(s) you selected?'
    , 'com_disenable_nochecked': 'Please select the items you want to disable.'
    , 'com_disenable_allconf': 'Are you sure you want to disable all?'
    , 'com_disenable_someconf': 'Are you sure you want to disable the displayed {{count}} item(s)?'
    , 'com_disenable_listconf': 'Are you sure you want to disable {{count}} item(s) you selected?'

//-----------------------------------------------------------
// 制限する 制限しない共通
//-----------------------------------------------------------
    , 'com_capaenable_nochecked': 'Please select the items you want to limit.'
    , 'com_capaenable_allconf': 'Are you sure you want to limit all?'
    , 'com_capaenable_someconf': 'Are you sure you want to limit the displayed {{count}} item(s)?'
    , 'com_capaenable_listconf': 'Are you sure you want to limit {{count}} item(s) you selected?'
    , 'com_capadisenable_nochecked': 'Please select the items you want to cancel the limit.'
    , 'com_capadisenable_allconf': 'Are you sure you want to cancel the limit for all?'
    , 'com_capadisenable_someconf': 'Are you sure you want to cancel the limit for the displayed {{count}} item(s)?'
    , 'com_capadisenable_listconf': 'Are you sure you want to cancel the limit for the {{count}} item(s) you selected?'

//-----------------------------------------------------------
// 検索共通
//-----------------------------------------------------------
    , 'com_search_required': 'Please specify {{item}}.'
    , 'com_search_nowexec': 'Search is in progress.'
    , 'com_search_keyword' : 'W:Please enter keyword.'
    , 'com_search_keyword_toolarge': 'The total number of characters has exceeded the limit. You can enter up to 127 characters.'
    , 'com_search_keyword_toolarge_short': 'The total number of characters has exceeded the limit. You can enter up to 63 characters.'

//-----------------------------------------------------------
// インポート、エクスポート共通
//-----------------------------------------------------------
    , 'com_exportnoselect': 'W:Please select a target to be exported.'

//-----------------------------------------------------------
// 検索共通
//-----------------------------------------------------------
    , 'com_attachlist_confirm_one': 'The selected files will be unselected. Are you sure you want to continue?'
    , 'com_attachlist_confirm_all': 'All files will be canceled. Are you sure you want to continue?'

//-----------------------------------------------------------
// 選択ダイアログ
//-----------------------------------------------------------
    , 'com_chooser_note': '* The items you selected are displayed in the list below. Press the "OK" button to confirm.'
    , 'com_chooser_note_single': '* Please select items from the list on the right and then press the "OK" button.'
    , 'com_chooser_required_group': 'W:Please select a group.'
    , 'com_chooser_required_user': 'W:Please select a user.'
    , 'com_chooser_required_user_group': 'W:Please select a group or user.'
    , 'com_chooser_required_group_folder': 'W:Folder should be specified.'
    , 'com_chooser_required_role': 'W:Please choose a role.'
    , 'com_chooser_no_groups': 'W:There are no groups you can select.'

//-----------------------------------------------------------
// 設定系共通
//-----------------------------------------------------------
    , 'com_setting_beforeentry_msg': 'The data you set is not saved.'
    , 'com_setting_changed': 'M:Settings have been changed.'

//-----------------------------------------------------------
// 登録共通
//-----------------------------------------------------------
    , 'com_input_beforeentry_msg': 'The data you entered is not saved.'
    , 'com_input_beforeentry_autosave_msg': 'Although it has been saved automatically, it may not be saved compleately.'
    , 'com_input_beforeentry_addmsg': 'Do you want to move from this page to another page? <br />If you continue, please click [Yes], otherwise click [No].'

//-----------------------------------------------------------
// 伝言(共通機能)
//-----------------------------------------------------------
    , 'com_memo_confirm_to_read': 'The message will be marked as "confirmed".'
    , 'com_memo_not_peel': 'Keep the Sticky Note'
    , 'com_memo_peel': 'Peel off the Sticky Note'
    , 'com_memo_delete': 'Delete the message'
    , 'com_memo_dialogtitle': 'Compose Message'
    , 'com_memo_where_schmore': '(Another {{morecnt}} Event(s))'

//-----------------------------------------------------------
// 通知共通
//-----------------------------------------------------------
    , 'com_notice_settransmit': '<br />Please specify the notification email address in [<a href="{{module}}? cmd={{cmd}}">Edit Profile</a>].'

//-----------------------------------------------------------
// ページ替え共通
//-----------------------------------------------------------
    , 'com_listchk_cnt_some_disp': 'All {{num}} item(s) in this page are selected.'
    , 'com_listchk_cnt_all_link': 'Select all {{num}} item(s)'
    , 'com_listchk_cnt_all_disp': 'All {{num}} item(s) selected.'
    , 'com_listchk_cnt_move': '{{num}} item(s) selected. Click the destination.'

//-----------------------------------------------------------
// webクリップ
//-----------------------------------------------------------
    , 'com_webclip_error': 'Failed to load the clipping function. The network to the desknet\'s server might be unconnected.'
    , 'com_webclip_secure_error': 'In order to clip https content, the desknet\'s server should also be https.'
    , 'com_webclip_unsupported_error': 'Since the browser is unsupported, you cannot clipping.'

//-----------------------------------------------------------
// NeoTwi
//-----------------------------------------------------------
    , 'ntwi_new_item_memo': '{{detail}}'
    , 'ntwi_new_item_todo': 'Deadline of "{{detail}}" is coming closer.'
    , 'ntwi_new_item_todo_end': '"{{detail}}" is overdue.'
    , 'ntwi_new_item_mail': 'A new message has been received.'
    , 'ntwi_new_item_creport': '"{{detail}}" has arrived.'
    , 'ntwi_new_item_flow': '"{{detail}}" has arrived.'
    , 'ntwi_new_item_enq': '"{{detail}}" has arrived.'
    , 'ntwi_new_item_forum': 'A new message has been posted to "{{detail}}".'
    , 'ntwi_new_item_safety': '{{detail}}'
    , 'ntwi_new_item_info': '{{detail}}'
    , 'ntwi_new_item_info_approval': '{{detail}}'
    , 'ntwi_new_item_-1': '{{target}}'
    , 'ntwi_no_stamps': 'W:There are no stamps you can use.'
    , 'ntwi_confirm_to_post': 'Are you sure you want to post the message?'
    , 'ntwi_ntwi_required': 'W:Please enter a message or select an attachment file.'
    , 'ntwi_ntwi_too_long': 'W:The number of characters in the message exceeds the limit.'
    , 'ntwi_message_required': 'W:Please enter a message or select an attachment file.'
    , 'ntwi_message_too_long': 'W:The number of characters in the message exceeds the limit.'
    , 'ntwi_message_to_required': 'W:Please specify the recipients.'
    , 'ntwi_complete_talk': 'M:The tweet has been posted.'
    , 'ntwi_complete_message': 'M:The direct message has been sent.'
    , 'ntwi_surl_entryconf': 'The URL is already created as a shortened URL. Are you sure you want to create a new short URL?'
    , 'ntwi_surl_entryconf_extra': 'If you choose "No", the created shortened URL will be displayed.'
    , 'ntwi_stamp_delconf': 'If you delete a stamp, the stamp which is already in use will no longer be displayed.'
    , 'ntwi_stampdl_selectnothing': 'W:There are no stamps to be downloaded.'
    , 'ntwi_stampdl_nowexec': 'Downloading is in progress.'
    , 'ntwi_stampdl_finish': 'M:Download is complete.'  // ダウンロード正常終了
    , 'ntwi_stampdl_stop': 'M:Download is aborted.'    // ダウンロードを中断して正常終了
    , 'ntwi_message_confirm_to_delete': 'Are you sure you want to delete the direct messages of the user being displayed?'
    , 'ntwi_confirm_to_close': 'The data entered to {{name}} has not been saved. <br />Are you sure to close Neotwi?'
    , 'ntwi_sp_send_stamp': 'M:Stamp has been sent.'
    , 'ntwi_sp_send_emoji': 'M:Emoji has been sent.'

//-----------------------------------------------------------
// 付箋
//-----------------------------------------------------------
    , 'tag_memo_truncated_shown': 'Do you want to transit to the list of Whereabouts messages?'
    , 'tag_confirm_to_delete': 'Do you want to peel off the Sticky Note?'

//-----------------------------------------------------------
// リッチテキストファイル選択
//-----------------------------------------------------------
    , 'rtfile_no_cabinet_folder': 'W:There is no folder in the cabinet. <br />Please create a folder in {{cabinet}}.'
    , 'rtfile_no_image': 'W:Please select a file.'
    , 'rtfile_any_image_not_added': 'Some of images have not been added.'

//-----------------------------------------------------------
// メニュー
//-----------------------------------------------------------
    , 'com_menu_move_without_save': 'The palette menu you updated is not saved.'

//-----------------------------------------------------------
// カレンダー
//-----------------------------------------------------------
    , 'cal_targetdate_recurrence': 'This is a recurring event.'
    , 'cal_targetdate_dates': 'This is an irregular event.'
    , 'cal_targetdate_message_mod': 'Select items you want to update and press "OK" button. <br />If you press the "Cancel" button, the operation will be canceled.'
    , 'cal_targetdate_message_del': 'Select items you want to delete and press "OK" button. <br />If you press the "Cancel" button, the operation will be canceled.'
    , 'cal_targetdate_choice_1': 'Only the Event On {{date}}'
    , 'cal_targetdate_choice_2': 'The Events On and After {{date}}'
    , 'cal_targetdate_choice_3': 'All the Events'
    , 'cal_deltargets_all': 'This event has been registered to several users or facilities. <br />You are about to delete all the scheduled events for the facilities and its recipients. Are you sure you want to continue?'

//-----------------------------------------------------------
// 共有リンク
//-----------------------------------------------------------
    , 'share_confirm': 'The shortened URL will be created. Are you sure you want to continue?'
    , 'share_popmsg_copy': 'Please copy and use the URL.'

//-----------------------------------------------------------
// 個人設定
//-----------------------------------------------------------
    , 'pset_del_usericon': 'The profile has been updated. Are you sure you want to delete your image?'

//-----------------------------------------------------------
// ポータル設定
//-----------------------------------------------------------
    , 'portalset_folder_delconfadd': 'All bookmarks and sub-folders in the folder will also be deleted.'
    , 'portalset_no_menu_contents': 'W:Please select a menu content.'

//-----------------------------------------------------------
// スケジュール
//-----------------------------------------------------------
    , 'sch_free_usetime': 'W:The hours used is too long. Please check the usage restriction of the selected facilities.'
    , 'sch_guide_open_noperm': 'M:Users you do not have "Read" rights are excluded.'
    , 'sch_guide_import_noperm': 'M:Users you do not have "Add" rights cannot be selected.'
    , 'sch_guide_add_noperm': 'M:Users or facilities you do not have "Add" rights are excluded.'
    , 'sch_confirm_admit': 'Are you sure you want to approve?'           // スマホ版で使用
    , 'sch_confirm_denial': 'Are you sure you want to disapprove?'
    , 'sch_msetaccentry_noperm': 'M:You can set the access rights only to the users who belong to your managed groups. <br />User(s) that cannot be set has been removed.'
    , 'sch_visitor_no_locations': 'W:Add a reception room at first and then setup visitors.'
    , 'sch_visitor_no_details': 'W:Please enter either Company (Department) or Name.'
    , 'sch_freetargetselect': 'W:Please select items to be searched.'
    , 'sch_userselectover': 'M:Too many users were selected. Events of 100 users of them are displayed.'
    , 'sch_userselectnotview': 'M:Users you do not have "Read" rights are excluded.'
    , 'sch_checkselectover': 'W:You can select up to 100 users.'
    , 'sch_no_permit_users': 'W:Please select users to whom you would like to give the right to access.'
    , 'sch_free_no_available': 'W:There is no facility you can reserve. Please confirm the availability, limitation, and additional permissions of the target facilities'
    , 'sch_free_available_exist': 'The following facilities are available for reservation. <br/>{{plantnames}}<br/><br/>Do you want to add an event to the above facilities?'

//-----------------------------------------------------------
// 設備予約
//-----------------------------------------------------------
    , 'plant_selectover': 'M:Too many facilities were selected. Events of 100 facilities of them are displayed.'
    , 'plant_checkselectover': 'W:You can select up to 100 facilities.'
//-----------------------------------------------------------
// ToDo
//----------------------------------------------------------
    , 'todo_attach_entrydel': 'The attachment file cannot be open because the task of the owner has been deleted.'
    , 'todo_end_nochecked': 'Please select tasks you want to complete.'
    , 'todo_end_allconf': 'Are you sure you want to complete all?'
    , 'todo_end_someconf': 'Are you sure you want to complete the displayed {{count}} item(s)?'
    , 'todo_end_listconf': 'Are you sure you want to complete {{count}} item(s) you selected?'
//-----------------------------------------------------------
// 伝言・所在
//-----------------------------------------------------------
    , 'memo_readed_nocecked': 'Please select messages you want to confirm.'
    , 'memo_readed_allconf': 'Are you sure you want to confirm all?'
    , 'memo_readed_someconf': 'Are you sure you want to confirm the displayed {{count}} item(s)?'
    , 'memo_readed_listconf': 'Are you sure you want to confirm {{count}} item(s) you selected?'
    , 'memo_deltag_nocecked': 'Please select a message of Sticky Note which you want to peel off.'
    , 'memo_deltag_allconf': 'Are you sure you want to peel off all Sticky Notes?'
    , 'memo_deltag_someconf': 'Are you sure you want to peel off the displayed {{count}} Sticky Note(s)?'
    , 'memo_deltag_listconf': 'Are you sure you want to peel off the {{count}} Sticky Note(s) you selected?'
    , 'memo_addmsg_senddel': 'The message for the recipients also will be deleted.'

//-----------------------------------------------------------
// キャビネット連携
//-----------------------------------------------------------
    , 'com_cab_regist': 'The item will be stored in Cabinet. Are you sure?'
    , 'com_cab_finregist': 'The item has been stored in the folder ({{FolderName}}) of the Cabinet.'
    , 'com_cab_folderadd': 'Please create a folder by {{cabinet}}.'

//-----------------------------------------------------------
// 機能間連携
//-----------------------------------------------------------
    , 'com_open_mailadd': '\'Create Message\' screen will be opened. Are you sure you want to continue?'
    , 'com_open_schadd': '\'Add Event\' screen will be opened. Are you sure you want to continue?'
    , 'com_open_infoadd': '\'Create Information\' screen will be opened. Are you sure you want to continue?'
    , 'com_open_creportadd': '\'Create New Circular/Report\' screen will be opened. Are you sure you want to continue?'
    , 'com_open_agendaadd': '\'Create Minutes\' screen will be opened. Are you sure you want to continue?'

//-----------------------------------------------------------
// 文書管理
//-----------------------------------------------------------
    , 'doc_folder_accsconf': 'Please choose how to change the access rights that are set lower-level folders and documents.'  // フォルダアクセス権変更確認
    , 'doc_folder_delconf': 'All sub-folders and documents in the folder will also be deleted.'     // フォルダ削除確認メッセージ
    , 'doc_notice_errormsg': 'An error occurred in the process of email notification. <br/><a class="doc-err-detail" href="#">Show Error Detail</a>'
    , 'doc_nofolder_add': 'There is no folder where to create documents.'
    , 'doc_nofolder_search': 'Please select the folder you want to search.'
    , 'com_entry_changeaccess': 'The access rights of the folder have been changed. <br />Please reload the list screen.'
    , 'doc_rev_rollback_conf': 'The document will be replaced by the selected document in the history. Are you sure?'
    , 'doc_rev_rollback_nochecked': 'Please select items to be roll backed.'
    , 'doc_undoedit_conf': 'The document will be replaced by previous version. Are you sure?'
    , 'docset_autohandload_nocecked': 'Please select items you want to capture.'
    , 'docset_autohandload_allconf': 'Are you sure you want to capture all items?'
    , 'docset_autohandload_someconf': 'Are you sure you want to capture the displayed {{count}} item(s)?'
    , 'docset_autohandload_listconf': 'Are you sure you want to capture {{count}} item(s) you selected?'
    , 'docset_delmanage_delall_nowexec': 'Deleting is in progress.'

//-----------------------------------------------------------
// キャビネット
//-----------------------------------------------------------
    , 'cab_folder_accsconf': 'Please choose how to change the access rights that are set lower-level folders.'  // フォルダアクセス権変更確認
    , 'cab_nofolder_addcab': 'There is no folder where to create cabinets.'
    , 'cab_nofolder': 'No folders are created.'
    , 'cab_nofolder_add': 'Create a folder and setup filter automatically'
    , 'cab_nofolder_addnot': 'Create a folder manually'
    , 'cab_folder_delconf': 'All sub-folders and cabinet data in the folder will also be deleted.'
    , 'cab_nofolder_search': 'Please select the folder you want to search.'
    , 'com_search_extension_toolarge': 'Up to 63 characters can be used for an extention.'
    , 'cab_deffolderadd': '"desknet\'s NEO" and "Web Clip" folders will be added, and then their filters will be set up. Are you sure?'
    , 'cab_deffoldersubadd': '* Each folder will have its functional folders. <br />* The current filters will be deleted due to the new filters.'
    , 'cab_refersizewarn': 'Since the size of file to be displayed is greater than {{size}} MB, the screen might not be displayed correctly. Are you sure to display it?'
    , 'cab_refersizewarnsub': 'If you click [{{CancelButton}}], it will be displayed as an attachment file.'

//-----------------------------------------------------------
// 安否確認
//-----------------------------------------------------------
    , 'safetyMailSendMsg': 'A delivery confirmation email has been sent.'
    , 'safetyClearDiaMsg': 'All the confirmation information of emergency contact will be cleared. Are you sure?'
    , 'warnSafetyAnswerMsg': 'Your safety status will be reported. Are you sure?'
    , 'safetyAnswerTextAreaRequiredMsg': 'Please report your current safety report.'
    , 'safetyAnswerTextAreaMsg': 'Please report whenever your safety status has changed.'
    , 'safetyAnswerSuccessMsg': 'Reporting safety status has been completed.'
    , 'safetyAnswerNoWriteMsg': 'No safety status is elected.'
    , 'safetyContactSuccessMsg': 'The emergency contact is updated.'
    , 'safetyRegUnconfDiaMsg': 'The Emergency Contact Registration Confirmation Email will be resent to the users who belong to {{gname}} and have not confirmed emergency contact. Are you sure?'
    , 'safetyNoSelectGroup': 'Please select the groups from the Target Group list.'
    , 'safetyConsendGrpConfirm': 'The Emergency Contact Registration Confirmation Email will be sent to the users who belong to {{gname}}, at each [Email Address] of their [Profile]. Are you sure?'
    , 'safetyRegsendGrpConfirm': 'The Confirmation Email of Emergency Contact will be sent to the users who belong to {{gname}}, at each [Email Address] of their [Emergency Contact]. Are you sure?'
    , 'safetyRetlyMailConfirm':'The Confirmation Email for Safety Status will be resent to the users who belong to {{gname}} and have not confirmed her/his safety status, at each [Email Address] of their [Emergency Contact]. Are you sure?'
    , 'safetySendGrpConfirm':'The Confirmation Email for Safety Status will be sent to the users who belong to {{gname}}, at each [Email Address] of their [Emergency Contact]. Are you sure?'
    , 'safetyTrgSendGrpConfirm': 'The Confirmation Email for Safety Status (Disaster Drill) will be sent to the users who belong to {{gname}}, at each [Email Address] of their [Emergency Contact]. Are you sure?'

//-----------------------------------------------------------
// インフォメーション
//-----------------------------------------------------------
    // カテゴリー削除の確認メッセージ
    , 'info_folderDelConf': 'Sub-Categories also will be deleted. <br />If there is no sub-category in Information,<br />"No Category" will be used as a category.'
    , 'info_guide_add_noperm': 'M:Since there is not category you have the creation right, you cannot create and update information message.'
    , 'info_approve_confirmok': 'The application will be approved. Are you sure?'

//-----------------------------------------------------------
// アクセスログ
//-----------------------------------------------------------
    , 'log_del_nochecked': 'To delete all access logs, please check the check box.'
    , 'log_srch_notarget': 'When you search for access logs, please select one or more condition from the search target, process, application, and client information.'

//-----------------------------------------------------------
// ログインデザイン設定
//-----------------------------------------------------------
    , 'warnResetLoginWinMsg': 'This design will be applied to the login screen. Are you sure? <br />* The setting is not saved unless clicking [Update] button.'
    , 'warnSetLoginWinMsg': 'The selected image will be deleted. Are you sure? <br />* The setting is not saved unless clicking [Update] button.'
    , 'warnDelLoginWinMsg': 'This design will be applied to the login screen. Are you sure?'
    , 'warnDelLoginWinAddMsg': '* If you delete the image which is used for the design setting, the design setting will be set to the default.'
    , 'warnSaveLoginWinMsg': 'The current setting will be saved. Are you sure?'

//-----------------------------------------------------------
// 購買予約
//-----------------------------------------------------------
    , 'koubai_fin_nochecked': 'Please select items you want to complete the back-order.'
    , 'koubai_cancel_nochecked': 'Please select items you want to cancel the order.'
    , 'koubai_def_nochecked': 'Please select items you want to re-open the order.'
    , 'koubai_defend_nochecked': 'Please select items you want to incomplete the back-order.'
    , 'koubai_fin_allconf': 'Are you sure you want to complete back-order for all items?'
    , 'koubai_fin_someconf': 'Are you sure you want to complete back-order for the displayed {{count}} item(s)?'
    , 'koubai_fin_listconf': 'Are you sure you want to complete back-order for {{count}} item(s) you selected?'
    , 'koubai_cancel_allconf': 'Are you sure you want to cancel all?'
    , 'koubai_cancel_someconf': 'Are you sure you want to cancel the displayed {{count}} item(s)?'
    , 'koubai_cancel_listconf': 'Are you sure you want to cancel {{count}} item(s) you selected?'
    , 'koubai_def_allconf': 'Are you sure you want to re-open all items?'
    , 'koubai_def_someconf': 'Are you sure you want to re-open the displayed {{count}} item(s)?'
    , 'koubai_def_listconf': 'Are you sure you want to re-open {{count}} item(s) you selected?'
    , 'koubai_defend_allconf': 'Are you sure you want to incomplete back-order for all items?'
    , 'koubai_defend_someconf': 'Are you sure you want to incomplete back-order for the displayed {{count}} item(s)?'
    , 'koubai_defend_listconf': 'Are you sure you want to incomplete back-order for {{count}} item(s) you selected?'
    , 'koubai_ordermg': 'Number of Orders at {{count}} st/nd/rd/th Person'
    , 'koubai_orderrv': '{{count}}st/nd/rd/th Item'

//-----------------------------------------------------------
// 備品管理
//-----------------------------------------------------------
    , 'stock_warnsendmsgbodyempty': 'Please enter message body.'
    , 'stock_warndownloadtargetempty': 'Please select the item you wan to download the history.'
    , 'stock_warndownloaddateinvalid': 'Please specify the past date than the end date to the start date of the download.'
    , 'stock_warnsearchstocknuminvalid': 'The value specified in the Qty on Hand is invalid.'
//-----------------------------------------------------------
// 回覧レポート
//-----------------------------------------------------------
    , 'creport_formatnoselect' : 'No form is selected.'
    , 'creport_complete_nochecked': 'Please select circulars/reports you want complete.'
    , 'creport_complete_conf' : 'Are you sure you want to complete?'
    , 'creport_check_nochecked': 'Please select circulars/reports you want confirm.'
    , 'creport_check_allconf' : 'Are you sure you want to confirm all?'
    , 'creport_check_someconf' : 'Are you sure you want to confirm the displayed {{count}} item(s)?'
    , 'creport_check_listconf' : 'Are you sure you want to confirm {{count}} item(s) you selected?'
    , 'creport_read_nochecked': 'Please select circulars/reports you want make as read.'
    , 'creport_unread_nochecked': 'Please select circulars/reports you want make as unread.'
    , 'creport_folderDelConf': 'Sub folders will be deleted at the same time. <br />Circulations and reports in the folder will not be deleted.'
    , 'creport_formatNotSelected': 'Please choose a form.'
    , 'creport_successNoticeSend': 'Sending a notification to unconfirmed users is completed.'
    , 'creport_confirm_subjectChange': 'Are you sure you want to set the content of title (form)? Are you sure?'
    , 'creport_edit_suspensionuser': 'The following users has been removed from the recipients because their accounts are currently being suspended.'
    , 'creport_edit_deleteuser': 'The following users were removed from the recipients because their accounts had been deleted.'
    , 'creport_check_nocheckeddel': 'Please select circulars/reports you want to move to trash.'
    , 'creport_selectformat' : 'Please choose a form.'
    , 'creport_confirm_format_chg': 'The entered data will be discarded once you switch the input mode. Are you sure you want to switch the input mode?'

//-----------------------------------------------------------
// アンケート
//-----------------------------------------------------------
    , 'enq_complete_confirm': 'Are you sure you want to complete?'
    , 'enq_finish_nochecked': 'Please select Questionnaire you want to complete.'
    , 'enq_formatnoselect' : 'No form is selected.'
    , 'enq_anonymouse_notice' : 'This questionnaire will be responded anonymously. Even the originator or an administrator cannot identify the respondents.'
    , 'enq_selectformat' : 'Please choose a form.'
    // 書式選択ダイアログ
    , 'enq_format_noselected': 'Please choose a form.'
    // 通知先選択ダイアログ
    , 'enq_route_notselected': 'Please choose recipients.'
    , 'enq_notice_success': 'Sending a notification to non-respondents is completed.'    // 未回答者へ通知成功メッセージ
    , 'enq_confirm_subjectChange': 'Are you sure you want to set the content of title (form)? Are you sure?'
    , 'enq_edit_suspensionuser': 'The following users has been removed from the recipients because their accounts are currently being suspended.'
    , 'enq_edit_deleteuser': 'The following users were removed from the recipients because their accounts had been deleted.'

//-----------------------------------------------------------
// ワークフロー
//-----------------------------------------------------------
    , 'flow_selectformat' : 'Please choose a form.'
    , 'flow_formatnoselect' : 'No form is selected.'
    // 未読
    , 'flow_unread_nochecked': 'Please select applications you want to make as read.'
    // 取り消し
    , 'flow_cancel_confirm': 'Are you sure you want to cancel the application?'
    , 'flow_cancel_nochecked': 'Please select items you want to cancel.'
    , 'flow_cancel_all': 'Are you sure you want to cancel all the applications?'
    , 'flow_cancel_some': 'Are you sure you want to cancel the displayed {{count}} application(s)?'
    , 'flow_cancel_list': 'Are you sure you want to cancel {{count}} application(s) you selected?'
    // 差戻し
    , 'flow_remand_confirm': 'Are you sure you want to remand the application?'
    , 'flow_remand_nochecked': 'Please select items you want to remand.'
    , 'flow_remand_all': 'Are you sure you want to remand all the applications?'
    , 'flow_remand_some': 'Are you sure you want to remand the displayed {{count}} application(s)?'
    , 'flow_remand_list': 'Are you sure you want to remand {{count}} application(s) you selected?'
    // 強制完了
    , 'flow_forcedend_confirm': 'Are you sure you want to force complete this application?'
    , 'flow_forcedend_nochecked': 'Please select the items you want to force complete.'
    // ダウンロード
    , 'flow_download_nochecked': 'Please select items you want to download.'
    // 経路編集
    , 'flow_route_remove_confirm': 'Are you sure you want to cancel?'
    , 'flow_route_no_approval_group_name': 'W:Please enter the approver group\'s name.'
    , 'flow_route_no_approver_users': 'W:Please select approvers.'
    , 'flow_route_no_approver_role': 'W:Please choose a role.'
    , 'flow_route_no_branch': 'W:Please select condition.'
    // 書式選択ダイアログ
    , 'flow_format_noselected': 'Please choose a form.'
    // 申請先選択ダイアログ
    , 'flow_route_noselected': 'Please select approvers.'
    // 承認確認ダイアログ
    , 'flow_approve_confirm1': 'The application will be authorized. Are you sure?'
    , 'flow_approve_confirm2': 'The application will be approved. Are you sure?'
    , 'flow_approve_confirm3': 'This application will be verified. Are you sure?'
    , 'flow_approve_confirmng': 'The application will be disapproved. Are you sure?'
    // 分岐条件設定のアラート
    , 'flow_unselectedformat': 'The parent form is not selected. Please select a parent form.'
    , 'flow_invalidbranch': 'The branch condition has been invalid.'
    , 'flow_remainerror': 'There is an error in the step.'
    // 組織内承認者設定
    , 'flow_on_nochecked': 'Please select users to whom you assign the group internal approver.'
    , 'flow_on_allconf': 'Are you sure you want to assign all users to the group internal approver?'
    , 'flow_on_someconf': 'Are you sure you want to assign displayed {{count}} users to the group internal approver?'
    , 'flow_on_listconf': 'Are you sure you want to assign {{count}} users you selected to the group internal approver?'
    , 'flow_off_nochecked': 'Please select users to whom you deassign the group internal approver.'
    , 'flow_off_allconf': 'Are you sure you want to deassign all users to the group internal approver?'
    , 'flow_off_someconf': 'Are you sure you want to deassign displayed {{count}} users to the group internal approver?'
    , 'flow_off_listconf': 'Are you sure you want to deassign {{count}} users you selected to the group internal approver?'
    , 'flow_keyword_err_message': 'W:The following characters cannot be used for keyword.'
    , 'flow_keyword_err_message_ex': '&#92 / : , ; * ? &#34; &#60; &#62; |'
    // 回覧・レポート連携
    , 'flow_creport_addcomplete': 'A circular/report has been created.'
//-----------------------------------------------------------
// 仮払精算
//-----------------------------------------------------------
    , 'pay_repuser': '{{name}}'
    , 'pay_rep_msg': 'You can claim the expense to {{namelist}}. Do you want to claim it?'
    , 'pay_item_not': 'Since there are not titles in the expense claim, the expense claim cannot be created.'
    , 'pay_item_notlink': 'Please add titles here.'
    , 'pay_item_notmanager': 'Please ask your system administrator.'
      // 精算のメッセージ
    , 'pay_demand_on_nochecked': 'Please select items you want to make paid.'
    , 'pay_demand_on_allconf': 'Are you sure you want to make all items paid?'
    , 'pay_demand_on_someconf': 'Are you sure you want to make the displayed {{count}} item(s) paid?'
    , 'pay_demand_on_listconf': 'Are you sure you want to make {{count}} item(s) you selected paid?'
    , 'pay_demand_on_conf': 'Are you sure you want to make it paid?'
      // 未精算のメッセージ
    , 'pay_demand_off_nochecked': 'Please select items you want to make unpaid.'
    , 'pay_demand_off_allconf': 'Are you sure you want to make all items unpaid?'
    , 'pay_demand_off_someconf': 'Are you sure you want to make the displayed {{count}} item(s) unpaid?'
    , 'pay_demand_off_listconf': 'Are you sure you want to make {{count}} item(s) you selected unpaid?'
    , 'pay_demand_off_conf': 'Are you sure you want to make it unpaid?'
      // 報告のメッセージ
    , 'pay_report_nochecked': 'Please select items you want to claim.'
    , 'pay_report_allconf': 'Are you sure you want to claim all?'
    , 'pay_report_someconf': 'Are you sure you want to claim the displayed {{count}} item(s)?'
    , 'pay_report_listconf': 'Are you sure you want to claim {{count}} item(s) you selected?'
      // エクスポート
    , 'pay_dl_nochecked': 'Please select a target to be exported.'
    
//-----------------------------------------------------------
// 議事録
//-----------------------------------------------------------
    , 'agenda_schedule_notselected': 'No event is selected.'
    , 'agenda_schedule_conflicted': 'Since the minutes are already created to the event you selected, you cannot create new minutes. Please select another event.'
    , 'agenda_schedule_noaccess': 'The event you do not have the Read access right is selected.'
//-----------------------------------------------------------
// プロジェクト
//-----------------------------------------------------------
    , 'prj_task_del' : 'Are you sure you want to delete [{{TaskName}}]?'
    , 'prj_task_datemove' : 'Do you want to change the period?'
    , 'prj_taskuser_itemnothing': 'W:Corresponding data does not exist. Failed to get task representative.'
//-----------------------------------------------------------
// 利用者名簿
//-----------------------------------------------------------
    , 'uset_del_alluser': 'You cannot delete all users.'
    , 'uset_del_usericon': 'The user information has been updated. Are you sure you want to delete your image?'
    , 'uset_suspension_nochecked_on': 'Please select at least one user of whom you want to suspend.'
    , 'uset_suspension_nochecked_off': 'Please select at least one user of whom you want to restore.'
    , 'uset_conf_suspension_on': 'Are you sure you want to suspend this user?'
    , 'uset_conf_suspension_off': 'Are you sure you want to restore this user?'
    , 'uset_conf_loginreset': 'Are you sure you want to unlock the blocked user account?'
    , 'uset_conf_deletedatabase': 'Are you sure you want to delete this user from database?'
    , 'uset_conf_deletecancel': 'Are you sure you want to restore this user?'
    , 'uset_loginreset_nochecked': 'Select at least one blocked user account that you want to unlock.'
    , 'uset_conf_addmsg_deletedatabase': 'If you click the Yes button, the user will be deleted from the database and all the user data such as events of Schedule, data of WebMail, etc. will be deleted too.'
    , 'uset_conf_addmsg_deletecancel': 'The user will not be deleted but the user will be in a suspended condition.'
//-----------------------------------------------------------
// 組織
//-----------------------------------------------------------
    , 'set_group_delconf': 'Sub groups will also be deleted.'
    , 'set_group_notaccs': 'You have no access rights.'
//-----------------------------------------------------------
// ウェブメール
//-----------------------------------------------------------
    // アカウント設定
    , 'mail_acc_nodata': 'There are no applicable data.'
    // メール索引の最適化
    , 'mail_vac_alluserconf': 'Are you sure you want to optimize for all users?'
    , 'mail_vac_allshareconf': 'Are you sure you want to optimize for all the public accounts?'
    , 'mail_vac_allconf': 'Are you sure you want to optimize for all?'
    , 'mail_vac_someconf': 'Are you sure you want to optimize for the displayed {{count}} item(s)?'
    , 'mail_vac_listconf': 'Are you sure you want to optimize for {{count}} item(s) you selected?'
    , 'mail_vac_nowexec': 'Optimize message indexes is in progress.'
    // 容量設定
    , 'mail_cap_ddelday': '{{days}} day(s) from the date of message'
    , 'mail_cap_dindelday': '{{days}} day(s) from the date of deletion'
    // メール作成画面起動時のアカウント存在チェック用
    , 'mail_noaccset': 'Since no email account is setup, you cannot use it.'
    , 'mail_move_accset': 'No email account is setup. <br />Do you want to setup email account?'
    // スマホ版用
    , 'sp_mail_send_required': 'Please specify at least one recipient.'
    , 'sp_mail_filter_error': 'Failed to process filtering.'
    , 'sp_mail_filter_errcnt': '{{count}} item(s)'
    , 'sp_mail_warning_manysend': 'It is possible to occure information disclosure becaus of specified many email addresses in From and CC. Please consider to use BCC.'
    // 共有アカウントの利用有無(利用させる)
    , 'mail_accuse_on_nochecked': 'Please select the items you let the users to use.'
    , 'mail_accuse_on_allconf': 'Are you sure you let the users to use all?'
    , 'mail_accuse_on_someconf': 'Are you sure you let the users to use {{count}} item(s) displaying?'
    , 'mail_accuse_on_listconf': 'Are you sure you let the users to use {{count}} item(s) you selected?'
    // 共有アカウントの利用有無(利用させない)
    , 'mail_accuse_off_nochecked': 'Please select the items you let the users to not use.'
    , 'mail_accuse_off_allconf': 'Are you sure you let the users to not use all?'
    , 'mail_accuse_off_someconf': 'Are you sure you let the users to not use {{count}} item(s) displaying?'
    , 'mail_accuse_off_listconf': 'Are you sure you let the users to not use {{count}} item(s) you selected?'
    // 個人アカウント・共有アカウント削除時の追加メッセージ
    , 'mail_delmessage_option': '* All messages in the deleted account also will be deleted.'
//-----------------------------------------------------------
// ウェブメールIMAP
//-----------------------------------------------------------
    // ディレクトリサービス設定設定
    , 'mailimap_dir_connect': 'Connection to the directory service has been succeeded.'
//-----------------------------------------------------------
// タイムカード
//-----------------------------------------------------------
    , 'tcard_sync_nowexec': 'M:Resummarizing working records is in progress.'
    , 'tcard_sync_end': 'M:Resummarizing working records was completed.'
    , 'tcard_sync_noconf': 'W:Please check Resummarizing Working Records.'
//-----------------------------------------------------------
// 電子会議室
//-----------------------------------------------------------
    , 'forum_log_del_nochecked': 'To delete access logs, please check the check box.'
    , 'forum_log_del_run': 'Are you sure to delete the access logs?'
//-----------------------------------------------------------
// 来訪者
//-----------------------------------------------------------
    , 'visitor_search_target': 'W:Please select items to be searched.'
//-----------------------------------------------------------
// 印刷関連
//-----------------------------------------------------------
    , 'print_noset_javascript': 'The printable view cannot be displayed.' // 印刷用画面起動時に、HTMLを設定するjavascriptが未設定
    , 'print_mainwindow_no': 'Since the original screen is closed, the printable view cannot be displayed. <br />Please close the browser and try again from the beginning.' // 印刷用画面を起動したwindowが存在しない
    , 'print_mainwindow_chg': 'Since the original screen is moved, the printable view cannot be displayed. <br />Please close the browser and try to click "Print" link.' // 印刷用画面を起動した画面が別画面に移動している。
//-----------------------------------------------------------
// モバイルログイン設定
//-----------------------------------------------------------
    , 'set_mblogin_saveterm_0': 'W:Please set a value greater than 0 for Validity Period of Session Information.'
    , 'set_mblogin_savelogininfo_both': 'If you want to save the login ID and password in the browser of the mobile device, when you lose your mobile device, unspecified third parties will be able to login.'
    , 'set_mblogin_savesidterm_ever': 'If you set long period or indefinitely period to the Validity Period of Session Information, when you lose your mobile device, the period which unspecified third parties will be able to login would be prolonged.'
    , 'set_mblogin_savesidterm_ever_reconfirm': 'The Validity Period of Session Information is set to {{savesidterm}}. <br />Risks, such as when you lose your mobile device will be higher, do you really want to set with the setting?'
    , 'set_mblogin_confirm_saveset': 'Are you sure you want to setup with the settings?'
    , 'set_mblogin_savesidterm_nolimit': 'Indefinite Period'
    , 'set_mblogin_savesidterm_long': 'Long Time'
//-----------------------------------------------------------
// desknet's メニュー設定
//-----------------------------------------------------------
    , 'set_menu_groupdisplay_on': 'The usage setting has been changed. The application can be used by the users who could not use it before. Are you sure to change the setting?'
    , 'set_menu_groupdisplay_off': 'The usage setting has been changed. The application cannot be used by the users who used it before. Are you sure to change the setting?'
//-----------------------------------------------------------
// プロキシサーバー設定
//-----------------------------------------------------------
    , 'set_proxy_success': 'M:Connected the proxy server successfully.'
//-----------------------------------------------------------
// 添付ファイル関連
//-----------------------------------------------------------
    , 'att_total_size_over':     'W:Total size of files exceeds the limit. Total Size ({{total}}) / Max Size ({{limit}})'
    , 'att_filesize_zero':       'W:You cannot upload 0 byte file. ({{filenames}})'
    , 'att_overlap_file_single': 'The file name is duplicated. Do you want to overwrite it? ({{filenames}})'
    , 'att_overlap_file_multi':  'There are {{num}} files whose name is a duplicate. Do you want to overwrite it? ({{filenames}})'
    , 'att_other_files':         '... Other ({{num}} Files)'
    , 'att_drop_max_over':       'W:The number of files to be dropped exceeds the limit. {{num}} files were selected. The limit is {{max}} files.'
    , 'att_illegal_filename':    'W:The file name is invalid.'
    , 'att_file_select':         'W:Please select file you want to upload.'
    , 'att_detach_all':          'All files will be canceled. Are you sure?'
    , 'att_close_dialog':        'The files you selected will not be uploaded. Are you sure?'
    , 'att_close_clear':         'Do you want to cancel file you uploaded?'
    , 'att_del_confirm':         '"{{filenames}}" will be canceled. Are you sure?'
    , 'att_network_err':         'Failed to connect to the server.'
    , 'att_upload_now':          'Uploading now.'
    , 'att_flash_reject_cancel_single': 'W:The overwritten file "{{filenames}}" could not be canceled.'
    , 'att_flash_reject_cancel_multi' : 'W:The overwritten file "{{filenames}}" and other ({{num}} files) could not be canceled.'
    , 'att_flash_reject_delete'       : 'W:The overwritten file "{{filenames}}" could not be deleted.'
    , 'att_404_errorMessage' : 'The URL is wrong, or there may be a uploding file size limit because of the web server settings. Please ask your system administrator.'
// NVP350_0028781 start
    , 'att_zip_download':        'File Batch Download'
    , 'att_zip_exec' :           'M:The file is being compressed. <br />Please wait for awhile.'
    , 'att_zip_fin' :            'File compression completed. <br />Please download the file by clicking the following link.'
    , 'att_zip_downlink' :       'Download Compressed Files'
// NVP350_0028781 end
//-----------------------------------------------------------
// メールインポート関連
//-----------------------------------------------------------
    , 'emlimport_total_size_over':     'W:The uploaded file exceeds the maximum size for importing. Total size({{total}})/Import Max Size({{limit}})'
    , 'emlimport_filesize_zero':       'W:You cannot import an empty file. ({{filenames}})'
    , 'emlimport_file_select':         'W:Select a import file.'
    , 'emlimport_close_dialog':        'Some file(s) have not been imported. Are you sure?' //'指定したファイルはインポートされません。よろしいですか？'
    , 'emlimport_upload_now':          'Import is in progress.'
//-----------------------------------------------------------
// 自動保存
//-----------------------------------------------------------
    , 'auto_save_msg': 'An auto-saved data in process of creation was detected. <br>Do you want to recover the auto-saved data? <br><br>If you select "No", it will be deleted completely.'
    , 'auto_save_mod_msg': 'An auto-saved data in process of modification was detected. <br>Do you want to recover the auto-saved data? <br><br>If you select "No", it will be deleted completely.'
});

/// <summary>ページ遷移</summary>
if (!desknets.Resource.Pager) {
    desknets.Resource.Pager = {};
}
$.extend(desknets.Resource.Pager, {
    'msgPageNavi': '{{allcnt}} Record(s)'
  , 'msgPageMove': '{{nowpage}}/{{allpage}}'
  , 'msgPageInput': 'Page:'
  , 'msgPageInputBtn': 'Move'
  , 'msgPageFirst': 'Top'
  , 'msgPagePrev': 'Prev'
  , 'msgPageNext': 'Next'
  , 'msgPageLast': 'Last'
});

/// <summary>添付ファイル関連</summary>
if (!desknets.Resource.attach) {
    desknets.Resource.attach = {};
}
$.extend(desknets.Resource.attach, {
    // 処理中表示で100%の場合、プログレスバーに表示する文言
  'saveMsg': '<span class="co-pop-tp-file-save">Saving...</span>'
  , 'saveMsgIE': 'Saving...'
    // IEでアップロード中にプログレスバーへ表示しておく文言
  , 'uploadMsg': 'Saving...'
    // ドロップ可能な最大数を表示
  , 'dropMaxMsg': 'Drop files (max. {{maxdrop}} files) or,'
    // Flashに渡すラベル
  , 'saveLabel': 'Saving...'
  , 'deleteAllLabel': 'Unselect All'
  , 'flashChangeMsg': '<p class="co-msg">*&nbsp;If you want to use the attachment button which has the  multiple attachments feature, please switch the upload mode.-&gt; &gt; <a href="#" class="co-pop-tp-flash-mode-change-btn">Switch</a></p>'
  , 'flashChangeMsgNormal': '<p class="co-msg">*&nbsp;If the attachment button does not work correctly, please switch the upload mode. -&gt; &gt; <a href="#" class="co-pop-tp-flash-mode-change-btn">Switch</a></p>'
  , 'flashDownloadMsg': '<p class="co-msg"><FONT color="red">* &nbsp;FlashPlaye is not installed. Please install FlashPlayer. </FONT><a href="http://www.adobe.com/go/getflashplayer" target="flash"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p>'

  , 'cancelAllUploadLabel': 'Stop All Uploads'
  , 'dropHereLabel': 'Drop files here or'
  , 'clickFileSelectLabel': 'click to select files.'
  , 'selectFromButtonLabel': 'select files by using the Attach button.'
  , 'attachLabel': 'Attachment'
  , 'releaseLabel': 'Unselect'
  , 'deleteLabel': 'Delete'
  , 'fileUploadLabel': 'Upload Files'
  , 'dialogTitle': 'Attachment Files'
});

/// <summary>メールインポート</summary>
if (!desknets.Resource.emlimport) {
    desknets.Resource.emlimport = {};
}
$.extend(desknets.Resource.emlimport, {
    // 処理中表示で100%の場合、プログレスバーに表示する文言
  'saveMsg': '<span class="co-pop-tp-file-save">Importing</span>'
  , 'saveMsgIE': 'Importing'
    // IEでアップロード中にプログレスバーへ表示しておく文言
  , 'uploadMsg': 'Importing'
    // ドロップ可能な最大数を表示
  , 'dropMaxMsg': 'Drop email files (max. {{maxdrop}} files) or,'
    // Flashに渡すラベル
  , 'deleteAllLabel': 'Unselect All'
  , 'cancelAllUploadLabel': 'Stop All Imports'
  , 'dropHereLabel': 'Drop email files here or'
  , 'clickFileSelectLabel': 'click to select email files.'
  , 'selectFromButtonLabel': 'select email files by using the Attach button.'
  , 'attachLabel': 'Select'
  , 'releaseLabel': 'Unselect'
  , 'deleteLabel': 'Delete'
  , 'fileUploadLabel': 'Import Email Messages'
  , 'dialogTitle': 'Import'
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
        showMonthAfterYear: false,
        weekHeader: desknets.Resource.week,
        yearSuffix: desknets.Resource.year,
        firstDay: 0,
        isRTL: false,
        yearNav: true
    });
}
