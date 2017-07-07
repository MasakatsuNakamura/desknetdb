/// <summary>ワークフロー、アンケート</summary>
if (!desknets.Resource.form) {
    desknets.Resource.form = {};
}
$.extend(desknets.Resource.form, {
        // 部品ダイアログのタイトル
        'partDialogTitle': 'Add Control',
        // 部品への操作
        'part_edit': 'Edit Control',
        'part_del' : 'Delete Control',
        // 部品名
        'partname_showrow'      : 'Label (Single Line)',      // 表示文字(1行)
        'partname_showrows'     : 'Label (Multi Line)',   // 表示文字(複数行)
        'partname_inputrow'     : 'Text Box (Single Line)',      // 文字入力(1行)
        'partname_inputrows'    : 'Text Box (Multi Line)',   // 文字入力(複数行)
        'partname_num'          : 'Numerical Digits',               // 数字
        'partname_date'         : 'Date',               // 日付
        'partname_checkbox'     : 'Check Box',   // チェックボックス
        'partname_radiobutton'  : 'Radio Button',       // ラジオボタン
        'partname_list'         : 'List Box',     // リストボックス
        'partname_attach'       : 'Attachment Files',       // 添付ファイル
        'partname_autocal'      : 'Auto Calculation',           // 自動計算
        'partname_horizon'      : 'Horizontal Line',               // 横線
        'partname_autocalnormal': 'Auto Calculation (Operation)', // 自動計算(四則演算) ※書式インポートヘルプ用
        'partname_autocalsum'   : 'Auto Calculation (Sum Up)',     // 自動計算(合計)     ※書式インポートヘルプ用
        // 書式インポート画面サンプルダイアログのタイトル
        'title_sample1'          : 'Example 1',
        'title_sample2'          : 'Example 2',
        'title_sample3'          : 'Example 3',
        'title_sample4'          : 'Example 4',
        // 部品「添付ファイル」
        'no_filelist': '(N/A)',
        // 部品「日付」の初期値
        'datePrevalToday': '(Current Date)', 

        '': ''
});
