/// <summary>購買予約文言</summary>
if (!desknets.Resource.koubai) {
    desknets.Resource.koubai = {};
}
$.extend(desknets.Resource.koubai, {
    //------------------------------------------
    // 一覧の報告と精算
    //------------------------------------------
      'stsorder': '未取寄せ'
    , 'stsordered': '取寄完了'
    , 'preorder': '注文済み'
    , 'stscancel': '注文キャンセル'
    , 'stsordernot': '[未]'
    , 'sum': '合計'
    , 'fixedamount': '(確定額)'
    , 'end': '終了'
    , 'reservation': '受付中'
});
