/// <summary>ウェブメール文言</summary>
if (!desknets.Resource.mail) {
    desknets.Resource.mail = {};
}
$.extend(desknets.Resource.mail, {
        //------------------------------------------
        // アカウント設定
        //------------------------------------------
          'mailuseon': '利用させる'
        , 'mailuseoff': '利用させない'
        , 'accuseon': '行う'
        , 'accuseoff': '行わない'
        , 'statok': '正常'
        , 'statng': 'エラー'

        //------------------------------------------
        // 共有アカウント容量設定
        //------------------------------------------
        , 'shareaccdialogtitle': '共有アカウント選択'
});
/// <summary>ウェブメール文言スマホ</summary>
if (!desknets.Resource.mail.sp) {
    desknets.Resource.mail.sp = {};
}
$.extend(desknets.Resource.mail.sp, {
        'receive': '受信中'
});
