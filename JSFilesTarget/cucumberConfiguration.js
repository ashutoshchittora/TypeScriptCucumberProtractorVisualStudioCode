"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An example configuration file
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
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
    // " remember -> ./path1 is for parent and ../path2 is for grandparent"
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // requires the step definition
        require: [
            './stepDefinitions/*.js'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJDb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFZO0lBRXpCLHVDQUF1QztJQUN2QyxTQUFTLEVBQUMsUUFBUTtJQUVsQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFaEUsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUMsSUFBSTtJQUVsQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyx1RUFBdUU7SUFDdkUsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFHO1FBQ1gsK0JBQStCO1FBQy9CLE9BQU8sRUFBRztZQUNOLHdCQUF3QjtTQUMzQjtLQUNKO0NBR0YsQ0FBQyJ9