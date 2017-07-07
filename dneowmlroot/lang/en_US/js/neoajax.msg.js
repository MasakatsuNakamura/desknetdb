if (!neo.Ajax.ajaxMessages) {
    neo.Ajax.ajaxMessages = {};
}
$.extend(neo.Ajax.ajaxMessages, {

        // ダイアログのタイトル
        'dialogTitle': 'Communication Error',

        // ダイアログを閉じるボタン
        'dialogCloseButtonCaption': 'Close',

        // ダイアログのメッセージ初めに表示するもの
        'errBase': 'The following error occurred while communication. If you continue using this application, please refresh your browser screen.',

        // XMLパースエラー
        'parsererror': 'An error occurred on the server. (invalid response)',

        // デフォルトエラーメッセージ
        'defaultMessage': 'The server is stopped or the network is too busy.',

        // ダイアログボタン
        'OK': 'OK',
        'cancel': 'Cancel',

        // ダイアログタイトル
        'confirm': 'Confirm',

        // 通信中の画面遷移確認
        'msgConfirmMove': 'The communication is in progress. Do you want to move?'
});
if (!neo.Ajax.ajaxMessages.errHttp) {
    neo.Ajax.ajaxMessages.errHttp = {};
}
$.extend(neo.Ajax.ajaxMessages.errHttp, {

        // HTTPエラー
        '400': 'This process has been done or is doing with wrong procedure. Stop the process and retry it.',
        '403': 'Cannot access the requested operation. The session may has expired or privilege changes may occurred. Please interrupting the work, and try again from the beginning.',
        '404': 'The URL of the server may be wrong.',
        '408': 'The database is currently too busy. Please wait for a while and try it again.',
        '409': 'An error, such as the database is stopped or there is no access right to the work area occurred on the server. Please contact your administrator.',
        '500': 'An error occurred on the server.',
        '503': 'The server is currently too busy. Please wait for a while and try it later on.',
        '504': 'Timeout has occurred on the server.'
});
