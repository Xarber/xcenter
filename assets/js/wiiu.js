document.body.style.cursor="url('/assets/cursors/wiiu.cur'), default";

if (location.href.indexOf('/wiiu/shop') > -1) {
    if (location.href.indexOf('/wiiu/shop/app/download') <= 0) {
        var userFunds1 = "0"
        var userFunds2 = "00"
        if (localStorage.getItem('wiiucredit') == null) localStorage.setItem('wiiucredit', '0');
        if (localStorage.getItem('wiiucreditcents') == null) localStorage.setItem('wiiucreditcents', '00');
        userFunds1 = localStorage.getItem('wiiucredit');
        userFunds2 = localStorage.getItem('wiiucreditcents');
        var Funds = document.getElementById('funds');
        var menuFunds = document.getElementById("menuFunds");
        Funds.innerHTML = userFunds1 + "," + userFunds2 + "$";
        menuFunds.innerHTML = "Credit: " + userFunds1 + "," + userFunds2 + "$";
    } else {
        var userFunds1 = "0"
        var userFunds2 = "00"
        var LocalUserFunds1 = localStorage.getItem('wiiucredit');
        var LocalUserFunds2 = localStorage.getItem('wiiucreditcents');
        if (LocalUserFunds1 != null) userFunds1 = LocalUserFunds1;
        if (LocalUserFunds2 != null) userFunds2 = LocalUserFunds2;
        document.getElementById('funds').innerHTML = userFunds1 + "," + userFunds2 + "$";
    }
}

var app1 = document.getElementById("ext-app-1");
var app2 = document.getElementById("ext-app-2");
var app3 = document.getElementById("ext-app-3");
var app4 = document.getElementById("ext-app-4");
var app5 = document.getElementById("ext-app-5");
var app6 = document.getElementById("ext-app-6");

var app1lnk = "#";
var app2lnk = "#";
var app3lnk = "#";
var app4lnk = "#";
var app5lnk = "#";
var app6lnk = "#";

var app1logo = "/assets/media/blank.png";
var app2logo = "/assets/media/blank.png";
var app3logo = "/assets/media/blank.png";
var app4logo = "/assets/media/blank.png";
var app5logo = "/assets/media/blank.png";
var app6logo = "/assets/media/blank.png";

if (localStorage.getItem('app1') != null) app1lnk = localStorage.getItem('app1');
if (localStorage.getItem('app2') != null) app2lnk = localStorage.getItem('app2');
if (localStorage.getItem('app3') != null) app3lnk = localStorage.getItem('app3');
if (localStorage.getItem('app4') != null) app4lnk = localStorage.getItem('app4');
if (localStorage.getItem('app5') != null) app5lnk = localStorage.getItem('app5');
if (localStorage.getItem('app6') != null) app6lnk = localStorage.getItem('app6');

if (localStorage.getItem('app1logo') != null) app1logo = localStorage.getItem('app1logo');
if (localStorage.getItem('app2logo') != null) app2logo = localStorage.getItem('app2logo');
if (localStorage.getItem('app3logo') != null) app3logo = localStorage.getItem('app3logo');
if (localStorage.getItem('app4logo') != null) app4logo = localStorage.getItem('app4logo');
if (localStorage.getItem('app5logo') != null) app5logo = localStorage.getItem('app5logo');
if (localStorage.getItem('app6logo') != null) app6logo = localStorage.getItem('app6logo');

app1.src = app1logo;
app2.src = app2logo;
app3.src = app3logo;
app4.src = app4logo;
app5.src = app5logo;
app6.src = app6logo;

