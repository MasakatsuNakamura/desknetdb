/// <summary>アンケート文言</summary>
if (!desknets.Resource.enq) {
    desknets.Resource.enq = {};
}
$.extend(desknets.Resource.enq, {
    'setnot': 'Unspecified',
    'routeSelectDialogTitle': 'Select Recipients',             // 送信先選択ダイアログ
    'byToday': 'Within Today',                                // 締切日（猶予）の文言
    'daySymbol': 'Days',                                  // 締切日（猶予）の単位
    'finish': 'Complete',                                   // 状態
    'replied': 'Responded',                                // 状態
    'closedatetitle': 'Change Deadline',                   // ダイアログタイトル
    'noticeUnconfirmUserDialogTitle': 'Notify to Non-respondent', // 未確認者へ通知ダイアログのタイトル
    'dmy': ''
});
