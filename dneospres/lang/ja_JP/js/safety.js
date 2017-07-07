/// <summary>安否確認文言</summary>
if (!desknets.Resource.safety) {
    desknets.Resource.safety = {};
}
$.extend(desknets.Resource.safety, {
      'safetyTitleGroup': '組織：'
    , 'safetySendAllGroup': 'すべての管理組織'
    , 'safetySendConfDeliGrp': '「配信先組織一覧」で選択された組織'
    , 'unanswered': '未確認者（{{nomessage}})'
    , 'answered': '確認者（{{answered}}）'
    , 'safe': '無事（{{safe}}）'
    , 'wounded': '軽傷者（{{wounded}}）'
    , 'bad': '重傷者（{{bad}}）'
    , 'contactdltitle': '緊急連絡先'
    , 'reportdltitle': 'レポート一覧'
    , 'safetybehindtitle': '安否状況'
    , 'safetyClearDiaTitle': '緊急連絡先確認情報のクリア確認'
    , 'safetyContactEditDiaTitle': '緊急連絡先の変更'
    , 'safetyContactConfDiaTitle': '緊急連絡先の確認'
    , 'safetyContactDeliveryDiaTitle': '一斉配信確認'
    , 'safetyContactDeliveryDiaRegTitle': '一斉配信確認（防災訓練）'
    , 'safetyContactNoDeliveryMail': '未配信'
    , 'safetyMsetAdminEntryTitle': '安否確認管理者設定'
    , 'safetyNoSetAdminName': '未設定'
    , 'safetyRetryMailTitle': '未確認者への再送信確認'
    , 'safetyClearTitle': '安否状況のクリア確認'
    , 'safetyAnswerMemo': 'コメント：'
    , 'safetyAllGroup': '(最上位の組織すべて)'
    , 'safetySettingInfoNothing': '設定されていません。'
/*
スマートフォン版
*/
    , 'safetyLabelSafe': '無事'
    , 'safetyLabelWounded': '軽傷'
    , 'safetyLabelBad': '重傷'
    , 'safetyEntryDairiMessage': '{{dairiuname}}さんの安否状況を代理応答することができます。'
});
