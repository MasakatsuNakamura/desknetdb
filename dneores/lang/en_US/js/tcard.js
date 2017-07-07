/// <summary>タイムカード文言</summary>
if (!desknets.Resource.tcard) {
    desknets.Resource.tcard = {};
}
$.extend(desknets.Resource.tcard, {
        //------------------------------------------
        // 設定確認
        //------------------------------------------
        'set_nochecked': 'Specify the target.' ,
        'set_allconf'  : 'Are you sure you want to apply it to all?' ,
        'set_someconf' : 'Are you sure you want to apply it to {{count}} items displayed on the screen?' ,
        'set_listconf' : 'Are you sure you want to apply it to {{count}} items you selected?' ,
        //------------------------------------------
        // 事由関連
        //------------------------------------------
        'absence_normal'  : 'Absence' ,
        'absence_condole' : 'Paid Leave' ,
        'absence_paid'    : 'Annual Leave' ,
        'absence_compen'  : 'Compensation' ,
        'absence_other'   : 'Other',
        //------------------------------------------
        // 出社状況・退社状況
        //------------------------------------------
        'time_late'      : 'Tardy' ,
        'time_early'     : 'Early Leaving' ,
        'time_approval'  : 'Authorized' ,
        //------------------------------------------
        //
        //------------------------------------------
        'time_noinput' : 'No Record' ,
        //------------------------------------------
        // 承認ボタン
        //------------------------------------------
        'late_on'        : 'Tardiness',
        'late_off'       : 'Not Tardiness',
        'leaveearly_on'  : 'Early Leaving',
        'leaveearly_off' : 'Not Early Leaving',
         //------------------------------------------
         // 詳細ダウンロード選択ダイアログ
         //------------------------------------------
         'detailDownloadDialogTitle'  : 'Download Detail Report',  // タイトル
         'detailDownloadButtonOk'     : 'OK',              // ボタンタイトル：Ok
         'detailDownloadButtonCancel' : 'Close',            // ボタンタイトル：Cancel
         //------------------------------------------
         // 打刻IPアドレス設定
         //------------------------------------------
         'input_incorrect'        : 'Invalid entry data.',
         //------------------------------------------
         // 就業実績の再集計
         //------------------------------------------
         'processing_datetime'    : 'Processed Date',
         'tcard_total_error'      : 'The following error occurred during the resummarizing working records.',
         'tcard_total_nomal'      : 'Resummarizing working records was terminated normally.',
         //------------------------------------------
         // 印刷
         //------------------------------------------
         'print_title'            : 'Time Sheet',
         'create'                 : 'Create',
         'username'               : 'Name',
         'groupname'              : 'Group Name',
         'total_workday'          : 'Work',
         'total_overday'          : 'Overtime',
         'total_restday'          : 'Work on Hol.',
         'total_late'             : 'Tardy',
         'total_leaveearly'       : 'Early Leaving',
         'total_absence'          : 'Absence',
         'total_congorcond'       : 'Paid Leave',
         'total_paidvacation'     : 'Annual Leave',
         'total_compeholiday'     : 'Compensation',
         'total_other'            : 'Other',
         'total_nodata'           : 'No Record',
         'total_day'              : 'Date',
         'total_time'             : 'Time',
});
