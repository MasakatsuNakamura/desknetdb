/// <summary>電子会議室文言</summary>
if (!desknets.Resource.forum) {
    desknets.Resource.forum = {};
}
$.extend(desknets.Resource.forum, {
        //------------------------------------------
        //------------------------------------------
        'sethide': 'Hide' ,
        'setshow': 'Show' ,
        'count': '{{count}} Time(s)' ,

        //------------------------------------------
        // 確認メッセージ
        //------------------------------------------
        'confirmation_moveforum': 'The board will be moved. Are you sure you want to continue?' ,
        'confirmation_newread'  : 'All new posts will be marked as read. Are you sure you want to continue?' ,

        'confirmation_delforum'     : 'Are you sure you want to delete [{{ForumName}}]?' ,
        'confirmation_runningforum' : 'Do you want to open [{{ForumName}}]?' ,
        'confirmation_stopforum'    : 'Do you want to suspend [{{ForumName}}]?' ,

        'confirmation_show'  : 'Are you sure you want to show it?' ,
        'confirmation_hide'  : 'Are you sure you want to hide it?' ,

        //------------------------------------------
        // メッセージ
        //------------------------------------------
        'unselectedForum': 'No board is selected. Select a board.' ,
        'listnoforum_msg': 'There is no board you can read.',
        'listnoforum_user': 'Ask your system administrator.',
        'listnoforum_manage': 'Create a board here.',
        'delete_submission': '(The post was deleted)',
        'other_count': '...other {{count}} items',
        'comment_list_open': 'Display all ({{count}}) comments',
        'comment_list_close': 'Close comment list (Display latest {{count}} comments)',

        //------------------------------------------
        // 稼働ボタン押下時のメッセージ
        //------------------------------------------
        'running_nochecked': 'Choose what you want to open.' ,
        //------------------------------------------
        // 休止ボタン押下時のメッセージ
        //------------------------------------------
        'stop_nochecked': 'Choose what you want to suspend.' ,
        //------------------------------------------
        // 書込禁止ボタン押下時のメッセージ
        //------------------------------------------
        'readonly_nochecked': 'Choose what you want to make write protected.' ,

        //------------------------------------------
        // トピック作成ダイアログ
        //------------------------------------------
        'menuTopicAdd': 'Create Topic' ,
        //------------------------------------------
        // 会議室情報ダイアログ
        //------------------------------------------
        'menuViewRoom': 'About This Board' ,
});
