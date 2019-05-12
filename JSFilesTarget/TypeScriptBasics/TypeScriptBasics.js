const a = 4; // this can only be created once.
let b = "Hello";
let c = 3;
let lst = [1, 2.3];
let dynamicVariableUse;
dynamicVariableUse = 5;
dynamicVariableUse = "NewValue";
let flagCreate = false;
// javascript mainly uses ES5 engine . Typescript uses ES6 engine and converts the .ts file back to javascript .js ES5 so that js can understand it.
// Typescript = addtionalFeafture ( OOPs) + JavaScript
// ES6 has added keywords -- 'let' and 'const' which is not present in ES5.
// 'let' is a replacement of 'var' and helps to remove asynchronous behavior of 'var'
// this method to show that 'var' is asynchronous. Comment one block and run to see results -- ">> tsc TypeScriptBasics.ts" and then ">> node TypeScriptBasics.ts"
for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 100 * i); // this block waits for 100*i ms and print i after 100*i values
}
// this method to show that 'let' is synchronous.tsc
for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 100 * i); // this block waits for 100*i ms and print i after 100*i values
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZVNjcmlwdEJhc2ljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1R5cGVTY3JpcHRCYXNpY3MvVHlwZVNjcmlwdEJhc2ljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7QUFDNUMsSUFBSSxDQUFDLEdBQVEsT0FBTyxDQUFDO0FBQ3JCLElBQUksQ0FBQyxHQUFRLENBQUMsQ0FBQztBQUNmLElBQUksR0FBRyxHQUFlLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLElBQUksa0JBQXNCLENBQUM7QUFDM0Isa0JBQWtCLEdBQUMsQ0FBQyxDQUFDO0FBQ3JCLGtCQUFrQixHQUFDLFVBQVUsQ0FBQztBQUM5QixJQUFJLFVBQVUsR0FBUyxLQUFLLENBQUM7QUFFN0Isb0pBQW9KO0FBQ3BKLHNEQUFzRDtBQUN0RCwyRUFBMkU7QUFDM0UscUZBQXFGO0FBRXJGLGtLQUFrSztBQUNsSyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDO0lBQ2hCLFVBQVUsQ0FBQyxjQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsK0RBQStEO0NBQ2xIO0FBRUQsb0RBQW9EO0FBQ3BELEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7SUFDaEIsVUFBVSxDQUFDLGNBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsRUFBRSxHQUFHLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywrREFBK0Q7Q0FDbEg7QUFFRDs7Ozs7OztHQU9HO0FBRUg7RUFDRSJ9