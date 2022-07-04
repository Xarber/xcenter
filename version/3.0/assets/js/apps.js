//THIS SCRIPT IS NOT MEANT TO BE USED ON EXTERNAL WEBSITES, DUE TO SOME LOCALSTORAGE NAMES OR SOME THINGS THAT CHANGES BETWEEN PAGES
console.log('%cAPP SCRIPT STARTED', 'padding: 10px;background-color: black;border-radius: 10px;')
var app0, app1, app2, app3, app4, app5, app6, app7, app8, app9, app10, app11, app12, app13, app14, app15, app16, app17, app18, app19, app20, app21, app22, app23, app24, app25, app26, app27, app28, app29, app30, app31, app32; //SLOT VARS
var data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24, data25, data26, data27, data28, data29, data30, data31, data32; //APP VARS
var datadefault = {
    installed: false,
    id: "AlongNameForAnotInstalledApp",
    src: "/assets/media/apps/blank.png"
}; //APP DEFAULT VALUES
var title, icon, content, id, type, launch, installData, installSlot, lastInstallSlot, AppID, slots, appinstall, appuninstall, xcenterappinstall, xcenterappuninstall, alreadyinstallcheck, tmpInstallSlot, tmpDataID, desc, author, batch; //INSTALL / UNINSTALL VARS
var data, applaunch, xcenterapplaunch, launchname, batchrows, batchruncommand, scriptlaunch, scriptidentifier, themelaunch, themeidentifier, themescripts; //LAUNCH VARS
var limitbkg, limits, limith1, limitp, limitok; //APP STORAGE LIMIT VARS
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
                    installed: true,
                    type: "Tool",
                    title: "X-Store",
                    desc: "Download apps from your favourite stores!",
                    author: "Xarber",
                    src: "/assets/media/apps/store.png",
                    id: "xstore",
                    batch: "",
                    content: "<script>\nlocation.href = '/store/';\n</script>"
                }
                localStorage['XCenterAppData0'] = JSON.stringify(data0);
                console.log('> STORE RECOVERED')
            }
            if (JSON.stringify(data1) == JSON.stringify(datadefault)) {
                //APPMAKER
                data1 = {
                    type: "Tool",
                    title: "App Maker",
                    desc: "Easily build wonderful apps with AppMaker!",
                    author: "Xarber",
                    src: "/assets/media/apps/appmaker.png",
                    id: "App MakerA9DDKIUWYR",
                    batch: "",
                    content: "\n\n\n    <!--PAGE INFO-->\n    <title id=\"pageinfo-title\">X-Center</title>\n    <link id=\"pageinfo-icon\" rel=\"shortcut icon\" href=\"/assets/media/logo.png\" type=\"image/x-icon\">\n    <meta id=\"ogpageinfo-title\" property=\"og:title\" content=\"X-Center 5.0\">\n    <meta id=\"ogpageinfo-name\" property=\"og:site_name\" content=\"X-Center\">\n    <meta id=\"ogpageinfo-icon\" property=\"og:image\" content=\"https://xcenter.netlify.app/assets/media/logo.png\">\n    <meta id=\"ogpageinfo-desc\" property=\"og:description\" content=\"Find every project and app made by Xarber and other users, all of them safe and tested. You can also find some tools or useful sites.\">\n    <meta id=\"ogpageinfo-link\" property=\"og:url\" content=\"https://xcenter.netlify.app/\">\n\n    <!--BOOTSTRAP AND EXTERNAL LINKS-->\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\" crossorigin=\"anonymous\">\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js\" integrity=\"sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\" defer=\"\"></script>\n    <script src=\"/assets/js/crypto.js\" defer=\"\"></script>\n    \n    <!--XCENTER HEAD-->\n    <link rel=\"stylesheet\" href=\"/assets/base/style.css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/common.css\">\n    <script src=\"/assets/js/common.js\" defer=\"\"></script>\n    <script src=\"/assets/base/script.js\" defer=\"\"></script>\n    <script src=\"/assets/js/apps.js\" defer=\"\"></script>\n\n    <!--HIDED COMMONJS 5.0 FIXES-->\n    <nav class=\"new-navbar-light hided\" id=\"navbar\">\n        <div class=\"new-menu hided vertical-scroll\" id=\"new-menu\">\n          <button class=\"new-menu-button\" onclick=\"location.href = '/';\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"><h3>Home</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/tools';\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"><h3>Tools</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/shop';\"><img src=\"/assets/media/4.0/shop.png\" width=\"100%\" alt=\"\"><h3>Store</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarber';\"><img src=\"/assets/media/4.0/xarber.png\" width=\"100%\" alt=\"\"><h3>Xarber</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xwip';\"><img src=\"/assets/media/4.0/xwip.png\" width=\"100%\" alt=\"\"><h3>XWIP</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarbot';\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"><h3>Xarbot</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/os';\"><img src=\"/assets/media/4.0/os.png\" width=\"100%\" alt=\"\"><h3>OS</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/settings';\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"><h3>Settings</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/help';\"><img src=\"/assets/media/4.0/unknown.png\" width=\"100%\" alt=\"\"><h3>FAQ</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/feedback';\"><img src=\"/assets/media/4.0/chat.png\" width=\"100%\" alt=\"\"><h3>Feedback</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/about';\"><img src=\"/assets/media/4.0/info.png\" width=\"100%\" alt=\"\"><h3>About</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/map';\"><img src=\"/assets/media/4.0/plus.png\" width=\"100%\" alt=\"\"><h3>Site Map</h3></button>\n          <button class=\"new-menu-button\" onclick=\"RecentPage()\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"><h3>Other</h3></button>\n        </div>\n        <center>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/';\" id=\"new-navbar-home\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/tools';\" id=\"new-navbar-tools\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/xarbot';\" id=\"new-navbar-xarbot\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/os';\" id=\"new-navbar-OS\"><img src=\"/assets/media/4.0/unknown.png\" id=\"nav-OS\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/settings';\" id=\"new-navbar-settings\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"NewMenu()\" id=\"new-navbar-menu\"><img src=\"/assets/media/4.0/menu.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"RecentPage()\" id=\"new-navbar-other\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"></button>\n        </center>\n    </nav>\n    <div class=\"new-footer hided\">\n        <img src=\"/assets/media/logo.png\" width=\"80px\" height=\"80px\" alt=\"\">\n        <button class=\"new-gotop\" onclick=\"window.location = '#'\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-arrow-up-circle\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z\"></path></svg></button>\n        <h1>X-Center</h1>\n        <copyright>@ Copyright 2022 - Xarber</copyright>\n    </div>\n\n\n    <div class=\"nav-compenser hided\"><button></button></div>\n    <nav class=\"hided\">\n        <div id=\"navbar-pages\">\n            <button onclick=\"location.href = this.id;\" id=\"/\"><img src=\"/assets/base/home.png\">Home</button>\n            <button onclick=\"location.href = this.id;\" id=\"/tools/\"><img src=\"/assets/base/tools.png\">Tools</button>\n            <button onclick=\"location.href = this.id;\" id=\"/pages/\"><img src=\"/assets/base/pages.png\">Pages</button>\n            <button onclick=\"location.href = this.id;\" id=\"/apps/\"><img src=\"/assets/base/apps.png\">Apps</button>\n            <button onclick=\"location.href = this.id;\" id=\"/settings/\"><img src=\"/assets/base/settings.png\">Settings</button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\" id=\"navbar-other\"><img src=\"/assets/base/other.png\">Other</button>\n        </div>\n        <div id=\"navbar-users\">\n            <button id=\"navbar-notifications\">Notifications</button>\n            <button id=\"navbar-internet\">Internet</button>\n            <button id=\"navbar-user\">User</button>\n        </div>\n        <button onclick=\"document.getElementById('navbar-menu').classList.toggle('hided');\" id=\"navbar-menubtn\" class=\"navbar-menubtn hided\"><img src=\"/assets/base/menu.png\">Menu</button>\n        <div class=\"hided\" id=\"navbar-menu\">\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/home.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/tools.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/pages.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/apps.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/settings.png\"></button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\"><img src=\"/assets/base/other.png\"></button>\n        </div>\n    </nav>\n    <div class=\"appmaker-welcome hided\" id=\"welcome\">\n        <div class=\"center\">\n            <h1>Welcome!</h1>\n            <p>Welcome to App Maker! With this tool you can build Apps, Web Games, Other Tools, or anything you want (On Web Format)! <br> Make easily light and fast apps with this tool! Import or Create a new project from the tool, give the app a name and (eventually) a description, and youre done! You have created your first X-Center App, using codes that you probably already know! <br> This app uses Electron technologies to allow you to also run scripts on the user's PC (only if allowed in the settings), and have all-system compatible apps!</p>\n            <button onclick=\"this.parentNode.parentNode.remove();\">Let's Start!</button>\n        </div>\n    </div>\n    <div id=\"appmaker\" class=\"appmaker\">\n        <h1>App Maker</h1>\n        <p>Fill the requested spots to create the app and then press \"BUILD\"</p>\n        <div id=\"appmaker-preview\" class=\"appmaker-preview\">\n            <button onclick=\"appmaker.preview()\">Refresh Preview</button>\n            <div id=\"appmaker-preview-shown\">\n                <div class=\"center\">\n                    <h1>Click on \"Refresh Preview\"</h1>\n                </div>\n            </div>\n        </div>\n        <div class=\"appmaker-build\">\n            <label for=\"appmaker-build-title\">App Title</label><br>\n            <input id=\"appmaker-build-title\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"App\"><br>\n            <label for=\"appmaker-build-desc\">App Desc</label><br>\n            <input id=\"appmaker-build-desc\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"\"><br>\n            <label for=\"appmaker-build-author\">App Author</label><br>\n            <input id=\"appmaker-build-author\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"User\"><br>\n            <label for=\"appmaker-build-type\">App Type</label><br>\n            <input id=\"appmaker-build-type\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"Auto (App / Tool / Game / Script / Theme)\"><br>\n            <label for=\"appmaker-build-icon\">App Icon Link</label><br>\n            <input id=\"appmaker-build-icon\" type=\"text\" onclick=\"this.value = '';this.setAttribute('onclick', '');\" value=\"https://xcenter.netlify.app/assets/media/apps/default.png\"><br>\n            <button id=\"appmaker-build\" onclick=\"appmaker.getInfo()\">BUILD</button>\n            <div>\n                <div>\n                    <p>HTML</p>\n                    <textarea name=\"appmaker-build-content-html\" id=\"appmaker-build-content-html\" cols=\"30\" rows=\"10\">&lt;h1 class=\"previewtitle\"&gt;This is a preview&lt;/h1&gt;&lt;p&gt;Click on \"Refresh Preview\" when you're done building your app to have a preview of what you've done. Batch scripts won't run on the preview. You can see in the input fields how this preview was made. For CSS styles you may have to insert a !important tag after the styles (not fundamental on the final app), to make them more important than the website's stylesheets.&lt;/p&gt;&lt;br&gt;&lt;h1&gt;CSS EXAMPLE:&lt;/h1&gt;&lt;br&gt;&lt;textarea cols=\"75\" rows=\"5\"&gt;h1 {color: blue !important;text-decoration: underline !important;}</textarea>\n                </div>\n                <div>\n                    <p>CSS</p>\n                    <textarea name=\"appmaker-build-content-css\" id=\"appmaker-build-content-css\" cols=\"30\" rows=\"10\">.previewtitle {color: blue !important;text-decoration: underline;margin: 10px;} textarea {background-color: transparent;color: white !important;}</textarea>\n                </div>\n                <div>\n                    <p>JS</p>\n                    <textarea name=\"appmaker-build-content-js\" id=\"appmaker-build-content-js\" cols=\"30\" rows=\"10\">document.querySelector(\".previewtitle\").setAttribute('onclick', 'alert(\"you clicked me!\")')</textarea>\n                </div>\n                <div>\n                    <p>BATCH</p>\n                    <textarea name=\"appmaker-build-content-bat\" id=\"appmaker-build-content-bat\" cols=\"30\" rows=\"10\"></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"hided\">\n        <div>\n            <p>X-Center 5.0 <br> Copyright 2022 @ Xarber</p>\n        </div>\n        <div>\n            <img onclick=\"document.body.scrollTop = 0;document.documentElement.scrollTop = 0;\" src=\"/assets/media/logo.png\" alt=\"\">\n        </div>\n    </footer>\n    <script>\n        var appmaker = {\n            convert: function(data, then) {\n                var type = data.type;\n                var title = data.title;\n                var desc = data.desc;\n                var author = data.author;\n                var icon = data.icon;\n                var html = data.html;\n                var css = data.css;\n                var js = data.js;\n                var bat = data.bat;\n                var id = data.id ?? title + CommonJS.random(\"10\", \"both\", \"upr\");\n                var tmp = document.createElement('div');\n                tmp.innerHTML = html;\n                var csscontainer = document.createElement('style');\n                csscontainer.innerHTML = css;\n                var jscontainer = document.createElement('script');\n                jscontainer.setAttribute('type', 'text/javascript');\n                jscontainer.innerHTML = \"\\n\" + js + \"\\n\";\n                tmp.appendChild(jscontainer);\n                tmp.appendChild(csscontainer);\n                then = then ?? \"convert\";\n                if (then == \"convert\") {\n                    var datanew = {\n                        type: type,\n                        title: title,\n                        desc: desc,\n                        author: author,\n                        src: icon,\n                        id: id,\n                        batch: bat,\n                        content: tmp.innerHTML\n                    }\n                    app.pack.build(\"\", datanew);\n                } else if (then == \"preview\") {\n                    document.getElementById('appmaker-preview-shown').innerHTML = tmp.innerHTML;\n                    var jscontainer = document.createElement('script');\n                    jscontainer.setAttribute('type', 'text/javascript');\n                    jscontainer.innerHTML = \"\\n\" + js + \"\\n\";\n                    document.body.appendChild(jscontainer)\n                    var csscontainer = document.createElement('style');\n                    csscontainer.innerHTML = css;\n                    document.head.insertBefore(csscontainer, document.head.firstChild)\n                }\n            },\n            getInfo: function(then) {\n                var type = appmaker.getType();\n                var author = document.getElementById('appmaker-build-author').value ?? \"User\";\n                var title = document.getElementById('appmaker-build-title').value ?? \"App\";\n                var description = document.getElementById('appmaker-build-desc').value ?? title + \" is a \" + type + \" made by \" + author + \".\";\n                var icon = document.getElementById('appmaker-build-icon').value ?? \"https://xcenter.netlify.app/assets/media/apps/default.png\";\n                var html = document.getElementById('appmaker-build-content-html').value ?? \"empty\";\n                var css = document.getElementById('appmaker-build-content-css').value ?? \"empty\";\n                var js = document.getElementById('appmaker-build-content-js').value ?? \"empty\";\n                var bat = document.getElementById('appmaker-build-content-bat').value ?? \"empty\";\n                then = then ?? \"convert\";\n                if (then == \"preview\") {\n                    appmaker.convert({\n                        type: type,\n                        title: title,\n                        desc: description,\n                        author: author,\n                        icon: icon,\n                        html: html,\n                        css: css,\n                        js: js,\n                        bat: bat,\n                    }, \"preview\");\n                    return;\n                }\n                appmaker.convert({\n                    type: type,\n                    title: title,\n                    desc: description,\n                    author: author,\n                    icon: icon,\n                    html: html,\n                    css: css,\n                    js: js,\n                    bat: bat,\n                })\n            },\n            getType: function() {\n                var html = document.getElementById('appmaker-build-content-html').value ?? \"empty\";\n                var css = document.getElementById('appmaker-build-content-css').value ?? \"empty\";\n                var js = document.getElementById('appmaker-build-content-js').value ?? \"empty\";\n                var bat = document.getElementById('appmaker-build-content-bat').value ?? \"empty\";\n                var type = document.getElementById('appmaker-build-type').value ?? \"Auto (App / Tool / Game / Script / Theme)\";\n                if (html.length < 1) html = \"empty\";\n                if (css.length < 1) css = \"empty\";\n                if (js.length < 1) js = \"empty\";\n                if (bat.length < 1) bat = \"empty\";\n                if (type == \"Auto (App / Tool / Game / Script / Theme)\") {\n                    if (html != \"empty\" && css != \"empty\" && js != \"empty\") type = \"App\";\n                    if (html != \"empty\" && css != \"empty\" && js != \"empty\" && bat != \"empty\") type = \"Tool\";\n                    if (html == \"empty\" && css == \"empty\" && (js != \"empty\" || bat != \"empty\")) type = \"Script\";\n                    if (html == \"empty\" && css != \"empty\" && bat == \"empty\") type = \"Theme\";\n                }\n                if (type == \"App\" || type == \"Tool\" || type == \"Game\" || type == \"Script\" || type == \"Theme\") {\n                    return type;\n                }\n                return \"App\";\n            },\n            preview: function() {\n                appmaker.getInfo(\"preview\");\n            }\n        }\n        setTimeout(() => {\n            appmaker.preview();\n        }, 250)\n        document.body.classList.add('dark');\n    </script>\n    <style>\n        .appmaker {background-color: transparent;padding: 0;margin: 10px;}\n        .appmaker input {width: 100%;background-color: transparent;color: white;border: 1px solid white;padding: 10px;border-radius: 10px;margin-bottom: 10px;}\n        .appmaker-build {width: 100% !important;border-radius: 0;height: 100%;}\n        .appmaker-build div {width: 100%;height: 100%;position: relative;}\n        .appmaker-build button {background-color: green;width: 100%;height: 100px;font-size: 50px;}\n        .appmaker-build div div {width: calc(50% - 20px);margin: 10px;aspect-ratio: 1 / 1;background-color: transparent;max-width: 400px;float: left;min-width: 300px;margin-bottom: 50px;}\n        .appmaker-build div div textarea {background-color: transparent;border: 1px solid white;border-radius: 10px;padding: 10px !important;color: white;width: 100%;height: 100%;overflow: auto;white-space: nowrap;}\n        .appmaker-welcome {width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.459);position: fixed;top: 0;bottom: 0;left: 0;right: 0;}\n        .appmaker-welcome div {width: 80%;height: 60% !important;min-width: 500px;min-height: 300px;background-color: blue;padding: 10px;border-radius: 10px;margin: 0;position: relative;}\n        .appmaker-welcome div * {margin: 0;}\n        .appmaker-welcome div button {position: absolute;bottom: 0;left: 0;right: 0;border-radius: 0 0 10px 10px !important;background-color: rgba(0, 0, 0, 0.281);}\n        .appmaker-preview {width: 100%;height: 500px;background-color: transparent;float: none !important;border-radius: 10px;padding: 0px;border: 1px solid white;margin-bottom: 10px;position: relative;}\n        .appmaker-preview button {width: 100%;height: 30px;background-color: transparent;color: white;font-size: unset;padding: unset;border-bottom: 1px solid white;position: absolute;top: 0;left: 0;right: 0;border-radius: 10px 10px 0px 0px !important;z-index: 10;}\n        .appmaker-preview div {width: 100%;position: absolute;top: 30px;bottom: 0px;right: 0px;left: 0px;z-index: 1;overflow: auto;}\n        @media (max-width: 675px) {\n            .appmaker-build div div {min-width: 100%;margin: 0;max-width: unset !important;margin-bottom: 50px;margin-top: 10px;min-height: 400px;float: unset !important;}\n        }\n    </style>\n\n<script type=\"text/javascript\">\n.appmaker {background-color: transparent;padding: 0;margin: 10px;}\n.appmaker input {width: 100%;background-color: transparent;color: white;border: 1px solid white;padding: 10px;border-radius: 10px;margin-bottom: 10px;}\n.appmaker-build {width: 100% !important;border-radius: 0;height: 100%;}\n.appmaker-build div {width: 100%;height: 100%;position: relative;}\n.appmaker-build button {background-color: green;width: 100%;height: 100px;font-size: 50px;}\n.appmaker-build div div {width: calc(50% - 20px);margin: 10px;aspect-ratio: 1 / 1;background-color: transparent;max-width: 400px;float: left;min-width: 300px;margin-bottom: 50px;}\n.appmaker-build div div textarea {background-color: transparent;border: 1px solid white;border-radius: 10px;padding: 10px !important;color: white;width: 100%;height: 100%;overflow: auto;white-space: nowrap;}\n.appmaker-welcome {width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.459);position: fixed;top: 0;bottom: 0;left: 0;right: 0;}\n.appmaker-welcome div {width: 80%;height: 60% !important;min-width: 500px;min-height: 300px;background-color: blue;padding: 10px;border-radius: 10px;margin: 0;position: relative;}\n.appmaker-welcome div * {margin: 0;}\n.appmaker-welcome div button {position: absolute;bottom: 0;left: 0;right: 0;border-radius: 0 0 10px 10px !important;background-color: rgba(0, 0, 0, 0.281);}\n.appmaker-preview {width: 100%;height: 500px;background-color: transparent;float: none !important;border-radius: 10px;padding: 0px;border: 1px solid white;margin-bottom: 10px;position: relative;}\n.appmaker-preview button {width: 100%;height: 30px;background-color: transparent;color: white;font-size: unset;padding: unset;border-bottom: 1px solid white;position: absolute;top: 0;left: 0;right: 0;border-radius: 10px 10px 0px 0px !important;z-index: 10;}\n.appmaker-preview div {width: 100%;position: absolute;top: 30px;bottom: 0px;right: 0px;left: 0px;z-index: 1;overflow: auto;}\n@media (max-width: 675px) {\n    .appmaker-build div div {min-width: 100%;margin: 0;max-width: unset !important;margin-bottom: 50px;margin-top: 10px;min-height: 400px;float: unset !important;}\n}\n</script><style>var appmaker = {\n    convert: function(data, then) {\n        var type = data.type;\n        var title = data.title;\n        var desc = data.desc;\n        var author = data.author;\n        var icon = data.icon;\n        var html = data.html;\n        var css = data.css;\n        var js = data.js;\n        var bat = data.bat;\n        var id = data.id ?? title + CommonJS.random(\"10\", \"both\", \"upr\");\n        var tmp = document.createElement('div');\n        tmp.innerHTML = html;\n        var csscontainer = document.createElement('style');\n        csscontainer.innerHTML = css;\n        var jscontainer = document.createElement('script');\n        jscontainer.setAttribute('type', 'text/javascript');\n        jscontainer.innerHTML = \"\\n\" + js + \"\\n\";\n        tmp.appendChild(jscontainer);\n        tmp.appendChild(csscontainer);\n        then = then ?? \"convert\";\n        if (then == \"convert\") {\n            var datanew = {\n                type: type,\n                title: title,\n                desc: desc,\n                author: author,\n                src: icon,\n                id: id,\n                batch: bat,\n                content: tmp.innerHTML\n            }\n            app.pack.build(\"\", datanew);\n        } else if (then == \"preview\") {\n            document.getElementById('appmaker-preview-shown').innerHTML = tmp.innerHTML;\n            var jscontainer = document.createElement('script');\n            jscontainer.setAttribute('type', 'text/javascript');\n            jscontainer.innerHTML = \"\\n\" + js + \"\\n\";\n            document.body.appendChild(jscontainer)\n            var csscontainer = document.createElement('style');\n            csscontainer.innerHTML = css;\n            document.head.insertBefore(csscontainer, document.head.firstChild)\n        }\n    },\n    getInfo: function(then) {\n        var type = appmaker.getType();\n        var author = document.getElementById('appmaker-build-author').value ?? \"User\";\n        var title = document.getElementById('appmaker-build-title').value ?? \"App\";\n        var description = document.getElementById('appmaker-build-desc').value ?? title + \" is a \" + type + \" made by \" + author + \".\";\n        var icon = document.getElementById('appmaker-build-icon').value ?? \"https://xcenter.netlify.app/assets/media/apps/default.png\";\n        var html = document.getElementById('appmaker-build-content-html').value ?? \"empty\";\n        var css = document.getElementById('appmaker-build-content-css').value ?? \"empty\";\n        var js = document.getElementById('appmaker-build-content-js').value ?? \"empty\";\n        var bat = document.getElementById('appmaker-build-content-bat').value ?? \"empty\";\n        then = then ?? \"convert\";\n        if (then == \"preview\") {\n            appmaker.convert({\n                type: type,\n                title: title,\n                desc: description,\n                author: author,\n                icon: icon,\n                html: html,\n                css: css,\n                js: js,\n                bat: bat,\n            }, \"preview\");\n            return;\n        }\n        appmaker.convert({\n            type: type,\n            title: title,\n            desc: description,\n            author: author,\n            icon: icon,\n            html: html,\n            css: css,\n            js: js,\n            bat: bat,\n        })\n    },\n    getType: function() {\n        var html = document.getElementById('appmaker-build-content-html').value ?? \"empty\";\n        var css = document.getElementById('appmaker-build-content-css').value ?? \"empty\";\n        var js = document.getElementById('appmaker-build-content-js').value ?? \"empty\";\n        var bat = document.getElementById('appmaker-build-content-bat').value ?? \"empty\";\n        var type = document.getElementById('appmaker-build-type').value ?? \"Auto (App / Tool / Game / Script / Theme)\";\n        if (html.length < 1) html = \"empty\";\n        if (css.length < 1) css = \"empty\";\n        if (js.length < 1) js = \"empty\";\n        if (bat.length < 1) bat = \"empty\";\n        if (type == \"Auto (App / Tool / Game / Script / Theme)\") {\n            if (html != \"empty\" && css != \"empty\" && js != \"empty\") type = \"App\";\n            if (html != \"empty\" && css != \"empty\" && js != \"empty\" && bat != \"empty\") type = \"Tool\";\n            if (html == \"empty\" && css == \"empty\" && (js != \"empty\" || bat != \"empty\")) type = \"Script\";\n            if (html == \"empty\" && css != \"empty\" && bat == \"empty\") type = \"Theme\";\n        }\n        if (type == \"App\" || type == \"Tool\" || type == \"Game\" || type == \"Script\" || type == \"Theme\") {\n            return type;\n        }\n        return \"App\";\n    },\n    preview: function() {\n        appmaker.getInfo(\"preview\");\n    }\n}\nsetTimeout(() => {\n    appmaker.preview();\n}, 1)\ndocument.body.classList.add('dark');</style>"
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
                    src: "/assets/media/apps/thememanager.png",
                    id: "Theme ManagerYCATC0Y5KR",
                    batch: "",
                    content: "\n\n\n    <!--PAGE INFO-->\n    <title id=\"pageinfo-title\">X-Center</title>\n    <link id=\"pageinfo-icon\" rel=\"shortcut icon\" href=\"/assets/media/logo.png\" type=\"image/x-icon\">\n    <meta id=\"ogpageinfo-title\" property=\"og:title\" content=\"X-Center 5.0\">\n    <meta id=\"ogpageinfo-name\" property=\"og:site_name\" content=\"X-Center\">\n    <meta id=\"ogpageinfo-icon\" property=\"og:image\" content=\"https://xcenter.netlify.app/assets/media/logo.png\">\n    <meta id=\"ogpageinfo-desc\" property=\"og:description\" content=\"Find every project and app made by Xarber and other users, all of them safe and tested. You can also find some tools or useful sites.\">\n    <meta id=\"ogpageinfo-link\" property=\"og:url\" content=\"https://xcenter.netlify.app/\">\n\n    <!--BOOTSTRAP AND EXTERNAL LINKS-->\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\" crossorigin=\"anonymous\">\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js\" integrity=\"sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\" defer=\"\"></script>\n    <script src=\"/assets/js/crypto.js\" defer=\"\"></script>\n    \n    <!--XCENTER HEAD-->\n    <link rel=\"stylesheet\" href=\"/assets/base/style.css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/common.css\">\n    <script src=\"/assets/js/common.js\" defer=\"\"></script>\n    <script src=\"/assets/base/script.js\" defer=\"\"></script>\n    <script src=\"/assets/js/apps.js\" defer=\"\"></script>\n\n    <!--HIDED COMMONJS 5.0 FIXES-->\n    <nav class=\"new-navbar-light hided\" id=\"navbar\">\n        <div class=\"new-menu hided vertical-scroll\" id=\"new-menu\">\n          <button class=\"new-menu-button\" onclick=\"location.href = '/';\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"><h3>Home</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/tools';\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"><h3>Tools</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/shop';\"><img src=\"/assets/media/4.0/shop.png\" width=\"100%\" alt=\"\"><h3>Store</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarber';\"><img src=\"/assets/media/4.0/xarber.png\" width=\"100%\" alt=\"\"><h3>Xarber</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xwip';\"><img src=\"/assets/media/4.0/xwip.png\" width=\"100%\" alt=\"\"><h3>XWIP</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarbot';\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"><h3>Xarbot</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/os';\"><img src=\"/assets/media/4.0/os.png\" width=\"100%\" alt=\"\"><h3>OS</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/settings';\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"><h3>Settings</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/help';\"><img src=\"/assets/media/4.0/unknown.png\" width=\"100%\" alt=\"\"><h3>FAQ</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/feedback';\"><img src=\"/assets/media/4.0/chat.png\" width=\"100%\" alt=\"\"><h3>Feedback</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/about';\"><img src=\"/assets/media/4.0/info.png\" width=\"100%\" alt=\"\"><h3>About</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/map';\"><img src=\"/assets/media/4.0/plus.png\" width=\"100%\" alt=\"\"><h3>Site Map</h3></button>\n          <button class=\"new-menu-button\" onclick=\"RecentPage()\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"><h3>Other</h3></button>\n        </div>\n        <center>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/';\" id=\"new-navbar-home\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/tools';\" id=\"new-navbar-tools\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/xarbot';\" id=\"new-navbar-xarbot\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/os';\" id=\"new-navbar-OS\"><img src=\"/assets/media/4.0/unknown.png\" id=\"nav-OS\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/settings';\" id=\"new-navbar-settings\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"NewMenu()\" id=\"new-navbar-menu\"><img src=\"/assets/media/4.0/menu.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"RecentPage()\" id=\"new-navbar-other\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"></button>\n        </center>\n    </nav>\n    <div class=\"new-footer hided\">\n        <img src=\"/assets/media/logo.png\" width=\"80px\" height=\"80px\" alt=\"\">\n        <button class=\"new-gotop\" onclick=\"window.location = '#'\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-arrow-up-circle\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z\"></path></svg></button>\n        <h1>X-Center</h1>\n        <copyright>@ Copyright 2022 - Xarber</copyright>\n    </div>\n    \n    <!--THEME MANAGER-->\n    <script src=\"script.js\" defer=\"\"></script>\n    <link rel=\"stylesheet\" href=\"style.css\">\n\n\n    <div class=\"nav-compenser hided\"><button></button></div>\n    <nav class=\"hided\">\n        <div id=\"navbar-pages\">\n            <button onclick=\"location.href = this.id;\" id=\"/\"><img src=\"/assets/base/home.png\">Home</button>\n            <button onclick=\"location.href = this.id;\" id=\"/tools/\"><img src=\"/assets/base/tools.png\">Tools</button>\n            <button onclick=\"location.href = this.id;\" id=\"/pages/\"><img src=\"/assets/base/pages.png\">Pages</button>\n            <button onclick=\"location.href = this.id;\" id=\"/apps/\"><img src=\"/assets/base/apps.png\">Apps</button>\n            <button onclick=\"location.href = this.id;\" id=\"/settings/\"><img src=\"/assets/base/settings.png\">Settings</button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\" id=\"navbar-other\"><img src=\"/assets/base/other.png\">Other</button>\n        </div>\n        <div id=\"navbar-users\">\n            <button id=\"navbar-notifications\">Notifications</button>\n            <button id=\"navbar-internet\">Internet</button>\n            <button id=\"navbar-user\">User</button>\n        </div>\n        <button onclick=\"document.getElementById('navbar-menu').classList.toggle('hided');\" id=\"navbar-menubtn\" class=\"navbar-menubtn hided\"><img src=\"/assets/base/menu.png\">Menu</button>\n        <div class=\"hided\" id=\"navbar-menu\">\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/home.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/tools.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/pages.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/apps.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/settings.png\"></button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\"><img src=\"/assets/base/other.png\"></button>\n        </div>\n    </nav>\n    <div class=\"thememanager-welcome hided\" id=\"welcome\">\n        <div class=\"center\">\n            <h1>Welcome!</h1>\n            <p>Welcome to Theme Manager! With this tool you can manage custom X-Center Themes! <br> Download a theme from the store, install it by opening the app (it will automatically delete itself), open Theme Manager and apply it! Remember: You can only have one theme enabled per time. The size limits are the same of the apps. If you want to restore the original X-Center theme, just click on the active theme.</p>\n            <button onclick=\"this.parentNode.parentNode.remove();\">Let's Start!</button>\n        </div>\n    </div>\n    <div class=\"thememanager\">\n        <h1>Theme Manager</h1>\n        <p>Install a theme by opening the app downloaded from the store and enable it here (one per time, click to enable it)</p>\n        <div class=\"themes\" id=\"themes\">\n            <h3>Your Themes</h3>\n            <p style=\"cursor: pointer;\" onclick=\"theme.switchMode(this.id)\" id=\"themes-mode\">Mode: Toggle (Click to switch to Remove)</p>\n        </div>\n    </div>\n    <footer class=\"hided\">\n        <div>\n            <p>X-Center 5.0 <br> Copyright 2022 @ Xarber</p>\n        </div>\n        <div>\n            <img onclick=\"document.body.scrollTop = 0;document.documentElement.scrollTop = 0;\" src=\"/assets/media/logo.png\" alt=\"\">\n        </div>\n    </footer>\n\n<script type=\"text/javascript\">\nvar maxthemes = 100;\nvar activethemecontent = localStorage.getItem('XCenterThemeActive');\nvar activethemename = localStorage.getItem('XCenterThemeActiveName');\nvar activethemescripts = localStorage.getItem('XCenterThemeActiveScripts');\nvar theme = {\n    apply: function(id) {\n        if (document.getElementById(id) == null) return false;\n        if (document.getElementById('themes-mode').innerHTML == \"Mode: Remove (Click to switch to Toggle)\") {\n            theme.remove(id);\n            return;\n        }\n        var themeslot = document.getElementById(id).getAttribute('theme');\n        var themecontent = localStorage.getItem('XCenterTheme' + themeslot);\n        var themename = localStorage.getItem('XCenterTheme' + themeslot + \"Name\");\n        var themescripts = localStorage.getItem('XCenterTheme' + themeslot + \"Scripts\");\n        if (localStorage.getItem('XCenterThemeActive') == themecontent || localStorage.getItem('XCenterThemeActiveName') == themename || localStorage.getItem('XCenterThemeActiveScripts') == themescripts) {\n            localStorage.removeItem('XCenterThemeActive');\n            localStorage.removeItem('XCenterThemeActiveName');\n            localStorage.removeItem('XCenterThemeActiveScripts');\n            activethemecontent = null;\n            activethemename = null;\n            activethemescripts = null;\n            document.getElementById(id).classList.remove('active');\n        } else {\n            localStorage.setItem('XCenterThemeActive', themecontent);\n            localStorage.setItem('XCenterThemeActiveName', themename);\n            localStorage.setItem('XCenterThemeActiveScripts', themescripts);\n            document.getElementById(id).classList.add('active');\n            document.getElementById(activethemename.replaceAll(' ', '')).classList.remove('active');\n            activethemecontent = themecontent;\n            activethemename = themename;\n            activethemescripts = themescripts;\n        }\n        CommonJS.toast({\n            title: \"Reload Page To Apply\",\n            type: \"warn\",\n        })\n    },\n    switchMode: function(id) {\n        var currentmode = document.getElementById(id).innerHTML;\n        var removetext = \"Mode: Remove (Click to switch to Toggle)\";\n        var toggletext = \"Mode: Toggle (Click to switch to Remove)\";\n        var themes = document.querySelectorAll('.theme');\n        for (const theme of themes) {\n            theme.classList.toggle('remove');\n        }\n        if (currentmode == removetext) {\n            document.getElementById(id).innerHTML = toggletext;\n            for (const theme of themes) {\n                theme.classList.remove('remove');\n            }\n        } else if (currentmode == toggletext) {\n            document.getElementById(id).innerHTML = removetext;\n            for (const theme of themes) {\n                theme.classList.add('remove');\n            }\n        }\n    },\n    remove: function(id) {\n        var themeslot = document.getElementById(id).getAttribute('theme');\n        var themecontent = localStorage.getItem('XCenterTheme' + themeslot);\n        var themename = localStorage.getItem('XCenterTheme' + themeslot + \"Name\");\n        var themescripts = localStorage.getItem('XCenterTheme' + themeslot + \"Scripts\");\n        if (activethemecontent == themecontent || activethemename == themename || activethemescripts == themescripts) {\n            localStorage.removeItem('XCenterThemeActive');\n            localStorage.removeItem('XCenterThemeActiveName');\n            localStorage.removeItem('XCenterThemeActiveScripts');\n            activethemecontent = null;\n            activethemename = null;\n            activethemescripts = null;\n            CommonJS.toast({\n                title: \"Active Theme Removed\",\n                type: \"Error\"\n            })\n        }\n        localStorage.removeItem('XCenterTheme' + themeslot);\n        localStorage.removeItem('XCenterTheme' + themeslot + 'Name');\n        localStorage.removeItem('XCenterTheme' + themeslot + 'Scripts');\n        for (let i = ++themeslot;i < maxthemes;i++) {\n            var afteri = +i + 1;\n            localStorage.setItem('XCenterTheme' + i, localStorage.getItem('XCenterTheme' + afteri))\n            localStorage.setItem('XCenterTheme' + i + 'Name', localStorage.getItem('XCenterTheme' + afteri + 'Name'))\n            localStorage.setItem('XCenterTheme' + i + 'Scripts', localStorage.getItem('XCenterTheme' + afteri + 'Scripts'))\n        }\n        document.getElementById(id).remove();\n        CommonJS.toast({\n            title: \"Theme Removed\",\n            type: \"success\"\n        })\n    },\n    load: function() {\n        //<button class=\"theme active\" id=\"theme-id-or-name\" onclick=\"theme.apply(this.id)\">Theme Name</button>\n        activethemecontent = localStorage.getItem('XCenterThemeActive');\n        activethemename = localStorage.getItem('XCenterThemeActiveName');\n        activethemescripts = localStorage.getItem('XCenterThemeActiveScripts');\n        for (let i = 0;i < maxthemes;i++) {\n            var themecontent = localStorage.getItem('XCenterTheme' + i);\n            var themename = localStorage.getItem('XCenterTheme' + i + \"Name\");\n            var themescripts = localStorage.getItem('XCenterTheme' + i + \"Scripts\");\n            if (themecontent != null || themename != null || themescripts != null) {\n                if (document.getElementById(themename.replaceAll(' ', '')) == null) {\n                    var themebutton = document.createElement('button');\n                    themebutton.innerHTML = themename;\n                    themebutton.setAttribute('class', 'theme');\n                    if (activethemecontent == themecontent || activethemename == themename || activethemescripts == themescripts) {\n                        themebutton.setAttribute('class', 'theme active');\n                    }\n                    themebutton.setAttribute('onclick', 'theme.apply(this.id)');\n                    themebutton.setAttribute('id', themename.replaceAll(' ', ''));\n                    themebutton.setAttribute('theme', i);\n                    document.getElementById('themes').appendChild(themebutton);\n                    console.group('THEME LOADED: ' + themename);\n                    console.log(themecontent);\n                    console.groupEnd()\n                }\n            } else {\n                i = maxthemes;\n            }\n        }\n    }\n}\ndocument.body.classList.add('dark');\ntheme.load();\n</script><style>.thememanager {padding: 10px;}\n.thememanager-welcome {width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.459);position: fixed;top: 0;bottom: 0;left: 0;right: 0;}\n.thememanager-welcome div {width: 80%;height: 60% !important;min-width: 500px;min-height: 300px;background-color: blue;padding: 10px;border-radius: 10px;margin: 0;position: relative;}\n.thememanager-welcome div * {margin: 0;}\n.thememanager-welcome div button {position: absolute;bottom: 0;left: 0;right: 0;border-radius: 0 0 10px 10px !important;background-color: rgba(0, 0, 0, 0.281);}\n.themes {padding: 30px;background-color: rgba(255, 255, 255, 0.158);width: 100%;height: 80%;max-height: 500px;border-radius: 30px;overflow-y: auto;overflow-x: hidden;}\n.theme {width: 100%;margin-bottom: 5px;margin-top: 5px;padding: 10px;background-color: transparent;text-align: left;border: 1px solid white;}\n.theme.active {background-color: rgba(255, 255, 255, 0.253);background-image: url('/assets/base/success.png');background-size: 30px;background-repeat: no-repeat;background-position: calc(100% - 5px);}\n.theme:hover {background-color: rgba(0, 255, 0, 0.253);}\n.theme.active:hover {background-color: rgb(255, 0, 0, 0.253);}\n.theme.remove:hover {background-color: rgb(255, 0, 0, 0.253);}</style>"
                }
                localStorage['XCenterAppData2'] = JSON.stringify(data2);
                console.log('> THEMEMANAGER RECOVERED')
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
            app0.src = data0.src ?? "/assets/media/apps/blank.png";
            app1.src = data1.src ?? "/assets/media/apps/blank.png";
            app1.src = data1.src ?? "/assets/media/apps/blank.png";
            app2.src = data2.src ?? "/assets/media/apps/blank.png";
            app3.src = data3.src ?? "/assets/media/apps/blank.png";
            app4.src = data4.src ?? "/assets/media/apps/blank.png";
            app5.src = data5.src ?? "/assets/media/apps/blank.png";
            app6.src = data6.src ?? "/assets/media/apps/blank.png";
            app7.src = data7.src ?? "/assets/media/apps/blank.png";
            app8.src = data8.src ?? "/assets/media/apps/blank.png";
            app9.src = data9.src ?? "/assets/media/apps/blank.png";
            app10.src = data10.src ?? "/assets/media/apps/blank.png";
            app11.src = data11.src ?? "/assets/media/apps/blank.png";
            app12.src = data12.src ?? "/assets/media/apps/blank.png";
            app13.src = data13.src ?? "/assets/media/apps/blank.png";
            app14.src = data14.src ?? "/assets/media/apps/blank.png";
            app15.src = data15.src ?? "/assets/media/apps/blank.png";
            app16.src = data16.src ?? "/assets/media/apps/blank.png";
            app17.src = data17.src ?? "/assets/media/apps/blank.png";
            app18.src = data18.src ?? "/assets/media/apps/blank.png";
            app19.src = data19.src ?? "/assets/media/apps/blank.png";
            app20.src = data20.src ?? "/assets/media/apps/blank.png";
            app21.src = data21.src ?? "/assets/media/apps/blank.png";
            app22.src = data22.src ?? "/assets/media/apps/blank.png";
            app23.src = data23.src ?? "/assets/media/apps/blank.png";
            app24.src = data24.src ?? "/assets/media/apps/blank.png";
            app25.src = data25.src ?? "/assets/media/apps/blank.png";
            app26.src = data26.src ?? "/assets/media/apps/blank.png";
            app27.src = data27.src ?? "/assets/media/apps/blank.png";
            app28.src = data28.src ?? "/assets/media/apps/blank.png";
            app29.src = data29.src ?? "/assets/media/apps/blank.png";
            app30.src = data30.src ?? "/assets/media/apps/blank.png";
            app31.src = data31.src ?? "/assets/media/apps/blank.png";
            app32.src = data32.src ?? "/assets/media/apps/blank.png";

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
        app.prepareSteps.defineSlots();
        app.prepareSteps.fixLocalStorage();
        app.prepareSteps.getData();
        app.prepareSteps.sysAppRecover();
        app.prepareSteps.getInstallSlot();
        app.prepareSteps.show();
    },
    prepareExternal: function() {
        console.log('> PREPARING FOR EXTERNAL PAGE')
        app.prepareSteps.createLimitWarn();
        app.prepareSteps.fixLocalStorage();
        app.prepareSteps.getData();
        app.prepareSteps.sysAppRecover();
        app.prepareSteps.getInstallSlot();
    },
    reloadApps: function() {
        console.log('> RELOADING APPS')
        app.prepareSteps.fixLocalStorage();
        app.prepareSteps.getData();
        app.prepareSteps.getInstallSlot();
        app.prepareSteps.sysAppRecover();
        app.prepareSteps.show();
    },
    install: function(data, slot) {
        //NOT RECCOMENDED TO DEFINE SLOT, THIS COULD REPLACE AN EXISTING APP!!!
        /*EXAMPLE":
            app.install({
                title: "app",
                icon: "https://example.com/icon.png",
                id: "APPID01234",
                type: "js", //js / html / bat (more difficult to use, may not launch)
                content: "alert('hello world')",
            }, "1") //THE "1" IS THE SLOT. USE 0 TO REPLACE THE STORE
        */
        if (data.content == null) return false;
        if (data.icon == null && data.title == null && data.src == null) return false;
        if (data.id == null && data.title == null) return false;
        if (data.id == "AlongNameForAnotInstalledApp") return false;
        if (installSlot == "none") return false;
        tmpDataID = data.id ?? data.title;
        tmpInstallSlot = app.alreadyInstallCheck(tmpDataID);
        if (tmpInstallSlot != false || tmpInstallSlot === "0") installSlot = tmpInstallSlot;
        installSlot = data.slot ?? installSlot;
        if (data.type == "js") {
            console.log("Old App Version Detected");
            data.content = "<script>\n" + data.content + "\n</script>";
            data.type = "Script";
            console.log("Converted to new version, resuming install...");
        }
        document.getElementById('new-xcenter-app-install-cancel').classList.remove('hided');
        document.getElementById('new-xcenter-app-install-icon').src = data.icon ?? data.src ?? "/assets/media/apps/app.png";
        document.getElementById('new-xcenter-app-install-title').innerHTML = data.title ?? "";
        document.getElementById('new-xcenter-app-install').classList.remove('hided');
        appinstall = setTimeout(() => {
            document.getElementById('new-xcenter-app-install-cancel').classList.add('hided')
            data.title = data.title ?? "App";
            data.id = data.id ?? data.title + CommonJS.random('10', 'num', 'upr');
            data.type = data.type ?? "App";
            title = data.title;
            icon = data.icon ?? data.src ?? "/assets/media/apps/app.png";
            content = data.content;
            id = data.id;
            type = data.type;
            desc = data.desc;
            author = data.author;
            batch = data.batch;
            installData = {
                installed: true,
                type: type,
                title: title,
                desc: desc,
                author: author,
                src: icon,
                id: id,
                batch: batch,
                content: content
            }
            installSlot = slot ?? installSlot;
            lastInstallSlot = installSlot;
            localStorage['XCenterAppData' + installSlot] = JSON.stringify(installData);
            app.reloadApps();
            console.log('Installed "' + title + '" on slot "' + lastInstallSlot + '".');
            document.getElementById('new-xcenter-app-install').classList.add('hided')
            return true;
        }, 5000);
    },
    silentInstall: function(data, slot) {
        //NOT RECCOMENDED TO DEFINE SLOT, THIS COULD REPLACE AN EXISTING APP!!!
        /*EXAMPLE":
            app.silentInstall({
            type: "App Type Here", //App
            title: "App Name Here", //App
            desc: "App Description Here", //App is a (TYPE) created by (AUTHOR).
            author: "Author Here", //User
            src: "//site.com/and/path/to/app/icon.png", //Link / default xcenter icon
            id: "APPID HERE", //Can leave blank
            batch: "BATCH SCRIPTS HERE", //Any .bat script
            content: "HTML CONTENT HERE" //Any html page
            }, "1") //THE "1" IS THE SLOT. USE 0 TO REPLACE THE STORE
        */
        if (data.content == null) return false;
        if (data.icon == null && data.title == null && data.src == null) return false;
        if (data.id == null && data.title == null) return false;
        if (data.id == "AlongNameForAnotInstalledApp") return false;
        if (installSlot == "none") return false;
        tmpDataID = data.id ?? data.title;
        tmpInstallSlot = app.alreadyInstallCheck(tmpDataID);
        if (tmpInstallSlot != false || tmpInstallSlot === "0") installSlot = tmpInstallSlot;
        installSlot = data.slot ?? installSlot;
        if (data.type == "js") {
            console.log("Old App Version Detected");
            data.content = "<script>\n" + data.content + "\n</script>";
            data.type = "Script";
            console.log("Converted to new version, resuming install...");
        }
        data.title = data.title ?? "App";
        data.id = data.id ?? data.title + CommonJS.random('10', 'num', 'upr');
        data.type = data.type ?? "App";
        title = data.title;
        icon = data.icon ?? data.src ?? "/assets/media/apps/app.png";
        content = data.content;
        id = data.id;
        type = data.type;
        desc = data.desc;
        author = data.author;
        batch = data.batch;
        if (type == "js") {
            console.log("Old App Version Detected");
            content = "<script>\n" + content + "\n</script>";
            type = "Script";
            console.log("Converted to new version, resuming install...");
        }
        installData = {
            installed: true,
            type: type,
            title: title,
            desc: desc,
            author: author,
            src: icon,
            id: id,
            batch: batch,
            content: content
        }
        installSlot = slot ?? installSlot;
        lastInstallSlot = installSlot;
        localStorage['XCenterAppData' + installSlot] = JSON.stringify(installData);
        app.reloadApps();
        console.log('Silently Installed "' + title + '" on slot "' + lastInstallSlot + '".');
        return true;
    },
    remoteInstall: function(URL, mode) {
        mode = mode ?? "Classic";
        fetch(URL).then(response => response.text()).then(data => {
            if (mode == "Classic") {
                return app.install(data);
            } else if (mode == "Silent") {
                return app.silentInstall(data);
            }
        });
    },
    alreadyInstallCheck: function(id) {
        /*EXAMPLE:
            var tmp = data.id ?? data.title;
            app.alreadyInstallCheck(tmp);
        */
        if (app0.getAttribute("appID").indexOf(id) != -1) return "0";
        if (app1.getAttribute("appID").indexOf(id) != -1) return 1;
        if (app2.getAttribute("appID").indexOf(id) != -1) return 2;
        if (app3.getAttribute("appID").indexOf(id) != -1) return 3;
        if (app4.getAttribute("appID").indexOf(id) != -1) return 4;
        if (app5.getAttribute("appID").indexOf(id) != -1) return 5;
        if (app6.getAttribute("appID").indexOf(id) != -1) return 6;
        if (app7.getAttribute("appID").indexOf(id) != -1) return 7;
        if (app8.getAttribute("appID").indexOf(id) != -1) return 8;
        if (app9.getAttribute("appID").indexOf(id) != -1) return 9;
        if (app10.getAttribute("appID").indexOf(id) != -1) return 10;
        if (app11.getAttribute("appID").indexOf(id) != -1) return 11;
        if (app12.getAttribute("appID").indexOf(id) != -1) return 12;
        if (app13.getAttribute("appID").indexOf(id) != -1) return 13;
        if (app14.getAttribute("appID").indexOf(id) != -1) return 14;
        if (app15.getAttribute("appID").indexOf(id) != -1) return 15;
        if (app16.getAttribute("appID").indexOf(id) != -1) return 16;
        if (app17.getAttribute("appID").indexOf(id) != -1) return 17;
        if (app18.getAttribute("appID").indexOf(id) != -1) return 18;
        if (app19.getAttribute("appID").indexOf(id) != -1) return 19;
        if (app20.getAttribute("appID").indexOf(id) != -1) return 20;
        if (app21.getAttribute("appID").indexOf(id) != -1) return 21;
        if (app22.getAttribute("appID").indexOf(id) != -1) return 22;
        if (app23.getAttribute("appID").indexOf(id) != -1) return 23;
        if (app24.getAttribute("appID").indexOf(id) != -1) return 24;
        if (app25.getAttribute("appID").indexOf(id) != -1) return 25;
        if (app26.getAttribute("appID").indexOf(id) != -1) return 26;
        if (app27.getAttribute("appID").indexOf(id) != -1) return 27;
        if (app28.getAttribute("appID").indexOf(id) != -1) return 28;
        if (app29.getAttribute("appID").indexOf(id) != -1) return 29;
        if (app30.getAttribute("appID").indexOf(id) != -1) return 30;
        if (app31.getAttribute("appID").indexOf(id) != -1) return 31;
        if (app32.getAttribute("appID").indexOf(id) != -1) return 32;
        return false;
    },
    uninstall: function(slot) {
        //YOU CAN GET THE SLOT FROM THE FUNCTION app.getSlot();
        if (document.getElementById('new-xcenter-app-uninstall') == null) {
            xcenterappuninstall = document.createElement('div');
            xcenterappuninstall.innerHTML = '<div class="inf-loading"><div></div></div><div class="center"><img src="/assets/media/apps/blank.png" id="new-xcenter-app-uninstall-icon" alt=""><p id="new-xcenter-app-uninstall-title">App</p></div><button id="new-xcenter-app-uninstall-cancel" onclick="document.getElementById(\'new-xcenter-app-uninstall\').classList.add(\'hided\');clearTimeout(appuninstall);"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg></button>';
            xcenterappuninstall.setAttribute('class', 'fullscreen new-xcenter-apps-uninstall hided');
            xcenterappuninstall.setAttribute('id', 'new-xcenter-app-uninstall');
            document.querySelector('body').appendChild(xcenterappuninstall);
        }
        if (slot.indexOf('new-xcenter-app-') != -1) {slot = slot.replaceAll('new-xcenter-app-')};
        slot = slot.replaceAll('undefined', '');
        if (slot == null || (isNaN(slot) == true && slot != "all")) return false;
        launchname = 'XCenterAppData' + slot;
        launchname = launchname.replaceAll('undefined', '');
        data = JSON.parse(localStorage[launchname]);
        if (data.installed == false) return false;
        document.getElementById('new-xcenter-app-uninstall-cancel').classList.remove('hided');
        document.getElementById('new-xcenter-app-uninstall-title').innerHTML = data.title ?? "";
        document.getElementById('new-xcenter-app-uninstall-icon').src = data.icon ?? data.src ?? "/assets/media/apps/app.png";
        document.getElementById('new-xcenter-app-uninstall').classList.remove('hided');
        appuninstall = setTimeout(() => {
            if (slot != null && slot != "all") {
                console.log('Uninstalling App');
                document.getElementById('new-xcenter-app-uninstall-cancel').classList.add('hided');
                localStorage.removeItem('XCenterAppData' + slot);
                app.reloadApps();
                document.getElementById('new-xcenter-app-uninstall').classList.add('hided');
                return true;
            } else if (slot == "all") {
                console.log('Uninstalling All Apps');
                document.getElementById('new-xcenter-app-uninstall-cancel').classList.add('hided');
                localStorage.removeItem('XCenterAppData0');
                localStorage.removeItem('XCenterAppData1');
                localStorage.removeItem('XCenterAppData2');
                localStorage.removeItem('XCenterAppData3');
                localStorage.removeItem('XCenterAppData4');
                localStorage.removeItem('XCenterAppData5');
                localStorage.removeItem('XCenterAppData6');
                localStorage.removeItem('XCenterAppData7');
                localStorage.removeItem('XCenterAppData8');
                localStorage.removeItem('XCenterAppData9');
                localStorage.removeItem('XCenterAppData10');
                localStorage.removeItem('XCenterAppData11');
                localStorage.removeItem('XCenterAppData12');
                localStorage.removeItem('XCenterAppData13');
                localStorage.removeItem('XCenterAppData14');
                localStorage.removeItem('XCenterAppData15');
                localStorage.removeItem('XCenterAppData16');
                localStorage.removeItem('XCenterAppData17');
                localStorage.removeItem('XCenterAppData18');
                localStorage.removeItem('XCenterAppData19');
                localStorage.removeItem('XCenterAppData20');
                localStorage.removeItem('XCenterAppData21');
                localStorage.removeItem('XCenterAppData22');
                localStorage.removeItem('XCenterAppData23');
                localStorage.removeItem('XCenterAppData24');
                localStorage.removeItem('XCenterAppData25');
                localStorage.removeItem('XCenterAppData26');
                localStorage.removeItem('XCenterAppData27');
                localStorage.removeItem('XCenterAppData28');
                localStorage.removeItem('XCenterAppData29');
                localStorage.removeItem('XCenterAppData30');
                localStorage.removeItem('XCenterAppData31');
                localStorage.removeItem('XCenterAppData32');
                app.reloadApps();
                document.getElementById('new-xcenter-app-uninstall').classList.add('hided');
                return true;
            }
        },5000)
    },
    getSlot: function(data) {
        /*EXAMPLE: (REMEMBER, ID HAS THE PRIORITY)
        app.getSlot({
            title: "APPNAME", //NOT RECCOMENDED
            id: "APPID01234" //RECCOMENDED
        })
        */
        AppID = data.id ?? data.title;
        if (AppID != null) {
            if (data1.id == AppID || data1.title == AppID) return 1;
            if (data2.id == AppID || data2.title == AppID) return 2;
            if (data3.id == AppID || data3.title == AppID) return 3;
            if (data4.id == AppID || data4.title == AppID) return 4;
            if (data5.id == AppID || data5.title == AppID) return 5;
            if (data6.id == AppID || data6.title == AppID) return 6;
            if (data7.id == AppID || data7.title == AppID) return 7;
            if (data8.id == AppID || data8.title == AppID) return 8;
            if (data9.id == AppID || data9.title == AppID) return 9;
            if (data10.id == AppID || data10.title == AppID) return 10;
            if (data11.id == AppID || data11.title == AppID) return 11;
            if (data12.id == AppID || data12.title == AppID) return 12;
            if (data13.id == AppID || data13.title == AppID) return 13;
            if (data14.id == AppID || data14.title == AppID) return 14;
            if (data15.id == AppID || data15.title == AppID) return 15;
            if (data16.id == AppID || data16.title == AppID) return 16;
            if (data17.id == AppID || data17.title == AppID) return 17;
            if (data18.id == AppID || data18.title == AppID) return 18;
            if (data19.id == AppID || data19.title == AppID) return 19;
            if (data20.id == AppID || data20.title == AppID) return 20;
            if (data21.id == AppID || data21.title == AppID) return 21;
            if (data22.id == AppID || data22.title == AppID) return 22;
            if (data23.id == AppID || data23.title == AppID) return 23;
            if (data24.id == AppID || data24.title == AppID) return 24;
            if (data25.id == AppID || data25.title == AppID) return 25;
            if (data26.id == AppID || data26.title == AppID) return 26;
            if (data27.id == AppID || data27.title == AppID) return 27;
            if (data28.id == AppID || data28.title == AppID) return 28;
            if (data29.id == AppID || data29.title == AppID) return 29;
            if (data30.id == AppID || data30.title == AppID) return 30;
            if (data31.id == AppID || data31.title == AppID) return 31;
            if (data32.id == AppID || data32.title == AppID) return 32;
            return app.alreadyInstallCheck(AppID);
        } else {
            return false;
        }
        console.log('Got App Slot')
    },
    launch: function(slot, eventualdata) {
        if (document.getElementById('new-xcenter-apps-mode') != null) {
            if (document.getElementById('new-xcenter-apps-mode').innerHTML == "pack") {
                app.pack.build(slot)
                return;
            } else if (document.getElementById('new-xcenter-apps-mode').innerHTML == "uninstall") {
                app.uninstall(slot)
                return;
            }
        }
        if (eventualdata != null && eventualdata.length > 0) {
            data = JSON.parse(eventualdata);
        } else {
            if (slot.indexOf('new-xcenter-app-') != -1) {slot = slot.replaceAll('new-xcenter-app-')};
            launchname = 'XCenterAppData' + slot;
            launchname = launchname.replaceAll('undefined', '');
            data = JSON.parse(localStorage[launchname]);
            if (data.installed == false) return false;
        }
        console.log('Launching App')
        console.log(data)
        if (data.type == "js") {
            console.log("Old App Version Detected");
            data.content = "<script>\n" + data.content + "\n</script>";
            data.type = "Script";
            console.log("Converted to new version, launching...");
        }
        type = data.type ?? "App";
        title = data.title ?? "App";
        desc = data.desc ?? "";
        author = data.author ?? "User";
        icon = data.src ?? "/assets/media/apps/default.png";
        id = data.id;
        batch = data.batch;
        content = data.content;
        if (document.getElementById('new-xcenter-app-launch') == null) {
            xcenterapplaunch = document.createElement('div');
            xcenterapplaunch.innerHTML = '<div class="inf-loading"><div></div></div><div class="center"><img src="/assets/media/apps/blank.png" id="new-xcenter-app-launch-icon" alt=""><p id="new-xcenter-app-launch-title">App</p></div><button id="new-xcenter-app-launch-cancel" onclick="document.getElementById(\'new-xcenter-app-launch\').classList.add(\'hided\');clearTimeout(applaunch);"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg></button>';
            xcenterapplaunch.setAttribute('class', 'fullscreen new-xcenter-apps-launch hided');
            xcenterapplaunch.setAttribute('id', 'new-xcenter-app-launch');
            document.querySelector('body').appendChild(xcenterapplaunch);
        }
        document.getElementById('new-xcenter-app-launch-icon').src = icon;
        document.getElementById('new-xcenter-app-launch-title').innerHTML = title;
        document.getElementById('new-xcenter-app-launch-cancel').classList.remove('hided');
        document.getElementById('new-xcenter-app-launch').classList.remove('hided');
        applaunch = setTimeout(() => {
            document.getElementById('new-xcenter-app-launch-cancel').classList.add('hided');
            //OLD LAUNCH JUST APPENDED TO HEAD A SCRIPT WITH APP CONTENT's SCRIPTS!
            if (batch != null && batch.length > 0) {
                if (location.href.indexOf('files:///') === -1 || runbatchscripts == false || runbatchscripts == "false") {
                    CommonJS.toast({
                        title: "Batch Not Runned",
                        type: "error"
                    })
                } else {
                    if (command.toLowerCase().indexOf('shutdown') != -1 || command.toLowerCase().indexOf('del ') != -1 || command.toLowerCase().indexOf('taskkill') != -1 || command.toLowerCase().indexOf('sysprep') != -1) {
                        var batchrunalert = document.createElement('div');
                        var batchrunalerttxt = document.createElement('h3');
                        var batchrunalertactions = document.createElement('div');
                        var batchrunalertconfirm = document.createElement('button');
                        var batchrunalertcancel = document.createElement('button');
                        batchrunalert.setAttribute('style', 'position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 200;width: 100%;height: 100%;padding: 10px;background-color: rgb(32,37,41);');
                        batchrunalertactions.setAttribute('style', 'display: flex;position: absolute;bottom: 0;left: 0;right: 0;background-color: rgba(255, 255, 255, 0.200);')
                        batchrunalertconfirm.setAttribute('style', 'border-radius: 0 !important;flex-grow: 1;background-color: transparent !important;')
                        batchrunalertcancel.setAttribute('style', 'border-radius: 0 !important;flex-grow: 1;background-color: transparent !important;')
                        batchrunalertcancel.setAttribute('onclick', 'this.parentNode.parentNode.remove()');
                        batchrunalerttxt.innerHTML = "CAUTION! <br> You started an app that contains potential malware or that could damage your computer or make you lose your work. If you are sure about what you're doing, then continue with the process (NOT RECCOMENDED!), else click 'cancel'.";
                        batchrunalertcancel.innerHTML = "Cancel";
                        batchrunalertconfirm.innerHTML = "Confirm";
                        batchrunalertconfirm.onclick = function() {
                            batchrunalert.remove();
                            batchrows = CommonJS.countChar(batch, "\n");
                            ++batchrows;
                            for (let i = 0;i < batchrows;i++) {
                                batchruncommand = batch.split('\n')[0];
                                batch = batch.replaceAll(batchruncommand + "\n", "").replaceAll(batchruncommand, "");
                                app.run(batchruncommand, (output) => {
                                    console.log(output);
                                })
                            }
                        }
                        batchrunalert.appendChild(batchrunalerttxt);
                        batchrunalertactions.appendChild(batchrunalertconfirm);
                        batchrunalertactions.appendChild(batchrunalertcancel);
                        batchrunalert.appendChild(batchrunalertactions);
                        document.body.appendChild(batchrunalert);
                    } else {
                        batchrows = CommonJS.countChar(batch, "\n");
                        ++batchrows;
                        for (let i = 0;i < batchrows;i++) {
                            batchruncommand = batch.split('\n')[0];
                            batch = batch.replaceAll(batchruncommand + "\n", "").replaceAll(batchruncommand, "");
                            app.run(batchruncommand, (output) => {
                                console.log(output);
                            })
                        }
                    }
                }
            }
            if (type == "App" || type == "Game" || type == "Tool") {
                document.write(content + '<script src="/assets/js/apps.js"></script>');
            } else if (type == "Script") {
                /*scriptlaunch = document.createElement('script');
                scriptlaunch.innerHTML = content.replaceAll("<style></style>", "").replaceAll('<script type="text/javascript">', '').replaceAll("</script>", "");
                document.head.appendChild(scriptlaunch);*/
                scriptidentifier = CommonJS.random('10', 'both', 'both');
                document.head.innerHTML += content.replaceAll("<style></style>","").replaceAll("<script", '<script id="tmp-app-script-' + scriptidentifier + '"');
                scriptlaunch = document.createElement('script');
                scriptlaunch.innerHTML = document.getElementById('tmp-app-script-' + scriptidentifier).innerHTML;
                document.head.appendChild(scriptlaunch);
                document.getElementById('new-xcenter-app-launch').classList.add('hided');
                return;
            } else if (type == "Theme") {
                themeidentifier = title + CommonJS.random('10', 'both', 'both');
                themescripts = content.substring(content.indexOf('<script type="text/javascript">') + 31, content.lastIndexOf("</script>"));
                themelaunch = content.substring(content.indexOf('<style>') + 7, content.lastIndexOf("</style>"));
                themelaunch = themelaunch.replaceAll(';;', ';').replaceAll(';', '!important;');
                for (let i = 0;i < 100;i++) {
                    if (localStorage.getItem('XCenterTheme' + i + "Name") == null || localStorage.getItem('XCenterTheme' + i) == null || localStorage.getItem('XCenterTheme' + i + 'Scripts') == null) {
                        localStorage.setItem('XCenterTheme' + i + "Name", themeidentifier.replaceAll(themeidentifier.replaceAll(title, ''), ''));
                        localStorage.setItem('XCenterTheme' + i, themelaunch);
                        localStorage.setItem('XCenterTheme' + i + "Scripts", themescripts);
                        i = 100;
                    }
                }
                document.getElementById('new-xcenter-app-launch').classList.add('hided');
                CommonJS.toast({
                    title: "Theme Added",
                    type: "success"
                })
            }
            setTimeout(() => {
                document.getElementById('new-xcenter-app-launch').classList.add('hided');
            },5000)
        }, 5000);
    },
    mode: function(mode) {
        if (mode == 'pack') {
            document.getElementById('new-xcenter-apps-uninstall').classList.add('hided');
            document.getElementById('new-xcenter-apps-title').innerHTML = "New Pack";
            document.getElementById('new-xcenter-apps-desc').innerHTML = "Click on the app you want to make a pack of.";
            document.getElementById('new-xcenter-apps-mode').innerHTML = "pack";
            document.getElementById('new-xcenter-apps-packs').src = "/assets/media/apps/launch.png";
            document.getElementById('new-xcenter-apps-packs').setAttribute('onclick', 'app.mode("launch")');
        } else if (mode == 'launch') {
            document.getElementById('new-xcenter-apps-uninstall').classList.remove('hided');
            document.getElementById('new-xcenter-apps-title').innerHTML = "Apps";
            document.getElementById('new-xcenter-apps-desc').innerHTML = "Download apps from the shop and launch them here";
            document.getElementById('new-xcenter-apps-mode').innerHTML = "launch";
            document.getElementById('new-xcenter-apps-packs').src = "/assets/media/apps/pack.png";
            document.getElementById('new-xcenter-apps-packs').setAttribute('onclick', "document.getElementById('new-xcenter-apps-packages').classList.remove('hided')");
        } else if (mode == 'uninstall') {
            document.getElementById('new-xcenter-apps-uninstall').classList.add('hided');
            document.getElementById('new-xcenter-apps-title').innerHTML = "Uninstall";
            document.getElementById('new-xcenter-apps-desc').innerHTML = "Click on the app you want to uninstall.";
            document.getElementById('new-xcenter-apps-mode').innerHTML = "uninstall";
            document.getElementById('new-xcenter-apps-packs').src = "/assets/media/apps/launch.png";
            document.getElementById('new-xcenter-apps-packs').setAttribute('onclick', 'app.mode("launch")');
        }
    },
    runBatch: function(path) {
        if (location.href.indexOf('files:///') === -1 || runbatchscripts == false || runbatchscripts == "false") {
            CommonJS.toast({
                title: "Batch Not Runned",
                type: "error"
            })
            return;
        }
        "use strict";
        // The path to the .bat file
        var myBatFilePath = path;
        
        const spawn = require('child_process').spawn;
        const bat = spawn('cmd.exe', ['/c', myBatFilePath]);
        
        
        // Handle normal output
        bat.stdout.on('data', (data) => {
            // As said before, convert the Uint8Array to a readable string.
            var str = String.fromCharCode.apply(null, data);
            console.info(str);
        });
        
        // Handle error output
        bat.stderr.on('data', (data) => {
            // As said before, convert the Uint8Array to a readable string.
            var str = String.fromCharCode.apply(null, data);
            console.error(str);
        });
        
        // Handle on exit event
        bat.on('exit', (code) => {
            var preText = `Child exited with code ${code}`;
            console.log(preText)
            switch(code){
                case 0:
                    //ERROR CODE 0 HANDLE
                    break;
                case 1:
                    //ERROR CODE 1 HANDLE
                    break;
                case 2:
                    //ERROR CODE 2 HANDLE
                    break;
                case 3:
                    //ERROR CODE 3 HANDLE
                    break;
                //AND SO ON
            }
        });
    },
    run: function(command, callback) {
        if (location.href.indexOf('files:///') === -1 || runbatchscripts == false || runbatchscripts == "false") {
            CommonJS.toast({
                title: "Command Not Runned",
                type: "error",
                duration: "2s"
            })
            return false;;
        }
        const exec = require('child_process').exec;
        exec(command, (error, stdout, stderr) => { 
            callback(stdout);
        });
        /*EXAMPLE:
        execute('COMMAND', (output) => {
            console.log(output);
        });
        */
    },
    pack: {
        build: function(slot, eventualdata) {
            if (eventualdata != null) {
                title = eventualdata.title ?? "App";
                data = JSON.stringify(eventualdata);
                CommonJS.download(title + '.pkg', data);
            } else {
                if (slot.indexOf('new-xcenter-app-') != -1) {slot = slot.replaceAll('new-xcenter-app-')};
                launchname = 'XCenterAppData' + slot;
                launchname = launchname.replaceAll('undefined', '');
                data = JSON.parse(localStorage[launchname]);
                if (data.installed == false) return false;
                title = data.title ?? "App";
                if (title == null || title.length < 1) title = "App";
                CommonJS.download(title + '.pkg', JSON.stringify(data));
            }
            console.log('Builded App Package');
        },
        install: function(data) {
            data = JSON.parse(data);
            app.install(data);
        }
    },
};

