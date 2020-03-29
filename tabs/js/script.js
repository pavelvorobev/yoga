window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tabClass = 'info-header-tab',
        info = document.querySelector('.info-header'), // tabWrapper
        tab = document.querySelectorAll('.' + tabClass), // tabHeader
        content = document.querySelectorAll('.info-tabcontent'); // tabContents

    // Tabs

    function getTabs(tabWrapper, tabHeader, tabContent) {

        // Скрытие контента неактивных табов
        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++ ) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        // Показ контента активного таба
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        // Событие клика на таб, показывается тот контент, который соответствует порядковому номеру активного таба
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





});