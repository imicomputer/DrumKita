let drumKits = document.querySelectorAll(".drum");
let audio = new Audio();

for (let i=0; i < drumKits.length; i++) {
    drumKits[i].addEventListener(
        "click"
        , function () {
            let buttonPressed = this.innerHTML;
            makeSound(buttonPressed);
        }
    );
}

document.addEventListener(
    "keypress"
    , function(event) {
        let registeredKeys = "wsadjkl";
        let keyPressed = event.key.toLowerCase();
        console.log("Key Pressed: " + keyPressed);

        if (registeredKeys.indexOf(keyPressed) >= 0) {
            // simulateClick(document.getElementsByClassName(keyPressed));
            makeSound(keyPressed);
        }
    }
);

function simulateClick(element) {
    const event = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    // const cb = document.getElementById("checkbox");
    // const cancelled = !cb.dispatchEvent(event);
    const cancelled = !element.dispatchEvent(event);
  
    // if (cancelled) {
    //   // A handler called preventDefault.
    //   alert("cancelled");
    // } else {
    //   // None of the handlers called preventDefault.
    //   alert("not cancelled");
    // }
  }
  
  function makeSound(keyPressed) {
    let audio = new Audio();

    switch (keyPressed.toLowerCase()) {
        case "w":
            audio.src = "./sounds/crash.mp3";
            audio.play();
            break;
        case "s":
            audio.src = "./sounds/snare.mp3";
            audio.play();
            break;
        case "a":
            audio.src = "./sounds/kick.mp3";
            audio.play();
            break;
        case "d":
            audio.src = "./sounds/tom1.mp3";
            audio.play();
            break;
        case "j":
            audio.src = "./sounds/tom2.mp3";
            audio.play();
            break;
        case "k":
            audio.src = "./sounds/tom3.mp3";
            audio.play();
            break;
        case "l":
            audio.src = "./sounds/tom4.mp3";
            audio.play();
            break;
    
        default:
            break;
    }
    audio = undefined;
}