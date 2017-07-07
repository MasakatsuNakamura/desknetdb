/// <summary>伝言・所在系文言</summary>
if (!desknets.Resource.memo) {
    desknets.Resource.memo = {};
}
$.extend(desknets.Resource.memo, {
    //------------------------------------------
    // 伝言
    //------------------------------------------
    'memo':'Compose Message',
    'memotagset': 'With Sticky note',

    //------------------------------------------
    // 所在
    //------------------------------------------
    'schnavi': '<span class="curr">1</span> / <span class="max">{{allcnt}}</span> events'
});
