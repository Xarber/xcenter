var maxthemes = 100;
var activethemecontent = localStorage.getItem('XCenterThemeActive');
var activethemename = localStorage.getItem('XCenterThemeActiveName');
var activethemescripts = localStorage.getItem('XCenterThemeActiveScripts');
var theme = {
    apply: function(id) {
        if (document.getElementById(id) == null) return false;
        if (document.getElementById('themes-mode').innerHTML == "Mode: Remove (Click to switch to Toggle)") {
            theme.remove(id);
            return;
        }
        var themeslot = document.getElementById(id).getAttribute('theme');
        var themecontent = localStorage.getItem('XCenterTheme' + themeslot);
        var themename = localStorage.getItem('XCenterTheme' + themeslot + "Name");
        var themescripts = localStorage.getItem('XCenterTheme' + themeslot + "Scripts");
        if (localStorage.getItem('XCenterThemeActive') == themecontent || localStorage.getItem('XCenterThemeActiveName') == themename || localStorage.getItem('XCenterThemeActiveScripts') == themescripts) {
            localStorage.removeItem('XCenterThemeActive');
            localStorage.removeItem('XCenterThemeActiveName');
            localStorage.removeItem('XCenterThemeActiveScripts');
            activethemecontent = null;
            activethemename = null;
            activethemescripts = null;
            document.getElementById(id).classList.remove('active');
        } else {
            localStorage.setItem('XCenterThemeActive', themecontent);
            localStorage.setItem('XCenterThemeActiveName', themename);
            localStorage.setItem('XCenterThemeActiveScripts', themescripts);
            document.getElementById(id).classList.add('active');
            document.getElementById(activethemename.replaceAll(' ', '')).classList.remove('active');
            activethemecontent = themecontent;
            activethemename = themename;
            activethemescripts = themescripts;
        }
        CommonJS.toast({
            title: "Reload Page To Apply",
            type: "warn",
        })
    },
    switchMode: function(id) {
        var currentmode = document.getElementById(id).innerHTML;
        var removetext = "Mode: Remove (Click to switch to Toggle)";
        var toggletext = "Mode: Toggle (Click to switch to Remove)";
        var themes = document.querySelectorAll('.theme');
        for (const theme of themes) {
            theme.classList.toggle('remove');
        }
        if (currentmode == removetext) {
            document.getElementById(id).innerHTML = toggletext;
            for (const theme of themes) {
                theme.classList.remove('remove');
            }
        } else if (currentmode == toggletext) {
            document.getElementById(id).innerHTML = removetext;
            for (const theme of themes) {
                theme.classList.add('remove');
            }
        }
    },
    remove: function(id) {
        var themeslot = document.getElementById(id).getAttribute('theme');
        var themecontent = localStorage.getItem('XCenterTheme' + themeslot);
        var themename = localStorage.getItem('XCenterTheme' + themeslot + "Name");
        var themescripts = localStorage.getItem('XCenterTheme' + themeslot + "Scripts");
        if (activethemecontent == themecontent || activethemename == themename || activethemescripts == themescripts) {
            localStorage.removeItem('XCenterThemeActive');
            localStorage.removeItem('XCenterThemeActiveName');
            localStorage.removeItem('XCenterThemeActiveScripts');
            activethemecontent = null;
            activethemename = null;
            activethemescripts = null;
            CommonJS.toast({
                title: "Active Theme Removed",
                type: "Error"
            })
        }
        localStorage.removeItem('XCenterTheme' + themeslot);
        localStorage.removeItem('XCenterTheme' + themeslot + 'Name');
        localStorage.removeItem('XCenterTheme' + themeslot + 'Scripts');
        for (let i = ++themeslot;i < maxthemes;i++) {
            var afteri = +i + 1;
            localStorage.setItem('XCenterTheme' + i, localStorage.getItem('XCenterTheme' + afteri))
            localStorage.setItem('XCenterTheme' + i + 'Name', localStorage.getItem('XCenterTheme' + afteri + 'Name'))
            localStorage.setItem('XCenterTheme' + i + 'Scripts', localStorage.getItem('XCenterTheme' + afteri + 'Scripts'))
        }
        document.getElementById(id).remove();
        CommonJS.toast({
            title: "Theme Removed",
            type: "success"
        })
    },
    load: function() {
        //<button class="theme active" id="theme-id-or-name" onclick="theme.apply(this.id)">Theme Name</button>
        activethemecontent = localStorage.getItem('XCenterThemeActive');
        activethemename = localStorage.getItem('XCenterThemeActiveName');
        activethemescripts = localStorage.getItem('XCenterThemeActiveScripts');
        for (let i = 0;i < maxthemes;i++) {
            var themecontent = localStorage.getItem('XCenterTheme' + i);
            var themename = localStorage.getItem('XCenterTheme' + i + "Name");
            var themescripts = localStorage.getItem('XCenterTheme' + i + "Scripts");
            if (themecontent != null || themename != null || themescripts != null) {
                if (document.getElementById(themename.replaceAll(' ', '')) == null) {
                    var themebutton = document.createElement('button');
                    themebutton.innerHTML = themename;
                    themebutton.setAttribute('class', 'theme');
                    if (activethemecontent == themecontent || activethemename == themename || activethemescripts == themescripts) {
                        themebutton.setAttribute('class', 'theme active');
                    }
                    themebutton.setAttribute('onclick', 'theme.apply(this.id)');
                    themebutton.setAttribute('id', themename.replaceAll(' ', ''));
                    themebutton.setAttribute('theme', i);
                    document.getElementById('themes').appendChild(themebutton);
                    console.group('THEME LOADED: ' + themename);
                    console.log(themecontent);
                    console.groupEnd()
                }
            } else {
                i = maxthemes;
            }
        }
    }
}
document.body.classList.add('dark');
theme.load();