var boot;
cwl();
function cwlopen() {
    window.location = "https://" + localStorage.getItem('cwlink');
}
function quit() {
    window.location = "/wiiu/"
};
function stopAutoboot() {
    document.getElementById('autoboot').innerHTML = "";
    clearTimeout(boot);
}
function setup() {
    var Link = window.prompt("Insert the link to be opened.", "google.com");
    localStorage.setItem('cwlink', Link);
    if (confirm('This page will be automatically booted.')) {
        alert("Press ENTER (PC) / A (WII U) to stop auto boot.");
        localStorage.setItem('cwldefault', 'true');
    } else {localStorage.setItem('cwldefault', 'false')};
    localStorage.setItem('cwlsetup', 'true');
    if (confirm("Do you want to open now the site?")) {cwlopen()} else {quit()};
}
function cwl2() {
    if (confirm("Do you want to open the site?")) {cwlopen()} else if (confirm("Do you want to edit the link?")) {setup()} else {quit()}
}
function autoboot() {
    document.getElementById('autoboot').innerHTML = "AUTOBOOTING <br> PRESS ENTER (PC) / A (WII U) TO STOP";
    boot = setTimeout(() => {
        cwlopen();
    }, 2000);
    window.onkeydown = function(PressedKey) {
        if (PressedKey.keyCode == "13") {
            stopAutoboot()
            cwl2()
        }
    }
}
function cwl() {
    if (localStorage.getItem('cwlsetup') != "true") {
        setup()
    } else if (localStorage.getItem('cwldefault') == "true") {
        autoboot()
    } else {
        if (confirm("Do you want to open the site?")) {cwlopen()} else if (confirm("Do you want to edit the link?")) {setup()} else {quit()}
    }
}