/// <summary>管理者設定文言</summary>
if (!desknets.Resource.set) {
    desknets.Resource.set = {};
}
$.extend(desknets.Resource.set, {
    /*
    ダイアログタイトル
    */
    'setCondition': 'Set Condition',

    /*
    条件
    */
    'conditionInclude': 'Include',
    'conditionExclude': 'Exclude',
    'conditionAllDescendant': '(Subordinates)',

    /*
    メニュー
    */
    'commenuGroupName': '(Common Menu)',
    'setMenuDisplayOn': 'Use',
    'setMenuDisplayOff': 'Do Not Use',
    'setMenuTargetSame': 'The Current Window',
    'setMenuTargetNew': 'A New Window',
    'setMenuTargetSameShort': 'Current',
    'setMenuTargetNewShort': 'New',

    // 祝日カレンダー
    'setHolidayCalAssignGrp': 'All groups other than the specified groups',

    // 祝日インポート ダイアログタイトル
    'setHolidayImport': 'Date Picker',

    // ライセンス
    'licenseCustomerList': 'Customer Code',
    'licenseUser': '{{members}} Users',
    /*
    アクセス数集計
    */
    'acclogTermMessage': 'Summarizing Result: {{start}}&nbsp;-&nbsp;{{end}}',
    /*
    シングルサインオン設定クライアント名
    */
    'undefinedName': '(Unspecified)',
});
