/// <summary>来訪者文言</summary>
if (!desknets.Resource.visitor) {
    desknets.Resource.visitor = {};
}
$.extend(desknets.Resource.visitor, {
    /// <summary>来訪者管理文言</summary>
    'statusText_ready': 'Waiting'
  , 'statusText_informed': 'Informed'
  , 'statusText_havemet': 'Checked In'
  , 'membersNum': 'People'
  , 'dateText_noTime': '(Time Is Unspecified)'
});
