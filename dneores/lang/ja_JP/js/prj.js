/// <summary>プロジェクト文言</summary>
if (!desknets.Resource.prj) {
    desknets.Resource.prj = {};
}
$.extend(desknets.Resource.prj, {
    //------------------------------------------
    // 日付
    //------------------------------------------
      'ganttday': '<li {{class}}>{{day}}日({{week}})</li>'
    //------------------------------------------
    // プロジェクト一覧：状態
    //------------------------------------------
    , 'prj-ahead'    : '未完了'
    , 'prj-finished' : '完了'
    , 'prj-stop'     : '中止'
    //------------------------------------------
    // タスク一覧：状態
    //------------------------------------------
    , 'before'   : '開始前'
    , 'ahead'    : '進行中'
    , 'behind'   : '遅延'
    , 'finished' : '完了'
    , 'stop'     : '中止'
    //------------------------------------------
    //
    //------------------------------------------
    , 'charge': '担当者'
    , 'allmember': '全メンバー'
    , 'all': '(すべて)'
    , 'classadd': '大工程の作成'
    , 'classmod': '大工程の変更'
    , 'classname': '大工程名'
    , 'subclassadd': '中工程の作成'
    , 'subclassmod': '中工程の変更'
    , 'subclassname': '中工程名'
    , 'taskadd': 'タスクの作成'
    , 'taskmod': 'タスクの変更'
    , 'taskname': 'タスク名'
    , 'create': '作成'
    , 'prjname': 'プロジェクト名'
    , 'status': '状態'
    , 'rate': '進捗率'
    , 'startdate': '開始予定日'
    , 'enddate': '終了予定日'
    , 'prjsetting': '設定'
    , 'prjupdate': 'プロジェクトの変更'
    , 'prjdelete': 'プロジェクトの削除'
    , 'reportupdate': '進捗報告の変更'
    , 'taskinfo': 'タスク概要'
    //------------------------------------------
    // 確認メッセージ
    //------------------------------------------
    , 'confirmation_delfolder' : '[{{FolderName}}]を削除しますか？'
    , 'confirmation_movemail' : 'メールの作成画面へ遷移します。<br />よろしいですか？'
    , 'confirmation_movetodo' : 'ToDoの作成画面へ遷移します。<br />よろしいですか？'
    , 'confirmation_movesch' : 'スケジュールの作成画面へ遷移します。<br />よろしいですか？'
    //------------------------------------------
    // メッセージ
    //------------------------------------------
    , 'message_notselectprj' : 'プロジェクトが指定されていません'
    , 'message_addressover'  : '送信先メールアドレスが上限を超えました'
    , 'listnoprj_msg': 'メンバーになっているプロジェクトがありません。'
    , 'listnoprj_user': '管理者に問い合わせてください。'
    , 'listnoprj_manage': 'こちらからプロジェクトを作成してください。'
    , 'unselectedProject': 'プロジェクトが選択されていません。プロジェクトを選択してください。'
    , 'ItemNothingReport': '該当する進捗報告が取得できません。最新の情報に更新してください。'
    , 'ItemNothingTask': '該当するタスクが取得できません。最新の情報に更新してください。'
    , 'comment_list_open': 'コメント{{count}}件すべて見る'
    , 'comment_list_close': 'コメント一覧を閉じる（最新の{{count}}件のみ表示）'
});
