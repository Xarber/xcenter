var reccstore1, reccstore2, reccstore3, reccstore4, reccstore5, reccstore6, reccstore7, reccstore8, reccstore9, reccstore10, reccstore11, reccstore12;
var lastcomeout1, lastcomeout2, lastcomeout3, lastcomeout4, lastcomeout5, lastcomeout6, lastcomeout7, lastcomeout8, lastcomeout9, lastcomeout10, lastcomeout11, lastcomeout12;
var bestapp1, bestapp2, bestapp3, bestapp4, bestapp5, bestapp6, bestapp7, bestapp8, bestapp9, bestapp10, bestapp11, bestapp12;
var updates1, updates2, updates3, updates4, updates5, updates6, updates7, updates8, updates9, updates10, updates11, updates12;
var tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8, tool9, tool10, tool11, tool12;
var store1, store2, store3, store4, store5, store6, store7, store8, store9, store10;
var storeInstallSlot;
var quickLaunchTimeout;
var defaultStore = {
    added: false
}
var store = {
    prepareSteps: {
        defineSlots: function() {
            lastcomeout1 = document.getElementById('store-comeouts-1');
            lastcomeout2 = document.getElementById('store-comeouts-2');
            lastcomeout3 = document.getElementById('store-comeouts-3');
            lastcomeout4 = document.getElementById('store-comeouts-4');
            lastcomeout5 = document.getElementById('store-comeouts-5');
            lastcomeout6 = document.getElementById('store-comeouts-6');
            lastcomeout7 = document.getElementById('store-comeouts-7');
            lastcomeout8 = document.getElementById('store-comeouts-8');
            lastcomeout9 = document.getElementById('store-comeouts-9');
            lastcomeout10 = document.getElementById('store-comeouts-10');
            lastcomeout11 = document.getElementById('store-comeouts-11');
            lastcomeout12 = document.getElementById('store-comeouts-12');
            bestapp1 = document.getElementById('store-app-1');
            bestapp2 = document.getElementById('store-app-2');
            bestapp3 = document.getElementById('store-app-3');
            bestapp4 = document.getElementById('store-app-4');
            bestapp5 = document.getElementById('store-app-5');
            bestapp6 = document.getElementById('store-app-6');
            bestapp7 = document.getElementById('store-app-7');
            bestapp8 = document.getElementById('store-app-8');
            bestapp9 = document.getElementById('store-app-9');
            bestapp10 = document.getElementById('store-app-10');
            bestapp11 = document.getElementById('store-app-11');
            bestapp12 = document.getElementById('store-app-12');
            updates1 = document.getElementById('store-update-1');
            updates2 = document.getElementById('store-update-2');
            updates3 = document.getElementById('store-update-3');
            updates4 = document.getElementById('store-update-4');
            updates5 = document.getElementById('store-update-5');
            updates6 = document.getElementById('store-update-6');
            updates7 = document.getElementById('store-update-7');
            updates8 = document.getElementById('store-update-8');
            updates9 = document.getElementById('store-update-9');
            updates10 = document.getElementById('store-update-10');
            updates11 = document.getElementById('store-update-11');
            updates12 = document.getElementById('store-update-12');
            tool1 = document.getElementById('store-tool-1');
            tool2 = document.getElementById('store-tool-2');
            tool3 = document.getElementById('store-tool-3');
            tool4 = document.getElementById('store-tool-4');
            tool5 = document.getElementById('store-tool-5');
            tool6 = document.getElementById('store-tool-6');
            tool7 = document.getElementById('store-tool-7');
            tool8 = document.getElementById('store-tool-8');
            tool9 = document.getElementById('store-tool-9');
            tool10 = document.getElementById('store-tool-10');
            tool11 = document.getElementById('store-tool-11');
            tool12 = document.getElementById('store-tool-12');
            return true;
        },
        fixLocalStorage: function() {
            if (localStorage['XCenterUserStore1'] == null) localStorage['XCenterUserStore1'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore2'] == null) localStorage['XCenterUserStore2'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore3'] == null) localStorage['XCenterUserStore3'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore4'] == null) localStorage['XCenterUserStore4'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore5'] == null) localStorage['XCenterUserStore5'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore6'] == null) localStorage['XCenterUserStore6'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore7'] == null) localStorage['XCenterUserStore7'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore8'] == null) localStorage['XCenterUserStore8'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore9'] == null) localStorage['XCenterUserStore9'] = JSON.stringify(defaultStore);
            if (localStorage['XCenterUserStore10'] == null) localStorage['XCenterUserStore10'] = JSON.stringify(defaultStore);
            return true;
        },
        loadStores: function() {
            for (let i = 1;i < 11;i++) {
                var storedata = JSON.parse(localStorage["XCenterUserStore" + i]);
                if (storedata !== defaultStore) {
                    var storetitle = storedata.title ?? "Store";
                    var storedesc = storedata.desc ?? title + " is an X-Center store.";
                    var storetype = storedata.type ?? "detect";
                    var storelink = storedata.link ?? "";
                    var storeapps = storedata.apps ?? "";
                    var storeicon = storedata.icon ?? "/assets/media/apps/store.png";
                    if (storeapps.length > 0 && storelink.length > 0 && (storeapps.lastIndexOf(".sal") >= 4 || storeapps.lastIndexOf(".spl") >= 4)) {
                        if (storeicon.charAt(0) == "/") {
                            storeicon = "//" + storelink.split("/")[2] + storeicon;
                        } else if (storeicon.indexOf('//') == -1) {
                            storeicon = storelink.substring(0, storelink.lastIndexOf('/')) + "/" + storeicon;
                        }
                        if (storeapps.charAt(0) == "/") {
                            storeapps = "//" + storelink.split("/")[2] + storeapps;
                        } else if (storeapps.indexOf('//') == -1) {
                            storeapps = storelink.substring(0, storelink.lastIndexOf('/')) + "/" + storeapps;
                        } else {
                            storeapps = storelink + "/" + storeapps;
                        }
                        if (storetype == "detect") {
                            var storeappslength = storeapps.length - 1;
                            var storeappsextension = storeapps.charAt(storeappslength) + storeapps.charAt(storeappslength - 1) + storeapps.charAt(storeappslength - 2);
                            if (storeappsextension == "sal") storetype = "2";
                            if (storeappsextension == "spl") storetype = "1";
                        }
                        document.getElementById("store-settings-stores-" + i).innerHTML = storetitle;
                        if (storetype == "1") {
                            fetch(storeapps).then(response => {return response.json()}).then(data => {
                                var multipledata = data.apps;
                                for (let i = 0;i < multipledata.length;i++) {
                                    var data = multipledata[i];
                                    if (data.content == null) return false;
                                    if (data.icon == null && data.title == null && data.src == null) return false;
                                    if (data.id == null && data.title == null) return false;
                                    if (data.id == "AlongNameForAnotInstalledApp") return false;
                                    if (installSlot == "none") return false;
                                    var tmpDataID = data.id ?? data.title;
                                    if (data.type == "js") {
                                        data.content = "<script>\n" + data.content + "\n</script>";
                                        data.type = "Script";
                                    }
                                    data.title = data.title ?? "App";
                                    data.id = data.id ?? data.title + CommonJS.random('10', 'num', 'upr');
                                    data.type = data.type ?? "App";
                                    data.quicklaunch = data.quicklaunch ?? false;
                                    var title = data.title;
                                    var icon = data.icon ?? data.src ?? "/assets/media/apps/app.png";
                                    var content = data.content;
                                    var id = data.id;
                                    var type = data.type;
                                    var desc = data.desc;
                                    var author = data.author;
                                    var batch = data.batch;
                                    var quicklaunch = data.quicklaunch;
                                    installData = {
                                        installed: true,
                                        quicklaunch: quicklaunch,
                                        type: type,
                                        title: title,
                                        desc: desc,
                                        author: author,
                                        src: icon,
                                        id: id,
                                        batch: batch,
                                        content: content
                                    }
                                    var size = new Blob([JSON.stringify(installData)]).size;
                                    size = size / 1000000;
                                    size = size + "MB";
                                    size = size.slice(0, 4) + "MB";
                                    var appcontainer = document.createElement('img');
                                    appcontainer.setAttribute("onclick", "store.section(this.id)");
                                    appcontainer.setAttribute("onerror", "this.src = '/assets/media/apps/app.png'");
                                    appcontainer.setAttribute("src",icon);
                                    appcontainer.setAttribute("alt", title);
                                    appcontainer.setAttribute("apptype", type);
                                    appcontainer.setAttribute("apptitle", title);
                                    appcontainer.setAttribute("appdesc", desc);
                                    appcontainer.setAttribute("appicon", icon);
                                    appcontainer.setAttribute("appsize", size);
                                    appcontainer.setAttribute("appql", "" + quicklaunch + "");
                                    appcontainer.setAttribute("id", "store-app-" + id);
                                    appcontainer.setAttribute("appdata", JSON.stringify(installData));
                                    if (document.getElementById("store-app-" + id) == null) {
                                        if (type == "App") {
                                            document.getElementById("store-apps-container").appendChild(appcontainer);
                                            document.getElementById("store-apps-empty").classList.add("hided");
                                        } else if (type == "Tool") {
                                            document.getElementById("store-tools-container").appendChild(appcontainer);
                                            document.getElementById("store-tools-empty").classList.add("hided");
                                        } else if (type == "Script") {
                                            document.getElementById("store-scripts-container").appendChild(appcontainer);
                                            document.getElementById("store-scripts-empty").classList.add("hided");
                                        } else if (type == "Theme") {
                                            document.getElementById("store-themes-container").appendChild(appcontainer);
                                            document.getElementById("store-themes-empty").classList.add("hided");
                                        } else if (type == "Game") {
                                            document.getElementById("store-games-container").appendChild(appcontainer);
                                            document.getElementById("store-games-empty").classList.add("hided");
                                        }
                                        var appsearchcontainer = document.createElement("div");
                                        var appsearchcontainerimg = document.createElement("img");
                                        var appsearchcontainertitle = document.createElement("h3");
                                        var appsearchcontainertype = document.createElement("h4");
                                        appsearchcontainer.setAttribute('class', 'store-search-app');
                                        appsearchcontainer.setAttribute('onclick', 'store.section(this.getAttribute("appid"))')
                                        appsearchcontainer.setAttribute('appid', 'store-app-' + id)
                                        appsearchcontainerimg.setAttribute('src', icon);
                                        appsearchcontainerimg.setAttribute('alt', title);
                                        appsearchcontainertitle.innerHTML = title;
                                        appsearchcontainertype.innerHTML = type;
                                        appsearchcontainer.appendChild(appsearchcontainerimg);
                                        appsearchcontainer.appendChild(appsearchcontainertitle);
                                        appsearchcontainer.appendChild(appsearchcontainertype);
                                        document.getElementById("store-search-apps").appendChild(appsearchcontainer);
                                    }
                                }
                            })
                        } else if (storetype == "2") {
                            var storepath = storeapps.substring(0, storeapps.lastIndexOf('/'));
                            fetch(storeapps).then(response => response.text()).then(data => {
                                var lines = (data.split("\n")).length - 1;
                                lines = +lines + 1;
                                for (let i = lines;i > 0;--i) {
                                    var tmplinkelement = data.split("\n")[0];
                                    var tmplinkelement1 = tmplinkelement.split('"></link>')[0];
                                    var link = tmplinkelement1.replaceAll('<link path="', '');
                                    data = data.replaceAll(tmplinkelement + "\n", '');
                                    link = storepath + "/" + link;
                                    fetch(link).then(response => response.json()).then(data => {
                                        data.quicklaunch = data.quicklaunch ?? false;
                                        var type = data.type;
                                        var title = data.title;
                                        var desc = data.desc;
                                        var author = data.author;
                                        var icon = data.src;
                                        var id = data.id;
                                        var batch = data.batch;
                                        var content = data.content;
                                        var quicklaunch = data.quicklaunch;
                                        var installData = {
                                            installed: true,
                                            quicklaunch: quicklaunch,
                                            type: type,
                                            title: title,
                                            desc: desc,
                                            author: author,
                                            src: icon,
                                            id: id,
                                            batch: batch,
                                            content: content
                                        }
                                        var size = new Blob([JSON.stringify(installData)]).size;
                                        size = size / 1000000;
                                        size = size + "MB";
                                        size = size.slice(0, 4) + "MB";
                                        var appcontainer = document.createElement('img');
                                        appcontainer.setAttribute("onclick", "store.section(this.id)");
                                        appcontainer.setAttribute("onerror", "this.src = '/assets/media/apps/app.png'");
                                        appcontainer.setAttribute("src",icon);
                                        appcontainer.setAttribute("alt", title);
                                        appcontainer.setAttribute("apptype", type);
                                        appcontainer.setAttribute("apptitle", title);
                                        appcontainer.setAttribute("appdesc", desc);
                                        appcontainer.setAttribute("appicon", icon);
                                        appcontainer.setAttribute("appsize", size);
                                        appcontainer.setAttribute("appql", "" + quicklaunch + "");
                                        appcontainer.setAttribute("id", "store-app-" + id);
                                        appcontainer.setAttribute("appdata", JSON.stringify(installData));
                                        if (document.getElementById("store-app-" + id) == null) {
                                            if (type == "App") {
                                                document.getElementById("store-apps-container").appendChild(appcontainer);
                                                document.getElementById("store-apps-empty").classList.add("hided");
                                            } else if (type == "Tool") {
                                                document.getElementById("store-tools-container").appendChild(appcontainer);
                                                document.getElementById("store-tools-empty").classList.add("hided");
                                            } else if (type == "Script") {
                                                document.getElementById("store-scripts-container").appendChild(appcontainer);
                                                document.getElementById("store-scripts-empty").classList.add("hided");
                                            } else if (type == "Theme") {
                                                document.getElementById("store-themes-container").appendChild(appcontainer);
                                                document.getElementById("store-themes-empty").classList.add("hided");
                                            } else if (type == "Game") {
                                                document.getElementById("store-games-container").appendChild(appcontainer);
                                                document.getElementById("store-games-empty").classList.add("hided");
                                            }
                                            var appsearchcontainer = document.createElement("div");
                                            var appsearchcontainerimg = document.createElement("img");
                                            var appsearchcontainertitle = document.createElement("h3");
                                            var appsearchcontainertype = document.createElement("h4");
                                            appsearchcontainer.setAttribute('class', 'store-search-app');
                                            appsearchcontainer.setAttribute('onclick', 'store.section(this.getAttribute("appid"))')
                                            appsearchcontainer.setAttribute('appid', 'store-app-' + id)
                                            appsearchcontainerimg.setAttribute('src', icon);
                                            appsearchcontainerimg.setAttribute('alt', title);
                                            appsearchcontainertitle.innerHTML = title;
                                            appsearchcontainertype.innerHTML = type;
                                            appsearchcontainer.appendChild(appsearchcontainerimg);
                                            appsearchcontainer.appendChild(appsearchcontainertitle);
                                            appsearchcontainer.appendChild(appsearchcontainertype);
                                            document.getElementById("store-search-apps").appendChild(appsearchcontainer);
                                        }
                                    })
                                }
                            });
                        }
                    }
                }
            }

        },
        emptyAppSlots: function() {
            document.getElementById("store-apps-container").innerHTML = "";
            document.getElementById("store-themes-container").innerHTML = "";
            document.getElementById("store-tools-container").innerHTML = "";
            document.getElementById("store-scripts-container").innerHTML = "";
            document.getElementById("store-games-container").innerHTML = "";
            document.getElementById("store-apps-empty").classList.remove("hided");
            document.getElementById("store-themes-empty").classList.remove("hided");
            document.getElementById("store-tools-empty").classList.remove("hided");
            document.getElementById("store-scripts-empty").classList.remove("hided");
            document.getElementById("store-games-empty").classList.remove("hided");
            for (let i = 1;i < 11;i++) {
                document.getElementById("store-settings-stores-" + i).innerHTML = "Empty";
            }
        },
        getInstallSlot: function() {
            if (localStorage['XCenterUserStore1'] == JSON.stringify(defaultStore)) {storeInstallSlot = 1;return storeInstallSlot;}
            if (localStorage['XCenterUserStore2'] == JSON.stringify(defaultStore)) {storeInstallSlot = 2;return storeInstallSlot;}
            if (localStorage['XCenterUserStore3'] == JSON.stringify(defaultStore)) {storeInstallSlot = 3;return storeInstallSlot;}
            if (localStorage['XCenterUserStore4'] == JSON.stringify(defaultStore)) {storeInstallSlot = 4;return storeInstallSlot;}
            if (localStorage['XCenterUserStore5'] == JSON.stringify(defaultStore)) {storeInstallSlot = 5;return storeInstallSlot;}
            if (localStorage['XCenterUserStore6'] == JSON.stringify(defaultStore)) {storeInstallSlot = 6;return storeInstallSlot;}
            if (localStorage['XCenterUserStore7'] == JSON.stringify(defaultStore)) {storeInstallSlot = 7;return storeInstallSlot;}
            if (localStorage['XCenterUserStore8'] == JSON.stringify(defaultStore)) {storeInstallSlot = 8;return storeInstallSlot;}
            if (localStorage['XCenterUserStore9'] == JSON.stringify(defaultStore)) {storeInstallSlot = 9;return storeInstallSlot;}
            if (localStorage['XCenterUserStore10'] == JSON.stringify(defaultStore)) {storeInstallSlot = 10;return storeInstallSlot;}
            return false;
        },
        getReccStores: function() {
            fetch('https://raw.githubusercontent.com/Xarber/xcenter/store/best.xsl').then(response => response.text()).then(data => {
                var lines = (data.split("\n")).length - 1;
                var last = data.charAt(data.length - 1);
                if (last != "\n") lines = +lines + 1;
                for (let i = lines;i > 0;--i) {
                    setTimeout(() => {
                        var tmplinkelement = data.split("\n")[0];
                        var tmplinkelement1 = tmplinkelement.split('"></link>')[0];
                        var link = tmplinkelement1.replaceAll('<link path="', '');
                        data = data.replaceAll(tmplinkelement + "\n", '');
                        fetch(link).then(response => response.json()).then(data => {
                            json = data;
                            console.log(json);
                            var title = json.title ?? "Store";
                            var icon = json.icon ?? location.href.replaceAll(location.pathname, '') + "/assets/media/apps/store.png";
                            var desc = json.desc ?? title + " is a X-Center Reccomended Store.";
                            var type = json.type ?? "2";
                            var apps = json.files;
                            if (icon.charAt(0) == "/") {
                                icon = "//" + link.split("/")[2] + icon;
                            } else if (icon.indexOf('//') == -1) {
                                icon = link.substring(0, link.lastIndexOf('/')) + "/" + icon;
                            }
                            if (store.alreadyAdded("", {
                                title: title,
                                desc: desc,
                                type: type,
                                link: link,
                                apps: apps,
                                icon: icon
                            }) == false) {
                                if (apps == null || apps.length < 1) {
                                    console.warn('Store Not Added');
                                    return false;
                                } else {
                                    document.getElementById('store-reccomended-' + i).setAttribute('storetitle', title);
                                    document.getElementById('store-reccomended-' + i).setAttribute('alt', title);
                                    document.getElementById('store-reccomended-' + i).setAttribute('storedesc', desc);
                                    document.getElementById('store-reccomended-' + i).setAttribute('storetype', type);
                                    document.getElementById('store-reccomended-' + i).setAttribute('storelink', link);
                                    document.getElementById('store-reccomended-' + i).setAttribute('storeapps', apps);
                                    document.getElementById('store-reccomended-' + i).setAttribute('src', icon);
                                }
                            }
                        });
                    }, 300)

                }
            });
            return true;
        }
    },
    prepare: function() {
        store.prepareSteps.defineSlots();
        store.prepareSteps.fixLocalStorage();
        store.prepareSteps.emptyAppSlots();
        store.prepareSteps.loadStores();
        store.prepareSteps.getInstallSlot();
        store.prepareSteps.getReccStores();
        return true;
    },
    prepareExternal: function() {
        store.prepareSteps.fixLocalStorage();
        store.prepareSteps.getInstallSlot();
        return true;
    },
    reload: function() {
        if (window.navigator.onLine == false) {
            document.querySelector('.store-empty').classList.add('hided');
            document.querySelector('.store-guide').classList.add('hided');
            document.querySelector('.store').classList.add('hided');
            document.querySelector('.store-app-view').classList.add('hided');
            document.querySelector("#store-nav").classList.add("hided");
            document.querySelector(".nav-compenser").classList.add("hided")
            document.getElementById("store-offline").classList.remove("hided");
            return false;
        } else {
            document.getElementById("store-offline").classList.add("hided");
            document.querySelector('.store-empty').classList.add('hided');
            document.querySelector('.store-guide').classList.add('hided');
            document.querySelector('.store-app-view').classList.add('hided');
            document.querySelector('.store').classList.remove('hided');
            document.querySelector("#store-nav").classList.remove("hided");
            document.querySelector(".nav-compenser").classList.remove("hided")
        }
        if (location.pathname.indexOf("/apps/") != -1 || location.pathname.indexOf("/store/") != -1) {
            var styletmp = document.createElement('style');
            styletmp.innerHTML = '\n .store-settings-stores-manuallyadd {width: 80%;height: 20%;min-height: 200px;background-color: blue;position: fixed;top: 50%;left: 50%;z-index: 201;padding: 10px;border-radius: 10px;} \n';
            document.body.appendChild(styletmp)
            store.prepare();
        } else {
            store.prepareExternal();
        }
    },
    settings: function() {
        if (document.getElementById("new-xcenter-store-settings") == null) return false;
        document.getElementById("new-xcenter-store-settings").classList.remove("hided");
    },
    section: function(id) {
        if (id.indexOf("store-app-") != -1) {
            document.querySelector('.store-empty').classList.add('hided');
            document.querySelector('.store-guide').classList.add('hided');
            if (document.querySelector('.store-search').classList.contains('hided')) document.querySelector('.store').classList.remove('hided');
            //apptype="" apptitle="" appdesc="" appicon="" appdata=""
            var type = document.getElementById(id).getAttribute("apptype") ?? "App";
            var title = document.getElementById(id).getAttribute("apptitle") ?? "App";
            var author = document.getElementById(id).getAttribute("appauthor") ?? "User";
            var icon = document.getElementById(id).getAttribute("appicon") ?? document.getElementById(id).getAttribute("src") ?? "/assets/media/apps/app.png";
            var id = document.getElementById(id).getAttribute("id") ?? title + "-" + CommonJS.random("10");
            var size = document.getElementById(id).getAttribute("appsize") ?? "???";
            var desc = document.getElementById(id).getAttribute("appdesc") ?? title + " is a " + type + " made by \"" + author + "\".";
            if ((type == null && title == null && author == null && icon == null && id == null && desc == null) || (title == null && icon == null)) return false;
            if ((type.length < 1 && title.length < 1 && author.length < 1 && icon.length < 1 && id.length < 1 && desc.length < 1) || (title.length < 1 && icon.length < 1)) return false;
            if (icon == "/assets/media/apps/blank.png") return false;
            document.getElementById("app-title").innerHTML = title;
            document.getElementById("app-icon").src = icon;
            document.getElementById("app-description").innerHTML = desc;
            document.getElementById("app-type").innerHTML = type;
            document.getElementById("app-size").innerHTML = size;
            document.getElementById('app-view').setAttribute("callerid", id);
            if (store.apps.alreadyInstalled(document.getElementById(id).getAttribute("appdata")) != false) document.getElementById("app-install").setAttribute("class", "store-app-installed");
            if (document.getElementById('app-view').getAttribute('appql') == "true" || document.getElementById('app-view').getAttribute('appql') == true) document.getElementById('app-view').classList.add('quicklaunch');
            document.getElementById('app-view').classList.remove('hided');
        } else if (id.indexOf("store-reccomended-") != -1) {
            var icon = document.getElementById(id).getAttribute("storeicon") ?? document.getElementById(id).src ?? "";
            var title = document.getElementById(id).getAttribute("storetitle") ?? document.getElementById(id).getAttribute("alt") ?? "";
            var desc = document.getElementById(id).getAttribute("storedesc") ?? "";
            var type = document.getElementById(id).getAttribute("storetype") ?? "";
            var link = document.getElementById(id).getAttribute("storelink") ?? "";
            var apps = document.getElementById(id).getAttribute("storeapps") ?? "";
            if (icon == null || title == null || desc == null || link == null || apps == null) return false;
            if (icon.length < 1 && title.length < 1 && desc.length < 1 && link.length < 1 && apps.length < 1) return false;
            if (icon.indexOf("/assets/media/apps/blank.png") != -1 && title.length< 1) return false;
            if ((icon.length < 1 && title.length < 1)) return false;
            if (title.length < 1) title = "Store";
            if (icon.length < 1 || icon.indexOf("/assets/media/apps/blank.png") != -1) icon = "/assets/media/apps/store.png";
            if (desc.length < 1) desc = "\"" + title + "\" is a X-Center Store.";
            document.getElementById("store-view").setAttribute("storeicon", icon);
            document.getElementById("store-view").setAttribute("storetitle", title);
            document.getElementById("store-view").setAttribute("storedesc", desc);
            document.getElementById("store-view").setAttribute("storetype", type);
            document.getElementById("store-view").setAttribute("storelink", link);
            document.getElementById("store-view").setAttribute("storeapps", apps);
            if (store.alreadyAdded(id, {
                title: title,
                desc: desc,
                type: type,
                link: link,
                apps: apps,
                icon: icon
            }) != false) {
                document.getElementById("store-add").setAttribute("class", "store-added storeadd");
            }
            document.getElementById("store-title").innerHTML = title;
            document.getElementById("store-icon").src = icon;
            document.getElementById("store-description").innerHTML = desc;
            document.getElementById("store-view").classList.remove("hided");
        } else if (id == "search") {
            document.querySelector(".store-empty").classList.add("hided");
            document.querySelector(".store-guide").classList.add("hided");
            document.querySelector(".store").classList.toggle("hided");
            document.querySelector(".store-search").classList.toggle("hided");
        }
    },
    alreadyAdded: function(id, eventualdata) {
        if (eventualdata != null) {
            var title = eventualdata.title ?? "";
            var desc = eventualdata.desc ?? "";
            var type = eventualdata.type ?? "";
            var link = eventualdata.link ?? "";
            var apps = eventualdata.apps ?? "";
            var icon = eventualdata.icon ?? "";
        } else {
            var title = document.getElementById(id).getAttribute('storetitle') ?? "";
            var desc = document.getElementById(id).getAttribute('storedesc') ?? "";
            var type = document.getElementById(id).getAttribute('storetype') ?? "";
            var link = document.getElementById(id).getAttribute('storelink') ?? "";
            var apps = document.getElementById(id).getAttribute('storeapps') ?? "";
            var icon = document.getElementById(id).getAttribute('storeicon') ?? document.getElementById(id).src ?? "";
        }
        if ((title.length < 1 && type.length < 1 && desc.length < 1 && type.length < 1 && link.length < 1 && apps.length < 1)) return false;
        var installData = {
            added: true,
            title: title,
            desc: desc,
            type: type,
            icon: icon,
            link: link,
            apps: apps
        }
        for (let i = 1;i < 11;i++) {
            console.log(localStorage['XCenterUserStore' + i]);
            console.log(JSON.stringify(installData))
            if (localStorage['XCenterUserStore' + i] == JSON.stringify(installData)) {
                var slot = i;
                i = 10;
                return slot;
            }
        }
        return false;
    },
    add: function(id) {
        var title = document.getElementById(id).getAttribute('storetitle') ?? "";
        var desc = document.getElementById(id).getAttribute('storedesc') ?? "";
        var type = document.getElementById(id).getAttribute('storetype') ?? "";
        var link = document.getElementById(id).getAttribute('storelink') ?? "";
        var apps = document.getElementById(id).getAttribute('storeapps') ?? "";
        var icon = document.getElementById(id).getAttribute('storeicon') ?? document.getElementById(id).getAttribute('src') ?? "";
        if (title.length < 1 && type.length < 1 && desc.length < 1 && type.length < 1 && link.length < 1 && apps.length < 1 && icon == "/assets/media/apps/blank.png") return false;
        if (store.alreadyAdded(id) != false && store.alreadyAdded(id) != null) {
            CommonJS.toast({title: "Store Already Added", type: "warn", duration: "3s"});
            return false;
        }
        var installData = {
            added: true,
            title: title,
            desc: desc,
            type: type,
            icon: icon,
            link: link,
            apps: apps
        }
        localStorage['XCenterUserStore' + storeInstallSlot] = JSON.stringify(installData);
        CommonJS.toast({title: "Store Added", type: "success", duration: "3s"});
        store.reload();
    },
    manuallyadd: function(slot) {
        if (document.querySelector(".store-settings-stores-manuallyadd") != null) document.querySelector(".store-settings-stores-manuallyadd").remove();
        var container = document.createElement("div");
        container.setAttribute("class", "store-settings-stores-manuallyadd center");
        container.innerHTML = "<p>Add A Store: Insert the store.xsi file link</p><input id=\"store-settings-stores-manuallyadd-link\" type=\"text\"><button onclick=\"this.parentNode.remove()\">Cancel</button>";
        var confirm = document.createElement("button");
        confirm.innerHTML = "Confirm";
        confirm.onclick = function() {
            var link = document.getElementById("store-settings-stores-manuallyadd-link").value;
            var linkinside = document.getElementById("store-settings-stores-manuallyadd-link").value;
            if (link.length < 1 || linkinside.length < 1) return false;
            container.remove();
            fetch(link).then(response => response.json()).then(data => {
                json = data;
                console.log(json);
                var title = json.title ?? "Store";
                var icon = json.icon ?? location.href.replaceAll(location.pathname, '') + "/assets/media/apps/store.png";
                var desc = json.desc ?? title + " is a X-Center Store.";
                var type = json.type ?? "2";
                var apps = json.files;
                var link = linkinside;
                if (icon.charAt(0) == "/") {
                    icon = "//" + link.split("/")[2] + icon;
                } else if (icon.indexOf('//') == -1) {
                    icon = link.substring(0, link.lastIndexOf('/')) + "/" + icon;
                }
                if (title.length < 1 && type.length < 1 && desc.length < 1 && type.length < 1 && link.length < 1 && apps.length < 1 && icon == "/assets/media/apps/blank.png") return false;
                var installData = {
                    added: true,
                    title: title,
                    desc: desc,
                    type: type,
                    icon: icon,
                    link: link,
                    apps: apps
                }
                if (store.alreadyAdded("", installData) != false && store.alreadyAdded("", installData) != null) {
                    CommonJS.toast({title: "Store Already Added", type: "warn", duration: "3s"});
                    return false;
                }
                localStorage['XCenterUserStore' + slot] = JSON.stringify(installData);
                CommonJS.toast({title: "Store Added", type: "success", duration: "3s"});
                store.reload();
            });
        }
        container.appendChild(confirm);
        document.body.appendChild(container)
    },
    remove: function(position, silent) {
        localStorage.removeItem("XCenterUserStore" + position);
        if (silent != true) {
            CommonJS.toast({title: "Store Removed", type: "error", duration: "3s"})
        }
        store.reload();
    },
    resetStores: function() {
        for (let i = 1;i < 11;i++) {
            store.remove(i, true);
        }
        
        CommonJS.toast({title: "Stores Resetted", type: "error", duration: "3s"})
        store.reload();
    },
    search: function() {
        document.getElementById('store-search-apps').classList.remove('hided');
        var query = document.getElementById('store-search-apps-value').value;
        if (query.length != 0) {
            document.getElementById('store-search-apps-title').innerHTML = 'Search Results for "' + query + '"';
        } else document.getElementById('store-search-apps-title').innerHTML = 'Showing all the apps';
        var filter, ul, li, a, i;
        filter = query.toUpperCase();
        ul = document.getElementById("store-search-apps");
        li = ul.getElementsByClassName("store-search-app");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("h3")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            };
        };
    },
    apps: {
        alreadyInstalled: function(data) {
            for (let i = 0;i < 33;i++) {
                if (localStorage["XCenterAppData" + i] == data) return i;
                if (localStorage["XCenterAppData" + i].replaceAll('"installed":true,', '') == data) return i;
                if (localStorage["XCenterAppData" + i].replaceAll('"installed":true,', '').replaceAll('"quicklaunch":false,', '').replaceAll('"quicklaunch":true,', '') == data) return i;
                if (localStorage["XCenterAppData" + i].replaceAll('"quicklaunch":false,', '').replaceAll('"quicklaunch":true,', '') == data) return i;
            }
            return false;
        },
        install: function(tmpid) {
            setTimeout(() => {
                var eid = tmpid
                var data = JSON.parse(document.getElementById(eid).getAttribute("appdata"));
                data.title = data.title ?? "App";
                data.id = data.id ?? data.title + CommonJS.random('10', 'num', 'upr');
                data.type = data.type ?? "App";
                var title = data.title;
                var icon = data.icon ?? data.src ?? "/assets/media/apps/app.png";
                var content = data.content;
                var id = data.id;
                var type = data.type;
                var desc = data.desc;
                var author = data.author;
                var batch = data.batch;
                var installData = {
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
                localStorage["XCenterAppData" + installSlot] = JSON.stringify(installData);
            }, 4500)
        },
        launch: function(id) {
            if (document.getElementById('new-xcenter-apps-mode') != null) {
                if (document.getElementById('new-xcenter-apps-mode').innerHTML == "pack") {
                    app.pack.build(slot)
                    return;
                } else if (document.getElementById('new-xcenter-apps-mode').innerHTML == "uninstall") {
                    app.uninstall(slot)
                    return;
                }
            }
            var data = JSON.parse(document.getElementById(id).getAttribute("appdata"));
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
                    document.getElementById('new-xcenter-app-launch').classList.add('hided');
                },5000)
            }, 5000);
        },
        quickLaunch: function(id) {
            var data = JSON.parse(document.getElementById(id).getAttribute("appdata"));
            console.log('Launching App')
            console.log(data)
            if (data.type == "js") {
                console.log("Old App Version Detected");
                data.content = "<script>\n" + data.content + "\n</script>";
                data.type = "Script";
                console.log("Converted to new version, launching...");
            }
            var type = data.type ?? "App";
            var title = data.title ?? "App";
            var desc = data.desc ?? "";
            var author = data.author ?? "User";
            var icon = data.src ?? "/assets/media/apps/default.png";
            var id = data.id;
            var batch = data.batch;
            var content = data.content;
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
        }
    }
}
store.reload();
window.addEventListener('online', () => store.reload());
window.addEventListener('offline', () => store.reload());
document.body.classList.add("dark");