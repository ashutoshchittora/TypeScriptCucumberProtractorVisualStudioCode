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
const Calculator_1 = require("./PageObjects/Calculator");
const AngularHome_1 = require("./PageObjects/AngularHome");
describe('ChainLocators', () => {
    // FIRST TEST CASE
    it('TestCaseChainLocator', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new Calculator_1.Calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield protractor_1.browser.manage().window().maximize();
        yield calc.firstTextBox.sendKeys("31");
        yield calc.secondTextBox.sendKeys("15");
        yield calc.goButton.click();
        yield calc.result.getText().then(function (repeaterText) {
            console.log(repeaterText);
        });
    }));
    // SECOND TEST CASE
    it('AngularHomePage test', () => __awaiter(this, void 0, void 0, function* () {
        let angularPage = new AngularHome_1.AngularHome();
        yield protractor_1.browser.get('https://angularjs.org/');
        yield protractor_1.browser.manage().window().maximize();
        yield angularPage.angularLink.click();
        yield angularPage.searchText.sendKeys("angular").then(function () {
            protractor_1.browser.sleep(3000); // sleep added just to see the results
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWNDaGFpbkxvY2F0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdFNwZWNDaGFpbkxvY2F0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBOEM7QUFDOUMseURBQXNEO0FBRXRELDJEQUF3RDtBQUV4RCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUUsRUFBRTtJQUM3QixrQkFBa0I7SUFDbEIsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQU8sRUFBRTtRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUM1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFlBQVk7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixtQkFBbUI7SUFDbkIsRUFBRSxDQUFDLHNCQUFzQixFQUFHLEdBQU8sRUFBRTtRQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQSJ9