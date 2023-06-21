class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null;
    this.currentMilliseconds = 0; //bonus
    this.millisecondsIntervalId = 0; //bonus
  }

  start(printTimeCallback) {
   this.intervalId =  setInterval(() => {
      this.currentTime++;
      if(printTimeCallback) {
        printTimeCallback();
      }   
    }, 1000);
  }
// if statement protects the project from future bugs 


  getMinutes() {
  // possible to do: 
  //  let count = this.currentTime /60
  //  let minuteCount = Math.floor(count)
  // return minuteCount

// shortest way to do:
// return Math.floor(this.currentTime / 60); 

// Ironhhack solution: 
let currentTimeMin = Math.floor(this.currentTime / 60); 
console.log(currentTimeMin)
return currentTimeMin; 
}

  getSeconds() {
// is the shortest simplest way: 
// return Math.floor this.current % 60;

// Ironhack Solutions: 
let currentTimeSec = this.currentTime % 60;
return currentTimeSec;
}

  computeTwoDigitNumber(value) {

  // You can also do it this way:
  //  const toString = (digit) => {
  //    if(digit.length ===1) {
  //      return `0`+digit.slice(0)
  //    } else {
  //      return digit;
  //    }
  //  }; 
  //  return toString(string(value));

  // this is more a simple/easiest/shortest solution (Joshua): 
// if (value < 10) {
//  return "0" + value; }
//else {return value.toString(); }

// Ironhack Solution: 
const newValue = "0" + value; 
return newValue.slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
   // you can also add: 
   // clearInterval(this.millisecondsIntervalId); 
  }

  reset() {
    this.currentTime = 0; 
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getMinutes()); 
    let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds);
    return `${minutes}:${seconds}:${this.milliseconds}`;  
  }
}