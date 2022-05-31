// ==UserScript==
// @name         AIO+ V2 | Advanced Docs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://docs.google.com/presentation/d/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function () {
        var creditText = document.getElementById('kix-smart-summary-view-header');
        creditText.innerText = "Docs+ by Alek";
    })

    var dismissTime = "NO CLASS";
    var weatherState = "UNFETCHED"



    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css');
    document.head.appendChild(link);



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

    var appendWeatherToElement = document.getElementById('office-editing-file-extension');
    var weatherLabel = document.createElement("div");
    weatherLabel.id = "weatherAIO";
    weatherLabel.style = "position: relative;display: -moz-inline-box;display: inline-block;border: 1px solid #4285f4;border-radius: 100px;padding-inline: 10px;font-size: 15px;bottom: 2px; margin-left: 5px;padding-top: 1px;padding-bottom: 1px;";
    appendTimeToElement.parentNode.insertBefore(weatherLabel, appendWeatherToElement);

    var creditText = document.getElementById('weatherAIO');
    var iconLocation = document.createElement('i')
    // iconLocation.className = "bi bi-cursor-fill"
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=34.038563917642705&lon=-118.46091735089752&appid=356c0e149219f8d18d30e05f4e1a130f', function(response){
        weatherState = response.weather[0].main
        console.log("[RDX] CURRENT WEATHER: "+ weatherState)

        if(weatherState == "Clear") {
            iconLocation.className = "bi bi-sun"
        }
        else if(weatherState == "Clouds") {
            iconLocation.className = "bi bi-cloud"
        }
        else if(weatherState == "Rain") {
            iconLocation.className = "bi bi-cloud-drizzle"
        }
        else if(weatherState == "Haze") {
            iconLocation.className = "bi bi-cloud-haze2"
        }
    });

    creditText.appendChild(iconLocation)


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

            var P5_START = 12 * 60 + 32 // Period Start Time
            var P5_END = 13 * 60 + 37 // Period End Time

            var P6_START = 13 * 60 + 40 // Period Start Time
            var P6_END = 14 * 60 + 42 // Period End Time

            var now = new Date();
            var currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes since Midnight

            if(currentTime > P1_START && currentTime < P1_END){
                console.log("In period 1")
                dismissTime = "8:32"
            }
            if(currentTime > P2_START && currentTime < P2_END){
                console.log("In period 2")
                dismissTime = "9:37"
            }
            if(currentTime > P3_START && currentTime < P3_END){
                console.log("In period 3")
                dismissTime = "10:57"
            }
            if(currentTime > P4_START && currentTime < P4_END){
                console.log("In period 4")
                dismissTime = "12:02"
            }
            if(currentTime > P5_START && currentTime < P5_END){
                console.log("In period 5")
                dismissTime = "1:37"
            }
            if(currentTime > P6_START && currentTime < P6_END){
                console.log("In period 6")
                dismissTime = "2:42"
            }
        }

        if(day == "5") {
            var P1_START = 7 * 60 + 30 // Period Start Time
            var P1_END = 8 * 60 + 27 // Period End Time

            var P2_START = 8 * 60 + 30 // Period Start Time
            var P2_END = 9 * 60 + 27 // Period End Time

            var ADV_START = 9 * 60 + 45 // Period Start Time
            var ADV_END = 10 * 60 + 11 // Period End Time

            var P3_START = 10 * 60 + 15 // Period Start Time
            var P3_END = 11 * 60 + 12 // Period End Time

            var P4_START = 11 * 60 + 15 // Period Start Time
            var P4_END = 12 * 60 + 12 // Period End Time

            var P5_START = 12 * 60 + 41 // Period Start Time
            var P5_END = 13 * 60 + 40 // Period End Time

            var P6_START = 13 * 60 + 43 // Period Start Time
            var P6_END = 14 * 60 + 42 // Period End Time

            var now = new Date();
            var currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes since Midnight

            if(currentTime > P1_START && currentTime < P1_END){
                console.log("In period 1")
                dismissTime = "8:27"
            }
            if(currentTime > P2_START && currentTime < P2_END){
                console.log("In period 2")
                dismissTime = "9:27"
            }
            if(currentTime > ADV_START && currentTime < ADV_END){
                console.log("In Advisory")
                dismissTime = "ADVISORY"
            }
            if(currentTime > P3_START && currentTime < P3_END){
                console.log("In period 3")
                dismissTime = "11:12"
            }
            if(currentTime > P4_START && currentTime < P4_END){
                console.log("In period 4")
                dismissTime = "12:12"
            }
            if(currentTime > P5_START && currentTime < P5_END){
                console.log("In period 5")
                dismissTime = "1:40"
            }
            if(currentTime > P6_START && currentTime < P6_END){
                console.log("In period 6")
                dismissTime = "2:42"
            }
        }

        var clockDiv = document.getElementById('timeAIO');
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds;

        var periodDiv = document.getElementById('periodAIO');
        periodDiv.innerText = dismissTime;
    }

    setInterval(updateTime, 1000);

})();
