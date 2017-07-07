/// <summary>備品文言</summary>
if (!desknets.Resource.stock) {
    desknets.Resource.stock = {};
}
$.extend(desknets.Resource.stock, {
    'commonGroupName': '共有備品',
    'allTradeGroupName': '（出庫可能なすべて）',
    'allStockGroupName': '（入出庫可能なすべて）',
    'pageDetailSendMsg'     : 'メッセージ',
    'pageDetailSendMsgTitle': '管理責任者にメッセージ送信',
    'allStockManager': '全備品',
    'noStockMessage': '出庫可能な備品がありません。',
    'noStockMessage_manager': 'こちらから備品の登録を行ってください。',
    'noStockMessage_user': '管理者に問い合わせてください。'
});
