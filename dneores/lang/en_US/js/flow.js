/// <summary>ワークフロー文言</summary>
if (!desknets.Resource.flow) {
    desknets.Resource.flow = {};
}
$.extend(desknets.Resource.flow, {
        // 経路ステータス
        'route_sts_application': 'Apply',
        'route_sts_approval1': 'Authorize',
        'route_sts_approval2': 'Approve',
        'route_sts_approval3': 'Verify',
        'route_sts_denial': 'Disapprove',
        'route_sts_reapproval': 'Reapply',
        // 申請の決裁状況
        'wait_approval': 'Applying',
        'revocation': 'Canceled',
        'rejected': 'Remanded',
        'approval': 'Complete', // '承認決裁完了'
        'forcedend': 'Force Complete',
        // 日
        'day': 'Days',
        // 書式選択
        'select_format': 'Choose Form',
        // 申請先選択
        'select_route': 'Select Approvers',
        // 書式別連番設定
        'number_setting': 'Sequence No. Settings',
        // 申請経路一覧
        'route_incomplete': 'Incomplete',
        // 申請書一覧
        'applicate_unset': 'Not Yet Setup',
        'applicate_pop_title': 'URL to Create Application',
        // 経路編集
        'sanction': 'Authorizer',
        'approver': 'Approver',
        'confirmer': 'Verifier',
        'lastSanction': 'Last Authorizer',
        'approval_all': 'All Approvers Approve',
        'approval_harf': 'More than 50% of Approvers Approve',
        'approval_majority': 'More than or Equal to 50% of Approvers Approve',
        'approval_one': 'More than or Equal to One Approver Approve',
        'group_approver_user': 'Selected Users Approve',
        'group_approver_all': 'Users Belonging to Group Approve',
        'group_approver_role': 'Users Belonging to Group in Role Approve',
        'group_approver_manager': 'Workflow Administrators in Selected Group Approve',
        'group_approver_approver': 'Group Internal Approvers Approve',
        'group_approver_alluser': 'All Users Belonging to Group Approve',
        'group_approver_user_all': '(All Users)',
        'title_title': 'Type of Workflow Steps',
        'title_approvalName': 'Edit Approver Group',
        'title_condition': 'Approval Condition',
        'title_conditionGroup': 'Approval Condition',
        'title_branch': 'Branch Condition',
        'title_routeList': 'Select Steps',
        'title_exceptapplicant': 'Applicant\'s Step',
        'hierarchy': 'Belonging Group Hierarchy #{{no}}',

        'group': 'Approver Group',
        'role': 'Role',
        'branch': 'Branch Condition',
        'insert_before': 'Insert One Row Above',
        'insert_after': 'Insert One Row Below',
        'add_user': 'Add User',
        'add_group': 'Add Approver Group',
        'add_role': 'Add Role',
        'add_branch': 'Add Branch Condition',
        'asterisk': '*',
        'branch_condition': 'Branch Condition',
        'no_route_data': 'The data you selected has been deleted. Please select again.',
        'select_route_group': 'Please select a group.',
        // 分岐条件の概略
        'branchsummary_unset': '(Unspecified)',
        'branchsummary_text_eq': 'When {{item}} Is {{val}}',
        'branchsummary_text_ne': 'When {{item}} Is Not {{val}}',
        'branchsummary_text_in': 'When {{item}} Contains {{val}}',
        'branchsummary_text_ni': 'When {{item}} Do Not Contain {{val}}',
        'branchsummary_select_eq': 'When {{item}} Is {{val}}',
        'branchsummary_select_ne': 'When {{item}} Is Not {{val}}',
        'branchsummary_checkbox_eq': 'When {{item}} Is Selected',
        'branchsummary_checkbox_ne': 'When {{item}} Is Not Selected',
        'branchsummary_number_eq': 'When {{item}} Is Equal to {{val}}',
        'branchsummary_number_ne': 'When {{item}} Is Not Equal to{{val}}',
        'branchsummary_number_gt': 'When {{item}} Is Greater than {{val}}',
        'branchsummary_number_lt': 'When {{item}} Is Less than {{val}}',
        'branchsummary_number_ge': 'When {{item}} Is Greater than or Equal to {{val}}',
        'branchsummary_number_le': 'When {{item}} Is Less than or Equal to {{val}}',
        'add': 'Add',
        // 申請の作成
        'subject_def_name': 'Initialize Application Form',
        'sel_default_app': 'Sequence No., Application Form, Workflow Steps, Complete Notification Email will be initialized. Are you sure you want to continue?',
        'sel_app': 'Sequence No., Application Form, Workflow Steps, Complete Notification Email will be set by the application form you selected. Are you sure you want to continue?',
        // 連番設定
        'num_nouse': 'Do Not Use',
        'num_use': 'Use',
        'num_title': 'Sequence No.',
        'num_move': 'Move',
        'num_close': 'Cancel',
        // その他
        'approval_text_all': 'All',
        'approval_text_harf': 'Majority',
        'approval_text_majority': 'Half and More',
        'approval_text_one': 'At Least One Approver',
        'please_select': 'Choose One',
        'at_select': 'A form is selected',
        'untitled': '(Untitled)',
        // 経路設定名に付加する文字列
        'private' : '[P]',

        // 組織内承認者設定
        'grpauth' : 'On',

        // 経過日数
        'elapsedday' : '{{day}} Day(s)',

        // 経路の申請者除外設定
        'except': 'Enable',
        'not_except': 'Do not change',
        'auto': 'Approve Automatically',

        // スマホ
        'spabsence' : 'Delegated User:',

        'dmy': ''
});
