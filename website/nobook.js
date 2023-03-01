// ==UserScript==
// @name         NOOBOOK
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to change nobook!
// @author       Sifer
// @match        https://*.nobook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var v=fetch;
    window.fetch=function(a,b){
        console.log(arguments);
        if(a=="libs/chem/allEquipmentMessage.json?subjectId=2"){return v("https://sife.ml/study/nobook-che.json")}
        if(a=="assets/get_scene_tool.json?subjectId=1"){return v("https://sife.ml/study/nobook-phy.json")}
        return v.apply(null,Object.values(arguments));
    }
})();