/// <summary>備品文言</summary>
if (!desknets.Resource.stock) {
    desknets.Resource.stock = {};
}
$.extend(desknets.Resource.stock, {
    'commonGroupName': 'Shared Item',
    'allTradeGroupName': '(All Items Available to Check Out)',
    'allStockGroupName': '(All Items Available to Check In/Out)',
    'pageDetailSendMsg'     : 'Message',
    'pageDetailSendMsgTitle': 'Send a message to the representatives',
    'allStockManager': 'All Items',
    'noStockMessage': 'There are no items you can check out.',
    'noStockMessage_manager': 'Add items here.',
    'noStockMessage_user': 'Ask your system administrator.'
});
