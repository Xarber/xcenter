//BEGINNING OF MULTIPLE SCRIPT -- PAGE FIXES STARTED
var lastSwitchedPage;
var precedentSwitchedPage;
var initialPage;
setTimeout(() => {
    if (document.getElementById('new-XCenterGoBackToNewVersion') != null) {document.getElementById('new-XCenterGoBackToNewVersion').setAttribute('style', 'display: none !important;visibility: hidden !important;');}
    if (document.querySelector('.navbuttonextend') != null) document.querySelector('.navbuttonextend').classList.remove('navbuttonextend');
    initialPage = CommonJS.params('get', 'page', 'index');
    if (document.getElementById('xcenter-pagecontent-' + initialPage) == null) initialPage = 'index';
    switchPage(initialPage);
    CommonJS.params('del', 'page')
}, 300)
function switchPage(page) {
    if (page == null || page.length < 1 || (document.getElementById('xcenter-pagecontent-' + page) == null && page != 'lastSwitchedPage')) return false;
    if (page == 'lastSwitchedPage') page = precedentSwitchedPage;
    precedentSwitchedPage = lastSwitchedPage;
    lastSwitchedPage = page;
    const pages = document.querySelectorAll('.xcenter-pagecontent');
    for (const pag of pages) {
        pag.classList.add('hided');
    }
    document.getElementById('xcenter-pagecontent-' + page).classList.remove('hided');
    var inside;
    inside = document.getElementById('xcenter-pagecontent-' + page).getElementsByClassName("center")[0];
    if (inside == null) inside = document.getElementById('xcenter-pagecontent-' + page).getElementsByClassName("fullscreen")[0];
    if (inside != null && page != 'settings') {
        document.querySelector('footer').classList.add('hided');
        document.getElementById('xcenter-navbar').classList.add('hided');
        document.querySelector('.nav-compenser').classList.add('hided');
    } else {
        document.querySelector('footer').classList.remove('hided');
        document.getElementById('xcenter-navbar').classList.remove('hided');
        document.querySelector('.nav-compenser').classList.remove('hided');
    }
    document.getElementById('navbar-other').classList.remove('navbuttonextend');
    if (document.querySelector('.navbuttonextend') != null) {document.querySelector('.navbuttonextend').classList.remove('navbuttonextend')}
    if (page == 'index') page = '';
    if (document.getElementById('/' + page + '/') != null) {
        document.getElementById('/' + page + '/').classList.add('navbuttonextend');
    } else if (page.length < 1) {
        document.getElementById('/').classList.add('navbuttonextend');
    } else {
        var pagelink = page;
        pagelink = pagelink[0].toUpperCase() + pagelink.substring(1)
        document.getElementById('navbar-other').innerHTML = '<img src="data:image/png;base64,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">' + pagelink + '';
        document.getElementById('navbar-other').classList.add('navbuttonextend');
    }
}
function currentPage() {
    const pages = document.querySelectorAll('.xcenter-pagecontent');
    for (const page of pages) {
        if (page.classList.contains('hided') != true) return page.id;
    }
}
//PAGE FIXES ENDED -- COMMON.JS SCRIPT STARTED
//CommonJS Tools @ Copyright 2022 - Xarber. Do NOT Redistribuite.
var CommonJS = {
    TabSwitch: function() {
        //Gets if the page is currently shown or not. the example here is to always run the code.
        /*document.addEventListener("visibilitychange", function() {
            if (document.hidden){
                return true;
            } else {
                return false;
            }
        });*/
        if (document.hidden){
            return true;
        } else {
            return false;
        }
    },
    link: function(file, type, afterload) {
        //Links a css/js file to the page.
        console.log('Linking ' + type + ' file...');
        if (type == null || type.length < 1) {if (file.indexOf('.css') != -1) {type = 'css'} else if (file.indexOf('.js') != -1) {type = 'js'}};
        if (type == "js") {
            var th = document.getElementsByTagName('head')[0];
            var s = document.createElement('script');
            s.src = file;
            
            th.appendChild(s);
            if (afterload != null && typeof afterload === "function") {
                s.onload = function() {
                    afterload()
                }
            }
        } else if (type == 'css') {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = file;
            head.appendChild(link);
        }
    },
    classExists: function(searchClassName) {
        for (let i = 0; i < document.styleSheets.length; i++) {
            let styleSheet = document.styleSheets[i];
            try {
                for (let j = 0; j < styleSheet.cssRules.length; j++) {
                    let rule = styleSheet.cssRules[j];
                    // console.log(rule.selectorText)
                    if (rule.selectorText && rule.selectorText.includes(searchClassName)) {
                        return true;
                    }
                }
                if (styleSheet.imports) {
                    for (let k = 0; k < styleSheet.imports.length; k++) {
                    let imp = styleSheet.imports[k];
                    for (let l = 0; l < imp.cssRules.length; l++) {
                        let rule = imp.cssRules[l];
                        if (
                        rule.selectorText &&
                        rule.selectorText.includes(searchClassName)
                        ) {
                            return true;
                        }
                    }
                    }
                }
            } catch (err) {}
        }
        return false;
    },
    playAudio: function(url) {
        var audio = new Audio(url);
        audio.play();
    },
    notification: function(action, title, desc, nosound, uploadnotification, style, onlyrecover) {
        if (onlyrecover == true) {
            if (document.getElementById('new-notification') == null) {
                console.log(
                    '%cNotification Component Missing: Notification Box, adding...',
                    'background-color: red;padding: 10px;border-radius: 15px;'
                )
                var notificationadd = document.createElement('div');
                var notificationaddclose = document.createElement('button');
                var notificationaddtitle = document.createElement('h3');
                var notificationadddesc = document.createElement('p');
                notificationadd.setAttribute('class', 'new-notification hided');
                notificationadd.setAttribute('id', 'new-notification');
                notificationaddclose.setAttribute('onclick', 'this.parentNode.setAttribute("onclick", "");this.parentNode.classList.add("hided");')
                notificationaddtitle.setAttribute('id', 'new-notification-title');
                notificationadddesc.setAttribute('id', 'new-notification-cnt');
                notificationaddclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
                notificationaddtitle.innerHTML = 'Notification';
                notificationadddesc.innerHTML = 'No Desc Provided';
                notificationadd.appendChild(notificationaddclose);
                notificationadd.appendChild(notificationaddtitle);
                notificationadd.appendChild(notificationadddesc);
                document.body.appendChild(notificationadd);
            }
            if (document.getElementById('new-notification-hided') == null) {
                console.log(
                    '%cNotification Component Missing: Multiple Notification Box, adding...',
                    'background-color: red;padding: 10px;border-radius: 15px;'
                )
                var notificationhided = document.createElement('div');
                var notificationhidedclose = document.createElement('button');
                var notificationhideddesc = document.createElement('p');
                var notificationhidedp = document.createElement('p');
                notificationhided.setAttribute('class', 'new-notification hided');
                notificationhided.setAttribute('onclick', "document.getElementById('new-notification-hided').classList.add('hided');document.getElementById('new-notification').classList.add('hided');document.getElementById('new-notifications-bkg').classList.remove('hided');");
                notificationhided.setAttribute('style', 'top: 120px !important;height: 50px !important;');
                notificationhided.setAttribute('id', 'new-notification-hided');
                notificationhidedclose.setAttribute('onclick', "this.parentNode.setAttribute('onclick', '');this.parentNode.classList.add('hided');var timeout = setTimeout(() => {this.parentNode.setAttribute('onclick', document.getElementById('new-notification-hided-onclick').innerHTML)}, 1000);")
                notificationhidedclose.setAttribute('style', 'margin-top: 0 !important;')
                notificationhidedp.setAttribute('class', 'hided');
                notificationhidedp.setAttribute('id', 'new-notification-hided-onclick');
                notificationhidedclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
                notificationhideddesc.innerHTML = 'Multiple notifications. Open the notification menu to read.';
                notificationhidedp.innerHTML = "document.getElementById('new-notification-hided').classList.add('hided');document.getElementById('new-notification').classList.add('hided');document.getElementById('new-notifications-bkg').classList.remove('hided');";
                notificationhided.appendChild(notificationhidedclose);
                notificationhided.appendChild(notificationhideddesc);
                notificationhided.appendChild(notificationhidedp);
                document.body.appendChild(notificationhided);
            } 
            if (document.getElementById('new-notifications-bkg') == null) {
                console.log(
                    '%cNotification Component Missing: Notification Menu, adding...',
                    'background-color: red;padding: 10px;border-radius: 15px;'
                )
                var notificationsbkg = document.createElement('div');
                var notifications = document.createElement('div');
                var notificationsclose = document.createElement('button');
                var notificationstitle = document.createElement('h1');
                var notificationshr = document.createElement('hr');
                var notificationadduploadinput = document.createElement('input');
                var notificationadduploadlabel = document.createElement('label');
                notificationsbkg.setAttribute('class', 'new-notifications hided');
                notificationsbkg.setAttribute('id', 'new-notifications-bkg');
                notifications.setAttribute('class', 'vertical-scroll');
                notifications.setAttribute('id', 'new-notifications');
                notificationsclose.setAttribute('onclick', "this.parentNode.parentNode.classList.add('hided');");
                notificationadduploadinput.setAttribute('type', 'file');
                notificationadduploadinput.setAttribute('id', 'new-notifications-upload');
                notificationadduploadinput.setAttribute('class', 'hided');
                notificationadduploadinput.setAttribute('accept', '.xnp');
                notificationadduploadlabel.setAttribute('for', 'new-notifications-upload');
                notificationadduploadlabel.setAttribute('class', 'hided')
                notificationadduploadlabel.setAttribute('id', 'new-notifications-upload-label');
                notificationadduploadlabel.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>';
                notificationsclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
                notificationstitle.innerHTML = 'Notifications';
                notificationsbkg.appendChild(notifications);
                notifications.appendChild(notificationsclose);
                notifications.appendChild(notificationadduploadlabel);
                notifications.appendChild(notificationadduploadinput);
                notifications.appendChild(notificationstitle);
                notifications.appendChild(notificationshr);
                document.body.appendChild(notificationsbkg);
                if (document.getElementById('new-notifications-upload') != null && uploadnotification) {
                    let NotificationInput = document.getElementById("new-notifications-upload");
                    NotificationInput.addEventListener("change", () => {
                        let files = NotificationInput.files;
                        if(files.length == 0) return;
                        const file = files[0];
                        let reader = new FileReader();
                        reader.onload = (e) => {
                            const file = e.target.result;
                            const lines = file.split(/\r\n|\n/);
                            var tempElement = document.createElement('div');
                            tempElement.innerHTML = lines.join("\n");
                            var NotificationTitle = tempElement.querySelector('title').innerText || tempElement.querySelector('title').textContent;
                            var NotificationDesc = tempElement.querySelector('desc').innerText || tempElement.querySelector('desc').textContent;
                            var NotificationScript = tempElement.querySelector('script').innerText || tempElement.querySelector('script').textContent;
                            var NotificationStyle = tempElement.querySelector('css').innerText || tempElement.querySelector('css').textContent;
                            NotificationTitle.replaceAll('\n', '');
                            NotificationDesc.replaceAll('\n', '');
                            NotificationStyle.replaceAll('\n', '');
                            NotificationScript.replaceAll('\n', ';');
                            CommonJS.notification(NotificationScript, NotificationTitle, NotificationDesc, nosound, uploadnotification, NotificationStyle)
                        };
                        reader.onerror = (e) => alert(e.target.error.name);
                        reader.readAsText(file);
                    });
                }
            }
            if (uploadnotification && document.getElementById('new-notifications-upload-label').classList.contains('hided')) {
                console.log(
                    '%cNotification Component Missing: Upload Button, adding...',
                    'background-color: red;padding: 10px;border-radius: 15px;'
                )
                document.getElementById('new-notifications-upload-label').classList.remove('hided');
            } else if (!uploadnotification && !document.getElementById('new-notifications-upload-label').classList.contains('hided')) {
                console.log(
                    '%cRemoving Notification Component: Upload Button.',
                    'background-color: red;padding: 10px;border-radius: 15px;'
                )
                document.getElementById('new-notifications-upload-label').classList.add('hided');
            }
            return;
        }
        title = title ?? 'Notification';
        desc = desc ?? 'No Desc Provided';
        action = action ?? '';
        if ((nosound == null || nosound.length < 1) && localStorage.getItem('SilentNotifications') == 'true') {
            nosound = true;
        } else {
            nosound = nosound ?? false;
        }
        uploadnotification = uploadnotification ?? false;
        if (!CommonJS.classExists('.new-notification') || !CommonJS.classExists('.new-notifications') || !CommonJS.classExists('.hided')) {
            console.log(
                '%cImportant Notification Component Missing: CommonCSS, aborting...',
                'background-color: red;padding: 10px;border-radius: 15px;'
            );
            return false;
        }
        if (document.getElementById('new-notification') == null) {
            console.log(
                '%cNotification Component Missing: Notification Box, adding...',
                'background-color: red;padding: 10px;border-radius: 15px;'
            )
            var notificationadd = document.createElement('div');
            var notificationaddclose = document.createElement('button');
            var notificationaddtitle = document.createElement('h3');
            var notificationadddesc = document.createElement('p');
            notificationadd.setAttribute('class', 'new-notification hided');
            notificationadd.setAttribute('id', 'new-notification');
            notificationaddclose.setAttribute('onclick', 'this.parentNode.setAttribute("onclick", "");this.parentNode.classList.add("hided");')
            notificationaddtitle.setAttribute('id', 'new-notification-title');
            notificationadddesc.setAttribute('id', 'new-notification-cnt');
            notificationaddclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
            notificationaddtitle.innerHTML = 'Notification';
            notificationadddesc.innerHTML = 'No Desc Provided';
            notificationadd.appendChild(notificationaddclose);
            notificationadd.appendChild(notificationaddtitle);
            notificationadd.appendChild(notificationadddesc);
            document.body.appendChild(notificationadd);
        }
        if (document.getElementById('new-notification-hided') == null) {
            console.log(
                '%cNotification Component Missing: Multiple Notification Box, adding...',
                'background-color: red;padding: 10px;border-radius: 15px;'
            )
            var notificationhided = document.createElement('div');
            var notificationhidedclose = document.createElement('button');
            var notificationhideddesc = document.createElement('p');
            var notificationhidedp = document.createElement('p');
            notificationhided.setAttribute('class', 'new-notification hided');
            notificationhided.setAttribute('onclick', "document.getElementById('new-notification-hided').classList.add('hided');document.getElementById('new-notification').classList.add('hided');document.getElementById('new-notifications-bkg').classList.remove('hided');");
            notificationhided.setAttribute('style', 'top: 120px !important;height: 50px !important;');
            notificationhided.setAttribute('id', 'new-notification-hided');
            notificationhidedclose.setAttribute('onclick', "this.parentNode.setAttribute('onclick', '');this.parentNode.classList.add('hided');var timeout = setTimeout(() => {this.parentNode.setAttribute('onclick', document.getElementById('new-notification-hided-onclick').innerHTML)}, 1000);")
            notificationhidedclose.setAttribute('style', 'margin-top: 0 !important;')
            notificationhidedp.setAttribute('class', 'hided');
            notificationhidedp.setAttribute('id', 'new-notification-hided-onclick');
            notificationhidedclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
            notificationhideddesc.innerHTML = 'Multiple notifications. Open the notification menu to read.';
            notificationhidedp.innerHTML = "document.getElementById('new-notification-hided').classList.add('hided');document.getElementById('new-notification').classList.add('hided');document.getElementById('new-notifications-bkg').classList.remove('hided');";
            notificationhided.appendChild(notificationhidedclose);
            notificationhided.appendChild(notificationhideddesc);
            notificationhided.appendChild(notificationhidedp);
            document.body.appendChild(notificationhided);
        } 
        if (document.getElementById('new-notifications-bkg') == null) {
            console.log(
                '%cNotification Component Missing: Notification Menu, adding...',
                'background-color: red;padding: 10px;border-radius: 15px;'
            )
            var notificationsbkg = document.createElement('div');
            var notifications = document.createElement('div');
            var notificationsclose = document.createElement('button');
            var notificationstitle = document.createElement('h1');
            var notificationshr = document.createElement('hr');
            var notificationadduploadinput = document.createElement('input');
            var notificationadduploadlabel = document.createElement('label');
            notificationsbkg.setAttribute('class', 'new-notifications hided');
            notificationsbkg.setAttribute('id', 'new-notifications-bkg');
            notifications.setAttribute('class', 'vertical-scroll');
            notifications.setAttribute('id', 'new-notifications');
            notificationsclose.setAttribute('onclick', "this.parentNode.parentNode.classList.add('hided');");
            notificationadduploadinput.setAttribute('type', 'file');
            notificationadduploadinput.setAttribute('id', 'new-notifications-upload');
            notificationadduploadinput.setAttribute('class', 'hided');
            notificationadduploadinput.setAttribute('accept', '.xnp');
            notificationadduploadlabel.setAttribute('for', 'new-notifications-upload');
            notificationadduploadlabel.setAttribute('class', 'hided')
            notificationadduploadlabel.setAttribute('id', 'new-notifications-upload-label');
            notificationadduploadlabel.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>';
            notificationsclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
            notificationstitle.innerHTML = 'Notifications';
            notificationsbkg.appendChild(notifications);
            notifications.appendChild(notificationsclose);
            notifications.appendChild(notificationadduploadlabel);
            notifications.appendChild(notificationadduploadinput);
            notifications.appendChild(notificationstitle);
            notifications.appendChild(notificationshr);
            document.body.appendChild(notificationsbkg);
            if (document.getElementById('new-notifications-upload') != null && uploadnotification) {
                let NotificationInput = document.getElementById("new-notifications-upload");
                NotificationInput.addEventListener("change", () => {
                    let files = NotificationInput.files;
                    if(files.length == 0) return;
                    const file = files[0];
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        const file = e.target.result;
                        const lines = file.split(/\r\n|\n/);
                        var tempElement = document.createElement('div');
                        tempElement.innerHTML = lines.join("\n");
                        var NotificationTitle = tempElement.querySelector('title').innerText || tempElement.querySelector('title').textContent;
                        var NotificationDesc = tempElement.querySelector('desc').innerText || tempElement.querySelector('desc').textContent;
                        var NotificationScript = tempElement.querySelector('script').innerText || tempElement.querySelector('script').textContent;
                        var NotificationStyle = tempElement.querySelector('css').innerText || tempElement.querySelector('css').textContent;
                        NotificationTitle.replaceAll('\n', '');
                        NotificationDesc.replaceAll('\n', '');
                        NotificationStyle.replaceAll('\n', '');
                        NotificationScript.replaceAll('\n', ';');
                        CommonJS.notification(NotificationScript, NotificationTitle, NotificationDesc, nosound, uploadnotification, NotificationStyle)
                    };
                    reader.onerror = (e) => alert(e.target.error.name);
                    reader.readAsText(file);
                });
            }
        }
        if (uploadnotification && document.getElementById('new-notifications-upload-label').classList.contains('hided')) {
            console.log(
                '%cNotification Component Missing: Upload Button, adding...',
                'background-color: red;padding: 10px;border-radius: 15px;'
            )
            document.getElementById('new-notifications-upload-label').classList.remove('hided');
        } else if (!uploadnotification && !document.getElementById('new-notifications-upload-label').classList.contains('hided')) {
            console.log(
                '%cRemoving Notification Component: Upload Button.',
                'background-color: red;padding: 10px;border-radius: 15px;'
            )
            document.getElementById('new-notifications-upload-label').classList.add('hided');
        }
        console.group('Notification Sent')
        console.log('Title: ' + title);
        console.log('Desc: ' + desc);
        console.log('Silent: ' + nosound);
        console.log('Style: ' + style);
        console.log('Action: ' + action);
        console.groupEnd()
        var notification = document.createElement('div');
        var notificationclose = document.createElement('button');
        var notificationtitle = document.createElement('h3');
        var notificationdesc = document.createElement('p');
        notification.setAttribute('onclick', 'this.classList.add("hided");' + action);
        notification.setAttribute('class', 'new-notification');
        if (style != null && style.length > 0) {
            notification.setAttribute("style", style);
        } else {
            notification.setAttribute("style", "");
        }
        notificationclose.setAttribute('onclick', 'this.parentNode.setAttribute(\"onclick\", \"\"),this.parentNode.parentNode.removeChild(this.parentNode)')
        notificationclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
        notificationtitle.innerHTML = title;
        notificationdesc.innerHTML = desc;
        notification.appendChild(notificationclose);
        notification.appendChild(notificationtitle);
        notification.appendChild(notificationdesc);
        document.getElementById('new-notifications').appendChild(notification);
        if (!nosound) {
            var audio = new Audio('https://local-xcenter.netlify.app/assets/media/4.0/notification.mp3');
            audio.play();
        }
        if (!document.getElementById('new-notifications-bkg').classList.contains('hided')) {
            return;
        }
        if (!document.getElementById('new-notification').classList.contains('hided')) {
            document.getElementById('new-notification-hided').classList.remove('hided');
            return;
        }
        if (!action.indexOf('this.classList.add("hided")') != -1) {action = 'this.classList.add("hided");' + action}
        document.getElementById('new-notification-title').innerHTML = title;
        document.getElementById('new-notification-cnt').innerHTML = desc;
        document.getElementById('new-notification').setAttribute('onclick', action);
        if (style != null && style.length > 0) {
            document.getElementById('new-notification').setAttribute("style", style);
        } else {
            document.getElementById('new-notification').setAttribute("style", "");
        }
        document.getElementById('new-notification').classList.remove('hided');
        document.getElementById("new-notifications-upload").value = null;
        return true;
    },
    toast: function(toast) {
        /*
            EXAMPLE:
            CommonJS.toast({
                title: "EXAMPLE",
                type: "info",
                position: "topleft",
                list: false,
                scripts: "alert(\"EXAMPLE TOAST SCRIPT\")"
            })
            REMEMBER: You can also not asign all variables and you can list them in any order you want (USE JSON RULES!!!)
        */
        toast.title = toast.title ?? "Toast Notification"; // CAN BE any;
        toast.type = toast.type ?? "none"; //CAN BE info / error / success / create / other (this only creates the components);
        toast.position = toast.position ?? "topright"; //USABLE ONCE!!! (topleft / topright / bottomleft / bottomright);
        toast.style = toast.style ?? "NONE"; //CAN BE any style propriety;
        toast.duration = toast.duration ?? "5s"; //CAN BE Xs / infinite;
        toast.sounds = toast.sounds ?? false; //CAN BE any boolean;
        toast.upload = toast.upload ?? false; //CAN BE any boolean;
        toast.list = toast.list ?? true; //CAN BE any boolean (notification menu, highly reccomended);
        toast.scripts = toast.scripts ?? "NONE"; // CAN BE any JS script;
        toast.theme = toast.theme ?? "auto" // CAN BE light / dark / auto;
        var toasttime = toast.duration;
        toasttime = toasttime.replaceAll('s', '');
        if (toasttime != "infinite") {
            toasttime *= 1000;
        };
        if (document.getElementById('commonjs-toast-container') == null) {
            var toastcontainer = document.createElement('div');
            toastcontainer.setAttribute('id', 'commonjs-toast-container');
            if (toast.position == "bottomleft") {
                toastcontainer.setAttribute('class', 'commonjstoastcontainer bottom left')
            } else if (toast.position == "bottomright") {
                toastcontainer.setAttribute('class', 'commonjstoastcontainer bottom right')
            } else if (toast.position == "topright") {
                toastcontainer.setAttribute('class', 'commonjstoastcontainer right')
            } else if (toast.position == "topleft") {
                toastcontainer.setAttribute('class', 'commonjstoastcontainer left')
            }
            var toaststyles = document.createElement('style');
            var documentbackground;
            var toasttextcolor = "black";
            if (toast.theme == 'auto') {
                var tmp = CommonJS.getTheme();
                if (tmp == "dark") {
                    documentbackground = 'rgb(32,37,41)';
                    toasttextcolor = "white";
                }
                if (tmp == "light") {
                    documentbackground = 'rgb(256,256,256)';
                    toasttextcolor = "black";
                }
            } else if (toast.theme == 'dark') {
                documentbackground = 'rgb(32,37,41)';
                toasttextcolor = "white";
            } else if (toast.theme == 'light') {
                documentbackground = 'rgb(256,256,256)';
                toasttextcolor = "black";
            } else documentbackground = 'rgb(256,256,256)';
            toaststyles.innerHTML = "\
            .commonjstoastcontainer{position:fixed;z-index:100000000;top:0;bottom:0;background-color:transparent;width:100%;max-width:300px;pointer-events:none;height:100%;margin-right: 10px;}\
            .commonjstoastcontainer.right{right:0;}\
            .commonjstoastcontainer.left{left:0;}\
            .commonjstoastcontainer.bottom{transform: scaleY(-1);}\
            .commonjstoastcontainer.bottom > div{transform: scaleY(-1);}\
            .commonjstoast{width:calc(100% - 5px);padding:5px 10px 30px 10px;margin:5px;position:relative;border-radius:5px;position:relative;z-index:100000001;pointer-events:auto !important;border:1px solid gray;background-color: " + documentbackground + ";}\
            .commonjstoast.info{border-left: 5px solid blue;}\
            .commonjstoast.info div{background-color: blue;}\
            .commonjstoast.error{border-left: 5px solid red;}\
            .commonjstoast.error div{background-color: red;}\
            .commonjstoast.success{border-left: 5px solid green;}\
            .commonjstoast.success div{background-color: green;}\
            .commonjstoast.warn{border-left: 5px solid yellow;}\
            .commonjstoast.warn div{background-color: yellow;}\
            .commonjstoast.other{border-left: 5px solid gray;}\
            .commonjstoast.other div{background-color: gray;}\
            .commonjstoast.none div{background: rgb(255,0,0);background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(236,255,0,1) 35%, rgba(0,129,255,1) 100%);}\
            .commonjstoast.scripts{cursor: pointer;}\
            .commonjstoast p{height:100%;float:left;pointer-events:auto !important;margin-top:0px !important;color: "+ toasttextcolor +"}\
            .commonjstoast div{animation: timeout " + toast.duration + ";pointer-events:auto !important;position:absolute;left:0;right:0;bottom:0;height: 5px;}\
            .commonjstoast button{float:right;height:100%;aspect-ratio:1/1;background-color: transparent !important;padding: 0px !important;margin: 5px !important;float:right;pointer-events:auto !important;margin-top:0px !important;color: " + toasttextcolor + " !important}\
            @keyframes timeout{\
                100% {width: 0%;}\
                99% {width: 1%;}\
                98% {width: 2%;}\
                97% {width: 3%;}\
                96% {width: 4%;}\
                95% {width: 5%;}\
                94% {width: 6%;}\
                93% {width: 7%;}\
                92% {width: 8%;}\
                91% {width: 9%;}\
                90% {width: 10%;}\
                89% {width: 11%;}\
                88% {width: 12%;}\
                87% {width: 13%;}\
                86% {width: 14%;}\
                85% {width: 15%;}\
                84% {width: 16%;}\
                83% {width: 17%;}\
                82% {width: 18%;}\
                81% {width: 19%;}\
                80% {width: 20%;}\
                79% {width: 21%;}\
                78% {width: 22%;}\
                77% {width: 23%;}\
                76% {width: 24%;}\
                75% {width: 25%;}\
                74% {width: 26%;}\
                73% {width: 27%;}\
                72% {width: 28%;}\
                71% {width: 29%;}\
                70% {width: 30%;}\
                69% {width: 31%;}\
                68% {width: 32%;}\
                67% {width: 33%;}\
                66% {width: 34%;}\
                65% {width: 35%;}\
                64% {width: 36%;}\
                63% {width: 37%;}\
                62% {width: 38%;}\
                61% {width: 39%;}\
                60% {width: 40%;}\
                59% {width: 41%;}\
                58% {width: 42%;}\
                57% {width: 43%;}\
                56% {width: 44%;}\
                55% {width: 45%;}\
                54% {width: 46%;}\
                53% {width: 47%;}\
                52% {width: 48%;}\
                51% {width: 49%;}\
                50% {width: 50%;}\
                49% {width: 51%;}\
                48% {width: 52%;}\
                47% {width: 53%;}\
                46% {width: 54%;}\
                45% {width: 55%;}\
                44% {width: 56%;}\
                43% {width: 57%;}\
                42% {width: 58%;}\
                41% {width: 59%;}\
                40% {width: 60%;}\
                39% {width: 61%;}\
                38% {width: 62%;}\
                37% {width: 63%;}\
                36% {width: 64%;}\
                35% {width: 65%;}\
                34% {width: 66%;}\
                33% {width: 67%;}\
                32% {width: 68%;}\
                31% {width: 69%;}\
                30% {width: 70%;}\
                29% {width: 71%;}\
                28% {width: 72%;}\
                27% {width: 73%;}\
                26% {width: 74%;}\
                25% {width: 75%;}\
                24% {width: 76%;}\
                23% {width: 77%;}\
                22% {width: 78%;}\
                21% {width: 79%;}\
                20% {width: 80%;}\
                19% {width: 81%;}\
                18% {width: 82%;}\
                17% {width: 83%;}\
                16% {width: 84%;}\
                15% {width: 85%;}\
                14% {width: 86%;}\
                13% {width: 87%;}\
                12% {width: 88%;}\
                11% {width: 89%;}\
                10% {width: 90%;}\
                9% {width: 91%;}\
                8% {width: 92%;}\
                7% {width: 93%;}\
                6% {width: 94%;}\
                5% {width: 95%;}\
                4% {width: 96%;}\
                3% {width: 97%;}\
                2% {width: 98%;}\
                1% {width: 99%;}\
                0% {width: 100%;}\
              }\
            "
            document.body.appendChild(toastcontainer);
            document.head.appendChild(toaststyles);
        }
        var newtoast = document.createElement('div');
        if (toast.type == "info") {
            newtoast.setAttribute('class', 'commonjstoast info')
        } else if (toast.type == "error") {
            newtoast.setAttribute('class', 'commonjstoast error')
        } else if (toast.type == "success") {
            newtoast.setAttribute('class', 'commonjstoast success')
        } else if (toast.type == "warn") {
            newtoast.setAttribute('class', 'commonjstoast warn')
        } else if (toast.type == "other") {
            newtoast.setAttribute('class', 'commonjstoast other')
        } else if (toast.type == "none") {
            newtoast.setAttribute('class', 'commonjstoast none')
        } else {
            newtoast.setAttribute('class', 'commonjstoast none')
        }
        if (toast.scripts != "NONE") {newtoast.classList.add('scripts')}
        if (toast.scripts != "NONE") newtoast.setAttribute('onclick', toast.scripts);
        if (toast.style != "NONE") {
            if (toast.theme == 'auto') {
                var tmp = CommonJS.getTheme();
                if (tmp == "dark") {
                    newtoast.setAttribute('style', "background-color: rgb(32,37,41);" + toast.style)
                }
                if (tmp == "light") {
                    newtoast.setAttribute('style', "background-color: rgb(256,256,256);" + toast.style)
                }
            } else if (toast.theme == 'dark') {
                newtoast.setAttribute('style', "background-color: rgb(32,37,41);" + toast.style)
            } else if (toast.theme == 'light') {
                newtoast.setAttribute('style', "background-color: rgb(256,256,256);" + toast.style)
            } else {
                newtoast.setAttribute('style', "background-color: rgb(256,256,256);" + toast.style)
            }
        } else {
            if (toast.theme == 'auto') {
                var tmp = CommonJS.getTheme();
                if (tmp == "dark") {
                    newtoast.setAttribute('style', "background-color: rgb(32,37,41);")
                }
                if (tmp == "light") {
                    newtoast.setAttribute('style', "background-color: rgb(256,256,256);")
                }
            } else if (toast.theme == 'dark') {
                newtoast.setAttribute('style', "background-color: rgb(32,37,41);")
            } else if (toast.theme == 'light') {
                newtoast.setAttribute('style', "background-color: rgb(256,256,256);")
            } else {
                newtoast.setAttribute('style', "background-color: rgb(256,256,256);")
            }
        }
        var toasttitle = document.createElement('p');
        var toastclose = document.createElement('button');
        var toasttimeout = document.createElement('div');
        if (toast.theme == 'auto') {
            var tmp = CommonJS.getTheme();
            if (tmp == "dark") {
                toasttitle.setAttribute('style', 'color: white;')
                toastclose.setAttribute('style', 'color: white;')
            } else if (tmp == "light") {
                toasttitle.setAttribute('style', 'color: black;')
                toastclose.setAttribute('style', 'color: black;')
            }
        } else if (toast.theme == 'dark') {
            toasttitle.setAttribute('style', 'color: white;')
            toastclose.setAttribute('style', 'color: white !important;')
        } else if (toast.theme == 'light') {
            toasttitle.setAttribute('style', 'color: black;')
            toastclose.setAttribute('style', 'color: black !important;')
        } else {
            toasttitle.setAttribute('style', 'color: black;')
            toastclose.setAttribute('style', 'color: black !important;')
        }
        toasttitle.innerHTML = toast.title;
        newtoast.appendChild(toasttitle);
        toastclose.setAttribute('onclick', 'this.parentNode.setAttribute("onclick", "");this.parentNode.parentNode.removeChild(this.parentNode);')
        toastclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
        newtoast.appendChild(toastclose);
        if (toast.duration == "infinite") {toasttimeout.setAttribute('style', 'visibility: hidden;display: none;')} else {toasttimeout.setAttribute('style', 'animation-duration: ' + toast.duration+ '')}
        newtoast.appendChild(toasttimeout);
        var toastidtmp = 'TOAST-' + CommonJS.random('30');
        newtoast.setAttribute('id', toastidtmp);
        document.getElementById('commonjs-toast-container').appendChild(newtoast);
        if (toasttime != 'infinite') {
            setTimeout(() => {
                document.getElementById(toastidtmp).parentNode.removeChild(document.getElementById(toastidtmp));
            }, toasttime)
        }
    },
    input: function(title, defaultINPUT) {
        var createBox = document.createElement('div');
        var BoxTitle = document.createElement('h3');
        var BoxInput = document.createElement('input');
        createBox.setAttribute('style', 'position: fixed;z-index: 90;left: 50%;width: 98%;max-width: 500px;heigth: 200px;');
        createBox.appendChild(BoxTitle);
        createBox.appendChild(BoxInput);
        document.body.appendChild(createBox);
        
    },
    getOS: function() {
        //Gets the user's operative system (userAgent, not accurate.)
        console.warn('Detecting your OS...')
        var OS = 'unknown';
        if (navigator.userAgent.indexOf("Win") != -1) {
            OS = "Windows"
        } else if (navigator.userAgent.indexOf("like Mac") != -1) {
            OS = "iOS"
        } else if (navigator.userAgent.indexOf("Mac") != -1) {
            OS = "MacOS"
        } else if (navigator.userAgent.indexOf("Android") != -1) {
            OS = "Android"
        } else if (navigator.userAgent.indexOf("Linux") != -1) {
            OS = "Linux"
        }
        if (OS == 'unknown') console.error("Your OS wasn't recognized.")
        return OS;
    },
    params: function(action, parameter, defaultvalue) {
        //Gets/Deletes page parameter. parameter must be defined.
        if (defaultvalue == null || defaultvalue.length < 1) defaultvalue = 0;
        if (parameter == null || parameter.length < 1) return 'failed';
        if (action == 'get' || action == 'obtain') {
            var urlparameter = defaultvalue;
            if(window.location.href.indexOf(parameter) > -1){
                urlparameter = CommonJS.getUrlVars()[parameter];
            }
            return urlparameter;
        } else if (action == 'del' || action == 'delete') {
            var url=document.location.href;
            var urlparts= url.split('?');
          
           if (urlparts.length>=2)
           {
            var urlBase=urlparts.shift(); 
            var queryString=urlparts.join("?"); 
          
            var prefix = encodeURIComponent(parameter)+'=';
            var pars = queryString.split(/[&;]/g);
            for (var i= pars.length; i-->0;)               
                if (pars[i].lastIndexOf(prefix, 0)!==-1)   
                    pars.splice(i, 1);
            url = urlBase+'?'+pars.join('&');
            window.history.pushState('',document.title,url); // added this line to push the new url directly to url bar .
          
          }
          return url;
        }
        return 'failed';
    },
    getUrlVars: function() {
        //params helper, do not use.
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    },
    replaceURL: function(URL) {
        //Changes the URL (but not the page) shown.
        console.group('Changed URL');
        console.log('From: ' + window.location.pathname);
        console.log('To: ' + URL);
        console.groupEnd();
        window.history.replaceState({}, "", URL);
    },
    redirect: function(URL, Type) {
        //Redirects user (replace = No Browser history on old page; redirect = browser history saved);
        console.log('Redirecting to ' + URL + '...');
        if (Type == 'redirect' || Type == null) {
            location.href = URL;
            return false;
        } else if (Type == 'replace') {
            window.location = URL;
            return false;
        }
        console.log('Redirect Failed.')
        return 'failed';
    },
    getLanguage: function() {
        //Gets User (browser)'s language.
        return navigator.language;
    },
    getTheme: function() {
        //Gets system (browser)'s theme (dark or light).
        console.log('Getting System Theme...');
        var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        var theme;
        if (darkTheme.matches) {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        console.log('Done, ' + theme + ' theme detected.');
        return theme;
    },
    getKeyCode: window.onkeydown = function(Key) {
        //Returns pressed key keyCode (UNSTABLE)
        return(Key.keyCode);
    },
    fileManage: function(action, inpt, out) {
        //Gets the uploaded file's content/name/date/extension/all. Define at least the action. 
        var input = document.getElementById('FileInput') ?? document.querySelector('input');
        var output = document.getElementById('FileOutput') ?? document.querySelector('textarea');
        input = inpt ?? input;
        output = out ?? output;
        //USAGE: fileManage("Action", "inputID", "outputID");
        //DEFAULT: fileManage("NODEFAULT", "FileInput", "FileOutput");
        //Actions:
        //Read = Read the file;
        //GetExtension = Get File Extension;
        //GetName = Get File Name;
        //GetSize = Get File Size;
        //GetEdit = Get Last File Edit;
        //Use GetInfo to get All the avaiable informations.
        //(Output will be: name, size, type, last mod)
        var RequestInfo;
        if (action == "Read") {
            input.addEventListener('change', () => {
                var files = input.files;
                if (files.length == 0) return;
                /* If any further modifications have to be made on the
                Extracted text. The text can be accessed using the
                file variable. But since this is const, it is a read
                only variable, hence immutable. To make any changes,
                changing const to var, here and In the reader.onload
                function would be advisible */
                const file = files[0];
                var reader = new FileReader();
                reader.onload = (e) => {
                    const file = e.target.result;
                    // This is a regular expression to identify carriage
                    // Returns and line breaks
                    const lines = file.split(/\r\n|\n/);
                    output.value = lines.join('\n');
                    output.innerHTML = lines.join('\n');
                };
                reader.onerror = (e) => alert(e.target.error.name);
                reader.readAsText(file);
            });    
        } else if (action == "GetName") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].name;
                return RequestInfo;
            });
        } else if (action == "GetSize") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].size;
                return RequestInfo;
            });
        } else if (action == "GetExtension") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].type;
                return RequestInfo;
            });
        } else if (action == "GetEdit") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].lastModifiedDate;
                return RequestInfo;
            });
        } else if (action == "GetInfo") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].name + ', ' + input.files[0].size + ', ' + input.files[0].type + ', ' + input.files[0].lastModifiedDate;
                return RequestInfo;
            });
        } else {return "failed"};
    },
    editPageHead: function(toEdit, value) {
        //Edits page's name or page's icon. Define both values.
        if (toEdit == null || toEdit.length < 1 || value == null) return false;
        if (toEdit == 'title') {
            document.title = value;
            return true;
        } else if (toEdit == 'icon') {
            document.getElementById('HTMLlogo').setAttribute('href', value);
            return true;
        }
        return false;
    },
    download: function(filename, text) {
        //Download a file with desidered name and text. Its important to insert both name and text.
        if (filename == null || filename.length < 1 || text == null || text.length < 1) return false;
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        return true;
    },
    onIframe: function() {
        //Checks if the page is being displayied on an iFrame.
        if (window!=window.top) {
            return true;
        } else {
            return false;
        }
    },
    copyText: function(id, text) {
        //Insert the id of a textarea / input element OR the text and it will copy it on user's clipboard.
        if (text == null && document.getElementById(id) == null) {
            text = id;
            id = null;
        }
        if (text == 'CommonJS.AddToScript.LinkToJSFile.CopyHTML.Confirm.true') text = '<script src="https://xcenter.netlify.app/assets/js/common.js"></script>';
        if (id == null || id.length <= 0) {
            if (text == null || text.length <= 0) {
                return false;
            } else {
                var TempDiv = document.createElement('input');
                TempDiv.setAttribute("style", "display: none;");
                TempDiv.setAttribute("value", text);
                var TextToCopy = TempDiv;
                TextToCopy.select();
                TextToCopy.setSelectionRange(0, 99999); /* For mobile devices */
                navigator.clipboard.writeText(TextToCopy.value);
                return true;
            }
        }
        var TextToCopy = document.getElementById(id);
        TextToCopy.select();
        TextToCopy.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(TextToCopy.value);
        return true;
    },
    getTXT: function(url) {
        //Insert an URL and then CommonJS will return the content.
        fetch(url).then(response => response.text()).then(data => {
            return data;
        });
    },
    random: function(length, type, casetype) {
        //LENGTH = how much will the string be long;
        //TYPE = num / str / both; (Generate numbers or strings or both)
        //CASETYPE = upr / lwr / both; (Generated letters on uppercase or lowercase or both)
        //Default = '5', 'both', 'both';
        length = length ?? 5;
        if (isNaN(length)) length = 5;
        type = type ?? 'both';
        casetype = casetype ?? 'both';
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        if (type == 'num') {
            characters = '0123456789';
        } else if (type == 'str' && casetype == 'upr') {
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        } else if (type == 'str' && casetype == 'lwr') {
            characters = 'abcdefghijklmnopqrstuvwxyz';
        } else if (type == 'str' && casetype == 'both') {
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        } else if (type == 'both' && casetype == 'upr') {
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        } else if (type == 'both' && casetype == 'lwr') {
            characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        }
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    getElementNumber: function(DivID, tagname) {
        //example: function('MyDIV', 'h1');
        tagname = tagname ?? "*"
        var Number = document.getElementById(DivID).getElementsByTagName(tagname).length;
        return Number;
    },
    downloadPage: function() {
        var tmp = document.createElement('a');
        tmp.setAttribute('href', window.location);
        tmp.setAttribute('download', 'download');
        tmp.click();
    },
    getDocumentBackground: function() {
        //NOT ALWAYS WORKING!!!
        return window.getComputedStyle(document.body,null).getPropertyValue('background-color');
    },
    encrypt: function(text, pass) {
        //CRYPTJS MUST BE LINKED!!!
        //<script src="https://xcenter.netlify.app/assets/js/crypto.js" defer></script>
        if (text == null || text.length < 1 || pass == null || pass.length < 1) return;
        var encrypted = CryptoJS.AES.encrypt(text, pass);
        return encrypted
    },
    decrypt: function(text, pass) {
        //CRYPTJS MUST BE LINKED!!!
        //<script src="https://xcenter.netlify.app/assets/js/crypto.js" defer></script>
        if (text == null || text.length < 1 || pass == null || pass.length < 1) return;
        var decryptedtmp = CryptoJS.AES.decrypt(text, pass);
        var decrypted = decryptedtmp.toString(CryptoJS.enc.Utf8);
        return decrypted;
    },
    mix: function(txt1, txt2) {
        //EXAMPLE: CommonJS.mix("ACEFH","BD GI") >> ABCDE FGHI
        var m = (a, b) => a.length ? [a[0], ...m(b, a.slice(1))] : b;
        var mix = m(txt1, txt2);
        return mix.join('');
    },
    stringBetween: function(string, string1, string2) {
        if (string == null || string.length < 1) return false;
        var length = string1.length;
        var contentbetween = string.substring(string.indexOf(string1) + length, string.lastIndexOf(string2));
        return contentbetween;
    },
    stringSize: function(string) {
        //NOT STRING LENGTH, STRING SIZE IN BYTES!!!
        var size = new Blob([string]).size;
        return size;
    },
    isOnline: function() {
        return window.navigator.onLine;
    },
    countChar: function(string, character) {
        if (string == null || character == null) return;
        if (string.length < 1 || character.length < 1) return;
        return (string.split(character)).length - 1;
    },
    saveLocalStorageImage: function(name, input) {
        if (name == null || name.length < 1 || document.getElementById(input) == null) return false;
        var img = document.getElementById(input);
        var data = CommonJS.convertImgBase64(img);
        localStorage.setItem(name, data);
        return true;
    },
    loadLocalStorageImage: function(name, output) {
        if (name == null || name.length < 1 || document.getElementById(output) == null || localStorage[name] == null || localStorage[name].length < 1) return false;
        var data = localStorage.getItem(name);
        var imgOutput = document.getElementById(output);
        imgOutput.src = "data:image/png;base64," + data;
        return true;
    },
    convertImgBase64: function(img) {
        if (img == null || img.length < 1) return false;
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    },
    localStorageBackup: {
        make: function(name) {
            name = name ?? "Backup";
            var backup = {};
            for (i = 0; i < localStorage.length; i++) {
              var key = localStorage.key(i);
              var value = localStorage.getItem(key);
              backup[key] = escape(encodeURIComponent(value));
            }
            var json = JSON.stringify(backup);
            var base = btoa(json);
            var href = 'data:text/javascript;charset=utf-8;base64,' + base;
            var link = document.createElement('a');
            link.setAttribute('download', name + '.bkp');
            link.setAttribute('href', href);
            document.querySelector('body').appendChild(link);
            link.click();
            link.remove();
        },
        restore: function() {
            var localStoragebkp = document.createElement('div');
            var localStoragebkpclose = document.createElement('button');
            var localStoragebkptitle = document.createElement('h3');
            var localStoragebkpdesc = document.createElement('p');
            var localStoragebkpInput = document.createElement('input');
            var localStoragebkpUpload = document.createElement('label');
            localStoragebkpclose.setAttribute('onclick', 'this.parentNode.parentNode.removeChild(this.parentNode)');
            localStoragebkpclose.setAttribute('id', 'localStoragebkpclose')
            localStoragebkp.setAttribute('class', 'new-localstorage-backup center');
            localStoragebkpInput.setAttribute('type', 'file');
            localStoragebkpInput.setAttribute('id', 'localStoragebkpINPUT');
            localStoragebkpInput.setAttribute('class', 'hided');
            localStoragebkpUpload.setAttribute('for', 'localStoragebkpINPUT');
            localStoragebkptitle.innerHTML = "Upload .bkp File";
            localStoragebkpUpload.innerHTML = "Upload";
            localStoragebkpdesc.innerHTML = "Upload a .bkp file to restore every old data information."
            localStoragebkpclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
            localStoragebkpInput.onchange = function(e) {
                localStorage.clear();
                localStoragebkpclose.classList.add('hided');
                localStoragebkpclose.setAttribute('onclick', 'this.parentNode.parentNode.removeChild(this.parentNode);location.reload();')
                localStoragebkpUpload.setAttribute('for', 'localStoragebkpclose');
                localStoragebkpUpload.innerHTML = "Ok";
                localStoragebkptitle.innerHTML = "Restored";
                var f = e.target.files[0];
                if (f) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        var text = e.target.result;
                        var backup = JSON.parse(text);
                        for (var key in backup){
                           var value = decodeURIComponent(unescape(backup[key]));
                           window.localStorage.setItem(key, value);
                        }
                         
                        localStoragebkpdesc.innerHTML = "Restored " + Object.keys(backup).length + " data files from .bkp file.";
                        //alert('Imported ' + Object.keys(backup).length + ' items from backup.')
                    };
                    reader.readAsText(f);
                } else {
                  alert('Failed to load file');
                }
            };
            localStoragebkp.appendChild(localStoragebkpclose);
            localStoragebkp.appendChild(localStoragebkptitle);
            localStoragebkp.appendChild(localStoragebkpdesc);
            localStoragebkp.appendChild(localStoragebkpInput);
            localStoragebkp.appendChild(localStoragebkpUpload);
            document.body.appendChild(localStoragebkp);
        }
    }
}
console.log(
    '%cCommonJS v3.0 function enabled succeffully!',
    'padding: 10px;background: rgb(58,105,180);background: linear-gradient(90deg, rgba(58,105,180,1) 0%, rgba(253,209,29,1) 50%, rgba(255,106,0,1) 100%);border-radius: 15px;'
);
if (document.querySelector('.page') != null && (location.href.indexOf('xcenter.netlify.app') != -1 || location.href.indexOf('127.0.0.1:5500') != -1 || document.getElementById('xcenter-body') != null)) {
    if (localStorage.getItem('settings-coldbootversion') == null) localStorage.setItem('settings-coldbootversion', '5.0');
    localStorage.setItem('XCenterColdBootVersion', localStorage.getItem('settings-coldbootversion'))
    var xversion = '5.0.0';
    if (location.href.indexOf('local-xcenter.netlify.app') != -1) xversion = xversion + "e";
    var changelog = {
        OPT1: 'Added:',
        TXT1: '<li>Apps</li><li>User Profile</li><li>Themes</li>',
        OPT2: 'Optimized:',
        TXT2: '<li>General Website</li><li>Store</li>',
        OPT3: 'Redesigned:',
        TXT3: '<li>General Website</li>',
        OPT4: '',
        TXT4: '',
        open: function() {
            if (document.getElementById('new-changelog') == null) {
                var ChangelogBKG = document.createElement('div');
                ChangelogBKG.setAttribute('class', 'new-changelog-back');
                ChangelogBKG.setAttribute('id', 'new-changelog');
                document.querySelector('.page').appendChild(ChangelogBKG);
                var Changelog = document.createElement('div');
                Changelog.setAttribute('class', 'new-changelog vertical-scroll');
                Changelog.setAttribute('id', 'new-changelog-div');
                document.getElementById('new-changelog').appendChild(Changelog)
                var ChangelogTIT = document.createElement('h1');
                ChangelogTIT.innerHTML = "What's new (v" + xversion + ")";
                document.getElementById('new-changelog-div').appendChild(ChangelogTIT);
                var ChangelogADD = document.createElement('p');
                ChangelogADD.innerHTML = changelog.OPT1;
                document.getElementById('new-changelog-div').appendChild(ChangelogADD);
                var ChangelogADDUL = document.createElement('ul');
                ChangelogADDUL.innerHTML = changelog.TXT1;
                document.getElementById('new-changelog-div').appendChild(ChangelogADDUL);
                var ChangelogFIX = document.createElement('p');
                ChangelogFIX.innerHTML = changelog.OPT2;
                document.getElementById('new-changelog-div').appendChild(ChangelogFIX);
                var ChangelogFIXUL = document.createElement('ul');
                ChangelogFIXUL.innerHTML = changelog.TXT2;
                document.getElementById('new-changelog-div').appendChild(ChangelogFIXUL);
                if (changelog.OPT3 != null && changelog.OPT3.length > 0) {
                    var Changelog3 = document.createElement('p');
                    Changelog3.innerHTML = changelog.OPT3;
                    document.getElementById('new-changelog-div').appendChild(Changelog3);
                    var Changelog3ul = document.createElement('ul');
                    Changelog3ul.innerHTML = changelog.TXT3;
                    document.getElementById('new-changelog-div').appendChild(Changelog3ul);
                }
                if (changelog.OPT4 != null && changelog.OPT4.length > 0) {
                    var Changelog4 = document.createElement('p');
                    Changelog4.innerHTML = changelog.OPT4;
                    document.getElementById('new-changelog-div').appendChild(Changelog4);
                    var Changelog4ul = document.createElement('ul');
                    Changelog4ul.innerHTML = changelog.TXT4;
                    document.getElementById('new-changelog-div').appendChild(Changelog4ul);
                }
                var ChangelogBTN = document.createElement('button');
                ChangelogBTN.innerHTML = 'Thanks!';
                ChangelogBTN.setAttribute('onclick', 'changelog.close()');
                ChangelogBTN.setAttribute('class', 'btn-primary')
                document.getElementById('new-changelog-div').appendChild(ChangelogBTN);
            } else {
                document.getElementById('new-changelog').classList.remove('hided');
            }
        },
        close: function() {
            document.getElementById('new-changelog').classList.add('hided');
            localStorage.setItem('XChangelog' + xversion, true);
        }
    }
    console.log(
        '%cNow Running CommonJS (X-Center v' + xversion + ')',
        'padding: 10px;background: rgb(58,105,180);background: linear-gradient(90deg, rgba(58,105,180,1) 0%, rgba(255,106,0,1) 100%);border-radius: 15px;'
        );
    if (location.href.indexOf('pbd') <= -1) {
        CommonJS.link('/assets/css/loading.css', 'css');
    }
    CommonJS.link('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js')
    $(window).on('load',function(){
        $(".loading").fadeOut(1000);
        $(".page").fadeIn(1000);
    });

    console.log(
        '%cExecuting Page Data Scripts...',
        'padding: 10px;background-color: black;border-radius: 15px;'
    );
    if (localStorage.getItem('XCenterPageData') != null) {
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(localStorage.getItem('XCenterPageData')));
        document.head.appendChild(s);
        localStorage.removeItem('XCenterPageData')
        console.log('> Slot 1 Page Data Scripts Executed')
    } else {
        console.log('> No Page Data Scripts Found in slot 1.')
    }
    if (localStorage.getItem('XColdBootData') != null) {
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(localStorage.getItem('XColdBootData')));
        document.head.appendChild(s);
        console.log('> Slot 2 Page Data Scripts Executed')
    } else {
        console.log('> No Page Data Scripts Found in slot 2.')
    }
    if (localStorage.getItem('XColdBootData2') != null) {
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(localStorage.getItem('XColdBootData2')));
        document.head.appendChild(s);
        console.log('> Slot 3 Page Data Scripts Executed')
    } else {
        console.log('> No Page Data Scripts Found in slot 3.')
    }
    if (localStorage.getItem('XColdBootData3') != null) {
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(localStorage.getItem('XColdBootData3')));
        document.head.appendChild(s);
        console.log('> Slot 4 Page Data Scripts Executed')
    } else {
        console.log('> No Page Data Scripts Found in slot 4.')
    }
    console.log(
        '%cFinished Executing Page Data Scripts.',
        'padding: 10px;background-color: black;border-radius: 15px;'
    )
    console.log('> Checking if displaying on an iframe...');
    if (window!=window.top) {
        console.log(
            '%cIFRAME DETECTED!',
            'padding: 10px;background-color: red;border-radius: 15px;'
        )
        if (location.href.indexOf('iframe') == -1) {
            console.log(
                '%cDo not use the website on an iFrame',
                'padding: 10px;background-color: red;border-radius: 15px;'
            )
            window.location = '/issues/iframe.html';
        } else {
            console.log('> Not using an iFrame')
        }
    } else {
        console.log('> Checking Page Link For iFrame Errors...')
        if (location.href.indexOf('iframe') != -1) {
            console.log('> Error Found, Redirecting...')
            window.location = '/';
        }
    }
    function sysTheme() {
        console.log('> Getting System Theme...');
        var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        var theme;
        if (darkTheme.matches) {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        console.log('> Done, ' + theme + ' theme detected.');
        return theme;
    }
    settings('get')
    var pageHTML = document.getElementById('html');
    var navbar = document.getElementById('navbar');
    var menu = document.getElementById('new-menu');
    var theme = sysTheme();
    var NotificationHide, NotificationSilent = 'false';
    var ChangelogHide = localStorage.getItem('AutoHideChangelog');
    if (localStorage.getItem('theme') == null) {localStorage.setItem('theme', 'auto')};
    setTheme();
    function setTheme() {
        console.log('> Setting Page Theme...');
        if (localStorage.getItem('theme') == 'auto') {
            if (document.getElementById('settings-ThemeDetect') != null) {document.getElementById('settings-ThemeDetect').checked = true;}
            if (theme == 'dark') {
                pageHTML.classList.add('dark')
                navbar.classList.add('new-navbar-dark')
                if (menu != null) {menu.classList.add('new-menu-dark')}
                if (document.getElementById('settings-ThemeDark') != null) {
                    document.getElementById('settings-ThemeDark').checked = true;
                    document.getElementById('settings-ThemeDarkCheck').checked = true;
                }
            } else if (theme == 'light') {
                pageHTML.classList.add('light')
                navbar.classList.add('new-navbar-light')
                if (menu != null) {menu.classList.add('new-menu-light')}
                if (document.getElementById('settings-ThemeDark') != null) {
                    document.getElementById('settings-ThemeDark').checked = false;
                    document.getElementById('settings-ThemeDarkCheck').checked = false;
                }
            }
        } else if (localStorage.getItem('theme') == 'dark') {
            pageHTML.classList.add('dark')
            navbar.classList.add('new-navbar-dark')
            menu.classList.add('new-menu-dark')
            if (document.getElementById('settings-ThemeDark') != null) {
                document.getElementById('settings-ThemeDark').checked = true;
                document.getElementById('settings-ThemeDarkCheck').checked = true;
            }
        } else if (localStorage.getItem('theme') == 'light') {
            pageHTML.classList.add('light')
            navbar.classList.add('new-navbar-light')
            menu.classList.add('new-menu-light')
            if (document.getElementById('settings-ThemeDark') != null) {
                document.getElementById('settings-ThemeDark').checked = false;
                document.getElementById('settings-ThemeDarkCheck').checked = false;
            }
        }
        console.log('> Page theme edited!');
    }
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    document.body.style.cursor="url('/assets/cursors/xcenter.cur'), default";
    if (location.href.indexOf('/tools/') != -1 || location.href.indexOf('/xarbot/') != -1 || location.href.indexOf('/os/') != -1 || location.href.indexOf('/settings/') != -1 || location.href.indexOf('/help/') != -1 || location.href.indexOf('/issues/') != -1) {} else if (window.location.pathname.length <= 1 || location.href.indexOf('index') != -1) {} else {localStorage.setItem('LastLocalPage', location.href);console.log('External Page Saved.');}
    if (localStorage.getItem('LastLocalPage') == null) {
        console.log('> Resetting Recent Page...');
        localStorage.setItem('LastLocalPage', '/help/#RecentPage');
    }
    function RecentPage() {
        console.log(
            '%cRedirecting to last local page...',
            'padding: 10px;background: rgb(58,105,180);background: linear-gradient(90deg, rgba(58,105,180,1) 0%, rgba(253,209,29,1) 50%, rgba(255,106,0,1) 100%);border-radius: 15px;'
        );
        location.href = localStorage.getItem('LastLocalPage');
        return false;
    }
    navResize();
    function navResize() {
        console.log('> Resizing navbar...');
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
        if (winWidth <= "123") {
            document.getElementById("new-navbar-home").classList.add('hided');
            document.getElementById("new-navbar-other").classList.add('hided');
            document.getElementById("new-navbar-tools").classList.add('hided');
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-OS").classList.add('hided');
        } else if (winWidth <= "197") {
            document.getElementById("new-navbar-other").classList.add('hided');
            document.getElementById("new-navbar-tools").classList.add('hided');
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-OS").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
        } else if (winWidth <= "281") {
            document.getElementById("new-navbar-tools").classList.add('hided');
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-OS").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
        } else if (winWidth <= "376") {
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-tools").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
            document.getElementById("new-navbar-OS").classList.remove('hided');
        } else if (winWidth <= "484") {
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
            document.getElementById("new-navbar-tools").classList.remove('hided');
            document.getElementById("new-navbar-OS").classList.remove('hided');
        } else if (winWidth <= "609") {
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
            document.getElementById("new-navbar-tools").classList.remove('hided');
            document.getElementById("new-navbar-settings").classList.remove('hided');
            document.getElementById("new-navbar-OS").classList.remove('hided');
        } else {
            document.getElementById("new-navbar-xarbot").classList.remove('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
            document.getElementById("new-navbar-tools").classList.remove('hided');
            document.getElementById("new-navbar-settings").classList.remove('hided');
            document.getElementById("new-navbar-OS").classList.remove('hided');
        }
    }
    window.onresize = function() {
        console.log(
            '%cWINDOW RESIZEMENT DETECTED!',
            'padding: 10px;background-color: yellow;border-radius: 15px'
        );
        navResize();
        osPageFix();
    }
    function NewMenu() {
        console.log('> Menu Requested...');
        document.getElementById('new-menu').classList.toggle('hided');
    }
    if (document.getElementById('new-page-indicator') != null) {
        console.log('> Page Indicator Animation Started...');
        var Timeout = setTimeout(() => {document.getElementById('new-page-indicator').classList.add('fadeOut');document.getElementById('new-page-indicator').classList.add('semi-hided-smooth')}, 5000)
    }
    /*------------------------------------------------------------
    CAROUSEL
    ------------------------------------------------------------*/
    if (document.getElementById('carousel-1') != null) {
        console.log(
            '%cCarousel Detected',
            'padding: 10px;background-color: gray;border-radius: 15px;'
        );
        document.getElementById('carousel-1').classList.remove('hided');
    }
    function carousel(s) {
        console.log('> Processing Carousel Request');
        var CarouselContents = CommonJS.getElementNumber('new-carousel') - 1;
        function carouselCheckShown(num) {
            if (num < 1 || num == undefined || num == null) return false;
            if (!document.getElementById('carousel-' + num).classList.contains('hided')) {
                return num;
            } else {
                --num
                var temp = carouselCheckShown(num);
                return temp;
            }
        }
        var currentshown = carouselCheckShown(CarouselContents);
        if (s == '+') {
            if (currentshown >= CarouselContents) {
                document.getElementById('carousel-' + currentshown).classList.add('hided');
                currentshown = 1;
                document.getElementById('carousel-' + currentshown).classList.remove('hided');
            } else {
                document.getElementById('carousel-' + currentshown).classList.add('hided');
                ++currentshown;
                document.getElementById('carousel-' + currentshown).classList.remove('hided');
            }
        } else if (s == '-') {
            if (currentshown <= 1) {
                document.getElementById('carousel-' + currentshown).classList.add('hided');
                currentshown = CarouselContents;
                document.getElementById('carousel-' + currentshown).classList.remove('hided');
            } else {
                document.getElementById('carousel-' + currentshown).classList.add('hided');
                --currentshown;
                document.getElementById('carousel-' + currentshown).classList.remove('hided');
            }
        } else if (s == 'j') {
            console.log(
                '%cCarousel Obsolete Option. Use - or + to change the image.',
                'padding: 10px;background: rgb(58,105,180);background-color: red;border-radius: 15px;'
            )
            return;
        } else return;
    }
    function settings(a, r) {
        console.log(
            '%cManaging Settings',
            'padding: 10px;background-color: gray;border-radius: 15px;'
        );
        r = r ?? '/';
        if (a == 'apply') {
            console.log('> Saving Settings...');
            if (document.getElementById('settings-ThemeDetect').checked) {
                localStorage.setItem('theme', 'auto');
            } else if (document.getElementById('settings-ThemeDarkCheck').checked) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
            if (document.getElementById('settings-ChangelogHide').checked) {
                localStorage.setItem('AutoHideChangelog', 'true');
            } else {
                localStorage.setItem('AutoHideChangelog', 'false');
            }
            if (document.getElementById('settings-NotificationsHide').checked) {
                localStorage.setItem('HideNotifications', 'true');
            } else {
                localStorage.setItem('HideNotifications', 'false');
            }
            if (document.getElementById('settings-NotificationsSilent').checked) {
                localStorage.setItem('SilentNotifications', 'true');
            } else {
                localStorage.setItem('SilentNotifications', 'false');
            }
            if (window.location.href.indexOf('/settings/') != -1) {
                if (document.getElementById('new-settings-ColdBoot-selectedColdBoot').innerHTML == '4.0' || document.getElementById('new-settings-ColdBoot-selectedColdBoot').innerHTML == '3.0' || document.getElementById('new-settings-ColdBoot-selectedColdBoot').innerHTML == '2.0' ||document.getElementById('new-settings-ColdBoot-selectedColdBoot').innerHTML == '1.0') {
                    localStorage.setItem('XCenterColdBootVersion', document.getElementById('new-settings-ColdBoot-selectedColdBoot').innerHTML);
                }
                if (document.getElementById('new-settings-ColdBoot-Optimize').checked) {
                    localStorage.setItem('XCenterColdBootVersionOptimize', 'true');
                } else {
                    localStorage.setItem('XCenterColdBootVersionOptimize', 'false');
                }
            } else {

            }
            console.log('> Saved Settings');
            if (r == 'REFRESH') {location.reload();return false}
            window.location = r;
        } else if (a == 'get') {
            console.log('> Obtaining Settings...');
            if (localStorage.getItem('theme') == null) {localStorage.setItem('theme', 'auto')}
            if (localStorage.getItem('AutoHideChangelog') == null) {localStorage.setItem('AutoHideChangelog', 'false')}
            if (localStorage.getItem('XCenterColdBootVersionOptimize') == null) {localStorage.setItem('XCenterColdBootVersionOptimize', 'true')}
            if (localStorage.getItem('XCenterColdBootVersion') == null) {localStorage.setItem('XCenterColdBootVersion', '5.0')}
            if (localStorage.getItem('HideNotifications') == null) {localStorage.setItem('HideNotifications', 'false')}
            if (localStorage.getItem('SilentNotifications') == null) {localStorage.setItem('SilentNotifications', 'false')}
            var theme = localStorage.getItem('theme');
            var ChangelogHide = localStorage.getItem('AutoHideChangelog');
            if (document.getElementById('settings-ThemeDetect') != null) {
                if (theme == 'auto') {
                    document.getElementById('settings-ThemeDetect').checked = true;
                }
            }
            if (document.getElementById('settings-ChangelogHide') != null) {
                if (ChangelogHide == 'true') {
                    document.getElementById('settings-ChangelogHide').checked = true;
                }
            }
            if (document.getElementById('new-settings-ColdBoot-Optimize') != null) {
                if (localStorage.getItem('XCenterColdBootVersionOptimize') == 'true') {
                    document.getElementById('new-settings-ColdBoot-Optimize').checked = true;
                }
            }
            if (document.getElementById('settings-NotificationsHide') != null) {
                if (localStorage.getItem('HideNotifications') == 'true') {
                    document.getElementById('settings-NotificationsHide').checked = true;
                }
            }
            if (document.getElementById('settings-NotificationsSilent') != null) {
                if (localStorage.getItem('SilentNotifications') == 'true') {
                    document.getElementById('settings-NotificationsSilent').checked = true;
                }
            }
            NotificationHide = localStorage.getItem('HideNotifications');
            NotificationSilent = localStorage.getItem('SilentNotifications');
            ColdBootVersion = localStorage.getItem('XCenterColdBootVersion');
            console.log('> Settings Obtained.')
        } else if (a == 'reset') {
            console.log('> Default Settings Enabled.');
            localStorage.setItem('theme', 'auto');
            localStorage.setItem('AutoHideChangelog', 'false');
            localStorage.setItem('XCenterColdBootVersion', '4.0');
            localStorage.setItem('XCenterColdBootVersionOptimize', 'false');
            localStorage.setItem('NotificationsSilent', 'false');
            localStorage.setItem('NotificationsHide', 'false');
            ChangelogHide = 'false';
            theme = 'auto';
            ColdBootVersion = '4.0';
            NotificationHide = 'false';
            NotificationSilent = 'false';
            location.reload();
        }
    }
    CommonJS.notification('', '', '', true, true, '', true);
    if (NotificationHide == 'true') {document.getElementById('new-notification').classList.add('hided-force');document.getElementById('new-notification-hided').classList.add('hided-force')}
    console.log(
        '%cChecking For ColdBoot Version...',
        'padding: 10px;background-color: blue;border-radius: 15px;'
    )
    var ColdBootVersion = localStorage.getItem('XCenterColdBootVersion') ?? '5.0';
    if (ColdBootVersion != '5.0') {
        console.log('> Redirecting to ColdBoot Version...')
        window.location = '/version/' + ColdBootVersion;
    } else {
        console.log('> No ColdBoot Version Found.')
    }
    if (localStorage.getItem('XCenterColdBootVersion') != '5.0' && (location.href.indexOf('xcenter') != -1 || location.href.indexOf('127.0.0.1') != -1)) {
        console.log(
            '%cX-Center ColdBoot Version',
            'padding: 10px;background-color: gray;border-radius: 15px;'
        );
        if (localStorage.getItem('XCenterColdBootVersionOptimize') != 'true') {
            CommonJS.replaceURL(window.location.pathname.replaceAll('/version/' + localStorage.getItem('XCenterColdBootVersion'), ''))
        }
        var GoBackToNewVersion = document.createElement('button');
        GoBackToNewVersion.setAttribute('style', 'position: fixed;top: 0;right: 0;width: 50px;heigth: 50px;background-color: rgba(255, 255, 255, 0.5); !important;padding: 10 !important;border: 0px;border-radius: 0px 0px 0px 15px;z-index: 100000000000000;');
        GoBackToNewVersion.setAttribute('onclick', 'localStorage.setItem("XCenterColdBootVersion", "5.0");localStorage.setItem("settings-coldbootversion", "5.0");window.location = "/";')
        GoBackToNewVersion.setAttribute('id', 'new-XCenterGoBackToNewVersion');
        document.body.appendChild(GoBackToNewVersion)
        var GoBackToNewVersionIMG = document.createElement('img');
        GoBackToNewVersionIMG.setAttribute('src', '/assets/media/logo.png')
        GoBackToNewVersionIMG.setAttribute('style', 'width: 100%;heigth: 100%;')
        document.getElementById('new-XCenterGoBackToNewVersion').appendChild(GoBackToNewVersionIMG);
    }
    /*------------------------------------------------------------
    SYSTEM ICON CHANGE
    ------------------------------------------------------------*/
    console.log(
        '%cDetecting Operative System...',
        'padding: 10px;background-color: gray;border-radius: 15px;'
    );
    var Systemicon;
    Systemicon = 'unknown.png';
    if (navigator.userAgent.indexOf("Win") != -1) {
        console.log('> User OS is Windows.');
        Systemicon = "windows.png"
    } else if (navigator.userAgent.indexOf("like Mac") != -1) {
        Systemicon = "apple.png"
        console.log('> User OS is iOS.');
    } else if (navigator.userAgent.indexOf("Mac") != -1) {
        Systemicon = "apple.png"
        console.log('> User OS is MacOS.');
    } else if (navigator.userAgent.indexOf("Android") != -1) {
        Systemicon = "android.png"
        console.log('> User OS is Android.');
    } else if (navigator.userAgent.indexOf("Linux") != -1) {
        Systemicon = "linux.png"
        console.log('Operative System Detected (Linux)');
    } else if (navigator.userAgent.indexOf("Nintendo WiiU") != -1) {
        Systemicon = "WiiU.png"
        console.log('> Navigating on a Wii U.');
    } else {
        console.log(
            '%cCould Not Retrieve Operating System.',
            'padding: 10px;background-color: red;border-radius: 15px;'
        )
    }
    var NavBarOS = document.getElementById('nav-OS');
    var ReccomendOS = document.getElementById('reccomend-OS');
    var OSpng = document.getElementById('new-os-png');
    var OStit = document.getElementById('new-os-name');
    var OSstory = document.getElementById('new-os-story');
    var OStool1 = document.getElementById('new-os-tool-1');
    var OStool2 = document.getElementById('new-os-tool-2');
    var OStool3 = document.getElementById('new-os-tool-3');
    var OStool4 = document.getElementById('new-os-tool-4');
    var OStool5 = document.getElementById('new-os-tool-5');
    var OStool6 = document.getElementById('new-os-tool-6');
    NavBarOS.src = '/assets/media/4.0/' + Systemicon;
    if (ReccomendOS != null) {
        ReccomendOS.src = '/assets/media/4.0/' + Systemicon;
    }
    if (OSpng != null) {
        OSpng.src = '/assets/media/4.0/OS' + Systemicon;
    }
    osPageFix();
    function osPageFix() {
        if (document.getElementById('new-os-png') == null) return;
        console.log('> Changing OS icon...')
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
        if (winWidth <= "750") {
            document.getElementById('new-os-png').src = '/assets/media/4.0/' + Systemicon;
        } else {
            document.getElementById('new-os-png').src = '/assets/media/4.0/OS' + Systemicon;
        }
    }
    if (OStit != null) {
        if (navigator.userAgent.indexOf("like Mac") != -1) {Systemicon = "iOS"} else if (navigator.userAgent.indexOf("Mac") != -1) {Systemicon = "MacOS"}
        OStit.innerHTML = Systemicon.replaceAll('.png', '');
    }
    if (OSstory != null) {
        if (Systemicon == 'windows.png') {
            OSstory.innerHTML = 'Microsoft Windows (also referred to as Windows or Win) is a graphical operating system developed and published by Microsoft. It provides a way to store files, run software, play games, watch videos, and connect to the Internet. Microsoft Windows was first introduced with version 1.0 on November 10, 1983. Over a dozen versions of Windows were released after that, including the current version, Windows 11. <br> Starting with Windows XP, Microsoft has published various editions of Windows. Each of these Windows editions has the same core operating system, but some editions have additional features, at an additional cost. The two most common editions of Windows for home computers are Windows Home and Windows Professional.';
        } else if (Systemicon == 'iOS') {
            OSstory.innerHTML = 'Originally known as the iPhone OS, iOS is the operating system that runs on the Apple iPhone, Apple iPad, and Apple iPad Touch devices. It was first introduced by Steve Jobs during the 2007 WWDC introducing the iPhone. iOS is the second-most popular platform for mobile devices, only slightly edged out by Android.';
        } else if (Systemicon == 'MacOS') {
            OSstory.innerHTML = 'macOS is an operating system designed for the Apple Macintosh computer. It was developed by Apple, who also created the Apple I and other more modern products, including the iPod, iPhone, and iPad. The main competition to the macOS is the Windows operating system, the most popular OS by a large margin. The first version of the macOS, part of the "Classic" macOS series, was originally released in the mid-1980s. It did not possess a command line and could only run one application at a time. The first version of the Macintosh operating system to be named "macOS" was version 7.6. The most recent version is called macOS X, or macOS.';
        } else if (Systemicon == 'android.png') {
            OSstory.innerHTML = "Initially founded by Andy Rubin in October 2003 and later acquired by Google on August 17, 2005. Android is a free Linux based platform and is an open software stack with an operating system, middleware, and applications. It was originally developed by Google and released on November 5, 2007, for mobile platforms. T-Mobile's G1 phone (HTC Dream) is the first phone to be released to the public with Google Android on September 23, 2008. Android is a strong rival to the Apple iOS, a closed operating system and platform used on the Apple iPhone.";
        } else if (Systemicon == 'linux.png') {
            OSstory.innerHTML = "Linux (pronounced 'linnucks') is a monolithic, open-source kernel, and a family of operating systems based on that kernel. The Linux kernel was originally developed by Linus Torvalds, who announced it on the comp.os.minix newsgroup on August 25, 1991. Since then, it's been ported to computer architectures including x86-64, x86, ARM, RISC, and DEC Alpha. It is licensed under version 2 of the GPL. Developers have access to all Linux source code, and are permitted under the license conditions to modify and distribute it.";
        } else if (Systemicon == 'WiiU.png') {
            OSstory.innerHTML = 'Released in 2012, the Wii U was a popular video game console sold by Nintendo. The Wii U is similar to its predecessor, the Wii, but introduced new hardware specifications, new exclusive games, and a unique controller with a portable touch screen, called the Gamepad.';
        } else if (Systemicon == 'unknown.png') {
            OSstory.innerHTML = "We're sorry, but your OS wasn't recognized and we can't let you see it's history or reccomend you tools for it. If you're using an agent switcher, turn it off or change the OS to see this page correctly. Otherwise, your OS is not a common one and it's not supported by X-Center. Sorry again and have a good experience with the site.";
        }
    }
    if (document.getElementById('new-os-tool-remember') != null) {if (Systemicon == 'windows.png') {document.getElementById('new-os-tool-remember').classList.remove('hided')}}
    function OStools(id) {
        if (id == 'new-os-tool-1') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Parsec';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://builds.parsecgaming.com/package/parsec-windows.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://builds.parsecgaming.com/package/parsec-windows.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://parsec.app");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://parsec.app");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Discord';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3Ffingerprint%3D953001653500518470.MfiuhD8TZ4U6MtInoO_hli844hY%26attemptId%3Deed98504-f84c-4109-9030-6aaaf66645d1&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Il%20luogo%20ideale%20per%20parlare%20con%20amici%20e%20community.&efr=1");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3Ffingerprint%3D953001653500518470.MfiuhD8TZ4U6MtInoO_hli844hY%26attemptId%3Deed98504-f84c-4109-9030-6aaaf66645d1&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Il%20luogo%20ideale%20per%20parlare%20con%20amici%20e%20community.&efr=1");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://discord.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://discord.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'GIMP';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://download.gimp.org/mirror/pub/gimp/v2.10/osx/gimp-2.10.30-x86_64.dmg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://download.gimp.org/mirror/pub/gimp/v2.10/osx/gimp-2.10.30-x86_64.dmg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.gimp.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.gimp.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'TeraBox';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.dubox.drive");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.dubox.drive");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.terabox.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.terabox.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'GIMP';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://flathub.org/repo/appstream/org.gimp.GIMP.flatpakref");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://flathub.org/repo/appstream/org.gimp.GIMP.flatpakref");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.gimp.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.gimp.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-2') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'TeraCopy';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://www.codesector.com/files/teracopy.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://www.codesector.com/files/teracopy.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.codesector.com/teracopy");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.codesector.com/teracopy");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Edge';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://microsoftedgewelcome.microsoft.com/emmx/edge-download");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://microsoftedgewelcome.microsoft.com/emmx/edge-download");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.microsoft.com/edge");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.microsoft.com/edge");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'qBitTorrent';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent-4.3.9.dmg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent-4.3.9.dmg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.qbittorrent.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.qbittorrent.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Rewards';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://surveys.google.com/google-opinion-rewards/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://surveys.google.com/google-opinion-rewards/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Parsec';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://builds.parsecgaming.com/package/parsec-linux.deb");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://builds.parsecgaming.com/package/parsec-linux.deb");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://parsec.app/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://parsec.app/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-3') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Visual Studio Code';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://az764295.vo.msecnd.net/stable/c722ca6c7eed3d7987c0d5c3df5c45f6b15e77d1/VSCodeUserSetup-x64-1.65.2.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://az764295.vo.msecnd.net/stable/c722ca6c7eed3d7987c0d5c3df5c45f6b15e77d1/VSCodeUserSetup-x64-1.65.2.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://code.visualstudio.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://code.visualstudio.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'GroupMe';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://itunes.apple.com/us/app/groupme-for-iphone/id392796698?mt=8");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://itunes.apple.com/us/app/groupme-for-iphone/id392796698?mt=8");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://groupme.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://groupme.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Drive';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://dl.google.com/drive-file-stream/GoogleDrive.dmg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://dl.google.com/drive-file-stream/GoogleDrive.dmg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://drive.google.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://drive.google.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'WeWard';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.weward");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.weward");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://weward.fr/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://weward.fr/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Audacity';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://github.com/audacity/audacity/releases/download/Audacity-3.1.3/audacity-linux-3.1.3-x86_64.AppImage");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://github.com/audacity/audacity/releases/download/Audacity-3.1.3/audacity-linux-3.1.3-x86_64.AppImage");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.audacityteam.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.audacityteam.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-4') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'IMG Burn';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://www.imgburn.com/index.php?act=download");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://www.imgburn.com/index.php?act=download");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.imgburn.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.imgburn.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'CapCut';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://apps.apple.com/us/app/viamaker/id1500855883");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://apps.apple.com/us/app/viamaker/id1500855883");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.capcut.net/app");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.capcut.net/app");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Chrome';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://dl.google.com/dl/chrome/mac/legacy10_9/GGRO/googlechrome.dmg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://dl.google.com/dl/chrome/mac/legacy10_9/GGRO/googlechrome.dmg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.google.it/intl/it/chrome/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.google.it/intl/it/chrome/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Macrodroid';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.macrodroid.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.macrodroid.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'OpenShot';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://github.com/OpenShot/openshot-qt/releases/download/v2.6.1/OpenShot-v2.6.1-x86_64.AppImage");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://github.com/OpenShot/openshot-qt/releases/download/v2.6.1/OpenShot-v2.6.1-x86_64.AppImage");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.openshot.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.openshot.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-5') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Rufus';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://github.com/pbatard/rufus/releases/download/v3.18/rufus-3.18.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://github.com/pbatard/rufus/releases/download/v3.18/rufus-3.18.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://rufus.ie/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://rufus.ie/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Xbox';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://apps.apple.com/app/xbox/id736179781");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://apps.apple.com/app/xbox/id736179781");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.xbox.com/apps/xbox-app-for-mobile");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.xbox.com/apps/xbox-app-for-mobile");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Magnet';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=441258766&mt=12");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=441258766&mt=12");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://magnet.crowdcafe.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://magnet.crowdcafe.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Ultimate VPN';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.open.hotspot.vpn.free");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.open.hotspot.vpn.free");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.open.hotspot.vpn.free");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.open.hotspot.vpn.free");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'LibreOffice';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://libreoffice.mirror.garr.it/libreoffice/stable/7.3.1/deb/x86_64/LibreOffice_7.3.1_Linux_x86-64_deb.tar.gz");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://libreoffice.mirror.garr.it/libreoffice/stable/7.3.1/deb/x86_64/LibreOffice_7.3.1_Linux_x86-64_deb.tar.gz");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://libreoffice.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://libreoffice.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-6') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Recuva';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://download.ccleaner.com/rcsetup153.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://download.ccleaner.com/rcsetup153.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.ccleaner.com/recuva");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.ccleaner.com/recuva");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'LifeSum';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://app.adjust.com/mzt4tv?engagement_type=fallback_click");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://app.adjust.com/mzt4tv?engagement_type=fallback_click");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://lifesum.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://lifesum.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Gog Galaxy';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://gog-cdn-lumen.secure2.footprint.net/open/galaxy/client/2.0.46.129/galaxy_client_2.0.46.129.pkg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://gog-cdn-lumen.secure2.footprint.net/open/galaxy/client/2.0.46.129/galaxy_client_2.0.46.129.pkg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.gog.com/galaxy");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.gog.com/galaxy");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Parsec';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=tv.parsec.client");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=tv.parsec.client");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://parsec.app/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://parsec.app/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'GParted';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'alert("sudo apt-get install gparted");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'alert("sudo apt-get install gparted");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://gparted.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://gparted.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else {
            return;
        }
    }
    if (OStool1 != null) {
        console.log('> Choosing Tools for your OS...')
        if (Systemicon == 'windows.png') {
            OStool1.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1MSIgaGVpZ2h0PSIxOTQyIiB2aWV3Qm94PSIwIDAgMTI1MSAxOTQyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGZpbGxSdWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0yMzUuOTEgMTMzMy41NmM1My41NCAzMi44NiA3ODYuMiA0ODQuMjYgNzg2LjIgNDg0LjI2czc2LjYyIDYwIDE1My44MyAyMi43OWM3Ny4yMS0zNy4yMSA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTRjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42Mi03NDMuNDgtNDU4LjYycy02Mi4yOS00OS4yNy0xMzYuNzMtMTcuMDlDMTYxLjQ3IDQ0LjAxIDE1OSAxMTUuNTIgMTU5IDEzNC4zMnYxMDc4LjE0Yy41MiAxNi4yNSAyLjQzIDM3LjgxIDguNTUgNDkuODkgMTAuNjggMjEuMDkgMTQuODIgMzguMzUgNjguMzYgNzEuMjF6TTQ4NyA0ODcuMzdsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNDg3LjM3eiIgZmlsbD0iIzI2QUJGRiIvPgogICAgPHBhdGggZD0iTTAgMTI5OS4zN2MuNTIgMTYuMjUgMi40MyAzOS4yIDguNTUgNTEuMjcgMTAuNjggMjEuMSAxNC44MiAzOC4zNiA2OC4zNiA3MS4yMnM3ODYuMiA0ODQuMjUgNzg2LjIgNDg0LjI1IDc2LjYyIDYwLjA2IDE1My44MyAyMi43OWM3Ny4yMS0zNy4yNyA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTVjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42LTc0My40OC00NTguNlMxNTEuMzUgNjggNzYuOTEgMTAwLjEyIDAgMjAzLjgyIDAgMjIyLjYxdjEwNzYuNzZ6bTMyNy03MjMuNzFsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNTc1LjY2eiIgZmlsbD0iI0Y1MDA0OSIvPgogIDwvZz4KPC9zdmc+Cg==';
            OStool2.src = 'https://1.bp.blogspot.com/-Lu-J0GQDC4E/X6AuK8qJKpI/AAAAAAAAXSc/ZqwKNtiBLg894r8sBu1iHbQbKNCI_NGpwCLcBGAsYHQ/s680/Softwareanddriver.com%2B-%2BTeraCopy%2B2021%2BFree%2BDownload.png';
            OStool3.src = 'https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj';
            OStool4.src = 'https://static.techspot.com/images2/downloads/topdownload/2014/05/ImgBurn_logo.png';
            OStool5.src = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Rufus-logo.png';
            OStool6.src = 'https://m.media-amazon.com/images/I/51vAzs+BboS._SL1280_.jpg';
        } else if (Systemicon == 'iOS') {
            OStool1.src = 'https://play-lh.googleusercontent.com/xQ-meXSBylIU8VKA7yUQXDwRu99JX8ic7mAsM4sBidjRgtMyhBDmYD4CpATqrdc1SA';
            OStool2.src = 'https://play-lh.googleusercontent.com/VYvJqGnrQiKkbbyLyMeiL-GM3go4tBIA64uVEGQazLXD4p_M3F45kHyt42o_6d5VXA';
            OStool3.src = 'https://store-images.s-microsoft.com/image/apps.22864.13510798886416455.269db5cf-0e75-4d82-8a6c-5ddabb31c6ef.87c84f5b-d52a-462f-8f13-2a572fb562f0?mode=scale&q=90&h=200&w=200&background=%2300aff0';
            OStool4.src = 'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/47/1b/e6/471be650-72d1-6b36-ee35-8dce3e0042ea/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png';
            OStool5.src = 'https://play-lh.googleusercontent.com/ipvfgPBRcDz7Btg9YtlWYHRo05BdTt6WAB-gm2B6b-57PGRX6oAWv940Sp3JHVuMJA';
            OStool6.src = 'https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/db/0e/de/db0edee4-6f6b-ebdb-8d69-23f0b98bed80/AppIcon-green-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png';
        } else if (Systemicon == 'MacOS') {
            OStool1.src = 'https://www.pcprofessionale.it/wp-content/uploads/2019/04/GIMP.png';
            OStool2.src = 'https://www.aranzulla.it/wp-content/contenuti/2021/10/s7Y6171SZdygc0-1200x628.jpg';
            OStool3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png';
            OStool4.src = 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk';
            OStool5.src = 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/04/9a/1a/049a1aec-9b8f-4810-f8c6-0d0446e87cf1/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/1200x630bb.png';
            OStool6.src = 'https://tecnolocura.es/wp-content/uploads/2020/10/GOG-Galaxy-2.0-para-todos-tus-juegos-en-un-solo-lugar-tecnolocura-2.jpg';
        } else if (Systemicon == 'android.png') {
            OStool1.src = 'https://play-lh.googleusercontent.com/Tv3h9IHUliBayyGRxcmzOICwPGfbB8M-rnHDpzMlGM5YPS_-LytZO6GccsVPszse2Zqr';
            OStool2.src = 'https://play-lh.googleusercontent.com/yeB9XKBeHfHChSDwjsFztdBYY-jcdgUpVQwtahFE6AeoKhKHowZMm9wJ4-W8VvML2w';
            OStool3.src = 'https://media.cdnandroid.com/item_images/1051630/imagen-weward-gagnez-en-marchant-0thumb.jpg';
            OStool4.src = 'https://play-lh.googleusercontent.com/PioDUVeFbkSbenRZxrKoUErvC9hEQksRRQhtp39vytQtGXgjpIkZqu1ScJy-MoRUAAE=s180-rw';
            OStool5.src = 'https://lh3.googleusercontent.com/xqXWCwIrCqiAH0eGPa5EA2Xx2Onr24wE_jQPBKcc1NCJI9SZmg9eBIFyQqLo_UWxeXw';
            OStool6.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1MSIgaGVpZ2h0PSIxOTQyIiB2aWV3Qm94PSIwIDAgMTI1MSAxOTQyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGZpbGxSdWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0yMzUuOTEgMTMzMy41NmM1My41NCAzMi44NiA3ODYuMiA0ODQuMjYgNzg2LjIgNDg0LjI2czc2LjYyIDYwIDE1My44MyAyMi43OWM3Ny4yMS0zNy4yMSA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTRjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42Mi03NDMuNDgtNDU4LjYycy02Mi4yOS00OS4yNy0xMzYuNzMtMTcuMDlDMTYxLjQ3IDQ0LjAxIDE1OSAxMTUuNTIgMTU5IDEzNC4zMnYxMDc4LjE0Yy41MiAxNi4yNSAyLjQzIDM3LjgxIDguNTUgNDkuODkgMTAuNjggMjEuMDkgMTQuODIgMzguMzUgNjguMzYgNzEuMjF6TTQ4NyA0ODcuMzdsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNDg3LjM3eiIgZmlsbD0iIzI2QUJGRiIvPgogICAgPHBhdGggZD0iTTAgMTI5OS4zN2MuNTIgMTYuMjUgMi40MyAzOS4yIDguNTUgNTEuMjcgMTAuNjggMjEuMSAxNC44MiAzOC4zNiA2OC4zNiA3MS4yMnM3ODYuMiA0ODQuMjUgNzg2LjIgNDg0LjI1IDc2LjYyIDYwLjA2IDE1My44MyAyMi43OWM3Ny4yMS0zNy4yNyA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTVjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42LTc0My40OC00NTguNlMxNTEuMzUgNjggNzYuOTEgMTAwLjEyIDAgMjAzLjgyIDAgMjIyLjYxdjEwNzYuNzZ6bTMyNy03MjMuNzFsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNTc1LjY2eiIgZmlsbD0iI0Y1MDA0OSIvPgogIDwvZz4KPC9zdmc+Cg==';
        } else if (Systemicon == 'linux.png') {
            OStool1.src = 'https://www.pcprofessionale.it/wp-content/uploads/2019/04/GIMP.png';
            OStool2.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1MSIgaGVpZ2h0PSIxOTQyIiB2aWV3Qm94PSIwIDAgMTI1MSAxOTQyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGZpbGxSdWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0yMzUuOTEgMTMzMy41NmM1My41NCAzMi44NiA3ODYuMiA0ODQuMjYgNzg2LjIgNDg0LjI2czc2LjYyIDYwIDE1My44MyAyMi43OWM3Ny4yMS0zNy4yMSA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTRjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42Mi03NDMuNDgtNDU4LjYycy02Mi4yOS00OS4yNy0xMzYuNzMtMTcuMDlDMTYxLjQ3IDQ0LjAxIDE1OSAxMTUuNTIgMTU5IDEzNC4zMnYxMDc4LjE0Yy41MiAxNi4yNSAyLjQzIDM3LjgxIDguNTUgNDkuODkgMTAuNjggMjEuMDkgMTQuODIgMzguMzUgNjguMzYgNzEuMjF6TTQ4NyA0ODcuMzdsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNDg3LjM3eiIgZmlsbD0iIzI2QUJGRiIvPgogICAgPHBhdGggZD0iTTAgMTI5OS4zN2MuNTIgMTYuMjUgMi40MyAzOS4yIDguNTUgNTEuMjcgMTAuNjggMjEuMSAxNC44MiAzOC4zNiA2OC4zNiA3MS4yMnM3ODYuMiA0ODQuMjUgNzg2LjIgNDg0LjI1IDc2LjYyIDYwLjA2IDE1My44MyAyMi43OWM3Ny4yMS0zNy4yNyA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTVjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42LTc0My40OC00NTguNlMxNTEuMzUgNjggNzYuOTEgMTAwLjEyIDAgMjAzLjgyIDAgMjIyLjYxdjEwNzYuNzZ6bTMyNy03MjMuNzFsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNTc1LjY2eiIgZmlsbD0iI0Y1MDA0OSIvPgogIDwvZz4KPC9zdmc+Cg==';
            OStool3.src = 'https://it.wizcase.com/wp-content/uploads/2020/05/Audacity-logo.jpg';
            OStool4.src = 'https://cdn.neow.in/news/images/uploaded/2016/08/1472576721_openshot_story.jpg';
            OStool5.src = 'https://www.geekoo.it/wp-content/uploads/2016/06/Libre-Office.png';
            OStool6.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Faenza-gparted.svg/1200px-Faenza-gparted.svg.png';
        }
    }
    function AddStoreApp(id, name, desc, titles, icon) {
        console.log('> Adding Store App...');
        document.getElementById('new-shop-empty').classList.add('hided');
        document.getElementById('new-shop-apps').classList.remove('hided');
        if (icon == null || icon.length < 1 || icon == 'undefined') icon = 'https://xcenter.netlify.app/assets/media/app.png';
        if (name == null || name.length < 1 || name == 'undefined') name = 'Unknown';
        if (titles == null || titles.length < 1 || titles == 'undefined') titles = name;
        if (desc == null || desc.length < 1 || desc == 'undefined') desc = 'No Desc Provided';
        if (id == null || id.length <= 0) return;
        if (document.getElementById(id) != null) return false;
        var newStoreApp = document.createElement('div');
        newStoreApp.setAttribute("id", id);
        newStoreApp.setAttribute("class", "new-shop-card");
        newStoreApp.setAttribute("onclick", 'location.href = "/shop/app/?id=' + id + '";');
        document.getElementById("new-shop-apps").appendChild(newStoreApp);
        document.getElementById(id).innerHTML = "<titles class='hided'>" + titles + "</titles>\n<img src='" + icon + "' alt=''>\n<h3>" + name + "</h3>\n<p>" + desc + "</p>";
        console.log('> Store App Added!')
    }
    function StoreProcessApp(input) {
        var tempElement = document.createElement('div');
        tempElement.innerHTML = input;
        StoreProcessAppAfter();
        function StoreProcessAppAfter() {
            console.log('> Processing App...')
            var Packs = tempElement.querySelector('apps').innerText || tempElement.querySelector('apps').textContent;
            var ProcessedAppID = tempElement.querySelector('id').innerText || tempElement.querySelector('id').textContent;
            fetch('https://raw.githubusercontent.com/Xarber/xcenter/store/' + ProcessedAppID + '.app').then(response => response.text()).then(data => {
                localStorage.removeItem('getTxtTMP');
                localStorage.setItem('getTxtTMP', data);
                var newAppContent = localStorage.getItem('getTxtTMP');
                var tempElementID = document.createElement('div');
                tempElementID.innerHTML = newAppContent;
                var ProcessedAppNAME = tempElementID.querySelector('name').innerHTML;
                var ProcessedAppDESC = tempElementID.querySelector('desc').innerHTML;
                var ProcessedAppTT = tempElementID.querySelector('titles').innerHTML;
                var ProcessedAppICON = tempElementID.querySelector('icon').innerHTML;
                if (ProcessedAppNAME == null || ProcessedAppNAME.length < 1) ProcessedAppNAME = 'Unknown';
                if (ProcessedAppDESC == null || ProcessedAppDESC.length < 1) ProcessedAppDESC = 'No Desc Provided';
                if (ProcessedAppTT == null || ProcessedAppTT.length < 1) ProcessedAppTT = ProcessedAppNAME;
                if (ProcessedAppICON == null || ProcessedAppICON.length < 1) ProcessedAppICON = 'https://xcenter.netlify.app/assets/media/app.png';
                var id = tempElement.querySelector('id');
                var name = tempElementID.querySelector('name');
                var desc = tempElementID.querySelector('desc');
                var title = tempElementID.querySelector('titles');
                var icon = tempElementID.querySelector('icon');
                Packs = --Packs;
                AddStoreApp(ProcessedAppID, ProcessedAppNAME, ProcessedAppDESC, ProcessedAppTT, ProcessedAppICON);
                id.parentNode.removeChild(id);
                name.parentNode.removeChild(name);
                desc.parentNode.removeChild(desc);
                title.parentNode.removeChild(title);
                icon.parentNode.removeChild(icon);
                if (Packs > 0) StoreProcessAppAfter();
                localStorage.removeItem('getTxtTMP')
            });
        }
    }
    function StoreApp(input) {
        if (input == null || input == 'undefined' || input == '404: Not Found' || input.length < 1) return;
        var tempElement = document.createElement('div');
        tempElement.innerHTML = input;
        var StoreAppNAME = tempElement.querySelector('name').innerHTML || tempElement.querySelector('name').textContent;
        var StoreAppDESC = tempElement.querySelector('desc').innerHTML || tempElement.querySelector('desc').textContent;
        var StoreAppICON = tempElement.querySelector('icon').innerHTML || tempElement.querySelector('icon').textContent;
        var StoreAppDOWN = tempElement.querySelector('down').innerHTML || tempElement.querySelector('down').textContent;
        var StoreAppOPEN = tempElement.querySelector('link').innerHTML || tempElement.querySelector('link').textContent;
        if (StoreAppNAME == null || StoreAppNAME.length < 1) StoreAppNAME = 'Unknown';
        if (StoreAppDESC == null || StoreAppDESC.length < 1) StoreAppDESC = 'No Desc Provided';
        if (StoreAppICON == null || StoreAppICON.length < 1) StoreAppICON = '/assets/media/4.0/empty.png';
        if (StoreAppDOWN == null || StoreAppDOWN.length < 1) {document.getElementById('new-store-app-actions').setAttribute('style', 'height: 75px;');document.getElementById('new-store-app-down').classList.add('hided')};
        if (StoreAppOPEN == null || StoreAppOPEN.length < 1) {document.getElementById('new-store-app-actions').setAttribute('style', 'height: 75px;');document.getElementById('new-store-app-open').classList.add('hided')};
        document.getElementById('new-store-app-name').innerHTML = StoreAppNAME;
        document.getElementById('new-store-app-desc').innerHTML = StoreAppDESC;
        document.getElementById('new-store-app-img').src = StoreAppICON;
        document.getElementById('new-store-app-down').setAttribute('onclick', 'window.open("' + StoreAppDOWN + '")');
        document.getElementById('new-store-app-open').setAttribute('onclick', 'window.open("' + StoreAppOPEN + '")');
        var StoreAppSCR1 = tempElement.querySelector('scr1').innerHTML || tempElement.querySelector('scr1').textContent;
        var StoreAppSCR2 = tempElement.querySelector('scr2').innerHTML || tempElement.querySelector('scr2').textContent;
        var StoreAppSCR3 = tempElement.querySelector('scr3').innerHTML || tempElement.querySelector('scr3').textContent;
        var StoreAppSCR4 = tempElement.querySelector('scr4').innerHTML || tempElement.querySelector('scr4').textContent;
        var StoreAppSCR5 = tempElement.querySelector('scr5').innerHTML || tempElement.querySelector('scr5').textContent;
        var StoreAppSCR6 = tempElement.querySelector('scr6').innerHTML || tempElement.querySelector('scr6').textContent;
        if (StoreAppSCR1 != null || StoreAppSCR1 != 'undefined' || StoreAppSCR1 != '404: Not Found' || StoreAppSCR1.length > 0) {document.getElementById('new-store-app-screen-1').src = StoreAppSCR1} else {document.getElementById('new-store-app-screen-1').classList.add('hided')}
        if (StoreAppSCR2 != null || StoreAppSCR2 != 'undefined' || StoreAppSCR2 != '404: Not Found' || StoreAppSCR1.length > 0) {document.getElementById('new-store-app-screen-2').src = StoreAppSCR2} else {document.getElementById('new-store-app-screen-2').classList.add('hided')}
        if (StoreAppSCR3 != null || StoreAppSCR3 != 'undefined' || StoreAppSCR3 != '404: Not Found' || StoreAppSCR1.length > 0) {document.getElementById('new-store-app-screen-3').src = StoreAppSCR3} else {document.getElementById('new-store-app-screen-3').classList.add('hided')}
        if (StoreAppSCR4 != null || StoreAppSCR4 != 'undefined' || StoreAppSCR4 != '404: Not Found' || StoreAppSCR1.length > 0) {document.getElementById('new-store-app-screen-4').src = StoreAppSCR4} else {document.getElementById('new-store-app-screen-4').classList.add('hided')}
        if (StoreAppSCR5 != null || StoreAppSCR5 != 'undefined' || StoreAppSCR5 != '404: Not Found' || StoreAppSCR1.length > 0) {document.getElementById('new-store-app-screen-5').src = StoreAppSCR5} else {document.getElementById('new-store-app-screen-5').classList.add('hided')}
        if (StoreAppSCR6 != null || StoreAppSCR6 != 'undefined' || StoreAppSCR6 != '404: Not Found' || StoreAppSCR1.length > 0) {document.getElementById('new-store-app-screen-6').src = StoreAppSCR6} else {document.getElementById('new-store-app-screen-6').classList.add('hided')}
        if (document.getElementById('new-store-app-screen-1').classList.contains('hided') && document.getElementById('new-store-app-screen-2').classList.contains('hided') && document.getElementById('new-store-app-screen-3').classList.contains('hided') && document.getElementById('new-store-app-screen-4').classList.contains('hided') && document.getElementById('new-store-app-screen-5').classList.contains('hided') && document.getElementById('new-store-app-screen-6').classList.contains('hided')) {document.getElementById('new-store-app-screens-empty').classList.remove('hided');}
    }
    if (location.href.indexOf('/shop/') != -1) {
        if ((location.href.indexOf('/shop/app/?id=X70015') != -1 && CommonJS.params('get', 'id', '0').length == 6) || localStorage.getItem('XCenterTemporaryStoreAccess') == 'true') {
            localStorage.setItem('XCenterTemporaryStoreAccess', 'false');
        } else {
            location.href = '/issues/shop.html';
        }
    }
    if (location.href.indexOf('/shop/') != -1) {
        if (location.href.indexOf('/app/') != -1) {
            var AppID = CommonJS.params('get', 'id', '0');
            fetch('https://raw.githubusercontent.com/Xarber/xcenter/store/' + AppID + '.app').then(response => response.text()).then(data => {StoreApp(data)});
        } else {
            fetch('https://raw.githubusercontent.com/Xarber/xcenter/store/apps.apl').then(response => response.text()).then(data => {StoreProcessApp(data)});
        }
    }
    if (ChangelogHide == 'false' && (localStorage.getItem('XChangelog' + xversion) == null || localStorage.getItem('XChangelog' + xversion) == false)) changelog.open();
    //RAINBOW_FOOTER_EASTER_EGG
    if (localStorage.getItem('XCenterVersionSelectorEasterEgg') == 'true') {
        document.querySelector('.new-footer').classList.add('rainbow');
        if (document.getElementById('new-footer-img-easter') != null) {
            document.getElementById('new-footer-img-easter').innerHTML = 'true';
        }
    } else {
        document.querySelector('.new-footer').classList.remove('rainbow');
        if (document.getElementById('new-footer-img-easter') != null) {
            document.getElementById('new-footer-img-easter').innerHTML = 'false';
        }
    }
    console.log(
        '%cAll X-Center Scripts Executed Succeffully!',
        'padding: 10px;background: rgb(58,105,180);background: linear-gradient(90deg, rgba(58,105,180,1) 0%, rgba(255,106,0,1) 100%);border-radius: 15px;'
        );
} else {
    localStorage.setItem('XCenterColdBootVersion', localStorage.getItem('settings-coldbootversion'))
    console.log(
        '%cRunning On External Page / Old Version',
        'background-color: gray;padding: 10px;border-radius: 15px;'
    );
    if (localStorage.getItem('XCenterColdBootVersion') != '5.0' && (location.href.indexOf('xcenter') != -1 || location.href.indexOf('127.0.0.1') != -1)) {
        console.log(
            '%cX-Center ColdBoot Version',
            'padding: 10px;background-color: gray;border-radius: 15px;'
        );
        if (localStorage.getItem('XCenterColdBootVersionOptimize') != 'true') {
            CommonJS.replaceURL(window.location.pathname.replaceAll('/version/' + localStorage.getItem('XCenterColdBootVersion'), ''))
        }
        var GoBackToNewVersion = document.createElement('button');
        GoBackToNewVersion.setAttribute('style', 'position: fixed;top: 0;right: 0;width: 50px;heigth: 50px;background-color: rgba(255, 255, 255, 0.5); !important;padding: 10 !important;border: 0px;border-radius: 0px 0px 0px 15px;z-index: 100000000000000;');
        GoBackToNewVersion.setAttribute('onclick', 'localStorage.setItem("XCenterColdBootVersion", "5.0");localStorage.setItem("settings-coldbootversion", "5.0");window.location = "/";')
        GoBackToNewVersion.setAttribute('id', 'new-XCenterGoBackToNewVersion');
        document.body.appendChild(GoBackToNewVersion)
        var GoBackToNewVersionIMG = document.createElement('img');
        GoBackToNewVersionIMG.setAttribute('src', '/assets/media/logo.png')
        GoBackToNewVersionIMG.setAttribute('style', 'width: 100%;heigth: 100%;')
        document.getElementById('new-XCenterGoBackToNewVersion').appendChild(GoBackToNewVersionIMG);
    }
}
console.log(
    '%cCode Execution Ended Succeffully!',
    'padding: 10px;background: rgb(58,105,180);background: linear-gradient(90deg, rgba(58,105,180,1) 0%, rgba(253,209,29,1) 50%, rgba(255,106,0,1) 100%);border-radius: 15px;'
)

