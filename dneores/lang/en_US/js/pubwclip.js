var desknets = desknets ? desknets : {};

desknets.Resource = desknets.Resource ? desknets.Resource : {};
/// <summary>ウェブクリップ</summary>
if (!desknets.Resource.webclip) {
    desknets.Resource.webclip = {};
}

// メインで表示するメッセージ
desknets.Resource.webclip['msgSelImg'] = 'Select images to be clipped.';
desknets.Resource.webclip['msgSelImgMax'] = 'The number of images exceeds the limit. Max=';
desknets.Resource.webclip['msgImgNoting'] = 'There are no images to be clipped.';

// iframe内で表示するメッセージ
desknets.Resource.webclip['msgSendError'] = 'Failed to communicate with the server.';
desknets.Resource.webclip['msgErrorCode'] = 'Error Code:';
desknets.Resource.webclip['msgRetryLogin'] = 'The session with the server is no longer valid. Please login again.';
// ログイン前のエラーメッセージ（ログイン前は言語が確定していないので独自に定義）
desknets.Resource.webclip['msgLoginError'] = 'The login information you entered is not correct. Please enter correct value.';

// メッセージ領域
desknets.Resource.webclip['loginMsg'] = 'Please enter login ID and password for desknet\'s NEO.';
desknets.Resource.webclip['loginLabel'] = 'Login';
desknets.Resource.webclip['logoutLabel'] = 'Logout';
desknets.Resource.webclip['passwdLabel'] = 'Password';
desknets.Resource.webclip['imageClipMsg'] = 'When press [Clip] button, checked images will be clipped.';
desknets.Resource.webclip['imageClipCnt'] = ' image(s) selected.';
desknets.Resource.webclip['htmlClipMsg'] = 'When press [Clip] button, entire image will be clipped.';
desknets.Resource.webclip['selectClipMsg'] = 'When press [Clip] button, selected area will be clipped.';
desknets.Resource.webclip['clipBtnLabel'] = 'Clip';
desknets.Resource.webclip['connectMsg'] = '- Connecting to desknet\'s NEO -';
desknets.Resource.webclip['cancelLabel'] = 'Stop';
desknets.Resource.webclip['clipComplete'] = 'It has been added to the Cabinet.';
desknets.Resource.webclip['clipFolder'] = 'Saved Folder';
desknets.Resource.webclip['clipCancel'] = 'Clipping has been canceled.';

desknets.Resource.webclip['errInit'] = 'Failed to initialize the clip. \nPlease check the network connection.';

// POPメッセージ領域
desknets.Resource.webclip['titleComplete'] = 'Clipping completed';
desknets.Resource.webclip['titleWarning'] = 'Warning';
desknets.Resource.webclip['titleAttention'] = 'Note';
desknets.Resource.webclip['titleConfirm'] = 'Confirm';
desknets.Resource.webclip['msgComplte'] = 'Login';
desknets.Resource.webclip['errDocMode'] = 'This page cannot be clipped because the document mode is not supported. Press F12 to change the document mode to standard. The current document mode=';
desknets.Resource.webclip['errBlowser'] = 'Clipping cannot be done because the browser is not supported.';
desknets.Resource.webclip['okBtnLabel'] = 'OK';
