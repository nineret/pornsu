// ==UserScript==
// @name         Pornsu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  OwO
// @author       nineret
// @match        https://www.youtube.com/watch?v=
// @match *://*.youtube.com/*
// @match *://*.youtu.be/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==


var xd = {
    'mediaurl': '',
    'titlename': '',
    'description': '',
}

(function() {
    'use strict';
    xd.mediaurl = document.getElementsByClassName('video-stream html5-main-video');
    wait(1000);
    document.body.innerHTML = '';
    wait(1000);
    var div = document.createElement('div');
    div.textContent = "Hello, World";
    document.body.appendChild(div);
})();
