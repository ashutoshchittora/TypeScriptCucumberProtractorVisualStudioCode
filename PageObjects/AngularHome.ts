import { ElementFinder, element ,by} from "protractor";

export class AngularHome 
{
    angularLink : ElementFinder;
    searchText : ElementFinder;

    constructor()
    {
        this.angularLink= element(by.linkText("angular.io"));
        this.searchText=element(by.css("input[type='search']"));
    }
}