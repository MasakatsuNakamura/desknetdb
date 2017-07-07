$(document).on('mobileinit', function(){
    // テーマ
    $.mobile.page.prototype.options.theme = "n";
    $.mobile.page.prototype.options.contentTheme = "a";
    $.mobile.dialog.prototype.options.theme = "n";
    $.mobile.selectmenu.prototype.options.theme = "a";

    // セレクトタグでカスタムメニューを使用する
    $.mobile.selectmenu.prototype.options.nativeMenu = false;
});
