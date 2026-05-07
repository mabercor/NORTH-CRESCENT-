const params = new URLSearchParams(window.location.search);

const client = params.get("client");

const welcome = document.getElementById("clientWelcome");

if (client && welcome) {

  welcome.innerText = `Welcome ${client}`;

}
