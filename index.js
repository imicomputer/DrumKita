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
        alert(document.querySelectorAll("." + event.key).innerHTML);
        // switch (event.key) {
        //     case "w":
                
        //         break;
        //     case "s":
            
        //         break;
        //     case "a":
                
        //         break;
        //     case "d":
                
        //         break;
        //     default:
        //         break;
        // }
    }
);