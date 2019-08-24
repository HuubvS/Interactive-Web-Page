const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

// This is what the webbrowser will say back to you
const greetings = ["I am good, how about you?", "doing good", "leave me alone"];

const weather = [
  "It's a bit cloudy, bring an umbrella with you",
  "The weather is perfect go out and enjoy the sun"
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("voice is activated, you can speak to the microphone");
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoad(transcript);
};

// add the listener to the btn

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoad(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I don't know what you said";

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  if (message.includes("what is the weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  }

  speech.volume = 0.5;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
