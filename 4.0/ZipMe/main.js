const zip = new JSZip();
var ZipMe = {
    folder: function(name, where, mode) {
        where = where ?? 'ZipMeWhereNotDefined';
        if ((!where.indexOf('#') != -1) && where != 'ZipMeWhereNotDefined') {
            ZipMeSubFolder(name, where, mode);
        } else {
            ZipMeRootFolder(name, where, mode);
        }
        function ZipMeRootFolder(name, where, mode) {
            if (name == null || name.length < 1) return;
            if (document.getElementById('ZipMeFolder-' + name) != null) return;
            if (where == null || where.length < 1) where = '.ZipMe';
            if (document.querySelector(where) == null) where = '.ZipMe';
            if (mode == 'hide') {
                zip.folder(name);
                return;
            }
            document.getElementById('ZipMeEMPTY').classList.add('hided');
            zip.folder(name);
            var ZipMeCNT = document.createElement('div');
            ZipMeCNT.setAttribute('class', 'ZipMeCNT');
            ZipMeCNT.setAttribute('id', 'ZipMeFolder-' + name);
            ZipMeCNT.setAttribute('style', 'cursor: pointer;')
            ZipMeCNT.setAttribute('onclick', 'document.getElementById("ZipMeFLDR-' + name + '").classList.remove("hided");')
            document.querySelector(where).appendChild(ZipMeCNT);
            var ZipMeCNTimg = document.createElement('img');
            var ZipMeCNTh3 = document.createElement('h3');
            var ZipMeCNTbtn = document.createElement('button');
            ZipMeCNTimg.setAttribute('src', 'folder.png');
            ZipMeCNTimg.setAttribute('alt', '');
            document.getElementById('ZipMeFolder-' + name).appendChild(ZipMeCNTimg);
            ZipMeCNTh3.innerHTML = name;
            document.getElementById('ZipMeFolder-' + name).appendChild(ZipMeCNTh3);
            ZipMeCNTbtn.setAttribute('onclick', 'ZipMe.remove("ZipMeFolder-' + name + '");');
            ZipMeCNTbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>'
            document.getElementById('ZipMeFolder-' + name).appendChild(ZipMeCNTbtn);
            var ZipMeFLDR = document.createElement('div');
            ZipMeFLDR.setAttribute('class', 'ZipMeFOLDER hided')
            ZipMeFLDR.setAttribute('id', 'ZipMeFLDR-' + name);
            document.querySelector('.ZipMe').appendChild(ZipMeFLDR);
            var ZipMeFLDRdiv = document.createElement('div');
            ZipMeFLDRdiv.setAttribute('id', 'ZipMeFLDRdiv-' + name);
            document.getElementById('ZipMeFLDR-' + name).appendChild(ZipMeFLDRdiv);
            var ZipMeFLDRupload = document.createElement('button');
            var ZipMeFLDRfolder = document.createElement('button');
            var ZipMeFLDRfile = document.createElement('button');
            var ZipMeFLDRclose = document.createElement('button');
            var ZipMeFLDRh1 = document.createElement('h1');
            var ZipMeFLDRnewdiv = document.createElement('div');
            ZipMeFLDRupload.setAttribute('onclick', '');
            ZipMeFLDRupload.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>';
            ZipMeFLDRfolder.setAttribute('onclick', 'ZipMe.process("newFolder", "' + where.replaceAll('#', '') + '")');
            ZipMeFLDRfolder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16"><path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/><path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/></svg>';
            ZipMeFLDRfile.setAttribute('onclick', '');
            ZipMeFLDRfile.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16"><path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/></svg>';
            ZipMeFLDRclose.setAttribute('onclick', 'this.parentNode.parentNode.classList.add("hided");');
            ZipMeFLDRclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>';
            ZipMeFLDRh1.innerHTML = name;
            ZipMeFLDRnewdiv.setAttribute('id', 'ZipMeFOLDERcnt-' + name);
            ZipMeFLDRnewdiv.setAttribute('class', 'vertical-scroll');
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRclose);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRfolder);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRfile);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRupload);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRh1);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRnewdiv);
        }
        function ZipMeSubFolder(name, where, mode) {
            if (name == null || name.length < 1) return;
            if (document.getElementById('ZipMeFOLDERcnt-' + where) != null) return;
            if (mode == 'hide') {
                zip.folder(where + name);
                return;
            }
            zip.folder(where + name);
            var ZipMeCNT = document.createElement('div');
            ZipMeCNT.setAttribute('class', 'ZipMeCNT');
            ZipMeCNT.setAttribute('id', 'ZipMeFolder-' + name);
            ZipMeCNT.setAttribute('style', 'cursor: pointer;')
            ZipMeCNT.setAttribute('onclick', 'document.getElementById("ZipMeFLDR-' + name + '").classList.remove("hided");')
            document.querySelector('#ZipMeFOLDERcnt-' + where.replaceAll('/', '')).appendChild(ZipMeCNT);
            var ZipMeCNTimg = document.createElement('img');
            var ZipMeCNTh3 = document.createElement('h3');
            var ZipMeCNTbtn = document.createElement('button');
            ZipMeCNTimg.setAttribute('src', 'folder.png');
            ZipMeCNTimg.setAttribute('alt', '');
            document.getElementById('ZipMeFolder-' + name).appendChild(ZipMeCNTimg);
            ZipMeCNTh3.innerHTML = name;
            document.getElementById('ZipMeFolder-' + name).appendChild(ZipMeCNTh3);
            ZipMeCNTbtn.setAttribute('onclick', 'ZipMe.remove("ZipMeFolder-' + name + '");');
            ZipMeCNTbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>'
            document.getElementById('ZipMeFolder-' + name).appendChild(ZipMeCNTbtn);
            var ZipMeFLDR = document.createElement('div');
            ZipMeFLDR.setAttribute('class', 'ZipMeFOLDER hided')
            ZipMeFLDR.setAttribute('id', 'ZipMeFLDR-' + name);
            document.querySelector('.ZipMe').appendChild(ZipMeFLDR);
            var ZipMeFLDRdiv = document.createElement('div');
            ZipMeFLDRdiv.setAttribute('id', 'ZipMeFLDRdiv-' + name);
            document.getElementById('ZipMeFLDR-' + name).appendChild(ZipMeFLDRdiv);
            var ZipMeFLDRupload = document.createElement('button');
            var ZipMeFLDRfolder = document.createElement('button');
            var ZipMeFLDRfile = document.createElement('button');
            var ZipMeFLDRclose = document.createElement('button');
            var ZipMeFLDRh1 = document.createElement('h1');
            var ZipMeFLDRnewdiv = document.createElement('div');
            ZipMeFLDRupload.setAttribute('onclick', '');
            ZipMeFLDRupload.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>';
            ZipMeFLDRfolder.setAttribute('onclick', 'ZipMe.process("newFolder", "' + where.replaceAll('#', '') + '")');
            ZipMeFLDRfolder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16"><path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/><path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/></svg>';
            ZipMeFLDRfile.setAttribute('onclick', '');
            ZipMeFLDRfile.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16"><path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/></svg>';
            ZipMeFLDRclose.setAttribute('onclick', 'this.parentNode.parentNode.classList.add("hided");');
            ZipMeFLDRclose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>';
            ZipMeFLDRh1.innerHTML = name;
            ZipMeFLDRnewdiv.setAttribute('id', 'ZipMeFOLDERcnt-' + name);
            ZipMeFLDRnewdiv.setAttribute('class', 'vertical-scroll');
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRclose);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRfolder);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRfile);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRupload);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRh1);
            document.getElementById('ZipMeFLDRdiv-' + name).appendChild(ZipMeFLDRnewdiv);
        }
    },
    file: function(name, content, where, mode) {
        if (name == null || name.length < 1) return;
        if (content == null || content.length < 1) content = '';
        if (where == null || where.length < 1) where = '.ZipMe';
        if (document.querySelector(where) == null) where = '.ZipMe';
        if (document.getElementById('ZipMeFile-' + where.replaceAll('#ZipMeFOLDERcnt-', '') + '/' + name) != null || mode == 'hide') {
            if (where != '.ZipMe') {
                zip.file(where.replaceAll('#ZipMeFOLDERcnt-', '') + name, content);
            } else {
                zip.file(name, content);
            }
            return;
        }
        document.getElementById('ZipMeEMPTY').classList.add('hided');
        if (where != '.ZipMe') {
            zip.file(where.replaceAll('#ZipMeFOLDERcnt-', '') + '/' + name, content);
        } else {
            zip.file(name, content);
        }
        var ZipMeCNT = document.createElement('div');
        ZipMeCNT.setAttribute('class', 'ZipMeCNT');
        ZipMeCNT.setAttribute('id', 'ZipMeFile-' + where.replaceAll('#ZipMeFOLDERcnt-', '') + '/' + name);
        document.querySelector(where).appendChild(ZipMeCNT);
        var ZipMeCNTimg = document.createElement('img');
        var ZipMeCNTh3 = document.createElement('h3');
        var ZipMeCNTbtn = document.createElement('button');
        var filepngn = name.lastIndexOf('.');
        var filetype = name.substring(filepngn + 1);
        var filepng = 'file.png';
        if (filetype == '7z') {
            filepng = 'file7z.png';
        } else if (filetype == 'exe') {
            filepng = 'fileexe.png';
        } else if (filetype == 'png' || filetype == 'jpg') {
            filepng = 'fileimg.png';
        } else if (filetype == 'mp3') {
            filepng = 'filemp3.png';
        } else if (filetype == 'mp4') {
            filepng = 'filemp4.png';
        } else if (filetype == 'rar') {
            filepng = 'filerar.png';
        } else if (filetype == 'sh' || filetype == 'bat') {
            filepng = 'fileshell.png';
        } else if (filetype == 'zip') {
            filepng = 'filezip.png';
        } else if (filetype == 'txt') {
            filepng = 'filetxt.png';
        } else if (filetype == 'js') {
            filepng = 'filejs.png';
        } else if (filetype == 'css') {
            filepng = 'filecss.png';
        } else if (filetype == 'html') {
            filepng = 'filehtml.png';
        }
        ZipMeCNTimg.setAttribute('src', filepng);
        ZipMeCNTimg.setAttribute('alt', '');
        document.getElementById('ZipMeFile-' + where.replaceAll('#ZipMeFOLDERcnt-', '') + '/' + name).appendChild(ZipMeCNTimg);
        ZipMeCNTh3.innerHTML = name;
        document.getElementById('ZipMeFile-' + where.replaceAll('#ZipMeFOLDERcnt-', '') + '/' + name).appendChild(ZipMeCNTh3);
        ZipMeCNTbtn.setAttribute('onclick', 'ZipMe.remove("ZipMeFile-' + where.replaceAll('#ZipMeFOLDERcnt-', '') + '/' + name + '");');
        ZipMeCNTbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>'
        document.getElementById('ZipMeFile-' + where.replaceAll('#ZipMeFOLDERcnt-', '') + '/' + name).appendChild(ZipMeCNTbtn);
    },
    process: function(type, ZipMeInput, ZipMeInputCNT) {
        if (type == 'newFolder') {
            if (ZipMeInputCNT == null || ZipMeInputCNT.length < 1) {
                document.getElementById('ZipMeINPUTh6').innerHTML = 'Folder';
                document.getElementById('ZipMeINPUTp').innerHTML = 'Please insert the name of the folder.';
                document.getElementById('ZipMeINPUT').value = '';
                document.getElementById('ZipMeINPUTconfirm').setAttribute('onclick', 'document.querySelector(".ZipMeINPUT").classList.add("hided");ZipMe.process("newFolder", document.getElementById("ZipMeINPUT").value);');
                document.querySelector('.ZipMeINPUT').classList.remove('hided');
            } else {
                ZipMeInput = ZipMeInput + '/';
                ZipMe.folder(ZipMeInputCNT, ZipMeInput);
            }
        } else if (type == 'download') {
            if (ZipMeInput == null || ZipMeInput.length < 1) {
                document.getElementById('ZipMeINPUTh6').innerHTML = 'Download';
                document.getElementById('ZipMeINPUTp').innerHTML = 'Please insert the name of the zip.';
                document.getElementById('ZipMeINPUT').value = '';
                document.getElementById('ZipMeINPUTconfirm').setAttribute('onclick', 'document.querySelector(".ZipMeINPUT").classList.add("hided");ZipMe.process("download", document.getElementById("ZipMeINPUT").value);');
                document.querySelector('.ZipMeINPUT').classList.remove('hided');
            } else {
                ZipMe.download(ZipMeInput);
            }
        } else if (type == 'newFile') {
            if (ZipMeInput == null || ZipMeInput.length < 1) {
                document.getElementById('ZipMeINPUTh6').innerHTML = 'File';
                document.getElementById('ZipMeINPUTp').innerHTML = 'Please insert the name of the file.';
                document.getElementById('ZipMeINPUT').value = '';
                document.getElementById('ZipMeINPUTconfirm').setAttribute('onclick', 'document.querySelector(".ZipMeINPUT").classList.add("hided");ZipMe.process("newFile", document.getElementById("ZipMeINPUT").value);');
                document.querySelector('.ZipMeINPUT').classList.remove('hided');
            } else if (ZipMeInputCNT == null || ZipMeInputCNT.length < 1) {
                document.getElementById("ZipMeINPUT").classList.add("hided");
                document.getElementById("ZipMeINPUTtxtarea").classList.remove("hided");
                document.querySelector('.ZipMeINPUT').querySelector('.center').setAttribute('style', 'height: 80%;');
                document.getElementById('ZipMeINPUTh6').innerHTML = 'File';
                document.getElementById('ZipMeINPUTp').innerHTML = 'Please insert the content of the file.';
                document.getElementById('ZipMeINPUT').value = '';
                document.getElementById('ZipMeINPUTconfirm').setAttribute('onclick', 'document.querySelector(".ZipMeINPUT").classList.add("hided");ZipMe.process("newFile", "' + ZipMeInput + '", document.getElementById("ZipMeINPUTtxtarea").value);document.getElementById("ZipMeINPUT").classList.remove("hided");document.getElementById("ZipMeINPUTtxtarea").classList.add("hided");document.querySelector(".ZipMeINPUT").querySelector(".center").setAttribute("style", "");');
                document.querySelector('.ZipMeINPUT').classList.remove('hided');
            } else {
                console.group('Add File');
                console.log(ZipMeInput);
                console.log(ZipMeInputCNT);
                console.groupEnd();
                ZipMe.file(ZipMeInput, ZipMeInputCNT);
            }
        } else if (type == 'upload') {

        }
    },
    download: function(name) {
        if(name == null || name.length < 1) name = 'ZipMe.zip';
        if(!(name.indexOf('.') != -1)) name = name + '.zip';
        zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, name);
        });
        location.reload();
    },
    remove: function(name) {
        if (name == null || name.length < 1) return;
        var tmpNode = document.getElementById(name);
        tmpNode.parentNode.removeChild(tmpNode);
        if (name.indexOf('ZipMeFolder') != -1) {
            var tmpNode2 = document.getElementById('ZipMeFLDR-' + name.replaceAll('ZipMeFolder-', ''));
            tmpNode2.parentNode.removeChild(tmpNode2);
            zip.remove(name.replaceAll('ZipMeFolder-', ''));
        } else {
            zip.remove(name.replaceAll('ZipMeFile-', ''));
        }
        if (document.querySelector('.ZipMe').getElementsByTagName('div').length == 1) {
            document.getElementById('ZipMeEMPTY').classList.remove('hided');
        }
    }
}
ZipMe.folder('folder');
ZipMe.file('Ciao.txt', '', '#ZipMeFOLDERcnt-folder');
ZipMe.folder('subfolder', 'folder');