//----------------------------------------------------------------------
var SetupStep = localStorage.getItem('ToolsSetupStep');
var PageData = localStorage.getItem('XCenterPageData');
if (PageData != "Confirmed") {
    window.history.go(-1);
} else if (SetupStep == "null") {
    window.history.go(-1);
} else if (SetupStep == null) {
    window.history.go(-1);
} else if (SetupStep == undefined) {
    window.history.go(-1);
} else if (SetupStep == "Finish") {
    window.history.go(-1);
};
var Option1 = document.getElementById("Option1Label");
var Option2 = document.getElementById("Option2Label");
var Option3 = document.getElementById("Option3Label");
var Option4 = document.getElementById("Option4Label");
var Option1DIV = document.getElementById("Option1DIV");
var Option2DIV = document.getElementById("Option2DIV");
var Option3DIV = document.getElementById("Option3DIV");
var Option4DIV = document.getElementById("Option4DIV");
var DetailsOption1 = document.getElementById("Option1Details");
var DetailsOption2 = document.getElementById("Option2Details");
var DetailsOption3 = document.getElementById("Option3Details");
var DetailsOption4 = document.getElementById("Option4Details");
var Setting = document.getElementById("Setting");
var next = document.getElementById("next");
var back = document.getElementById("back");
var close = document.getElementById("close");
var SubSetting = document.getElementById("SubSetting");
document.getElementById('Option1DIV').classList.toggle('hided');
document.getElementById('Option2DIV').classList.toggle('hided');
document.getElementById('Option3DIV').classList.toggle('hided');
document.getElementById('Option4DIV').classList.toggle('hided');
document.getElementById('next').classList.toggle('hided');
var GeneratedCode = localStorage.getItem('ToolsCode');
if (GeneratedCode == "null") { 
    GeneratedCode = "";
} else if (GeneratedCode == null) { 
    GeneratedCode = "";
} else if (GeneratedCode == undefined) { 
    GeneratedCode = "";
};
var OldCode = "";
var Clicked = "False";
var LastClick = "0";
//----------------------------------------------------------------------
if (SetupStep == "0") {
    Setting.innerHTML = "Please select a theme.";
    Option1.innerHTML = "Dark";
    DetailsOption1.innerHTML = "Sets the app's theme to Dark.";
    Option2.innerHTML = "Light";
    DetailsOption2.innerHTML = "Sets the app's theme to Light.";
    Option3.innerHTML = "Blue";
    DetailsOption3.innerHTML = "Sets the app's theme to Dark.";
    Option4.innerHTML = "Red";
    DetailsOption4.innerHTML = "Sets the app's theme to Red.";
};
if (SetupStep == "1") {
    Setting.innerHTML = "How do you want to download the files?";
    Option1.innerHTML = "Automatically";
    DetailsOption1.innerHTML = "Automatically downloads and moves files to the app folder.";
    Option2.innerHTML = "Manually";
    DetailsOption2.innerHTML = "Requests you to download and move the file.";
    document.getElementById('Option3DIV').classList.toggle('hided');
    document.getElementById('Option4DIV').classList.toggle('hided');
    document.getElementById('back').classList.toggle('hided');
};
if (SetupStep == "2") {
    Setting.innerHTML = "Do you want to add some limits?";
    Option1.innerHTML = "No";
    DetailsOption1.innerHTML = "You can do everything in the app.";
    Option2.innerHTML = "Minimal";
    DetailsOption2.innerHTML = "Blocks the most dangerous actions.";
    Option3.innerHTML = "Medium";
    DetailsOption3.innerHTML = "Does not allow you to execute some actions.";
    Option4.innerHTML = "Maximum (Require Password)";
    DetailsOption4.innerHTML = "Requires a password to perform every action.";
    document.getElementById('back').classList.toggle('hided');
};
if (SetupStep == "3") {
    Setting.innerHTML = "Do you want to lock the application?";
    Option1.innerHTML = "Yes (Require Password)";
    DetailsOption1.innerHTML = "Requires a password to open the app.";
    Option2.innerHTML = "No";
    DetailsOption2.innerHTML = "Sets the app's theme to Light.";
    document.getElementById('Option3DIV').classList.toggle('hided');
    document.getElementById('Option4DIV').classList.toggle('hided');
    document.getElementById('back').classList.toggle('hided');
};
if (SetupStep == "4") {
    Setting.innerHTML = "Do you want to set a user password?";
    Option1.innerHTML = "Yes";
    DetailsOption1.innerHTML = "Sets a password to use some options.";
    Option2.innerHTML = "No";
    DetailsOption2.innerHTML = "Does not allow you to use some settings.";
    document.getElementById('Option3DIV').classList.toggle('hided');
    document.getElementById('Option4DIV').classList.toggle('hided');
    document.getElementById('back').classList.toggle('hided');
    next.innerHTML = "Done"
};
if (SetupStep == "5") {
    Setting.innerHTML = "Setup Completed!";
    SubSetting.innerHTML = "Copy the code to Smart Tools.";
    SubSetting.classList.toggle('hided');
    document.getElementById('Option1DIV').classList.toggle('hided');
    document.getElementById('Option2DIV').classList.toggle('hided');
    document.getElementById('Option3DIV').classList.toggle('hided');
    document.getElementById('Option4DIV').classList.toggle('hided');
    next.classList.toggle('hided');
    back.classList.toggle('hided');
    close.classList.toggle('hided');
    document.getElementById("Code").value = GeneratedCode;
    document.getElementById("CodeCopy").classList.toggle('hided');
    document.getElementById("Code").classList.toggle('hided');
    document.getElementById("CodeCheckMark").classList.toggle('hided');
};
function copyCode() {
    var copyText = document.getElementById("Code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Succeffully copied the code!");
};
//----------------------------------------------------------------------
function clicked1() {
    Clicked = "True";
    LastClick = "1";
};
function clicked2() {
    Clicked = "True";
    LastClick = "2";
};
function clicked3() {
    Clicked = "True";
    LastClick = "3";
};
function clicked4() {
    Clicked = "True";
    LastClick = "4";
};
//----------------------------------------------------------------------
function forward() {
    if (Clicked == "True") {
        if (LastClick == "1") {
            OldCode = GeneratedCode;
            GeneratedCode = OldCode + "1975";
            localStorage.setItem('ToolsCode', GeneratedCode);
            localStorage.setItem('XCenterPageData','Confirmed');
            localStorage.setItem('ToolsSetupStep', ++SetupStep);
            location.reload();
        } else if (LastClick == "2") {
            OldCode = GeneratedCode;
            GeneratedCode = OldCode + "2806";
            localStorage.setItem('ToolsCode', GeneratedCode);
            localStorage.setItem('XCenterPageData','Confirmed');
            localStorage.setItem('ToolsSetupStep', ++SetupStep);
            location.reload();
        } else if (LastClick == "3") {
            OldCode = GeneratedCode;
            GeneratedCode = OldCode + "3595";
            localStorage.setItem('ToolsCode', GeneratedCode);
            localStorage.setItem('XCenterPageData','Confirmed');
            localStorage.setItem('ToolsSetupStep', ++SetupStep);
            location.reload();
        } else if (LastClick == "4") {
            OldCode = GeneratedCode;
            GeneratedCode = OldCode + "4878";
            localStorage.setItem('ToolsCode', GeneratedCode);
            localStorage.setItem('XCenterPageData','Confirmed');
            localStorage.setItem('ToolsSetupStep', ++SetupStep);
            location.reload();
        }

    } else {
        alert('Please select an option.');
    };

}
function backward() {
    localStorage.setItem('XCenterPageData','Confirmed');
    localStorage.setItem('ToolsSetupStep', "0");
    localStorage.removeItem('ToolsCode');
    location.reload();
};
function Home() {
    location.href = '/';
    return false;
};