"use strict";
exports.__esModule = true;
var TypeScriptClassDemo = /** @class */ (function () {
    /*constructor(){
      console.log("i am the constructor , i am called at class load and take the first preference ...");
    }*/
    function TypeScriptClassDemo(ssnReceived) {
        this.Ssn = ssnReceived;
    }
    TypeScriptClassDemo.prototype.getUserName = function () {
        return this.username;
    };
    TypeScriptClassDemo.prototype.setUserName = function (userNameReceived) {
        this.username = userNameReceived;
    };
    TypeScriptClassDemo.prototype.getSsn = function () {
        return this.Ssn;
    };
    return TypeScriptClassDemo;
}());
exports.TypeScriptClassDemo = TypeScriptClassDemo;
//let typeClass = new TypeScriptClassDemo();
var typeClass = new TypeScriptClassDemo(123123);
typeClass.setUserName("hello i am coming  from TypeScriptClassDemo class");
console.log(typeClass.getUserName());
console.log(typeClass.getSsn());
function validateInterfaceVehicle(carModel) {
    console.log("validateInterfaceVehicle() is called for " + carModel.make);
    console.log("Color of Car is --> " + carModel.color);
    console.log("Engine of Car is --> " + carModel.engine);
}
var skoda = {
    make: "skoda",
    color: "blue",
    engine: 300
};
// call below method outside of TypeScriptClassDemo
validateInterfaceVehicle(skoda);
