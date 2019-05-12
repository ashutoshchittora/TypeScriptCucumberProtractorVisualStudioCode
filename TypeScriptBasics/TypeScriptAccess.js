"use strict";
exports.__esModule = true;
// 'import' in TS = 'require' in JS
var TypeScriptClassDemo_1 = require("./TypeScriptClassDemo");
var typeClassAccess = new TypeScriptClassDemo_1.TypeScriptClassDemo(454545);
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