//RUN SCRIPTS
if (window.location.pathname.indexOf('/apps/') != -1) {
    let AppUpload = document.querySelector("#new-xcenter-apps-upload"); //UPLOAD APP VAR
    AppUpload.addEventListener("change", () => {
        let files = AppUpload.files;
        if(files.length == 0) return;
        if(AppUpload.files[0].name.split(".")[1] != "pkg") {
            return false;
        }
        const file = files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            const file = e.target.result;
            const lines = file.split(/\r\n|\n/);
            app.pack.install(lines);
            AppUpload.value = "";
            AppUpload.value = null;
        };
        reader.onerror = (e) => alert(e.target.error.name);
        reader.readAsText(file);
    }); //UPLOAD APP PROCESS
    app.prepare();
    if (location.href.indexOf('files:///') === -1) {
        document.querySelector('.nav-compenser').classList.add('navbar-error');
        document.getElementById('new-xcenter-apps-limits-bkg').classList.remove('hided');
    }
} else {
    app.prepareExternal();
    if (window.location.pathname.indexOf('/store/') != -1) {
        if (location.href.indexOf('files:///') === -1) {
            document.querySelector('.nav-compenser').classList.add('navbar-error');
            document.getElementById('new-xcenter-apps-limits-bkg').classList.remove('hided');
        }
    } else if (location.href.indexOf('files:///') === -1) {
        CommonJS.toast({
            type: "warn",
            title: "App Storage Limited",
            duration: "2s"
        })
    }
}
console.log('%cAPP SCRIPT ENDED', 'padding: 10px;background-color: black;border-radius: 10px;')