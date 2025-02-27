let drumKits = document.querySelectorAll(".drum");

for (let i=0; i < drumKits.length; i++) {
    drumKits[i].addEventListener(
        "click"
        , function () {
            let buttonPressed = this.innerHTML;
            let audio;

            switch (buttonPressed) {
                case "w":
                    audio = new Audio("./sounds/crash.mp3");
                    audio.play();
                    break;
                case "s":
                    audio = new Audio("./sounds/snare.mp3");
                    audio.play();
                    break;
                case "a":
                    audio = new Audio("./sounds/kick.mp3");
                    audio.play();
                    break;
                case "d":
                    audio = new Audio("./sounds/tom1.mp3");
                    audio.play();
                    break;
                case "j":
                    audio = new Audio("./sounds/tom2.mp3");
                    audio.play();
                    break;
                case "k":
                    audio = new Audio("./sounds/tom3.mp3");
                    audio.play();
                    break;
                case "l":
                    audio = new Audio("./sounds/tom4.mp3");
                    audio.play();
                    break;
            
                default:
                    break;
            }
        }
    );
}

document.addEventListener(
    "keypress"
    , function(event) {
        let registeredKeys = "wsadjkl";
        let keyPressed = event.key;
        console.log("Key Pressed: " + keyPressed);

        if (registeredKeys.indexOf(keyPressed.toLowerCase()) >= 0) {
            simulateClick(document.getElementsByClassName(keyPressed));
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
    const cancelled = !element[0].dispatchEvent(event);
  
    // if (cancelled) {
    //   // A handler called preventDefault.
    //   alert("cancelled");
    // } else {
    //   // None of the handlers called preventDefault.
    //   alert("not cancelled");
    // }
  }
  