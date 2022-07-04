document.body.classList.add('dark');
var versionswitcher = {
    apply: function(version) {
        if (version == null || version.length < 1) return false;
        if (version == "5.0") window.location = "/";
        document.getElementById('versionswitcher-navigate').setAttribute('src', '/version/' + version);
        document.getElementById('versionswitcher-navigate').classList.remove('hided');
        document.getElementById('versionswitcher').classList.add('hided');
        return true;
    }
}