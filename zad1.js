class CoffeeMachine {
  constructor(coffeeAmount, waterAmount, powerStatus) {
    this.coffeeAmount = coffeeAmount;
    this.waterAmount = waterAmount;
    this.powerStatus = powerStatus;
  }

  turnMachineOn() {
    if (this.powerStatus === false) {
      this.powerStatus = true;
      return this.powerStatus;
    }
    console.log("Machine is already turned on !");
    return this.powerStatus;
  }

  turnMachineOff() {
    if (this.powerStatus === true) {
      this.powerStatus = false;
      return this.powerStatus;
    }
    console.log("Machine is already turned off !");
    return this.powerStatus;
  }

  refill(coffee, water) {
    if (Number.isInteger(coffee) && Number.isInteger(water)) {
      this.coffeeAmount = coffee;
      this.waterAmount = water;
      console.log("Machine refilled !");
      return 200;
    }
    throw new Error("Illegal type");
  }

  makeCoffee() {
    if (this.coffeeAmount < 5 || this.waterAmount < 15) {
      return "Not enough ingredients !";
    } else {
      this.coffeeAmount -= 5;
      this.waterAmount -= 15;
      return "Making coffee !";
    }
  }
}

module.exports = CoffeeMachine;
