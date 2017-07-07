/// <summary>設定系文言</summary>
if (!desknets.Resource.sp.setting) {
    desknets.Resource.sp.setting = {};
}
$.extend(desknets.Resource.sp.setting, {

    /*
    スケジュール
    */
    'setSchPDay': 'Day',
    'setSchPWeek': 'Week',
    'setSchPMonth': 'Month',
    'setSchPYear': 'Year',

    /*
    伝言・所在設定内容
    */
    'setMemoContactBusyo': 'Department',
    'setMemoContactNaisen': 'Extension',
    'setMemoContactMobile': 'Mobile',
    'setMemoContactOther': 'Other',
    'setMemoNoticeMail': 'Email',
    'setMemoNoticeTag': 'Sticky Note',
    'setMemoNoticeNoUse': 'Do Not Send',

    /*
    共通
    */
    'setMailNoticeOn': 'Receive',
    'setMailNoticeOff': 'Do Not Receive',
    'setTopPageFunc': 'Application'
});
