/// <summary>議事録文言</summary>
if (!desknets.Resource.agenda) {
    desknets.Resource.agenda = {};
}
$.extend(desknets.Resource.agenda, {
        // 議事録編集-社外参加者選択
        'setmailto': 'Outside Partic.',
        // 議事録編集-回覧先選択
        'setcircleto': 'Circulation/Report',
        // 議事録-スケジュール参照
        'schreferdtl': 'Details of Event',
        // 議事録-スケジュール選択
        'setselschedule': 'Choose Event',
        // 議事録-内容確認画面送信リスト - 送信する
        'doSendMail': 'Yes',
        // 議事録-内容確認画面送信リスト - 送信しない
        'doNotSendMail': 'No',
        // 議事録作成 - 文書管理のフォルダ選択ダイアログタイトル
        'selectDocFolder': 'Select Destination Folder in Document Management'
});
