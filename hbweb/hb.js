var hb = {
    init: function() {
        document.head.innerHTML = document.head.innerHTML + '\
        <title>HB WEB</title>\
        <link rel="shortcut icon" id="HTMLlogo" href="https://xcenter.netlify.app/assets/media/hb.png" type="image/x-icon">\
        <meta charset="UTF-8">\
        <meta http-equiv="X-UA-Compatible" content="IE=edge">\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        <link rel="stylesheet" href="https://xcenter.netlify.app/assets/bootstrap/css/bootstrap.css">\
        <link rel="stylesheet" href="https://local-xcenter.netlify.app/hbweb/style.css">';
        document.body.innerHTML = '\
        <audio autoplay="autoplay"><source src="https://xcenterdb.netlify.app/base/homebrew.m4a"></audio>\
        <div id="HBContainer">\
            <div id="hbempty" class="center" style="color: white;text-align: center;">\
                <h1>Nothing to see here...</h1>\
                <p>Download an app from the store and load it here.</p>\
                <p>Remember: To upload another app press Enter/A.</p>\
                <label for="HBupload" class="HBupload">Upload .hbl</label>\
                <input type="file" id="HBupload" class="hided" accept=".hbl,.hbpack">\
                    <p class="hblerror" id="hblerror"></p>\
            </div>\
            <div id="hbupload" class="hbAppUpload hided">\
                <h1>Upload An App</h1>\
                <p>Download an app from the store and load it here.</p>\
                <p>Remember: To upload another app press Enter/A.</p>\
                <label for="HBUploadApp" class="hbUploadApp">Upload .hbl</label>\
                <input type="file" id="HBUploadApp" class="hided" accept=".hbl,.hbpack">\
                <p class="hblerror" id="hbUploadError" style="color: white !important;text-decoration-color: white !important;"></p>\
                <button class="btn-secondary" onclick="document.getElementById(\'hbupload\').classList.add(\'hided\')">Close</button>\
            </div>\
            <div id="hbOpen" class="hbOpen hided">\
                <div class="hbOpenContent">\
                    <img src="https://xcenter.netlify.app/assets/media/appError.png" id="hbOpenIMG" alt="">\
                    <h1 id="hbOpenTITLE">???</h1>\
                    <p id="hbOpenDESC">???</p>\
                </div>\
                <button id="hbLoad" onclick="">Load</button>\
                <button id="hbBack" onclick="document.getElementById(\'hbOpen\').classList.add(\'hided\')">Back</button>\
            </div>\
            <div id="homebrew">\
                <button id="homebrewButtonBack" class="hbback hided" onclick="hbBack(this.id)"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>\
                <button id="homebrewButtonNext" class="hbnext hided" onclick="hbNext(this.id)"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>\
            </div>\
        </div>\
        <noscript><meta http-equiv="refresh" content="0;url=https://xcenter.netlify.app/issues/js.html"></noscript>\
        ';
        document.getElementById("html").classList.remove("dark");
        document.getElementById("html").classList.remove("light");
        var jquery = document.createElement("script");
        var hbscripts = document.createElement("script");
        jquery.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
        hbscripts.setAttribute("src", "https://local-xcenter.netlify.app/hbweb/main.js");
        document.body.appendChild(jquery);
        document.body.appendChild(hbscripts);
    }
}