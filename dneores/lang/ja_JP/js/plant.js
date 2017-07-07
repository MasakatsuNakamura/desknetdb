/// <summary>設備予約文言</summary>
if (!desknets.Resource.plant) {
    desknets.Resource.plant = {};
}
$.extend(desknets.Resource.plant, {
    //------------------------------------------
    // カレンダー
    //------------------------------------------
    'plantSelMsg': '{{cnt}}件選択しました。',
    //------------------------------------------
    // 設備一覧
    //------------------------------------------
    'commonGroupName': '共有設備',
    'commonassignGroupName': '(管理できる組織すべて)',
    'selectPGroupAll': '設備グループ選択',    // 設備グループ選択初期値
    'selectPGroupTab': '設備グループ',        // 設備選択ダイアログのタブ名
    'profTitle': '設備詳細情報',              // 設備情報ダイアログタイトル
    'dayTitle': '設備１日',                   // 設備１日タイトル
    'weekTitle': '設備週間',                  // 設備週間タイトル
    'monthTitle': '設備月間',                 // 設備月間タイトル

    //------------------------------------------
    // 設備情報一括設定
    //------------------------------------------
    'pselGuide_chk_copy': '設定をコピーする設備を選択してください。',
    'pselGuide_chk': '設定を変更する設備を選択してください。',
    'pselGuide_list': '一覧画面と同じ設備が表示されます。',
    'inheritPGroup': '(設備グループの設定を使用する)',

    //------------------------------------------
    // ダミー
    //------------------------------------------
    'dmy': ''
});
