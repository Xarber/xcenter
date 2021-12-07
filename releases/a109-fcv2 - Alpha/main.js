//Mobile Navigation
function openNav() {
    document.getElementById('body').style.overflow = "hidden";
    document.getElementById('mobileNavigation').style.display = "none";
    document.getElementById('mobileNavigationSheet').style.top = "170px";
    document.getElementById('closeNav').style.display = 'block';
}

function closeNav() {
    document.getElementById('body').style.overflow = "visible";
    document.getElementById('mobileNavigation').style.display = "block";
    document.getElementById('mobileNavigationSheet').style.top = "2000px";
    document.getElementById('closeNav').style.display = 'none';
}

//Copyright
var date = new Date();
var year = date.getFullYear();
var copy = '<p>&copy; ' + year + ' Ross Ochs &bull; Rochester, NY</p>';

var copyright = document.getElementById("copyright");
copyright.innerHTML = copy;