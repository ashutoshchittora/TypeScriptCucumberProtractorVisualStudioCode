"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testSpecChainLocators.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxnQ0FBZ0M7QUFDckIsUUFBQSxNQUFNLEdBQVk7SUFDekIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUMsSUFBSTtJQUVsQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUVuQyx3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FDRixDQUFDIn0=