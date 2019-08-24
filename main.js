// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

function myFunction() {
  document.body.style.backgroundImage = "url('img/afternoon.jpg')";
}

function myFunction1() {
  document.body.style.backgroundImage = "url('img/Morning.jpg')";
}

// Show time
function showTime() {
  /* modified the time
  let today = new Date(2019, 06, 10, 20, 33, 30),
  */
  // Current Time
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Output the Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}<span></span>`;

  setTimeout(showTime, 1000);
}

// Add The Number Zero to the timeCounter (0-9)
function addZero(o) {
  return (parseInt(o, 10) < 10 ? "0" : "") + o;
}

// Set Background + Greeting
function setBgGreeting() {
  /* This code will let you change the background when you adjust the time
  let today = new Date(2019, 06, 1, 16, 33, 30),
  */
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.background = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.background = "url('../img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    // Evening
    document.body.style.background = "url('../img/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure that "enter" is pressed
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure that "enter" is pressed
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

//storing this into the local server.
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreeting();
getName();
getFocus();
