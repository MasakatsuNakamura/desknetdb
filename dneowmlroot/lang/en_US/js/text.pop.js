if (!neo.denbun.textMap) {
    neo.denbun.textMap = {};
}
$.extend(neo.denbun.textMap, {

    // 共通
    '閉じる': 'Close',
    '警告': 'Warning',
    '確認': 'Confirmation',
    'お待ちください': 'Please wait',
    '準備中...': 'Readying...',
    '削除してよろしいですか？': 'Are you sure you want to delete?',
    'キャンセル': 'Cancel',
    'キャンセルしますか？': 'Are you sure you want to cancel?',
    'このページから移動しますか？': 'Are you sure you want to move page?',
    '別ウィンドウで編集中です。': 'You are editing in other window(s).',
    '設定を反映させるには画面を再読み込みする必要があります。': 'Reload page to apply settings.',
    '検索結果': 'Search Results',
    'OK': 'OK',
    '新しいブラウザを起動して、以下のURLにアクセスします。よろしいですか？': 'You are going to access the following URL in a new browser window. Are you sure you want to continue?',

    // メール一覧画面
    'アカウントがありません。今すぐ作成しますか？': 'You have no accounts. Would you like to create now?',
    '選択したメールを完全に削除してよろしいですか？': 'Are you sure you want to permanently delete the selected email?',
    '選択したメールをゴミ箱に移動してよろしいですか？': 'Are you sure you want to move the selected email to Trash?',
    '※ゴミ箱に保存されているメールの場合は、完全に削除されます。': '*If the email is in Trash, it will be permanently deleted.',
    'このメールを完全に削除してよろしいですか？': 'Are you sure you want to permanently delete this email?',
    'このメールをゴミ箱に移動してよろしいですか？': 'Are you sure you want to move this email to Trash?',
    'メールヘッダー': 'Message Header',
    '開封確認メールを送信しますか？': 'Do you want to send a read receipt?',
    'ダウンロード': 'Download',
    '選択されたメールの差出人のドメインは「迷惑メール設定」に追加されました。': 'The sender\'s domain was added to Junk Emails\' list.',
    '選択されたメールの差出人のアドレスは「迷惑メール設定」に追加されました。': 'The sender\'s email was added to Junk Emails\' list.',
    '「迷惑メール設定」を有効にするには[設定]-[迷惑メール設定]で「迷惑メール処理」を「行う」に設定してください。': 'To turn on the junk email features, choose "Use" on [Junk Email Features] in [Settings]-[Junk Emails] screen.',
    '選択したメールを振分けてもよろしいですか？': 'Would you like to filter messages?',
    '実行中...': 'Running...',
    '空にする': 'Empty',
    'フォルダ作成': 'Create Folder',
    'フォルダ名を入力してください。': 'Folder Name should be specified.',
    'フォルダを選択してください。': 'Please choose a folder.',
    '選択中のフォルダをゴミ箱に移動してよろしいですか？': 'Are you sure you want to move the selected folder(s) to Trash?',
    '選択中のフォルダを削除してよろしいですか？': 'Are you sure you want to delete the selected folder(s)?',
    '※フォルダに保存されているメール及びサブフォルダもすべて削除されます。': '*All email and sub-folders in the folder(s) will be deleted too.',
    'ゴミ箱に保存されているデータを全て削除します。\nよろしいですか？': 'All the data in Trash will be permanently deleted. \n Are you sure you want to continue?',
    'フォルダ移動': 'Move Folder',
    '親フォルダをサブフォルダに移動することはできません。': 'A parent folder cannot move to its sub folders.',
    'フォルダ名変更': 'Edit Folder Name',
    '日付が不正です。': 'Invalid date.',
    '検索対象フォルダを選択してください。': 'Search in should be specified.',
    '既に同じメールアドレスが登録されていますが、\nアドレス帳に追加しますか？': 'The same email address is already registered. Do you want to add the address to the address book?',
    'このページ内の $$ 件すべてが選択されています。': 'All $$ item(s) in this page are selected.',
    '$$ 件すべてを選択': 'Select all $$ item(s)',
    '$$ 件すべてが選択されています。': 'All $$ item(s) selected.',
    '削除中...': 'Deleting...',

    // メール参照画面
    'このメッセージは、重要度は「高」が設定されています': 'This message was sent with High priority.',
    'このメッセージは、重要度は「低」が設定されています': 'This message was sent with Low priority.',
    'このメッセージは、フラグが設定されています': 'This message is flagged.',
    'このメッセージは、返信しました': 'This message was replied.',
    'このメッセージは、転送しました': 'This message was forwarded.',

    // メール編集画面
    '言語': 'Language',
    'テキスト形式に変更すると現在の書式がすべて失われます。よろしいですか？': 'If you change the style from HTML to text, current format will be lost. Are you sure you want to continue?',
    'アカウントが登録されていません。\n一時保存後、アカウントを登録し、再度送信してください。': 'The account does not exist. \nSave the message first and add the account and send it.',
    '宛先を指定してください。':  'Please specify at least one recipient.',
    '送信してもよろしいですか？': 'Are you sure you want to send the message?',
    '送信中...': 'Sending...',
    '保存中...': 'Saving...',
    'このメールは送信されていません。': 'This message has not been sent.',
    '送信内容確認': 'Confirm Entry',
    '高い': 'High',
    '普通': 'Normal',
    '低い': 'Low',
    '要求しない': 'Not Required',
    '要求する': 'Required',
    '未入力': 'N/A',
    '本文を確認': 'Body is confirmed.',
    '未選択': 'Not Selected',
    '宛先，CCに多数のアドレスが指定され情報漏洩の危険性があります。BCCの使用をご検討ください。': 'It is possible to occure information disclosure becaus of specified many email addresses in From and CC. Please consider to use BCC.',

    // アドレス一覧画面
    '選択したアドレスをフォルダから削除します。よろしいですか？': 'You are about to remove the selected contact(s) from the folder. Are you sure you want to continue?',
    '選択したアドレスを削除してよろしいですか？': 'Are you sure you want to delete the selected contact(s)?',
    '（すべて）': '(All)',
    '（個人）': '(Personal)',
    '（共有）': '(Public)',
    'アドレスフォルダ作成': 'Create New Contact Group',
    'フォルダ名': 'Folder Name',
    'フォルダを削除してよろしいですか？\nアドレスは削除されません。': 'Are you sure you want to delete the selected contact group? \nAddresses are not deleted.',
    'アドレスフォルダ名変更': 'Edit Address Folder Name',
    '検索条件を入力してください。': 'Please specify search criteria.',

    // 利用者一覧画面
    '選択したユーザーをグループから外します。よろしいですか？': 'Are you sure you want to remove selected user(s) from the group? Are you sure you want to continue?',
    'グループ名': 'Group Name',
    '個人グループ名の変更': 'Edit Private Group',
    '個人グループ作成': 'Create Private Group',

    // アドレス参照画面
    '共有アドレス': 'Public Contact',
    '個人アドレス': 'Personal Contact',

    // アドレス編集画面
    'アドレスの登録': 'New Contact',
    'アドレスの変更': 'Edit Contact',
    '基本情報': 'General Information',
    '個人情報': 'Personal Information',
    '生年月日': 'Birthday',
    '表示名': 'Send Mail as',
    'ふりがな': 'Nickname',
    '日本': 'USA',

    // 設定＞ゴミ箱設定画面
    '経過日数': 'Elapsed Days',

    // 設定＞アカウント設定画面
    '対象アカウントを選択してください。': 'Select account(s).',
    '選択したアカウントを削除してよろしいですか？': 'Are you sure you want to delete the selected account(s)?',
    '行う': 'Yes',
    '行わない': 'No',
    '正常': 'Normal',
    'エラー': 'Error',
    '設定': 'Settings',
    'アカウント設定': 'Account Settings',
    '共有アカウント設定': 'Public Account Settings',

    // 設定＞自動受信設定画面
    '受信時刻が未設定です。': 'Received Date is not set.',

    // 設定＞迷惑メール設定画面
    '対象行を選択してください。': 'Select row(s)',
    '選択した迷惑メール設定を削除してよろしいですか？': 'Are you sure you want to delete the selected junk email(s)?',
    '強制削除': 'Delete',
    '削除対象外': 'Exception',

    // 設定＞アカウント編集画面
    'アカウントの登録': 'Create Email Account',
    'アカウントの変更': 'Edit Email Account',
    'アカウント名': 'Account Name',
    'メールアドレス': 'Email Address',
    '受信メールサーバー(POP3):ポート番号': 'Incoming Mail Server (POP3): Port No.',
    '受信メールサーバー(POP3):サーバータイムアウト': 'Incoming Mail Server (POP3): Server Timeouts',
    '送信メールサーバー(SMTP):ポート番号': 'Outgoing Mail Server (SMTP): Port No.',
    '共有アカウントの登録': 'Create Public Account',
    '共有アカウントの変更': 'Edit Public Account',
    '※対象のアカウントに保存されているメールデータも削除されます。': '* The email data stored in the target account will also be deleted.',
    'ログをダウンロード': 'Download log file',

    // 設定＞アカウント簡単設定画面
    'パスワード': 'Password',
    'Yahoo!メール': 'Yahoo! Mail',

    // 設定＞署名設定画面
    '対象署名を選択してください。': 'Select signature(s).',
    '選択した署名を削除してよろしいですか？': 'Are you sure you want to delete the selected signature(s)?',

    // 設定＞署名編集画面
    '署名の登録': 'Create Signature',
    '署名の変更': 'Edit Signature',
    '署名名称': 'Name of Signature',

    // 設定＞フィルター設定画面
    '対象フィルタを選択してください。': 'Select filter(s).',
    '選択したフィルタを削除してよろしいですか？': 'Are you sure you want to delete the selected filter(s)?',
    '無効': 'Disable',
    '有効': 'Enable',
    '自動': 'Automatically',
    '手動': 'Manually',

    // 設定＞フィルター編集画面
    'フィルタの登録': 'Create Message Filter',
    'フィルタの変更': 'Edit Message Filter',
    'フィルタ名': 'Filter Name',
    '転送先アドレス': 'Forward to',
    'フォルダ選択': 'Select Folder',

    // 設定＞迷惑メール編集画面
    '迷惑メール設定の登録': 'Create Junk Emails',
    '迷惑メール設定の変更': 'Edit Junk Emails',
    'メールアドレス/ドメイン': 'Email Address/Domain',

    // 設定＞アドレス帳系共通
    '項目を選択してください。':         'Select items(s)',
    'ＩＤ（システムＩＤ：自動発番）':   'ID (System ID: Auto-Numbering)',
    '氏名':                         'Name',
    'ふりがな':                     'Nickname',
    'e-mail':                           'Email',
    '携帯電話':                         'Mobile Phone',
    '自宅－国名':                       'Home - Country/Region',
    '自宅－郵便番号':                   'Home - Zip/Postal Code',
    '自宅－都道府県':                   'Home - State/Province',
    '自宅－市区町村・番地':             'Home - City',
    '自宅－ビル・マンション名':         'Home - Street',
    '自宅－TEL':                        'Home - Phone',
    '勤務先－国名':                     'Workplace - Country/Region',
    '勤務先－郵便番号':                 'Workplace - Zip/Postal Code',
    '勤務先－都道府県':                 'Workplace - State/Province',
    '勤務先－市区町村・番地':           'Workplace - City',
    '勤務先－ビル・マンション名':       'Workplace - Street',
    '勤務先－会社名':                   'Workplace - Company',
    '勤務先－会社名ふりがな':           'Workplace - Company (Nickname)',
    '勤務先－代表TEL':                  'Workplace - Phone',
    '勤務先－代表FAX':                  'Workplace - Fax',
    '勤務先－役職':                     'Workplace - Job Title',
    '勤務先－事業所':                   'Workplace - Division',
    '勤務先－部署１':                   'Workplace - Department-1',
    '勤務先－部署２':                   'Workplace - Department-2',
    '勤務先－部署TEL':                  'Workplace - Department Phone',
    '勤務先－部署FAX':                  'Workplace - Department Fax',
    '個人－e-mail(個人)':               'Private - Private Email',
    '個人－e-mail(携帯)':               'Private - Mobile Email',
    '個人－生年月日':                   'Private - Birthday',
    '個人－備考':                       'Private - Remarks',
    'インポート':                       'Import',

    // 設定＞最適化
    '最適化中...': 'Optimizing...',

    // バリデーション
    '$$を入力してください。': '$$ should be specified.',
    '$$に不正な文字が使われています。': '$$ contains invalid character(s).',
    '$$が不正です。': '$$ is invalid.',

    // ドラッグヘルパー
    '$$ 件のメール': '$$ message(s)',
    '$$ 件のアドレス': '$$ contact(s)',
    '$$ 件のユーザー': '$$ user(s)',

    // 最上部に表示する言語リスト（カンマ区切り複数可）
        'encoding':  'Windows-1252',
    // ネオツイ連携
    '新着メールあり':                   'You\'ve got mail.',

    // その他
    'システム管理者':                   'Administrator',
    '一般ユーザー':                     'General User',
    'その他':                           'Other',
    '男性':                             'Male',
    '女性':                             'Female',
    'エラー詳細':                       'Error Details',
    'エラーメッセージ消去':             'Clear Error Message',
    '条件':                             'Conditions',
    'メッセージ':                       'Message',
    '登録中...':                        'Registration is in progress...',
    'フィルタ処理でエラーが発生しました。': 'The error occurred in message filtering process.',
    'キャビネットのフォルダ（$$）に追加しました。': 'It has been added in the folder ($$) of the Cabinet.',
    'ウェブメールを終了します。\n※[ウェブメール]から起動したブラウザも全て終了します。': 'The WebMail will be closed. \n* All the browsers started from "WebMail" will be closed.',
    'アカウントが設定されていません。管理者へお問い合わせください。': 'No accounts registered. Please contact your administrator.',
    'フィルタ処理に失敗しました。': 'Failed to process filtering.',
    '$count$件': '$count$ item(s)',
    '個人アカウント': 'Personal Account',
    '$$ヶ月': '$$ Month(s)',
    '無期限': 'Indefinite Period',
    '$count$件インポートされました。': '$count$ item(s) imported.',
    '未送信のメールがあります。\n※ウェブメールを終了すると未送信メールは「下書き」に保存されます。': 'You have at least one unsent message. \n* It will be saved in "Drafts" when you quit WebMail.',
    'メールを削除しました。': 'The message has been deleted.',
    'メールを保存しました。': 'The message has been saved.',
    'メールを送信しました。': 'The message has been sent.',
    '自動的にタブが閉じない場合は、手動でタブを閉じてください。': 'Please close this window if it does not close automatically.',
    '制限されている表示サイズをオーバーしたため、本文を切り捨てました。': 'Since the display size limit was exceeded, the message body was shrunken.',
    'このメッセージ本文はメールデータに問題があったため正しく表示できない可能性があります。':'Since the message\'s body has some problems in the mail data, it may not be displayed adequately.',
    'メールの最適化': 'Optimize Message Indexes',

    '': ''  // 番兵
});