function install() {
    var installIcon = getParams('icon', '/assets/media/app.png');
    var installLink = getParams('link', 'invalid/');
    var installID = getParams('id', '0');
    if (installLink == "invalid/") {
        if (installIcon == "/assets/media/app.png") installIcon = "/assets/media/appError.png"
    };
    var installStatus = "Installing...";
    if (app1lnk == "#") {var app1status = "free"};
    if (app2lnk == "#") {var app2status = "free"};
    if (app3lnk == "#") {var app3status = "free"};
    if (app4lnk == "#") {var app4status = "free"};
    if (app5lnk == "#") {var app5status = "free"};
    if (app6lnk == "#") {var app6status = "free"};
    if (localStorage.getItem('app' + installID) != null) {
        installStatus = "Success";
    } else if (app1status == "free") {
        localStorage.setItem('app1', installLink);
        localStorage.setItem('app1logo', installIcon);
        localStorage.setItem('app' + installID,'1')
        localStorage.setItem('app1id', installID)
        installStatus = "Success";
    } else if (app2status == "free") {
        localStorage.setItem('app2', installLink);
        localStorage.setItem('app2logo', installIcon);
        localStorage.setItem('app' + installID,'2')
        localStorage.setItem('app2id', installID)
        installStatus = "Success";
    } else if (app3status == "free") {
        localStorage.setItem('app3', installLink);
        localStorage.setItem('app3logo', installIcon);
        localStorage.setItem('app' + installID,'3')
        localStorage.setItem('app3id', installID)
        installStatus = "Success";
    } else if (app4status == "free") {
        localStorage.setItem('app4', installLink);
        localStorage.setItem('app4logo', installIcon);
        localStorage.setItem('app' + installID,'4')
        localStorage.setItem('app4id', installID)
        installStatus = "Success";
    } else if (app5status == "free") {
        localStorage.setItem('app5', installLink);
        localStorage.setItem('app5logo', installIcon);
        localStorage.setItem('app' + installID,'5')
        localStorage.setItem('app5id', installID)
        installStatus = "Success";
    } else if (app6status == "free") {
        localStorage.setItem('app6', installLink);
        localStorage.setItem('app6logo', installIcon);
        localStorage.setItem('app' + installID,'6')
        localStorage.setItem('app6id', installID)
        installStatus = "Success";
    } else {
        installStatus = "NoSpaceFree";
    };
    return installStatus;
};
function uninstall(AppID) {
    if (AppID == "ALL") {
        var uninstallID = localStorage.getItem('app1id')
        localStorage.removeItem("app1");
        localStorage.removeItem("app1logo");
        localStorage.removeItem('app' + uninstallID);
        localStorage.removeItem('app1id');
        var uninstallID = localStorage.getItem('app2id')
        localStorage.removeItem("app2");
        localStorage.removeItem("app2logo");
        localStorage.removeItem('app' + uninstallID);
        localStorage.removeItem('app2id');
        var uninstallID = localStorage.getItem('app1id')
        localStorage.removeItem("app3");
        localStorage.removeItem("app3logo");
        localStorage.removeItem('app' + uninstallID);
        localStorage.removeItem('app3id');
        var uninstallID = localStorage.getItem('app1id')
        localStorage.removeItem("app4");
        localStorage.removeItem("app4logo");
        localStorage.removeItem('app' + uninstallID);
        localStorage.removeItem('app4id');
        var uninstallID = localStorage.getItem('app1id')
        localStorage.removeItem("app5");
        localStorage.removeItem("app5logo");
        localStorage.removeItem('app' + uninstallID);
        localStorage.removeItem('app5id');
        var uninstallID = localStorage.getItem('app1id')
        localStorage.removeItem("app6");
        localStorage.removeItem("app6logo");
        localStorage.removeItem('app' + uninstallID);
        localStorage.removeItem('app6id');
        //REMOVE DEFAULT STORE APP INFO
        localStorage.removeItem('app902029709');
        localStorage.removeItem('app621978600');
        localStorage.removeItem('app971967625');
    } else if (AppID != null) {
        var appSlot = localStorage.getItem('app' + AppID);
        if (appSlot != null) {
            localStorage.removeItem("app" + appSlot);
            localStorage.removeItem("app" + appSlot + "logo");
            localStorage.removeItem('app' + AppID);
            localStorage.removeItem('app' + appSlot + 'id');
        }
        var UninstallStatus = "Success";
    } else {
        var UninstallStatus = "Failed";
    }
    return UninstallStatus;
};
function getSpace() {
    var SpaceLeft = "6";
    if (app1lnk != "#") SpaceLeft = --SpaceLeft;
    if (app2lnk != "#") SpaceLeft = --SpaceLeft;
    if (app3lnk != "#") SpaceLeft = --SpaceLeft;
    if (app4lnk != "#") SpaceLeft = --SpaceLeft;
    if (app5lnk != "#") SpaceLeft = --SpaceLeft;
    if (app6lnk != "#") SpaceLeft = --SpaceLeft;
    return SpaceLeft;
};
function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("appSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("appList");
    li = ul.getElementsByClassName("shop-search-app");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h4")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        };
    };
};
function pay(amount, cents) {
    var userCredit = localStorage.getItem('wiiucredit');
    var userCreditCents = localStorage.getItem('wiiucreditcents');
    var Funds = document.getElementById("funds");
    var totAmount = amount + "." + cents;
    var totCredit = userCredit + "." + userCreditCents;
    if (totCredit > totAmount) {
    totCredit = +totCredit - +totAmount
        userCredit = totCredit.substring(0, Test.indexOf('.'));
        userCreditCents = totCredit.split('.')[1];
        localStorage.setItem('wiiucredit', userCredit);
        localStorage.setItem('wiiucreditcents', userCreditCents);
        Funds.innerHTML = userCredit + "," + userCreditCents + "$";
        return "success";
    } else {
        alert("You do not have enough funds.");
        return "failed";
    }
}
function resetCredit() {
    localStorage.removeItem('wiiucredit');
    localStorage.removeItem('wiiucreditcents');
    alert("Operation Completed.");
    location.reload()
}