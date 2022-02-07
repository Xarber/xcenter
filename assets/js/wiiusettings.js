var section = getParams('opt', '1');
delParams('opt')
if (location.href.indexOf('/wiiu/settings/set.html') < 0) {
    var Setting = document.getElementById('settings-text');
    var Button = document.getElementById('settings-button');
    var Info1 = document.getElementById('settings-mean-1');
    var Info2 = document.getElementById('settings-mean-2');
    var Info3 = document.getElementById('settings-mean-3');
    var Info4 = document.getElementById('settings-mean-4');
    var Info5 = document.getElementById('settings-mean-5');
    var Action1 = document.getElementById('settings-action-internet');
    var Action2 = document.getElementById('settings-action-data');
    var Action3 = document.getElementById('settings-action-amiibo');
    var Action4 = document.getElementById('settings-action-time');
    var Action5 = document.getElementById('settings-action-output');
    var Action6 = document.getElementById('settings-action-tvremote');
    var Action7 = document.getElementById('settings-action-gamepad');
    var Action8 = document.getElementById('settings-action-burnin');
    var Action9 = document.getElementById('settings-action-irbar');
    var Action10 = document.getElementById('settings-action-power');
    var Action11 = document.getElementById('settings-action-info');
    var Action12 = document.getElementById('settings-action-systransfer');
    var Action13 = document.getElementById('settings-action-update');
    var Action14 = document.getElementById('settings-action-reset');
    settingCheck()
} else if (location.href.indexOf('/wiiu/settings/set') > -1) {
    if (section == "1") window.location = 'internet';
    if (section == "2") window.location = 'data';
    if (section == "3") window.location = 'amiibo';
    if (section == "4") window.location = 'time';
    if (section == "5") window.location = 'output';
    if (section == "6") window.location = 'tvremote';
    if (section == "7") window.location = 'gamepad';
    if (section == "8") window.location = 'burnin';
    if (section == "9") window.location = 'wii';
    if (section == "10") window.location = 'power';
    if (section == "11") window.location = 'info';
    if (section == "12") window.location = 'transfer';
    if (section == "13") window.location = 'update';
    if (section == "14") window.location = 'reset';
}
function settingCheck(option) {
    if (option != null) section = option;
    Action1.classList.remove('settings-action-selected');
    Action2.classList.remove('settings-action-selected');
    Action3.classList.remove('settings-action-selected');
    Action4.classList.remove('settings-action-selected');
    Action5.classList.remove('settings-action-selected');
    Action6.classList.remove('settings-action-selected');
    Action7.classList.remove('settings-action-selected');
    Action8.classList.remove('settings-action-selected');
    Action9.classList.remove('settings-action-selected');
    Action10.classList.remove('settings-action-selected');
    Action11.classList.remove('settings-action-selected');
    Action12.classList.remove('settings-action-selected');
    Action13.classList.remove('settings-action-selected');
    Action14.classList.remove('settings-action-selected');
    Info1.classList.remove('hided');
    Info2.classList.remove('hided');
    Info3.classList.remove('hided');
    Info4.classList.remove('hided');
    Info5.classList.remove('hided');
    if (section == "1") {
        //internet
        Button.style.backgroundImage = "url('/assets/media/settings-internet.png'";
        Setting.innerHTML = 'Internet';
        Info1.innerHTML = '• Connect to Internet';
        Info2.innerHTML = '• Search for reccomended connnection type';
        Info3.innerHTML = '• Get MAC adress';
        Info4.innerHTML = '• Auto software download';
        Info5.classList.toggle('hided');
        Action1.classList.add('settings-action-selected');
        Action2.classList.remove('settings-action-selected');
        Action3.classList.remove('settings-action-selected');
        Action4.classList.remove('settings-action-selected');
        Action5.classList.remove('settings-action-selected');
        Action6.classList.remove('settings-action-selected');
        Action7.classList.remove('settings-action-selected');
        Action8.classList.remove('settings-action-selected');
        Action9.classList.remove('settings-action-selected');
        Action10.classList.remove('settings-action-selected');
        Action11.classList.remove('settings-action-selected');
        Action12.classList.remove('settings-action-selected');
        Action13.classList.remove('settings-action-selected');
        Action14.classList.remove('settings-action-selected');
    } else if (section == "2") {
        //data
        Button.style.backgroundImage = "url('/assets/media/settings-data.png'";
        Setting.innerHTML = 'Data Management';
        Info1.innerHTML = '• Copy, Move or Delete Data';
        Info2.innerHTML = '• Delete all data from USB device';
        Info3.classList.toggle('hided');
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action2.classList.toggle('settings-action-selected');
    } else if (section == "3") {
        //amiibo
        Button.style.backgroundImage = "url('/assets/media/settings-amiibo.png'";
        Setting.innerHTML = 'Amiibo Settings';
        Info1.innerHTML = '• Edit amiibo data';
        Info2.classList.toggle('hided');
        Info3.classList.toggle('hided');
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action3.classList.toggle('settings-action-selected');
    } else if (section == "4") {
        //time
        Button.style.backgroundImage = "url('/assets/media/settings-time.png'";
        Setting.innerHTML = 'Date and Time';
        Info1.innerHTML = '• Set Date and Time';
        Info2.classList.toggle('hided');
        Info3.classList.toggle('hided');
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action4.classList.toggle('settings-action-selected');
    } else if (section == "5") {
        //output
        Button.style.backgroundImage = "url('/assets/media/settings-output.png'";
        Setting.innerHTML = 'TV';
        Info1.innerHTML = '• TV Link';
        Info2.innerHTML = '• TV Resolution';
        Info3.innerHTML = '• Aspect Ratio';
        Info4.innerHTML = '• TV Audio';
        Info5.innerHTML = '• Screen dimension';
        Action5.classList.toggle('settings-action-selected');
    } else if (section == "6") {
        //tvremote
        Button.style.backgroundImage = "url('/assets/media/settings-tvremote.png'";
        Setting.innerHTML = 'TV Remote';
        Info1.innerHTML = '• Set TV Remote';
        Info2.classList.toggle('hided');
        Info3.classList.toggle('hided');
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action6.classList.toggle('settings-action-selected');
    } else if (section == "7") {
        //gamepad
        Button.style.backgroundImage = "url('/assets/media/settings-gamepad.png'";
        Setting.innerHTML = 'Wii U GamePad';
        Info1.innerHTML = '• Touch Screen Calibration';
        Info2.innerHTML = '• Set HOME Button Led';
        Info3.innerHTML = '• Microphone Test';
        Info4.innerHTML = '• GamePad Audio';
        Info5.classList.toggle('hided');
        Action7.classList.toggle('settings-action-selected');
    } else if (section == "8") {
        //burnin
        Button.style.backgroundImage = "url('/assets/media/settings-burnin.png'";
        Setting.innerHTML = 'Burn-In Reduction';
        Info1.innerHTML = '• Enable/Disable Burn-In Reduction';
        Info2.classList.toggle('hided');
        Info3.classList.toggle('hided');
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action8.classList.toggle('settings-action-selected');
    } else if (section == "9") {
        //irbar
        Button.style.backgroundImage = "url('/assets/media/settings-irbar.png'";
        Setting.innerHTML = 'Wii Remote and Sensor Bar';
        Info1.innerHTML = '• Set Sensor Bar position';
        Info2.innerHTML = '• Wii Remote pointer sensibility';
        Info3.innerHTML = '• Unpair All Wii Remotes';
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action9.classList.toggle('settings-action-selected');
    } else if (section == "10") {
        //power
        Button.style.backgroundImage = "url('/assets/media/settings-power.png'";
        Setting.innerHTML = 'Power Settings';
        Info1.innerHTML = '• Set auto shutdown';
        Info2.innerHTML = '• Set sleep mode functions';
        Info3.innerHTML = '• Fast Boot Settings';
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action10.classList.toggle('settings-action-selected');
    } else if (section == "11") {
        //info
        Button.style.backgroundImage = "url('/assets/media/settings-info.png'";
        Setting.innerHTML = 'Console Informations';
        Info1.innerHTML = '• Set Language';
        Info2.innerHTML = '• Set Country of residence';
        Info3.innerHTML = '• Read support informations';
        Info4.innerHTML = '• See relevant information about Wii U Privacy Policy';
        Info5.innerHTML = '• Set Wii Console Nickname';
        Action11.classList.toggle('settings-action-selected');
    } else if (section == "12") {
        //systransfer
        Button.style.backgroundImage = "url('/assets/media/settings-systransfer.png'";
        Setting.innerHTML = 'Software/Data Transfer';
        Info1.innerHTML = '• Wii U console Transfer';
        Info2.innerHTML = '• Informations about data transfer from Wii to Wii U';
        Info3.classList.toggle('hided');
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action12.classList.toggle('settings-action-selected');
    } else if (section == "13") {
        //update
        Button.style.backgroundImage = "url('/assets/media/settings-update.png'";
        Setting.innerHTML = 'Console Update';
        Info1.innerHTML = '• Update the console to the latest version';
        Info2.classList.toggle('hided');
        Info3.classList.toggle('hided');
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action13.classList.toggle('settings-action-selected');
    } else if (section == "14") {
        //reset
        Button.style.backgroundImage = "url('/assets/media/settings-reset.png'";
        Setting.innerHTML = 'Delete Settings and Content';
        Info1.innerHTML = '• Delete all the content and settings';
        Info2.classList.toggle('hided');
        Info3.classList.toggle('hided');
        Info4.classList.toggle('hided');
        Info5.classList.toggle('hided');
        Action14.classList.toggle('settings-action-selected');
    };
}
