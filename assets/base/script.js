//document.referrer
var doctitle = document.title;
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
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