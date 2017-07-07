/// <summary>購買予約文言</summary>
if (!desknets.Resource.koubai) {
    desknets.Resource.koubai = {};
}
$.extend(desknets.Resource.koubai, {
    //------------------------------------------
    // 一覧の報告と精算
    //------------------------------------------
      'stsorder': 'Incomplete'
    , 'stsordered': 'Complete'
    , 'preorder': 'Ordered'
    , 'stscancel': 'Canceled'
    , 'stsordernot': '[N]'
    , 'sum': 'Total'
    , 'fixedamount': '(Final Amount)'
    , 'end': 'End'
    , 'reservation': 'On Sale'
});
