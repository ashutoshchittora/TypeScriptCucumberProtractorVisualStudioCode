import { browser, by, element } from "protractor";
import { Given, When, Then } from "cucumber";
import { async } from "q";
import { Calculator } from "../PageObjects/Calculator";
import { AngularHome } from "../PageObjects/AngularHome";

let calc = new Calculator();
let angularPage = new AngularHome();


Given('I navigate to {string} Site', async (siteUrl) => {
    await browser.manage().window().maximize();
    await browser.get(siteUrl);
});


When('I add two numbers {string} and {string}', async (num1, num2) => {

    await calc.firstTextBox.sendKeys(num1);
    await calc.secondTextBox.sendKeys(num2);
});


Then('output displayed is {string}', async (text) => {

    await calc.goButton.click();
    await calc.result.getText().then(function (repeaterText) {
        console.log("The output of Calculator addition is -> " + repeaterText);
    });
});


When('I click on header link', async () => {

    await angularPage.angularLink.click();
});


When('I navigate to Angular page', async () => {
    await console.log("dummy when() ... ");

});


Then('I will enter {string} in search box', async (text) => {

    await angularPage.searchText.sendKeys(text).then(function () {
        browser.sleep(3000); // sleep added just to see the results
    });
});