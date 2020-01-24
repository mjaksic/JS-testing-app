const assert = require("chai").assert;
/** Import simple App class */
const App = require("./../zad1");

let coffee = 10,
  water = 35,
  coffeeLow = 1,
  waterLow = 10,
  machineStatus = false;

describe("CoffeeMachine Class unit test: ", function() {
  describe("turnMachineOn", function() {
    let testApp = new App(coffee, water, machineStatus);
    it("turnMachineOn mora vratiti true", function() {
      assert.isTrue(testApp.turnMachineOn());
    });
    it("turnMachineOn then turnMachineoff", function() {
      assert.isTrue(testApp.turnMachineOn());
      assert.isFalse(testApp.turnMachineOff());
    });
  });
  describe("turnMachineOff", function() {
    let testApp = new App(coffee, water, machineStatus);
    it("turnMachineOff mora vratiti false", function() {
      assert.isFalse(testApp.turnMachineOff());
    });
  });
  describe("turnMachineOff then turnMachineOn", function() {
    let testApp = new App(coffee, water, !machineStatus);
    it("turnMachineOff mora vratiti false", function() {
      assert.isFalse(testApp.turnMachineOff());
      assert.isTrue(testApp.turnMachineOn());
    });
  });
  describe("refill()", function() {
    let testApp = new App(coffee, water, machineStatus);
    it("refill() mora vratiti 200", function() {
      let testStatus = testApp.refill(5, 3);
      assert.equal(testStatus, 200);
    });
    it("vraca error ako je ilegalan tip", function() {
      assert.throws(() => {
        testApp.refill("a", "b");
      }, Error);
    });
  });
  describe("makeCoffee()", function() {
    it("Dovoljno sastojaka", function() {
      let testApp = new App(coffee, water, machineStatus);
      assert.equal(testApp.makeCoffee(), "Making coffee !");
    });
    it("Nedovoljno sastojaka", function() {
      let testApp = new App(coffeeLow, waterLow, machineStatus);
      assert.equal(testApp.makeCoffee(), "Not enough ingredients !");
    });
  });
});
