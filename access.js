// ==UserScript==
// @name         AIO+ V2 | Advanced Docs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://docs.google.com/document/d/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function () {
        var creditText = document.getElementById('kix-smart-summary-view-header');
        creditText.innerText = "Docs+ by Alek";


    })

    var appendTimeToElement = document.getElementById('office-editing-file-extension');
    var timeLabel = document.createElement("div");
    timeLabel.id = "timeAIO";
    timeLabel.style = "position: relative;display: -moz-inline-box;display: inline-block;border: 1px solid #4285f4;border-radius: 100px;padding-inline: 10px;font-size: 15px;bottom: 2px;";
    document.body.appendChild(timeLabel);
    appendTimeToElement.parentNode.insertBefore(timeLabel, appendTimeToElement);

    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        var clockDiv = document.getElementById('timeAIO');
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
    }

    setInterval(updateTime, 1000);

})();



