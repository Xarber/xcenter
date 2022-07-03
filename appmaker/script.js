var appmaker = {
    convert: function(data, then) {
        var type = data.type;
        var title = data.title;
        var desc = data.desc;
        var author = data.author;
        var icon = data.icon;
        var html = data.html;
        var css = data.css;
        var js = data.js;
        var bat = data.bat;
        var id = data.id ?? title + CommonJS.random("10", "both", "upr");
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        var csscontainer = document.createElement('style');
        csscontainer.innerHTML = css;
        var jscontainer = document.createElement('script');
        jscontainer.setAttribute('type', 'text/javascript');
        jscontainer.innerHTML = "\n" + js + "\n";
        tmp.appendChild(jscontainer);
        tmp.appendChild(csscontainer);
        then = then ?? "convert";
        if (then == "convert") {
            var datanew = {
                type: type,
                title: title,
                desc: desc,
                author: author,
                src: icon,
                id: id,
                batch: bat,
                content: tmp.innerHTML
            }
            app.pack.build("", datanew);
        } else if (then == "preview") {
            document.getElementById('appmaker-preview-shown').innerHTML = tmp.innerHTML;
            var jscontainer = document.createElement('script');
            jscontainer.setAttribute('type', 'text/javascript');
            jscontainer.innerHTML = "\n" + js + "\n";
            document.body.appendChild(jscontainer)
            var csscontainer = document.createElement('style');
            csscontainer.innerHTML = css;
            document.head.insertBefore(csscontainer, document.head.firstChild)
        }
    },
    getInfo: function(then) {
        var type = appmaker.getType();
        var author = document.getElementById('appmaker-build-author').value ?? "User";
        var title = document.getElementById('appmaker-build-title').value ?? "App";
        var description = document.getElementById('appmaker-build-desc').value ?? title + " is a " + type + " made by " + author + ".";
        var icon = document.getElementById('appmaker-build-icon').value ?? "https://xcenter.netlify.app/assets/media/apps/default.png";
        var html = document.getElementById('appmaker-build-content-html').value ?? "empty";
        var css = document.getElementById('appmaker-build-content-css').value ?? "empty";
        var js = document.getElementById('appmaker-build-content-js').value ?? "empty";
        var bat = document.getElementById('appmaker-build-content-bat').value ?? "empty";
        then = then ?? "convert";
        if (then == "preview") {
            appmaker.convert({
                type: type,
                title: title,
                desc: description,
                author: author,
                icon: icon,
                html: html,
                css: css,
                js: js,
                bat: bat,
            }, "preview");
            return;
        }
        appmaker.convert({
            type: type,
            title: title,
            desc: description,
            author: author,
            icon: icon,
            html: html,
            css: css,
            js: js,
            bat: bat,
        })
    },
    getType: function() {
        var html = document.getElementById('appmaker-build-content-html').value ?? "empty";
        var css = document.getElementById('appmaker-build-content-css').value ?? "empty";
        var js = document.getElementById('appmaker-build-content-js').value ?? "empty";
        var bat = document.getElementById('appmaker-build-content-bat').value ?? "empty";
        var type = document.getElementById('appmaker-build-type').value ?? "Auto (App / Tool / Game / Script / Theme)";
        if (html.length < 1) html = "empty";
        if (css.length < 1) css = "empty";
        if (js.length < 1) js = "empty";
        if (bat.length < 1) bat = "empty";
        if (type == "Auto (App / Tool / Game / Script / Theme)") {
            if (html != "empty" && css != "empty" && js != "empty") type = "App";
            if (html != "empty" && css != "empty" && js != "empty" && bat != "empty") type = "Tool";
            if (html == "empty" && css == "empty" && (js != "empty" || bat != "empty")) type = "Script";
            if (html == "empty" && css != "empty" && bat == "empty") type = "Theme";
        }
        if (type == "App" || type == "Tool" || type == "Game" || type == "Script" || type == "Theme") {
            return type;
        }
        return "App";
    },
    preview: function() {
        appmaker.getInfo("preview");
    }
}
setTimeout(() => {
    appmaker.preview();
}, 1)
document.body.classList.add('dark');