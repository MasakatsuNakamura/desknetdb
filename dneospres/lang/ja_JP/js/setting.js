/// <summary>設定系文言</summary>
if (!desknets.Resource.sp.setting) {
    desknets.Resource.sp.setting = {};
}
$.extend(desknets.Resource.sp.setting, {

    /*
    スケジュール
    */
    'setSchPDay': '個人１日',
    'setSchPWeek': '個人週間',
    'setSchPMonth': '個人月間',
    'setSchPYear': '個人年間',

    /*
    伝言・所在設定内容
    */
    'setMemoContactBusyo': '部署',
    'setMemoContactNaisen': '内線',
    'setMemoContactMobile': '携帯',
    'setMemoContactOther': 'その他',
    'setMemoNoticeMail': 'メール',
    'setMemoNoticeTag': '付箋',
    'setMemoNoticeNoUse': '通知しない',

    /*
    共通
    */
    'setMailNoticeOn': '受信する',
    'setMailNoticeOff': '受信しない',
    'setTopPageFunc': '機能'
});
