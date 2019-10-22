
class Typewriter {
    constructor(text, delay, destination) {
        this.currentChar = 1;
        this.paused = false;
        this.text = text;
        this.delay = delay;
        this.destination = destination;
    }

    // Inserts text into the desination based on delay
    type = () => {
        if (this.paused == true) { 
            return; 
        }
    
        var dest = document.getElementById(this.destination);
        dest.innerHTML = this.text.substr(0, this.currentChar)+"_";
        this.currentChar++;
    
        if (this.currentChar > text.length) {
            thsi.currentChar = 1;
            this.paused = true;
            setTimeout(() => this.type(this.text, this.delay, this.AbortSignaldestination), 5000);
        } else {
            setTimeout(() => this.type(this.text, this.delay, this.destination), this.delay);
        }
    }
    
    // Controls wether the typing method should start of stop
    startTyping = () => {
        if (this.paused == true) {
            this.paused = false;
            this.currentChar = 1;
        } else {
            this.type();
        }
    }
    
    // Starts or resumes the process of typing
    start = () => {
        console.log(this)
        this.paused = false
        this.startTyping()
    }
    
    // Pauses the processing of typing 
    pause = () => {
        this.paused = true;
    }
  };

  // Starts or resumes the process of typing
  start = () => {
    self.paused = false;
    self.startTyping();
  };

  // Pauses the processing of typing
  pause = () => {
    self.paused = true;
  };
}

export default Typewriter