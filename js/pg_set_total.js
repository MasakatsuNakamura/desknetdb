(function(c){var f=neo.core.readyNamespace("neo.webdb.pg_set_total");if(!f){return}var a="年";var e="月";var d="日";var b=neo.webdb.pg_set_total={_elBtnOk:null,_getElBtnOk:function(){return this._elBtnOk||this._initElBtnOk()},_initElBtnOk:function(){return this._elBtnOk=c("#btnok")},_elSelValType:null,_getElSelValType:function(){return this._elSelValType||this._initElSelValType()},_initElSelValType:function(){return this._elSelValType=c("#id-sel-val_type")},_elSelValColId:null,_getElSelValColId:function(){return this._elSelValColId||this._initElSelValColId()},_initElSelValColId:function(){return this._elSelValColId=c("#id-val_col select")},_elSelSub1ColId:null,_getElSelSub1ColId:function(){return this._elSelSub1ColId||this._initElSelSub1ColId()},_initElSelSub1ColId:function(){return this._elSelSub1ColId=c("#id-sel-sub1_col")},_elSelSub1Opt:null,_getElSelSub1Opt:function(){return this._elSelSub1Opt||this._initElSelSub1Opt()},_initElSelSub1Opt:function(){return this._elSelSub1Opt=c('select[name="sub1_opt"]')},_elSelSub2ColId:null,_getElSelSub2ColId:function(){return this._elSelSub2ColId||this._initElSelSub2ColId()},_initElSelSub2ColId:function(){return this._elSelSub2ColId=c("#id-sel-sub2_col")},_elSelSub2Opt:null,_getElSelSub2Opt:function(){return this._elSelSub2Opt||this._initElSelSub2Opt()},_initElSelSub2Opt:function(){return this._elSelSub2Opt=c('select[name="sub2_opt"]')},_elSelSub3ColId:null,_getElSelSub3ColId:function(){return this._elSelSub3ColId||this._initElSelSub3ColId()},_initElSelSub3ColId:function(){return this._elSelSub3ColId=c("#id-sel-sub3_col")},_elSelSub3Opt:null,_getElSelSub3Opt:function(){return this._elSelSub3Opt||this._initElSelSub3Opt()},_initElSelSub3Opt:function(){return this._elSelSub3Opt=c('select[name="sub3_opt"]')},_elSelCrossColId:null,_getElSelCrossColId:function(){return this._elSelCrossColId||this._initElSelCrossColId()},_initElSelCrossColId:function(){return this._elSelCrossColId=c("#id-sel-cross_col")},_elSelCrossOpt:null,_getElSelCrossOpt:function(){return this._elSelCrossOpt||this._initElSelCrossOpt()},_initElSelCrossOpt:function(){return this._elSelCrossOpt=c('select[name="cross_opt"]')},_elRadioSort:null,_getElRadioSort:function(){return this._elRadioSort||this._initElRadioSort()},_initElRadioSort:function(){return this._elRadioSort=c('input[name="sort"]')},_elSelSub1Sort:null,_getElSelSub1Sort:function(){return this._elSelSub1Sort||this._initElSelSub1Sort()},_initElSelSub1Sort:function(){return this._elSelSub1Sort=c('select[name="sub1_sort"]')},_elSelSub2Sort:null,_getElSelSub2Sort:function(){return this._elSelSub2Sort||this._initElSelSub2Sort()},_initElSelSub2Sort:function(){return this._elSelSub2Sort=c('select[name="sub2_sort"]')},_elSelSub3Sort:null,_getElSelSub3Sort:function(){return this._elSelSub3Sort||this._initElSelSub3Sort()},_initElSelSub3Sort:function(){return this._elSelSub3Sort=c('select[name="sub3_sort"]')},_elSelValSort:null,_getElSelValSort:function(){return this._elSelValSort||this._initElSelValSort()},_initElSelValSort:function(){return this._elSelValSort=c('select[name="val_sort"]')},_elInputTotalName:null,_getElInputTotalName:function(){return this._elInputTotalName||this._initElInputTotalName()},_initElInputTotalName:function(){return this._elInputTotalName=c('input[name="ttlname"]')},constructor:function(){},initialize:function(){this._hook();this._controlSelSort();this.createSampleTable()},_hook:function(){elBtnOk=this._getElBtnOk();this.__bind(elBtnOk,"click","Ok");elSelValType=this._getElSelValType();this.__bind(elSelValType,"change","ValType");elSelValColId=this._getElSelValColId();this.__bind(elSelValColId,"change","ValColId");elSelSub1ColId=this._getElSelSub1ColId();this.__bind(elSelSub1ColId,"change","Sub1ColId");elSelSub1Opt=this._getElSelSub1Opt();this.__bind(elSelSub1Opt,"change","Sub1Opt");elSelSub2ColId=this._getElSelSub2ColId();this.__bind(elSelSub2ColId,"change","Sub2ColId");elSelSub2Opt=this._getElSelSub2Opt();this.__bind(elSelSub2Opt,"change","Sub2Opt");elSelSub3ColId=this._getElSelSub3ColId();this.__bind(elSelSub3ColId,"change","Sub3ColId");elSelSub3Opt=this._getElSelSub3Opt();this.__bind(elSelSub3Opt,"change","Sub3Opt");elSelCrossColId=this._getElSelCrossColId();this.__bind(elSelCrossColId,"change","CrossColId");elSelCrossOpt=this._getElSelCrossOpt();this.__bind(elSelCrossOpt,"change","CrossOpt");elRadioSort=this._getElRadioSort();this.__bind(elRadioSort,"click","Sort");elSelSub1Sort=this._getElSelSub1Sort();this.__bind(elSelSub1Sort,"change","Sub1Sort");elSelSub2Sort=this._getElSelSub2Sort();this.__bind(elSelSub2Sort,"change","Sub2Sort");elSelSub3Sort=this._getElSelSub3Sort();this.__bind(elSelSub3Sort,"change","Sub3Sort");elSelValSort=this._getElSelValSort();this.__bind(elSelValSort,"change","ValSort");elInputTotalName=this._getElInputTotalName();this.__bind(elInputTotalName,"change","TotalName")},setTotal:function(){var g=c("#settotal-form");var h={url:g.attr("action"),getSendData:function(){return g.serialize()},onsuccess:function(){var j=c("input[name='bp']").val();location.href=j},onerror:function(){}};var i=new neo.webdb.Ajax(h);i.initialize();i.sendRequest()},createSampleTable:function(){var H="/wdroot/img/btn-list_order_d.gif";var z="/wdroot/img/btn-list_order_u.gif";var X=3;var V=2;var T=2;var n=3;var O=this._getElSelValType().val();var Y=this._getElSelValColId().val();var L=this._getElSelValSort().val();var P=this._getElSelValType().find("option:selected").text();var o=this._getElSelValColId().find("option:selected").text();if(Y==""){o=""}var u=this._getElSelSub1ColId().val();var y=this._getElSelSub1Opt().val();var A=this._getElSelSub1Sort().val();var g=this._isSelectedDateTimeType(this._getElSelSub1ColId());var N=this._getElSelSub1ColId().find("option:selected").text();var F=this._getElSelSub2ColId().val();var M=this._getElSelSub2Opt().val();var q=this._getElSelSub2Sort().val();var ac=this._isSelectedDateTimeType(this._getElSelSub2ColId());var D=this._getElSelSub2ColId().find("option:selected").text();var h=this._getElSelSub3ColId().val();var s=this._getElSelSub3Opt().val();var R=this._getElSelSub3Sort().val();var m=this._isSelectedDateTimeType(this._getElSelSub3ColId());var v=this._getElSelSub3ColId().find("option:selected").text();var w=this._getElSelCrossColId().val();var B=this._getElSelCrossOpt().val();var aa=this._isSelectedDateTimeType(this._getElSelCrossColId());var E=this._getElSelCrossColId().find("option:selected").text();var Z=c('input[name="sort"]:checked').val();if(u==""&&F==""){u=h;y=s;A=R;N=v;g=m;F="";h=""}else{if(u==""){u=F;y=M;N=D;A=q;g=ac;F=h;M=s;D=v;q=R;ac=m;h=""}else{if(F==""){F=h;M=s;D=v;q=R;ac=m;h=""}}}var ab=0;if(u!=""){ab++}if(F!=""){ab++}if(h!=""){ab++}var C=0;if(w!=""){C++}var K;var x=1;var r=c("#sample_table");r.empty();K="<tr>";if(ab>0){var J=(C>0)?' rowspan="2"':"";var t="";if(Z=="1"){var p=(A=="a")?z:H;t='<img src="'+p+'" class="sortimg">'}K+='<th class="bgcolor-head" colspan="3"'+J+"><div>"+neo.core.escape(N)+t+"</div></th>"}if(C>0){x=n;K+='<th class="bgcolor-col" colspan="'+n+'"><div>'+neo.core.escape(E)+"</div></th></tr>";r.append(K);K="<tr>";for(var W=0;W<x;W++){var I=this._getDisplayText(E,B,aa,W);K+='<th class="bgcolor-col"><div>'+neo.core.escape(I)+"</div></th>"}}else{var t="";if(ab==1&&Z=="2"){var p=(L=="a")?z:H;t='<img src="'+p+'" class="sortimg">'}K+='<th class="bgcolor-col"><div>'+P+t+"</div></th>"}K+="</tr>";r.append(K);var W=(A=="a")?0:X-1;while(W<X&&W>=0){K="<tr>";if(ab>=1){var I=this._getDisplayText(N,y,g,W);K+='<th class="bgcolor-row" colspan="3"><div>'+neo.core.escape(I)+"</div></th>"}for(var Q=0;Q<x;Q++){var G=(O!="0")?o:"";K+='<td class="bgcolor-val"><div>'+neo.core.escape(G)+"("+P+")</div></td>"}K+="</tr>";r.append(K);if(ab==0){break}if(ab>=2){var U=(q=="a")?0:V-1;while(U<V&&U>=0){K="<tr>";var I=this._getDisplayText(D,M,ac,U);K+='<th class="bgcolor-row sub_th_space"></th>';K+='<th class="bgcolor-row" colspan="2"><div>'+neo.core.escape(I)+"</div></th>";for(var Q=0;Q<x;Q++){var G=(O!="0")?o:"";K+='<td class="bgcolor-val"><div>'+neo.core.escape(G)+"("+P+")</div></td>"}K+="</tr>";r.append(K);if(ab>=3){var S=(R=="a")?0:T-1;while(S<T&&S>=0){K="<tr>";var I=this._getDisplayText(v,s,m,S);K+='<th class="bgcolor-row sub_th_space"></th>';K+='<th class="bgcolor-row sub_th_space"></th>';K+='<th class="bgcolor-row"><div>'+neo.core.escape(I)+"</div></th>";for(var Q=0;Q<x;Q++){var G=(O!="0")?o:"";K+='<td class="bgcolor-val"><div>'+neo.core.escape(G)+"("+P+")</div></td>"}K+="</tr>";r.append(K);(R=="a")?S++:S--}}(q=="a")?U++:U--}}(A=="a")?W++:W--}},_getDisplayText:function(l,i,k,h){if(!k){return l+"-"+(parseInt(h)+1)}var m=2010;var j=1;var g=1;if(i=="2"){return m+a+"0"+j+e+"0"+(g+parseInt(h))+d}else{if(i=="1"){return m+a+"0"+(j+parseInt(h))+e}else{return(m+parseInt(h))+a}}},_isSelectedDateTimeType:function(g){var h=g.find("option:selected");return(h.attr("class")=="date")},_controlSelSort:function(){var o=this._getElSelSub1ColId().val();var k=this._getElSelSub2ColId().val();var h=this._getElSelSub3ColId().val();var l=this._getElSelCrossColId().val();var j=c('input[name="sort"]:checked').val();var i=this._getElSelValSort();var g=this._getElSelSub1Sort();var r=this._getElSelSub2Sort();var q=this._getElSelSub3Sort();var m=c("#radio-sort_sub");var p=c("#radio-sort_val");var n=0;if(o!=""){n++}if(k!=""){n++}if(h!=""){n++}var s=false;if(n==0){j="2";s=true}m.attr("disabled",s);g.attr("disabled",s);r.attr("disabled",s);q.attr("disabled",s);s=false;if(n!=1||l!=""){j="1";s=true}p.attr("disabled",s);i.attr("disabled",s);if(j=="1"){m.attr("checked",true);p.attr("checked",false)}else{p.attr("checked",true);m.attr("checked",false)}if(j=="1"){c("#id-sort_tval").hide();c("#id-sort_sub").show()}else{c("#id-sort_sub").hide();c("#id-sort_tval").show()}},__closure:neo.core.getClosure,__bind:neo.jq.bindListener,onclickOk:function(g){g.preventDefault();this.setTotal()},onchangeValType:function(h){var g=this._getElSelValType().val();if(g=="0"){c("#id-val_col").hide()}else{c("#id-val_col").show()}this.createSampleTable()},onchangeValColId:function(g){this.createSampleTable()},onchangeSub1ColId:function(i){var g=this._getElSelSub1ColId();var h=this._isSelectedDateTimeType(g);if(h){c("#id-sub1_opt").show()}else{c("#id-sub1_opt").hide()}this._controlSelSort();this.createSampleTable()},onchangeSub1Opt:function(g){this.createSampleTable()},onchangeSub2ColId:function(i){var g=this._getElSelSub2ColId();var h=this._isSelectedDateTimeType(g);if(h){c("#id-sub2_opt").show()}else{c("#id-sub2_opt").hide()}this._controlSelSort();this.createSampleTable()},onchangeSub2Opt:function(g){this.createSampleTable()},onchangeSub3ColId:function(i){var g=this._getElSelSub3ColId();var h=this._isSelectedDateTimeType(g);if(h){c("#id-sub3_opt").show()}else{c("#id-sub3_opt").hide()}this._controlSelSort();this.createSampleTable()},onchangeSub3Opt:function(g){this.createSampleTable()},onchangeCrossColId:function(i){var g=this._getElSelCrossColId();var h=this._isSelectedDateTimeType(g);if(h){c("#id-cross_opt").show()}else{c("#id-cross_opt").hide()}this._controlSelSort();this.createSampleTable()},onchangeCrossOpt:function(g){this.createSampleTable()},onclickSort:function(h){var g=c('input[name="sort"]:checked').val();if(g=="1"){c("#id-sort_sub").show();c("#id-sort_tval").hide()}else{c("#id-sort_sub").hide();c("#id-sort_tval").show()}this.createSampleTable()},onchangeSub1Sort:function(g){this.createSampleTable()},onchangeSub2Sort:function(g){this.createSampleTable()},onchangeSub3Sort:function(g){this.createSampleTable()},onchangeValSort:function(g){this.createSampleTable()},onchangeTotalName:function(g){}};c(document).ready(function(){b.initialize()})})(jQuery);