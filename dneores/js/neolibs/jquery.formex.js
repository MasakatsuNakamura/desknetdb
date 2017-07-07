/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){a.fn.formToArrayEx=function(k){var g={};if(this.length==0){return g}var h=this[0];var m=k?h.getElementsByTagName("*"):h.elements;if(!m){return g}for(var l=0,e=m.length;l<e;l++){var b=m[l];var f=b.name;if(!f){continue}var j=a.fieldValue(b,true);if(j&&j.constructor==Array){var c=[];for(var i=0,d=j.length;i<d;i++){c.push(j[i])}g[f]=c}else{if(j!==null&&typeof j!="undefined"){if(g[f]){var c=g[f];if(!a.isArray(c)){c=[];c.push(g[f])}c.push(j);g[f]=c}else{g[f]=j}}}}return g}})(jQuery);