/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
var desknets=desknets?desknets:{};(desknets.webclip=function cabent(){var f="2.5.0.0";var ah={mainUrl:"dneo.{{modType}}",cabinetUrl:"zcabinet.{{modType}}?cmd=cabindex#folder={{folder}}",iframeUrl:"zhtml.{{modType}}?cmd=tmplhtml&html=pubwclip/zzclip.html&type=html&fldlang={{lang}}&p3p=on",dneoCSSwebclip:"dneores/themes/webclip.css?v="+f,imgSelMax:10,imgMinWidth:100,imgMinHeight:100,headerHeight:45,imgHeight:200,imgMargin:20,defaultLang:"ja_JP"};var w={".gif":"image/gif",".jpg":"image/jpeg",".png":"image/png",".bmp":"image/bitmap"};var aL="";var aG="";var ai="";var o="";var u="";var af="";var aI=false;var E=0;var Y=false;var al=false;var aM="";var aw;var ae=0;var I="";var ak="";var U={headerHTML:'<div id="webclip-capture-header" class="webclip-capture-header" style="display:none;" data-type="2">  <a target="dneo" href="{{mainUrl}}"><div class="webclip-h-logo"></div></a>  <div class="webclip-header-close"></div><input name="button" value="{{logoutLabel}}" class="webclip-header-input-btn-logout" type="button">  <div class="webclip-header-input">    <div id="webclip-header-input-msg" class="webclip-header-input-msg">{{imageClipMsg}}</div>    <input type="button" name="button" id="cliping-button" value="{{clipBtnLabel}}" class="webclip-header-input-btn-login webclip-popshow-foldersel" data-type="3">  </div></div><div class="webclip-capture-header" style="display:none;" data-type="3">  <a target="dneo" href="{{mainUrl}}"><div class="webclip-h-logo"></div></a>  <div class="webclip-header-close"></div><input name="button" value="{{logoutLabel}}" class="webclip-header-input-btn-logout" type="button">  <div class="webclip-header-input">    <div class="webclip-header-input-msg">{{connectMsg}}</div>    <div class="webclip-header-downloading-bar webclip-popshow-capfin" data-type="4"><div class="webclip-header-progres-bar"></div></div>    <input type="button" name="button" id="dneo-clip-cancel-button" value="{{cancelLabel}}" class="webclip-header-input-btn-login webclip-moc-header-btn" data-type="2">  </div></div><div class="webclip-capture-header" style="display:none;" data-type="4">  <a target="dneo" href="{{mainUrl}}"><div class="webclip-h-logo"></div></a>  <div class="webclip-header-close"></div><input name="button" value="{{logoutLabel}}" class="webclip-header-input-btn-logout" type="button">  <div class="webclip-header-input">    <div id="webclip-header-input-msg-next" class="webclip-header-input-msg">{{clipComplete}}</div>    <input type="button" name="button" id="cliping-button-next" value="{{clipBtnLabel}}" class="webclip-header-input-btn-login webclip-popshow-foldersel" data-type="3">  </div></div>',popEntryMsgHTML:'          {{popUpMsg}}<br />          <table class="webclip-table-set">            <tr>              <th class="webclip-th webclip-folder-th"><span class="webclip-colon">{{clipFolderLabel}}</span></th>              <td class="webclip-td">                <div class="webclip-multi-line-title webclip-folder-text-box">                  <div class="webclip-multi-line-title-text">                    <span title="{{clipFolderTitle}}">{{clipFolder}}</span>                  </div>                </div>              </td>            </tr>          </table>',popMsgHTML:'<div class="webclip-pop webclip-pop-capfin" id="webclip-pop" style="top: 9px; left: 230px; display:none;">    <div class="webclip-pop-header">      <div class="webclip-pop-title" id="webclip-pop-title">{{popUpTitle}}</div>      <div class="webclip-pop-close" id="webclip-pop-close"></div>    </div>    <div class="webclip-pop-body" id="webclip-pop-body">      {{popUpMsg}}    </div>    <div class="webclip-pop-footer">      <input type="button" class="btn-f save" value="{{okBtnLabel}}" id="webclip-pop-close-button" name="button">    </div></div>'};function l(i,aP,aQ){var r=new RegExp("{{"+aP+"}}","ig");return i.replace(r,function(aR,aS,aT){return aQ})}function m(i){Array.prototype.forEach.call(i.querySelectorAll("a"),function(aP){var r=aP.getAttribute("href");if(r!=null){if(r.match(/^javascript:/)){aP.setAttribute("href","")}else{if(!r.match(/^http:\/\//)&&!r.match(/^https:\/\//)){aP.setAttribute("href",aP.href)}}}})}function Q(i){Array.prototype.forEach.call(i.querySelectorAll("script"),function(r){r.parentElement.removeChild(r)});Array.prototype.forEach.call(i.querySelectorAll("*[onload]"),function(r){r.removeAttribute("onload")})}function aF(i){var r=i.querySelectorAll('applet, object:not([type="image/svg+xml"]):not([type="image/svg-xml"]), embed:not([src*=".svg"])');Array.prototype.forEach.call(r,function(aP){aP.parentElement.removeChild(aP)});r=i.querySelectorAll("audio[src], video[src]");Array.prototype.forEach.call(r,function(aP){aP.removeAttribute("src")})}function K(i){Array.prototype.forEach.call(i.querySelectorAll("blockquote[cite]"),function(r){r.removeAttribute("cite")})}function L(i){Array.prototype.forEach.call(i.querySelectorAll("iframe, frame"),function(r){r.parentElement.removeChild(r)})}function H(i){Array.prototype.forEach.call(i.querySelectorAll("meta[http-equiv=refresh]"),function(r){r.parentElement.removeChild(r)})}function R(r){Array.prototype.forEach.call(r.querySelectorAll("style"),function(i){i.parentElement.removeChild(i)});var aT=r.getElementsByTagName("link");for(var aR=0;aR<aT.length;aR++){var aQ=aT[aR];if(aQ.type=="test/css"){}}var aU=document.styleSheets;for(var aR=0;aR<aU.length;aR++){var aS=aU[aR];if(aS.href!=null){for(var aP=0;aP<aS.cssRules.length;aP++){rule=aS.cssRules[aR]}}}}function q(){return(Math.max(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),Math.max(document.body.clientHeight,document.documentElement.clientHeight)))}function d(){return(Math.max(Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),Math.max(document.body.offsetWidth,document.documentElement.offsetWidth),Math.max(document.body.clientWidth,document.documentElement.clientWidth)))}function n(aP,r,i){var aQ=new RegExp("{{"+r+"}}","ig");var aP=aP.replace(aQ,i);return aP}function aj(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;")}function v(){var aQ=document.getElementsByTagName("script");var r;for(var aR=0;aR<aQ.length;aR++){var r=aQ[aR].src;if(r.match(/wclipmain.js/)){break}}var aU=r.substring(r.indexOf("?")+1);var aV=aU.split("&");var aW=new Object();for(var aR=0;aR<aV.length;aR++){var aS=aV[aR].split("=");var aT=decodeURIComponent(aS[0]);var aP=decodeURIComponent(aS[1]);aW[aT]=decodeURIComponent(aP)}return aW}function aq(i){return i.substring(i.lastIndexOf("/")+1,i.length)}function aO(i){return i.substring(i.lastIndexOf("."),i.length)}function ay(i){return w[i]}function an(i){xhr=new XMLHttpRequest();xhr.onreadystatechange=function(){if(xhr.readyState==4){var aP=xhr.response;var r=aP.type}};xhr.open("GET",i,true);xhr.responseType="blob";xhr.send(null)}function aN(i){xhr=new XMLHttpRequest();xhr.onreadystatechange=function(){if(xhr.readyState==4){filename=aq(i);mimetype=ay(aO(filename));c({title:document.title,data:xhr.response,mimetype:mimetype,filename:filename})}};xhr.open("GET",i,true);xhr.responseType="arraybuffer";xhr.send(null)}function c(r){var i=document.getElementById("webclip-header-iframe");i.contentWindow.postMessage(r,"*")}function T(i){aN(this.src)}function F(){var i=document.cookie.split("; ");return i}function ad(aT){var aW=this;if(al==true){return}aW.disabled=true;B(false);A(false);var aX=new Array();var aV=F();var r=document.URL;if(r.slice(-1)!="/"){r=r.slice(0,r.lastIndexOf("/"))}var aQ=0;if(aL=="img"){var aP=document.getElementsByClassName("webclip-img-chk");for(var aS=0;aS<aP.length;aS++){node=aP[aS];if(node.style.display=="block"){var aU=node.parentNode;var aR=aU.style.backgroundImage;aR=aR.replace(/^url\(\"/,"");aR=aR.replace(/\"\)$/,"");aR=aR.replace(/^url\(/,"");aR=aR.replace(/\)$/,"");if(aR.slice(0,1)=="/"){aR=r+aR.slice(1)}aX[aQ++]=aR}}if(aQ==0){j(desknets.Resource.webclip.titleConfirm,desknets.Resource.webclip.msgSelImg);aW.disabled=false;B(true);A(true)}else{c({cmd:"clipImage",title:document.title,imgUrl:aX,cookieInfo:aV,url:r,foldername:folderName,clipurl:af})}}else{c({cmd:"clipHtml",title:document.title,html:o,cookieInfo:aV,url:r,foldername:folderName,clipurl:af})}}function g(){var r=document.getElementsByClassName("webclip-img-chk");for(var aP=0;aP<r.length;aP++){node=r[aP];if(node.style.display=="block"){node.style.display=""}}E=0}function ac(i){self.disabled=true;aI=true;c({cmd:"terminate"})}function az(){if(window.removeEventListener){window.removeEventListener("mouseup",D,false);window.removeEventListener("click",h,false)}if(document.getElementsByClassName){var aS=document.getElementsByClassName("webclip-header")[0];if(aS!=null&&aS!=undefined){aS.parentNode.removeChild(aS)}var i=document.getElementsByClassName("webclip-body")[0];if(i){i.parentNode.removeChild(i)}}var aQ=document.getElementById("webclip-pop");if(aQ){if(aQ.parentNode.remove){aQ.parentNode.remove()}else{aQ.parentNode.removeChild(aQ)}}var aP=document.getElementById("webclip-block");if(aP){if(aP.remove){aP.remove()}else{aP.parentNode.removeChild(aP)}}var aR=function(aU){var aW=new RegExp(aU);var aT=document.getElementsByTagName("script");for(var aV=0;aV<aT.length;aV++){if(aT[aV].src.match(aW)){aT[aV].parentNode.removeChild(aT[aV]);break}}};aR("wclipmain.js");aR("pubwclip.js");var r=function(aU){var aW=new RegExp(aU);var aT=document.getElementsByTagName("link");for(var aV=0;aV<aT.length;aV++){if(aT[aV].href.match(aW)){aT[aV].parentNode.removeChild(aT[aV]);break}}};r(ah.dneoCSSwebclip);aI=false}function aa(i){if(al==true){return}this.disabled=true;c({cmd:"cancel"})}function P(r){var i=document.createElement("LINK");i.rel="stylesheet";i.type="text/css";i.href=(aG=="")?ah.dneoCSSwebclip:aG+ah.dneoCSSwebclip;i.onerror=function(){alert(desknets.Resource.webclip.errInit)};try{document.body.appendChild(i)}catch(aP){alert(desknets.Resource.webclip.errInit)}}function C(r,i,aT){var aU=document.createElement("DIV");aU.className="webclip-header";aU.id="webclip-header";aU.style.zIndex="2147483645";aU.style.top="0";var aP=U.headerHTML;aP=l(aP,"connectMsg",desknets.Resource.webclip.connectMsg);aP=l(aP,"imageClipMsg",desknets.Resource.webclip.imageClipMsg);aP=l(aP,"clipBtnLabel",desknets.Resource.webclip.clipBtnLabel);aP=l(aP,"cancelLabel",desknets.Resource.webclip.cancelLabel);aP=l(aP,"clipComplete",desknets.Resource.webclip.clipComplete);aP=l(aP,"logoutLabel",desknets.Resource.webclip.logoutLabel);aP=l(aP,"mainUrl",I);if(r.match(/\/$/)&&i.match(/^\//)){r=r.replace(/\/$/,"")}var aR=r+i+ah.iframeUrl;aR=l(aR,"modType",aM);if(aT==undefined||aT==""){aR=l(aR,"lang",ah.defaultLang)}else{aR=l(aR,"lang",aT)}aU.innerHTML=aP;document.body.appendChild(aU);var aS=document.createElement("iframe");aS.style.display="none";aS.id="webclip-header-iframe";aS.src=aR;aS.frameborder="0";aS.scrolling="no";aS.onload=function(){c({cmd:"login chk",mod:aM})};aU.appendChild(aS);var aQ=document.getElementById("webclip-header");x();y()}function x(){var i=document.createElement("DIV");i.style.zIndex="2147483646";i.style.height=q()+"px";i.style.position="absolute";i.style.top="0px";i.style.width="100%";i.style.display="none";var r=U.popMsgHTML;r=l(r,"popUpTitle",desknets.Resource.webclip.titleComplete);r=l(r,"popUpMsg",desknets.Resource.webclip.clipComplete);r=l(r,"okBtnLabel",desknets.Resource.webclip.okBtnLabel);i.innerHTML=r;document.body.appendChild(i);var aP=document.getElementById("webclip-pop-close-button");aP.onclick=M;var aQ=document.getElementById("webclip-pop-close");aQ.onclick=M}function y(){var i=document.createElement("DIV");i.style.zIndex="2147483644";i.style.height=q()+"px";i.style.position="absolute";i.style.top="0px";i.style.width="100%";i.style.backgroundColor="#AAAAAA";i.style.opacity=0.3;i.id="webclip-block";i.style.display="none";document.body.appendChild(i)}function Z(){var aT=document.createElement("DIV");aT.className="webclip-body";aT.style.zIndex="2147483643";aT.style.height=q()+"px";var aP=document.createElement("DIV");aP.className="webclip-capture-layer";aT.appendChild(aP);var a1=document.createElement("DIV");a1.className="webclip-img-list";aP.appendChild(a1);var aV=document.createElement("UL");a1.appendChild(aV);var aR=0;var a0=document.getElementsByTagName("IMG");for(var aS=0;aS<a0.length;aS++){var aQ=a0[aS].naturalWidth?a0[aS].naturalWidth:a0[aS].width;var aY=a0[aS].naturalHeight?a0[aS].naturalHeight:a0[aS].height;if(aQ<ah.imgMinWidth||aY<ah.imgMinHeight){continue}if(a0[aS].src==""){continue}if(a0[aS].src.match(/^data/)){continue}var aZ=document.createElement("LI");var r=a0[aS].src.replace(/\(/g,"%28").replace(/\)/g,"%29");aZ.style.backgroundImage="url("+r+")";aZ.onclick=function(a4){var a2=this.childNodes;if(a2){for(var a3=0;a3<a2.length;a3++){node=a2[a3];cls=node.getAttribute("class")||node.getAttribute("className");if(cls=="webclip-img-chk"){if(node.style.display=="none"||node.style.display==""){if(E+1>ah.imgSelMax){j(desknets.Resource.webclip.titleConfirm,desknets.Resource.webclip.msgSelImgMax+ah.imgSelMax);return}node.style.display="block";E++}else{node.style.display="none";E--}}}}if(Y==true){b("img")}};aV.appendChild(aZ);var aU=document.createElement("DIV");aU.className="webclip-img-chk";aZ.appendChild(aU);var aW=document.createElement("DIV");aW.className="webclip-img-size";aW.innerHTML=aQ+"×"+aY;aZ.appendChild(aW);aR++}ae=aR;var aX=ah.headerHeight+((ah.imgHeight+ah.imgMargin)*Math.ceil(aR/4));if(q()<aX){aT.style.height=aX+"px"}return(aT)}function aE(i){var r=document.getElementById("webclip-header-iframe");if(r!=null){if(i==true){r.style.display=""}else{r.style.display="none"}}}function p(aQ){var i=document.getElementsByClassName("webclip-header-progres-bar");var aP=i[0].parentNode.clientWidth;var aR=aP/100;var r=String(parseInt(aQ,10)*aR)+"px";i[0].style.width=r}function s(aQ){var aP=document.getElementsByClassName("webclip-header-input-msg");for(var r=0;r<aP.length;r++){if(aP[r].parentNode.parentNode.style.display!="none"){aP[r].innerHTML=aQ}}}function ao(r,aR){var aT=document.getElementsByClassName("webclip-capture-header");var aQ=function(aY,aX){for(var aV=0;aV<aY.length;aV++){var aW="";if(aY[aV].dataset!=undefined){aW=aY[aV].dataset.type}else{for(var aU=0;aU<aY[aV].attributes.length;aU++){if(aY[aV].attributes[aU].name=="data-type"){aW=aY[aV].attributes[aU].nodeValue}}}if(aW==aX){if(aX==3){aY[aV].style.display="block"}else{aY[aV].style.display=""}}else{aY[aV].style.display="none"}}};if(r=="clip"){aQ(aT,2);aE(false);var aP=document.getElementById("cliping-button");if(aP!=null){aP.disabled=false}}else{if(r=="connect"){var aS=document.getElementById("dneo-clip-cancel-button");if(aS!=null){aS.disabled=false}aQ(aT,3);p(aR);aE(false)}else{if(r=="end"){aQ(aT,4);aE(false);var i=document.getElementById("cliping-button-next");if(i!=null){i.disabled=false}}else{if(r=="login"){aQ(aT,5);aE(true)}}}}}function z(){if(window.getSelection){var aR=window.getSelection();if(aR.rangeCount>0){var aS=aR.toString();var aQ=aR.getRangeAt(0);var i=document.createElement("div");i.appendChild(aQ.cloneContents());var aP=i.innerHTML;i.removeNode;if(aP.length>0){return true}else{return false}}else{return false}}else{}}function aB(){if(window.getSelection){var aR=window.getSelection();if(aR.rangeCount>0){var aS=aR.toString();var aQ=aR.getRangeAt(0);var i=document.createElement("div");i.appendChild(aQ.cloneContents());var aP=i.innerHTML;i.removeNode;return aP}}else{}}function b(aP){if(aI==true){return}var i=document.getElementById("webclip-header-input-msg");if(i!=null){if(aP=="img"){var r=document.getElementById("webclip-header-input-msg-next");if(E==0){i.innerHTML=desknets.Resource.webclip.imageClipMsg;r.innerHTML=desknets.Resource.webclip.clipComplete}else{i.innerHTML=r.innerHTML=desknets.Resource.webclip.imageClipMsg+" "+E+" "+desknets.Resource.webclip.imageClipCnt;ao("clip")}}else{if(z()){i.innerHTML=desknets.Resource.webclip.selectClipMsg}else{i.innerHTML=desknets.Resource.webclip.htmlClipMsg}}}}function D(r){var i=document.getElementById("webclip-header-input-msg");if(i!=null){if(i.innerHTML==desknets.Resource.webclip.imageClipMsg){window.removeEventListener("mouseup",D,false);window.removeEventListener("click",h,false);return}}setTimeout(function(){if(z()){o=aB()}else{o=aH.outerHTML}if(aL!="img"){b("html")}},0)}function h(i){setTimeout(function(){if(z()){o=aB()}else{o=aH.outerHTML}if(aL!="img"){b("html")}},0)}function X(){var aP=document.getElementsByTagName("meta");for(var r=0;r<aP.length;r++){if(aP[r].httpEquiv.match(/X-UA-Compatible/)){if(aP[r].content.match(/IE=emulateIE7/)){aP[r].parentNode.removeChild(aP[r])}break}}}function j(aU,aQ,aR,aP,aS){al=true;var aT=document.getElementById("webclip-pop");if(!aT){x();aT=document.getElementById("webclip-pop");P(document.head)}aT.style.display="block";aT.parentNode.style.display="";aT.parentNode.style.height=q()+"px";var r=document.getElementById("webclip-pop-title");r.innerHTML=aU;var aV=document.getElementById("webclip-pop-body");if(aP){var i=U.popEntryMsgHTML;i=l(i,"popUpMsg",desknets.Resource.webclip.clipComplete);i=l(i,"clipFolderLabel",desknets.Resource.webclip.clipFolder);i=l(i,"clipFolder",aP);i=l(i,"clipFolderTitle",aS);aV.innerHTML=i}else{aV.innerHTML=aQ}aw=aR;k()}function M(){al=false;var i=document.getElementById("webclip-pop");i.style.display="none";i.parentNode.style.display="none";N();if(aw){az()}}function k(){var i=document.getElementById("webclip-block");if(i){i.style.display="block"}if(i){i.style.height=q()+"px"}}function N(){var i=document.getElementById("webclip-block");if(i){i.style.display="none"}}function W(aR){if(document.getElementsByClassName!=undefined){return(document.getElementsByClassName(aR))}else{var aQ,aP;var r=new Array();if(document.all){var aS=document.all}else{var aS=document.getElementsByTagName("*")}for(var aQ=0,aP=0;aQ<aS.length;aQ++){if(aS[aQ].className==aR){r[aP]=aS[aQ];aP++}}return r}}function t(){var i=null;if(window.navigator.appName=="Microsoft Internet Explorer"){if(document.documentMode){i=document.documentMode}else{i=5;if(document.compatMode){if(document.compatMode=="CSS1Compat"){i=7}}}}return i}function am(){var i=navigator.appVersion.toLowerCase();i=(i.indexOf("msie")>-1)?parseInt(i.replace(/.*msie[ ]/,"").match(/^[0-9]+/)):0;var r=navigator;return i}function V(){var aP=document.getElementsByTagName("meta");for(var r=0;r<aP.length;r++){if(aP[r].httpEquiv.match(/X-UA-Compatible/)){if(aP[r].content.match(/IE=/)){return true}break}}return false}function e(i){if(al==true){return}c({cmd:"logout"})}function B(r){var aP=W("webclip-header-input-btn-logout");for(var aQ=0;aQ<aP.length;aQ++){aP[aQ].style.display=r?"":"none"}}function A(r){var aQ=W("webclip-header-close");for(var aP=0;aP<aQ.length;aP++){aQ[aP].style.display=r?"":"none"}}var ag=document.getElementsByClassName("webclip-header")[0];if(ag!=undefined){az()}var aD=v();aG=aD.url;ai=aD.lang;aL=aD.cmd;folderName=aD.foldername;cgipath=aD.cgipath;af=window.location.href;aM=aD.mod;if(!aM){aM="exe"}I=aG;if(I.match(/\/$/)&&cgipath.match(/^\//)){I=I.replace(/\/$/,"")}ak=I+cgipath+ah.cabinetUrl;I=I+cgipath+ah.mainUrl;I=l(I,"modType",aM);ak=l(ak,"modType",aM);var G=true;var au=t();var ax=am();if(au){if(10>au){if(V()){j(desknets.Resource.webclip.titleWarning,desknets.Resource.webclip.errDocMode+"Internet Explorer "+au,true);G=false}}}if(G){if(!document.getElementsByClassName||!document.querySelectorAll||!window.postMessage){j(desknets.Resource.webclip.titleWarning,desknets.Resource.webclip.errBlowser,true);G=false}}if(G){if(window.addEventListener){window.addEventListener("message",function(aT){if(aT.data.cmd=="need login"){ao("login")}else{if(aT.data.cmd=="login ok"){N();ao("clip");window.scrollTo(0,0);Y=true}else{if(aT.data.cmd=="connect"){k();ao("connect",aT.data.percent)}else{if(aT.data.cmd=="end"){N();if(aL=="img"){g()}b("img");ao("end");var aP=ak;aP=l(aP,"folder",aT.data.folder);var aQ="";var aS="";if(typeof aT.data.foldername!="string"){var i=aT.data.foldername.length;var aR;for(aR=0;aR<i;aR++){if(aR>0){aQ=aQ+" &gt; "}if((aR+1)==i){aS=aQ+aj(aT.data.foldername[aR]);aQ=aQ+'<a href="'+aP+'" target="_blank">'+aj(aT.data.foldername[aR])+"</a>"}else{aQ=aQ+aj(aT.data.foldername[aR])}}}else{aS=aj(aT.data.foldername);aQ='<a href="'+aP+'" target="_blank">'+aj(aT.data.foldername)+"</a>"}j(desknets.Resource.webclip.titleComplete,desknets.Resource.webclip.clipComplete+"<br>"+desknets.Resource.webclip.clipFolder+aQ,true,aQ,aS)}else{if(aT.data.cmd=="err end"){N();ao("clip");B(true);A(true);if(aI==true){az()}}else{if(aT.data.cmd=="cancel end"){N();ao("clip");s(desknets.Resource.webclip.clipCancel);B(true);A(true);if(aI==true){az()}}else{if(aT.data.cmd=="cancelBtnClick"){N();ac()}else{if(aT.data.cmd=="msg"){s(aT.data.msg)}else{if(aT.data.cmd=="err msg"){j(desknets.Resource.webclip.titleWarning,aT.data.msg)}else{if(aT.data.cmd=="event block"){var r=document.getElementById("webclip-block");r.style.display="block";r.style.height=q()+"px"}else{if(aT.data.cmd=="disable event block"){var r=document.getElementById("webclip-block");r.style.display="none"}}}}}}}}}}}},false);if(aD.cmd=="html"){window.addEventListener("mouseup",D,false);window.addEventListener("click",h,false)}else{window.removeEventListener("mouseup",D,false);window.removeEventListener("click",h,false)}}else{window.attachEvent("onmessage",function(r){var i=document.getElementById("webclip-header-iframe");i.style.display="none"})}if(window.getSelection){var ap=window.getSelection().toString();var O=window.getSelection();if(O.rangeCount>0){var J=O.getRangeAt(0);var ab=document.createElement("div");ab.appendChild(J.cloneContents());var aJ=ab.innerHTML;ab.removeNode}}else{var ap=document.selection.createRange().text;var aA=document.selection.createRange().htmlText}var aH=document.documentElement.cloneNode(true);C(aG,cgipath,ai);if(aD.cmd=="img"){E=0;b("img")}else{b("html")}var aK=document.getElementById("cliping-button");aK.onclick=ad;var a=document.getElementById("cliping-button-next");a.onclick=ad;var at=W("webclip-header-close");for(var S=0;S<at.length;S++){at[S].onclick=ac}var av=document.getElementById("dneo-clip-cancel-button");av.onclick=aa;var aC=W("webclip-header-input-btn-logout");for(var S=0;S<aC.length;S++){aC[S].onclick=e}if(aD.cmd=="img"){document.body.appendChild(Z());if(ae==0){j(desknets.Resource.webclip.titleWarning,desknets.Resource.webclip.msgImgNoting,true)}}P(document.head);Q(aH);aF(aH);L(aH);K(aH);H(aH);m(aH);var ar=document;o=aH.outerHTML}})();