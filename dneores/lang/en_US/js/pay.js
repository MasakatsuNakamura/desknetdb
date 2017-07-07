/// <summary>仮払い精算文言</summary>
if (!desknets.Resource.pay) {
    desknets.Resource.pay = {};
}
$.extend(desknets.Resource.pay, {
    //------------------------------------------
    // 一覧の報告と精算
    //------------------------------------------
      'end': 'Done'
    //------------------------------------------
    // 報告先選択
    //------------------------------------------
    , 'reportertitle': 'Select Recipients'
});
