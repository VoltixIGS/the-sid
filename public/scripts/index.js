import ConsoleTyper from './dist/console-typer.js';

function start() {
    
    const consoleTyper = new ConsoleTyper({
        loop: false,
        cursor: "_",
        typingSpeedMs: 30,
        onStopTyping: () => {
            var buttons = document.getElementById("buttons");
            buttons.style.display = "block";
        },
        paragraphElement: document.getElementsByClassName('test')[0]
    });
    consoleTyper.startTyping();
}

document.addEventListener("DOMContentLoaded", function(event) { 
    start();
});