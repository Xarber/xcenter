console.log('%cAPP SCRIPT STARTED', 'padding: 10px;background-color: black;border-radius: 10px;')
var app0, app1, app2, app3, app4, app5, app6, app7, app8, app9, app10, app11, app12, app13, app14, app15, app16, app17, app18, app19, app20, app21, app22, app23, app24, app25, app26, app27, app28, app29, app30, app31, app32; //SLOT VARS
var data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24, data25, data26, data27, data28, data29, data30, data31, data32; //APP VARS
var datadefault = {
    installed: false,
    id: "AlongNameForAnotInstalledApp",
    src: "/assets/media/apps/blank.png"
}; //APP DEFAULT VALUES
var title, icon, content, id, type, launch, installData, installSlot, lastInstallSlot, AppID, slots, appinstall, appuninstall, xcenterappinstall, xcenterappuninstall, alreadyinstallcheck, tmpInstallSlot, tmpDataID; //INSTALL / UNINSTALL VARS
var data, applaunch, xcenterapplaunch, launchname; //LAUNCH VARS
//ENABLE APP FUNCTIONS
var app = {
    prepareSteps: {
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
                    title: "X-Store",
                    src: "/assets/media/apps/store.png",
                    content: "window.location = '/store/'",
                    id: "xstore",
                    type: "js",
                    launch: "run"
                }
                localStorage['XCenterAppData0'] = JSON.stringify(data0);
                console.log('> STORE RECOVERED')
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
        app.prepareSteps.defineSlots();
        app.prepareSteps.fixLocalStorage();
        app.prepareSteps.getData();
        app.prepareSteps.sysAppRecover();
        app.prepareSteps.getInstallSlot();
        app.prepareSteps.show();
    },
    prepareExternal: function() {
        console.log('> PREPARING FOR EXTERNAL PAGE')
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
                slot: "1" //ONLY DEFINE TO FORCE CUSTOM SLOT, USE "0" TO EDIT THE DEFAULT STORE
            })
        */
        if (data.content == null) return false;
        if (data.icon == null && data.title == null && data.src == null) return false;
        if (data.id == null && data.title == null) return false;
        if (installSlot == "none") return false;
        tmpDataID = data.id ?? data.title;
        tmpInstallSlot = app.alreadyInstallCheck(tmpDataID);
        if (tmpInstallSlot != false || tmpInstallSlot === "0") installSlot = tmpInstallSlot;
        installSlot = data.slot ?? installSlot;
        document.getElementById('new-xcenter-app-install-cancel').classList.remove('hided');
        document.getElementById('new-xcenter-app-install-icon').src = data.icon ?? data.src ?? "/assets/media/apps/app.png";
        document.getElementById('new-xcenter-app-install-title').innerHTML = data.title ?? "";
        document.getElementById('new-xcenter-app-install').classList.remove('hided');
        appinstall = setTimeout(() => {
            document.getElementById('new-xcenter-app-install-cancel').classList.add('hided')
            data.title = data.title ?? "";
            data.id = data.id ?? data.title + CommonJS.random('10', 'num', 'upr');
            data.type = data.type ?? "js";
            title = data.title;
            icon = data.icon ?? data.src ?? "/assets/media/apps/app.png";
            content = data.content;
            id = data.id;
            type = data.type;
            installData = {
                installed: true,
                src: icon,
                title: title,
                id: id,
                type: type,
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
    launch: function(slot) {
        if (document.getElementById('new-xcenter-apps-mode') != null) {
            if (document.getElementById('new-xcenter-apps-mode').innerHTML == "pack") {
                app.pack.build(slot)
                return;
            } else if (document.getElementById('new-xcenter-apps-mode').innerHTML == "uninstall") {
                app.uninstall(slot)
                return;
            }
        }
        if (slot.indexOf('new-xcenter-app-') != -1) {slot = slot.replaceAll('new-xcenter-app-')};
        launchname = 'XCenterAppData' + slot;
        launchname = launchname.replaceAll('undefined', '');
        data = JSON.parse(localStorage[launchname]);
        if (data.installed == false) return false;
        console.log('Launching App')
        console.log(data)
        title = data.title ?? "App";
        icon = data.src ?? "/assets/media/apps/default.png";
        content = data.content;
        id = data.id;
        type = data.type;
        launch = data.launch;
        if (document.getElementById('new-xcenter-app-launch') == null) {
            xcenterapplaunch = document.createElement('div');
            xcenterapplaunch.innerHTML = '<div class="inf-loading"><div></div></div><div class="center"><img src="/assets/media/apps/blank.png" id="new-xcenter-app-launch-icon" alt=""><p id="new-xcenter-app-launch-title">App</p></div><button id="new-xcenter-app-launch-cancel" onclick="document.getElementById(\'new-xcenter-app-launch\').classList.add(\'hided\');clearTimeout(applaunch);"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg></button>';
            xcenterapplaunch.setAttribute('class', 'fullscreen new-xcenter-apps-launch hided');
            xcenterapplaunch.setAttribute('id', 'new-xcenter-app-launch');
            document.querySelector('body').appendChild(xcenterapplaunch);
        }
        document.getElementById('new-xcenter-app-launch-icon').src = icon;
        document.getElementById('new-xcenter-app-launch-title').innerHTML = title;
        document.getElementById('new-xcenter-app-launch').classList.remove('hided');
        applaunch = setTimeout(() => {
            document.getElementById('new-xcenter-app-launch-cancel').classList.add('hided');
            var script = document.createElement('script');
            script.innerHTML = content;
            document.head.appendChild(script);
            setTimeout(() => {
                document.getElementById('new-xcenter-app-launch').classList.add('hided');
            },10000)
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
    pack: {
        build: function(slot) {
            if (slot.indexOf('new-xcenter-app-') != -1) {slot = slot.replaceAll('new-xcenter-app-')};
            launchname = 'XCenterAppData' + slot;
            launchname = launchname.replaceAll('undefined', '');
            data = JSON.parse(localStorage[launchname]);
            if (data.installed == false) return false;
            title = data.title ?? "App";
            if (title == null || title.length < 1) title = "App";
            CommonJS.download(title + '.pkg', JSON.stringify(data));
            console.log('Builded App Package')
        },
        install: function(data) {
            data = JSON.parse(data);
            app.install(data);
        }
    } 
}

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
} else {
    app.prepareExternal();
}
console.log('%cAPP SCRIPT ENDED', 'padding: 10px;background-color: black;border-radius: 10px;')