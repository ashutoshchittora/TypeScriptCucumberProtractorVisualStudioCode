"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
const Calculator_1 = require("../PageObjects/Calculator");
const AngularHome_1 = require("../PageObjects/AngularHome");
let calc = new Calculator_1.Calculator();
let angularPage = new AngularHome_1.AngularHome();
cucumber_1.Given('I navigate to {string} Site', (siteUrl) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.manage().window().maximize();
    yield protractor_1.browser.get(siteUrl);
}));
cucumber_1.When('I add two numbers {string} and {string}', (num1, num2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstTextBox.sendKeys(num1);
    yield calc.secondTextBox.sendKeys(num2);
}));
cucumber_1.Then('output displayed is {string}', (text) => __awaiter(this, void 0, void 0, function* () {
    yield calc.goButton.click();
    yield calc.result.getText().then(function (repeaterText) {
        console.log("The output of Calculator addition is -> " + repeaterText);
    });
}));
cucumber_1.When('I click on header link', () => __awaiter(this, void 0, void 0, function* () {
    yield angularPage.angularLink.click();
}));
cucumber_1.When('I navigate to Angular page', () => __awaiter(this, void 0, void 0, function* () {
    yield console.log("dummy when() ... ");
}));
cucumber_1.Then('I will enter {string} in search box', (text) => __awaiter(this, void 0, void 0, function* () {
    yield angularPage.searchText.sendKeys(text).then(function () {
        protractor_1.browser.sleep(3000); // sleep added just to see the results
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1N0ZXBEZWZpbml0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2RlbW9TdGVwRGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELHVDQUE2QztBQUU3QywwREFBdUQ7QUFDdkQsNERBQXlEO0FBRXpELElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBR3BDLGdCQUFLLENBQUMsNkJBQTZCLEVBQUUsQ0FBTyxPQUFPLEVBQUUsRUFBRTtJQUNuRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO0lBRWpFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQU8sSUFBSSxFQUFFLEVBQUU7SUFFaEQsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxZQUFZO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDM0UsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQVMsRUFBRTtJQUV0QyxNQUFNLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7SUFDMUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFPLElBQUksRUFBRSxFQUFFO0lBRXZELE1BQU0sV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsc0NBQXNDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9