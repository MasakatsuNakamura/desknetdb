/// <summary>回覧レポート文言</summary>
if (!desknets.Resource.creport) {
    desknets.Resource.creport = {};
}
$.extend(desknets.Resource.creport, {
        'agenda': 'Minutes',                       // 連携のアイコンtitle
        'formatSelectDialogTitle': 'Choose Form',    // 書式選択ダイアログのタイトル
        'byToday': 'Within Today',                      // 締切日（猶予）の文言
        'daySymbol': 'Days',                        // 締切日（猶予）の単位
//        'delConfTrash'  : 'ゴミ箱へ移動',         // 削除確認ダイアログでの選択肢
//        'delConfDelete': '削除',                  // 削除確認ダイアログでの選択肢
        'memo': 'Details',                           // 内容欄のレングスエラーメッセージ
        'finish': 'Complete',                         // 状態
        'formnoset': 'Unspecified',                    // 書式未設定
        'commentOpen': 'Expand',                    // 詳細画面でのコメント展開リンク(閉じた場合)
        'commentClose': 'Close',                 // 詳細画面でのコメント展開リンク(開いた場合)
        'commentOpenAll': 'Expand All Comments',     // 詳細画面での全コメント展開リンク(開いた場合)
        'commentCloseAll': 'Close All Comments',  // 詳細画面での全コメント展開リンク(開いた場合)
        'sendCopyDialogTitle': 'Copy & Create',          // 複写して作成するときの選択ダイアログのタイトル
        'sendCopyAll': 'Set Everyone as Recipient',            // 自分が作成した回覧を複写して作成するときの選択肢
        'sendCopyNoCheck': 'Set Unconfirmed Users as Recipient',  // 自分が作成した回覧を複写して作成するときの選択肢
        'noticeUnconfirmUserDialogTitle': 'Notify to Unconfirmed Users', // 未確認者へ通知ダイアログのタイトル
        'flow': 'Workflow',                   // 連携のアイコンtitle NVP200_0012546
        'othercount': '{{count}} Unconfirmed Comment(s)',
/*
スマートフォン版
*/
        // フォルダ
        'trayNew': 'New/Unconfirmed',
        'traySent': 'Sent',
        'trayDone': 'Confirmed',
        'dataPoster': 'Created By',
        'dataUnConfirm': 'Unconfirmed&nbsp;',

        'dmy': ''
});
