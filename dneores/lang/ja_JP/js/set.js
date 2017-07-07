/// <summary>管理者設定文言</summary>
if (!desknets.Resource.set) {
    desknets.Resource.set = {};
}
$.extend(desknets.Resource.set, {
    /*
    ダイアログタイトル
    */
    'setCondition': '条件設定',

    /*
    条件
    */
    'conditionInclude': '含む',
    'conditionExclude': '除く',
    'conditionAllDescendant': '（下位すべて）',

    /*
    メニュー
    */
    'commenuGroupName': '(共通メニュー)',
    'setMenuDisplayOn': '使用する',
    'setMenuDisplayOff': '使用しない',
    'setMenuTargetSame': '同一ウィンドウで起動',
    'setMenuTargetNew': '別ウィンドウで起動',
    'setMenuTargetSameShort': '同一',
    'setMenuTargetNewShort': '別',

    // 祝日カレンダー
    'setHolidayCalAssignGrp': '個別に指定している組織以外すべて',

    // 祝日インポート ダイアログタイトル
    'setHolidayImport': 'カレンダー選択',

    // ライセンス
    'licenseCustomerList': 'お客様コード',
    'licenseUser': '{{members}}ユーザー',
    /*
    アクセス数集計
    */
    'acclogTermMessage': '集計結果:{{start}}&nbsp;～&nbsp;{{end}}',
    /*
    シングルサインオン設定クライアント名
    */
    'undefinedName': '(未設定)',
});
