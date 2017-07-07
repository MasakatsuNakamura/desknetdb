/// <summary>ToDo文言</summary>
if (!desknets.Resource.todo) {
    desknets.Resource.todo = {};
}
$.extend(desknets.Resource.todo, {
        // タイトル
        'title_mytask':      '&nbsp;&gt;&nbsp;マイタスク'
      , 'title_reqtask':     '&nbsp;&gt;&nbsp;追加したタスク'
      , 'title_listlim':     '&nbsp;&gt;&nbsp;期限切れ'
      , 'title_listtoday':   '&nbsp;&gt;&nbsp;期限：今日 - {{dateform}}'
      , 'title_listtmrw':    '&nbsp;&gt;&nbsp;期限：明日 - {{dateform}}'
      , 'title_listtmrwlat': '&nbsp;&gt;&nbsp;期限：明後日以降'
      , 'title_listend':     '&nbsp;&gt;&nbsp;完了したタスク'
      , 'title_entryadd':    '&nbsp;&gt;&nbsp;タスクの追加'
      , 'title_entrymod':    '&nbsp;&gt;&nbsp;タスクの変更'

     // アラーム送信送信開始日
     , 'alarmform': '期限の{{alarmtime}}日前'

/**
スマホ版用
*/
     //依頼したタスク
     , 'list_title_mytask': 'マイタスク'
     , 'list_title_reqtask': '追加したタスク'
     , 'list_title_sep': '&nbsp;&gt;&nbsp;'
     , 'list_title_limit1': '期限切れ'
     , 'list_title_limit2': '今日まで'
     , 'list_title_limit3': '明日まで'
     , 'list_title_limit4': '明後日以降'
     , 'list_title_limit5': '完了'
     , 'disp_alarm_send': '送信する'
     , 'disp_alarm_nosend': '送信しない'
     , 'srch_set_allTask': 'すべてのタスク'
     , 'srch_set_complete0': '作業中'
     , 'srch_set_complete1': '完了'
     , 'srch_set_complete2': 'すべて'
});
