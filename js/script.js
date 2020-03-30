window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tabClass = 'info-header-tab',
        info = document.querySelector('.info-header'), // tabWrapper
        tab = document.querySelectorAll('.' + tabClass), // tabHeader
        content = document.querySelectorAll('.info-tabcontent'); // tabContents

    // Tabs

    function getTabs(tabWrapper, tabHeader, tabContent) {
        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++ ) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        tabWrapper.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains(tabClass)) {
                for (let i = 0; i < tabHeader.length; i++) {
                    if (target == tabHeader[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }

    getTabs(info, tab, content);

    // Timer

    let deadline = '2020-03-30';

    function getTimeRemaining(endtime) {
        let t  = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                if(num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            // if(('' + t.seconds).length == 1) {
            //     t.seconds = '0' + t.seconds;
            // }
            // if(('' + t.minites).length == 1) {
            //     t.minutes = '0' + t.minutes;
            // }
            // if(('' + t.hours).length == 1) {
            //     t.hours = '0' + t.hours;
            // }
            
            // hours.textContent = t.hours;
            // minutes.textContent = t.minutes;
            // seconds.textContent = t.seconds;

            if(t.total <=0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);




});