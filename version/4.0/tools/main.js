var Tools = {
    version: "12.0.0.0",
    section: function(section) {
        if (section != 'tools-runned+caller') {
            document.getElementById(section).parentNode.classList.add('hided');
            document.getElementById(section.replaceAll('+caller', '')).classList.remove('hided');
        } else {
            document.getElementById('tools-admin').classList.add('hided');
            document.getElementById('tools-online').classList.add('hided');
            document.getElementById('tools-basic').classList.add('hided');
            document.getElementById('tools-other').classList.add('hided');
            document.getElementById('tools-admin-console').classList.add('hided');
            document.getElementById('tools-admin-optimize').classList.add('hided');
            document.getElementById('tools-admin-files').classList.add('hided');
            document.getElementById('tools-online-download').classList.add('hided');
            document.getElementById('tools-basic-iso').classList.add('hided');
            document.getElementById('tools-basic-plugin').classList.add('hided');
            document.getElementById('tools-other-settings').classList.add('hided');
            document.getElementById('tools-other-help').classList.add('hided');
            document.getElementById('ToolsWebTabs').classList.add('hided');
            document.getElementById('ToolsWebTools').classList.add('hided');
            document.getElementById('tools-runned').classList.remove('hided');
        }
        
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
        setTimeout(() => {console.clear()}, 500);
        setTimeout(() => {window.close()}, 1000);
    },
    settings: function(a, c) {
        if (a == 'apply') {
            var winact = document.getElementById('tools-settings-winactivate').innerHTML;
            var ownerdir = document.getElementById('tools-settings-ownerdir').value;
            var downlink = document.getElementById('tools-settings-downloadlink').value;
            var windefender = document.getElementById('tools-settings-windefender').checked;
            localStorage.setItem('WinActivateVersion', winact);
            localStorage.setItem('OwnerShipDirectory', ownerdir);
            localStorage.setItem('CustomDownloadLink', downlink);
            localStorage.setItem('WindowsDefenderSet', windefender);
        } else if (a == 'get') {
            winactivateversion = localStorage.getItem('WinActivateVersion');
            ownershipdirectory = localStorage.getItem('OwnerShipDirectory');
            customdownloadlink = localStorage.getItem('CustomDownloadLink');
            windowsdefenderset = localStorage.getItem('WindowsDefenderSet');
            document.getElementById('tools-settings-winactivate').innerHTML = winactivateversion;
            document.getElementById('tools-settings-ownerdir').value = ownershipdirectory;
            document.getElementById('tools-settings-downloadlink').value = customdownloadlink;
            document.getElementById('tools-settings-windefender').checked = windowsdefenderset;
        } else if (a == 'reset') {
            if (c == false || c != null || c.length > 0) {
                localStorage.setItem('WinActivateVersion', 'Pro');
                localStorage.setItem('OwnerShipDirectory', '');
                localStorage.setItem('CustomDownloadLink', '');
                localStorage.setItem('WindowsDefenderSet', false);
            }
            document.getElementById('tools-settings-winactivate').innerHTML = 'Pro';
            document.getElementById('tools-settings-ownerdir').value = '';
            document.getElementById('tools-settings-downloadlink').value = '';
            document.getElementById('tools-settings-windefender').checked = false;
        }
    },
    launch: function(dir, args) {
        if (document.getElementById('tools-runned-results').innerHTML != 'No tool is currently executing.' && document.getElementById('tools-runned-results').innerHTML == 'The process hasn\'t finished yet.') {
            console.error('TOOL-LAUNCH > A tool is already running.');
            return false;
        }
        "use strict";
        // The path to the .bat file
        //EXAMPLE DIR: C:\\Path\\To\\User\\s\\file.bat;
        var myBatFilePath = dir;
        if (myBatFilePath == 'SMARTTOOLSLAUNCH' || myBatFilePath.length < 1 || myBatFilePath == null) myBatFilePath = '"C:\\Program Files\\com.xcenter.apps\\smart-tools\\Tools.exe"';
        document.getElementById('tools-runned-results').innerHTML = "The process hasn\'t finished yet.";
        args = args ?? 'noargs';
        const spawn = require('child_process').spawn;
        var bat = spawn('cmd.exe', ['/c', myBatFilePath + ' ' + args]);

        bat.stdout.on('data', (data) => {
            var str = String.fromCharCode.apply(null, data);
            console.info(str);
        });
        
        bat.stderr.on('data', (data) => {
            var str = String.fromCharCode.apply(null, data);
            console.error(str);
        });
        
        bat.on('exit', (code) => {
            var exitcode = $(code);
            Tools.notification('Tools.section("tools-runned+caller")', 'Tool Exited', 'A tool exited with code ' + exitcode + '.');
            if (exitcode == 0) {
                document.getElementById('tools-runned-results').innerHTML = exitcode + ': Fatal error, press F12 to read more.'
            } else if (exitcode == 1) {
                document.getElementById('tools-runned-results').innerHTML = exitcode + ': The process ended successfully.'
            } else if (exitcode > 1) {
                document.getElementById('tools-runned-results').innerHTML = exitcode + ': An error occurred.'
            }
            
        });
    },
    run: function(input) {
        "use strict";
        const spawn = require('child_process').spawn;
        var command = spawn('cmd.exe', ['/c', input]);
        Tools.notification('', 'Executed', 'A command was sent to the console.')
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
        //CommonJS.download(CommonJS.random('10', 'num') + '.tools', 'Smart Tools Console Command \n' + value)
        ConsoleCMDs.scrollTop = ConsoleCMDs.scrollHeight;
        var result = Tools.run(value);
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is currently running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'Command Sent');
            return true;
        }
    },
    GetOwnerShip: function(dir) {
        dir = dir ?? ownershipdirectory;
        var result = Tools.launch('', '/getowner ' + dir + '');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    ResetOwnerShip: function(dir) {
        dir = dir ?? ownershipdirectory;
        var result = Tools.launch('', '/resetowner ' + dir + '');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    download: function(url) {
        url = url ?? customdownloadlink;
        var result = Tools.launch('', '/download ' + url + '');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    WinActivate: function(version) {
        version = version ?? winactivateversion;
        var result = Tools.launch('', '/activate ' + version + '');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    WinDefender: function(type) {
        type = type ?? windowsdefenderset;
        var result = Tools.launch('', '/defender ' + type + '');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    iso: function(app) {
        if (app == null || app.length < 1) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Required args not provided.');
            return false;
        }
        var result = Tools.launch('', '/iso ' + app);
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    optimize: function(optimize) {
        if (optimize == null || optimize.length < 1) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Required args not provided.');
            return false;
        }
        var result = Tools.launch('', '/optimize ' + optimize + '');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    plugin: function(plugin, drive) {
        if (plugin == null || plugin.length < 1 || drive == null || drive.length < 1) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Required args not provided.');
            return false;
        }
        var result = Tools.launch('', '/plugin ' + plugin + ' ' + drive);
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    CheckUPDs: function() {
        var result = Tools.launch('', '/update');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    DB: function() {
        var result = Tools.launch('', '/dbupdate');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    remove: function(name) {
        if (name == null || name.length < 1) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Required args not provided.');
            return false;
        }
        var result = Tools.launch('', '/uninstall ' + name);
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool\'s execution started.');
            return true;
        }
    },
    restore: function() {
        var result = Tools.launch('', '/restore');
        if (result == false) {
            Tools.notification('Tools.section("tools-runned+caller")', 'Failed', 'Another tool is already running.');
            return false;
        } else {
            Tools.notification('Tools.section("tools-runned+caller")', 'Started', 'A tool requiring restart started.');
            Tools.close()
            return true;
        }
        
    },
    restart: function() {
        document.querySelector('.page').classList.add('hided');
        app.relaunch()
        app.quit()
        setTimeout(() => {console.clear()}, 500);
        setTimeout(() => {location.reload()}, 1000);
        return false;
    }
}
var par = CommonJS.params('get', 'tools', '0') ?? '0';
//CommonJS.params('del', 'tools');
if (par != '0') {
    document.getElementById('ToolsBase').classList.add('hided');
    document.getElementById('ToolsWeb').classList.remove('hided');
    var winactivateversion, ownershipdirectory, customdownloadlink, windowsdefenderset;
    Tools.settings('get');
}
window.onkeydown = function(key) {
    if (key.keyCode == 13) {
        if (!document.getElementById('tools-admin-console').classList.contains('hided')) {
            document.getElementById('consoleSend').click()
        }
    }
}
window.onclick = function() {Tools.onMainPage()}