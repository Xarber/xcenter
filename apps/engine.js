//X-CENTER APP ENGINE -- MADE BY XARBER, CREDITS REQUIRED! MADE TO LAUNCH APPS FROM EXTERNAL WEBSITES.
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
        createLimitWarn: function() {},
        defineSlots: function() {},
        fixLocalStorage: function() {
            //if (localStorage.getItem('AppEngineData0') == null) localStorage['AppEngineData0'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData0') == null) localStorage['AppEngineData0'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData1') == null) localStorage['AppEngineData1'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData2') == null) localStorage['AppEngineData2'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData3') == null) localStorage['AppEngineData3'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData4') == null) localStorage['AppEngineData4'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData5') == null) localStorage['AppEngineData5'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData6') == null) localStorage['AppEngineData6'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData7') == null) localStorage['AppEngineData7'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData8') == null) localStorage['AppEngineData8'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData9') == null) localStorage['AppEngineData9'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData10') == null) localStorage['AppEngineData10'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData11') == null) localStorage['AppEngineData11'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData12') == null) localStorage['AppEngineData12'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData13') == null) localStorage['AppEngineData13'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData14') == null) localStorage['AppEngineData14'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData15') == null) localStorage['AppEngineData15'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData16') == null) localStorage['AppEngineData16'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData17') == null) localStorage['AppEngineData17'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData18') == null) localStorage['AppEngineData18'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData19') == null) localStorage['AppEngineData19'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData20') == null) localStorage['AppEngineData20'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData21') == null) localStorage['AppEngineData21'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData22') == null) localStorage['AppEngineData22'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData23') == null) localStorage['AppEngineData23'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData24') == null) localStorage['AppEngineData24'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData25') == null) localStorage['AppEngineData25'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData26') == null) localStorage['AppEngineData26'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData27') == null) localStorage['AppEngineData27'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData28') == null) localStorage['AppEngineData28'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData29') == null) localStorage['AppEngineData29'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData30') == null) localStorage['AppEngineData30'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData31') == null) localStorage['AppEngineData31'] = JSON.stringify(datadefault);
            if (localStorage.getItem('AppEngineData32') == null) localStorage['AppEngineData32'] = JSON.stringify(datadefault);
            console.log('Fixed Local Storage')
        },
        getData: function() {
            data0 = JSON.parse(localStorage['AppEngineData0']);
            data1 = JSON.parse(localStorage['AppEngineData1']);
            data2 = JSON.parse(localStorage['AppEngineData2']);
            data3 = JSON.parse(localStorage['AppEngineData3']);
            data4 = JSON.parse(localStorage['AppEngineData4']);
            data5 = JSON.parse(localStorage['AppEngineData5']);
            data6 = JSON.parse(localStorage['AppEngineData6']);
            data7 = JSON.parse(localStorage['AppEngineData7']);
            data8 = JSON.parse(localStorage['AppEngineData8']);
            data9 = JSON.parse(localStorage['AppEngineData9']);
            data10 = JSON.parse(localStorage['AppEngineData10']);
            data11 = JSON.parse(localStorage['AppEngineData11']);
            data12 = JSON.parse(localStorage['AppEngineData12']);
            data13 = JSON.parse(localStorage['AppEngineData13']);
            data14 = JSON.parse(localStorage['AppEngineData14']);
            data15 = JSON.parse(localStorage['AppEngineData15']);
            data16 = JSON.parse(localStorage['AppEngineData16']);
            data17 = JSON.parse(localStorage['AppEngineData17']);
            data18 = JSON.parse(localStorage['AppEngineData18']);
            data19 = JSON.parse(localStorage['AppEngineData19']);
            data20 = JSON.parse(localStorage['AppEngineData20']);
            data21 = JSON.parse(localStorage['AppEngineData21']);
            data22 = JSON.parse(localStorage['AppEngineData22']);
            data23 = JSON.parse(localStorage['AppEngineData23']);
            data24 = JSON.parse(localStorage['AppEngineData24']);
            data25 = JSON.parse(localStorage['AppEngineData25']);
            data26 = JSON.parse(localStorage['AppEngineData26']);
            data27 = JSON.parse(localStorage['AppEngineData27']);
            data28 = JSON.parse(localStorage['AppEngineData28']);
            data29 = JSON.parse(localStorage['AppEngineData29']);
            data30 = JSON.parse(localStorage['AppEngineData30']);
            data31 = JSON.parse(localStorage['AppEngineData31']);
            data32 = JSON.parse(localStorage['AppEngineData32']);
            console.log('Got App Data')
        },
        sysAppRecover: function() {},
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
        show: function() {}
    },
    prepare: function() {
        console.log('> STARTING APP ENGINE')
        app.prepareSteps.createLimitWarn();
        app.prepareSteps.defineSlots();
        app.prepareSteps.fixLocalStorage();
        app.prepareSteps.getData();
        app.prepareSteps.sysAppRecover();
        app.prepareSteps.getInstallSlot();
        app.prepareSteps.show();
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
        appinstall = setTimeout(() => {
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
            localStorage['AppEngineData' + installSlot] = JSON.stringify(installData);
            app.reloadApps();
            console.log('Installed "' + title + '" on slot "' + lastInstallSlot + '".');
            return true;
        }, 0);
    },
    multipleInstall: function(multipledata, slot) {
        //NOT RECCOMENDED TO DEFINE SLOT, THIS COULD REPLACE AN EXISTING APP!!!
        /*EXAMPLE":
            app.multipleInstall([{<appdata1>},{<appdata2>},...], "1") //THE "1" IS THE SLOT. USE 0 TO REPLACE THE STORE
        */
        if (multipledata == null || multipledata.length < 1) return;
        appinstall = setTimeout(() => {
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
                localStorage['AppEngineData' + installSlot] = JSON.stringify(installData);
                app.reloadApps();
                app.prepareSteps.getInstallSlot();
                console.log('Installed "' + title + '" on slot "' + lastInstallSlot + '".');
            }
        }, 0);
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
        if (slot.indexOf('new-xcenter-app-') != -1) {slot = slot.replaceAll('new-xcenter-app-')};
        slot = slot.replaceAll('undefined', '');
        if (slot == null || (isNaN(slot) == true && slot != "all")) return false;
        launchname = 'AppEngineData' + slot;
        launchname = launchname.replaceAll('undefined', '');
        if (slot != "all") {
            data = JSON.parse(localStorage[launchname]);
            if (data.installed == false) return false;
        }
        appuninstall = setTimeout(() => {
            if (slot != null && slot != "all") {
                console.log('Uninstalling App');
                localStorage.removeItem('AppEngineData' + slot);
                app.reloadApps();
                return true;
            } else if (slot == "all") {
                console.log('Uninstalling All Apps');
                localStorage.removeItem('AppEngineData0');
                localStorage.removeItem('AppEngineData1');
                localStorage.removeItem('AppEngineData2');
                localStorage.removeItem('AppEngineData3');
                localStorage.removeItem('AppEngineData4');
                localStorage.removeItem('AppEngineData5');
                localStorage.removeItem('AppEngineData6');
                localStorage.removeItem('AppEngineData7');
                localStorage.removeItem('AppEngineData8');
                localStorage.removeItem('AppEngineData9');
                localStorage.removeItem('AppEngineData10');
                localStorage.removeItem('AppEngineData11');
                localStorage.removeItem('AppEngineData12');
                localStorage.removeItem('AppEngineData13');
                localStorage.removeItem('AppEngineData14');
                localStorage.removeItem('AppEngineData15');
                localStorage.removeItem('AppEngineData16');
                localStorage.removeItem('AppEngineData17');
                localStorage.removeItem('AppEngineData18');
                localStorage.removeItem('AppEngineData19');
                localStorage.removeItem('AppEngineData20');
                localStorage.removeItem('AppEngineData21');
                localStorage.removeItem('AppEngineData22');
                localStorage.removeItem('AppEngineData23');
                localStorage.removeItem('AppEngineData24');
                localStorage.removeItem('AppEngineData25');
                localStorage.removeItem('AppEngineData26');
                localStorage.removeItem('AppEngineData27');
                localStorage.removeItem('AppEngineData28');
                localStorage.removeItem('AppEngineData29');
                localStorage.removeItem('AppEngineData30');
                localStorage.removeItem('AppEngineData31');
                localStorage.removeItem('AppEngineData32');
                app.reloadApps();
                return true;
            }
        }, 0)
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
        if (eventualdata != null && eventualdata.length > 0) {
            data = JSON.parse(eventualdata);
        } else {
            if (slot.indexOf('new-xcenter-app-') != -1) {slot = slot.replaceAll('new-xcenter-app-')};
            launchname = 'AppEngineData' + slot;
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
        /*var contentStringContainer = "'";
        if (content.indexOf('"') != -1 && content.charAt(content.indexOf('"') - 1) == "\\") contentStringContainer = '"';
        content = content.replaceAll('</script>', '</scr' + contentStringContainer + '+' + contentStringContainer + 'ipt>');*/
        applaunch = setTimeout(() => {
            //OLD LAUNCH JUST APPENDED TO HEAD A SCRIPT WITH APP CONTENT's SCRIPTS!
            if (batch != null && batch.length > 0) {
                if (location.href.indexOf('file:///') === -1 || runbatchscripts == false || runbatchscripts == "false") {
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
                return;
            } else if (type == "Theme") {
                themeidentifier = title + CommonJS.random('10', 'both', 'both');
                themescripts = content.substring(content.indexOf('<script type="text/javascript">') + 31, content.lastIndexOf("</script>"));
                themelaunch = content.substring(content.indexOf('<style>') + 7, content.lastIndexOf("</style>"));
                themelaunch = themelaunch.replaceAll(';;', ';').replaceAll(';', '!important;');
                for (let i = 0;i < 100;i++) {
                    if (localStorage.getItem('AppEngineTheme' + i + "Name") == null || localStorage.getItem('AppEngineTheme' + i) == null || localStorage.getItem('AppEngineTheme' + i + 'Scripts') == null) {
                        localStorage.setItem('AppEngineTheme' + i + "Name", themeidentifier.replaceAll(themeidentifier.replaceAll(title, ''), ''));
                        localStorage.setItem('AppEngineTheme' + i, themelaunch);
                        localStorage.setItem('AppEngineTheme' + i + "Scripts", themescripts);
                        i = 100;
                    }
                }
                CommonJS.toast({
                    title: "Theme Added",
                    type: "success"
                })
            }
        }, 0);
    },
    mode: function(mode) {},
    runBatch: function(path) {
        if (location.href.indexOf('file:///') === -1 || runbatchscripts == false || runbatchscripts == "false") {
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
        if (location.href.indexOf('file:///') === -1 || runbatchscripts == false || runbatchscripts == "false") {
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
    homeMenu: function() {},
    refreshAppInfo: function() {
        if (document.querySelector('appinfo') != null) {
            var appTitle = document.querySelector('appinfo').getAttribute('title') ?? 'App';
            var appIcon = document.querySelector('appinfo').getAttribute('icon');
            var appExit = document.querySelector('appinfo').getAttribute('onexit') ?? 'location.reload()';
            document.querySelector('.new-xcenter-home-menu').querySelector('.vertical-center').querySelector('h3').innerHTML = appTitle;
            document.querySelector('.new-xcenter-home-menu').querySelector('.vertical-center').querySelector('img').src = appIcon;
            document.querySelector('.new-xcenter-home-menu').querySelector('.vertical-center').querySelectorAll('button')[0].setAttribute('onclick', appExit);
            document.querySelector('.new-xcenter-home-menu').classList.add('app-open');
            return true;
        } else return false;
    },
    pack: {
        build: function(slot, eventualdata) {
            if (eventualdata != null) {
                title = eventualdata.title ?? "App";
                data = JSON.stringify(eventualdata);
                CommonJS.download(title + '.pkg', data);
            } else {
                if (slot.indexOf('new-xcenter-app-') != -1) {slot = slot.replaceAll('new-xcenter-app-')};
                launchname = 'AppEngineData' + slot;
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