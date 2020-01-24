class LedRing {
  constructor(ledNumber, timeOut, powerStatus) {
    this.ledNumber = ledNumber;
    this.timeOut = timeOut;
    this.powerStatus = powerStatus;
    this.currentLed = [];
    this.isFilled = false;
  }

  CheckFill() {
    if (this.isFilled === false) {
      this.FillArrayOfLeds();
      this.isFilled = true;
      return true;
    } else return true;
  }

  TurnOn() {
    this.CheckFill();
    if (this.powerStatus === false) {
      this.powerStatus = true;
      for (let i = 0; i < this.ledNumber; i++) {
        this.currentLed[i].powerStatus = this.powerStatus;
      }
      return this.powerStatus;
    }
    return this.powerStatus;
  }

  TurnOff() {
    this.CheckFill();
    if (this.powerStatus === true) {
      this.powerStatus = false;
      for (let i = 0; i < this.ledNumber; i++) {
        this.currentLed[i].powerStatus = this.powerStatus;
      }
      return this.powerStatus;
    }
    return this.powerStatus;
  }

  CycleAllLights() {
    this.CheckFill();
    for (let i = 0; i < this.timeOut; i++) {
      if (this.powerStatus === false) {
        let delay = this.timeOut;
        this.TurnOn();
        setTimeout(function() {}, delay);
        this.TurnOff();
      } else {
        this.TurnOff();
        let delay = this.timeOut;
        this.TurnOff();
        setTimeout(function() {}, delay);
        this.TurnOn();
      }
    }
    return "All done !";
  }

  FlowLights() {
    this.CheckFill();
    this.TurnOff();
    for (let i = 0; i < this.timeOut * 1000; i++) {
      for (let j = 0; j < this.ledNumber; j++) {
        if (j === 0) {
          this.currentLed[j].powerStatus = true;
        } else {
          this.currentLed[j - 1].powerStatus = false;
          this.currentLed[j].powerStatus = true;
        }
      }
    }
    this.TurnOff();
    return "All done !";
  }

  FillArrayOfLeds() {
    for (let i = 0; i < this.ledNumber; i++) {
      this.currentLed[i] = { address: "0x" + i, powerStatus: this.powerStatus };
    }
    return "LED arrays populated !";
  }
}
module.exports = LedRing;
