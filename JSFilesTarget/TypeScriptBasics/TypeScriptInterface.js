"use strict";
// create an object 
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    color: "red",
    engine: 100,
};
console.log("Plain OBJECT creation . Printing the property engine as --> " + obj.engine);
let maruti = {
    make: "maruti",
    color: "brown",
    engine: 100,
    camera: true
};
let kia = {
    make: "kia",
    color: "red",
    engine: 500,
};
validateInterfaceVehicle(maruti);
validateInterfaceVehicle(kia);
function validateInterfaceVehicle(carModel) {
    console.log("validateInterfaceVehicle() is called for " + carModel.make);
    console.log("Color of Car is --> " + carModel.color);
    console.log("Engine of Car is --> " + carModel.engine);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZVNjcmlwdEludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1R5cGVTY3JpcHRCYXNpY3MvVHlwZVNjcmlwdEludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9COztBQUVwQixJQUFJLEdBQUcsR0FDUDtJQUNJLEtBQUssRUFBRyxLQUFLO0lBQ2IsTUFBTSxFQUFHLEdBQUc7Q0FDZixDQUFBO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsR0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFZdkYsSUFBSSxNQUFNLEdBQ1Y7SUFDSSxJQUFJLEVBQUcsUUFBUTtJQUNmLEtBQUssRUFBRyxPQUFPO0lBQ2YsTUFBTSxFQUFHLEdBQUc7SUFDWixNQUFNLEVBQUcsSUFBSTtDQUNoQixDQUFBO0FBRUQsSUFBSSxHQUFHLEdBQ1A7SUFDSSxJQUFJLEVBQUcsS0FBSztJQUNaLEtBQUssRUFBRyxLQUFLO0lBQ2IsTUFBTSxFQUFHLEdBQUc7Q0FDZixDQUFBO0FBRUQsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFOUIsU0FBUyx3QkFBd0IsQ0FBQyxRQUFnQjtJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxHQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6RCxDQUFDIn0=