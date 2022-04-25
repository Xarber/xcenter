var Tools = {
    section: function(section) {
        document.getElementById(section).parentNode.classList.add('hided');
        document.getElementById(section.replaceAll('+caller', '')).classList.remove('hided');
    }
}
var tools = {
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
    goBack: function() {
        if (!document.getElementById('ToolsWebTabs').classList.contains('hided') || !document.getElementById('ToolsWebTools').classList.contains('hided')) {
            document.getElementById('ToolsWebTabs').classList.remove('hided');
            document.getElementById('ToolsWebTools').classList.remove('hided');
        } else if (!document.getElementById('tools-admin').classList.contains('hided') || !document.getElementById('tools-online').classList.contains('hided') || !document.getElementById('tools-basic').classList.contains('hided') || !document.getElementById('tools-other').classList.contains('hided'))  {
            document.getElementById('tools-admin').classList.add('hided');
            document.getElementById('tools-online').classList.add('hided');
            document.getElementById('tools-basic').classList.add('hided');
            document.getElementById('tools-other').classList.add('hided');
            document.getElementById('ToolsWebTabs').classList.remove('hided');
            document.getElementById('ToolsWebTools').classList.remove('hided');
        } else {
            if (!document.getElementById('tools-admin-console').classList.contains('hided') || !document.getElementById('').classList.contains('hided')) {
                document.getElementById('tools-admin').classList.remove('hided');
                document.getElementById('tools-admin-console').classList.add('hided');
                document.getElementById('').classList.add('hided');
            } else if (!document.getElementById('').classList.contains('hided') || !document.getElementById('').classList.contains('hided')) {
                document.getElementById('tools-online').classList.remove('hided');
                document.getElementById('').classList.add('hided');
                document.getElementById('').classList.add('hided');
            } else if (!document.getElementById('').classList.contains('hided') || !document.getElementById('').classList.contains('hided')) {
                document.getElementById('tools-basic').classList.remove('hided');
                document.getElementById('').classList.add('hided');
                document.getElementById('').classList.add('hided');
            } else if (!document.getElementById('').classList.contains('hided') || !document.getElementById('').classList.contains('hided')) {
                document.getElementById('tools-other').classList.remove('hided');
                document.getElementById('').classList.add('hided');
                document.getElementById('').classList.add('hided');
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
window.onclick = function() {tools.onMainPage()}