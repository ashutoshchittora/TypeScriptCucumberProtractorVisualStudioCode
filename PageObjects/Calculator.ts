import { ElementFinder} from "protractor";
import { element, by } from "protractor";


export class Calculator
{
    firstTextBox: ElementFinder;
    secondTextBox: ElementFinder;
    goButton: ElementFinder;
    result : ElementFinder;

    constructor()
    {
        this.firstTextBox=element(by.model("first"));
        this.secondTextBox = element(by.model("second"));
        this.goButton = element(by.id("gobutton"));
        this.result = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));

    }
}