/// <summary>安否確認文言</summary>
if (!desknets.Resource.safety) {
    desknets.Resource.safety = {};
}
$.extend(desknets.Resource.safety, {
      'safetyTitleGroup': 'Group:'
    , 'safetySendAllGroup': 'groups you are managing'
    , 'safetySendConfDeliGrp': 'groups checked in the "Target Group" list'
    , 'unanswered': 'Unconfirmed ({{nomessage}})'
    , 'answered': 'Confirmed ({{answered}})'
    , 'safe': 'Alright ({{safe}})'
    , 'wounded': 'Slightly Injured ({{wounded}})'
    , 'bad': 'Severely Injured ({{bad}})'
    , 'contactdltitle': 'Emergency Contact'
    , 'reportdltitle': 'List of Reports'
    , 'safetybehindtitle': 'Safety Status'
    , 'safetyClearDiaTitle': 'Clear Confirmation for Confirmation Information of Emergency Contact'
    , 'safetyContactEditDiaTitle': 'Edit Emergency Contact'
    , 'safetyContactConfDiaTitle': 'Confirm Emergency Contact'
    , 'safetyContactDeliveryDiaTitle': 'Confirm Mass Email Delivery'
    , 'safetyContactDeliveryDiaRegTitle': 'Confirm Mass Email Delivery (Disaster Drill)'
    , 'safetyContactNoDeliveryMail': 'Unsent'
    , 'safetyMsetAdminEntryTitle': 'Safety Confirmation Administrator Settings'
    , 'safetyNoSetAdminName': 'Not Yet Setup'
    , 'safetyRetryMailTitle': 'Confirmation of Re-sending Unconfirmed People'
    , 'safetyClearTitle': 'Clear Confirmation of Safety Status'
    , 'safetyAnswerMemo': 'Comment:'
    , 'safetyAllGroup': '(All Top Level Groups)'
    , 'safetySettingInfoNothing': 'Not Setup'
/*
スマートフォン版
*/
    , 'safetyLabelSafe': 'Alright'
    , 'safetyLabelWounded': 'Slightly Injured'
    , 'safetyLabelBad': 'Severely Injured'
    , 'safetyEntryDairiMessage': 'You can answer the safety status in place of Mr./Ms. {{dairiuname}}.'
});
