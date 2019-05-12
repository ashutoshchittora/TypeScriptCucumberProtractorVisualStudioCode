"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeScriptClassDemo {
    /*constructor(){
      console.log("i am the constructor , i am called at class load and take the first preference ...");
    }*/
    constructor(ssnReceived) {
        this.Ssn = ssnReceived;
    }
    getUserName() {
        return this.username;
    }
    setUserName(userNameReceived) {
        this.username = userNameReceived;
    }
    getSsn() {
        return this.Ssn;
    }
}
exports.TypeScriptClassDemo = TypeScriptClassDemo;
//let typeClass = new TypeScriptClassDemo();
let typeClass = new TypeScriptClassDemo(123123);
typeClass.setUserName("hello i am coming  from TypeScriptClassDemo class");
console.log(typeClass.getUserName());
console.log(typeClass.getSsn());
function validateInterfaceVehicle(carModel) {
    console.log("validateInterfaceVehicle() is called for " + carModel.make);
    console.log("Color of Car is --> " + carModel.color);
    console.log("Engine of Car is --> " + carModel.engine);
}
let skoda = {
    make: "skoda",
    color: "blue",
    engine: 300,
};
// call below method outside of TypeScriptClassDemo
validateInterfaceVehicle(skoda);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZVNjcmlwdENsYXNzRGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1R5cGVTY3JpcHRCYXNpY3MvVHlwZVNjcmlwdENsYXNzRGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQWEsbUJBQW1CO0lBWTlCOztPQUVHO0lBRUQsWUFBWSxXQUFrQjtRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRVAsV0FBVztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUgsV0FBVyxDQUFDLGdCQUF1QjtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQS9CRCxrREErQkM7QUFFRCw0Q0FBNEM7QUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRCxTQUFTLENBQUMsV0FBVyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBTWhDLFNBQVMsd0JBQXdCLENBQUMsUUFBZ0I7SUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsR0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVELElBQUksS0FBSyxHQUNUO0lBQ0ksSUFBSSxFQUFHLE9BQU87SUFDZCxLQUFLLEVBQUcsTUFBTTtJQUNkLE1BQU0sRUFBRyxHQUFHO0NBQ2YsQ0FBQTtBQUNELG1EQUFtRDtBQUNuRCx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9