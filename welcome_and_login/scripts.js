const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("submit-button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const user = username.value;
  const pass = password.value;
  if (user == "" | pass == ""){
    window.alert("Username and password are required.");
  }
  else if (pass != "welcome"){
    window.alert("Incorrect password.")
  }
  else{
    makeCookie("username", user);
    window.location.href="../welcome/welcome.html";
  }
}
)

function displayCookie(){
    console.log(document.cookie);

}

function makeCookie(cookie_title, cookie_val){
    document.cookie = cookie_title + "=" + cookie_val +";path=/";
}

function getCookie(cookie_title) {
  var name = cookie_title + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

function writeWelcomeMessage(){
    console.log(document.cookie);
    const name = getCookie("username");
    document.getElementById("welcome-landing").innerHTML = "Welcome, " + name;
}