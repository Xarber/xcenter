var CommonJS = {
    TabSwitch: function() {
        /*document.addEventListener("visibilitychange", function() {
            if (document.hidden){
                return true;
            } else {
                return false;
            }
        });*/
        if (document.hidden){
            return true;
        } else {
            return false;
        }
    },
    getOS: function() {
        console.warn('Detecting your OS...')
        var OS = 'unknown';
        if (navigator.userAgent.indexOf("Win") != -1) {
            OS = "Windows"
        } else if (navigator.userAgent.indexOf("like Mac") != -1) {
            OS = "iOS"
        } else if (navigator.userAgent.indexOf("Mac") != -1) {
            OS = "MacOS"
        } else if (navigator.userAgent.indexOf("Android") != -1) {
            OS = "Android"
        } else if (navigator.userAgent.indexOf("Linux") != -1) {
            OS = "Linux"
        }
        if (OS == 'unknown') console.error("Your OS wasn't recognized.")
        return OS;
    },
    link: function(file, type) {
        console.log('Linking ' + type + ' file...');
        if (type == "js") {
            var th = document.getElementsByTagName('head')[0];
            var s = document.createElement('script');
            s.setAttribute('type','text/javascript');
            s.setAttribute('src',file);
            th.appendChild(s);
        } else if (type == 'css') {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = file;
            head.appendChild(link);
        }
    },
    wait: function() {
        //Does Nothing
    },
    params: function(action, parameter, defaultvalue) {
        if (defaultvalue == null) defaultvalue = 0;
        if (action == 'get' || action == 'obtain') {
            var urlparameter = defaultvalue;
            if(window.location.href.indexOf(parameter) > -1){
                urlparameter = CommonJS.getUrlVars()[parameter];
            }
            return urlparameter;
        } else if (action == 'del' || action == 'delete') {
            var url=document.location.href;
            var urlparts= url.split('?');
          
           if (urlparts.length>=2)
           {
            var urlBase=urlparts.shift(); 
            var queryString=urlparts.join("?"); 
          
            var prefix = encodeURIComponent(parameter)+'=';
            var pars = queryString.split(/[&;]/g);
            for (var i= pars.length; i-->0;)               
                if (pars[i].lastIndexOf(prefix, 0)!==-1)   
                    pars.splice(i, 1);
            url = urlBase+'?'+pars.join('&');
            window.history.pushState('',document.title,url); // added this line to push the new url directly to url bar .
          
          }
          return url;
        }
        return 'failed';
    },
    getUrlVars: function() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    },
    replaceURL: function(URL) {
        console.group('Changed URL');
        console.log('From: ' + window.location.pathname);
        console.log('To: ' + URL);
        console.groupEnd();
        window.history.replaceState({}, "", URL);
    },
    redirect: function(URL, Type) {
        console.log('Redirecting to ' + URL + '...');
        if (Type == 'redirect' || Type == null) {
            location.href = URL;
            return false;
        } else if (Type == 'replace') {
            window.location = URL;
            return false;
        }
        console.log('Redirect Failed.')
        return 'failed';
    },
    getLanguage: function() {
        return navigator.language;
    },
    getTheme: function() {
        console.log('Getting System Theme...');
        var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        var theme;
        if (darkTheme.matches) {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        console.log('Done, ' + theme + ' theme detected.');
        return theme;
    },
    getKeyCode: window.onkeydown = function(Key) {
        return(Key.keyCode);
    },
    fileManage: function(action, inpt, out) {
        var input = document.getElementById('FileInput');
        var output = document.getElementById('FileOutput');
        input = inpt ?? input;
        output = out ?? output;
        //USAGE: fileManage("Action", "inputID", "outputID");
        //DEFAULT: fileManage("NODEFAULT", "FileInput", "FileOutput");
        //Actions:
        //Read = Read the file;
        //GetExtension = Get File Extension;
        //GetName = Get File Name;
        //GetSize = Get File Size;
        //GetEdit = Get Last File Edit;
        //Use GetInfo to get All the avaiable informations.
        //(Output will be: name, size, type, last mod)
        var RequestInfo;
        if (action == "Read") {
            input.addEventListener('change', () => {
                var files = input.files;
                if (files.length == 0) return;
                /* If any further modifications have to be made on the
                Extracted text. The text can be accessed using the
                file variable. But since this is const, it is a read
                only variable, hence immutable. To make any changes,
                changing const to var, here and In the reader.onload
                function would be advisible */
                const file = files[0];
                var reader = new FileReader();
                reader.onload = (e) => {
                    const file = e.target.result;
                    // This is a regular expression to identify carriage
                    // Returns and line breaks
                    const lines = file.split(/\r\n|\n/);
                    output.value = lines.join('\n');
                    output.innerHTML = lines.join('\n');
                };
                reader.onerror = (e) => alert(e.target.error.name);
                reader.readAsText(file);
            });    
        } else if (action == "GetName") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].name;
                return RequestInfo;
            });
        } else if (action == "GetSize") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].size;
                return RequestInfo;
            });
        } else if (action == "GetExtension") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].type;
                return RequestInfo;
            });
        } else if (action == "GetEdit") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].lastModifiedDate;
                return RequestInfo;
            });
        } else if (action == "GetInfo") {
            input.addEventListener('change', () => {
                RequestInfo = input.files[0].name + ', ' + input.files[0].size + ', ' + input.files[0].type + ', ' + input.files[0].lastModifiedDate;
                return RequestInfo;
            });
        } else {return "failed"};
    },
    editPageHead: function(toEdit, value) {
        if (toEdit == 'title') {
            document.title = value;
            return;
        } else if (toEdit == 'icon') {
            document.getElementById('HTMLlogo').setAttribute('href', value);
            return;
        }
        return false;
    },
    download: function(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    },
    onIframe: function() {
        if (window!=window.top) {
            return true;
        } else {
            return false;
        }
    },
    copyText: function(id, text) {
        if (id == null || id.length <= 0) {
            if (text == null || text.length <= 0) {
                return false;
            } else {
                var TempDiv = document.createElement('input');
                TempDiv.setAttribute("id", 'CopyTextCommonJS');
                TempDiv.setAttribute("style", "display: none;");
                TempDiv.setAttribute("value", text);
                document.querySelector("body").appendChild(TempDiv);
                var TextToCopy = document.getElementById('CopyTextCommonJS');
                TextToCopy.select();
                TextToCopy.setSelectionRange(0, 99999); /* For mobile devices */
                navigator.clipboard.writeText(TextToCopy.value);
                return true;
            }
        }
        var TextToCopy = document.getElementById(id);
        TextToCopy.select();
        TextToCopy.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(TextToCopy.value);
        return true;
    },
    getTXT: function(url) {
        localStorage.removeItem('getTxtTMP');
        fetch(url).then(response => response.text()).then(data => {
            localStorage.setItem('getTxtTMP', data);
        });
        return localStorage.getItem('getTxtTMP')
    }
}
console.log('CommonJS function enabled succeffully!');
if (document.querySelector('.page') != null && (location.href.indexOf('xcenter.netlify.app') != -1 || location.href.indexOf('127.0.0.1:5500') != -1)) {
    console.log('Clearing Previous Console Logs...');
    console.clear()
    console.log('CommonJS Execution Started');
    if (location.href.indexOf('pbd') <= -1) {
        link('/assets/css/loading.css', 'css');
    }
    $(window).on('load',function(){
        $(".loading").fadeOut(1000);
        $(".page").fadeIn(1000);
    });
    console.log('Executing Page Data Scripts...');
    if (localStorage.getItem('XCenterPageData') != null) {
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(localStorage.getItem('XCenterPageData')));
        document.head.appendChild(s);
        localStorage.removeItem('XCenterPageData')
        console.log('Page Data Scripts Executed')
    } else {
        console.log('No Page Data Scripts Found.')
    }
    if (localStorage.getItem('XColdBootData') != null) {
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(localStorage.getItem('XColdBootData')));
        document.head.appendChild(s);
    }
    if (localStorage.getItem('XColdBootData2') != null) {
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(localStorage.getItem('XColdBootData2')));
        document.head.appendChild(s);
    }
    if (localStorage.getItem('XColdBootData3') != null) {
        var s = document.createElement('script');
        s.appendChild(document.createTextNode(localStorage.getItem('XColdBootData3')));
        document.head.appendChild(s);
    }
    console.log('Checking if displaying on an iframe...');
    if (window!=window.top) {
        console.error('IFRAME DETECTED!')
        if (location.href.indexOf('iframe') == -1) {
            console.warn('Do not use the website on an iFrame')
            window.location = '/issues/iframe.html';
        } else {
            console.log('Not using an iFrame')
        }
    } else {
        console.log('Checking Page...')
        if (location.href.indexOf('iframe') != -1) {
            console.log('Redirecting...')
            window.location = '/';
        }
    }
    function sysTheme() {
        console.log('Getting System Theme...');
        var darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        var theme;
        if (darkTheme.matches) {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        console.log('Done, ' + theme + ' theme detected.');
        return theme;
    }
    settings('get')
    var pageHTML = document.getElementById('html');
    var navbar = document.getElementById('navbar');
    var menu = document.getElementById('new-menu');
    var theme = sysTheme();
    if (localStorage.getItem('theme') == null) {localStorage.setItem('theme', 'auto')};
    setTheme();
    function setTheme() {
        console.log('Setting Page Theme...');
        if (localStorage.getItem('theme') == 'auto') {
            if (document.getElementById('settings-ThemeDetect') != null) {document.getElementById('settings-ThemeDetect').checked = true;}
            if (theme == 'dark') {
                pageHTML.classList.add('dark')
                navbar.classList.add('new-navbar-dark')
                if (menu != null) {menu.classList.add('new-menu-dark')}
                if (document.getElementById('settings-ThemeDark') != null) {
                    document.getElementById('settings-ThemeDark').checked = true;
                    document.getElementById('settings-ThemeDarkCheck').checked = true;
                }
            } else if (theme == 'light') {
                pageHTML.classList.add('light')
                navbar.classList.add('new-navbar-light')
                if (menu != null) {menu.classList.add('new-menu-light')}
                if (document.getElementById('settings-ThemeDark') != null) {
                    document.getElementById('settings-ThemeDark').checked = false;
                    document.getElementById('settings-ThemeDarkCheck').checked = false;
                }
            }
        } else if (localStorage.getItem('theme') == 'dark') {
            pageHTML.classList.add('dark')
            navbar.classList.add('new-navbar-dark')
            menu.classList.add('new-menu-dark')
            if (document.getElementById('settings-ThemeDark') != null) {
                document.getElementById('settings-ThemeDark').checked = true;
                document.getElementById('settings-ThemeDarkCheck').checked = true;
            }
        } else if (localStorage.getItem('theme') == 'light') {
            pageHTML.classList.add('light')
            navbar.classList.add('new-navbar-light')
            menu.classList.add('new-menu-light')
            if (document.getElementById('settings-ThemeDark') != null) {
                document.getElementById('settings-ThemeDark').checked = false;
                document.getElementById('settings-ThemeDarkCheck').checked = false;
            }
        }
        console.log('Page theme edited!');
    }
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    document.body.style.cursor="url('/assets/cursors/xcenter.cur'), default";
    if (location.href.indexOf('/tools/') != -1 || location.href.indexOf('/xarbot/') != -1 || location.href.indexOf('/os/') != -1 || location.href.indexOf('/settings/') != -1 || location.href.indexOf('/help/') != -1 || location.href.indexOf('/issues/') != -1) {} else if (window.location.pathname.length <= 1 || location.href.indexOf('index') != -1) {} else {localStorage.setItem('LastLocalPage', location.href);console.log('External Page Saved.');}
    if (localStorage.getItem('LastLocalPage') == null) {
        console.log('Resetting Recent Page...');
        localStorage.setItem('LastLocalPage', '/help/#RecentPage');
    }
    function RecentPage() {
        console.log('Redirecting to last local page...');
        location.href = localStorage.getItem('LastLocalPage');
        return false;
    }
    navResize();
    function navResize() {
        console.log('Resizing navbar...');
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
        if (winWidth <= "123") {
            document.getElementById("new-navbar-home").classList.add('hided');
            document.getElementById("new-navbar-other").classList.add('hided');
            document.getElementById("new-navbar-tools").classList.add('hided');
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-OS").classList.add('hided');
        } else if (winWidth <= "197") {
            document.getElementById("new-navbar-other").classList.add('hided');
            document.getElementById("new-navbar-tools").classList.add('hided');
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-OS").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
        } else if (winWidth <= "281") {
            document.getElementById("new-navbar-tools").classList.add('hided');
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-OS").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
        } else if (winWidth <= "376") {
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-tools").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
            document.getElementById("new-navbar-OS").classList.remove('hided');
        } else if (winWidth <= "484") {
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-settings").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
            document.getElementById("new-navbar-tools").classList.remove('hided');
            document.getElementById("new-navbar-OS").classList.remove('hided');
        } else if (winWidth <= "609") {
            document.getElementById("new-navbar-xarbot").classList.add('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
            document.getElementById("new-navbar-tools").classList.remove('hided');
            document.getElementById("new-navbar-settings").classList.remove('hided');
            document.getElementById("new-navbar-OS").classList.remove('hided');
        } else {
            document.getElementById("new-navbar-xarbot").classList.remove('hided');
            document.getElementById("new-navbar-home").classList.remove('hided');
            document.getElementById("new-navbar-other").classList.remove('hided');
            document.getElementById("new-navbar-tools").classList.remove('hided');
            document.getElementById("new-navbar-settings").classList.remove('hided');
            document.getElementById("new-navbar-OS").classList.remove('hided');
        }
    }
    window.onresize = function() {
        console.log('WINDOW RESIZEMENT DETECTED!');
        navResize();
        osPageFix();
    }
    function link(file, type) {
        console.log('Linking ' + type + ' file...');
        if (type == "js") {
            var th = document.getElementsByTagName('head')[0];
            var s = document.createElement('script');
            s.setAttribute('type','text/javascript');
            s.setAttribute('src',file);
            th.appendChild(s);
        } else if (type == 'css') {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = file;
            head.appendChild(link);
        }
    }
    function NewMenu() {
        console.log('Menu Requested...');
        document.getElementById('new-menu').classList.toggle('hided');
    }
    if (document.getElementById('new-page-indicator') != null) {
        console.log('Fixing page indicator...');
        var Timeout = setTimeout(() => {document.getElementById('new-page-indicator').classList.add('fadeOut');document.getElementById('new-page-indicator').classList.add('semi-hided-smooth')}, 5000)
    }
    /*------------------------------------------------------------
    CAROUSEL
    ------------------------------------------------------------*/
    if (document.getElementById('carousel-1') != null) {
        console.log('Carousel Detected');
        document.getElementById('carousel-1').classList.remove('hided');
    }
    function carousel(s) {
        console.log('Carousel Action Requested...');
        var first = document.getElementById('carousel-1').classList.contains('hided');
        var one = document.getElementById('carousel-1');
        var second = document.getElementById('carousel-2').classList.contains('hided');
        var two = document.getElementById('carousel-2');
        var third = document.getElementById('carousel-3').classList.contains('hided');
        var three = document.getElementById('carousel-3');
        var fourth = document.getElementById('carousel-4').classList.contains('hided');
        var four = document.getElementById('carousel-4');
        if (s != 'j') {
            if (!first) {
                if (s == '+') {
                    one.classList.add('hided');
                    two.classList.remove('hided');
                } else if (s == '-') {
                    one.classList.add('hided');
                    four.classList.remove('hided');
                }
            } else if (!second) {
                if (s == '+') {
                    two.classList.add('hided');
                    three.classList.remove('hided');
                } else if (s == '-') {
                    two.classList.add('hided');
                    one.classList.remove('hided');
                }
            } else if (!third) {
                if (s == '+') {
                    three.classList.add('hided');
                    four.classList.remove('hided');
                } else if (s == '-') {
                    three.classList.add('hided');
                    two.classList.remove('hided');
                }
            } else if (!fourth) {
                if (s == '+') {
                    four.classList.add('hided');
                    one.classList.remove('hided');
                } else if (s == '-') {
                    four.classList.add('hided');
                    three.classList.remove('hided');
                }
            }
        } else {
            if (!first) {
                window.location = '/about';
            } else if (!second) {
                window.location = '/xarbot';
            } else if (!third) {
                window.location = '/xwip';
            } else if (!fourth) {
                window.location = '/tools';
            }
        }
    }
    function dropdown() {
        console.log('Toggling Dropdown...');
        document.getElementById('new-dropdown').classList.toggle('hided');
    }
    function settings(a) {
        console.log('Fetching settings...');
        if (a == 'apply') {
            console.log('Applying settings...');
            if (document.getElementById('settings-ThemeDetect').checked) {
                localStorage.setItem('theme', 'auto');
            } else if (document.getElementById('settings-ThemeDarkCheck').checked) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
            window.location = '/';
        } else if (a == 'get') {
            console.log('Getting settings...');
            if (localStorage.getItem('theme') == null) {localStorage.setItem('theme', 'auto')}
            var theme = localStorage.getItem('theme');
            if (document.getElementById('settings-ThemeDetect') != null) {
                if (theme == 'auto') {
                    document.getElementById('settings-ThemeDetect').checked = true;
                }
            }
        } else if (a == 'reset') {
            console.log('Resetting settings...');
            localStorage.setItem('theme', 'auto')
            theme = 'auto';
            location.reload();
        }
    }
    /*------------------------------------------------------------
    SYSTEM ICON CHANGE
    ------------------------------------------------------------*/
    console.log('Detecting Operative System...');
    var Systemicon;
    Systemicon = 'unknown.png';
    if (navigator.userAgent.indexOf("Win") != -1) {
        console.log('Operative System Detected (Windows)');
        Systemicon = "windows.png"
    } else if (navigator.userAgent.indexOf("like Mac") != -1) {
        Systemicon = "apple.png"
        console.log('Operative System Detected (iOS)');
    } else if (navigator.userAgent.indexOf("Mac") != -1) {
        Systemicon = "apple.png"
        console.log('Operative System Detected (MacOS)');
    } else if (navigator.userAgent.indexOf("Android") != -1) {
        Systemicon = "android.png"
        console.log('Operative System Detected (Android)');
    } else if (navigator.userAgent.indexOf("Linux") != -1) {
        Systemicon = "linux.png"
        console.log('Operative System Detected (Linux)');
    } else if (navigator.userAgent.indexOf("Nintendo WiiU") != -1) {
        Systemicon = "WiiU.png"
        console.log('Operative System Detected (WiiU)');
    } else {console.error('Unknown Operative System')}
    var NavBarOS = document.getElementById('nav-OS');
    var ReccomendOS = document.getElementById('reccomend-OS');
    var OSpng = document.getElementById('new-os-png');
    var OStit = document.getElementById('new-os-name');
    var OSstory = document.getElementById('new-os-story');
    var OStool1 = document.getElementById('new-os-tool-1');
    var OStool2 = document.getElementById('new-os-tool-2');
    var OStool3 = document.getElementById('new-os-tool-3');
    var OStool4 = document.getElementById('new-os-tool-4');
    var OStool5 = document.getElementById('new-os-tool-5');
    var OStool6 = document.getElementById('new-os-tool-6');
    NavBarOS.src = '/assets/media/4.0/' + Systemicon;
    if (ReccomendOS != null) {
        ReccomendOS.src = '/assets/media/4.0/' + Systemicon;
    }
    if (OSpng != null) {
        OSpng.src = '/assets/media/4.0/OS' + Systemicon;
    }
    osPageFix();
    function osPageFix() {
        if (document.getElementById('new-os-png') == null) return;
        console.log('Fixing OS image')
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
        if (winWidth <= "750") {
            document.getElementById('new-os-png').src = '/assets/media/4.0/' + Systemicon;
        } else {
            document.getElementById('new-os-png').src = '/assets/media/4.0/OS' + Systemicon;
        }
    }
    if (OStit != null) {
        if (navigator.userAgent.indexOf("like Mac") != -1) {Systemicon = "iOS"} else if (navigator.userAgent.indexOf("Mac") != -1) {Systemicon = "MacOS"}
        OStit.innerHTML = Systemicon.replaceAll('.png', '');
    }
    if (OSstory != null) {
        if (Systemicon == 'windows.png') {
            OSstory.innerHTML = 'Microsoft Windows (also referred to as Windows or Win) is a graphical operating system developed and published by Microsoft. It provides a way to store files, run software, play games, watch videos, and connect to the Internet. Microsoft Windows was first introduced with version 1.0 on November 10, 1983. Over a dozen versions of Windows were released after that, including the current version, Windows 11. <br> Starting with Windows XP, Microsoft has published various editions of Windows. Each of these Windows editions has the same core operating system, but some editions have additional features, at an additional cost. The two most common editions of Windows for home computers are Windows Home and Windows Professional.';
        } else if (Systemicon == 'iOS') {
            OSstory.innerHTML = 'Originally known as the iPhone OS, iOS is the operating system that runs on the Apple iPhone, Apple iPad, and Apple iPad Touch devices. It was first introduced by Steve Jobs during the 2007 WWDC introducing the iPhone. iOS is the second-most popular platform for mobile devices, only slightly edged out by Android.';
        } else if (Systemicon == 'MacOS') {
            OSstory.innerHTML = 'macOS is an operating system designed for the Apple Macintosh computer. It was developed by Apple, who also created the Apple I and other more modern products, including the iPod, iPhone, and iPad. The main competition to the macOS is the Windows operating system, the most popular OS by a large margin. The first version of the macOS, part of the "Classic" macOS series, was originally released in the mid-1980s. It did not possess a command line and could only run one application at a time. The first version of the Macintosh operating system to be named "macOS" was version 7.6. The most recent version is called macOS X, or macOS.';
        } else if (Systemicon == 'android.png') {
            OSstory.innerHTML = "Initially founded by Andy Rubin in October 2003 and later acquired by Google on August 17, 2005. Android is a free Linux based platform and is an open software stack with an operating system, middleware, and applications. It was originally developed by Google and released on November 5, 2007, for mobile platforms. T-Mobile's G1 phone (HTC Dream) is the first phone to be released to the public with Google Android on September 23, 2008. Android is a strong rival to the Apple iOS, a closed operating system and platform used on the Apple iPhone.";
        } else if (Systemicon == 'linux.png') {
            OSstory.innerHTML = "Linux (pronounced 'linnucks') is a monolithic, open-source kernel, and a family of operating systems based on that kernel. The Linux kernel was originally developed by Linus Torvalds, who announced it on the comp.os.minix newsgroup on August 25, 1991. Since then, it's been ported to computer architectures including x86-64, x86, ARM, RISC, and DEC Alpha. It is licensed under version 2 of the GPL. Developers have access to all Linux source code, and are permitted under the license conditions to modify and distribute it.";
        } else if (Systemicon == 'WiiU.png') {
            OSstory.innerHTML = 'Released in 2012, the Wii U was a popular video game console sold by Nintendo. The Wii U is similar to its predecessor, the Wii, but introduced new hardware specifications, new exclusive games, and a unique controller with a portable touch screen, called the Gamepad.';
        } else if (Systemicon == 'unknown.png') {
            OSstory.innerHTML = "We're sorry, but your OS wasn't recognized and we can't let you see it's history or reccomend you tools for it. If you're using an agent switcher, turn it off or change the OS to see this page correctly. Otherwise, your OS is not a common one and it's not supported by X-Center. Sorry again and have a good experience with the site.";
        }
    }
    if (document.getElementById('new-os-tool-remember') != null) {if (Systemicon == 'windows.png') {document.getElementById('new-os-tool-remember').classList.remove('hided')}}
    function OStools(id) {
        if (id == 'new-os-tool-1') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Parsec';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://builds.parsecgaming.com/package/parsec-windows.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://builds.parsecgaming.com/package/parsec-windows.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://parsec.app");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://parsec.app");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Discord';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3Ffingerprint%3D953001653500518470.MfiuhD8TZ4U6MtInoO_hli844hY%26attemptId%3Deed98504-f84c-4109-9030-6aaaf66645d1&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Il%20luogo%20ideale%20per%20parlare%20con%20amici%20e%20community.&efr=1");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3Ffingerprint%3D953001653500518470.MfiuhD8TZ4U6MtInoO_hli844hY%26attemptId%3Deed98504-f84c-4109-9030-6aaaf66645d1&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Il%20luogo%20ideale%20per%20parlare%20con%20amici%20e%20community.&efr=1");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://discord.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://discord.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'GIMP';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://download.gimp.org/mirror/pub/gimp/v2.10/osx/gimp-2.10.30-x86_64.dmg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://download.gimp.org/mirror/pub/gimp/v2.10/osx/gimp-2.10.30-x86_64.dmg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.gimp.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.gimp.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'TeraBox';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.dubox.drive");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.dubox.drive");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.terabox.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.terabox.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'GIMP';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://flathub.org/repo/appstream/org.gimp.GIMP.flatpakref");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://flathub.org/repo/appstream/org.gimp.GIMP.flatpakref");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.gimp.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.gimp.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-2') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'TeraCopy';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://www.codesector.com/files/teracopy.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://www.codesector.com/files/teracopy.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.codesector.com/teracopy");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.codesector.com/teracopy");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Edge';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://microsoftedgewelcome.microsoft.com/emmx/edge-download");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://microsoftedgewelcome.microsoft.com/emmx/edge-download");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.microsoft.com/edge");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.microsoft.com/edge");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'qBitTorrent';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent-4.3.9.dmg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://www.fosshub.com/qBittorrent.html?dwl=qbittorrent-4.3.9.dmg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.qbittorrent.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.qbittorrent.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Rewards';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://surveys.google.com/google-opinion-rewards/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://surveys.google.com/google-opinion-rewards/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Parsec';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://builds.parsecgaming.com/package/parsec-linux.deb");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://builds.parsecgaming.com/package/parsec-linux.deb");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://parsec.app/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://parsec.app/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-3') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Visual Studio Code';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://az764295.vo.msecnd.net/stable/c722ca6c7eed3d7987c0d5c3df5c45f6b15e77d1/VSCodeUserSetup-x64-1.65.2.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://az764295.vo.msecnd.net/stable/c722ca6c7eed3d7987c0d5c3df5c45f6b15e77d1/VSCodeUserSetup-x64-1.65.2.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://code.visualstudio.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://code.visualstudio.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'GroupMe';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://itunes.apple.com/us/app/groupme-for-iphone/id392796698?mt=8");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://itunes.apple.com/us/app/groupme-for-iphone/id392796698?mt=8");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://groupme.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://groupme.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Drive';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://dl.google.com/drive-file-stream/GoogleDrive.dmg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://dl.google.com/drive-file-stream/GoogleDrive.dmg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://drive.google.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://drive.google.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'WeWard';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.weward");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.weward");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://weward.fr/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://weward.fr/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Audacity';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://github.com/audacity/audacity/releases/download/Audacity-3.1.3/audacity-linux-3.1.3-x86_64.AppImage");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://github.com/audacity/audacity/releases/download/Audacity-3.1.3/audacity-linux-3.1.3-x86_64.AppImage");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.audacityteam.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.audacityteam.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-4') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'IMG Burn';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://www.imgburn.com/index.php?act=download");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://www.imgburn.com/index.php?act=download");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.imgburn.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.imgburn.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'CapCut';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://apps.apple.com/us/app/viamaker/id1500855883");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://apps.apple.com/us/app/viamaker/id1500855883");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.capcut.net/app");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.capcut.net/app");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Chrome';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://dl.google.com/dl/chrome/mac/legacy10_9/GGRO/googlechrome.dmg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://dl.google.com/dl/chrome/mac/legacy10_9/GGRO/googlechrome.dmg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.google.it/intl/it/chrome/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.google.it/intl/it/chrome/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Macrodroid';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.macrodroid.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.macrodroid.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'OpenShot';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://github.com/OpenShot/openshot-qt/releases/download/v2.6.1/OpenShot-v2.6.1-x86_64.AppImage");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://github.com/OpenShot/openshot-qt/releases/download/v2.6.1/OpenShot-v2.6.1-x86_64.AppImage");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.openshot.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.openshot.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-5') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Rufus';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://github.com/pbatard/rufus/releases/download/v3.18/rufus-3.18.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://github.com/pbatard/rufus/releases/download/v3.18/rufus-3.18.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://rufus.ie/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://rufus.ie/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Xbox';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://apps.apple.com/app/xbox/id736179781");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://apps.apple.com/app/xbox/id736179781");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.xbox.com/apps/xbox-app-for-mobile");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.xbox.com/apps/xbox-app-for-mobile");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Magnet';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=441258766&mt=12");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=441258766&mt=12");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://magnet.crowdcafe.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://magnet.crowdcafe.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Ultimate VPN';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.open.hotspot.vpn.free");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.open.hotspot.vpn.free");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.open.hotspot.vpn.free");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=com.open.hotspot.vpn.free");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'LibreOffice';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://libreoffice.mirror.garr.it/libreoffice/stable/7.3.1/deb/x86_64/LibreOffice_7.3.1_Linux_x86-64_deb.tar.gz");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://libreoffice.mirror.garr.it/libreoffice/stable/7.3.1/deb/x86_64/LibreOffice_7.3.1_Linux_x86-64_deb.tar.gz");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://libreoffice.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://libreoffice.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else if (id == 'new-os-tool-6') {
            if (Systemicon == 'windows.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Recuva';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://download.ccleaner.com/rcsetup153.exe");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://download.ccleaner.com/rcsetup153.exe");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.ccleaner.com/recuva");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.ccleaner.com/recuva");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'iOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'LifeSum';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://app.adjust.com/mzt4tv?engagement_type=fallback_click");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://app.adjust.com/mzt4tv?engagement_type=fallback_click");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://lifesum.com/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://lifesum.com/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'MacOS') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Gog Galaxy';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://gog-cdn-lumen.secure2.footprint.net/open/galaxy/client/2.0.46.129/galaxy_client_2.0.46.129.pkg");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://gog-cdn-lumen.secure2.footprint.net/open/galaxy/client/2.0.46.129/galaxy_client_2.0.46.129.pkg");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://www.gog.com/galaxy");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://www.gog.com/galaxy");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'android.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'Parsec';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=tv.parsec.client");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'window.open("https://play.google.com/store/apps/details?id=tv.parsec.client");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://parsec.app/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://parsec.app/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'linux.png') {
                document.getElementById('new-os-tool-img').src = document.getElementById(id).src;
                document.getElementById('new-os-tool-name').innerHTML = 'GParted';
                document.getElementById('new-os-tool-desc').innerHTML = '';
                if (document.getElementById('new-os-tool-down') == null) {
                    var newToolBTNd = document.createElement('button');
                    newToolBTNd.setAttribute('class', 'btn-primary');
                    newToolBTNd.setAttribute('onclick', 'alert("sudo apt-get install gparted");');
                    newToolBTNd.setAttribute('id', 'new-os-tool-down');
                    document.getElementById('new-os-actions').appendChild(newToolBTNd);
                    document.getElementById('new-os-tool-down').innerHTML = 'Download';
                } else {
                    document.getElementById('new-os-tool-down').setAttribute('onclick', 'alert("sudo apt-get install gparted");');
                }
                if (document.getElementById('new-os-tool-open') == null) {
                    var newToolBTNo = document.createElement('button');
                    newToolBTNo.setAttribute('class', 'btn-secondary');
                    newToolBTNo.setAttribute('onclick', 'window.open("https://gparted.org/");');
                    newToolBTNo.setAttribute('id', 'new-os-tool-open');
                    document.getElementById('new-os-actions').appendChild(newToolBTNo);
                    document.getElementById('new-os-tool-open').innerHTML = 'Website';
                } else {
                    document.getElementById('new-os-tool-open').setAttribute('onclick', 'window.open("https://gparted.org/");');
                }
                document.getElementById('new-os-tool').classList.remove('hided');
            } else if (Systemicon == 'unknown.png') {
                return;
            }
        } else {
            return;
        }
    }
    if (OStool1 != null) {
        console.log('Fixing OS tools')
        if (Systemicon == 'windows.png') {
            OStool1.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1MSIgaGVpZ2h0PSIxOTQyIiB2aWV3Qm94PSIwIDAgMTI1MSAxOTQyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGZpbGxSdWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0yMzUuOTEgMTMzMy41NmM1My41NCAzMi44NiA3ODYuMiA0ODQuMjYgNzg2LjIgNDg0LjI2czc2LjYyIDYwIDE1My44MyAyMi43OWM3Ny4yMS0zNy4yMSA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTRjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42Mi03NDMuNDgtNDU4LjYycy02Mi4yOS00OS4yNy0xMzYuNzMtMTcuMDlDMTYxLjQ3IDQ0LjAxIDE1OSAxMTUuNTIgMTU5IDEzNC4zMnYxMDc4LjE0Yy41MiAxNi4yNSAyLjQzIDM3LjgxIDguNTUgNDkuODkgMTAuNjggMjEuMDkgMTQuODIgMzguMzUgNjguMzYgNzEuMjF6TTQ4NyA0ODcuMzdsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNDg3LjM3eiIgZmlsbD0iIzI2QUJGRiIvPgogICAgPHBhdGggZD0iTTAgMTI5OS4zN2MuNTIgMTYuMjUgMi40MyAzOS4yIDguNTUgNTEuMjcgMTAuNjggMjEuMSAxNC44MiAzOC4zNiA2OC4zNiA3MS4yMnM3ODYuMiA0ODQuMjUgNzg2LjIgNDg0LjI1IDc2LjYyIDYwLjA2IDE1My44MyAyMi43OWM3Ny4yMS0zNy4yNyA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTVjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42LTc0My40OC00NTguNlMxNTEuMzUgNjggNzYuOTEgMTAwLjEyIDAgMjAzLjgyIDAgMjIyLjYxdjEwNzYuNzZ6bTMyNy03MjMuNzFsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNTc1LjY2eiIgZmlsbD0iI0Y1MDA0OSIvPgogIDwvZz4KPC9zdmc+Cg==';
            OStool2.src = 'https://1.bp.blogspot.com/-Lu-J0GQDC4E/X6AuK8qJKpI/AAAAAAAAXSc/ZqwKNtiBLg894r8sBu1iHbQbKNCI_NGpwCLcBGAsYHQ/s680/Softwareanddriver.com%2B-%2BTeraCopy%2B2021%2BFree%2BDownload.png';
            OStool3.src = 'https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj';
            OStool4.src = 'https://static.techspot.com/images2/downloads/topdownload/2014/05/ImgBurn_logo.png';
            OStool5.src = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Rufus-logo.png';
            OStool6.src = 'https://m.media-amazon.com/images/I/51vAzs+BboS._SL1280_.jpg';
        } else if (Systemicon == 'iOS') {
            OStool1.src = 'https://play-lh.googleusercontent.com/xQ-meXSBylIU8VKA7yUQXDwRu99JX8ic7mAsM4sBidjRgtMyhBDmYD4CpATqrdc1SA';
            OStool2.src = 'https://play-lh.googleusercontent.com/VYvJqGnrQiKkbbyLyMeiL-GM3go4tBIA64uVEGQazLXD4p_M3F45kHyt42o_6d5VXA';
            OStool3.src = 'https://store-images.s-microsoft.com/image/apps.22864.13510798886416455.269db5cf-0e75-4d82-8a6c-5ddabb31c6ef.87c84f5b-d52a-462f-8f13-2a572fb562f0?mode=scale&q=90&h=200&w=200&background=%2300aff0';
            OStool4.src = 'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/47/1b/e6/471be650-72d1-6b36-ee35-8dce3e0042ea/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png';
            OStool5.src = 'https://play-lh.googleusercontent.com/ipvfgPBRcDz7Btg9YtlWYHRo05BdTt6WAB-gm2B6b-57PGRX6oAWv940Sp3JHVuMJA';
            OStool6.src = 'https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/db/0e/de/db0edee4-6f6b-ebdb-8d69-23f0b98bed80/AppIcon-green-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png';
        } else if (Systemicon == 'MacOS') {
            OStool1.src = 'https://www.pcprofessionale.it/wp-content/uploads/2019/04/GIMP.png';
            OStool2.src = 'https://www.aranzulla.it/wp-content/contenuti/2021/10/s7Y6171SZdygc0-1200x628.jpg';
            OStool3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png';
            OStool4.src = 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk';
            OStool5.src = 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/04/9a/1a/049a1aec-9b8f-4810-f8c6-0d0446e87cf1/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/1200x630bb.png';
            OStool6.src = 'https://tecnolocura.es/wp-content/uploads/2020/10/GOG-Galaxy-2.0-para-todos-tus-juegos-en-un-solo-lugar-tecnolocura-2.jpg';
        } else if (Systemicon == 'android.png') {
            OStool1.src = 'https://play-lh.googleusercontent.com/Tv3h9IHUliBayyGRxcmzOICwPGfbB8M-rnHDpzMlGM5YPS_-LytZO6GccsVPszse2Zqr';
            OStool2.src = 'https://play-lh.googleusercontent.com/yeB9XKBeHfHChSDwjsFztdBYY-jcdgUpVQwtahFE6AeoKhKHowZMm9wJ4-W8VvML2w';
            OStool3.src = 'https://media.cdnandroid.com/item_images/1051630/imagen-weward-gagnez-en-marchant-0thumb.jpg';
            OStool4.src = 'https://play-lh.googleusercontent.com/PioDUVeFbkSbenRZxrKoUErvC9hEQksRRQhtp39vytQtGXgjpIkZqu1ScJy-MoRUAAE=s180-rw';
            OStool5.src = 'https://lh3.googleusercontent.com/xqXWCwIrCqiAH0eGPa5EA2Xx2Onr24wE_jQPBKcc1NCJI9SZmg9eBIFyQqLo_UWxeXw';
            OStool6.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1MSIgaGVpZ2h0PSIxOTQyIiB2aWV3Qm94PSIwIDAgMTI1MSAxOTQyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGZpbGxSdWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0yMzUuOTEgMTMzMy41NmM1My41NCAzMi44NiA3ODYuMiA0ODQuMjYgNzg2LjIgNDg0LjI2czc2LjYyIDYwIDE1My44MyAyMi43OWM3Ny4yMS0zNy4yMSA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTRjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42Mi03NDMuNDgtNDU4LjYycy02Mi4yOS00OS4yNy0xMzYuNzMtMTcuMDlDMTYxLjQ3IDQ0LjAxIDE1OSAxMTUuNTIgMTU5IDEzNC4zMnYxMDc4LjE0Yy41MiAxNi4yNSAyLjQzIDM3LjgxIDguNTUgNDkuODkgMTAuNjggMjEuMDkgMTQuODIgMzguMzUgNjguMzYgNzEuMjF6TTQ4NyA0ODcuMzdsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNDg3LjM3eiIgZmlsbD0iIzI2QUJGRiIvPgogICAgPHBhdGggZD0iTTAgMTI5OS4zN2MuNTIgMTYuMjUgMi40MyAzOS4yIDguNTUgNTEuMjcgMTAuNjggMjEuMSAxNC44MiAzOC4zNiA2OC4zNiA3MS4yMnM3ODYuMiA0ODQuMjUgNzg2LjIgNDg0LjI1IDc2LjYyIDYwLjA2IDE1My44MyAyMi43OWM3Ny4yMS0zNy4yNyA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTVjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42LTc0My40OC00NTguNlMxNTEuMzUgNjggNzYuOTEgMTAwLjEyIDAgMjAzLjgyIDAgMjIyLjYxdjEwNzYuNzZ6bTMyNy03MjMuNzFsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNTc1LjY2eiIgZmlsbD0iI0Y1MDA0OSIvPgogIDwvZz4KPC9zdmc+Cg==';
        } else if (Systemicon == 'linux.png') {
            OStool1.src = 'https://www.pcprofessionale.it/wp-content/uploads/2019/04/GIMP.png';
            OStool2.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1MSIgaGVpZ2h0PSIxOTQyIiB2aWV3Qm94PSIwIDAgMTI1MSAxOTQyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGZpbGxSdWxlPSJub256ZXJvIiBmaWxsPSJub25lIj4KICAgIDxwYXRoIGQ9Ik0yMzUuOTEgMTMzMy41NmM1My41NCAzMi44NiA3ODYuMiA0ODQuMjYgNzg2LjIgNDg0LjI2czc2LjYyIDYwIDE1My44MyAyMi43OWM3Ny4yMS0zNy4yMSA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTRjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42Mi03NDMuNDgtNDU4LjYycy02Mi4yOS00OS4yNy0xMzYuNzMtMTcuMDlDMTYxLjQ3IDQ0LjAxIDE1OSAxMTUuNTIgMTU5IDEzNC4zMnYxMDc4LjE0Yy41MiAxNi4yNSAyLjQzIDM3LjgxIDguNTUgNDkuODkgMTAuNjggMjEuMDkgMTQuODIgMzguMzUgNjguMzYgNzEuMjF6TTQ4NyA0ODcuMzdsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNDg3LjM3eiIgZmlsbD0iIzI2QUJGRiIvPgogICAgPHBhdGggZD0iTTAgMTI5OS4zN2MuNTIgMTYuMjUgMi40MyAzOS4yIDguNTUgNTEuMjcgMTAuNjggMjEuMSAxNC44MiAzOC4zNiA2OC4zNiA3MS4yMnM3ODYuMiA0ODQuMjUgNzg2LjIgNDg0LjI1IDc2LjYyIDYwLjA2IDE1My44MyAyMi43OWM3Ny4yMS0zNy4yNyA3NC4wNi0xMTIuNjEgNzQuMDYtMTIyLjQ5di05OTdzMi44NS01OS44Mi0yMi43OS0xMTMuOTVjLTI4LjkxLTYxLTY4LjI3LTkzLjM2LTExMS4wOS0xMTkuNjQtNDIuODItMjYuMjgtNzQzLjQ4LTQ1OC42LTc0My40OC00NTguNlMxNTEuMzUgNjggNzYuOTEgMTAwLjEyIDAgMjAzLjgyIDAgMjIyLjYxdjEwNzYuNzZ6bTMyNy03MjMuNzFsNDM2IDI2Ny44N3Y2MDdsLTQzNi0yNjVWNTc1LjY2eiIgZmlsbD0iI0Y1MDA0OSIvPgogIDwvZz4KPC9zdmc+Cg==';
            OStool3.src = 'https://it.wizcase.com/wp-content/uploads/2020/05/Audacity-logo.jpg';
            OStool4.src = 'https://cdn.neow.in/news/images/uploaded/2016/08/1472576721_openshot_story.jpg';
            OStool5.src = 'https://www.geekoo.it/wp-content/uploads/2016/06/Libre-Office.png';
            OStool6.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Faenza-gparted.svg/1200px-Faenza-gparted.svg.png';
        }
    }
    function AddStoreApp(id, name, desc, titles, icon) {
        console.log('Adding Store App...');
        document.getElementById('new-shop-empty').classList.add('hided');
        document.getElementById('new-shop-apps').classList.remove('hided');
        if (icon == null || icon.length < 1 || icon == 'undefined') icon = 'https://xcenter.netlify.app/assets/media/app.png';
        if (name == null || name.length < 1 || name == 'undefined') name = 'Unknown';
        if (titles == null || titles.length < 1 || titles == 'undefined') titles = name;
        if (desc == null || desc.length < 1 || desc == 'undefined') desc = 'No Desc Provided';
        if (id == null || id.length <= 0) return;
        if (document.getElementById(id) != null) return false;
        var storeApp = document.createElement('div');
        storeApp.setAttribute("id", id);
        storeApp.setAttribute("class", "new-shop-card");
        storeApp.setAttribute("onclick", 'location.href = "/shop/app/?id=' + id + '";');
        document.getElementById("new-shop-apps").appendChild(storeApp);
        document.getElementById(id).innerHTML = "<titles class='hided'>" + titles + "</titles>\n<img src='" + icon + "' alt=''>\n<h3>" + name + "</h3>\n<p>" + desc + "</p>";
        console.log('Store App Added')
    }
    function StoreProcessApp(input) {
        var tempElement = document.createElement('div');
        tempElement.innerHTML = input;
        StoreProcessAppAfter();
        function StoreProcessAppAfter() {
            console.log('Processing App...')
            var Packs = tempElement.querySelector('apps').innerText || tempElement.querySelector('apps').textContent;
            var ProcessedAppID = tempElement.querySelector('id').innerText || tempElement.querySelector('id').textContent;
            fetch('https://raw.githubusercontent.com/X-Center2022/X-StoreAPPS/release/' + ProcessedAppID + '.app').then(response => response.text()).then(data => {
                localStorage.removeItem('getTxtTMP');
                localStorage.setItem('getTxtTMP', data);
                var newAppContent = localStorage.getItem('getTxtTMP');
                var tempElementID = document.createElement('div');
                tempElementID.innerHTML = newAppContent;
                var ProcessedAppNAME = tempElementID.querySelector('name').innerHTML;
                var ProcessedAppDESC = tempElementID.querySelector('desc').innerHTML;
                var ProcessedAppTT = tempElementID.querySelector('titles').innerHTML;
                var ProcessedAppICON = tempElementID.querySelector('icon').innerHTML;
                if (ProcessedAppNAME == null || ProcessedAppNAME.length < 1) ProcessedAppNAME = 'Unknown';
                if (ProcessedAppDESC == null || ProcessedAppDESC.length < 1) ProcessedAppDESC = 'No Desc Provided';
                if (ProcessedAppTT == null || ProcessedAppTT.length < 1) ProcessedAppTT = ProcessedAppNAME;
                if (ProcessedAppICON == null || ProcessedAppICON.length < 1) ProcessedAppICON = 'https://xcenter.netlify.app/assets/media/app.png';
                var id = tempElement.querySelector('id');
                var name = tempElementID.querySelector('name');
                var desc = tempElementID.querySelector('desc');
                var title = tempElementID.querySelector('titles');
                var icon = tempElementID.querySelector('icon');
                Packs = --Packs;
                AddStoreApp(ProcessedAppID, ProcessedAppNAME, ProcessedAppDESC, ProcessedAppTT, ProcessedAppICON);
                id.parentNode.removeChild(id);
                name.parentNode.removeChild(name);
                desc.parentNode.removeChild(desc);
                title.parentNode.removeChild(title);
                icon.parentNode.removeChild(icon);
                if (Packs > 0) StoreProcessAppAfter();
                localStorage.removeItem('getTxtTMP')
            });
        }
    }
    if (location.href.indexOf('/shop/') != -1) {
        fetch('https://raw.githubusercontent.com/X-Center2022/X-StoreAPPS/release/apps.apl').then(response => response.text()).then(data => {StoreProcessApp(data)});
    }
    console.log('All Scripts Executed Succeffully!');
} else {
    console.log('Running On External Page / Old Version');
}
console.log('Code Execution Ended Succeffully!')