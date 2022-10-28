// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO\
  const selector = document.getElementById("voice-select");
  const text = document.getElementById("text-to-speak");

  const synth = window.speechSynthesis;
  
  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
    
    const voices = speechSynthesis.getVoices();
    
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      selector.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  const talk = document.querySelector("button");
  talk.addEventListener("click", function() {
    const img = document.querySelector("img");
    console.log(img);
    if (selector.value == "select") {
      alert("select a voice");
    }
    else if (text.value == "") {
      alert("enter some text");
    }
    else {
      const utt = new SpeechSynthesisUtterance(text.value);
      utt.voice = synth.getVoices().filter(function(voice) {
        return voice.name + '(' + voice.lang + ')' == selector.value;
      })[0];

      synth.speak(utt);

      while (synth.speaking) {
        img.src = "assets/images/smiling-open.png";
      }
      utt.onend = function() {
        img.src = "assets/images/smiling.png";
      };
    }
  });
  
}