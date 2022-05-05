var Tools = {
    section: function(section) {
        document.getElementById(section).parentNode.classList.add('hided');
        document.getElementById(section.replaceAll('+caller', '')).classList.remove('hided');
    },
    goBack: function() {
        if (!document.getElementById('ToolsWebTabs').classList.contains('hided') || !document.getElementById('ToolsWebTools').classList.contains('hided')) {
            document.getElementById('ToolsWebTabs').classList.remove('hided');
            document.getElementById('ToolsWebTools').classList.remove('hided');
        } else if (!document.getElementById('tools-admin').classList.contains('hided') || !document.getElementById('tools-online').classList.contains('hided') || !document.getElementById('tools-basic').classList.contains('hided') || !document.getElementById('tools-other').classList.contains('hided') || !document.getElementById('tools-runned').classList.contains('hided'))  {
            document.getElementById('tools-admin').classList.add('hided');
            document.getElementById('tools-online').classList.add('hided');
            document.getElementById('tools-basic').classList.add('hided');
            document.getElementById('tools-other').classList.add('hided');
            document.getElementById('tools-runned').classList.add('hided');
            document.getElementById('tools-runned-results').innerHTML = "The process hasn't finished yet."
            document.getElementById('ToolsWebTabs').classList.remove('hided');
            document.getElementById('ToolsWebTools').classList.remove('hided');
        } else {
            if (!document.getElementById('tools-admin-console').classList.contains('hided') || !document.getElementById('tools-admin-optimize').classList.contains('hided') || !document.getElementById('tools-admin-files').classList.contains('hided')) {
                document.getElementById('tools-admin').classList.remove('hided');
                document.getElementById('tools-admin-console').classList.add('hided');
                document.getElementById('tools-admin-optimize').classList.add('hided');
                document.getElementById('tools-admin-files').classList.add('hided');
            } else if (!document.getElementById('tools-online-download').classList.contains('hided')) {
                document.getElementById('tools-online').classList.remove('hided');
                document.getElementById('tools-online-download').classList.add('hided');
            } else if (!document.getElementById('tools-basic-iso').classList.contains('hided') || !document.getElementById('tools-basic-plugin').classList.contains('hided')) {
                document.getElementById('tools-basic').classList.remove('hided');
                document.getElementById('tools-basic-iso').classList.add('hided');
                document.getElementById('tools-basic-plugin').classList.add('hided');
            } else if (!document.getElementById('tools-other-settings').classList.contains('hided') || !document.getElementById('tools-other-help').classList.contains('hided')) {
                document.getElementById('tools-other').classList.remove('hided');
                document.getElementById('tools-other-settings').classList.add('hided');
                document.getElementById('tools-other-help').classList.add('hided');
            } else {
                return false;
            }
        }
    },
    onMainPage: function() {
        if (document.getElementById('ToolsWebTabs').classList.contains('hided') || document.getElementById('ToolsWebTools').classList.contains('hided')) {
            document.getElementById('ToolsWebTabs').classList.add('hided');
            document.getElementById('ToolsWebTools').classList.add('hided');
            document.getElementById('ToolsWebBack').classList.remove('hided');
        } else {
            document.getElementById('ToolsWebTabs').classList.remove('hided');
            document.getElementById('ToolsWebTools').classList.remove('hided');
            document.getElementById('ToolsWebBack').classList.add('hided');
        }
    },
    notification: function(action, title, desc) {
        title = title ?? 'Notification';
        desc = desc ?? 'No Desc Provided';
        action = action ?? '';
        console.group('Notification Sent')
        console.log('Title: ' + title);
        console.log('Desc: ' + desc);
        console.log('Action: ' + action);
        console.groupEnd()
        var notification = document.createElement('div');
        var notificationclose = document.createElement('button');
        var notificationtitle = document.createElement('h3');
        var notificationdesc = document.createElement('p');
        notification.setAttribute('class', 'tools-notification');
        notification.setAttribute('onclick', 'this.classList.add("hided");' + action);
        notificationclose.setAttribute('onclick', 'this.parentNode.setAttribute("onclick", "");this.parentNode.classList.add("hided");var timeout = setTimeout(() => {this.parentNode.setAttribute("onclick", document.getElementById("tools-notification-hided-onclick").innerHTML)}, 1000)')
        notificationclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
        notificationtitle.innerHTML = title;
        notificationdesc.innerHTML = desc;
        notification.appendChild(notificationclose);
        notification.appendChild(notificationtitle);
        notification.appendChild(notificationdesc);
        document.getElementById('tools-notifications').appendChild(notification);
        if (!document.getElementById('tools-notifications-bkg').classList.contains('hided')) {
            var audio = new Audio('https://local-xcenter.netlify.app/assets/media/4.0/notification.mp3');
            audio.play();
            return;
        }
        if (!document.getElementById('tools-notification').classList.contains('hided')) {
            document.getElementById('tools-notification-hided').classList.remove('hided');
            var audio = new Audio('https://local-xcenter.netlify.app/assets/media/4.0/notification.mp3');
            audio.play();
            return;
        }
        if (!action.indexOf('this.classList.add("hided")') != -1) {action = 'this.classList.add("hided");' + action}
        document.getElementById('tools-notification-title').innerHTML = title;
        document.getElementById('tools-notification-cnt').innerHTML = desc;
        document.getElementById('tools-notification').setAttribute('onclick', action);
        document.getElementById('tools-notification').classList.remove('hided');
        var audio = new Audio('https://local-xcenter.netlify.app/assets/media/4.0/notification.mp3');
        audio.play();
    },
    close: function() {
        document.querySelector('.page').classList.add('hided');
        window.close();
        window.self.close();
        console.clear();
        return false;
    },
    //HERE ARE THE APP'S TOOLS, ONLY EDIT/ADD TOOLS DOWN HERE!!!
    consoleSend: function() {
        var value = document.getElementById('consoleType').value;
        var ConsoleCMDs = document.getElementById('tools-admin-console-cmds')
        if (value == 'Insert Command Here' || value == null || value.length < 1 || value == '') return;
        var ConsoleCMD = document.createElement('h3');
        ConsoleCMD.innerHTML = 'User> ' + value;
        ConsoleCMDs.appendChild(ConsoleCMD);
        document.getElementById('consoleType').value = '';
        CommonJS.download(CommonJS.random('10', 'num') + '.tools', 'Smart Tools Console Command \n' + value)
        ConsoleCMDs.scrollTop = ConsoleCMDs.scrollHeight;
    },
    GetOwnerShip: function() {

    },
    ResetOwnerShip: function() {

    },
    download: function() {

    },
    WinActivate: function() {

    },
    WinDefender: function() {

    },
    NetFix: function() {

    },
    CheckUPDs: function() {

    },
    DB: function() {

    },
    restore: function() {

    },
    restart: function() {
        console.clear();
        location.reload();
        return false;
    }
}
var par = CommonJS.params('get', 'tools', '0') ?? '0';
//CommonJS.params('del', 'tools');
if (par != '0') {
    document.getElementById('ToolsBase').classList.add('hided');
    document.getElementById('ToolsWeb').classList.remove('hided');
}
window.onkeydown = function(key) {
    if (key.keyCode == 13) {
        if (!document.getElementById('tools-admin-console').classList.contains('hided')) {
            document.getElementById('consoleSend').click()
        }
    }
}
window.onclick = function() {Tools.onMainPage()}