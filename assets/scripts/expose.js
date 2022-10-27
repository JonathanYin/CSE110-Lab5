// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // var vol = document.getElementById("volume");
  // var audio = document.getElementsByClassName("hidden");
  // var play_Btn = document.querySelector("button");
  // // console.log(vol);
  // // console.log(audio);
  
  // vol.addEventListener("change", function(e) {
  //   audio.volume = e.currentTarget.value / 100;
  // })
  
  // buttons.forEach(button => {
  //   button.addEventListener("click", () => {
  //     console.log("hello");
  //     audio.play();
  //   });
  // });
  const parentDOM = document.getElementById("expose");

  const selectElement = document.getElementById("horn-select");
  // horn selector
  const slider = document.getElementById("volume");
  // volume slider

  const img = document.querySelector("img"); 
  // horn image

  const volControl = document.getElementById("volume-controls");
  const vol = volControl.querySelector("img");
  // volume image

  const audio = document.getElementsByClassName("hidden");

  selectElement.addEventListener("change", (event) => {
    // change horn image and audio file
    if (event.target.value == "air-horn") {
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }

    if (event.target.value == "car-horn") {
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }

    if (event.target.value == "party-horn") {
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    
  });

  slider.addEventListener("change", (event) => {
    // change volume
    if (event.target.value == 0){
      vol.src = "assets/icons/volume-level-0.svg";
    }
    else if (event.target.value >= 1 && event.target.value < 33){
      vol.src = "assets/icons/volume-level-1.svg";
    }
    else if (event.target.value >= 33 && event.target.value < 67){
      vol.src = "assets/icons/volume-level-2.svg";
    }
    else if (event.target.value >= 67){
      vol.src = "assets/icons/volume-level-3.svg";
    }
  });
}
