/// <summary>議事録文言</summary>
if (!desknets.Resource.agenda) {
    desknets.Resource.agenda = {};
}
$.extend(desknets.Resource.agenda, {
        // 議事録編集-社外参加者選択
        'setmailto': '社外参加者',
        // 議事録編集-回覧先選択
        'setcircleto': '回覧・レポート',
        // 議事録-スケジュール参照
        'schreferdtl': '予定の詳細',
        // 議事録-スケジュール選択
        'setselschedule': 'スケジュール選択',
        // 議事録-内容確認画面送信リスト - 送信する
        'doSendMail': 'する',
        // 議事録-内容確認画面送信リスト - 送信しない
        'doNotSendMail': 'しない',
        // 議事録作成 - 文書管理のフォルダ選択ダイアログタイトル
        'selectDocFolder': '保存先文書管理フォルダ選択'
});
