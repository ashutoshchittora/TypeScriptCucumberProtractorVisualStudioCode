import {browser,by,element} from "protractor";
import { Calculator } from "./PageObjects/Calculator";
import { async } from "q";
import { AngularHome } from "./PageObjects/AngularHome";

describe('ChainLocators', ()=> {
	// FIRST TEST CASE
	it('TestCaseChainLocator', async()=> {
		let calc = new Calculator();
		await browser.get('http://juliemr.github.io/protractor-demo/');
		await browser.manage().window().maximize();
		await calc.firstTextBox.sendKeys("31");
		await calc.secondTextBox.sendKeys("15");
		await calc.goButton.click();
		await calc.result.getText().then(function(repeaterText) {
			console.log(repeaterText);
		});
	})
	
	// SECOND TEST CASE
	it('AngularHomePage test' , async()=> {
		let angularPage = new AngularHome();
		await browser.get('https://angularjs.org/');
		await browser.manage().window().maximize();
		await angularPage.angularLink.click();
		await angularPage.searchText.sendKeys("angular").then(function () {
			browser.sleep(3000); // sleep added just to see the results
		});

	});
})