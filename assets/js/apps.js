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
var singlehomekey = "m";
var multiplehomekeyfirst = "Control";
var multiplehomekeysecond = "m";
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
                    type: "Tool",
                    title: "X-Store",
                    desc: "Install and Update apps from your favourite stores!",
                    author: "Xarber",
                    src: "/assets/media/apps/store.png",
                    id: "X-Store9H594GZOMK",
                    batch: "",
                    content: "\n\n\n    <!--PAGE INFO-->\n    <title id=\"pageinfo-title\">X-Center</title>\n    <link id=\"pageinfo-icon\" rel=\"shortcut icon\" href=\"/assets/media/logo.png\" type=\"image/x-icon\">\n    <meta id=\"ogpageinfo-title\" property=\"og:title\" content=\"X-Center 5.0\">\n    <meta id=\"ogpageinfo-name\" property=\"og:site_name\" content=\"X-Center\">\n    <meta id=\"ogpageinfo-icon\" property=\"og:image\" content=\"https://xcenter.netlify.app/assets/media/logo.png\">\n    <meta id=\"ogpageinfo-desc\" property=\"og:description\" content=\"Find every project and app made by Xarber and other users, all of them safe and tested. You can also find some tools or useful sites.\">\n    <meta id=\"ogpageinfo-link\" property=\"og:url\" content=\"https://xcenter.netlify.app/\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n    <!--BOOTSTRAP AND EXTERNAL LINKS-->\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\" crossorigin=\"anonymous\">\n    <script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js\" integrity=\"sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2\" crossorigin=\"anonymous\" defer=\"\"></script>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\" defer=\"\"></script>\n    <script src=\"/assets/js/crypto.js\" defer=\"\"></script>\n    \n    <!--XCENTER HEAD-->\n    <link rel=\"stylesheet\" href=\"/assets/css/common.css\">\n    <link rel=\"stylesheet\" href=\"/assets/base/style.css\">\n    <script src=\"/assets/js/common.js\" defer=\"\"></script>\n    <script src=\"/assets/base/script.js\" defer=\"\"></script>\n    <script src=\"/assets/js/apps.js\" defer=\"\"></script>\n\n    <!--HIDED COMMONJS 5.0 FIXES-->\n    <nav class=\"new-navbar-light hided\" id=\"navbar\">\n        <div class=\"new-menu hided vertical-scroll\" id=\"new-menu\">\n          <button class=\"new-menu-button\" onclick=\"location.href = '/';\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"><h3>Home</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/tools';\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"><h3>Tools</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/shop';\"><img src=\"/assets/media/4.0/shop.png\" width=\"100%\" alt=\"\"><h3>Store</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarber';\"><img src=\"/assets/media/4.0/xarber.png\" width=\"100%\" alt=\"\"><h3>Xarber</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xwip';\"><img src=\"/assets/media/4.0/xwip.png\" width=\"100%\" alt=\"\"><h3>XWIP</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/xarbot';\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"><h3>Xarbot</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/os';\"><img src=\"/assets/media/4.0/os.png\" width=\"100%\" alt=\"\"><h3>OS</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/settings';\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"><h3>Settings</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/help';\"><img src=\"/assets/media/4.0/unknown.png\" width=\"100%\" alt=\"\"><h3>FAQ</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/feedback';\"><img src=\"/assets/media/4.0/chat.png\" width=\"100%\" alt=\"\"><h3>Feedback</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/about';\"><img src=\"/assets/media/4.0/info.png\" width=\"100%\" alt=\"\"><h3>About</h3></button>\n          <button class=\"new-menu-button\" onclick=\"location.href = '/map';\"><img src=\"/assets/media/4.0/plus.png\" width=\"100%\" alt=\"\"><h3>Site Map</h3></button>\n          <button class=\"new-menu-button\" onclick=\"RecentPage()\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"><h3>Other</h3></button>\n        </div>\n        <center>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/';\" id=\"new-navbar-home\"><img src=\"/assets/media/4.0/home.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/tools';\" id=\"new-navbar-tools\"><img src=\"/assets/media/4.0/tools.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/xarbot';\" id=\"new-navbar-xarbot\"><img src=\"/assets/media/4.0/xarbot.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/os';\" id=\"new-navbar-OS\"><img src=\"/assets/media/4.0/unknown.png\" id=\"nav-OS\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"location.href = '/settings';\" id=\"new-navbar-settings\"><img src=\"/assets/media/4.0/settings.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"NewMenu()\" id=\"new-navbar-menu\"><img src=\"/assets/media/4.0/menu.png\" width=\"100%\" alt=\"\"></button>\n          <button class=\"new-navbar-button\" onclick=\"RecentPage()\" id=\"new-navbar-other\"><img src=\"/assets/media/4.0/other.png\" width=\"100%\" alt=\"\"></button>\n        </center>\n    </nav>\n    <div class=\"new-footer hided\">\n        <img src=\"/assets/media/logo.png\" width=\"80px\" height=\"80px\" alt=\"\">\n        <button class=\"new-gotop\" onclick=\"window.location = '#'\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-arrow-up-circle\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z\"></path></svg></button>\n        <h1>X-Center</h1>\n        <copyright>@ Copyright 2022 - Xarber</copyright>\n    </div>\n\n\n    <div class=\"nav-compenser hided\"><button></button></div>\n    <nav id=\"store-nav\" class=\"hided\">\n        <div id=\"navbar-pages\">\n            <button style=\"display: none;visibility: hidden\" id=\"/\"></button>\n            <button style=\"display: none;visibility: hidden\" id=\"/tools/\"></button>\n            <button style=\"display: none;visibility: hidden\" id=\"/apps/\"></button>\n            <button style=\"display: none;visibility: hidden\" id=\"/pages/\"></button>\n            <button style=\"display: none;visibility: hidden\" id=\"/settings/\"></button>\n            <button style=\"display: none;visibility: hidden;\" onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\" id=\"navbar-other\"><img src=\"/assets/base/other.png\">Other</button>\n            \n            <button onclick=\"location.reload()\"><img src=\"/assets/base/quit.png\">Quit</button>\n            <button class=\"navbuttonextend\"><img src=\"/assets/media/apps/store.png\">Home</button>\n        </div>\n        <div id=\"navbar-users\">\n            <button onclick=\"store.section('search')\"><img src=\"/assets/media/apps/storesearch.png\">Search</button>\n            <button onclick=\"store.settings()\"><img src=\"/assets/base/settings.png\">Settings</button>\n            <button style=\"display: none;visibility: hidden;\" id=\"navbar-internet\"></button>\n            <button style=\"display: none;visibility: hidden;\" id=\"navbar-downloads\"><img src=\"/assets/media/store/download.png\" alt=\"\"></button>\n            <button style=\"display: none;visibility: hidden\" id=\"navbar-user\"></button>\n            <button style=\"display: none;visibility: hidden\" class=\"hided\" onclick=\"document.getElementById\" id=\"navbar-notifications\"></button>\n        </div>\n        <button onclick=\"document.getElementById('navbar-menu').classList.toggle('hided');\" id=\"navbar-menubtn\" class=\"navbar-menubtn hided\"><img src=\"/assets/base/menu.png\">Menu</button>\n        <div class=\"hided\" id=\"navbar-menu\">\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/home.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/tools.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/pages.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/apps.png\"></button>\n            <button onclick=\"location.href = this.id;\"><img src=\"/assets/base/settings.png\"></button>\n            <button onclick=\"location.href = localStorage.getItem('XCenterLastSecondaryPage')\"><img src=\"/assets/base/other.png\"></button>\n        </div>\n    </nav>\n    <div class=\"store-empty center hided\">\n        <h1>Nothing to see here...</h1>\n        <button onclick=\"store.add();\" class=\"rainbow\" style=\"color: black !important;\">Add a store</button>\n        <button onclick=\"store.resetStores();\">Restore default</button>\n    </div>\n    <div class=\"store-guide hided\">\n\n    </div>\n    <div class=\"store-external-download hided\" wasminimal=\"false\">\n        <div>\n            <img src=\"/assets/media/apps/app.png\" onclick=\"if (this.parentNode.parentNode.classList.contains('minimal') || this.parentNode.parentNode.getAttribute('wasminimal') == 'true') {this.parentNode.parentNode.classList.toggle('minimal');this.parentNode.parentNode.setAttribute('wasminimal', 'true');this.parentNode.parentNode.classList.remove('extend')}\" alt=\"\">\n            <h1>App Name</h1>\n            <button onclick=\"this.parentNode.parentNode.classList.toggle('extend');\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-chevron-down\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"></path></svg></button>\n            <button>Download</button>\n            <div>\n                <h3>Type</h3>\n                <p>App Description</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"store-settings hided\" id=\"new-xcenter-store-settings\">\n        <div class=\"center\">\n            <h3>Settings</h3>\n            <button id=\"store-settings-close\" onclick=\"this.parentNode.parentNode.classList.add('hided');\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-x-square\" viewBox=\"0 0 16 16\"><path d=\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"></path><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"></path></svg></button>\n            <div>\n                <h1>General</h1>\n                <div id=\"store-settings-stores\">\n                    <p>Your Stores (Click to remove or manually add)</p>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-1\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-2\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-3\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-4\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-5\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-6\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-7\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-8\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-9\">Empty</button>\n                    <button onclick=\"if (this.innerHTML != 'Empty') {store.remove(this.id.replaceAll('store-settings-stores-', ''))} else {store.manuallyadd(this.id.replaceAll('store-settings-stores-', ''))}\" id=\"store-settings-stores-10\">Empty</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"store-search hided\" id=\"store-search\">\n        <center><form action=\"#\" onsubmit=\"store.search();return false\"><input id=\"store-search-apps-value\" type=\"text\" value=\"Search\" onclick=\"this.value = '';this.setAttribute('onclick', '')\"></form></center>\n        <div id=\"store-search-apps\" class=\"hided\">\n            <h1 id=\"store-search-apps-title\">Search Results for \"\"</h1>\n        </div>\n    </div>\n    <div class=\"store hided\" id=\"store-home\">\n        <div class=\"store-best-apps\" id=\"store-apps\">\n            <h1>Apps</h1><br><br><hr>\n            <div class=\"hided\">\n                <img id=\"store-app-1\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-2\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-3\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-4\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-5\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-6\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-7\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-8\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-9\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-10\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-11\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-app-12\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n            </div>\n            <div class=\"store-section-empty\" id=\"store-apps-empty\">\n                <center>\n                    <img onclick=\"this.src = '/assets/media/apps/storeemptysectionsearching.png';setTimeout(() => {store.prepareSteps.loadStores();this.src = '/assets/media/apps/storeemptysection.png'},2000)\" src=\"/assets/media/apps/storeemptysection.png\" alt=\"\">\n                    <h1>Your stores do not contain any apps of this section.</h1><br><br>\n                    <button onclick=\"store.resetStores();\">Reset Stores</button><br><br><br>\n                    <button onclick=\"store.reload();\">Reload</button>\n                </center>\n            </div>\n            <div class=\"store-apps\" id=\"store-apps-container\"></div>\n        </div>\n        <div class=\"store-last-comeouts\" id=\"store-games\">\n            <h1>Games</h1><br><br><hr>\n            <div class=\"hided\">\n                <img id=\"store-comeouts-1\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-2\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-3\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-4\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-5\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-6\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-7\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-8\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-9\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-10\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-11\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-comeouts-12\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n            </div>\n            <div class=\"store-section-empty\" id=\"store-games-empty\">\n                <center>\n                    <img onclick=\"this.src = '/assets/media/apps/storeemptysectionsearching.png';setTimeout(() => {store.prepareSteps.loadStores();this.src = '/assets/media/apps/storeemptysection.png'},2000)\" src=\"/assets/media/apps/storeemptysection.png\" alt=\"\">\n                    <h1>Your stores do not contain any apps of this section.</h1><br><br>\n                    <button onclick=\"store.resetStores();\">Reset Stores</button><br><br><br>\n                    <button onclick=\"store.reload();\">Reload</button>\n                </center>\n            </div>\n            <div class=\"store-apps\" id=\"store-games-container\"></div>\n        </div>\n        <div class=\"store-updates\" id=\"store-themes\">\n            <h1>Themes</h1><br><br><hr>\n            <div class=\"hided\">\n                <img id=\"store-update-1\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-2\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-3\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-4\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-5\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-6\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-7\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-8\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-9\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-10\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-11\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-update-12\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n            </div>\n            <div class=\"store-section-empty\" id=\"store-themes-empty\">\n                <center>\n                    <img onclick=\"this.src = '/assets/media/apps/storeemptysectionsearching.png';setTimeout(() => {store.prepareSteps.loadStores();this.src = '/assets/media/apps/storeemptysection.png'},2000)\" src=\"/assets/media/apps/storeemptysection.png\" alt=\"\">\n                    <h1>Your stores do not contain any apps of this section.</h1><br><br>\n                    <button onclick=\"store.resetStores();\">Reset Stores</button><br><br><br>\n                    <button onclick=\"store.reload();\">Reload</button>\n                </center>\n            </div>\n            <div class=\"store-apps\" id=\"store-themes-container\"></div>\n        </div>\n        <div class=\"store-tools\" id=\"store-tools\">\n            <h1>Tools</h1><br><br><hr>\n            <div class=\"hided\">\n                <img id=\"store-tool-1\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-2\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-3\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-4\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-5\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-6\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-7\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-8\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-9\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-10\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-11\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-12\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n            </div>\n            <div class=\"store-section-empty\" id=\"store-tools-empty\">\n                <center>\n                    <img onclick=\"this.src = '/assets/media/apps/storeemptysectionsearching.png';setTimeout(() => {store.prepareSteps.loadStores();this.src = '/assets/media/apps/storeemptysection.png'},2000)\" src=\"/assets/media/apps/storeemptysection.png\" alt=\"\">\n                    <h1>Your stores do not contain any apps of this section.</h1><br><br>\n                    <button onclick=\"store.resetStores();\">Reset Stores</button><br><br><br>\n                    <button onclick=\"store.reload();\">Reload</button>\n                </center>\n            </div>\n            <div class=\"store-apps\" id=\"store-tools-container\"></div>\n        </div>\n        <div class=\"store-tools\" id=\"store-scripts\">\n            <h1>Scripts</h1><br><br><hr>\n            <div class=\"hided\">\n                <img id=\"store-tool-1\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-2\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-3\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-4\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-5\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-6\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-7\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-8\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-9\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-10\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-11\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img id=\"store-tool-12\" onclick=\"store.section(this.id)\" onerror=\"this.src = '/assets/media/apps/app.png'\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n            </div>\n            <div class=\"store-section-empty\" id=\"store-scripts-empty\">\n                <center>\n                    <img onclick=\"this.src = '/assets/media/apps/storeemptysectionsearching.png';setTimeout(() => {store.prepareSteps.loadStores();this.src = '/assets/media/apps/storeemptysection.png'},2000)\" src=\"/assets/media/apps/storeemptysection.png\" alt=\"\">\n                    <h1>Your stores do not contain any apps of this section.</h1><br><br>\n                    <button onclick=\"store.resetStores();\">Reset Stores</button><br><br><br>\n                    <button onclick=\"store.reload();\">Reload</button>\n                </center>\n            </div>\n            <div class=\"store-apps\" id=\"store-scripts-container\"></div>\n        </div>\n        <div class=\"store-reccomended-stores\">\n            <h1>Best Stores</h1><br><br><hr>\n            <div class=\"store-apps\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-1\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-2\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-3\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-4\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-5\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-6\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-7\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-8\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-9\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-10\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-11\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n                <img onclick=\"store.section(this.id)\" id=\"store-reccomended-12\" onerror=\"this.src = '/assets/media/apps/store.png';\" src=\"/assets/media/apps/blank.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n    <div class=\"store-app-view hided\" id=\"app-view\">\n        <div class=\"center\">\n            <div>\n                <button onclick=\"this.parentNode.parentNode.parentNode.classList.add('hided');document.getElementById('app-install').setAttribute('class', '')\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-x-square\" viewBox=\"0 0 16 16\"><path d=\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"></path><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"></path></svg></button>\n                <img src=\"/assets/media/apps/app.png\" id=\"app-icon\" alt=\"\">\n                <h1 id=\"app-title\">App Name</h1>\n                <button id=\"app-quicklaunch-start\" onclick=\"document.getElementById('app-quicklaunch').setAttribute('class', '');setTimeout(() => {document.getElementById('app-quicklaunch').setAttribute('class', 'new-xcenter-apps-quicklaunch')}, 10);document.getElementById('ql-name').innerHTML = 'Quick Launch: ' + document.getElementById('app-title').innerHTML;document.getElementById('ql-icon').src = document.getElementById('app-icon').src;quickLaunchTimeout = setTimeout(() => {store.apps.quickLaunch(document.getElementById('app-view').getAttribute('callerid'))}, 3500)\">Quick Launch</button>\n                <div id=\"app-install\" onclick=\"if (this.classList.contains('store-app-installed') == false) {this.classList.add('progressbar');this.classList.add('store-app-installed');store.apps.install(document.getElementById('app-view').getAttribute('callerid'))}\"><div onclick=\"store.apps.launch(document.getElementById('app-view').getAttribute('callerid'))\"><p>Launch</p></div><p>Download / Update</p></div>\n            </div>\n            <div>\n                <h1>App Information</h1>\n                <div>\n                    <h1>Description</h1>\n                    <div>\n                        <p id=\"app-description\">App Description</p>\n                    </div>\n                </div>\n                <div>\n                    <h3>Size: <u id=\"app-size\">1MB</u></h3>\n                    <h3>Type: <u id=\"app-type\">App</u></h3>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"store-app-view hided\" id=\"store-view\" storeicon=\"\" storetitle=\"\" storedesc=\"\" storetype=\"\" storelink=\"\" storeapps=\"\">\n        <div class=\"center\">\n            <div>\n                <button onclick=\"this.parentNode.parentNode.parentNode.classList.add('hided');document.getElementById('store-add').setAttribute('class', '')\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" fill=\"currentColor\" class=\"bi bi-x-square\" viewBox=\"0 0 16 16\"><path d=\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"></path><path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"></path></svg></button>\n                <img src=\"/assets/media/apps/store.png\" onerror=\"this.src = '/assets/media/apps/store.png';\" id=\"store-icon\" alt=\"\">\n                <h1 id=\"store-title\">Store</h1>\n                <div id=\"store-add\" onclick=\"if (this.classList.contains('store-added') == false &amp;&amp; this.classList.contains('storeadd') == false) {this.classList.add('storeadd');this.classList.add('store-added');store.add(this.parentNode.parentNode.parentNode.id)}\"><div><p>Added</p></div><p>Add</p></div>\n            </div>\n            <div>\n                <h1>Store Information</h1>\n                <div style=\"height: calc(90% - 15px);\">\n                    <h1>Description</h1>\n                    <div>\n                        <p id=\"store-description\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam ullam quam rerum pariatur quisquam provident! Cupiditate voluptas non laudantium impedit modi ratione. Tempora facilis alias doloremque dolore harum. Sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto qui, voluptates tempora itaque laudantium commodi dolores cumque optio eius aspernatur hic recusandae dolor magni quae maiores! Magni, vel eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam unde tempora quam, dicta quos sunt exercitationem illo nesciunt ex corporis, odio, veniam aspernatur laborum velit cumque quia officia omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis dolorum ratione hic similique dolor quia repellat? Minima vero reprehenderit quis, non facere sit dignissimos quaerat nam enim. Delectus, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et nesciunt tenetur cupiditate sit eos placeat similique eaque, quo quod modi quidem non dolorem, blanditiis voluptatum vitae laudantium voluptatem saepe. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsa quasi rem natus magni dignissimos! Quidem, officia ea ratione itaque praesentium aperiam, a dolor blanditiis, fugit atque aspernatur soluta illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit blanditiis totam minus tempora placeat voluptatibus vitae nulla. Voluptatibus laudantium dolorem error nostrum quibusdam explicabo reprehenderit culpa molestiae. Repellendus, aperiam et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolores veritatis officia quo culpa ex dolor quia facilis repellat suscipit praesentium cupiditate, accusantium at reprehenderit? Voluptates qui architecto quasi voluptatibus!</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"store-offline\" class=\"store-offline\">\n        <div class=\"center\">\n            <center>\n                <img src=\"/version/3.0/assets/media/offline.png\" width=\"300px\" height=\"300px\" alt=\"\">\n                <button style=\"width: 100% !important;background-color: transparent;border: 1px solid white;\" onclick=\"store.reload()\">Reload</button>\n            </center>\n        </div>\n    </div>\n    <div class=\"new-xcenter-apps-quicklaunch hided\" id=\"app-quicklaunch\">\n        <div><div><img src=\"/assets/media/apps/quicklaunch.png\" alt=\"\"></div></div>\n        <img id=\"ql-icon\" src=\"/assets/media/apps/app.png\" alt=\"\">\n        <button onclick=\"this.parentNode.classList.add('fadeOut');clearTimeout(quickLaunchTimeout)\">Cancel</button>\n        <div>\n            <h1 id=\"ql-name\">QuickLaunch: APP</h1><br><br><br><br>\n            <ul>\n                <li>No Memory Required</li>\n            </ul>\n            <br>\n            <ul>\n                <li>Launch any app fast</li>\n            </ul>\n            <br>\n            <ul>\n                <li>No need to update the apps</li>\n            </ul>\n        </div>\n    </div>\n    <script>\n        var s = document.createElement(\"script\");\n        s.src = \"/store/main.js\";\n        s.onload = function() {store.reload()}\n        document.head.appendChild(s);\n    </script>\n    <style>\n        nav {z-index: 100;}\n        .store {width: 100%;height: 100%;padding: 10px;}\n        .store div {margin: 5px;margin-top: 10px;}\n        .store div h1 {margin: 0 !important;float: left;}\n        .store div button {width: 50px;height: 50px;float: right;background-color: transparent;padding: 0;}\n        .store div hr {width: calc(100% - 4px);margin: 2px !important;height: 5px !important;background-color: gray;}\n        .store-apps {display: flex;width: 100%;overflow-x: auto;overflow-y: hidden;}\n        .store-apps img {width: 100px;aspect-ratio: 1 / 1;margin: 5px;border-radius: 10px;border: 5px solid gray;background-color: gray;cursor: pointer;}\n        .store-apps img:hover {animation: glow infinite linear 1s;}\n        .store-reccomended-stores img {aspect-ratio: 1 / 1;width: 200px;}\n        .store-reccomended-stores img:hover {animation: storeadd infinite linear 1s;}\n        :root {\n            --appdownloadduration: 5s;\n            --storeaddduration: 0.3s;\n        }\n        .store-app-view {position: fixed;top: 0;bottom: 0;left: 0;right: 0;width: 100%;height: 100%;z-index: 100;background-color: rgba(0, 0, 0, 0.8);}\n        .store-app-view div.center {width: 100%;height: 100%;max-width: 1800px;max-height: 800px;background-color: rgb(46, 46, 46);border-radius: 20px;}\n        .store-app-view div.center div:nth-child(1) {width: 100%;height: 200px;border-radius: 20px 20px 0px 0px;background-color: rgba(0, 0, 0, 0.394);position: relative;}\n        .store-app-view div.center div:nth-child(1) button:nth-child(1) {background-color: transparent;width: 30px;height: 30px;padding: 0;position: absolute;top: 20px;right: 20px;}\n        .store-app-view div.center div:nth-child(1) img {height: 100%;border-radius: 10px;margin: 10px;height: calc(100% - 20px);float: left;}\n        .store-app-view div.center div:nth-child(1) h1 {font-size: 50px;margin-top: 0;}\n        .store-app-view div.center div:nth-child(1) div {width: calc(100% - 210px);position: absolute;left: 200px;bottom: 10px;background-color: rgb(86, 172, 203);height: 50px;padding: 10px;text-align: center;border-radius: 10px;cursor: pointer;}\n        .store-app-view div.center div:nth-child(1) div p {color: white;font-size: 20px;}\n        .store-app-view div.center div:nth-child(1) div div {visibility: hidden;display: none;}\n        .store-app-view div.center div:nth-child(1) div.progressbar {background-color: black;}\n        .store-app-view div.center div:nth-child(1) div.progressbar div {visibility: visible;display: block;position: absolute;bottom: 0;left: 0;width: 100%;animation: progressbar var(--appdownloadduration) linear;background-color: green;}\n        .store-app-view div.center div:nth-child(1) div.progressbar p {visibility: hidden;display: none;}\n        .store-app-view div.center div:nth-child(1) div.progressbar div p {animation: progressbar var(--appdownloadduration) linear;color: white;visibility: visible;display: block;}\n        .store-app-view div.center div:nth-child(1) div.store-app-installed {background-color: black;}\n        .store-app-view div.center div:nth-child(1) div.store-app-installed div {visibility: visible;display: block;position: absolute;bottom: 0;left: 0;width: 100%;background-color: green;}\n        .store-app-view div.center div:nth-child(1) div.store-app-installed p {visibility: hidden;display: none;}\n        .store-app-view div.center div:nth-child(1) div.store-app-installed div p {color: white;visibility: visible;display: block;}\n        .store-app-view div.center div:nth-child(1) div.storeadd {background-color: black;cursor: default !important;}\n        .store-app-view div.center div:nth-child(1) div.storeadd div {visibility: visible;display: block;position: absolute;bottom: 0;left: 0;width: 100%;animation: storepageadd var(--storeaddduration) linear;background-color: green;}\n        .store-app-view div.center div:nth-child(1) div.storeadd p {visibility: hidden;display: none;}\n        .store-app-view div.center div:nth-child(1) div.storeadd div p {animation: storepageadd var(--storeaddduration) linear;color: white;visibility: visible;display: block;}\n        .store-app-view div.center div:nth-child(1) div.store-added {background-color: black;cursor: default !important;}\n        .store-app-view div.center div:nth-child(1) div.store-added div {visibility: visible;display: block;position: absolute;bottom: 0;left: 0;width: 100%;background-color: green;}\n        .store-app-view div.center div:nth-child(1) div.store-added p {visibility: hidden;display: none;}\n        .store-app-view div.center div:nth-child(1) div.store-added div p {color: white;visibility: visible;display: block;}\n        .store-app-view div.center div:nth-child(1) button:nth-child(4) {visibility: hidden;display: none;}\n        .store-app-view div.center div:nth-child(2) {width: 100%;height: calc(100% - 220px);margin: 10px;}\n        .store-app-view div.center div:nth-child(2) div {background-color: rgba(0, 0, 0, 0.394);width: calc(100% - 20px);margin: 5px 0px 5px 0px;border-radius: 10px;padding: 10px;}\n        .store-app-view div.center div:nth-child(2) div:nth-child(2) {height: calc(70% - 5px);}\n        .store-app-view div.center div:nth-child(2) div h1 {margin: 0;}\n        .store-app-view div.center div:nth-child(2) div div:nth-child(2) {background-color: transparent;overflow-y: auto;overflow-x: hidden;height: calc(100% - 50px);}\n        .store-app-view.quicklaunch div.center div:nth-child(1) div:nth-child(5) {width: calc(100% - 370px) !important;}\n        .store-app-view.quicklaunch div.center div:nth-child(1) button:nth-child(4) {background-color: transparent;border: 1px solid white;float: right;visibility: visible;display: unset;position: absolute;bottom: 10px;right: 10px;width: 150px;}\n        .store-external-download {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 500;pointer-events: none;}\n        .store-external-download div {width: 80%;background-color: rgb(29, 29, 29);height: 80%;position: absolute;bottom: calc(-80% + 100px);padding: 10px;border-radius: 10px 10px;margin-left: 10%;pointer-events: all;}\n        .store-external-download div img {height: 80px;float: left;margin-right: 10px;border-radius: 10px;}\n        .store-external-download div h1 {float: left;font-size: 30px;margin: 0;margin-top: -5px;}\n        .store-external-download div button {float: right;height: 30px;background-color: transparent;padding: 0;margin-top: 20px;margin-left: 10px;}\n        .store-external-download div button:nth-child(3) {transform: rotate(180deg);}\n        .store-external-download div button:nth-child(4) {background-color: rgba(255, 255, 255, 0.200);padding: 10px;padding-top: 5px;}\n        .store-external-download div div {position: absolute;bottom: 0;width: 100%;left: 0px;right: 0px;top: 100px;margin: 0px;height: calc(100% - 100px);border-radius: 0px 0px 10px 10px;background-color: rgba(129, 129, 129, 0.473) !important;}\n        .store-external-download.extend {background-color: rgba(0, 0, 0, 0.726);pointer-events: all;}\n        .store-external-download.extend div {animation: externalextend 0.2s linear;bottom: 70px;}\n        .store-external-download.extend div button:nth-child(3) {transform: unset;}\n        .store-external-download.minimal div {margin-left: 0%;width: 100px;border-radius: 0px 10px 0px 0px;animation: externalminimal 0.2s linear;}\n        .store-external-download.minimal div img {margin-bottom: 10px;}\n        .store-external-download.premied div {background-color: rgb(104, 104, 0);}\n        .store-external-download.premied div div {background-image: url('/assets/media/apps/storepremied.png');background-repeat: no-repeat;background-position: bottom right;background-size: 150px;}\n        .store-offline {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 200;background-color: black;width: 100%;height: 100%;}\n        .store-section-empty {width: 100%;height: 200px;background: rgb(0,0,0);background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(102,102,102,1) 100%);border-radius: 10px;padding: 10px;}\n        .store-section-empty center {width: 100%;height: 100%;}\n        .store-section-empty img {background-color: transparent;height: 100% !important;border: 0;padding: 0;aspect-ratio: 1 / 1 !important;width: unset !important;float: right;margin: 0;border-radius: 10px;}\n        .store-section-empty img:hover {animation: glow infinite linear 1s;}\n        .store-section-empty button {float: left !important;width: 200px !important;border: 1px solid white;}\n        .store-settings {width: 100%;height: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0, 0, 0, 0.589);z-index: 200;}\n        .store-settings h1 {margin: 0;margin-top: 0;}\n        .store-settings div.center {width: 100%;height: 100%;max-width: 1000px;max-height: 600px;background-color: black;border: 1px solid white;border-radius: 10px;padding: 10px;}\n        .store-settings div.center button#store-settings-close {position: absolute;top: 10px;right: 10px;width: 30px;height: 30px;background-color: transparent;padding: 0;}\n        .store-settings div.center div {width: 100%;height: calc(100% - 40px);background-color: rgba(128, 128, 128, 0.500);border: 1px solid white;border-radius: 10px;padding: 10px;overflow-x: hidden;overflow-y: auto;}\n        .store-settings div.center div div#store-settings-stores {overflow-x: hidden;overflow-y: auto;}\n        .store-settings div.center div div#store-settings-stores button {width: 100%;height: 30px;padding: 0;border: 1px solid white;margin-bottom: 5px;text-align: left;padding: 0px 10px 0px 10px;}\n        .store-settings-stores-manuallyadd {width: 80%;height: 20%;min-height: 200px;background-color: blue;position: fixed;top: 50%;left: 50%;z-index: 201;padding: 10px;border-radius: 10px;}\n        .store-settings-stores-manuallyadd input {width: 100%;height: 50px;border-radius: 10px;border: 1px solid white;background-color: rgba(128, 128, 128, 0.500);font-size: 25px;color: white;padding: 10px;}\n        .store-settings-stores-manuallyadd button {width: 50%;position: absolute;bottom: 0;background-color: rgba(128, 128, 128, 0.500);}\n        .store-settings-stores-manuallyadd button:nth-child(3) {border-radius: 0px 0px 0px 10px !important;left: 0;}\n        .store-settings-stores-manuallyadd button:nth-child(4) {border-radius: 0px 0px 10px 0px !important;right: 0;}\n        .store-search {width: 100%;height: calc(100% - 50px);position: fixed;top: 50px;bottom: 0;left: 0;right: 0;background-color: black;z-index: 100;}\n        .store-search form {margin-bottom: 10px;padding: 5px 9px;-moz-border-radius: 3px;-webkit-border-radius: 3px;-o-border-radius: 3px;-ms-border-radius: 3px;-khtml-border-radius: 3px;border-radius: 3px;-moz-transition-property: border-color;-webkit-transition-property: border-color;-o-transition-property: border-color;transition-property: border-color;-moz-transition-duration: 0.1s;-webkit-transition-duration: 0.1s;-o-transition-duration: 0.1s;transition-duration: 0.1s;-moz-transition-timing-function: linear;-webkit-transition-timing-function: linear;-o-transition-timing-function: linear;transition-timing-function: linear;-moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),0 1px 0 rgba(255, 255, 255, 0.2);-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),0 1px 0 rgba(255, 255, 255, 0.2);box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),0 1px 0 rgba(255, 255, 255, 0.2);}\n        .store-search input {width: 100%;max-width: 800px;height: 50px;border-radius: 10px;border: 1px solid white;background-color: transparent;color: white;padding: 0px;padding-left: 50px;color: white;font-size: 30px;background-image: url('/assets/media/apps/storesearch.png');background-repeat: no-repeat;background-position: left;background-size: 50px;margin: 10px 0px 10px 0px;min-width: unset !important;box-sizing: border-box !important;-webkit-box-sizing:border-box !important;-moz-box-sizing: border-box !important;}\n        .store-search div#store-search-apps {width: 100%;height: calc(100% - 75px);padding: 10px;overflow-y: auto;overflow-x: hidden;}\n        .store-search-app {width: 100%;height: 150px !important;background: rgb(102,102,102);background: linear-gradient(90deg, rgba(102,102,102,1) 73%, rgba(0,0,0,1) 100%);padding: 10px;cursor: pointer;border-radius: 10px;margin: 5px 0px 5px 0px;}\n        .store-search-app img {height: 100%;float: left;border-radius: 15px;margin-right: 10px;}\n        .store-search-app h1 {margin: 0;}\n        .store-search-app h4 {color: rgb(48, 48, 48);margin: 0;}\n        @media (max-width: 997px) {\n            .store-section-empty {width: 100%;height: 300px;position: relative;}\n            .store-section-empty img {height: 100px !important;position: absolute;bottom: 10px;right: 10px;}\n            .store-section-empty button:nth-child(5) {width: calc(50% - 65px) !important;position: absolute;bottom: 10px;left: 10px;border-radius: 10px 0px 0px 10px !important;}\n            .store-section-empty button:nth-child(9) {width: calc(50% - 65px) !important;position: absolute;bottom: 10px;;right: 120px;border-radius: 0px 10px 10px 0px !important;}\n        }\n        @media (max-width: 500px) {\n            .store-external-download div h1 {float: none;}\n            .store-external-download div button {float: right;height: 30px;background-color: transparent;padding: 0;margin-top: 10px;margin-left: 10px;}\n            .store-external-download div button:nth-child(4) {width: calc(100% - 150px);position: absolute;left: 90px;}\n            .store-section-empty img {height: 100px !important;position: absolute;bottom: 10px;right: 10px;}\n            .store-section-empty h1 {font-size: 20px;}\n            .store-section-empty button:nth-child(5) {width: calc(100% - 120px) !important;position: absolute;border-radius: 10px 10px 0px 0px !important;bottom: 60px;left: 10px;}\n            .store-section-empty button:nth-child(9) {width: calc(100% - 120px) !important;position: absolute;border-radius: 0px 0px 10px 10px !important;bottom: 10px;left: 10px;}\n            .store-search-app {height: unset !important;background: rgb(102,102,102);}\n            .store-search-app img {width: 100%;float: left;border-radius: 15px;margin-right: 10px;height: unset;}\n            .store-search-app h1 {margin: 0;}\n            .store-search-app h4 {color: rgb(48, 48, 48);margin: 0;}\n        }\n        @media (max-width: 350px) {\n            .store-external-download div {height: calc(80% + 30px);}\n            .store-external-download div button {float: none;height: 30px;background-color: transparent;padding: 0;margin-top: 10px;margin-left: 10px;}\n            .store-external-download div button:nth-child(3) {position: absolute;top: 85px;right: 10px;}\n            .store-external-download div button:nth-child(4) {width: calc(100% - 150px);top: 85px;left: 0px;width: calc(100% - 60px);}\n            .store-external-download div div {height: calc(80% + 15px);top: 140px;}\n            .store-section-empty img {visibility: hidden;display: none;}\n            .store-section-empty h1 {font-size: 20px;}\n            .store-section-empty button:nth-child(5) {width: calc(100% - 20px) !important;height: 30px;padding: 0;position: absolute;border-radius: 10px 10px 0px 0px !important;bottom: 40px;left: 10px;font-size: 10px;}\n            .store-section-empty button:nth-child(9) {width: calc(100% - 20px) !important;height: 30px;padding: 0;position: absolute;border-radius: 0px 0px 10px 10px !important;bottom: 10px;left: 10px;font-size: 10px;}\n        }\n        @media (max-width: 600px) {\n            .store-app-view.quicklaunch div.center div:nth-child(1) div:nth-child(5) p {font-size: 15px;padding: 5px;}\n            .store-app-view.quicklaunch div.center div:nth-child(1) div.progressbar p {padding: 0 !important;font-size: unset !important;}\n        }\n        @keyframes storepageadd {\n            0% {\n                width: 100%;\n                background-color: rgb(86, 172, 203);\n                color: transparent;\n            }\n            50% {\n                width: 100%;\n                background-color: black;\n                color: transparent;\n            } \n            100% {\n                width: 100%;\n                background-color: green;\n                color: white;\n            } \n        }\n        @keyframes progressbar {\n            0% {\n                width: 100%;\n                background-color: rgb(86, 172, 203);\n                color: transparent;\n            }\n            3% {\n                width: 0%;\n                background-color: rgb(86, 172, 203);\n                color: transparent;\n            }\n            70% {\n                width: 100%;\n                background-color: rgb(86, 172, 203);\n                color: transparent;\n            }\n            75% {\n                width: 100%;\n                background-color: rgb(52, 105, 124);\n                color: transparent;\n            }\n            80% {\n                width: 100%;\n                background-color: rgb(86, 172, 203);\n                color: transparent;\n            }\n            85% {\n                width: 100%;\n                background-color: rgb(52, 105, 124);\n                color: transparent;\n            }\n            90% {\n                width: 100%;\n                background-color: rgb(86, 172, 203);\n                color: transparent;\n            }\n            95% {\n                width: 100%;\n                background-color: rgb(52, 105, 124);\n                color: transparent;\n            }\n            100% {\n                background-color: green;\n                color: white;\n            }\n        }\n        @keyframes externalminimal {\n            0% {\n                width: 80%;\n                margin-left: 10%;\n                border-radius: 10px;\n            }\n            100% {\n                width: 100px;\n                margin-left: 0%;\n                border-radius: 0px 10px 0px 0px;\n            }\n        }\n        @keyframes externalextend {\n            0% {\n                bottom: -510px;\n            }\n            100% {\n                bottom: 70px;\n            }\n        }\n        @keyframes storeadd {\n            0% {\n                border: 5px solid green;\n            }\n            50% {\n                border: 5px solid greenyellow;\n            }\n            100% {\n                border: 5px solid green;\n            }\n        }\n    </style>\n\n<script type=\"text/javascript\">\n\n</script><style></style>"
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
                    src: "/assets/media/apps/appmaker.png",
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
                    src: "/assets/media/apps/thememanager.png",
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
                    src: "/assets/media/apps/versionswitcher.png",
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
    multipleInstall: function(multipledata, slot) {
        //NOT RECCOMENDED TO DEFINE SLOT, THIS COULD REPLACE AN EXISTING APP!!!
        /*EXAMPLE":
            app.multipleInstall([{<appdata1>},{<appdata2>},...], "1") //THE "1" IS THE SLOT. USE 0 TO REPLACE THE STORE
        */
        if (multipledata == null || multipledata.length < 1) return;
        document.getElementById('new-xcenter-app-install-cancel').classList.remove('hided');
        document.getElementById('new-xcenter-app-install-icon').src = "/assets/media/apps/multipleinstall.png";
        document.getElementById('new-xcenter-app-install-title').innerHTML = "Multiple Install";
        document.getElementById('new-xcenter-app-install').classList.remove('hided');
        appinstall = setTimeout(() => {
            document.getElementById('new-xcenter-app-install-cancel').classList.add('hided')
            for (let i = 0;i < multipledata.length;i++) {
                var data = multipledata[i];
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
                app.prepareSteps.getInstallSlot();
                installSlot = slot ?? installSlot;
                lastInstallSlot = installSlot;
                localStorage['XCenterAppData' + installSlot] = JSON.stringify(installData);
                app.reloadApps();
                app.prepareSteps.getInstallSlot();
                console.log('Installed "' + title + '" on slot "' + lastInstallSlot + '".');
                document.getElementById('new-xcenter-app-install').classList.add('hided')
            }
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
        if (location.href.pathname == '/apps/') {
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
        } else {
            if (data0.id.indexOf(id) != -1) return "0";
            if (data1.id.indexOf(id) != -1) return 1;
            if (data2.id.indexOf(id) != -1) return 2;
            if (data3.id.indexOf(id) != -1) return 3;
            if (data4.id.indexOf(id) != -1) return 4;
            if (data5.id.indexOf(id) != -1) return 5;
            if (data6.id.indexOf(id) != -1) return 6;
            if (data7.id.indexOf(id) != -1) return 7;
            if (data8.id.indexOf(id) != -1) return 8;
            if (data9.id.indexOf(id) != -1) return 9;
            if (data10.id.indexOf(id) != -1) return 10;
            if (data11.id.indexOf(id) != -1) return 11;
            if (data12.id.indexOf(id) != -1) return 12;
            if (data13.id.indexOf(id) != -1) return 13;
            if (data14.id.indexOf(id) != -1) return 14;
            if (data15.id.indexOf(id) != -1) return 15;
            if (data16.id.indexOf(id) != -1) return 16;
            if (data17.id.indexOf(id) != -1) return 17;
            if (data18.id.indexOf(id) != -1) return 18;
            if (data19.id.indexOf(id) != -1) return 19;
            if (data20.id.indexOf(id) != -1) return 20;
            if (data21.id.indexOf(id) != -1) return 21;
            if (data22.id.indexOf(id) != -1) return 22;
            if (data23.id.indexOf(id) != -1) return 23;
            if (data24.id.indexOf(id) != -1) return 24;
            if (data25.id.indexOf(id) != -1) return 25;
            if (data26.id.indexOf(id) != -1) return 26;
            if (data27.id.indexOf(id) != -1) return 27;
            if (data28.id.indexOf(id) != -1) return 28;
            if (data29.id.indexOf(id) != -1) return 29;
            if (data30.id.indexOf(id) != -1) return 30;
            if (data31.id.indexOf(id) != -1) return 31;
            if (data32.id.indexOf(id) != -1) return 32;
        }
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
        if (slot != "all") {
            data = JSON.parse(localStorage[launchname]);
            if (data.installed == false) return false;
        }
        document.getElementById('new-xcenter-app-uninstall-cancel').classList.remove('hided');
        if (slot != "all") {
            document.getElementById('new-xcenter-app-uninstall-title').innerHTML = data.title ?? "";
            document.getElementById('new-xcenter-app-uninstall-icon').src = data.icon ?? data.src ?? "/assets/media/apps/app.png";
        } else {
            document.getElementById('new-xcenter-app-uninstall-title').innerHTML = "Uninstall All";
            document.getElementById('new-xcenter-app-uninstall-icon').src = "/assets/media/apps/uninstall.png";
        }
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
                setTimeout(() => {
                    document.close();
                }, 200)
                document.write(content + '<div class="new-xcenter-home-menu app-open"><div><h1>Home Menu</h1><button onclick="if (this.parentNode.parentNode.classList.contains(\'dark\')) {this.parentNode.parentNode.classList.remove(\'dark\')} else {this.parentNode.parentNode.classList.add(\'dark\')}"><img src="/assets/media/apps/themeswitch.png" alt=""></button></div><div class="vertical-center"><img src="' + icon + '" id="new-xcenter-home-menu-appicon" alt="' + title + '"><h3 id="new-xcenter-home-menu-apptitle">' + title + '</h3><br><button onclick="location.reload();">Exit</button><button onclick="app.homeMenu();">Resume</button></div></div><script src="/assets/js/apps.js"></script><link rel="stylesheet" href="/assets/base/style.css">');
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
                if (document.getElementById('new-xcenter-app-launch') != null)
                document.getElementById('new-xcenter-app-launch').classList.add('hided');
            },5000)
        }, 5000);
    },
    fatalError: function(desc) {
        desc = desc ?? "No Desc Provided";
        if (desc.length < 1) desc = "No Desc Provided";
        if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('app-open') && document.querySelector('.new-xcenter-home-menu').classList.contains('app-error') == false) {
            document.querySelector('.new-xcenter-home-menu').classList.add('app-error');
            var errordetailsbutton = document.createElement('button');
            var container = document.createElement('div');
            container.innerHTML = '<div><center><h4>An Error Occurred</h4><div><p>' + desc + '</p></div><button onclick="this.parentNode.parentNode.parentNode.classList.add(\'hided\')">Ok</button></center></div>';
            errordetailsbutton.innerHTML = 'Error Details';
            container.setAttribute('class', 'new-xcenter-home-menu-error-details hided');
            errordetailsbutton.setAttribute('onclick', 'document.querySelector(\'.new-xcenter-home-menu-error-details\').classList.remove(\'hided\');');
            document.querySelector(".new-xcenter-home-menu").appendChild(container);
            document.querySelector(".new-xcenter-home-menu").getElementsByClassName("vertical-center")[0].appendChild(errordetailsbutton);
            app.homeMenu();
            app = {};
        }
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
    homeMenu: function() {
        if (document.querySelector('.new-xcenter-home-menu').classList.contains('open')) {
            document.querySelector('.new-xcenter-home-menu').style.animation = 'none';
            setTimeout(() => {
                document.querySelector('.new-xcenter-home-menu').classList.add('closed');
                document.querySelector('.new-xcenter-home-menu').style.animation = '';
                document.querySelector('.new-xcenter-home-menu').classList.remove('open');
            })
        } else {
            document.querySelector('.new-xcenter-home-menu').style.animation = 'none';
            setTimeout(() => {
                document.querySelector('.new-xcenter-home-menu').style.animation = '';
                document.querySelector('.new-xcenter-home-menu').classList.add('open');
                document.querySelector('.new-xcenter-home-menu').classList.remove('closed');
            })
        }
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
        install: function(data, type) {
            type = type ?? "pkg";
            if (type.length < 1) type = "pkg";
            if (type == "pkg") {
                data = JSON.parse(data);
                app.install(data);
                return true;
            } else if (type == "mpkg") {
                data = JSON.parse(data);
                var multipledata = data.apps;
                app.multipleInstall(multipledata);
                return true;
            }
            return false;
        }
    },
}