//COMMON.JS SCRIPT ENDED -- XCENTERSCRIPT STARTED
//document.referrer
var doctitle = document.title;
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
var setupstep = 0;
var nextsetupstep = 1;
var lastsetupstep = 6;
var theme, changelog, notifications, runbatchscripts, coldbootversion; //FINAL SETTINGS VARS;
var autotheme, darktheme, tmpchangelog, majorchangelog, tmpnotifications, silentnotifications, currenttheme, homebutton; //TMP SETTINGS VARS;
var userData;
if (document.getElementById("html") == null) document.documentElement.setAttribute("id", "html");
var xcenter = {
    app: {
        download: function() {
            fetch('https://raw.githubusercontent.com/Xarber/xcenter/app/appDownloadLink.lnk').then(response => response.text()).then(data => {
                var tmp = document.createElement('a');
                tmp.setAttribute('href', data);
		    tmp.setAttribute('target', '_blank')
                tmp.setAttribute('download', 'download');
                tmp.click();
            });
        }
    },
    setup: {
        show: function() {
            if (location.href.indexOf('file:///') != -1) {
                document.getElementById('xcenter-pagecontent-desktoptransfer').classList.remove('hided');
                setTimeout(() => {
                    document.getElementById('xcenter-userprofile').classList.add('hided');
                    if (document.getElementById('new-changelog') != null) document.getElementById('new-changelog').classList.add('hided');
                    document.querySelector('footer').classList.add('hided');
                    document.getElementById('xcenter-navbar').classList.add('hided');
                    document.querySelector('.nav-compenser').classList.add('hided');
                    if (document.getElementById('new-xcenter-apps-limits-bkg') != null) document.getElementById('new-xcenter-apps-limits-bkg').classList.add('hided');
                    const pages = document.querySelectorAll('.xcenter-pagecontent');
                    for (const pag of pages) {
                        pag.classList.add('hided');
                    }
                    document.getElementById('xcenter-pagecontent-desktoptransfer').classList.remove('hided');
                }, 300)
                return true;
            }
            //if (window.location.pathname != "/setup/") window.location = "/setup/";
            if (currentPage() != "xcenter-pagecontent-setup") switchPage('setup');
            document.getElementById('xcenter-userprofile').classList.add('hided');
            if (document.getElementById('new-changelog') != null) document.getElementById('new-changelog').classList.add('hided');
            document.querySelector('footer').classList.add('hided');
            document.getElementById('xcenter-navbar').classList.add('hided');
            document.querySelector('.nav-compenser').classList.add('hided');
            if (document.getElementById('new-xcenter-apps-limits-bkg') != null) document.getElementById('new-xcenter-apps-limits-bkg').classList.add('hided');
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                var oldsetupstepcontent = document.getElementById("setup-step-" + afteri).innerHTML;
                if (document.getElementById("setup-selected-" + afteri).innerHTML != "") {
                    document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML.replaceAll(document.getElementById('setup-selected-' + afteri).innerHTML, '')
                    document.getElementById('setup-selected-' + afteri).innerHTML = "";
                }
            }
            document.getElementById('setup-review').classList.add('hided');
            document.getElementById('setup-0').classList.remove('hided');
        },
        next: function(id, selection) {
            id = id ?? setupstep;
            setupstep = id.replaceAll('setup-', '');
            nextsetupstep = +setupstep + 1;
            if (document.getElementById("setup-" + nextsetupstep) != null) {
                document.getElementById("setup-" + setupstep).classList.add('hided');
                document.getElementById("setup-" + nextsetupstep).classList.remove('hided');
                if (selection != null) document.getElementById("setup-selected-" + setupstep).innerHTML = selection;
                ++setupstep;
                ++nextsetupstep;
            } else if (setupstep == lastsetupstep) {
                document.getElementById("setup-" + setupstep).classList.add('hided');
                document.getElementById("setup-finish").classList.remove('hided');
                if (selection != null) document.getElementById("setup-selected-" + setupstep).innerHTML = selection;
                nextsetupstep = lastsetupstep;
                setupstep = nextsetupstep;
            }
        },
        back: function(id) {

        },
        default: function() {
            document.getElementById('setup-0').classList.add('hided');
            document.getElementById('setup-finish').classList.remove('hided');
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                var oldsetupstepcontent = document.getElementById("setup-selected-" + afteri).innerHTML;
                document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML.replaceAll(oldsetupstepcontent, '') + document.getElementById("setup-step-" + afteri).innerHTML;
                document.getElementById("setup-selected-" + afteri).innerHTML = document.getElementById("setup-step-" + afteri).innerHTML;
            }
        },
        review: function() {
            document.getElementById('setup-finish').classList.add('hided')
            document.getElementById('setup-review').classList.remove('hided');
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                var oldsetupstepcontent = document.getElementById("setup-selected-" + afteri).innerHTML;
                if (oldsetupstepcontent == "") oldsetupstepcontent = document.getElementById("setup-step-" + afteri).innerHTML;
                document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML.replaceAll(oldsetupstepcontent, '') + document.getElementById("setup-selected-" + afteri).innerHTML;
            }
        },
        finish: function() {
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                var name = document.getElementById('setup-step-name-' + afteri).innerHTML;
                var value = document.getElementById('setup-selected-' + afteri).innerHTML;
                localStorage.setItem(name, value);
            }
            if (document.getElementById('xcenter-setup-export').checked) {
                CommonJS.localStorageBackup.make('settings');
            }
            localStorage.setItem('xcenter-setup', 'finished');
            switchPage('index');
            location.reload();
        },
        convert: function() {
            var tmptheme = localStorage.getItem('settings-theme');
            var tmpchangelog = localStorage.getItem('settings-changelog');
            var tmpnotify = localStorage.getItem('settings-shownotifications');
            var tmpcoldboot = localStorage.getItem('settings-cbversion');
            var tmpbatch = localStorage.getItem('settings-scripts');
            var tmphomebtn = localStorage.getItem('settings-homebtn');
            localStorage.removeItem('settings-theme');
            localStorage.removeItem('settings-changelog');
            localStorage.removeItem('settings-shownotifications');
            localStorage.removeItem('settings-cbversion');
            localStorage.removeItem('settings-scripts');
            localStorage.removeItem('settings-homebtn');
            if (tmptheme == "Auto") {
                localStorage.setItem('settings-autotheme', 'true');
                localStorage.setItem('settings-darktheme', 'true');
            } else if (tmptheme == "Dark") {
                localStorage.setItem('settings-autotheme', 'false');
                localStorage.setItem('settings-darktheme', 'true');
            } else if (tmptheme == "Light") {
                localStorage.setItem('settings-autotheme', 'false');
                localStorage.setItem('settings-darktheme', 'false');
            }
            if (tmpchangelog == "Yes") {
                localStorage.setItem('settings-showchangelog', 'true');
                localStorage.setItem('settings-majorupdchangelog', 'false');
            } else if (tmpchangelog == "Only Major Updates") {
                localStorage.setItem('settings-showchangelog', 'true');
                localStorage.setItem('settings-majorupdchangelog', 'true');
            } else if (tmpchangelog == "Never") {
                localStorage.setItem('settings-showchangelog', 'false');
                localStorage.setItem('settings-majorupdchangelog', 'false');
            }
            if (tmpnotify == "Yes") {
                localStorage.setItem('settings-notifications', 'true');
                localStorage.setItem('settings-silentnotifications', 'false');
            } else if (tmpnotify == "Without Sounds") {
                localStorage.setItem('settings-notifications', 'true');
                localStorage.setItem('settings-silentnotifications', 'true');
            } else if (tmpnotify == "No") {
                localStorage.setItem('settings-notifications', 'false');
                localStorage.setItem('settings-silentnotifications', 'false');
            }
            if (tmpbatch == "No") {
                localStorage.setItem('settings-batchscripts', 'false');
            } else if (tmpbatch == "Yes") {
                localStorage.setItem('settings-batchscripts', 'true');
            }
            if (tmpcoldboot == "No") {
                localStorage.setItem('settings-coldbootversion', '5.0');
            } else if (tmpcoldboot == "Choose Later") {
                var coldbootversioncontainbkg = document.createElement('div');
                var coldbootversioncontain = document.createElement('div');
                var coldbootversioncontaintitle = document.createElement('h1');
                var coldbootversioncontaindesc = document.createElement('p');
                var coldbootversioncontaincurrent = document.createElement('p');
                var coldbootversioncontainoptions = document.createElement('div');
                var coldbootversioncontainfive = document.createElement('button');
                var coldbootversioncontainfour = document.createElement('button');
                var coldbootversioncontainthree = document.createElement('button');
                var coldbootversioncontaintwo = document.createElement('button');
                var coldbootversioncontainone = document.createElement('button');
                coldbootversioncontainbkg.setAttribute('id', 'xcenter-settings-coldbootversion');
                coldbootversioncontainbkg.setAttribute('class', 'xcenter-settings-coldbootversion');
                coldbootversioncontain.setAttribute('class', 'center');
                coldbootversioncontaincurrent.setAttribute('id', 'settings-coldbootversion');
                coldbootversioncontainfive.setAttribute('class', 'rainbow');
                coldbootversioncontainfive.setAttribute('id', 'xcenter-settings-coldbootversion-default');
                coldbootversioncontainfive.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontainfour.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontainthree.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontaintwo.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontainone.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontainfive.setAttribute('ColdBootVersionID', '5.0');
                coldbootversioncontainfour.setAttribute('ColdBootVersionID', '4.0');
                coldbootversioncontainthree.setAttribute('ColdBootVersionID', '3.0');
                coldbootversioncontaintwo.setAttribute('ColdBootVersionID', '2.0');
                coldbootversioncontainone.setAttribute('ColdBootVersionID', '1.0');
                coldbootversioncontainfive.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontainfour.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontainthree.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontaintwo.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontainone.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontaintitle.innerHTML = "ColdBoot Version <br>";
                coldbootversioncontaindesc.innerHTML = "Select a version to be automatically booted while launching X-Center. To remove the coldboot version, just press the logo at top left corner.";
                coldbootversioncontaincurrent.innerHTML = "Current: None";
                coldbootversioncontainfive.innerHTML = "None";
                coldbootversioncontainfour.innerHTML = "4.0";
                coldbootversioncontainthree.innerHTML = "3.0";
                coldbootversioncontaintwo.innerHTML = "2.0";
                coldbootversioncontainone.innerHTML = "1.0";
                coldbootversioncontainoptions.appendChild(coldbootversioncontainfive);
                coldbootversioncontainoptions.appendChild(coldbootversioncontainfour);
                coldbootversioncontainoptions.appendChild(coldbootversioncontainthree);
                coldbootversioncontainoptions.appendChild(coldbootversioncontaintwo);
                coldbootversioncontainoptions.appendChild(coldbootversioncontainone);
                coldbootversioncontain.appendChild(coldbootversioncontaintitle);
                coldbootversioncontain.appendChild(coldbootversioncontaindesc);
                coldbootversioncontain.appendChild(coldbootversioncontaincurrent);
                coldbootversioncontain.appendChild(coldbootversioncontainoptions);
                coldbootversioncontainbkg.appendChild(coldbootversioncontain);
                document.body.appendChild(coldbootversioncontainbkg);
            } else {
                xcenter.settings.get();
            }
            if (tmphomebtn == "Yes") {
                localStorage.setItem('settings-homebutton', 'true');
            } else if (tmphomebtn == "No") {
                localStorage.setItem('settings-homebutton', 'false');
            }
            console.log('Converted Setup Options to Final Settings')
        }
    },
    settings: {
        reset: function() {
            var tmpsettingresetconfirmbkg = document.createElement('div');
            var tmpsettingresetconfirm = document.createElement('div');
            var tmpsettingresetconfirmtitle = document.createElement('h1');
            var tmpsettingresetconfirmdesc = document.createElement('desc');
            var tmpsettingresetconfirmbtn = document.createElement('button');
            var tmpsettingresetcancelbtn = document.createElement('button');
            var tmpsettingresetbtns = document.createElement('div');
            tmpsettingresetconfirmbkg.setAttribute('style', 'position: fixed;z-index: 101;top: 0;bottom: 0;left: 0;right: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.596);');
            tmpsettingresetconfirm.setAttribute('style', 'width: 80%;height: 60%;min-width: 600px;min-height: 350px;background-color: red;padding: 10px;border-radius: 10px;');
            tmpsettingresetconfirm.setAttribute('class', 'center');
            tmpsettingresetbtns.setAttribute('style', 'position: absolute;bottom: 0;left: 0;width: 100%;display: flex;')
            tmpsettingresetconfirmbtn.setAttribute('style', 'flex-grow: 1;background-color: rgb(255, 255, 255, 0.196);border-radius: 0px 0px 10px 0px !important;');
            tmpsettingresetcancelbtn.setAttribute('style', 'flex-grow: 1;background-color: rgb(255, 255, 255, 0.196);border-radius: 0px 0px 0px 10px !important;')
            tmpsettingresetcancelbtn.setAttribute('onclick', 'this.parentNode.parentNode.parentNode.remove()');
            tmpsettingresetconfirmtitle.setAttribute('style', 'float: none !important;width: 100% !important;margin: 0;')
            tmpsettingresetconfirmdesc.setAttribute('style', 'float: none !important;width: 100% !important;margin: 0;')
            tmpsettingresetconfirmtitle.innerHTML = "Confirm";
            tmpsettingresetconfirmdesc.innerHTML = "Confirm to reset X-Center. This will uninstall all the apps and their data and it will reset the settings.";
            tmpsettingresetconfirmbtn.innerHTML = "Confirm";
            tmpsettingresetcancelbtn.innerHTML = "Cancel";
            tmpsettingresetconfirmbtn.onclick = function() {
                localStorage.clear();
                sessionStorage.clear();
                location.reload();
            }
            tmpsettingresetconfirm.appendChild(tmpsettingresetconfirmtitle);
            tmpsettingresetconfirm.appendChild(tmpsettingresetconfirmdesc);
            tmpsettingresetbtns.appendChild(tmpsettingresetcancelbtn);
            tmpsettingresetbtns.appendChild(tmpsettingresetconfirmbtn);
            tmpsettingresetconfirm.append(tmpsettingresetbtns);
            tmpsettingresetconfirmbkg.appendChild(tmpsettingresetconfirm);
            document.body.appendChild(tmpsettingresetconfirmbkg);
        },
        defaults: function() {
            currenttheme = CommonJS.getTheme();
            if (document.getElementById('settings-autotheme').checked == false) document.getElementById('settings-autotheme').click();
            if (document.getElementById('settings-showchangelog').checked == false) document.getElementById('settings-showchangelog').click();
            if (document.getElementById('settings-majorupdchangelog').checked == true) document.getElementById('settings-majorupdchangelog').click();
            if (document.getElementById('settings-notifications').checked == false) document.getElementById('settings-notifications').click();
            if (document.getElementById('settings-silentnotifications').checked == true) document.getElementById('settings-silentnotifications').click();
            if (document.getElementById('settings-batchscripts').checked == false) document.getElementById('settings-batchscripts').click();
            if (document.getElementById('settings-homebutton').checked == true) document.getElementById('settings-homebutton').click();
            document.getElementById('xcenter-settings-coldbootversion-default').click();
        },
        get: function() {
            if (localStorage.getItem('settings-theme') != null || localStorage.getItem('settings-changelog') != null || localStorage.getItem('settings-shownotifications') != null || localStorage.getItem('settings-cbversion') != null || localStorage.getItem('settings-scripts') != null) {
                xcenter.setup.convert();
                return;
            }
            if (localStorage.getItem('settings-coldbootversion') == null) localStorage.setItem('settings-coldbootversion', '5.0');
            currenttheme = CommonJS.getTheme();
            autotheme = localStorage.getItem('settings-autotheme') ?? true;
            darktheme = localStorage.getItem('settings-darktheme') ?? true;
            tmpchangelog = localStorage.getItem('settings-showchangelog') ?? true;
            majorchangelog = localStorage.getItem('settings-majorupdchangelog') ?? false;
            tmpnotifications = localStorage.getItem('settings-notifications') ?? true;
            silentnotifications = localStorage.getItem('settings-silentnotifications') ?? false;
            runbatchscripts = localStorage.getItem('settings-batchscripts') ?? true;
            coldbootversion = localStorage.getItem('settings-coldbootversion') ?? "5.0";
            homebutton = localStorage.getItem('settings-homebutton') ?? false;
            if (darktheme == true || darktheme == "true") {theme = "dark"} else if (darktheme == false || darktheme == "false") {theme = "light"}
            if (autotheme == true || autotheme == "true") theme = "auto";
            if (majorchangelog == true || majorchangelog == "true") {changelog = "major"} else if (changelog == true || changelog == "true") {changelog = true}
            if (tmpchangelog == false || tmpchangelog == "false") changelog = false;
            if (silentnotifications == true || silentnotifications == "true") {notifications = "silent"} else if (tmpnotifications == true || tmpnotifications == "true") {notifications = true}
            if (tmpnotifications == false) {notifications = false;silentnotifications = true;}
            if ((autotheme == true || autotheme == "true") && currenttheme == "dark") {darktheme = true} else if ((autotheme == true || autotheme == "true") && currenttheme == "light") {darktheme = false};
            localStorage.setItem('settings-autotheme', autotheme)
            localStorage.setItem('settings-darktheme', darktheme)
            localStorage.setItem('settings-showchangelog', tmpchangelog)
            localStorage.setItem('settings-majorupdchangelog', majorchangelog)
            localStorage.setItem('settings-notifications', tmpnotifications)
            localStorage.setItem('settings-silentnotifications', silentnotifications)
            localStorage.setItem('settings-batchscripts', runbatchscripts)
            localStorage.setItem('settings-coldbootversion', coldbootversion)
            localStorage.setItem('settings-homebutton', homebutton)
            setTimeout(() => {
                if ((window.location.pathname == "/settings/" || 1 == 1) && (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('app-open') == false)) {
                    document.getElementById('settings-autotheme').checked = false;
                    document.getElementById('settings-darktheme').checked = false;
                    document.getElementById('settings-showchangelog').checked = false;
                    document.getElementById('settings-majorupdchangelog').checked = false;
                    document.getElementById('settings-notifications').checked = false;
                    document.getElementById('settings-silentnotifications').checked = false;
                    document.getElementById('settings-batchscripts').checked = false;
                    document.getElementById('settings-homebutton').checked = false;
                    if (autotheme == true || autotheme == "true") document.getElementById('settings-autotheme').checked = true;
                    if (darktheme == true || darktheme == "true") document.getElementById('settings-darktheme').checked = true;
                    if (tmpchangelog == true || tmpchangelog == "true") document.getElementById('settings-showchangelog').checked = true;
                    if (majorchangelog == true || majorchangelog == "true") document.getElementById('settings-majorupdchangelog').checked = true;
                    if (tmpnotifications == true || tmpnotifications == "true") document.getElementById('settings-notifications').checked = true;
                    if (silentnotifications == true || silentnotifications == "true") document.getElementById('settings-silentnotifications').checked = silentnotifications;
                    if (runbatchscripts == true || runbatchscripts == "true") document.getElementById('settings-batchscripts').checked = runbatchscripts;
                    if (homebutton == true || homebutton == "true") document.getElementById('settings-homebutton').checked = homebutton;
                    document.getElementById('settings-coldbootversion').innerHTML = "Current: " + coldbootversion;
                }
            }, 400)

            //APPLY
            if (theme == "light") {
                document.body.setAttribute('class', 'light');
                document.getElementById('html').setAttribute('class', 'light')
            };
            if (theme == "dark") {
                document.body.setAttribute('class', 'dark');
                document.getElementById('html').setAttribute('class', 'dark')
            }
            if (theme == "auto") {
                if (currenttheme == "dark") {
                    document.body.setAttribute('class', 'dark');
                    document.getElementById('html').setAttribute('class', 'dark')
                } else if (currenttheme == "light") {
                    document.body.setAttribute('class', 'light');
                    document.getElementById('html').setAttribute('class', 'light')
                }
            }
        }
    },
    userprofile: {
        prepare: function() {
            if (document.getElementById("xcenter-userprofile") == null) {
                var container = document.createElement('div');
                container.setAttribute('class', 'xcenter-userprofile hided');
                container.setAttribute('id', 'xcenter-userprofile');
                container.innerHTML = '<div class="center"><button id="xcenter-userprofile-close" onclick="this.parentNode.parentNode.classList.add(\'hided\');document.getElementById(\'xcenter-userprofile-edit\').classList.add(\'hided\');document.getElementById(\'xcenter-userprofile-show\').classList.remove(\'hided\');"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg></button><div id="xcenter-userprofile-show"><img id="xcenter-userprofile-avatar" onerror="this.src = \'data:image/png;base64,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\'" src="data:image/png;base64,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" alt=""><h1 id="xcenter-userprofile-username">User</h1><p id="xcenter-userprofile-gender">Unspecified</p><p id="xcenter-userprofile-birthday">1/1/1970</p><button onclick="xcenter.userprofile.edit()">Edit</button></div><div id="xcenter-userprofile-edit" class="hided"><label for="xcenter-userprofile-edit-avatar"><div><img src="/assets/media/apps/upload-translucent.png" alt=""><img onerror="this.src = \'data:image/png;base64,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\'" id="xcenter-userprofile-edit-avatar-visible" src="data:image/png;base64,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" alt=""></div></label><input type="file" onchange="const imgPath = document.getElementById(\'xcenter-userprofile-edit-avatar\').files[0];const reader = new FileReader();reader.addEventListener(\'load\', function () {document.getElementById(\'xcenter-userprofile-edit-avatar-visible\').src = reader.result;}, false);if (imgPath) {reader.readAsDataURL(imgPath);}" accept=".png, .jpg" name="xcenter-userprofile-edit-avatar" class="hided" id="xcenter-userprofile-edit-avatar" alt=""><input type="text" value="User" id="xcenter-userprofile-edit-username"></input><div id="xcenter-userprofile-edit-gender"><input type="radio" name="xcenter-userprofile-edit-gender" id="xcenter-userprofile-edit-gender-male" value="Male"> Male<input type="radio" name="xcenter-userprofile-edit-gender" id="xcenter-userprofile-edit-gender-female" value="Female"> Female<input type="radio" name="xcenter-userprofile-edit-gender" checked id="xcenter-userprofile-edit-gender-unspecified" value="Unspecified"> Do Not Specify</div><input type="date" value="" id="xcenter-userprofile-edit-birthday"><button onclick="xcenter.userprofile.save();">Save</button></div></div>';
                document.body.appendChild(container);
            }
            if (document.getElementById("navbar-user") != null) {
                document.getElementById("navbar-user").onclick = function() {
                    document.getElementById('xcenter-userprofile').classList.remove("hided");
                }
            }
            if (localStorage.getItem('XCenterUserData') == null) {
                userData = {
                    username: "User",
                    birthday: "1/1/1970",
                    valueuserbirthday: "1970/1/1",
                    gender: "Unspecified"
                }
                document.getElementById('xcenter-userprofile-show').classList.add('hided');
                document.getElementById('xcenter-userprofile-close').classList.add('hided');
                document.getElementById('xcenter-userprofile-edit').classList.remove('hided');
                document.getElementById('xcenter-userprofile').classList.remove('hided')
            } else {
                userData = JSON.parse(localStorage["XCenterUserData"]);
            }
            document.getElementById('xcenter-userprofile-username').innerHTML = userData.username;
            document.getElementById('xcenter-userprofile-gender').innerHTML = userData.gender;
            document.getElementById('xcenter-userprofile-birthday').innerHTML = userData.birthday;
            document.getElementById('xcenter-userprofile-avatar').src = localStorage.getItem('XCenterUserAvatar');
        },
        edit: function() {
            xcenter.userprofile.prepare();
            document.getElementById('xcenter-userprofile-edit-username').value = userData.username;
            document.getElementById('xcenter-userprofile-edit-birthday').value = userData.valueuserbirthday;
            document.getElementById('xcenter-userprofile-edit-gender-' + userData.gender.toLowerCase()).checked = true;
            document.getElementById('xcenter-userprofile-edit-avatar-visible').src = localStorage.getItem('XCenterUserAvatar')
            if (document.querySelector('input[name="xcenter-userprofile-edit-gender"]:checked') != null) {
                usergender = document.querySelector('input[name="xcenter-userprofile-edit-gender"]:checked').value
            }
            document.getElementById('xcenter-userprofile-show').classList.add('hided');
            document.getElementById('xcenter-userprofile-edit').classList.remove('hided');
        },
        save: function() {
            var username = document.getElementById('xcenter-userprofile-edit-username').value;
            var userbirthday = document.getElementById('xcenter-userprofile-edit-birthday').value;
            var useravatar = document.getElementById('xcenter-userprofile-edit-avatar').value;
            var usergender = "Unspecified";
            if (document.querySelector('input[name="xcenter-userprofile-edit-gender"]:checked') != null) {
                usergender = document.querySelector('input[name="xcenter-userprofile-edit-gender"]:checked').value
            }
            if (username.length < 1 || userbirthday.length < 1) {CommonJS.toast({title: "Fill all the fields.", type: "error"});return false;}
            var converteduserbirthday = userbirthday.split('-')[1] + '/' + userbirthday.split('-')[2] + '/' + userbirthday.split('-')[0];
            document.getElementById('xcenter-userprofile-username').innerHTML = username;
            document.getElementById('xcenter-userprofile-gender').innerHTML = usergender;
            document.getElementById('xcenter-userprofile-birthday').innerHTML = converteduserbirthday;
            userData = {
                username: username,
                birthday: userbirthday,
                valueuserbirthday: userbirthday,
                gender: usergender
            }
            localStorage["XCenterUserData"] = JSON.stringify(userData);
            const imgPath = document.getElementById('xcenter-userprofile-edit-avatar').files[0];
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                // convert image file to base64 string and save to localStorage
                localStorage.setItem("XCenterUserAvatar", reader.result);
                document.getElementById('xcenter-userprofile-avatar').src = reader.result;
            }, false);
            if (imgPath) {
                reader.readAsDataURL(imgPath);
            }
            document.getElementById('xcenter-userprofile-edit').classList.add('hided');
            document.getElementById('xcenter-userprofile-show').classList.remove('hided');
            document.getElementById('xcenter-userprofile-close').classList.remove('hided');
            if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('app-open') == false) {prepareNav()}
        }
    },
}
if (localStorage.getItem('xcenter-setup') != "finished") {
    setTimeout(() => {
        xcenter.setup.show();
    }, 400)
}
xcenter.settings.get();
if (localStorage.getItem('XCenterLastSecondaryPage') == null) localStorage.setItem('XCenterLastSecondaryPage', '/help/')
function prepareNav() {
    if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('app-open') == true) return false;
    var weblink = location.pathname.replaceAll('index.html', '');
    winHeight = window.innerHeight;
    winWidth = window.innerWidth;
    if (document.getElementById(weblink) != null) {
        document.getElementById(weblink).setAttribute('class', 'navbuttonextend')
    } else if (document.getElementById('navbar-other') != null) {
        var pagelink = weblink.slice(0, -1).slice(1);
        if (pagelink.indexOf('/') != -1) {
            /*if (doctitle.length < 1 || doctitle == "X-Center") {
                pagelink = "Other"
            } else {
                pagelink = doctitle
            }*/
            var n = pagelink.lastIndexOf('/');
            pagelink = pagelink.substring(n + 1);
        };
        pagelink = pagelink[0].toUpperCase() + pagelink.substring(1)
        document.getElementById('navbar-other').innerHTML = '<img src="data:image/png;base64,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">' + pagelink + '';
        document.getElementById('navbar-other').setAttribute('class', 'navbuttonextend')
        localStorage.setItem('XCenterLastSecondaryPage', location.pathname);
    }
    if (navigator.onLine) {
        document.getElementById('navbar-internet').innerHTML = '<img src="data:image/png;base64,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">';
    } else {
        document.getElementById('navbar-internet').innerHTML = '<img src="data:image/png;base64,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">';
    }
    if (localStorage.getItem('XCenterUserAvatar') != null) {
        document.getElementById('navbar-user').innerHTML = '<img src="' + localStorage.getItem('XCenterUserAvatar') + '">';
    } else {
        document.getElementById('navbar-user').innerHTML = '<img src="data:image/png;base64,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">';
    }
    document.getElementById('navbar-notifications').innerHTML = '<img src="data:image/png;base64,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">';
    if (winWidth < 171) {
        document.getElementById('navbar-menubtn').classList.remove('hided')
        document.getElementById('navbar-notifications').classList.add('hided')
        document.getElementById('/').classList.add('hided')
        document.getElementById('navbar-user').classList.add('hided')
        document.getElementById('navbar-internet').classList.add('hided')
        document.getElementById('navbar-other').classList.add('hided')
        document.getElementById('/apps/').classList.add('hided')
        document.getElementById('/tools/').classList.add('hided')
        document.getElementById('/pages/').classList.add('hided')
        document.getElementById('/settings/').classList.add('hided')

        if (document.getElementById('navbar-downloads') != null) document.getElementById('navbar-downloads').classList.add('hided');
    } else if (winWidth < 226) {
        document.getElementById('navbar-notifications').classList.remove('hided')
        document.getElementById('/').classList.remove('hided')
        document.getElementById('navbar-user').classList.add('hided')
        document.getElementById('navbar-internet').classList.add('hided')
        document.getElementById('navbar-other').classList.add('hided')
        document.getElementById('/apps/').classList.add('hided')
        document.getElementById('/tools/').classList.add('hided')
        document.getElementById('/pages/').classList.add('hided')
        document.getElementById('/settings/').classList.add('hided')
        document.getElementById('navbar-menubtn').classList.add('hided')
        
        if (document.getElementById('navbar-downloads') != null) document.getElementById('navbar-downloads').classList.add('hided');
    } else if (winWidth < 321) {
        document.getElementById('navbar-notifications').classList.remove('hided')
        document.getElementById('navbar-user').classList.remove('hided')
        document.getElementById('/').classList.remove('hided')
        document.getElementById('navbar-internet').classList.add('hided')
        document.getElementById('navbar-other').classList.add('hided')
        document.getElementById('/apps/').classList.add('hided')
        document.getElementById('/tools/').classList.add('hided')
        document.getElementById('/pages/').classList.add('hided')
        document.getElementById('/settings/').classList.add('hided')
        document.getElementById('navbar-menubtn').classList.add('hided')
        
        if (document.getElementById('navbar-downloads') != null) document.getElementById('navbar-downloads').classList.remove('hided');
    } else if (winWidth < 426) {
        document.getElementById('navbar-notifications').classList.remove('hided')
        document.getElementById('navbar-user').classList.remove('hided')
        document.getElementById('/').classList.remove('hided')
        document.getElementById('/tools/').classList.remove('hided')
        document.getElementById('/apps/').classList.remove('hided')
        document.getElementById('navbar-internet').classList.add('hided')
        document.getElementById('navbar-other').classList.add('hided')
        document.getElementById('/pages/').classList.add('hided')
        document.getElementById('/settings/').classList.add('hided')
        document.getElementById('navbar-menubtn').classList.add('hided')
        
        if (document.getElementById('navbar-downloads') != null) document.getElementById('navbar-downloads').classList.remove('hided');
    } else {
        document.getElementById('navbar-notifications').classList.remove('hided')
        document.getElementById('navbar-user').classList.remove('hided')
        document.getElementById('/').classList.remove('hided')
        document.getElementById('/tools/').classList.remove('hided')
        document.getElementById('/apps/').classList.remove('hided')
        document.getElementById('navbar-internet').classList.remove('hided')
        document.getElementById('navbar-other').classList.remove('hided')
        document.getElementById('/pages/').classList.remove('hided')
        document.getElementById('/settings/').classList.remove('hided')
        document.getElementById('navbar-menubtn').classList.add('hided')
        
        if (document.getElementById('navbar-downloads') != null) document.getElementById('navbar-downloads').classList.remove('hided');
        if (document.getElementById('navbar-downloads') != null) document.getElementById('navbar-downloads').classList.remove('hided');
        if (document.getElementById('navbar-downloads') != null) document.getElementById('navbar-downloads').classList.remove('hided');
    }
}
if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('app-open') == false) {prepareNav()}
window.onresize = function() {
    if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('app-open') == false) {prepareNav()}
}
function themeapply() {
    var activethemecontent = localStorage.getItem('XCenterThemeActive');
    var activethemescripts = localStorage.getItem('XCenterThemeActiveScripts');
    if ((activethemecontent == null || activethemecontent.length < 1) && (activethemescripts == null || activethemescripts.length < 1)) return;
    if ((activethemecontent == "null" || activethemecontent.length < 1) && (activethemescripts == "null" || activethemescripts.length < 1)) return;
    if (activethemescripts != null && activethemescripts != "null" && activethemescripts.length > 0) {
        var themescriptrun = document.createElement('script');
        themescriptrun.innerHTML = "\n" + activethemescripts + "\n";
        document.head.appendChild(themescriptrun);
    }
    if (activethemecontent != null && activethemecontent != "null" && activethemecontent.length > 0) {
        var themecontentrun = document.createElement('style');
        themecontentrun.innerHTML = "\n" + activethemecontent + "\n";
        document.head.appendChild(themecontentrun);
    }
}
themeapply();
if (document.getElementById("navbar-notifications") != null) {
    document.getElementById("navbar-notifications").onclick = function() {
        document.getElementById('new-notification-hided').classList.add('hided');
        document.getElementById('new-notification').classList.add('hided');
        document.getElementById('new-notifications-bkg').classList.remove('hided');
    }
}
xcenter.userprofile.prepare();

