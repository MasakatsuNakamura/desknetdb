/*
 * desknet's NEO
 * https://www.desknets.com/
 * Copyright (C)2012-2016 NEOJAPAN Inc. All Rights Reserved.
 * 本製品は日本国著作権法および国際条約により保護されています。 
 * 本製品の全部または一部を無断で複製したり、無断で複製物を頒 
 * 布すると著作権の侵害となりますのでご注意ください。 
 */
(function(a){app._initialActions=[];app.initAll=function(){a.each(app._initialActions,function(b,c){c()});app._initialActions=[]};app.addInitialAction=function(b){app._initialActions.push(b)};a(function(){app.initAll()})})(jQuery);