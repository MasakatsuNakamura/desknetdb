/// <summary>回覧レポート文言</summary>
if (!desknets.Resource.creport) {
    desknets.Resource.creport = {};
}
$.extend(desknets.Resource.creport, {
        'agenda': '議事録',                       // 連携のアイコンtitle
        'formatSelectDialogTitle': '書式選択',    // 書式選択ダイアログのタイトル
        'byToday': '今日中',                      // 締切日（猶予）の文言
        'daySymbol': '日',                        // 締切日（猶予）の単位
//        'delConfTrash'  : 'ゴミ箱へ移動',         // 削除確認ダイアログでの選択肢
//        'delConfDelete': '削除',                  // 削除確認ダイアログでの選択肢
        'memo': '内容',                           // 内容欄のレングスエラーメッセージ
        'finish': '完了',                         // 状態
        'formnoset': '未設定',                    // 書式未設定
        'commentOpen': '展開',                    // 詳細画面でのコメント展開リンク(閉じた場合)
        'commentClose': '閉じる',                 // 詳細画面でのコメント展開リンク(開いた場合)
        'commentOpenAll': 'すべてのコメントを展開',     // 詳細画面での全コメント展開リンク(開いた場合)
        'commentCloseAll': 'すべてのコメントを閉じる',  // 詳細画面での全コメント展開リンク(開いた場合)
        'sendCopyDialogTitle': '複写して作成',          // 複写して作成するときの選択ダイアログのタイトル
        'sendCopyAll': '全員を通知先に設定する',            // 自分が作成した回覧を複写して作成するときの選択肢
        'sendCopyNoCheck': '未確認者のみ通知先に設定する',  // 自分が作成した回覧を複写して作成するときの選択肢
        'noticeUnconfirmUserDialogTitle': '未確認者へ通知', // 未確認者へ通知ダイアログのタイトル
        'flow': 'ワークフロー',                   // 連携のアイコンtitle NVP200_0012546
        'othercount': '未確認コメント他{{count}}件',
/*
スマートフォン版
*/
        // フォルダ
        'trayNew': '新着/未確認',
        'traySent': '作成分',
        'trayDone': '確認済み',
        'dataPoster': '作成者',
        'dataUnConfirm': '未確認',

        'dmy': ''
});
