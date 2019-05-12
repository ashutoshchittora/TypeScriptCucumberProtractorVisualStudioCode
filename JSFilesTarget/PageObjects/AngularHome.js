"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AngularHome {
    constructor() {
        this.angularLink = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.searchText = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
}
exports.AngularHome = AngularHome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhckhvbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9Bbmd1bGFySG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF1RDtBQUV2RCxNQUFhLFdBQVc7SUFLcEI7UUFFSSxJQUFJLENBQUMsV0FBVyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0o7QUFWRCxrQ0FVQyJ9