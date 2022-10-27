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
  const selectElement = document.getElementById("horn-select");
  const parentDOM = document.getElementById("expose");
  const img = document.querySelector("img"); 
  const audio = document.getElementsByClassName("hidden");

  console.log(img);
  console.log("hello");
  console.log(selectElement);

  selectElement.addEventListener("change", (event) => {
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

}

function changeVolume() {
  
}