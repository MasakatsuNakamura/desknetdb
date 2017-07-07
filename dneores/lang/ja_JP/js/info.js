/// <summary>インフォメーション文言</summary>
if (!desknets.Resource.info) {
    desknets.Resource.info = {};
}
$.extend(desknets.Resource.info, {
        // カテゴリー関連設定メニュー
          'menuCategoryAdd': 'カテゴリーの追加'
        , 'menuCategoryMod': 'カテゴリーの変更'
        , 'menuCategoryDel': 'カテゴリーの削除'
        , 'menuCategoryAcc': '閲覧先とアクセス権の設定'

        // 作成画面項目名
        , 'edithtml': '内容'
        // 承認依頼、否認件数
        , 'approvalcnt':'{{cnt}}件'
        // 否認ダイアログ名
        , 'approvalng':'否認'
        // 一覧アイコンのタイトル属性用
        , 'approvalreq':'承認依頼中'
        , 'approvalrem':'差戻し'
});
