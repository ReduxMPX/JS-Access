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
   
    var appendPeriodToElement = document.getElementById('office-editing-file-extension');
    var periodLabel = document.createElement("div");
    periodLabel.id = "periodAIO";
    periodLabel.style = "position: relative;display: -moz-inline-box;display: inline-block;border: 1px solid #4285f4;border-radius: 100px;padding-inline: 10px;font-size: 15px;bottom: 2px; margin-left: 5px";
    document.body.appendChild(periodLabel);
    appendTimeToElement.parentNode.insertBefore(periodLabel, appendTimeToElement);

    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var day = currentTime.getDay();

        if(day == "1" || "2" || "3" || "4") {
            var P1_START = 7 * 60 + 30 // Period Start Time
            var P1_END = 8 * 60 + 32 // Period End Time
            
            var P2_START = 8 * 60 + 35 // Period Start Time
            var P2_END = 9 * 60 + 37 // Period End Time
            
            var P3_START = 9 * 60 + 55 // Period Start Time
            var P3_END = 10 * 60 + 57 // Period End Time
            
            var P4_START = 11 * 60 + 0 // Period Start Time
            var P4_END = 12 * 60 + 2 // Period End Time
            
            var P5_START = 7 * 60 + 30 // Period Start Time
            var P5_END = 8 * 60 + 32 // Period End Time
            
            var P6_START = 7 * 60 + 30 // Period Start Time
            var P6_END = 8 * 60 + 32 // Period End Time
            
            var now = new Date();
            var currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes since Midnight

            if(currentTime > P1_START && currentTime < P1_END){
                console.log("In period 1")
            }
        }

        var clockDiv = document.getElementById('timeAIO');
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds;

        var periodDiv = document.getElementById('periodAIO');
        periodDiv.innerText = "TEMPORARY";
    }

    setInterval(updateTime, 1000);

})();


