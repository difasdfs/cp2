// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "itcrisbar" && password == "passwordit") {
        alert("Login berhasil");
        window.location = "Page-2.html"; // Redirecting to other page.
        return false;
    }
    else {
        alert("Username atau password salah");
    }
}