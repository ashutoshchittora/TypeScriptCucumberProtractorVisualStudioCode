"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this.firstTextBox = protractor_1.element(protractor_1.by.model("first"));
        this.secondTextBox = protractor_1.element(protractor_1.by.model("second"));
        this.goButton = protractor_1.element(protractor_1.by.id("gobutton"));
        this.result = protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)"));
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL0NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBeUM7QUFHekMsTUFBYSxVQUFVO0lBT25CO1FBRUksSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUU5RixDQUFDO0NBQ0o7QUFmRCxnQ0FlQyJ9