"use strict";
// create an object 
exports.__esModule = true;
var obj = {
    color: "red",
    engine: 100
};
console.log("Plain OBJECT creation . Printing the property engine as --> " + obj.engine);
var maruti = {
    make: "maruti",
    color: "brown",
    engine: 100,
    camera: true
};
var kia = {
    make: "kia",
    color: "red",
    engine: 500
};
validateInterfaceVehicle(maruti);
validateInterfaceVehicle(kia);
function validateInterfaceVehicle(carModel) {
    console.log("validateInterfaceVehicle() is called for " + carModel.make);
    console.log("Color of Car is --> " + carModel.color);
    console.log("Engine of Car is --> " + carModel.engine);
}
