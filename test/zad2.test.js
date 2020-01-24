const assert = require("chai").assert;
/** Import simple App class */
const App = require("./../zad2");

let powerStatus = false,
  ledNumber = 3,
  timeOut = 2;

describe("LedRing unit test: ", function() {
  describe("CheckFill() test", function() {
    it("CheckFill() vraća true", function() {
      let testApp = new App(ledNumber, timeOut, powerStatus);
      assert.isTrue(testApp.CheckFill());
    });
  });
  describe("Fill array test", function() {
    it("FillArrayOfLeds() mora popuniti objekt currentLed", function() {
      let testApp = new App(ledNumber, timeOut, powerStatus);
      assert.equal(testApp.FillArrayOfLeds(), "LED arrays populated !");
    });
  });
  describe("TurnOn() test", function() {
    it("TurnOn() mora vratiti true", function() {
      let testApp = new App(ledNumber, timeOut, powerStatus);
      assert.isTrue(testApp.TurnOn());
    });
    it("LedRing već upaljen", function() {
      let testApp = new App(ledNumber, timeOut, powerStatus);
      assert.isTrue(testApp.TurnOn());
      assert.isTrue(testApp.TurnOn());
    });
  });
  describe("turnOff() test", function() {
    it("turnOff() mora vratiti false", function() {
      let testApp = new App(ledNumber, timeOut, powerStatus);
      assert.isFalse(testApp.TurnOff());
    });
    it("LedRing već ugašen", function() {
      let testApp = new App(ledNumber, timeOut, powerStatus);
      assert.isFalse(testApp.TurnOff());
      assert.isFalse(testApp.TurnOff());
    });
  });
  describe("turnOff()->turnOn() // turnOn()->turnOff() LedRing test", function() {
    it("turnOff()->turnOn() mora vratiti true", function() {
      let testApp = new App(ledNumber, timeOut, powerStatus);
      assert.isFalse(testApp.TurnOff());
      assert.isTrue(testApp.TurnOn());
    });
    it("turnOn()->turnOff() mora vratiti false", function() {
      let testApp = new App(ledNumber, timeOut, powerStatus);
      assert.isTrue(testApp.TurnOn());
      assert.isFalse(testApp.TurnOff());
    });
  });
  describe("cycleAllLights() LedRing test", function() {
    it("cycleAllLights() mora vratiti -> All done !", function() {
      let testApp = new App(ledNumber, timeOut, true);
      assert.equal(testApp.CycleAllLights(), "All done !");
    });
    it("cycleAllLights() mora vratiti -> All done !", function() {
      let testApp = new App(ledNumber, timeOut, false);
      assert.equal(testApp.CycleAllLights(), "All done !");
    });
  });
  describe("flowLights() LedRing test", function() {
    it("flowLights() mora vratiti -> All done !", function() {
      let testApp = new App(ledNumber, timeOut, true);
      assert.equal(testApp.FlowLights(), "All done !");
    });
  });
});
