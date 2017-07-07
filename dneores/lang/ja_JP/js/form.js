/// <summary>ワークフロー、アンケート</summary>
if (!desknets.Resource.form) {
    desknets.Resource.form = {};
}
$.extend(desknets.Resource.form, {
        // 部品ダイアログのタイトル
        'partDialogTitle': '部品の追加',
        // 部品への操作
        'part_edit': '部品の変更',
        'part_del' : '部品の削除',
        // 部品名
        'partname_showrow'      : '表示文字(1行)',      // 表示文字(1行)
        'partname_showrows'     : '表示文字(複数行)',   // 表示文字(複数行)
        'partname_inputrow'     : '文字入力(1行)',      // 文字入力(1行)
        'partname_inputrows'    : '文字入力(複数行)',   // 文字入力(複数行)
        'partname_num'          : '数字',               // 数字
        'partname_date'         : '日付',               // 日付
        'partname_checkbox'     : 'チェックボックス',   // チェックボックス
        'partname_radiobutton'  : 'ラジオボタン',       // ラジオボタン
        'partname_list'         : 'リストボックス',     // リストボックス
        'partname_attach'       : '添付ファイル',       // 添付ファイル
        'partname_autocal'      : '自動計算',           // 自動計算
        'partname_horizon'      : '横線',               // 横線
        'partname_autocalnormal': '自動計算(四則演算)', // 自動計算(四則演算) ※書式インポートヘルプ用
        'partname_autocalsum'   : '自動計算(合計)',     // 自動計算(合計)     ※書式インポートヘルプ用
        // 書式インポート画面サンプルダイアログのタイトル
        'title_sample1'          : 'サンプル１',
        'title_sample2'          : 'サンプル２',
        'title_sample3'          : 'サンプル３',
        'title_sample4'          : 'サンプル４',
        // 部品「添付ファイル」
        'no_filelist': '(ありません)',
        // 部品「日付」の初期値
        'datePrevalToday': '(現在日)', 

        '': ''
});
