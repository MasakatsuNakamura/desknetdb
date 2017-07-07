/// <summary>文書管理文言</summary>
if (!desknets.Resource.doc) {
    desknets.Resource.doc = {};
}
$.extend(desknets.Resource.doc, {
        // フォルダアクセス権通知メール設定
        'folderNoticeOn': '○',
        'folderAccTitle_Notice': '権限変更及び通知メール設定',

        // 文書一覧
        'listagenda': '議事録',
        'listworking': '[編集中]',
        'listedit': '一時保存',
        'listnofolder_msg': 'フォルダが作成されていません。',
        'listnofolder_user': '管理者に問い合わせてください。',
        'listnofolder_manage': 'こちらからフォルダの作成を行ってください。',
        'editfolder': '編集中の文書',

        // 文書履歴一覧
        'rev_attach_add': '以下のファイルを追加しました。',
        'rev_attach_mod': '以下のファイルを変更しました。',
        'rev_attach_del': '以下のファイルを削除しました。',
        'rev_attach_none': 'ファイル内容に変更はありません。',
        'rev_attach_rollback': '[{{revtime}}]の履歴にロールバックしました。',

        // 自動取込設定
        'auto_title_file': '取込元<br />ディレクトリ',
        'auto_title_mail': '取込元<br />ユーザーID',
        'auto_error': 'エラー詳細'
});
