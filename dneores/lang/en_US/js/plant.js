/// <summary>設備予約文言</summary>
if (!desknets.Resource.plant) {
    desknets.Resource.plant = {};
}
$.extend(desknets.Resource.plant, {
    //------------------------------------------
    // カレンダー
    //------------------------------------------
    'plantSelMsg': '{{cnt}} item(s) selected.',
    //------------------------------------------
    // 設備一覧
    //------------------------------------------
    'commonGroupName': 'Public Facility',
    'commonassignGroupName': '(All Manageable Groups )',
    'selectPGroupAll': 'Select Facility Group',    // 設備グループ選択初期値
    'selectPGroupTab': 'Facility Group',        // 設備選択ダイアログのタブ名
    'profTitle': 'Details of Facility',              // 設備情報ダイアログタイトル
    'dayTitle': 'Day',                   // 設備１日タイトル
    'weekTitle': 'Week',                  // 設備週間タイトル
    'monthTitle': 'Month',                 // 設備月間タイトル

    //------------------------------------------
    // 設備情報一括設定
    //------------------------------------------
    'pselGuide_chk_copy': 'Choose a facility to copy its settings.',
    'pselGuide_chk': 'Select facilities to update their settings.',
    'pselGuide_list': 'The same facilities displaying in the list are displayed.',
    'inheritPGroup': '(Use the setting of facility group)',

    //------------------------------------------
    // ダミー
    //------------------------------------------
    'dmy': ''
});
