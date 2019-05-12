var a = 4; // this can only be created once.
var b = "Hello";
var c = 3;
var lst = [1, 2.3];
var dynamicVariableUse;
dynamicVariableUse = 5;
dynamicVariableUse = "NewValue";
var flagCreate = false;
// javascript mainly uses ES5 engine . Typescript uses ES6 engine and converts the .ts file back to javascript .js ES5 so that js can understand it.
// Typescript = addtionalFeafture ( OOPs) + JavaScript
// ES6 has added keywords -- 'let' and 'const' which is not present in ES5.
// 'let' is a replacement of 'var' and helps to remove asynchronous behavior of 'var'
// this method to show that 'var' is asynchronous. Comment one block and run to see results -- ">> tsc TypeScriptBasics.ts" and then ">> node TypeScriptBasics.ts"
for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 100 * i); // this block waits for 100*i ms and print i after 100*i values
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1); // this block waits for 100*i ms and print i after 100*i values
};
// this method to show that 'let' is synchronous.tsc
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
/** Fat pipes or Anonymous function example as below :
 *
        describe('angularjs homepage todo list', ()=> {
        it('should add a todo', ()=> {
    });
  });
 
 */
/** ">>> tsc TypeScriptInterface.ts" and then ">>> node TypeScriptInterface.js"
*/ 
