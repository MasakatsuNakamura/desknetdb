/// <summary>文書管理文言</summary>
if (!desknets.Resource.doc) {
    desknets.Resource.doc = {};
}
$.extend(desknets.Resource.doc, {
        // フォルダアクセス権通知メール設定
        'folderNoticeOn': 'X',
        'folderAccTitle_Notice': 'Change Rights And Email Notification Settings',

        // 文書一覧
        'listagenda': 'Minutes',
        'listworking': '[Being Editing]',
        'listedit': 'Save as Draft',
        'listnofolder_msg': 'No folders are created.',
        'listnofolder_user': 'Ask your system administrator.',
        'listnofolder_manage': 'Create a folder here.',
        'editfolder': 'Document Being Edited',

        // 文書履歴一覧
        'rev_attach_add': 'The following file(s) were added.',
        'rev_attach_mod': 'The following file(s) were updated.',
        'rev_attach_del': 'The following file(s) were deleted.',
        'rev_attach_none': 'The content of the file was not updated.',
        'rev_attach_rollback': 'Roll back to [{{revtime}}]',

        // 自動取込設定
        'auto_title_file': 'Target Directory',
        'auto_title_mail': 'Target user ID',
        'auto_error': 'Error Details'
});
