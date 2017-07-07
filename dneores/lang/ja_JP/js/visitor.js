/// <summary>来訪者文言</summary>
if (!desknets.Resource.visitor) {
    desknets.Resource.visitor = {};
}
$.extend(desknets.Resource.visitor, {
    /// <summary>来訪者管理文言</summary>
    'statusText_ready': '来訪待ち'
  , 'statusText_informed': '連絡済み'
  , 'statusText_havemet': '受付済み'
  , 'membersNum': '人'
  , 'dateText_noTime': '(時間未指定)'
});
