var AccountCreated = localStorage.getItem("Account");
var Account2Created = localStorage.getItem("Account2");
var Account3Created = localStorage.getItem("Account3");
var Logged = localStorage.getItem("AccountLogged")
var SecQuestion = localStorage.getItem("SecurityQuestion");
var XPageData = localStorage.getItem("XCenterPageData");
document.getElementById("SecurityQuestionInsert").innerHTML = SecQuestion;
if (Account3Created == "Registered") {
    alert("Account Complete");
}
function createAccount() {
    if (AccountCreated != "Registered") {
        var AccountCreated = "Registered";
        var useremail = document.getElementById("useremail");
        var username = document.getElementById("username");
        var password = document.getElementById("userpassword");
        var SecurityQuestion = document.getElementById("SecurityQuestion");
        var QuestionAnswer = document.getElementById("QuestionAnswer")
        localStorage.setItem("Account", AccountCreated);
        localStorage.setItem("AccountEmail", useremail);
        localStorage.setItem("AccountUser", username);
        localStorage.setItem("AccountPass", password);
        localStorage.setItem("AccountSecurityQuestion", SecurityQuestion);
        localStorage.setItem("AccountQuestionAnswer", QuestionAnswer);
        alert('Created account "' + username + '" with email "' + useremail + '".')
    } else if (Account2Created != "Registered") {
        var Account2Created = "Registered";
        var useremail2 = document.getElementById("useremail");
        var username2 = document.getElementById("username");
        var password2 = document.getElementById("userpassword");
        var SecurityQuestion2 = document.getElementById("SecurityQuestion");
        var QuestionAnswer2 = document.getElementById("QuestionAnswer")
        localStorage.setItem("Account2", Account2Created);
        localStorage.setItem("AccountEmail2", useremail2);
        localStorage.setItem("AccountUser2", username2);
        localStorage.setItem("AccountPass2", password2);
        localStorage.setItem("AccountSecurityQuestion2", SecurityQuestion2);
        localStorage.setItem("AccountQuestionAnswer2", QuestionAnswer2);
        alert('Created account "' + username + '" with email "' + useremail + '".')
    } else if (Account3Created != "Registered") {
        var Account3Created = "Registered";
        var useremail3 = document.getElementById("useremail");
        var username3 = document.getElementById("username");
        var password3 = document.getElementById("userpassword");
        var SecurityQuestion3 = document.getElementById("SecurityQuestion");
        var QuestionAnswer3 = document.getElementById("QuestionAnswer")
        localStorage.setItem("Account2", Account3Created);
        localStorage.setItem("AccountEmail2", useremail3);
        localStorage.setItem("AccountUser2", username3);
        localStorage.setItem("AccountPass2", password3);
        localStorage.setItem("AccountSecurityQuestion2", SecurityQuestion3);
        localStorage.setItem("AccountQuestionAnswer2", QuestionAnswer3);
        alert('Created account "' + username + '" with email "' + useremail + '".')
    }
}
function recoverAccount() {
    alert("Recovered")
}
function joinAccount() {
    alert("Joined")
}
function CodejoinAccount() {
    alert("JoinedCode")
}