/// <summary>プロジェクト文言</summary>
if (!desknets.Resource.prj) {
    desknets.Resource.prj = {};
}
$.extend(desknets.Resource.prj, {
    //------------------------------------------
    // 日付
    //------------------------------------------
      'ganttday': '<li {{class}}>{{day}} ({{week}})</li>'
    //------------------------------------------
    // プロジェクト一覧：状態
    //------------------------------------------
    , 'prj-ahead'    : 'Incomplete'
    , 'prj-finished' : 'Complete'
    , 'prj-stop'     : 'Stop'
    //------------------------------------------
    // タスク一覧：状態
    //------------------------------------------
    , 'before'   : 'NYST'
    , 'ahead'    : 'INPR'
    , 'behind'   : 'DELD'
    , 'finished' : 'Complete'
    , 'stop'     : 'Stop'
    //------------------------------------------
    //
    //------------------------------------------
    , 'charge': 'Owner'
    , 'allmember': 'All Members'
    , 'all': '(All)'
    , 'classadd': 'Create Level 1 Schedule'
    , 'classmod': 'Edit Level 1 Schedule'
    , 'classname': 'Level 1 Schedule Name'
    , 'subclassadd': 'Create Level 2 Schedule'
    , 'subclassmod': 'Edit Level 2 Schedule'
    , 'subclassname': 'Level 2 Schedule Name'
    , 'taskadd': 'Create Task'
    , 'taskmod': 'Update Task'
    , 'taskname': 'Task Name'
    , 'create': 'Create'
    , 'prjname': 'Project Name'
    , 'status': 'Status'
    , 'rate': 'Progress Rate'
    , 'startdate': 'Scheduled Start Date'
    , 'enddate': 'Scheduled End Date'
    , 'prjsetting': 'Settings'
    , 'prjupdate': 'Edit Project'
    , 'prjdelete': 'Delete Project'
    , 'reportupdate': 'Edit Progress Report'
    , 'taskinfo': 'Task Overview'
    //------------------------------------------
    // 確認メッセージ
    //------------------------------------------
    , 'confirmation_delfolder' : 'Are you sure you want to delete [{{FolderName}}]?'
    , 'confirmation_movemail' : 'It will transition to the mail creation screen. <br />Do you want to continue?'
    , 'confirmation_movetodo' : 'It will transition to the ToDo creation screen. <br />Do you want to continue?'
    , 'confirmation_movesch' : 'It will transition to the schedule creation screen. <br />Do you want to continue?'
    //------------------------------------------
    // メッセージ
    //------------------------------------------
    , 'message_notselectprj' : 'No project has been specified'
    , 'message_addressover'  : 'Number of sending email addresses exceeded the maximum limit'
    , 'listnoprj_msg': 'You\'re not a member of any project.'
    , 'listnoprj_user': 'Ask your system administrator.'
    , 'listnoprj_manage': 'Create a project here.'
    , 'unselectedProject': 'No project is selected. Please select a project.'
    , 'ItemNothingReport': 'The corresponding progress report could not be get. Please update to the latest information.'
    , 'ItemNothingTask': 'The corresponding task could not be get. Please update to the latest information.'
    , 'comment_list_open': 'Display all ({{count}}) comments'
    , 'comment_list_close': 'Close comment list (Display latest {{count}} comments)'
});
