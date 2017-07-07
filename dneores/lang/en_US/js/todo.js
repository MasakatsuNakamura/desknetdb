/// <summary>ToDo文言</summary>
if (!desknets.Resource.todo) {
    desknets.Resource.todo = {};
}
$.extend(desknets.Resource.todo, {
        // タイトル
        'title_mytask':      '&nbsp;&gt;&nbsp;My Tasks'
      , 'title_reqtask':     '&nbsp;&gt;&nbsp;Tasks I Added'
      , 'title_listlim':     '&nbsp;&gt;&nbsp;Overdue'
      , 'title_listtoday':   '&nbsp;&gt;&nbsp;Due: Today - {{dateform}}'
      , 'title_listtmrw':    '&nbsp;&gt;&nbsp;Due: Tomorrow - {{dateform}}'
      , 'title_listtmrwlat': '&nbsp;&gt;&nbsp;Due: After the day after tomorrow'
      , 'title_listend':     '&nbsp;&gt;&nbsp;Completed Tasks'
      , 'title_entryadd':    '&nbsp;&gt;&nbsp;Add Task'
      , 'title_entrymod':    '&nbsp;&gt;&nbsp;Edit Task'

     // アラーム送信送信開始日
     , 'alarmform': '{{alarmtime}} day(s) before due date'

/**
スマホ版用
*/
     //依頼したタスク
     , 'list_title_mytask': 'My Tasks'
     , 'list_title_reqtask': 'Tasks I Added'
     , 'list_title_sep': '&nbsp;&gt;&nbsp;'
     , 'list_title_limit1': 'Overdue'
     , 'list_title_limit2': 'Until today'
     , 'list_title_limit3': 'Until tomorrow'
     , 'list_title_limit4': 'After the day after tomorrow'
     , 'list_title_limit5': 'Complete'
     , 'disp_alarm_send': 'Send'
     , 'disp_alarm_nosend': 'Do Not Send'
     , 'srch_set_allTask': 'All Tasks'
     , 'srch_set_complete0': 'In Progress'
     , 'srch_set_complete1': 'Complete'
     , 'srch_set_complete2': 'All'
});
