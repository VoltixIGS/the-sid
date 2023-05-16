import ConsoleTyper from './dist/console-typer.js';

function start() {
    
    const consoleTyper = buildConsoleType(30, "console1");
    consoleTyper.startTyping();
}

function buildConsoleType(typingSpeedMs, className) {
    const consoleTyper = new ConsoleTyper({
        loop: false,
        cursor: " ",
        typingSpeedMs: typingSpeedMs,
        onStopTyping: () => {
            var obj = document.getElementsByClassName(className)[0];
            var stringDelay = obj.id.split(" ")[0] * 1;
            var stringCharDelay = obj.id.split(" ")[1] * 1;
            handleStopTyping(className, stringDelay, stringCharDelay);
        },
        paragraphElement: document.getElementsByClassName(className)[0]
    });
    return consoleTyper;
}

function handleStopTyping(className, delay, charDelay) {

    setTimeout(() => {  
        try { 
            var classId = className.slice(7);
            var classIdNumber = classId * 1;
            var classIdNumberPlus = classIdNumber + 1;

            var classString = "console" + classIdNumberPlus;

            var obj = document.getElementsByClassName(classString)[0];
            obj.style.display = "inline-block";
                
            console.log(classString + " " + delay);
            const consoleTyper = buildConsoleType(charDelay, classString);
            consoleTyper.startTyping();
        } catch (TypeError) { 
            var obj = document.getElementsByClassName("back")[0];
            obj.style.display = "inline-block";
        }
    }, delay);  
    
}

document.addEventListener("DOMContentLoaded", function(event) { 
    start();
});