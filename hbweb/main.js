/*------------------------------------------------------
Sample HomeBrewLoad App
Rules:
- NO COMMAS ALLOWED (,)
- NEVER use "" on action scripts, only ''. 
<id>YOUR_AppID</id>
<name>App Title</name>
<desc>App Description</desc>
<icon>https://path.to/your/app/icon.png</icon>
<AppRun>
    //APP_JS_Scripts
</AppRun>
------------------------------------------------------*/
window.onkeydown = function(PressedKey) {
    if (PressedKey.keyCode == "13") {
        uploadApp()
    }
}
var HBlastPage = 0;
var highestHBPage = 0;
function AddHBApp(id, action, name, desc, icon) {
    icon = icon ?? 'https://xcenter.netlify.app/assets/media/app.png';
    name = name ?? 'Unknown';
    desc = desc ?? 'No Desc Provided';
    if (id == null || id.length <= 0) return;
    if (action == null || action.length <= 0) return;
    if (document.getElementById(id) != null) return false;
    if (document.getElementById('homebrew').getElementsByTagName('button').length >= 6) {
        if (document.getElementById('homebrew-' + HBlastPage) != null) {
            document.getElementById('homebrewButtonBack').classList.remove('hided')
            document.getElementById('homebrewButtonNext-' + HBlastPage).classList.remove('hided')
        }
        document.getElementById('homebrewButtonNext').classList.remove('hided')
        document.getElementById('homebrewButtonBack').setAttribute('id', 'homebrewButtonBack-' + HBlastPage);
        document.getElementById('homebrewButtonNext').setAttribute('id', 'homebrewButtonNext-' + HBlastPage);
        document.getElementById('homebrew').setAttribute('id', 'homebrew-' + HBlastPage);
        HBlastPage = ++HBlastPage;
        highestHBPage = HBlastPage - 1;
        var newHBpage = document.createElement('div');
        newHBpage.setAttribute('id', 'homebrew');
        newHBpage.setAttribute('class', 'hided');
        document.getElementById('HBContainer').appendChild(newHBpage);
        var newHBbuttonBack = document.createElement('button');
        newHBbuttonBack.setAttribute('id', 'homebrewButtonBack');
        newHBbuttonBack.setAttribute('class', 'hbback')
        newHBbuttonBack.setAttribute('onclick', 'hbBack(this.id)');
        document.getElementById('homebrew').appendChild(newHBbuttonBack)
        document.getElementById('homebrewButtonBack').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>';
        var newHBbuttonNext = document.createElement('button');
        newHBbuttonNext.setAttribute('id', 'homebrewButtonNext');
        newHBbuttonNext.setAttribute('class', 'hbnext hided');
        newHBbuttonNext.setAttribute('onclick', 'hbNext(this.id)');
        document.getElementById('homebrew').appendChild(newHBbuttonNext)
        document.getElementById('homebrewButtonNext').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>';
    }
    document.getElementById('hbempty').classList.add('hided');
    document.getElementById('hbupload').classList.add('hided');
    var hbapp = document.createElement('button');
    hbapp.setAttribute("id", id);
    hbapp.setAttribute("class", "hbapp")
    hbapp.setAttribute("onclick", 'hbOpen("' + id + '", "' + action + '", "' + name + '", "' + desc + '", "' + icon + '")')
    document.getElementById("homebrew").appendChild(hbapp);
    document.getElementById(id).innerHTML = "<img alt='HBapp' src='" + icon + "'><h2>" + name + "</h2><br><p>" + desc + "</p>"
}
function hbBack(id) {
    if (!document.getElementById('hbOpen').classList.contains('hided')) return;
    if (!document.getElementById('hbupload').classList.contains('hided')) return;
    var ButtonNumber = id.split("-")[1];
    if (document.getElementById('homebrew-' + ButtonNumber) != null) {
        document.getElementById('homebrew-' + ButtonNumber).classList.add('hided')
        document.getElementById('homebrew-' + --ButtonNumber).classList.remove('hided')
    } else {
        document.getElementById('homebrew').classList.add('hided')
        document.getElementById('homebrew-' + highestHBPage).classList.remove('hided')
    }
}
function hbNext(id) {
    if (!document.getElementById('hbOpen').classList.contains('hided')) return;
    if (!document.getElementById('hbupload').classList.contains('hided')) return;
    var ButtonNumber = id.split("-")[1];
    document.getElementById('homebrew-' + ButtonNumber).classList.add('hided')
    if (document.getElementById('homebrew-' + ++ButtonNumber) != null) {
        document.getElementById('homebrew-' + ButtonNumber).classList.remove('hided')
    } else {
        document.getElementById('homebrew').classList.remove('hided')
    }
}
function uploadApp() {
    if (!document.getElementById('hbOpen').classList.contains('hided')) return;
    if (!document.getElementById('hbempty').classList.contains('hided')) return;
    document.getElementById('hbupload').classList.remove('hided');
}
function hbOpen(id, action, name, desc, icon) {
    if (!document.getElementById('hbupload').classList.contains('hided')) return;
    if (id == null || id.length <= 0) return;
    if (action == null || action.length <= 0) return;
    name = name ?? 'Unknown';
    desc = desc ?? 'No Desc Provided';
    icon = icon ?? 'https://xcenter.netlify.app/assets/media/app.png';
    document.getElementById('hbOpenIMG').src = icon;
    document.getElementById('hbOpenTITLE').innerHTML = name;
    document.getElementById('hbOpenDESC').innerHTML = desc;
    document.getElementById('hbLoad').setAttribute('onclick', "document.getElementById('hbOpen').classList.add('hided');" + action);
    document.getElementById('hbOpen').classList.remove('hided');
}
function ProcessApp(input) {
    var tempElement = document.createElement('div');
    tempElement.innerHTML = input;
    if (tempElement.querySelector('packs') != null || tempElement.querySelector('packs') != null) {
        var Packs = tempElement.querySelector('packs').innerText || tempElement.querySelector('packs').textContent;
        ProcessAppPack()
        function ProcessAppPack() {
            var ProcessedAppID = tempElement.querySelector('id').innerText || tempElement.querySelector('id').textContent;
            var ProcessedAppACT = tempElement.querySelector('AppRun').innerText || tempElement.querySelector('AppRun').textContent;
            var ProcessedAppNAME = tempElement.querySelector('name').innerText || tempElement.querySelector('name').textContent;
            var ProcessedAppDESC = tempElement.querySelector('desc').innerText || tempElement.querySelector('desc').textContent;
            var ProcessedAppICON = tempElement.querySelector('icon').innerText || tempElement.querySelector('icon').textContent;
            var id = tempElement.querySelector('id');
            var AppRun = tempElement.querySelector('AppRun');
            var name = tempElement.querySelector('name');
            var desc = tempElement.querySelector('desc');
            var icon = tempElement.querySelector('icon');
            ProcessedAppACT = ProcessedAppACT.replaceAll(',', '');
            Packs = --Packs;
            id.parentNode.removeChild(id);
            AppRun.parentNode.removeChild(AppRun);
            name.parentNode.removeChild(name);
            desc.parentNode.removeChild(desc);
            icon.parentNode.removeChild(icon);
            if (Packs > 0) ProcessAppPack();
            AddHBApp(ProcessedAppID, ProcessedAppACT, ProcessedAppNAME, ProcessedAppDESC, ProcessedAppICON);
        }
    } else {
        var ProcessedAppID = tempElement.querySelector('id').innerText || tempElement.querySelector('id').textContent;
        var ProcessedAppACT = tempElement.querySelector('AppRun').innerText || tempElement.querySelector('AppRun').textContent;
        var ProcessedAppNAME = tempElement.querySelector('name').innerText || tempElement.querySelector('name').textContent;
        var ProcessedAppDESC = tempElement.querySelector('desc').innerText || tempElement.querySelector('desc').textContent;
        var ProcessedAppICON = tempElement.querySelector('icon').innerText || tempElement.querySelector('icon').textContent;
        ProcessedAppACT = ProcessedAppACT.replaceAll(',', '');
        AddHBApp(ProcessedAppID, ProcessedAppACT, ProcessedAppNAME, ProcessedAppDESC, ProcessedAppICON);
    }
}

let HBinput = document.querySelector("#HBupload");
HBinput.addEventListener("change", () => {
    let files = HBinput.files;
    if(files.length == 0) return;
    if(HBinput.files[0].name.split(".")[1] != "hbl") {
        if (HBinput.files[0].name.split(".")[1] != "hbpack") {
            document.getElementById("hblerror").innerHTML = "Please enter a .hbl file."
            return;
        }
    }
    document.getElementById("hblerror").innerHTML = "";
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        ProcessApp(lines);
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});
let uploadinput = document.querySelector("#HBUploadApp");
uploadinput.addEventListener("change", () => {
    let files = uploadinput.files;
    if(files.length == 0) return;
    if(HBinput.files[0].name.split(".")[1] != "hbl") {
        if (HBinput.files[0].name.split(".")[1] != "hbpack") {
            document.getElementById("hblerror").innerHTML = "Please enter a .hbl file."
            return;
        }
    }
    document.getElementById("hbUploadError").innerHTML = "";
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        ProcessApp(lines);
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});