//XCENTERSCRIPT ENDED -- APP SCRIPT STARTED
//THIS SCRIPT IS NOT MEANT TO BE USED ON EXTERNAL WEBSITES, DUE TO SOME LOCALSTORAGE NAMES OR SOME THINGS THAT CHANGES BETWEEN PAGES
console.log('%cAPP SCRIPT STARTED', 'padding: 10px;background-color: black;border-radius: 10px;')
var app0, app1, app2, app3, app4, app5, app6, app7, app8, app9, app10, app11, app12, app13, app14, app15, app16, app17, app18, app19, app20, app21, app22, app23, app24, app25, app26, app27, app28, app29, app30, app31, app32; //SLOT VARS
var data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24, data25, data26, data27, data28, data29, data30, data31, data32; //APP VARS
var datadefault = {
    installed: false,
    id: "AlongNameForAnotInstalledApp",
    src: "data:image/png;base64,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"
}; //APP DEFAULT VALUES
var title, icon, content, id, type, launch, installData, installSlot, lastInstallSlot, AppID, slots, appinstall, appuninstall, xcenterappinstall, xcenterappuninstall, alreadyinstallcheck, tmpInstallSlot, tmpDataID, desc, author, batch; //INSTALL / UNINSTALL VARS
var data, applaunch, xcenterapplaunch, launchname, batchrows, batchruncommand, scriptlaunch, scriptidentifier, themelaunch, themeidentifier, themescripts; //LAUNCH VARS
var limitbkg, limits, limith1, limitp, limitok; //APP STORAGE LIMIT VARS
var singlehomekey = "m";
var multiplehomekeyfirst = "Control";
var multiplehomekeysecond = "m";
//MULTIPLE SCRIPT FIX
if (location.href.indexOf('file:///') != -1) multiplehomekeysecond = "h";
//END FIX
var hometype = "multiple";
//ENABLE APP FUNCTIONS
var app = {
    prepareSteps: {
        createLimitWarn: function() {
            limitbkg = document.createElement('div');
            limits = document.createElement('div');
            limith1 = document.createElement('h1');
            limitp = document.createElement('p');
            limitok = document.createElement('button');
            limitbkg.setAttribute('class', 'new-xcenter-apps-limits hided');
            if (sessionStorage.getItem("XCenterAppLimitWarn") == "Closed") {limitbkg.setAttribute('class', 'new-xcenter-apps-limits hided-force')};
            limitbkg.setAttribute('id', 'new-xcenter-apps-limits-bkg');
            limits.setAttribute('class', 'center');
            limitok.setAttribute('onclick', 'this.parentNode.parentNode.classList.add("hided");sessionStorage.setItem("XCenterAppLimitWarn", "Closed");');
            limith1.innerHTML = "Limited Version";
            limitp.innerHTML = "You're using the limited version of the App Script. Download the app to decrease this limit. (Run Batch Scripts and download apps up to 10MB!)";
            limitok.innerHTML = "Ok";
            limits.appendChild(limith1);
            limits.appendChild(limitp);
            limits.appendChild(limitok);
            limitbkg.appendChild(limits);
            document.body.appendChild(limitbkg);
        },
        defineSlots: function() {
            app0 = document.getElementById('new-xcenter-app-0');
            app1 = document.getElementById('new-xcenter-app-1');
            app2 = document.getElementById('new-xcenter-app-2');
            app3 = document.getElementById('new-xcenter-app-3');
            app4 = document.getElementById('new-xcenter-app-4');
            app5 = document.getElementById('new-xcenter-app-5');
            app6 = document.getElementById('new-xcenter-app-6');
            app7 = document.getElementById('new-xcenter-app-7');
            app8 = document.getElementById('new-xcenter-app-8');
            app9 = document.getElementById('new-xcenter-app-9');
            app10 = document.getElementById('new-xcenter-app-10');
            app11 = document.getElementById('new-xcenter-app-11');
            app12 = document.getElementById('new-xcenter-app-12');
            app13 = document.getElementById('new-xcenter-app-13');
            app14 = document.getElementById('new-xcenter-app-14');
            app15 = document.getElementById('new-xcenter-app-15');
            app16 = document.getElementById('new-xcenter-app-16');
            app17 = document.getElementById('new-xcenter-app-17');
            app18 = document.getElementById('new-xcenter-app-18');
            app19 = document.getElementById('new-xcenter-app-19');
            app20 = document.getElementById('new-xcenter-app-20');
            app21 = document.getElementById('new-xcenter-app-21');
            app22 = document.getElementById('new-xcenter-app-22');
            app23 = document.getElementById('new-xcenter-app-23');
            app24 = document.getElementById('new-xcenter-app-24');
            app25 = document.getElementById('new-xcenter-app-25');
            app26 = document.getElementById('new-xcenter-app-26');
            app27 = document.getElementById('new-xcenter-app-27');
            app28 = document.getElementById('new-xcenter-app-28');
            app29 = document.getElementById('new-xcenter-app-29');
            app30 = document.getElementById('new-xcenter-app-30');
            app31 = document.getElementById('new-xcenter-app-31');
            app32 = document.getElementById('new-xcenter-app-32');
            console.log('Got Page Apps')
        },
        fixLocalStorage: function() {
            if (localStorage.getItem('XCenterAppData0') == null) localStorage['XCenterAppData0'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData1') == null) localStorage['XCenterAppData1'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData2') == null) localStorage['XCenterAppData2'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData3') == null) localStorage['XCenterAppData3'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData4') == null) localStorage['XCenterAppData4'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData5') == null) localStorage['XCenterAppData5'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData6') == null) localStorage['XCenterAppData6'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData7') == null) localStorage['XCenterAppData7'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData8') == null) localStorage['XCenterAppData8'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData9') == null) localStorage['XCenterAppData9'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData10') == null) localStorage['XCenterAppData10'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData11') == null) localStorage['XCenterAppData11'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData12') == null) localStorage['XCenterAppData12'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData13') == null) localStorage['XCenterAppData13'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData14') == null) localStorage['XCenterAppData14'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData15') == null) localStorage['XCenterAppData15'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData16') == null) localStorage['XCenterAppData16'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData17') == null) localStorage['XCenterAppData17'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData18') == null) localStorage['XCenterAppData18'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData19') == null) localStorage['XCenterAppData19'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData20') == null) localStorage['XCenterAppData20'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData21') == null) localStorage['XCenterAppData21'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData22') == null) localStorage['XCenterAppData22'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData23') == null) localStorage['XCenterAppData23'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData24') == null) localStorage['XCenterAppData24'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData25') == null) localStorage['XCenterAppData25'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData26') == null) localStorage['XCenterAppData26'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData27') == null) localStorage['XCenterAppData27'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData28') == null) localStorage['XCenterAppData28'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData29') == null) localStorage['XCenterAppData29'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData30') == null) localStorage['XCenterAppData30'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData31') == null) localStorage['XCenterAppData31'] = JSON.stringify(datadefault);
            if (localStorage.getItem('XCenterAppData32') == null) localStorage['XCenterAppData32'] = JSON.stringify(datadefault);
            console.log('Fixed Local Storage')
        },
        getData: function() {
            data0 = JSON.parse(localStorage['XCenterAppData0']);
            data1 = JSON.parse(localStorage['XCenterAppData1']);
            data2 = JSON.parse(localStorage['XCenterAppData2']);
            data3 = JSON.parse(localStorage['XCenterAppData3']);
            data4 = JSON.parse(localStorage['XCenterAppData4']);
            data5 = JSON.parse(localStorage['XCenterAppData5']);
            data6 = JSON.parse(localStorage['XCenterAppData6']);
            data7 = JSON.parse(localStorage['XCenterAppData7']);
            data8 = JSON.parse(localStorage['XCenterAppData8']);
            data9 = JSON.parse(localStorage['XCenterAppData9']);
            data10 = JSON.parse(localStorage['XCenterAppData10']);
            data11 = JSON.parse(localStorage['XCenterAppData11']);
            data12 = JSON.parse(localStorage['XCenterAppData12']);
            data13 = JSON.parse(localStorage['XCenterAppData13']);
            data14 = JSON.parse(localStorage['XCenterAppData14']);
            data15 = JSON.parse(localStorage['XCenterAppData15']);
            data16 = JSON.parse(localStorage['XCenterAppData16']);
            data17 = JSON.parse(localStorage['XCenterAppData17']);
            data18 = JSON.parse(localStorage['XCenterAppData18']);
            data19 = JSON.parse(localStorage['XCenterAppData19']);
            data20 = JSON.parse(localStorage['XCenterAppData20']);
            data21 = JSON.parse(localStorage['XCenterAppData21']);
            data22 = JSON.parse(localStorage['XCenterAppData22']);
            data23 = JSON.parse(localStorage['XCenterAppData23']);
            data24 = JSON.parse(localStorage['XCenterAppData24']);
            data25 = JSON.parse(localStorage['XCenterAppData25']);
            data26 = JSON.parse(localStorage['XCenterAppData26']);
            data27 = JSON.parse(localStorage['XCenterAppData27']);
            data28 = JSON.parse(localStorage['XCenterAppData28']);
            data29 = JSON.parse(localStorage['XCenterAppData29']);
            data30 = JSON.parse(localStorage['XCenterAppData30']);
            data31 = JSON.parse(localStorage['XCenterAppData31']);
            data32 = JSON.parse(localStorage['XCenterAppData32']);
            console.log('Got App Data')
        },
        sysAppRecover: function() {
            if (JSON.stringify(data0) == JSON.stringify(datadefault)) {
                //STORE
                data0 = {
                    quicklaunch: true,
                    type: "Tool",
                    title: "X-Store",
                    desc: "Install and Update apps from your favourite stores!",
                    author: "Xarber",
                    src: "data:image/png;base64,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",
                    id: "X-StoreUT0XLZAFLJ",
                    batch: "",
                }
                localStorage['XCenterAppData0'] = JSON.stringify(data0);
                console.log('> STORE RECOVERED')
            }
            if (JSON.stringify(data1) == JSON.stringify(datadefault)) {
                //APPMAKER
                data1 = {
                    type: "Tool",
                    title: "App Maker",
                    desc: "Easily build beautiful apps with App Maker!",
                    author: "Xarber",
                    src: "data:image/png;base64,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",
                    id: "App Maker1DB1K1YA2Y",
                    batch: "",
                    content: "\n\n\n    <!--PAGE INFO-->\n    <title id=\"pageinfo-title\">X-Center</title>\n    <link id=\"pageinfo-icon\" rel=\"shortcut icon\" href=\"/assets/media/logo.png\" type=\"image/x-icon\">\n    <meta id=\"ogpageinfo-title\" property=\"og:title\" content=\"X-Center 5.0\">\n    <meta id=\"ogpageinfo-name\" property=\"og:site_name\" content=\"X-Center\">\n    <meta id=\"ogpageinfo-icon\" property=\"og:image\" content=\"https://xcenter.netlify.app/assets/media/logo.png\">\n    <meta id=\"ogpageinfo-desc\" property=\"og:description\" content=\"Find every project and app made by Xarber and other users, all of them safe and tested. You can also find some tools or useful sites.\">\n    <meta id=\"ogpageinfo-link\" property=\"og:url\" content=\"https://xcenter.netlify.app/\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n    <!--BOOTSTRAP AND EXTERNAL LINKS-->\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\" crossorigin=\"anonymous\">\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js\" integrity=\"sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\" defer=\"\"></script>\n    <script src=\"/assets/js/crypto.js\" defer=\"\"></script>\n    \n    <!--XCENTER HEAD-->\n    <link rel=\"stylesheet\" href=\"/assets/base/style.css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/common.css\">\n    <script src=\"/assets/js/common.js\" defer=\"\"></script>\n    <script src=\"/assets/base/script.js\" defer=\"\"></script>\n    <script src=\"/assets/js/apps.js\" defer=\"\"></script>\n\n    <!--HIDED COMMONJS 5.0 FIXES-->\n    <nav class=\"new-navbar-light hided\" id=\"navbar\">\n        <div class=\"new-menu hided vertical-scroll\" id=\"new-menu\">\n          <button class=\"new-menu-button\" onclick=\"location.href = '/';\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"><h3>Home</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/tools';\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"><h3>Tools</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/shop';\"><img src=\"/assets/media/4.0/shop.png\" width=\"100%\" alt=\"\"><h3>Store</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarber';\"><img src=\"/assets/media/4.0/xarber.png\" width=\"100%\" alt=\"\"><h3>Xarber</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xwip';\"><img src=\"/assets/media/4.0/xwip.png\" width=\"100%\" alt=\"\"><h3>XWIP</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarbot';\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"><h3>Xarbot</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/os';\"><img src=\"/assets/media/4.0/os.png\" width=\"100%\" alt=\"\"><h3>OS</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/settings';\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"><h3>Settings</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/help';\"><img src=\"/assets/media/4.0/unknown.png\" width=\"100%\" alt=\"\"><h3>FAQ</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/feedback';\"><img src=\"/assets/media/4.0/chat.png\" width=\"100%\" alt=\"\"><h3>Feedback</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/about';\"><img src=\"/assets/media/4.0/info.png\" width=\"100%\" alt=\"\"><h3>About</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/map';\"><img src=\"/assets/media/4.0/plus.png\" width=\"100%\" alt=\"\"><h3>Site Map</h3></button>\n          <button class=\"new-menu-button\" onclick=\"RecentPage()\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"><h3>Other</h3></button>\n        </div>\n        <center>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/';\" id=\"new-navbar-home\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/tools';\" id=\"new-navbar-tools\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/xarbot';\" id=\"new-navbar-xarbot\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/os';\" id=\"new-navbar-OS\"><img src=\"/assets/media/4.0/unknown.png\" id=\"nav-OS\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/settings';\" id=\"new-navbar-settings\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"NewMenu()\" id=\"new-navbar-menu\"><img src=\"/assets/media/4.0/menu.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"RecentPage()\" id=\"new-navbar-other\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"></button>\n        </center>\n    </nav>\n    <div class=\"new-footer hided\">\n        <img src=\"/assets/media/logo.png\" width=\"80px\" height=\"80px\" alt=\"\">\n        <button class=\"new-gotop\" onclick=\"window.location = '#'\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-arrow-up-circle\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z\"></path></svg></button>\n        <h1>X-Center</h1>\n        <copyright>@ Copyright 2022 - Xarber</copyright>\n    </div>\n\n\n    <div class=\"nav-compenser hided\"><button></button></div>\n    <nav class=\"hided\">\n        <div id=\"navbar-pages\">\n            <button onclick=\"location.href = this.id;\" id=\"/\"><img src=\"/assets/base/home.png\">Home</button>\n            <button onclick=\"location.href = this.id;\" id=\"/tools/\"><img src=\"/assets/base/tools.png\">Tools</button>\n            <button onclick=\"location.href = this.id;\" id=\"/pages/\"><img src=\"/assets/base/pages.png\">Pages</button>\n            <button onclick=\"location.href = this.id;\" id=\"/apps/\"><img src=\"/assets/base/apps.png\">Apps</button>\n            <button onclick=\"location.href = this.id;\" id=\"/settings/\"><img src=\"/assets/base/settings.png\">Settings</button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\" id=\"navbar-other\"><img src=\"/assets/base/other.png\">Other</button>\n        </div>\n        <div id=\"navbar-users\">\n            <button id=\"navbar-notifications\">Notifications</button>\n            <button id=\"navbar-internet\">Internet</button>\n            <button id=\"navbar-user\">User</button>\n        </div>\n        <button onclick=\"document.getElementById('navbar-menu').classList.toggle('hided');\" id=\"navbar-menubtn\" class=\"navbar-menubtn hided\"><img src=\"/assets/base/menu.png\">Menu</button>\n        <div class=\"hided\" id=\"navbar-menu\">\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/home.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/tools.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/pages.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/apps.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/settings.png\"></button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\"><img src=\"/assets/base/other.png\"></button>\n        </div>\n    </nav>\n    <div class=\"appmaker-welcome hided\" id=\"welcome\">\n        <div class=\"center\">\n            <h1>Welcome!</h1>\n            <p>Welcome to App Maker! With this tool you can build Apps, Web Games, Other Tools, or anything you want (On Web Format)! <br> Make easily light and fast apps with this tool! Import or Create a new project from the tool, give the app a name and (eventually) a description, and youre done! You have created your first X-Center App, using codes that you probably already know! <br> This app uses Electron technologies to allow you to also run scripts on the user's PC (only if allowed in the settings), and have all-system compatible apps!</p>\n            <button onclick=\"this.parentNode.parentNode.remove();\">Let's Start!</button>\n        </div>\n    </div>\n    <div id=\"appmaker\" class=\"appmaker\">\n        <h1>App Maker</h1>\n        <p>Fill the requested spots to create the app and then press \"BUILD\"</p>\n        <div id=\"appmaker-preview\" class=\"appmaker-preview\">\n            <button onclick=\"appmaker.preview()\">Refresh Preview</button>\n            <div id=\"appmaker-preview-shown\">\n                <div class=\"center\">\n                    <h1>Click on \"Refresh Preview\"</h1>\n                </div>\n            </div>\n        </div>\n        <div class=\"appmaker-build\">\n            <label for=\"appmaker-build-title\">App Title</label><br>\n            <input id=\"appmaker-build-title\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"App\"><br>\n            <label for=\"appmaker-build-desc\">App Desc</label><br>\n            <input id=\"appmaker-build-desc\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"\"><br>\n            <label for=\"appmaker-build-author\">App Author</label><br>\n            <input id=\"appmaker-build-author\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"User\"><br>\n            <label for=\"appmaker-build-type\">App Type</label><br>\n            <input id=\"appmaker-build-type\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"Auto (App / Tool / Game / Script / Theme)\"><br>\n            <label for=\"appmaker-build-icon\">App Icon Link</label><br>\n            <input id=\"appmaker-build-icon\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"https://xcenter.netlify.app/assets/media/apps/default.png\"><br>\n            <button id=\"appmaker-build\" onclick=\"appmaker.getInfo()\">BUILD</button>\n            <div>\n                <div>\n                    <p>HTML</p>\n                    <textarea name=\"appmaker-build-content-html\" id=\"appmaker-build-content-html\" cols=\"30\" rows=\"10\">&lt;h1 class=\"previewtitle\"&gt;This is a preview&lt;/h1&gt;&lt;p&gt;Click on \"Refresh Preview\" when you're done building your app to have a preview of what you've done. Batch scripts won't run on the preview. You can see in the input fields how this preview was made. For CSS styles you may have to insert a !important tag after the styles (not fundamental on the final app), to make them more important than the website's stylesheets.&lt;/p&gt;&lt;br&gt;&lt;h1&gt;CSS EXAMPLE:&lt;/h1&gt;&lt;br&gt;&lt;textarea cols=\"75\" rows=\"5\"&gt;h1 {color: blue !important;text-decoration: underline !important;}</textarea>\n                </div>\n                <div>\n                    <p>CSS</p>\n                    <textarea name=\"appmaker-build-content-css\" id=\"appmaker-build-content-css\" cols=\"30\" rows=\"10\">.previewtitle {color: blue !important;text-decoration: underline;margin: 10px;} textarea {background-color: transparent;color: white !important;}</textarea>\n                </div>\n                <div>\n                    <p>JS</p>\n                    <textarea name=\"appmaker-build-content-js\" id=\"appmaker-build-content-js\" cols=\"30\" rows=\"10\">document.querySelector(\".previewtitle\").setAttribute('onclick', 'alert(\"you clicked me!\")')</textarea>\n                </div>\n                <div>\n                    <p>BATCH</p>\n                    <textarea name=\"appmaker-build-content-bat\" id=\"appmaker-build-content-bat\" cols=\"30\" rows=\"10\"></textarea>\n                </div>\n                <div class=\"hided\">\n                    <p>SHELL (Linux)</p>\n                    <textarea name=\"appmaker-build-content-shl\" id=\"appmaker-build-content-bat\" cols=\"30\" rows=\"10\"></textarea>\n                </div>\n                <div class=\"hided\">\n                    <p>SHELL (MacOS)</p>\n                    <textarea name=\"appmaker-build-content-shm\" id=\"appmaker-build-content-bat\" cols=\"30\" rows=\"10\"></textarea>\n                </div>\n                <div class=\"hided\">\n                    <p>Update Data</p>\n                    <textarea name=\"appmaker-build-content-upd\" id=\"appmaker-build-content-bat\" cols=\"30\" rows=\"10\"></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"hided\">\n        <div>\n            <p>X-Center 5.0 <br> Copyright 2022 @ Xarber</p>\n        </div>\n        <div>\n            <img onclick=\"document.body.scrollTop = 0;document.documentElement.scrollTop = 0;\" src=\"/assets/media/logo.png\" alt=\"\">\n        </div>\n    </footer>\n    <script>\n        var appmaker = {\n            convert: function(data, then) {\n                var type = data.type;\n                var title = data.title;\n                var desc = data.desc;\n                var author = data.author;\n                var icon = data.icon;\n                var html = data.html;\n                var css = data.css;\n                var js = data.js;\n                var bat = data.bat;\n                var id = data.id ?? title + CommonJS.random(\"10\", \"both\", \"upr\");\n                var tmp = document.createElement('div');\n                tmp.innerHTML = html;\n                var csscontainer = document.createElement('style');\n                csscontainer.innerHTML = css;\n                var jscontainer = document.createElement('script');\n                jscontainer.setAttribute('type', 'text/javascript');\n                jscontainer.innerHTML = \"\\n\" + js + \"\\n\";\n                tmp.appendChild(jscontainer);\n                tmp.appendChild(csscontainer);\n                then = then ?? \"convert\";\n                if (then == \"convert\") {\n                    var datanew = {\n                        type: type,\n                        title: title,\n                        desc: desc,\n                        author: author,\n                        src: icon,\n                        id: id,\n                        batch: bat,\n                        content: tmp.innerHTML\n                    }\n                    app.pack.build(\"\", datanew);\n                } else if (then == \"preview\") {\n                    document.getElementById('appmaker-preview-shown').innerHTML = tmp.innerHTML;\n                    var jscontainer = document.createElement('script');\n                    jscontainer.setAttribute('type', 'text/javascript');\n                    jscontainer.innerHTML = \"\\n\" + js + \"\\n\";\n                    document.body.appendChild(jscontainer)\n                    var csscontainer = document.createElement('style');\n                    csscontainer.innerHTML = css;\n                    document.head.insertBefore(csscontainer, document.head.firstChild)\n                }\n            },\n            getInfo: function(then) {\n                var type = appmaker.getType();\n                var author = document.getElementById('appmaker-build-author').value ?? \"User\";\n                var title = document.getElementById('appmaker-build-title').value ?? \"App\";\n                var description = document.getElementById('appmaker-build-desc').value ?? title + \" is a \" + type + \" made by \" + author + \".\";\n                var icon = document.getElementById('appmaker-build-icon').value ?? \"https://xcenter.netlify.app/assets/media/apps/default.png\";\n                var html = document.getElementById('appmaker-build-content-html').value ?? \"empty\";\n                var css = document.getElementById('appmaker-build-content-css').value ?? \"empty\";\n                var js = document.getElementById('appmaker-build-content-js').value ?? \"empty\";\n                var bat = document.getElementById('appmaker-build-content-bat').value ?? \"empty\";\n                then = then ?? \"convert\";\n                if (then == \"preview\") {\n                    appmaker.convert({\n                        type: type,\n                        title: title,\n                        desc: description,\n                        author: author,\n                        icon: icon,\n                        html: html,\n                        css: css,\n                        js: js,\n                        bat: bat,\n                    }, \"preview\");\n                    return;\n                }\n                appmaker.convert({\n                    type: type,\n                    title: title,\n                    desc: description,\n                    author: author,\n                    icon: icon,\n                    html: html,\n                    css: css,\n                    js: js,\n                    bat: bat,\n                })\n            },\n            getType: function() {\n                var html = document.getElementById('appmaker-build-content-html').value ?? \"empty\";\n                var css = document.getElementById('appmaker-build-content-css').value ?? \"empty\";\n                var js = document.getElementById('appmaker-build-content-js').value ?? \"empty\";\n                var bat = document.getElementById('appmaker-build-content-bat').value ?? \"empty\";\n                var type = document.getElementById('appmaker-build-type').value ?? \"Auto (App / Tool / Game / Script / Theme)\";\n                if (html.length < 1) html = \"empty\";\n                if (css.length < 1) css = \"empty\";\n                if (js.length < 1) js = \"empty\";\n                if (bat.length < 1) bat = \"empty\";\n                if (type == \"Auto (App / Tool / Game / Script / Theme)\") {\n                    if (html != \"empty\" && css != \"empty\" && js != \"empty\") type = \"App\";\n                    if (html != \"empty\" && css != \"empty\" && js != \"empty\" && bat != \"empty\") type = \"Tool\";\n                    if (html == \"empty\" && css == \"empty\" && (js != \"empty\" || bat != \"empty\")) type = \"Script\";\n                    if (html == \"empty\" && css != \"empty\" && bat == \"empty\") type = \"Theme\";\n                }\n                if (type == \"App\" || type == \"Tool\" || type == \"Game\" || type == \"Script\" || type == \"Theme\") {\n                    if (type == \"Theme\") alert(\"Theme app detected. Themes aren't currently supported.\")\n                    return type;\n                }\n                return \"App\";\n            },\n            preview: function() {\n                appmaker.getInfo(\"preview\");\n            }\n        }\n        setTimeout(() => {\n            appmaker.preview();\n        }, 250)\n        document.body.classList.add('dark');\n    </script>\n    <style>\n        .appmaker {background-color: transparent;padding: 0;margin: 10px;}\n        .appmaker input {width: 100%;background-color: transparent;color: white;border: 1px solid white;padding: 10px;border-radius: 10px;margin-bottom: 10px;}\n        .appmaker-build {width: 100% !important;border-radius: 0;height: 100%;}\n        .appmaker-build div {width: 100%;height: 100%;position: relative;}\n        .appmaker-build button {background-color: green;width: 100%;height: 100px;font-size: 50px;}\n        .appmaker-build div div {width: calc(50% - 20px);margin: 10px;aspect-ratio: 1 / 1;background-color: transparent;max-width: 400px;float: left;min-width: 300px;margin-bottom: 50px;}\n        .appmaker-build div div textarea {background-color: transparent;border: 1px solid white;border-radius: 10px;padding: 10px !important;color: white;width: 100%;height: 100%;overflow: auto;white-space: nowrap;}\n        .appmaker-welcome {width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.459);position: fixed;top: 0;bottom: 0;left: 0;right: 0;}\n        .appmaker-welcome div {width: 80%;height: 60% !important;min-width: 500px;min-height: 300px;background-color: blue;padding: 10px;border-radius: 10px;margin: 0;position: relative;}\n        .appmaker-welcome div * {margin: 0;}\n        .appmaker-welcome div button {position: absolute;bottom: 0;left: 0;right: 0;border-radius: 0 0 10px 10px !important;background-color: rgba(0, 0, 0, 0.281);}\n        .appmaker-preview {width: 100%;height: 500px;background-color: transparent;float: none !important;border-radius: 10px;padding: 0px;border: 1px solid white;margin-bottom: 10px;position: relative;}\n        .appmaker-preview button {width: 100%;height: 30px;background-color: transparent;color: white;font-size: unset;padding: unset;border-bottom: 1px solid white;position: absolute;top: 0;left: 0;right: 0;border-radius: 10px 10px 0px 0px !important;z-index: 10;}\n        .appmaker-preview div {width: 100%;position: absolute;top: 30px;bottom: 0px;right: 0px;left: 0px;z-index: 1;overflow: auto;}\n        @media (max-width: 675px) {\n            .appmaker-build div div {min-width: 100%;margin: 0;max-width: unset !important;margin-bottom: 50px;margin-top: 10px;min-height: 400px;float: unset !important;}\n        }\n    </style>\n\n<script type=\"text/javascript\">\n\n</script><style></style>"
                }
                localStorage['XCenterAppData1'] = JSON.stringify(data1);
                console.log('> APPMAKER RECOVERED')
            }
            if (JSON.stringify(data2) == JSON.stringify(datadefault)) {
                //THEMEMANAGER
                data2 = {
                    type: "Tool",
                    title: "Theme Manager",
                    desc: "Change your style by changing your theme with Theme Manager!",
                    author: "Xarber",
                    src: "data:image/png;base64,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",
                    id: "Theme ManagerVMBIS91RB0",
                    batch: "",
                    content:"\n\n\n    <!--PAGE INFO-->\n    <title id=\"pageinfo-title\">X-Center</title>\n    <link id=\"pageinfo-icon\" rel=\"shortcut icon\" href=\"/assets/media/logo.png\" type=\"image/x-icon\">\n    <meta id=\"ogpageinfo-title\" property=\"og:title\" content=\"X-Center 5.0\">\n    <meta id=\"ogpageinfo-name\" property=\"og:site_name\" content=\"X-Center\">\n    <meta id=\"ogpageinfo-icon\" property=\"og:image\" content=\"https://xcenter.netlify.app/assets/media/logo.png\">\n    <meta id=\"ogpageinfo-desc\" property=\"og:description\" content=\"Find every project and app made by Xarber and other users, all of them safe and tested. You can also find some tools or useful sites.\">\n    <meta id=\"ogpageinfo-link\" property=\"og:url\" content=\"https://xcenter.netlify.app/\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n    <!--BOOTSTRAP AND EXTERNAL LINKS-->\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\" crossorigin=\"anonymous\">\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js\" integrity=\"sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\" defer=\"\"></script>\n    <script src=\"/assets/js/crypto.js\" defer=\"\"></script>\n    \n    <!--XCENTER HEAD-->\n    <link rel=\"stylesheet\" href=\"/assets/base/style.css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/common.css\">\n    <script src=\"/assets/js/common.js\" defer=\"\"></script>\n    <script src=\"/assets/base/script.js\" defer=\"\"></script>\n    <script src=\"/assets/js/apps.js\" defer=\"\"></script>\n\n    <!--HIDED COMMONJS 5.0 FIXES-->\n    <nav class=\"new-navbar-light hided\" id=\"navbar\">\n        <div class=\"new-menu hided vertical-scroll\" id=\"new-menu\">\n          <button class=\"new-menu-button\" onclick=\"location.href = '/';\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"><h3>Home</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/tools';\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"><h3>Tools</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/shop';\"><img src=\"/assets/media/4.0/shop.png\" width=\"100%\" alt=\"\"><h3>Store</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarber';\"><img src=\"/assets/media/4.0/xarber.png\" width=\"100%\" alt=\"\"><h3>Xarber</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xwip';\"><img src=\"/assets/media/4.0/xwip.png\" width=\"100%\" alt=\"\"><h3>XWIP</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarbot';\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"><h3>Xarbot</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/os';\"><img src=\"/assets/media/4.0/os.png\" width=\"100%\" alt=\"\"><h3>OS</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/settings';\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"><h3>Settings</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/help';\"><img src=\"/assets/media/4.0/unknown.png\" width=\"100%\" alt=\"\"><h3>FAQ</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/feedback';\"><img src=\"/assets/media/4.0/chat.png\" width=\"100%\" alt=\"\"><h3>Feedback</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/about';\"><img src=\"/assets/media/4.0/info.png\" width=\"100%\" alt=\"\"><h3>About</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/map';\"><img src=\"/assets/media/4.0/plus.png\" width=\"100%\" alt=\"\"><h3>Site Map</h3></button>\n          <button class=\"new-menu-button\" onclick=\"RecentPage()\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"><h3>Other</h3></button>\n        </div>\n        <center>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/';\" id=\"new-navbar-home\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/tools';\" id=\"new-navbar-tools\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/xarbot';\" id=\"new-navbar-xarbot\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/os';\" id=\"new-navbar-OS\"><img src=\"/assets/media/4.0/unknown.png\" id=\"nav-OS\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/settings';\" id=\"new-navbar-settings\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"NewMenu()\" id=\"new-navbar-menu\"><img src=\"/assets/media/4.0/menu.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"RecentPage()\" id=\"new-navbar-other\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"></button>\n        </center>\n    </nav>\n    <div class=\"new-footer hided\">\n        <img src=\"/assets/media/logo.png\" width=\"80px\" height=\"80px\" alt=\"\">\n        <button class=\"new-gotop\" onclick=\"window.location = '#'\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-arrow-up-circle\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z\"></path></svg></button>\n        <h1>X-Center</h1>\n        <copyright>@ Copyright 2022 - Xarber</copyright>\n    </div>\n\n\n    <div class=\"nav-compenser hided\"><button></button></div>\n    <nav class=\"hided\">\n        <div id=\"navbar-pages\">\n            <button onclick=\"location.href = this.id;\" id=\"/\"><img src=\"/assets/base/home.png\">Home</button>\n            <button onclick=\"location.href = this.id;\" id=\"/tools/\"><img src=\"/assets/base/tools.png\">Tools</button>\n            <button onclick=\"location.href = this.id;\" id=\"/pages/\"><img src=\"/assets/base/pages.png\">Pages</button>\n            <button onclick=\"location.href = this.id;\" id=\"/apps/\"><img src=\"/assets/base/apps.png\">Apps</button>\n            <button onclick=\"location.href = this.id;\" id=\"/settings/\"><img src=\"/assets/base/settings.png\">Settings</button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\" id=\"navbar-other\"><img src=\"/assets/base/other.png\">Other</button>\n        </div>\n        <div id=\"navbar-users\">\n            <button id=\"navbar-notifications\">Notifications</button>\n            <button id=\"navbar-internet\">Internet</button>\n            <button id=\"navbar-user\">User</button>\n        </div>\n        <button onclick=\"document.getElementById('navbar-menu').classList.toggle('hided');\" id=\"navbar-menubtn\" class=\"navbar-menubtn hided\"><img src=\"/assets/base/menu.png\">Menu</button>\n        <div class=\"hided\" id=\"navbar-menu\">\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/home.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/tools.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/pages.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/apps.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/settings.png\"></button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\"><img src=\"/assets/base/other.png\"></button>\n        </div>\n    </nav>\n    <div class=\"thememanager-welcome hided\" id=\"welcome\">\n        <div class=\"center\">\n            <h1>Welcome!</h1>\n            <p>Welcome to Theme Manager! With this tool you can manage custom X-Center Themes! <br> Download a theme from the store, install it by opening the app (it will automatically delete itself), open Theme Manager and apply it! Remember: You can only have one theme enabled per time. The size limits are the same of the apps. If you want to restore the original X-Center theme, just click on the active theme.</p>\n            <button onclick=\"this.parentNode.parentNode.remove();\">Let's Start!</button>\n        </div>\n    </div>\n    <div class=\"thememanager\">\n        <h1>Theme Manager</h1>\n        <p>Install a theme by opening the app downloaded from the store and enable it here (one per time, click to enable it)</p>\n        <div class=\"themes\" id=\"themes\">\n            <h3>Your Themes</h3>\n            <p style=\"cursor: pointer;\" onclick=\"theme.switchMode(this.id)\" id=\"themes-mode\">Mode: Toggle (Click to switch to Remove)</p>\n        </div>\n    </div>\n    <footer class=\"hided\">\n        <div>\n            <p>X-Center 5.0 <br> Copyright 2022 @ Xarber</p>\n        </div>\n        <div>\n            <img onclick=\"document.body.scrollTop = 0;document.documentElement.scrollTop = 0;\" src=\"/assets/media/logo.png\" alt=\"\">\n        </div>\n    </footer>\n    <script>\n        var maxthemes = 100;\n        var activethemecontent = localStorage.getItem('XCenterThemeActive');\n        var activethemename = localStorage.getItem('XCenterThemeActiveName');\n        var activethemescripts = localStorage.getItem('XCenterThemeActiveScripts');\n        var theme = {\n            apply: function(id) {\n                if (document.getElementById(id) == null) return false;\n                if (document.getElementById('themes-mode').innerHTML == \"Mode: Remove (Click to switch to Toggle)\") {\n                    theme.remove(id);\n                    return;\n                }\n                var themeslot = document.getElementById(id).getAttribute('theme');\n                var themecontent = localStorage.getItem('XCenterTheme' + themeslot);\n                var themename = localStorage.getItem('XCenterTheme' + themeslot + \"Name\");\n                var themescripts = localStorage.getItem('XCenterTheme' + themeslot + \"Scripts\");\n                if (localStorage.getItem('XCenterThemeActive') == themecontent || localStorage.getItem('XCenterThemeActiveName') == themename || localStorage.getItem('XCenterThemeActiveScripts') == themescripts) {\n                    localStorage.removeItem('XCenterThemeActive');\n                    localStorage.removeItem('XCenterThemeActiveName');\n                    localStorage.removeItem('XCenterThemeActiveScripts');\n                    activethemecontent = null;\n                    activethemename = null;\n                    activethemescripts = null;\n                    document.getElementById(id).classList.remove('active');\n                } else {\n                    localStorage.setItem('XCenterThemeActive', themecontent);\n                    localStorage.setItem('XCenterThemeActiveName', themename);\n                    localStorage.setItem('XCenterThemeActiveScripts', themescripts);\n                    document.getElementById(id).classList.add('active');\n                    document.getElementById(activethemename.replaceAll(' ', '')).classList.remove('active');\n                    activethemecontent = themecontent;\n                    activethemename = themename;\n                    activethemescripts = themescripts;\n                }\n                CommonJS.toast({\n                    title: \"Reload Page To Apply\",\n                    type: \"warn\",\n                })\n            },\n            switchMode: function(id) {\n                var currentmode = document.getElementById(id).innerHTML;\n                var removetext = \"Mode: Remove (Click to switch to Toggle)\";\n                var toggletext = \"Mode: Toggle (Click to switch to Remove)\";\n                var themes = document.querySelectorAll('.theme');\n                for (const theme of themes) {\n                    theme.classList.toggle('remove');\n                }\n                if (currentmode == removetext) {\n                    document.getElementById(id).innerHTML = toggletext;\n                    for (const theme of themes) {\n                        theme.classList.remove('remove');\n                    }\n                } else if (currentmode == toggletext) {\n                    document.getElementById(id).innerHTML = removetext;\n                    for (const theme of themes) {\n                        theme.classList.add('remove');\n                    }\n                }\n            },\n            remove: function(id) {\n                var themeslot = document.getElementById(id).getAttribute('theme');\n                var themecontent = localStorage.getItem('XCenterTheme' + themeslot);\n                var themename = localStorage.getItem('XCenterTheme' + themeslot + \"Name\");\n                var themescripts = localStorage.getItem('XCenterTheme' + themeslot + \"Scripts\");\n                if (activethemecontent == themecontent || activethemename == themename || activethemescripts == themescripts) {\n                    localStorage.removeItem('XCenterThemeActive');\n                    localStorage.removeItem('XCenterThemeActiveName');\n                    localStorage.removeItem('XCenterThemeActiveScripts');\n                    activethemecontent = null;\n                    activethemename = null;\n                    activethemescripts = null;\n                    CommonJS.toast({\n                        title: \"Active Theme Removed\",\n                        type: \"Error\"\n                    })\n                }\n                localStorage.removeItem('XCenterTheme' + themeslot);\n                localStorage.removeItem('XCenterTheme' + themeslot + 'Name');\n                localStorage.removeItem('XCenterTheme' + themeslot + 'Scripts');\n                for (let i = ++themeslot;i < maxthemes;i++) {\n                    var afteri = +i + 1;\n                    localStorage.setItem('XCenterTheme' + i, localStorage.getItem('XCenterTheme' + afteri))\n                    localStorage.setItem('XCenterTheme' + i + 'Name', localStorage.getItem('XCenterTheme' + afteri + 'Name'))\n                    localStorage.setItem('XCenterTheme' + i + 'Scripts', localStorage.getItem('XCenterTheme' + afteri + 'Scripts'))\n                }\n                document.getElementById(id).remove();\n                CommonJS.toast({\n                    title: \"Theme Removed\",\n                    type: \"success\"\n                })\n            },\n            load: function() {\n                //<button class=\"theme active\" id=\"theme-id-or-name\" onclick=\"theme.apply(this.id)\">Theme Name</button>\n                activethemecontent = localStorage.getItem('XCenterThemeActive');\n                activethemename = localStorage.getItem('XCenterThemeActiveName');\n                activethemescripts = localStorage.getItem('XCenterThemeActiveScripts');\n                for (let i = 0;i < maxthemes;i++) {\n                    var themecontent = localStorage.getItem('XCenterTheme' + i);\n                    var themename = localStorage.getItem('XCenterTheme' + i + \"Name\");\n                    var themescripts = localStorage.getItem('XCenterTheme' + i + \"Scripts\");\n                    if (themecontent != null || themename != null || themescripts != null) {\n                        if (document.getElementById(themename.replaceAll(' ', '')) == null) {\n                            var themebutton = document.createElement('button');\n                            themebutton.innerHTML = themename;\n                            themebutton.setAttribute('class', 'theme');\n                            if (activethemecontent == themecontent || activethemename == themename || activethemescripts == themescripts) {\n                                themebutton.setAttribute('class', 'theme active');\n                            }\n                            themebutton.setAttribute('onclick', 'theme.apply(this.id)');\n                            themebutton.setAttribute('id', themename.replaceAll(' ', ''));\n                            themebutton.setAttribute('theme', i);\n                            document.getElementById('themes').appendChild(themebutton);\n                            console.group('THEME LOADED: ' + themename);\n                            console.log(themecontent);\n                            console.groupEnd()\n                        }\n                    } else {\n                        i = maxthemes;\n                    }\n                }\n            }\n        }\n        document.body.classList.add('dark');\n        theme.load();\n    </script>\n    <style>\n        .thememanager {padding: 10px;}\n        .thememanager-welcome {width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.459);position: fixed;top: 0;bottom: 0;left: 0;right: 0;}\n        .thememanager-welcome div {width: 80%;height: 60% !important;min-width: 500px;min-height: 300px;background-color: blue;padding: 10px;border-radius: 10px;margin: 0;position: relative;}\n        .thememanager-welcome div * {margin: 0;}\n        .thememanager-welcome div button {position: absolute;bottom: 0;left: 0;right: 0;border-radius: 0 0 10px 10px !important;background-color: rgba(0, 0, 0, 0.281);}\n        .themes {padding: 30px;background-color: rgba(255, 255, 255, 0.158);width: 100%;height: 80%;max-height: 500px;border-radius: 30px;overflow-y: auto;overflow-x: hidden;}\n        .theme {width: 100%;margin-bottom: 5px;margin-top: 5px;padding: 10px;background-color: transparent;text-align: left;border: 1px solid white;}\n        .theme.active {background-color: rgba(255, 255, 255, 0.253);background-image: url('/assets/base/success.png');background-size: 30px;background-repeat: no-repeat;background-position: calc(100% - 5px);}\n        .theme:hover {background-color: rgba(0, 255, 0, 0.253);}\n        .theme.active:hover {background-color: rgb(255, 0, 0, 0.253);}\n        .theme.remove:hover {background-color: rgb(255, 0, 0, 0.253);}\n    </style>\n\n<script type=\"text/javascript\">\n\n</script><style></style>"
                }
                localStorage['XCenterAppData2'] = JSON.stringify(data2);
                console.log('> THEMEMANAGER RECOVERED')
            }
            if (JSON.stringify(data3) == JSON.stringify(datadefault)) {
                //VERSIONSWITCHER
                data3 = {
                    type: "Tool",
                    title: "Version Switcher",
                    desc: "Switch to older versions with Version Switcher!",
                    author: "Xarber",
                    src: "data:image/png;base64,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",
                    id: "Version SwitcherFTQ7Y67576",
                    batch: "",
                    content: "\n\n\n    <!--PAGE INFO-->\n    <title id=\"pageinfo-title\">X-Center</title>\n    <link id=\"pageinfo-icon\" rel=\"shortcut icon\" href=\"/assets/media/logo.png\" type=\"image/x-icon\">\n    <meta id=\"ogpageinfo-title\" property=\"og:title\" content=\"X-Center 5.0\">\n    <meta id=\"ogpageinfo-name\" property=\"og:site_name\" content=\"X-Center\">\n    <meta id=\"ogpageinfo-icon\" property=\"og:image\" content=\"https://xcenter.netlify.app/assets/media/logo.png\">\n    <meta id=\"ogpageinfo-desc\" property=\"og:description\" content=\"Find every project and app made by Xarber and other users, all of them safe and tested. You can also find some tools or useful sites.\">\n    <meta id=\"ogpageinfo-link\" property=\"og:url\" content=\"https://xcenter.netlify.app/\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n    <!--BOOTSTRAP AND EXTERNAL LINKS-->\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\" crossorigin=\"anonymous\">\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js\" integrity=\"sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\" defer=\"\"></script>\n    <script src=\"/assets/js/crypto.js\" defer=\"\"></script>\n    \n    <!--XCENTER HEAD-->\n    <link rel=\"stylesheet\" href=\"/assets/base/style.css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/common.css\">\n    <script src=\"/assets/js/common.js\" defer=\"\"></script>\n    <script src=\"/assets/base/script.js\" defer=\"\"></script>\n    <script src=\"/assets/js/apps.js\" defer=\"\"></script>\n\n    <!--HIDED COMMONJS 5.0 FIXES-->\n    <nav class=\"new-navbar-light hided\" id=\"navbar\">\n        <div class=\"new-menu hided vertical-scroll\" id=\"new-menu\">\n          <button class=\"new-menu-button\" onclick=\"location.href = '/';\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"><h3>Home</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/tools';\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"><h3>Tools</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/shop';\"><img src=\"/assets/media/4.0/shop.png\" width=\"100%\" alt=\"\"><h3>Store</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarber';\"><img src=\"/assets/media/4.0/xarber.png\" width=\"100%\" alt=\"\"><h3>Xarber</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xwip';\"><img src=\"/assets/media/4.0/xwip.png\" width=\"100%\" alt=\"\"><h3>XWIP</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarbot';\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"><h3>Xarbot</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/os';\"><img src=\"/assets/media/4.0/os.png\" width=\"100%\" alt=\"\"><h3>OS</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/settings';\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"><h3>Settings</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/help';\"><img src=\"/assets/media/4.0/unknown.png\" width=\"100%\" alt=\"\"><h3>FAQ</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/feedback';\"><img src=\"/assets/media/4.0/chat.png\" width=\"100%\" alt=\"\"><h3>Feedback</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/about';\"><img src=\"/assets/media/4.0/info.png\" width=\"100%\" alt=\"\"><h3>About</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/map';\"><img src=\"/assets/media/4.0/plus.png\" width=\"100%\" alt=\"\"><h3>Site Map</h3></button>\n          <button class=\"new-menu-button\" onclick=\"RecentPage()\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"><h3>Other</h3></button>\n        </div>\n        <center>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/';\" id=\"new-navbar-home\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/tools';\" id=\"new-navbar-tools\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/xarbot';\" id=\"new-navbar-xarbot\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/os';\" id=\"new-navbar-OS\"><img src=\"/assets/media/4.0/unknown.png\" id=\"nav-OS\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/settings';\" id=\"new-navbar-settings\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"NewMenu()\" id=\"new-navbar-menu\"><img src=\"/assets/media/4.0/menu.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"RecentPage()\" id=\"new-navbar-other\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"></button>\n        </center>\n    </nav>\n    <div class=\"new-footer hided\">\n        <img src=\"/assets/media/logo.png\" width=\"80px\" height=\"80px\" alt=\"\">\n        <button class=\"new-gotop\" onclick=\"window.location = '#'\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-arrow-up-circle\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z\"></path></svg></button>\n        <h1>X-Center</h1>\n        <copyright>@ Copyright 2022 - Xarber</copyright>\n    </div>\n\n\n    <div class=\"nav-compenser\"><button></button></div>\n    <nav class=\"hided\">\n        <div id=\"navbar-pages\">\n            <button onclick=\"location.href = this.id;\" id=\"/\"><img src=\"/assets/base/home.png\">Home</button>\n            <button onclick=\"location.href = this.id;\" id=\"/tools/\"><img src=\"/assets/base/tools.png\">Tools</button>\n            <button onclick=\"location.href = this.id;\" id=\"/pages/\"><img src=\"/assets/base/pages.png\">Pages</button>\n            <button onclick=\"location.href = this.id;\" id=\"/apps/\"><img src=\"/assets/base/apps.png\">Apps</button>\n            <button onclick=\"location.href = this.id;\" id=\"/settings/\"><img src=\"/assets/base/settings.png\">Settings</button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\" id=\"navbar-other\"><img src=\"/assets/base/other.png\">Other</button>\n        </div>\n        <div id=\"navbar-users\">\n            <button id=\"navbar-notifications\">Notifications</button>\n            <button id=\"navbar-internet\">Internet</button>\n            <button id=\"navbar-user\">User</button>\n        </div>\n        <button onclick=\"document.getElementById('navbar-menu').classList.toggle('hided');\" id=\"navbar-menubtn\" class=\"navbar-menubtn hided\"><img src=\"/assets/base/menu.png\">Menu</button>\n        <div class=\"hided\" id=\"navbar-menu\">\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/home.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/tools.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/pages.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/apps.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/settings.png\"></button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\"><img src=\"/assets/base/other.png\"></button>\n        </div>\n    </nav>\n    <iframe id=\"versionswitcher-navigate\" class=\"hided\" style=\"position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 199;\" width=\"100%\" height=\"100%\" src=\"/version/4.0/\" frameborder=\"0\" allowfullscreen=\"\"></iframe>\n    <div id=\"versionswitcher\" class=\"versionswitcher center\">\n      <h1>Select A Version</h1>\n      <div>\n        <button onclick=\"versionswitcher.apply(this.innerHTML);\" class=\"rainbow\">5.0</button>\n        <button onclick=\"versionswitcher.apply(this.innerHTML);\">4.0</button>\n        <button onclick=\"versionswitcher.apply(this.innerHTML);\">3.0</button>\n        <button onclick=\"versionswitcher.apply(this.innerHTML);\">2.0</button>\n        <button onclick=\"versionswitcher.apply(this.innerHTML);\">1.0</button>\n      </div>\n    </div>\n    <footer class=\"hided\">\n        <div>\n            <p>X-Center 5.0 <br> Copyright 2022 @ Xarber</p>\n        </div>\n        <div>\n            <img onclick=\"document.body.scrollTop = 0;document.documentElement.scrollTop = 0;\" src=\"/assets/media/logo.png\" alt=\"\">\n        </div>\n    </footer>\n    <script>\n        document.body.classList.add('dark');\n        var versionswitcher = {\n            apply: function(version) {\n                if (version == null || version.length < 1) return false;\n                if (version == \"5.0\") window.location = \"/\";\n                document.getElementById('versionswitcher-navigate').setAttribute('src', '/version/' + version);\n                document.getElementById('versionswitcher-navigate').classList.remove('hided');\n                document.getElementById('versionswitcher').classList.add('hided');\n                return true;\n            }\n        }\n    </script>\n    <style>\n        .versionswitcher h1 {text-align: center;}\n        .versionswitcher div {width: 100%;height: 100%;max-height: 300px;border: 1px solid white;border-radius: 10px;padding: 10px;overflow-y: auto;overflow-x: hidden;}\n        .versionswitcher div button {width: 100%;height: 30px;padding: 0;text-align: center;color: black !important;margin: 5px 0px 5px 0px;}\n    </style>\n\n<script type=\"text/javascript\">\n\n</script><style></style>"
                }
                localStorage['XCenterAppData3'] = JSON.stringify(data3);
                console.log('> VERSIONSWITCHER RECOVERED')
            }
            console.log('Recovered All System Apps')
        },
        getInstallSlot: function() {
            if (data1.installed == false) {installSlot = 1;return};
            if (data2.installed == false) {installSlot = 2;return};
            if (data3.installed == false) {installSlot = 3;return};
            if (data4.installed == false) {installSlot = 4;return};
            if (data5.installed == false) {installSlot = 5;return};
            if (data6.installed == false) {installSlot = 6;return};
            if (data7.installed == false) {installSlot = 7;return};
            if (data8.installed == false) {installSlot = 8;return};
            if (data9.installed == false) {installSlot = 9;return};
            if (data10.installed == false) {installSlot = 10;return};
            if (data11.installed == false) {installSlot = 11;return};
            if (data12.installed == false) {installSlot = 12;return};
            if (data13.installed == false) {installSlot = 13;return};
            if (data14.installed == false) {installSlot = 14;return};
            if (data15.installed == false) {installSlot = 15;return};
            if (data16.installed == false) {installSlot = 16;return};
            if (data17.installed == false) {installSlot = 17;return};
            if (data18.installed == false) {installSlot = 18;return};
            if (data19.installed == false) {installSlot = 19;return};
            if (data20.installed == false) {installSlot = 20;return};
            if (data21.installed == false) {installSlot = 21;return};
            if (data22.installed == false) {installSlot = 22;return};
            if (data23.installed == false) {installSlot = 23;return};
            if (data24.installed == false) {installSlot = 24;return};
            if (data25.installed == false) {installSlot = 25;return};
            if (data26.installed == false) {installSlot = 26;return};
            if (data27.installed == false) {installSlot = 27;return};
            if (data28.installed == false) {installSlot = 28;return};
            if (data29.installed == false) {installSlot = 29;return};
            if (data30.installed == false) {installSlot = 30;return};
            if (data31.installed == false) {installSlot = 31;return};
            if (data32.installed == false) {installSlot = 32;return};
            installSlot = "none";
            console.log('Got Next Install Position')
        },
        show: function() {
            app0.src = data0.src ?? "data:image/png;base64,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";
            app1.src = data1.src ?? "data:image/png;base64,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";
            app1.src = data1.src ?? "data:image/png;base64,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";
            app2.src = data2.src ?? "data:image/png;base64,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";
            app3.src = data3.src ?? "data:image/png;base64,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";
            app4.src = data4.src ?? "data:image/png;base64,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";
            app5.src = data5.src ?? "data:image/png;base64,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";
            app6.src = data6.src ?? "data:image/png;base64,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";

            app0.setAttribute('appID', data0.id)
            app1.setAttribute('appID', data1.id)
            app2.setAttribute('appID', data2.id)
            app3.setAttribute('appID', data3.id)
            app4.setAttribute('appID', data4.id)
            app5.setAttribute('appID', data5.id)
            app6.setAttribute('appID', data6.id)
            app7.setAttribute('appID', data7.id)
            app8.setAttribute('appID', data8.id)
            app9.setAttribute('appID', data9.id)
            app10.setAttribute('appID', data10.id)
            app11.setAttribute('appID', data11.id)
            app12.setAttribute('appID', data12.id)
            app13.setAttribute('appID', data13.id)
            app14.setAttribute('appID', data14.id)
            app15.setAttribute('appID', data15.id)
            app16.setAttribute('appID', data16.id)
            app17.setAttribute('appID', data17.id)
            app18.setAttribute('appID', data18.id)
            app19.setAttribute('appID', data19.id)
            app20.setAttribute('appID', data20.id)
            app21.setAttribute('appID', data21.id)
            app22.setAttribute('appID', data22.id)
            app23.setAttribute('appID', data23.id)
            app24.setAttribute('appID', data24.id)
            app25.setAttribute('appID', data25.id)
            app26.setAttribute('appID', data26.id)
            app27.setAttribute('appID', data27.id)
            app28.setAttribute('appID', data28.id)
            app29.setAttribute('appID', data29.id)
            app30.setAttribute('appID', data30.id)
            app31.setAttribute('appID', data31.id)
            app32.setAttribute('appID', data32.id)
            console.log('Apps Ready to Launch')
        }
    },
    prepare: function() {
        console.log('> PREPARING FOR APPS PAGE')
        app.prepareSteps.createLimitWarn();
    },
    },
    },
    },