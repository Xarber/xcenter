var reccstore1, reccstore2, reccstore3, reccstore4, reccstore5, reccstore6, reccstore7, reccstore8, reccstore9, reccstore10, reccstore11, reccstore12;
var lastcomeout1, lastcomeout2, lastcomeout3, lastcomeout4, lastcomeout5, lastcomeout6, lastcomeout7, lastcomeout8, lastcomeout9, lastcomeout10, lastcomeout11, lastcomeout12;
var bestapp1, bestapp2, bestapp3, bestapp4, bestapp5, bestapp6, bestapp7, bestapp8, bestapp9, bestapp10, bestapp11, bestapp12;
var updates1, updates2, updates3, updates4, updates5, updates6, updates7, updates8, updates9, updates10, updates11, updates12;
var tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8, tool9, tool10, tool11, tool12;
var store1, store2, store3, store4, store5, store6, store7, store8, store9, store10;
var storeInstallSlot;
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
            fetch('https://raw.githubusercontent.com/Xarber/temp/best/stores.xsl').then(response => response.text()).then(data => {
                var lines = (data.split("\n")).length - 1;;
                lines = +lines + 1;
                for (let i = lines;i > 0;--i) {
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
                    });
                }
            });
            return true;
        }
    },
    prepare: function() {
        store.prepareSteps.defineSlots();
        store.prepareSteps.fixLocalStorage();
        store.prepareSteps.loadStores();
        store.prepareSteps.getInstallSlot();
        store.prepareSteps.getReccStores();
    },
    prepareExternal: function() {
        store.prepareSteps.fixLocalStorage();
        store.prepareSteps.loadStores();
        store.prepareSteps.getInstallSlot();
    },
    reload: function() {
        if (location.pathname == "/store/") {
            store.prepare();
        } else {
            store.prepareExternal();
        }
    },
    section: function(id) {
        if (id.indexOf('store-comeouts-') != -1 || id.indexOf('store-app-') != -1 || id.indexOf('store-update-') != -1 || id.indexOf('store-tool-') != -1) {
            document.querySelector('.store-empty').classList.add('hided');
            document.querySelector('.store-guide').classList.add('hided');
            document.querySelector('.store').classList.add('hided');
            document.querySelector('.store-app-view').classList.remove('hided');
        } else if (id.indexOf('store-apps') != -1 || id.indexOf('store-tools') != -1) {

        }
    },
    add: function(id) {
        var title = document.getElementById(id).getAttribute('storetitle');
        var desc = document.getElementById(id).getAttribute('storedesc');
        var type = document.getElementById(id).getAttribute('storetype');
        var link = document.getElementById(id).getAttribute('storelink');
        var apps = document.getElementById(id).getAttribute('storeapps');
        var icon = document.getElementById(id).getAttribute('src');
        var installData = {
            title: title,
            desc: desc,
            type: type,
            icon: icon,
            link: link,
            apps: apps
        }
        localStorage['XCenterUserStore' + storeInstallSlot] = JSON.stringify(installData);
        CommonJS.toast({title: "Store Added", type: "success", duration: "3s"})
    },
    remove: function(position) {
        localStorage.removeItem("XCenterUserStore" + position);
        CommonJS.toast({title: "Store Removed", type: "error", duration: "3s"})
    },
    resetStores: function() {

    },
    randomCuriosity: function() {
        
    },
    apps: {
        get: function() {

        },
        install: function() {

        },
        launch: function() {

        }
    }
}
store.reload();