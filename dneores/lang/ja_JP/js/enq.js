/// <summary>アンケート文言</summary>
if (!desknets.Resource.enq) {
    desknets.Resource.enq = {};
}
$.extend(desknets.Resource.enq, {
    'setnot': '未設定',
    'routeSelectDialogTitle': '送信先選択',             // 送信先選択ダイアログ
    'byToday': '今日中',                                // 締切日（猶予）の文言
    'daySymbol': '日',                                  // 締切日（猶予）の単位
    'finish': '完了',                                   // 状態
    'replied': '回答済',                                // 状態
    'closedatetitle': '締切日の変更',                   // ダイアログタイトル
    'noticeUnconfirmUserDialogTitle': '未回答者へ通知', // 未確認者へ通知ダイアログのタイトル
    'dmy': ''
});
