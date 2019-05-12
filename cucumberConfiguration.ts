import {Config} from 'protractor';

// An example configuration file
export let config : Config = {

    // set to "custom" instead of cucumber.
    framework:'custom',

    // path relative to the current config file
    frameworkPath : require.resolve('protractor-cucumber-framework'),

    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    // " remember -> ./path1 is for parent and ../path2 is for grandparent"
    specs: ['../features/demo.feature'],
    cucumberOpts : {
        // requires the step definition
        require : [
            './stepDefinitions/*.js'
        ]
    }
  
   
  };