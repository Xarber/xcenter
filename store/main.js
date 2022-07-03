var reccstore1, reccstore2, reccstore3, reccstore4, reccstore5, reccstore6, reccstore7, reccstore8, reccstore9, reccstore10, reccstore11, reccstore12;
var lastcomeout1, lastcomeout2, lastcomeout3, lastcomeout4, lastcomeout5, lastcomeout6, lastcomeout7, lastcomeout8, lastcomeout9, lastcomeout10, lastcomeout11, lastcomeout12;
var bestapp1, bestapp2, bestapp3, bestapp4, bestapp5, bestapp6, bestapp7, bestapp8, bestapp9, bestapp10, bestapp11, bestapp12;
var updates1, updates2, updates3, updates4, updates5, updates6, updates7, updates8, updates9, updates10, updates11, updates12;
var tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8, tool9, tool10, tool11, tool12;
var store1, store2, store3, store4, store5, store6, store7, store8, store9, store10;
var defaultStore = {
    added: false
}

var store = {
    prepareSteps: {
        defineSlots: function() {

        },
        fixLocalStorage: function() {

        },
        defineStores: function() {

        }
    },
    prepare: function() {

    },
    prepareExternal: function() {

    },
    reload: function() {

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
    add: function(link) {

        CommonJS.toast({title: "Store Added", type: "success", duration: "3s"})
    },
    remove: function(position) {
        localStorage.removeItem("XCenterUserStore" + position);
        CommonJS.toast({title: "Store Added", type: "error", duration: "3s"})
    },
    getFreePosition: function() {

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