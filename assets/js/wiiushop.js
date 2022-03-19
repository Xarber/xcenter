var Banner = document.getElementById("appBanner");
var Icon = document.getElementById("appIcon");
var Name = document.getElementById("appName");
var Price = document.getElementById("appPrice");
var DescName = document.getElementById("appDescName");
var Launch = document.getElementById("appDescLaunch");
var Publish = document.getElementById("appDescPublish");
var Type = document.getElementById("appDescType");
var Platform = document.getElementById("appType");
var Lang = document.getElementById("appDescLang");
var Desc = document.getElementById("appDesc");
var Download = document.getElementById("appDownload");
var WishList = document.getElementById("appWishlist");
var DLCs = document.getElementById("appAdditive");
var Actions = document.getElementById("appActions");
var AppID = getParams("id", "0");
if (localStorage.getItem('app' + AppID) == null) {} else {
    Download.innerHTML = "Installed";
    Download.classList.toggle('shop-app-downloadbtn-primary');
    Download.classList.toggle('shop-app-downloadbtn-disabled');
}
if (AppID == "621978600") {
    Banner.src = "/assets/media/homebrew169.jpg"
    Icon.src = "/assets/media/hb.png"
    Name.innerHTML = "Homebrew"
    Platform.innerHTML = "Wii U (Software)"
    Price.innerHTML = ""
    DescName.innerHTML = "Homebrew"
    Launch.innerHTML = "Unknown"
    Publish.innerHTML = "dimok789";
    Type.innerHTML = "Forwarder"
    Lang.innerHTML = "None"
    Desc.innerHTML = "The Homebrew Launcher is an application that allows homebrew (in ELF format) to be loaded from an SD Card and executed on the Wii U."
    DLCs.classList.toggle("hided");
} else if (AppID == "902029709") {
    Banner.src = "/assets/media/newcover.png"
    Icon.src = "/assets/media/logo.png"
    Name.innerHTML = "X-Center"
    Platform.innerHTML = "Wii U (Software)"
    Price.innerHTML = ""
    DescName.innerHTML = "X-Center"
    Launch.innerHTML = "Unknown"
    Publish.innerHTML = "Xarber";
    Type.innerHTML = "Forwarder"
    Lang.innerHTML = "Italian / English / French"
    Desc.innerHTML = "X-Center is a web site developed from Xarber in 2020-2022. The latest version is 3.0. This app is a forwarder to the site."
    DLCs.classList.toggle("hided");
} else if (AppID == "971967625") {
    Banner.src = "/assets/media/toolsbanner.png"
    Icon.src = "https://xcenterdb.netlify.app/smart-tools/sources/icon.png"
    Name.innerHTML = "Smart Tools"
    Platform.innerHTML = "Windows (Software)"
    Price.innerHTML = ""
    DescName.innerHTML = "Tools"
    Launch.innerHTML = "Unknown"
    Publish.innerHTML = "Xarber";
    Type.innerHTML = "Software"
    Lang.innerHTML = "English"
    Desc.innerHTML = ""
    DLCs.classList.toggle("hided");
} else if (AppID == "746476963") {
    Banner.src = "/assets/media/customwebload.png"
    Icon.src = "/assets/media/cwl11.png"
    Name.innerHTML = "Custom Web Load"
    Platform.innerHTML = "Wii U (software)"
    Price.innerHTML = ""
    DescName.innerHTML = "Custom Web Load"
    Launch.innerHTML = "Unknown"
    Publish.innerHTML = "Xarber";
    Type.innerHTML = "Software -> Forwarder"
    Lang.innerHTML = "English"
    Desc.innerHTML = "Custom Web Loader is a web forwarder: <br> You insert the link, select if always open that page and boom, it opens the webpage. <br> Basically it's a semi-browser."
    DLCs.classList.toggle("hided");
} else {
    Banner.src = "/assets/media/appBannerError.png"
    Icon.src = "/assets/media/appError.png"
    Name.innerHTML = "???"
    Platform.innerHTML = "???"
    Actions.classList.toggle("hided");
    Price.innerHTML = "???"
    DescName.innerHTML = "???"
    Launch.innerHTML = "???"
    Publish.innerHTML = "???";
    Type.innerHTML = "???"
    Lang.innerHTML = "???"
    Desc.innerHTML = "???"
}
function dlcs() {
    alert("DLCs aren't avaiable yet.")
}
function wishlist(WishAppID) {
    if (getParams('id', '0') != "0") {
        var WishID = getParams('id', '0')
        WishAppID = "appWishlist";
    } else {
        WishAppID = WishAppID.id
        var WishID = WishAppID.split('appWishlist')[1];
    }
    localStorage.setItem('wishapp' + WishID, true);
    alert("Added to wishlist! (BETA)");
    WishAppID.innerHTML = "Added to wishlist!"
}
function download() {
    var appIcon = "/assets/media/app.png";
    var appLink = "invalid/"
    if (AppID == "621978600") {
        appIcon = "/assets/media/hb.png"
        appLink = "exploit/"
    } else if (AppID == "902029709") {
        appIcon = "/assets/media/logo.png"
        appLink = "/"
    } else if (AppID == "971967625") {
        appIcon = "https://xcenterdb.netlify.app/smart-tools/sources/icon.png"
        appLink = "/tools"
    } else if (AppID == "746476963") {
        appIcon = "/assets/media/cwl11.png"
        appLink = "cwl/"
    }
    location.href = "/wiiu/shop/app/download/?id=" + AppID + "&icon=" + appIcon + "&link=" + appLink;
}