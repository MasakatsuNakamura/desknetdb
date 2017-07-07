/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(c){c.plugins={isSupported:function(e,d){if(!c.isArray(c.plugins[e])){return false}var h=c.plugins[e];var g=c.plugins.getVersionNumbers(d);for(var f=0;f<4;f++){if(h[f]<g[f]){return false}else{if(h[f]>g[f]){return true}}}return true},getVersionNumbers:function(d){var g=(typeof(d)=="undefined"||d===null||c.isArray(d))?d:d.toString().match(/\d+/g);if(!c.isArray(g)){return[0,0,0,0]}var e=[];for(var f=0;f<4;f++){e.push(g.length<=f?0:Number(g[f]))}return e}};function b(h,g){var d=null;try{var d=new ActiveXObject(h)}catch(f){}if(!d){return null}return g(d)}function a(f,g){var d=navigator.mimeTypes[f];if(!d||!d.enabledPlugin){return null}var e=d.enabledPlugin;return g(e.name,e.description)}c.plugins.flash=(function(){if(typeof(ActiveXObject)!="undefined"){return b("ShockwaveFlash.ShockwaveFlash",function(d){return c.plugins.getVersionNumbers(d.GetVariable("$version"))})}else{return a("application/x-shockwave-flash",function(d,e){return c.plugins.getVersionNumbers(e)})}})()})(jQuery);if($.browser.msie&&!!document.attachEvent){neouploader={};neouploader.setDocumentTitle=function(a){neouploader.documentTitle=a};neouploader.setAttachObj=function(a){neouploader.attachObj=a}}(function(d){if(d.browser.msie&&!!document.attachEvent){neouploader.documentTitle=document.title;document.attachEvent("onpropertychange",function(f){if(!f||f.propertyName!="title"){return}setTimeout(function(){if(document.title!=neouploader.documentTitle){document.title=neouploader.documentTitle}},1)})}var a={url:location.href,addParams:{},deleteParams:{},deleteIDParamName:"id",downloadTarget:"_self",fileFilter:null,files:[],cancelText:"Cancel",uploadText:"Upload",processingText:"Wait...",deleteText:"",deleteAllText:"(Remove All Attached Files)",noFilesText:"",confirmDelete:false,confirmDeleteMessage:"Are you sure to delete this file?",confirmDeleteAllMessage:"Are you sure to delete all files?"};d.dnUploader={index:0,encodeFileName:function(f){return f.replace(/[\x00-\x1f\x3B\x7F]/mg,"_")},enableAll:function(){d(".co-ie-uploader").each(function(){d(this).dnUploader("enable")})},disableAll:function(){d(".co-ie-uploader").each(function(){d(this).dnUploader("disable")})},_addPlugIn:function(g){if(d.dnUploader.index==0){for(var f in c){window["uploader_"+f]=c[f]}}g.attr("id","co-ie-uploader-"+d.dnUploader.index);d.dnUploader.index++},_getFlashObject:function(f){return d("#"+f+"-swf").get(0)}};var b={init:function(f){this.addClass("co-ie-uploader");this.data("options",f);d.dnUploader._addPlugIn(this);e.attachEvents(this,f);e.initFlashElement(this,f);e.initProgressElement(this,f);e.initListElement(this,f);e.initNoFilesElement(this,f)},files:function(f){e.updateFiles(this,f);e.updateFileListElement(this)},progress:function(g,f,m){var n=this.data("options");var h=this.find(".co-ie-uploader-progress");var i=h.find(".co-ie-uploader-cancel");var l=h.data("file-count");var k=e.getUploadedFileCount(h,m);var j=(f>=100)?n.processingText:f+"%";h.find(".co-ie-uploader-percentage").text(j);h.find(".co-ie-uploader-barframe>.co-ie-uploader-bar").css("width",f+"%");h.find(".co-ie-uploader-filenumber").text("["+k+"/"+l+"]");h.find(".co-ie-uploader-label").text(g);if(f>=100){i.attr("disabled",true)}else{if(f<=0){i.attr("disabled",false)}}},enable:function(){var f=d.dnUploader._getFlashObject(this.attr("id"));this.removeClass("co-ie-uploader-disabled");if(f.setEnabled!=undefined){f.setEnabled()}return this},disable:function(){var f=d.dnUploader._getFlashObject(this.attr("id"));this.addClass("co-ie-uploader-disabled");if(f.setDisabled!=undefined){f.setDisabled()}return this},destroy:function(){var f=this;d.each(e.funcNames,function(g,h){f.unbind(h+"_dnUploader")});this.empty()},deleteFile:function(f,i,g){var h=d.dnUploader._getFlashObject(f.attr("id"));e.deleteItemFromFiles(f,i);e.updateOnListChanged(f);h.deleteFile(i,g)},select:function(f){var g=d.dnUploader._getFlashObject(f.attr("id"));g.fileSelect()}};var e={funcNames:["nameDuplicated","error","start","stop"],attachEvents:function(f,g){if(!!g){d.each(e.funcNames,function(h,i){if(!!g[i]&&d.isFunction(g[i])){f.bind(i+"_dnUploader",g[i])}})}},initFlashElement:function(f,i){var g=f.attr("id");var l=g+"-swf";var j=d("<div />").addClass("co-ie-uploader-button").appendTo(f);if(d("#"+l).length<=0){var h=i.objectURL;var k=d.browser.msie?"classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'":"";var m={localeChain:i.localeChain,buttonLabel:i.uploadText,maxFileSize:i.maxFileSize,maxTotalSize:i.maxTotalSize,context:g};j.html("<object id='"+l+"' data='"+h+"' class='co-ie-uploader-swf' "+k+" type='application/x-shockwave-flash'><param name='allowScriptAccess' value='always'><param name='movie' value='"+h+"'><param name='flashvars' value='"+d.param(m)+"'></object>");f.addClass("co-ie-uploader-disabled")}},initProgressElement:function(f,g){var h=d.dnUploader._getFlashObject(f.attr("id"));var i=d("<div class='co-ie-uploader-progress' />").appendTo(f).html("<input type='button' class='co-ie-uploader-cancel'><div class='co-ie-uploader-barframe'><div class='co-ie-uploader-percentage'></div><div class='co-ie-uploader-bar'></div></div><div class='co-ie-uploader-filenumber'></div><div class='co-ie-uploader-label'></div>");i.children(".co-ie-uploader-cancel").attr("value",g.cancelText).click(function(j){h.cancelUpload();j.preventDefault()})},initListElement:function(f,g){d("<ul class='co-ie-removable-list' />").appendTo(f);var h=g.files;if(g.storeInput!=null){var i=d.serializeObject.unserialize(d(g.storeInput).val());if(d.isArray(i)){h=i}}f.dnUploader("files",h)},initAllFilesElement:function(f,g){var h=d("<div class='co-ie-all-files' />").appendTo(f);var i=d("<a href='javascript:void(0);' class='co-ie-delete-button' />").appendTo(h);i.text(g.deleteAllText);i.click(function(j){if(!f.hasClass("co-ie-uploader-disabled")){e.beginToDeleteAllFiles(f)}})},initNoFilesElement:function(f,g){},updateFileListElement:function(f){var h=f.data("files");var g=f.find(".co-ie-removable-list").empty();e.updateOnListChanged(f)},createFileItemElement:function(f,h){var g=d("<li />").data("id",h.id).html("<div class='dn-uploader-file' />");return g},createDeleteButtonElement:function(f,h){var g=f.data("options");return d("<a href='#' class='dn-delete-button'><span class='dn-label'>x</span></a>").attr("title",g.deleteText)},createFilenameElement:function(f,k){var i=f.data("options");var h=i.downloadURL;var j=d("<span class='co-ie-filename' />");var g=j;if(!!h){var l=encodeURIComponent(d.dnUploader.encodeFileName(k.name));h=h.replace(/\$id\$/g,k.id);h=h.replace(/\$name\$/g,l);g=d("<a />").attr("href",h).attr("target",i.downloadTarget).appendTo(j)}g.text(k.name);return j},createFilesizeElement:function(f,g){sizeText=Math.ceil(g.size/1024).toString();sizeText=sizeText.replace(/(\d)(\d{3})$/,"$1,$2");sizeText=sizeText.replace(/(\d)(\d{3}),/,"$1,$2,");return d("<span class='dn-filesize' />").text(sizeText+"KB")},getUploadedFileCount:function(h,f){var g=Number(h.data("uploaded-count"));g=isNaN(g)?0:g;if(f){g++;h.data("uploaded-count",g)}return g},beginToDeleteAllFiles:function(f){var g=f.data("options");e.confirmAndDeleteFile(g,g.confirmDeleteAllMessage,function(){e.sendDeleteAllRequest(f,g)})},beginToDeleteFile:function(h){var f=h.closest(".dn-uploader");var g=f.data("options");e.confirmAndDeleteFile(g,g.confirmDeleteMessage,function(){e.sendDeleteRequest(f,h,g)})},confirmAndDeleteFile:function(f,g,h){if(!!f.confirmDelete){desknets.confirm(g,function(){h()})}else{h()}},sendDeleteAllRequest:function(f,g){var h=e.getDeleteParameters(null,g);v8ent.sendCommand(g.url,h,{success:function(j,i,k){e.deleteAllFiles(f)}})},sendDeleteRequest:function(f,h,g){var i=e.getDeleteParameters(h,g);v8ent.sendCommand(g.url,i,{success:function(k,j,l){e.deleteFile(f,h)}})},getDeleteParameters:function(g,f){var h={};if(!!g&&g.length>0){h[f.deleteIDParamName]=g.data("id")}d.extend(h,f.deleteParams);return h},deleteAllFiles:function(f){var h=d.dnUploader._getFlashObject(f.attr("id"));var g=f.data("files");e.updateFiles(f,[]);f.find(".dn-removable-list").empty();e.updateOnListChanged(f);d.each(g,function(i,j){h.deleteFile(j.id,j.name)})},deleteFile:function(f,h){var i=d.dnUploader._getFlashObject(f.attr("id"));var j=h.data("id");var g=h.find(".dn-filename").text();e.deleteItemFromFiles(f,j);h.remove();e.updateOnListChanged(f);i.deleteFile(j,g)},deleteItemFromFiles:function(f,j){var h=f.data("files");for(var g=h.length-1;g>=0;g--){if(h[g]["id"]==j){h.splice(g,1);break}}e.updateFiles(f,h)},updateFiles:function(f,h){var g=f.data("options");f.data("files",h);if(!!g.storeInput){d(g.storeInput).val(d.serializeObject.serialize(h))}},updateOnListChanged:function(f){if(f.find(".co-ie-removable-list li").length>0){f.removeClass("co-ie-uploader-no-files")}else{f.addClass("co-ie-uploader-no-files")}}};var c={getAttachs:function(f){return d("#"+f).removeClass("co-ie-uploader-disabled").data("files")},getURL:function(g){var f=d("#"+g).data("options");return f.url},getParams:function(g){var f=d("#"+g).data("options");return f.addParams},getFileFilter:function(g){var f=d("#"+g).data("options");return f.fileFilter},duplicateFileName:function(f,i,g){var h=d.dnUploader._getFlashObject(g);d("#"+g).trigger("nameDuplicated_dnUploader",{id:i,name:f,resolveCurrentFile:function(j){h.resolveCurrentFile(j)}})},beginAll:function(h,g){var f=d("#"+g);f.addClass("co-ie-uploader-uploading").find(".co-ie-uploader-progress").data("file-count",h.length).data("uploaded-count",0);d.dnUploader.disableAll();f.trigger("start_dnUploader")},beginFile:function(f,h,g){d("#"+g).dnUploader("progress",f,0,true)},progressFile:function(g,i,f,h){d("#"+h).dnUploader("progress",g,Math.round(f*100),false)},completeFile:function(f,h,i,g){d("#"+g).dnUploader("progress",f,100,false)},completeAll:function(f,i,h){var g=d("#"+h);g.removeClass("co-ie-uploader-uploading").dnUploader("files",i);d.each(f,function(j,k){if(!!neouploader.attachObj){neouploader.attachObj.flashAddFile({fno:k.id,name:k.name,size:k.size})}else{desknets.attach.flashAddFile({fno:k.id,name:k.name,size:k.size})}});d.dnUploader.enableAll();g.trigger("stop_dnUploader")},error:function(g,f){d("#"+f).trigger("error_dnUploader",{message:g})}};d.fn.dnUploader=function(i){var j=typeof(i)=="string";if(j){var g=Array.prototype.slice.call(arguments,1);return b[i].apply(this,g)}var f=(typeof(i)=="object")?i:{};var h=d.extend({},a,f);return b.init.apply(this,[h])}})(jQuery);