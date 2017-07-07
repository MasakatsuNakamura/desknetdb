var desknets = desknets ? desknets : {};

desknets.Resource = desknets.Resource ? desknets.Resource : {};
/// <summary>ウェブクリップ</summary>
if (!desknets.Resource.webclip) {
    desknets.Resource.webclip = {};
}

// メインで表示するメッセージ
desknets.Resource.webclip['msgSelImg'] = 'クリップする画像を指定して下さい。';
desknets.Resource.webclip['msgSelImgMax'] = '選択可能な画像の数を超えています。最大=';
desknets.Resource.webclip['msgImgNoting'] = 'クリップ対象の画像が存在しません';

// iframe内で表示するメッセージ
desknets.Resource.webclip['msgSendError'] = 'サーバーとの通信に失敗しました。';
desknets.Resource.webclip['msgErrorCode'] = 'エラーコード：';
desknets.Resource.webclip['msgRetryLogin'] = 'サーバーとのセッションが無効になっています。再度ログインして下さい。';
// ログイン前のエラーメッセージ（ログイン前は言語が確定していないので独自に定義）
desknets.Resource.webclip['msgLoginError'] = '入力したログイン情報に誤りがあります。正しい値を入力してください。';

// メッセージ領域
desknets.Resource.webclip['loginMsg'] = 'desknet\'s NEOのログインIDとパスワードを入力してください。';
desknets.Resource.webclip['loginLabel'] = 'ログイン';
desknets.Resource.webclip['logoutLabel'] = 'ログアウト';
desknets.Resource.webclip['passwdLabel'] = 'パスワード';
desknets.Resource.webclip['imageClipMsg'] = '[クリッピングする]ボタンを押すと、チェックを付けた画像をクリッピングします。';
desknets.Resource.webclip['imageClipCnt'] = '件の画像が選択中です。';
desknets.Resource.webclip['htmlClipMsg'] = '[クリッピングする]ボタンを押すと、画面全体をクリッピングします。';
desknets.Resource.webclip['selectClipMsg'] = '[クリッピングする]ボタンを押すと、選択しているエリアをクリッピングします。';
desknets.Resource.webclip['clipBtnLabel'] = 'クリッピングする';
desknets.Resource.webclip['connectMsg'] = '- desknet\'s NEO と接続中 -';
desknets.Resource.webclip['cancelLabel'] = '中止';
desknets.Resource.webclip['clipComplete'] = '[キャビネット]に登録しました。';
desknets.Resource.webclip['clipFolder'] = '登録先フォルダ';
desknets.Resource.webclip['clipCancel'] = 'クリッピングを中止しました。';

desknets.Resource.webclip['errInit'] = 'クリップの初期化に失敗しました。\nネットワーク接続を確認して下さい。';

// POPメッセージ領域
desknets.Resource.webclip['titleComplete'] = 'クリッピング完了';
desknets.Resource.webclip['titleWarning'] = '警告';
desknets.Resource.webclip['titleAttention'] = '注意';
desknets.Resource.webclip['titleConfirm'] = '確認';
desknets.Resource.webclip['msgComplte'] = 'ログイン';
desknets.Resource.webclip['errDocMode'] = 'このページはクリップ対象外のドキュメントモードで動作している為、クリップできません。F12を押してドキュメントモードを標準にして下さい。現在のドキュメントモード=';
desknets.Resource.webclip['errBlowser'] = 'サポート対象外のブラウザの為、クリップできません。';
desknets.Resource.webclip['okBtnLabel'] = 'OK';
