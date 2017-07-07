/// <summary>インフォメーション文言</summary>
if (!desknets.Resource.info) {
    desknets.Resource.info = {};
}
$.extend(desknets.Resource.info, {
        // カテゴリー関連設定メニュー
          'menuCategoryAdd': 'Add Category'
        , 'menuCategoryMod': 'Edit Category'
        , 'menuCategoryDel': 'Delete Category'
        , 'menuCategoryAcc': 'Recipient And Access Rights Settings'

        // 作成画面項目名
        , 'edithtml': 'Details'
        // 承認依頼、否認件数
        , 'approvalcnt':'{{cnt}} item(s)'
        // 否認ダイアログ名
        , 'approvalng':'Disapprove'
        // 一覧アイコンのタイトル属性用
        , 'approvalreq':'Requested for approval'
        , 'approvalrem':'Remanded'
});
