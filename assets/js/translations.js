var userLang = navigator.language;
if (userLang.indexOf("it") != -1) {
    document.getElementById('commontext-alsoexplore').innerHTML = "Assicurati di esplorare:";
    document.getElementById('commontext-gotop').innerHTML = "Torna all'inizio";


} else if (userLang.indexOf("en") != -1) {
    document.getElementById('commontext-alsoexplore').innerHTML = "Be sure to explore:";
    document.getElementById('commontext-gotop').innerHTML

} else if (userLang.indexOf("fr") != -1) {
    document.getElementById('commontext-CONTENT').innerHTML = "TRADUCTION";


} else if (userLang.indexOf("es") != -1) {
    document.getElementById('commontext-CONTENT').innerHTML = "TRADUCCIÓN";


}