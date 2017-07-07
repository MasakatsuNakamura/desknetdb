/// <summary>スケジュール文言</summary>
if (!desknets.Resource.sch) {
    desknets.Resource.sch = {};
}
$.extend(desknets.Resource.sch, {
    //------------------------------------------
    // サブウィンドウのカレンダーの印タイトル
    //------------------------------------------
    'swincalams': 'An event in the a.m',
    'swincalamm': 'Events in the a.m',
    'swincalpms' : 'An event in the p.m',
    'swincalpmm': 'Events in the p.m',
    'swincalgw': 'Group/Week',
    'swincalpw': 'Week',
    'swincalsel': 'Weekly events of selected users',
    //------------------------------------------
    // 空き状況検索
    //------------------------------------------
    'freeReserved': 'Reserved',
    //------------------------------------------
    // 設備選択画面
    //------------------------------------------
    'plantg_sel_alladd': '(All Available Facilities)', // 設備グループコンボの先頭
    'plantg_sel_allref': '(All Readable Facilities)', // 設備グループコンボの先頭
    'pselDlgTitle': 'Select Facility',                  // タイトル '利用設備選択'→'設備選択'
    'pInfoMaxTime': '{{maxtime}} Hour(s)',          // 連続利用可能時間
    'pInfoAcceptDay': '{{reservlimit}} Day(s) Ahead',    // 予約可能期限
    'pInfoLimit': 'Limit',                    // 制限する
    'pInfoNoLimit': 'Do Not Limit',                // 制限しない
    'pselGuide_chk_import': 'Check facilities you want to import.',
    'pselGuide_chk_export': 'Check facilities you want to export.',
    'pselGuide_chk_ref': 'Check facilities you want to search.',
    'pselGuide_chk_sel': 'Check facilities you want to see.',
    'pselGuide_chk_pgroup': 'Check facilities you want to add private group.',
    'pselGuide_add': 'The facilities you have the right to add or edit are displayed.',
    'pselGuide_ref': 'The facilities you have the right to read are displayed.',
    //------------------------------------------
    // スケジュール登録/変更画面
    //------------------------------------------
    'startDateLabel': 'Start',
    'endDateLabel': 'End',
    'allSelectablesLabel': 'All That Can Be Added',
    'freeTimeItemLabel': 'Reserved',
    'freeTimeRangeLabel': 'Selecting',
    'othertoChooserTitle': 'Select Users',
    'recurrenceDescFormat_d': 'Every {{interval}} Day(s)',
    'recurrenceDescFormat_w': 'Every {{interval}} Week(s)',
    'recurrenceDescFormat_m': 'Every {{interval}} Month(s)',
    'recurrenceDescFormat_y': 'Every {{interval}} Year(s)',
    'recurrenceDescFormat_dayOfWeek': '{{daysOfWeek}} {{recurrence}}',
    'recurrenceDescFormat_dayOfMonth': '{{recurrence}} on Day {{day}}',
    'recurrenceDescFormat_weekAndDayOfMonth': '{{weekOfMonth}} {{dayOfWeek}} {{recurrence}}',
    'recurrenceDescFormat_weekOfMonth': ['Last', '1st', '2nd', '3rd', '4th', '5'],
    'recurrenceDescFormat_repeat': 'Repeat {{rependtimes}} time(s) from {{startdate}}',
    'recurrenceDescFormat_enddate': 'from {{startdate}} to {{enddate}}',
    'datesDescFormat': '{{count}} irregular event(s) selected',
    'alermTimeFormat': '{{time}} before',
    'visitorChooseUser': '(User Selection)',
    'visitorDetailErrorFormat': '{{name}}({{index}} rows):',
    'freeTimeRestFormat': '... other {{rest}} items',

    //------------------------------------------
    // 設備情報ポップアップ画面
    //------------------------------------------
    'plantTitleTime': 'Available Time',
    'plantTitleUseTime': 'Maximum Duration',      // 連続利用可能最大時間
    'plantTitleHoliday': 'Available on Holiday',
    'plantTitleReserv': 'Advance Reservation Limit',
    'plantTitleReservSch': 'Committed Reservation',
    'plantTitleMemo': 'Description',
    //------------------------------------------
    // 選択ユーザー予定表示
    //------------------------------------------
    'sch_userselectcnt': '{{count}} selected',

/**
スマートフォン対応
*/
    //------------------------------------------
    // 登録画面
    //------------------------------------------
    'secretOn': 'Confidential',
    'secretOff': 'Public',
    'externalTitle': 'Clock Out',
    'internalTitle': 'In-house',
    'importantTitle': 'Important',
    'normalTitle': 'Normal',
    'notFirmDateTitle': 'Tentative',
    'firmDateTitle': 'Event',
    'selPantsSubTitle': 'Irregular Event',

    //------------------------------------------
    // 参照画面
    //------------------------------------------
    'refbtntag': 'Sticky Note',
    'refbtnadmit': 'Authorize',
    'refbtndenial' : 'Disapprove',

    //------------------------------------------
    // ダミー
    //------------------------------------------
    'dmy': ''
});
