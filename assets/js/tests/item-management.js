var variable = localStorage.getItem("item");
if (variable == "null") {variable = "Unsetted.";}
function cusItem() {
    var customText = window.prompt("Insert the value.");
    localStorage.setItem("item", customText);
    alert("Set value to " + customText + ".");
    location.reload();
    return false;
}
function setItem() {
    localStorage.setItem("item", "Setted.")
    alert("The value has been set.")
    location.reload();
    return false;
}
function delItem() {
    localStorage.removeItem("item");
    alert("The value has been removed.")
    location.reload();
    return false;
}
function getItem() {
    alert(variable);
}