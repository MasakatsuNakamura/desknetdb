/// <summary>ウェブメール文言</summary>
if (!desknets.Resource.mail) {
    desknets.Resource.mail = {};
}
$.extend(desknets.Resource.mail, {
        //------------------------------------------
        // アカウント設定
        //------------------------------------------
          'mailuseon': 'Use'
        , 'mailuseoff': 'Do Not Use'
        , 'accuseon': 'Yes'
        , 'accuseoff': 'No'
        , 'statok': 'Normal'
        , 'statng': 'Error'

        //------------------------------------------
        // 共有アカウント容量設定
        //------------------------------------------
        , 'shareaccdialogtitle': 'Select Public Accounts'
});
/// <summary>ウェブメール文言スマホ</summary>
if (!desknets.Resource.mail.sp) {
    desknets.Resource.mail.sp = {};
}
$.extend(desknets.Resource.mail.sp, {
        'receive': 'Receiving'
});