//RUN SCRIPTS
if (document.querySelector('.new-xcenter-home-menu') == null) {
    var container = document.createElement('div');
    container.setAttribute('class', 'new-xcenter-home-menu');
    container.innerHTML = '<div><h1>Home Menu</h1><button onclick="if (this.parentNode.parentNode.classList.contains(\'dark\')) {this.parentNode.parentNode.classList.remove(\'dark\')} else {this.parentNode.parentNode.classList.add(\'dark\')}"><img src="/assets/media/apps/themeswitch.png" alt=""></button></div><div class="vertical-center"><img src="/assets/media/apps/app.png" id="new-xcenter-home-menu-appicon" alt=""><h3 id="new-xcenter-home-menu-apptitle">No Apps Running</h3><br><button onclick="location.reload();">Exit</button><button onclick="app.homeMenu();">Resume</button></div>';
    document.body.appendChild(container);
}
if (window.location.pathname.indexOf('/apps/') != -1 && document.querySelector(".new-xcenter-apps-header") != null) {
    let AppUpload = document.querySelector("#new-xcenter-apps-upload"); //UPLOAD APP VAR
    if (AppUpload != null) {
        AppUpload.addEventListener("change", () => {
            let files = AppUpload.files;
            if(files.length == 0) return;
            if(AppUpload.files[0].name.split(".")[1] != "pkg" && AppUpload.files[0].name.split(".")[1] != "mpkg") {
                return false;
            }
            const file = files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                const file = e.target.result;
                const lines = file.split(/\r\n|\n/);
                app.pack.install(lines, AppUpload.files[0].name.split(".")[1]);
                AppUpload.value = "";
                AppUpload.value = null;
            };
            reader.onerror = (e) => alert(e.target.error.name);
            reader.readAsText(file);
        }); //UPLOAD APP PROCESS
    }
    app.prepare();
    if (location.href.indexOf('files:///') === -1) {
        document.querySelector('.nav-compenser').classList.add('navbar-error');
        document.getElementById('new-xcenter-apps-limits-bkg').classList.remove('hided');
    }
    if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('app-open') && ((homebutton == true || homebutton == 'true') || (localStorage.getItem('settings-homebutton') == 'true' || localStorage.getItem('settings-homebutton') == true))) {
        var container = document.createElement('button');
        container.setAttribute('style', 'background-color: black;color: white !important;border: 1px solid white;width: calc(100% - 10px);height: 30px;position: fixed;bottom: 5px;left: 5px;right: 5px;z-index: 99;')
        container.innerHTML = 'Home Menu';
        container.setAttribute('onclick', 'app.homeMenu();');
        document.body.appendChild(container);
    }
} else {
    app.prepareExternal();
    if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('app-open') && ((homebutton == true || homebutton == 'true') || (localStorage.getItem('settings-homebutton') == 'true' || localStorage.getItem('settings-homebutton') == true))) {
        var container = document.createElement('button');
        container.setAttribute('style', 'background-color: white;color: black !important;border: 1px solid black;width: calc(100% - 10px);height: 30px;position: fixed;bottom: 5px;left: 5px;right: 5px;z-index: 99;padding: 0;font-size: 20px;')
        container.innerHTML = 'Home Menu';
        container.setAttribute('onclick', 'app.homeMenu();');
        document.body.appendChild(container);
    }
    if (window.location.pathname.indexOf('/store/') != -1 || window.location.pathname.indexOf('/apps/') != -1) {
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

if (document.querySelector('.new-xcenter-home-menu') != null) {
    if (document.getElementById('html') != null && document.getElementById('html').classList.contains('dark')) document.querySelector('.new-xcenter-home-menu').classList.add('dark');
    if (hometype == "single") {
        window.onkeydown = function(Key) {
            if (Key.keyCode == singlehomekey.toUpperCase().charCodeAt(0)) {
                if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('open') == false) {
                    app.homeMenu();
                }
            }
        }
    } else if (hometype == "multiple") {
        let keysPressed = {};
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete this.keysPressed[event.key];
        });
        document.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
            if (keysPressed[multiplehomekeyfirst] && event.key == multiplehomekeysecond) {
                if (document.querySelector('.new-xcenter-home-menu') != null && document.querySelector('.new-xcenter-home-menu').classList.contains('open') == false) {
                    app.homeMenu();
                }
            }
        });
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
    }
}
console.log('%cAPP SCRIPT ENDED', 'padding: 10px;background-color: black;border-radius: 10px;')