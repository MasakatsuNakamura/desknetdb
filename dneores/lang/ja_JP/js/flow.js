/// <summary>ワークフロー文言</summary>
if (!desknets.Resource.flow) {
    desknets.Resource.flow = {};
}
$.extend(desknets.Resource.flow, {
        // 経路ステータス
        'route_sts_application': '申請',
        'route_sts_approval1': '決裁',
        'route_sts_approval2': '承認',
        'route_sts_approval3': '確認',
        'route_sts_denial': '否認',
        'route_sts_reapproval': '再申請',
        // 申請の決裁状況
        'wait_approval': '決裁待',
        'revocation': '取消し',
        'rejected': '差戻し',
        'approval': '完了', // '承認決裁完了'
        'forcedend': '強制完了',
        // 日
        'day': '日',
        // 書式選択
        'select_format': '書式の選択',
        // 申請先選択
        'select_route': '申請先の選択',
        // 書式別連番設定
        'number_setting': '連番設定',
        // 申請経路一覧
        'route_incomplete': '未完成',
        // 申請書一覧
        'applicate_unset': '未設定',
        'applicate_pop_title': '申請の作成へのURL',
        // 経路編集
        'sanction': '決裁者',
        'approver': '承認者',
        'confirmer': '確認者',
        'lastSanction': '最終決裁者',
        'approval_all': '全員が承認',
        'approval_harf': '50％を超える人が承認',
        'approval_majority': '50％以上の人が承認',
        'approval_one': '1人以上が承認',
        'group_approver_user': '選択ユーザーが承認',
        'group_approver_all': '組織に所属するユーザーが承認',
        'group_approver_role': '選択したロール内の指定した組織に所属するユーザーが承認',
        'group_approver_manager': '指定した組織のワークフロー管理者が承認',
        'group_approver_approver': '組織内承認者が承認',
        'group_approver_alluser': '組織に所属するすべてのユーザーが承認',
        'group_approver_user_all': '(全ユーザー)',
        'title_title': '経路種別',
        'title_approvalName': '承認グループ名の編集',
        'title_condition': '承認条件',
        'title_conditionGroup': '承認条件',
        'title_branch': '分岐条件',
        'title_routeList': '申請経路選択',
        'title_exceptapplicant': '申請者の扱い',
        'hierarchy': '{{no}}階層',

        'group': '承認グループ',
        'role': 'ロール',
        'branch': '分岐条件',
        'insert_before': 'ひとつ上に行を挿入',
        'insert_after': 'ひとつ下に行を挿入',
        'add_user': 'ユーザー追加',
        'add_group': '承認グループ追加',
        'add_role': 'ロール追加',
        'add_branch': '分岐条件追加',
        'asterisk': '※',
        'branch_condition': '分岐条件',
        'no_route_data': '選択したデータが他で削除されました。再度選択し直してください。',
        'select_route_group': '組織を選択してください。',
        // 分岐条件の概略
        'branchsummary_unset': '(未設定)',
        'branchsummary_text_eq': '{{item}}が{{val}}と同じ場合',
        'branchsummary_text_ne': '{{item}}が{{val}}と異なる場合',
        'branchsummary_text_in': '{{item}}が{{val}}を含む場合',
        'branchsummary_text_ni': '{{item}}が{{val}}を含まない場合',
        'branchsummary_select_eq': '{{item}}が{{val}}と同じ場合',
        'branchsummary_select_ne': '{{item}}が{{val}}と異なる場合',
        'branchsummary_checkbox_eq': '{{item}}が選択されている場合',
        'branchsummary_checkbox_ne': '{{item}}が選択されていない場合',
        'branchsummary_number_eq': '{{item}}＝{{val}}の場合',
        'branchsummary_number_ne': '{{item}}≠{{val}}の場合',
        'branchsummary_number_gt': '{{item}}＞{{val}}の場合',
        'branchsummary_number_lt': '{{item}}＜{{val}}の場合',
        'branchsummary_number_ge': '{{item}}≧{{val}}の場合',
        'branchsummary_number_le': '{{item}}≦{{val}}の場合',
        'add': '追加',
        // 申請の作成
        'subject_def_name': '申請書を初期化',
        'sel_default_app': '連番、申請書、申請経路、完了通知メールを初期化します。よろしいですか？',
        'sel_app': '選択した申請書の内容で連番、申請書、申請経路、完了通知メールを設定します。よろしいですか？',
        // 連番設定
        'num_nouse': '使用しない',
        'num_use': '使用する',
        'num_title': '連番',
        'num_move': '移動',
        'num_close': '解除',
        // その他
        'approval_text_all': '全員',
        'approval_text_harf': '過半数',
        'approval_text_majority': '半数以上',
        'approval_text_one': '1人以上',
        'please_select': '選択してください',
        'at_select': '書式が選択されています',
        'untitled': '(タイトル未設定)',
        // 経路設定名に付加する文字列
        'private' : '[個]',

        // 組織内承認者設定
        'grpauth' : '●',

        // 経過日数
        'elapsedday' : '{{day}}日',

        // 経路の申請者除外設定
        'except': '除外する',
        'not_except': 'そのまま',
        'auto': '自動承認する',

        // スマホ
        'spabsence' : '委任者：',

        'dmy': ''
});
