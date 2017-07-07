/// <summary>スケジュール文言</summary>
if (!desknets.Resource.sch) {
    desknets.Resource.sch = {};
}
$.extend(desknets.Resource.sch, {
    //------------------------------------------
    // サブウィンドウのカレンダーの印タイトル
    //------------------------------------------
    'swincalams': '午前予定あり',
    'swincalamm': '午前複数予定あり',
    'swincalpms' : '午後予定あり',
    'swincalpmm': '午後複数予定あり',
    'swincalgw': '組織週間',
    'swincalpw': '個人週間',
    'swincalsel': '選択ユーザー予定表示週間',
    //------------------------------------------
    // 空き状況検索
    //------------------------------------------
    'freeReserved': '予定あり',
    //------------------------------------------
    // 設備選択画面
    //------------------------------------------
    'plantg_sel_alladd': '（予約できるすべて）', // 設備グループコンボの先頭
    'plantg_sel_allref': '（参照できるすべて）', // 設備グループコンボの先頭
    'pselDlgTitle': '設備選択',                  // タイトル '利用設備選択'→'設備選択'
    'pInfoMaxTime': '{{maxtime}} 時間',          // 連続利用可能時間
    'pInfoAcceptDay': '{{reservlimit}} 日先',    // 予約可能期限
    'pInfoLimit': '制限する',                    // 制限する
    'pInfoNoLimit': '制限しない',                // 制限しない
    'pselGuide_chk_import': 'インポートしたい設備にチェックをつけてください。',
    'pselGuide_chk_export': 'エクスポートしたい設備にチェックをつけてください。',
    'pselGuide_chk_ref': '検索したい設備にチェックをつけてください。',
    'pselGuide_chk_sel': '表示したい設備にチェックをつけてください。',
    'pselGuide_chk_pgroup': '個人グループに登録したい設備にチェックをつけてください。',
    'pselGuide_add': '追加変更権限がある設備が表示されています。',
    'pselGuide_ref': '参照権限がある設備が表示されています。',
    //------------------------------------------
    // スケジュール登録/変更画面
    //------------------------------------------
    'startDateLabel': '開始日',
    'endDateLabel': '終了日',
    'allSelectablesLabel': '追加できるすべて',
    'freeTimeItemLabel': '予定あり',
    'freeTimeRangeLabel': '選択中',
    'othertoChooserTitle': '登録先選択',
    'recurrenceDescFormat_d': '{{interval}}日毎',
    'recurrenceDescFormat_w': '{{interval}}週間毎',
    'recurrenceDescFormat_m': '{{interval}}ヶ月毎',
    'recurrenceDescFormat_y': '{{interval}}年毎',
    'recurrenceDescFormat_dayOfWeek': '{{recurrence}} {{daysOfWeek}}',
    'recurrenceDescFormat_dayOfMonth': '{{recurrence}} {{day}}日',
    'recurrenceDescFormat_weekAndDayOfMonth': '{{recurrence}} {{weekOfMonth}}{{dayOfWeek}}',
    'recurrenceDescFormat_weekOfMonth': ['最終', '第1', '第2', '第3', '第4', '第5'],
    'recurrenceDescFormat_repeat': '{{startdate}}より{{rependtimes}}回繰り返す',
    'recurrenceDescFormat_enddate': '{{startdate}}から{{enddate}}まで',
    'datesDescFormat': '{{count}}件の不定期なスケジュールが選択されています',
    'alermTimeFormat': '{{time}}前',
    'visitorChooseUser': '(ユーザー選択)',
    'visitorDetailErrorFormat': '{{name}}({{index}}行目)：',
    'freeTimeRestFormat': '･･･その他 {{rest}}件',

    //------------------------------------------
    // 設備情報ポップアップ画面
    //------------------------------------------
    'plantTitleTime': '利用時間帯',
    'plantTitleUseTime': '連続利用可能最大時間',      // 連続利用可能最大時間
    'plantTitleHoliday': '休日利用',
    'plantTitleReserv': '予約可能期限',
    'plantTitleReservSch': '設備の本予約',
    'plantTitleMemo': '説明',
    //------------------------------------------
    // 選択ユーザー予定表示
    //------------------------------------------
    'sch_userselectcnt': '{{count}}件選択中です',

/**
スマートフォン対応
*/
    //------------------------------------------
    // 登録画面
    //------------------------------------------
    'secretOn': '非公開',
    'secretOff': '公開',
    'externalTitle': '外出',
    'internalTitle': '社内',
    'importantTitle': '重要',
    'normalTitle': '普通',
    'notFirmDateTitle': '仮予定',
    'firmDateTitle': '予定',
    'selPantsSubTitle': '不定期な予定',

    //------------------------------------------
    // 参照画面
    //------------------------------------------
    'refbtntag': '付箋',
    'refbtnadmit': '承認',
    'refbtndenial' : '否認',

    //------------------------------------------
    // ダミー
    //------------------------------------------
    'dmy': ''
});
