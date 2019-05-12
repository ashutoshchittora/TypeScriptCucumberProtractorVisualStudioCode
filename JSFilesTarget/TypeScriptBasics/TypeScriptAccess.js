"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 'import' in TS = 'require' in JS
const TypeScriptClassDemo_1 = require("./TypeScriptClassDemo");
let typeClassAccess = new TypeScriptClassDemo_1.TypeScriptClassDemo(454545);
typeClassAccess.setUserName("hello i am coming  from TypeScriptAccess class");
console.log(typeClassAccess.getUserName());
console.log(typeClassAccess.getSsn());
// no return function
function validateNoReturnFunction(valueTest) {
    console.log("validateNoReturnFunction() --> " + valueTest);
}
validateNoReturnFunction("hello Automator");
// return function
function validateReturnFunction(valueTestReturn) {
    return valueTestReturn + 7;
}
console.log("validateReturnFunction() --> " + validateReturnFunction(12));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZVNjcmlwdEFjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1R5cGVTY3JpcHRCYXNpY3MvVHlwZVNjcmlwdEFjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQywrREFBMkQ7QUFDM0QsSUFBSSxlQUFlLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0RCxlQUFlLENBQUMsV0FBVyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRXRDLHFCQUFxQjtBQUNyQixTQUFTLHdCQUF3QixDQUFDLFNBQWdCO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEdBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUVELHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFNUMsa0JBQWtCO0FBQ2xCLFNBQVMsc0JBQXNCLENBQUMsZUFBc0I7SUFDbEQsT0FBTyxlQUFlLEdBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMifQ==