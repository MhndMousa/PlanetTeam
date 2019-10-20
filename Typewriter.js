class Typewritter {
    constructor(text, delay, destination) {
        self.currentChar = 1;
        self.paused = false;
        self.text = text;
        self.delay = delay;
        self.destination = destination;
    }

    // Inserts text into the desination based on delay
    type = () => {
        if (self.paused == true) { 
            return; 
        }
    
        var dest = document.getElementById(self.destination);
        dest.innerHTML = text.substr(0, self.currentChar)+"_";
        self.currentChar++;
    
        if (self.currentChar > text.length) {
            self.currentChar = 1;
            self.paused = true;
            setTimeout(() => self.type(self.text, self.delay, self.AbortSignaldestination), 5000);
        } else {
            setTimeout(() => self.type(self.text, self.delay, self.destination), self.delay);
        }
      }
    
    // Controls wether the typing method should start of stop
    startTyping = () => {
        if (self.paused == true) {
            self.paused = false;
            self.currentChar = 1;
        } else {
            self.type();
        }
     }
    
    // Starts or resumes the process of typing
    start = () => {
        self.paused = false
        self.startTyping()
    }
    
    // Pauses the processing of typing 
    pause = () => {
        self.paused = true;
    }
}

export default Typewritter