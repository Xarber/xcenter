CommonJS.params("del", "pbd")
var th = document.getElementsByTagName("head")[0];
var s = document.createElement("script");
s.setAttribute("type","text/javascript");
s.setAttribute("src","https://xcenter.netlify.app/assets/js/common.js");
th.appendChild(s);
let input = document.querySelector("#pbdload");
input.addEventListener("change", () => {
    let files = input.files;
    if(files.length == 0) return;
    if(input.files[0].name.split(".")[1] != "pbd") {
        document.getElementById("pbderror").innerHTML = "Please enter a .pbd file."
        return;
    }
    document.getElementById("pbderror").innerHTML = "";
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        if (lines.join("\n").includes("<html") || lines.join("\n").includes("<!DOCTYPE html>") || lines.join("\n").includes("class=") || lines.join("\n").includes("<script") || lines.join("\n").includes("</script>") || lines.join("\n").includes("<noscript") || lines.join("\n").includes("</noscript>") || lines.join("\n").includes("<o>") || lines.join("\n").includes("</style>") || lines.join("\n").includes("<body") || lines.join("\n").includes("</body>") || lines.join("\n").includes("<head>") || lines.join("\n").includes("</head>")) {
            document.getElementById("pbderror").innerHTML = "Invalid .pbd format."
            return;
        }
        const PageBootDocument = lines.join("\n").replaceAll("<!DOCTYPE pbd>", "<!DOCTYPE html>").replaceAll("<pbd", "<html").replaceAll("group=", "class=").replaceAll("<js", "<script").replaceAll("</js>", "</script>").replaceAll("<nojs", "<noscript").replaceAll("</nojs>", "</noscript>").replaceAll("<css>", "<style>").replaceAll("</css>", "</style>").replace("<base", "<head").replaceAll("</base>", "</head>").replaceAll("<content", "<body").replaceAll("</content>", "</body>");
        document.getElementById("html").className = "";
        document.getElementById("body").className = "";
        CommonJS.replaceURL("/pbdload/?pbd=" + input.files[0].name);
        document.write(PageBootDocument);
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});
let inputconvert = document.querySelector("#pbdload-convert");
inputconvert.addEventListener("change", () => {
    let files = inputconvert.files;
    if(files.length == 0) return;
    if(inputconvert.files[0].name.split(".")[1] != "html") {
        document.getElementById("pbderror-convert").innerHTML = "Please enter a .html file."
        return;
    }
    document.getElementById("pbderror-convert").innerHTML = "";
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        if (lines.join("\n").includes("<pbd") || lines.join("\n").includes("<!DOCTYPE pbdl>") || lines.join("\n").includes("group=") || lines.join("\n").includes("<js") || lines.join("\n").includes("</js>") || lines.join("\n").includes("<nojs") || lines.join("\n").includes("</nojs>") || lines.join("\n").includes("<css>") || lines.join("\n").includes("</css>") || lines.join("\n").includes("<content") || lines.join("\n").includes("</content>") || lines.join("\n").includes("<base") || lines.join("\n").includes("</base>")) {
            document.getElementById("pbderror-convert").innerHTML = "Invalid .html format."
            return;
        }
        const newPBD = lines.join("\n").replaceAll("<!DOCTYPE html>", "<!DOCTYPE pbd>").replaceAll("<html", "<pbd").replaceAll("class=", "group=").replaceAll("<script", "<js").replaceAll("</script>", "</js>").replaceAll("<noscript", "<nojs").replaceAll("</noscript>", "</nojs>").replaceAll("<style>", "<css>").replaceAll("</style>", "</css>").replace("<head", "<base").replaceAll("</head>", "</base>").replaceAll("<body", "<content").replaceAll("</body>", "</content>");
        var newPBDname = inputconvert.files[0].name.replace("html", "pbd");
        CommonJS.download(newPBDname, newPBD);
        location.reload();
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});
let inputconvertHTML = document.querySelector("#pbdload-convertHTML");
inputconvertHTML.addEventListener("change", () => {
    let files = inputconvertHTML.files;
    if(files.length == 0) return;
    if(inputconvertHTML.files[0].name.split(".")[1] != "pbd") {
        document.getElementById("pbderror-convert").innerHTML = "Please enter a .pbd file."
        return;
    }
    document.getElementById("pbderror-convert").innerHTML = "";
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        if (lines.join("\n").includes("<html") || lines.join("\n").includes("<!DOCTYPE html>") || lines.join("\n").includes("class=") || lines.join("\n").includes("<script") || lines.join("\n").includes("</script>") || lines.join("\n").includes("<noscript") || lines.join("\n").includes("</noscript>") || lines.join("\n").includes("<o>") || lines.join("\n").includes("</style>") || lines.join("\n").includes("<body") || lines.join("\n").includes("</body>") || lines.join("\n").includes("<head>") || lines.join("\n").includes("</head>")) {
            document.getElementById("pbderror-convert").innerHTML = "Invalid .pbd format."
            return;
        }
        const newHTML = lines.join("\n").replaceAll("<!DOCTYPE pbd>", "<!DOCTYPE html>").replaceAll("<pbd", "<html").replaceAll("group=", "class=").replaceAll("<js", "<script").replaceAll("</js>", "</script>").replaceAll("<nojs", "<noscript").replaceAll("</nojs>", "</noscript>").replaceAll("<css>", "<style>").replaceAll("</css>", "</style>").replace("<base", "<head").replaceAll("</base>", "</head>").replaceAll("<content", "<body").replaceAll("</content>", "</body>");
        var newHTMLname = inputconvertHTML.files[0].name.replace("pbd", "html");
        CommonJS.download(newHTMLname, newHTML);
        location.reload();
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});