//document.referrer
var doctitle = document.title;
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
var setupstep = 0;
var nextsetupstep = 1;
var lastsetupstep = 5;
var theme, changelog, notifications, runbatchscripts, coldbootversion; //FINAL SETTINGS VARS;
var autotheme, darktheme, tmpchangelog, majorchangelog, tmpnotifications, silentnotifications, currenttheme; //TMP SETTINGS VARS;
var xcenter = {
    app: {
        download: function() {

        }
    },
    setup: {
        show: function() {
            if (window.location.pathname != "/setup/") window.location = "/setup/";
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                var oldsetupstepcontent = document.getElementById("setup-step-" + afteri).innerHTML;
                document.getElementById("setup-step-" + afteri).innerHTML = "";
                document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML.replaceAll(oldsetupstepcontent, '') + document.getElementById("setup-step-" + afteri).innerHTML;
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
                if (selection != null) document.getElementById("setup-step-" + setupstep).innerHTML = selection;
                ++setupstep;
                ++nextsetupstep;
            } else if (setupstep == lastsetupstep) {
                document.getElementById("setup-" + setupstep).classList.add('hided');
                document.getElementById("setup-finish").classList.remove('hided');
                if (selection != null) document.getElementById("setup-step-" + setupstep).innerHTML = selection;
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
                document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML.replaceAll(oldsetupstepcontent, '') + document.getElementById("setup-step-" + afteri).innerHTML;
            }
        },
        review: function() {
            document.getElementById('setup-finish').classList.add('hided')
            document.getElementById('setup-review').classList.remove('hided');
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML + document.getElementById("setup-step-" + afteri).innerHTML;
            }
        },
        finish: function() {
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                var name = document.getElementById('setup-step-name-' + afteri);
                var value = document.getElementById('setup-step-' + afteri);
                localStorage.setItem(name, value);
            }
            if (document.getElementById('xcenter-setup-export').checked) {
                CommonJS.localStorageBackup.make('settings');
            }
            localStorage.setItem('xcenter-setup', 'finished');
            window.location = "/";
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
                window.location = "/";
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
            document.getElementById('xcenter-settings-coldbootversion-default').click();
        },
        get: function() {
            currenttheme = CommonJS.getTheme();
            autotheme = localStorage.getItem('settings-autotheme') ?? true;
            darktheme = localStorage.getItem('settings-darktheme') ?? true;
            tmpchangelog = localStorage.getItem('settings-showchangelog') ?? true;
            majorchangelog = localStorage.getItem('settings-majorupdchangelog') ?? false;
            tmpnotifications = localStorage.getItem('settings-notifications') ?? true;
            silentnotifications = localStorage.getItem('settings-silentnotifications') ?? false;
            runbatchscripts = localStorage.getItem('settings-batchscripts') ?? true;
            coldbootversion = localStorage.getItem('settings-coldbootversion') ?? "5.0";
            if (darktheme == true || darktheme == "true") {theme = "dark"} else if (darktheme == false || darktheme == "false") {theme = "light"}
            if (autotheme == true || autotheme == "true") theme = "auto";
            if (majorchangelog == true || majorchangelog == "true") {changelog = "major"} else if (changelog == true || changelog == "true") {changelog = true}
            if (tmpchangelog == false || tmpchangelog == "false") changelog = false;
            if (silentnotifications == true || silentnotifications == "true") {notifications = "silent"} else if (tmpnotifications == true || tmpnotifications == "true") {notifications = true}
            if (tmpnotifications == false) notifications = false;
            if ((autotheme == true || autotheme == "true") && currenttheme == "dark") {darktheme = true} else if ((autotheme == true || autotheme == "true") && currenttheme == "light") {darktheme = false};
            localStorage.setItem('settings-autotheme', autotheme)
            localStorage.setItem('settings-darktheme', darktheme)
            localStorage.setItem('settings-showchangelog', tmpchangelog)
            localStorage.setItem('settings-majorupdchangelog', majorchangelog)
            localStorage.setItem('settings-notifications', tmpnotifications)
            localStorage.setItem('settings-silentnotifications', silentnotifications)
            localStorage.setItem('settings-batchscripts', runbatchscripts)
            localStorage.setItem('settings-coldbootversion', coldbootversion)
            if (window.location.pathname == "/settings/") {
                document.getElementById('settings-autotheme').checked = false;
                document.getElementById('settings-darktheme').checked = false;
                document.getElementById('settings-showchangelog').checked = false;
                document.getElementById('settings-majorupdchangelog').checked = false;
                document.getElementById('settings-notifications').checked = false;
                document.getElementById('settings-silentnotifications').checked = false;
                document.getElementById('settings-batchscripts').checked = false;
                if (autotheme == true || autotheme == "true") document.getElementById('settings-autotheme').checked = true;
                if (darktheme == true || darktheme == "true") document.getElementById('settings-darktheme').checked = true;
                if (tmpchangelog == true || tmpchangelog == "true") document.getElementById('settings-showchangelog').checked = true;
                if (majorchangelog == true || majorchangelog == "true") document.getElementById('settings-majorupdchangelog').checked = true;
                if (tmpnotifications == true || tmpnotifications == "true") document.getElementById('settings-notifications').checked = true;
                if (silentnotifications == true || silentnotifications == "true") document.getElementById('settings-silentnotifications').checked = silentnotifications;
                if (runbatchscripts == true || runbatchscripts == "true") document.getElementById('settings-batchscripts').checked = runbatchscripts;
                document.getElementById('settings-coldbootversion').innerHTML = "Current: " + coldbootversion;
            }
        }
    }
}
xcenter.settings.get();
if (localStorage.getItem('XCenterLastSecondaryPage') == null) localStorage.setItem('XCenterLastSecondaryPage', '/help/')
function prepareNav() {
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
        document.getElementById('navbar-other').innerHTML = '<img src="/assets/base/other.png">' + pagelink + '';
        document.getElementById('navbar-other').setAttribute('class', 'navbuttonextend')
        localStorage.setItem('XCenterLastSecondaryPage', location.pathname);
    }
    if (navigator.onLine) {
        document.getElementById('navbar-internet').innerHTML = '<img src="/assets/base/wifi.png">';
    } else {
        document.getElementById('navbar-internet').innerHTML = '<img src="/assets/base/wifierror.png">';
    }
    if (localStorage.getItem('usersigned') == 'true') {
        document.getElementById('navbar-user').innerHTML = '<img src="/assets/base/usersigned.png">';
    } else {
        document.getElementById('navbar-user').innerHTML = '<img src="/assets/base/usersign.png">';
    }
    document.getElementById('navbar-notifications').innerHTML = '<img src="/assets/base/notifications.png">';
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
prepareNav()
window.onresize = function() {
    prepareNav();
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
if (localStorage.getItem('xcenter-setup') != "finished") {
    if (window.location.pathname == "/setup/") {
        xcenter.setup.show();
    } else {
        window.location = "/setup/";
    }
}