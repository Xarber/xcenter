//document.referrer
var doctitle = document.title;
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
var setupstep = 0;
var nextsetupstep = 1;
var lastsetupstep = 5;
var theme, changelog, notifications, runbatchscripts, coldbootversion; //FINAL SETTINGS VARS;
var autotheme, darktheme, tmpchangelog, majorchangelog, tmpnotifications, silentnotifications, currenttheme; //TMP SETTINGS VARS;
var userData;
if (document.getElementById("html") == null) document.documentElement.setAttribute("id", "html");
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
                if (document.getElementById("setup-selected-" + afteri).innerHTML != "") {
                    document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML.replaceAll(document.getElementById('setup-selected-' + afteri).innerHTML, '')
                    document.getElementById('setup-selected-' + afteri).innerHTML = "";
                }
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
                if (selection != null) document.getElementById("setup-selected-" + setupstep).innerHTML = selection;
                ++setupstep;
                ++nextsetupstep;
            } else if (setupstep == lastsetupstep) {
                document.getElementById("setup-" + setupstep).classList.add('hided');
                document.getElementById("setup-finish").classList.remove('hided');
                if (selection != null) document.getElementById("setup-selected-" + setupstep).innerHTML = selection;
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
                var oldsetupstepcontent = document.getElementById("setup-selected-" + afteri).innerHTML;
                document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML.replaceAll(oldsetupstepcontent, '') + document.getElementById("setup-step-" + afteri).innerHTML;
                document.getElementById("setup-selected-" + afteri).innerHTML = document.getElementById("setup-step-" + afteri).innerHTML;
            }
        },
        review: function() {
            document.getElementById('setup-finish').classList.add('hided')
            document.getElementById('setup-review').classList.remove('hided');
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                var oldsetupstepcontent = document.getElementById("setup-selected-" + afteri).innerHTML;
                if (oldsetupstepcontent == "") oldsetupstepcontent = document.getElementById("setup-step-" + afteri).innerHTML;
                document.getElementById("setup-review-" + afteri).innerHTML = document.getElementById("setup-review-" + afteri).innerHTML.replaceAll(oldsetupstepcontent, '') + document.getElementById("setup-selected-" + afteri).innerHTML;
            }
        },
        finish: function() {
            for (let i = 0;i < lastsetupstep;++i) {
                var afteri = +i + 1;
                var name = document.getElementById('setup-step-name-' + afteri).innerHTML;
                var value = document.getElementById('setup-selected-' + afteri).innerHTML;
                localStorage.setItem(name, value);
            }
            if (document.getElementById('xcenter-setup-export').checked) {
                CommonJS.localStorageBackup.make('settings');
            }
            localStorage.setItem('xcenter-setup', 'finished');
            window.location = "/";
        },
        convert: function() {
            var tmptheme = localStorage.getItem('settings-theme');
            var tmpchangelog = localStorage.getItem('settings-changelog');
            var tmpnotify = localStorage.getItem('settings-shownotifications');
            var tmpcoldboot = localStorage.getItem('settings-cbversion');
            var tmpbatch = localStorage.getItem('settings-scripts');
            localStorage.removeItem('settings-theme');
            localStorage.removeItem('settings-changelog');
            localStorage.removeItem('settings-shownotifications');
            localStorage.removeItem('settings-cbversion');
            localStorage.removeItem('settings-scripts');
            if (tmptheme == "Auto") {
                localStorage.setItem('settings-autotheme', 'true');
                localStorage.setItem('settings-darktheme', 'true');
            } else if (tmptheme == "Dark") {
                localStorage.setItem('settings-autotheme', 'false');
                localStorage.setItem('settings-darktheme', 'true');
            } else if (tmptheme == "Light") {
                localStorage.setItem('settings-autotheme', 'false');
                localStorage.setItem('settings-darktheme', 'false');
            }
            if (tmpchangelog == "Yes") {
                localStorage.setItem('settings-showchangelog', 'true');
                localStorage.setItem('settings-majorupdchangelog', 'false');
            } else if (tmpchangelog == "Only Major Updates") {
                localStorage.setItem('settings-showchangelog', 'true');
                localStorage.setItem('settings-majorupdchangelog', 'true');
            } else if (tmpchangelog == "Never") {
                localStorage.setItem('settings-showchangelog', 'false');
                localStorage.setItem('settings-majorupdchangelog', 'false');
            }
            if (tmpnotify == "Yes") {
                localStorage.setItem('settings-notifications', 'true');
                localStorage.setItem('settings-silentnotifications', 'false');
            } else if (tmpnotify == "Without Sounds") {
                localStorage.setItem('settings-notifications', 'true');
                localStorage.setItem('settings-silentnotifications', 'true');
            } else if (tmpnotify == "No") {
                localStorage.setItem('settings-notifications', 'false');
                localStorage.setItem('settings-silentnotifications', 'false');
            }
            if (tmpbatch == "No") {
                localStorage.setItem('settings-batchscripts', 'false');
            } else if (tmpbatch == "Yes") {
                localStorage.setItem('settings-batchscripts', 'true');
            }
            if (tmpcoldboot == "No") {
                localStorage.setItem('settings-coldbootversion', '5.0');
            } else if (tmpcoldboot == "Choose Later") {
                var coldbootversioncontainbkg = document.createElement('div');
                var coldbootversioncontain = document.createElement('div');
                var coldbootversioncontaintitle = document.createElement('h1');
                var coldbootversioncontaindesc = document.createElement('p');
                var coldbootversioncontaincurrent = document.createElement('p');
                var coldbootversioncontainoptions = document.createElement('div');
                var coldbootversioncontainfive = document.createElement('button');
                var coldbootversioncontainfour = document.createElement('button');
                var coldbootversioncontainthree = document.createElement('button');
                var coldbootversioncontaintwo = document.createElement('button');
                var coldbootversioncontainone = document.createElement('button');
                coldbootversioncontainbkg.setAttribute('id', 'xcenter-settings-coldbootversion');
                coldbootversioncontainbkg.setAttribute('class', 'xcenter-settings-coldbootversion');
                coldbootversioncontain.setAttribute('class', 'center');
                coldbootversioncontaincurrent.setAttribute('id', 'settings-coldbootversion');
                coldbootversioncontainfive.setAttribute('class', 'rainbow');
                coldbootversioncontainfive.setAttribute('id', 'xcenter-settings-coldbootversion-default');
                coldbootversioncontainfive.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontainfour.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontainthree.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontaintwo.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontainone.setAttribute('localStorageName', 'settings-coldbootversion');
                coldbootversioncontainfive.setAttribute('ColdBootVersionID', '5.0');
                coldbootversioncontainfour.setAttribute('ColdBootVersionID', '4.0');
                coldbootversioncontainthree.setAttribute('ColdBootVersionID', '3.0');
                coldbootversioncontaintwo.setAttribute('ColdBootVersionID', '2.0');
                coldbootversioncontainone.setAttribute('ColdBootVersionID', '1.0');
                coldbootversioncontainfive.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontainfour.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontainthree.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontaintwo.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontainone.setAttribute('onclick', "this.parentNode.parentNode.parentNode.remove();localStorage.setItem(this.getAttribute('localStorageName'), this.getAttribute('ColdBootVersionID'));xcenter.settings.get();");
                coldbootversioncontaintitle.innerHTML = "ColdBoot Version <br>";
                coldbootversioncontaindesc.innerHTML = "Select a version to be automatically booted while launching X-Center. To remove the coldboot version, just press the logo at top left corner.";
                coldbootversioncontaincurrent.innerHTML = "Current: None";
                coldbootversioncontainfive.innerHTML = "None";
                coldbootversioncontainfour.innerHTML = "4.0";
                coldbootversioncontainthree.innerHTML = "3.0";
                coldbootversioncontaintwo.innerHTML = "2.0";
                coldbootversioncontainone.innerHTML = "1.0";
                coldbootversioncontainoptions.appendChild(coldbootversioncontainfive);
                coldbootversioncontainoptions.appendChild(coldbootversioncontainfour);
                coldbootversioncontainoptions.appendChild(coldbootversioncontainthree);
                coldbootversioncontainoptions.appendChild(coldbootversioncontaintwo);
                coldbootversioncontainoptions.appendChild(coldbootversioncontainone);
                coldbootversioncontain.appendChild(coldbootversioncontaintitle);
                coldbootversioncontain.appendChild(coldbootversioncontaindesc);
                coldbootversioncontain.appendChild(coldbootversioncontaincurrent);
                coldbootversioncontain.appendChild(coldbootversioncontainoptions);
                coldbootversioncontainbkg.appendChild(coldbootversioncontain);
                document.body.appendChild(coldbootversioncontainbkg);
            } else {
                xcenter.settings.get();
            }
            console.log('Converted Setup Options to Final Settings')
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
            if (localStorage.getItem('settings-theme') != null || localStorage.getItem('settings-changelog') != null || localStorage.getItem('settings-shownotifications') != null || localStorage.getItem('settings-cbversion') != null || localStorage.getItem('settings-scripts') != null) {
                xcenter.setup.convert();
                return;
            }
            if (localStorage.getItem('settings-coldbootversion') == null) localStorage.setItem('settings-coldbootversion', '5.0');
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
            if (tmpnotifications == false) {notifications = false;silentnotifications = true;}
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
            
            //APPLY
            if (theme == "light") {
                document.body.setAttribute('class', 'light');
                document.getElementById('html').setAttribute('class', 'light')
            };
            if (theme == "dark") {
                document.body.setAttribute('class', 'dark');
                document.getElementById('html').setAttribute('class', 'dark')
            }
            if (theme == "auto") {
                if (currenttheme == "dark") {
                    document.body.setAttribute('class', 'dark');
                    document.getElementById('html').setAttribute('class', 'dark')
                } else if (currenttheme == "light") {
                    document.body.setAttribute('class', 'light');
                    document.getElementById('html').setAttribute('class', 'light')
                }
            }
        }
    },
    userprofile: {
        prepare: function() {
            if (document.getElementById("xcenter-userprofile") == null) {
                var container = document.createElement('div');
                container.setAttribute('class', 'xcenter-userprofile hided');
                container.setAttribute('id', 'xcenter-userprofile')
                container.innerHTML = '<div class="center"><button id="xcenter-userprofile-close" onclick="this.parentNode.parentNode.classList.add(\'hided\')"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg></button><div id="xcenter-userprofile-show"><img id="xcenter-userprofile-avatar" onerror="this.src = \'/assets/media/apps/userAvatarDefault.png\'" src="/assets/media/apps/userAvatarDefault.png" alt=""><h1 id="xcenter-userprofile-username">User</h1><p id="xcenter-userprofile-gender">Unspecified</p><p id="xcenter-userprofile-birthday">1/1/1970</p><button onclick="xcenter.userprofile.edit()">Edit</button></div><div id="xcenter-userprofile-edit" class="hided"><label for="xcenter-userprofile-edit-avatar"><div><img src="/assets/media/apps/upload-translucent.png" alt=""><img onerror="this.src = \'/assets/media/apps/userAvatarDefault.png\'" id="xcenter-userprofile-edit-avatar-visible" src="/assets/media/apps/userAvatarDefault.png" alt=""></div></label><input type="file" onchange="const imgPath = document.getElementById(\'xcenter-userprofile-edit-avatar\').files[0];const reader = new FileReader();reader.addEventListener(\'load\', function () {document.getElementById(\'xcenter-userprofile-edit-avatar-visible\').src = reader.result;}, false);if (imgPath) {reader.readAsDataURL(imgPath);}" accept=".png, .jpg" name="xcenter-userprofile-edit-avatar" class="hided" id="xcenter-userprofile-edit-avatar" alt=""><input type="text" value="User" id="xcenter-userprofile-edit-username"></input><div id="xcenter-userprofile-edit-gender"><input type="radio" name="xcenter-userprofile-edit-gender" id="xcenter-userprofile-edit-gender-male" value="Male"> Male<input type="radio" name="xcenter-userprofile-edit-gender" id="xcenter-userprofile-edit-gender-female" value="Female"> Female<input type="radio" name="xcenter-userprofile-edit-gender" checked id="xcenter-userprofile-edit-gender-unspecified" value="Unspecified"> Do Not Specify</div><input type="date" value="" id="xcenter-userprofile-edit-birthday"><button onclick="xcenter.userprofile.save();document.getElementById(\'xcenter-userprofile-close\').classList.remove(\'hided\')">Save</button></div></div>';
                document.body.appendChild(container)
            }
            if (document.getElementById("navbar-user") != null) {
                document.getElementById("navbar-user").onclick = function() {
                    document.getElementById('xcenter-userprofile').classList.remove("hided");
                }
            }
            if (localStorage.getItem('XCenterUserData') == null) {
                userData = {
                    username: "User",
                    birthday: "1/1/1970",
                    valueuserbirthday: "1970/1/1",
                    gender: "Unspecified"
                }
                document.getElementById('xcenter-userprofile-show').classList.add('hided');
                document.getElementById('xcenter-userprofile-close').classList.add('hided');
                document.getElementById('xcenter-userprofile-edit').classList.remove('hided');
                document.getElementById('xcenter-userprofile').classList.remove('hided')
            } else {
                userData = JSON.parse(localStorage["XCenterUserData"]);
            }
            document.getElementById('xcenter-userprofile-username').innerHTML = userData.username;
            document.getElementById('xcenter-userprofile-gender').innerHTML = userData.gender;
            document.getElementById('xcenter-userprofile-birthday').innerHTML = userData.birthday;
            document.getElementById('xcenter-userprofile-avatar').src = localStorage.getItem('XCenterUserAvatar');
        },
        edit: function() {
            xcenter.userprofile.prepare();
            document.getElementById('xcenter-userprofile-edit-username').value = userData.username;
            document.getElementById('xcenter-userprofile-edit-birthday').value = userData.valueuserbirthday;
            document.getElementById('xcenter-userprofile-edit-gender-' + userData.gender.toLowerCase()).checked = true;
            document.getElementById('xcenter-userprofile-edit-avatar-visible').src = localStorage.getItem('XCenterUserAvatar')
            if (document.querySelector('input[name="xcenter-userprofile-edit-gender"]:checked') != null) {
                usergender = document.querySelector('input[name="xcenter-userprofile-edit-gender"]:checked').value
            }
            document.getElementById('xcenter-userprofile-show').classList.add('hided');
            document.getElementById('xcenter-userprofile-edit').classList.remove('hided');
        },
        save: function() {
            var username = document.getElementById('xcenter-userprofile-edit-username').value;
            var userbirthday = document.getElementById('xcenter-userprofile-edit-birthday').value;
            var useravatar = document.getElementById('xcenter-userprofile-edit-avatar').value;
            var usergender = "Unspecified";
            if (document.querySelector('input[name="xcenter-userprofile-edit-gender"]:checked') != null) {
                usergender = document.querySelector('input[name="xcenter-userprofile-edit-gender"]:checked').value
            }
            if (username.length < 1 || userbirthday.length < 1) {CommonJS.toast({title: "Fill all the fields.", type: "error"});return false;}
            var converteduserbirthday = userbirthday.split('-')[1] + '/' + userbirthday.split('-')[2] + '/' + userbirthday.split('-')[0];
            document.getElementById('xcenter-userprofile-username').innerHTML = username;
            document.getElementById('xcenter-userprofile-gender').innerHTML = usergender;
            document.getElementById('xcenter-userprofile-birthday').innerHTML = converteduserbirthday;
            userData = {
                username: username,
                birthday: userbirthday,
                valueuserbirthday: userbirthday,
                gender: usergender
            }
            localStorage["XCenterUserData"] = JSON.stringify(userData);
            const imgPath = document.getElementById('xcenter-userprofile-edit-avatar').files[0];
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                // convert image file to base64 string and save to localStorage
                localStorage.setItem("XCenterUserAvatar", reader.result);
                document.getElementById('xcenter-userprofile-avatar').src = reader.result;
            }, false);
            if (imgPath) {
                reader.readAsDataURL(imgPath);
            }
            document.getElementById('xcenter-userprofile-edit').classList.add('hided');
            document.getElementById('xcenter-userprofile-show').classList.remove('hided');
            prepareNav();
        }
    },
}
if (localStorage.getItem('xcenter-setup') != "finished") {
    if (window.location.pathname == "/setup/") {
        xcenter.setup.show();
    } else {
        window.location = "/setup/";
    }
} else if (window.location.pathname == "/setup/") window.location = "/";
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
    if (localStorage.getItem('XCenterUserAvatar') != null) {
        document.getElementById('navbar-user').innerHTML = '<img src="' + localStorage.getItem('XCenterUserAvatar') + '">';
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
if (document.getElementById("navbar-notifications") != null) {
    document.getElementById("navbar-notifications").onclick = function() {
        document.getElementById('new-notification-hided').classList.add('hided');
        document.getElementById('new-notification').classList.add('hided');
        document.getElementById('new-notifications-bkg').classList.remove('hided');
    }
}
xcenter.userprofile.prepare();