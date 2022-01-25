//RULES:
//Do NOT translate the NavBar
//Do NOT insert bad things
//Do NOT edit other translations
//ALWAYS follow the scheme
//Thanks :)
var userLang = navigator.language;
if (userLang.indexOf("it") != -1) {
    //ITALIAN TRANSLATION: DIFFERENT-TEXTS
    document.getElementById('text-PAGENAME-TEXTNAME').innerHTML = "TRADUZIONE";
    //ITALIAN TRANSLATION: COMMON-TEXTS
    document.getElementById('commontext-CONTENT').innerHTML = "TRADUZIONE";
} else if (userLang.indexOf("en") != -1) {
    //ENGLISH TRANSLATION: DIFFERENT-TEXTS
    document.getElementById('text-PAGENAME-TEXTNAME').innerHTML = "TRANSLATION";
    //ENGLISH TRANSLATION: COMMON-TEXTS
    document.getElementById('commontext-CONTENT').innerHTML = "TRANSLATION";
} else if (userLang.indexOf("fr") != -1) {
    //FRENCH TRANSLATION: DIFFERENT-TEXTS
    document.getElementById('text-PAGENAME-TEXTNAME').innerHTML = "TRADUCTION";
    //FRENCH TRANSLATION: COMMON-TEXTS
    document.getElementById('commontext-CONTENT').innerHTML = "TRADUCTION";
} else if (userLang.indexOf("es") != -1) {
    //ESPAÑOL TRANSLATION: DIFFERENT-TEXTS
    document.getElementById('text-PAGENAME-TEXTNAME').innerHTML = "TRADUCCIÓN";
    //ESPAÑOL TRANSLATION: COMMON-TEXTS
    document.getElementById('commontext-CONTENT').innerHTML = "TRADUCCIÓN";
}