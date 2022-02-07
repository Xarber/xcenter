var Title = document.getElementById("title");
var Banner = document.getElementById("icon");
var Content = document.getElementById("content");
var NewsNumber = getParams('number', '-1');
if (NewsNumber == "0") {
    Title.innerHTML = "Welcome to the Nintendo eShop!";
    Banner.src = "/assets/media/blank.png";
    Content.innerHTML = "Hi! Welcome to the Nintendo eShop for the Wii U! <br><br> Here you can find some apps to buy or free download for your Wii U console. <br><br> Discover new innovative softwares, the most useful apps for your console, or just some forwarders. <br><br> Be sure to often come back to see the latest news! <br><br> Nintendo eShop team"
} else {
    Title.innerHTML = "Failed Loading."
    Content.innerHTML = "Sorry, but we were unable to load this page."
}