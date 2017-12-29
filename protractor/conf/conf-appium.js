// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  // IMPORTANT: Appium runs on port 4723 instead of 4444
  seleniumAddress: 'http://localhost:4723/wd/hub', //appium
  
  // Capabilities to be passed to the webdriver instance.
	capabilities: {
        browserName: 'chrome',
//        app: '[ABSOLUTE_PATH_TO_APK/ABSOLUTE_PATH_TO_APP]',
//        bundleId: '[com..],
//		automationName: 'Appium',
		'appium-version': '1.7.1',
		//ANDROID: Einstellungen->Geräteinformationen->Gerätename
        deviceName: 'Ayebo Samsung Galaxy J3',
        platformName: 'Android',
		//ANDROID: Einstellungen->Geräteinformationen->Softwareinfo->Android-Version
        platformVersion: '5.1.1',
//        udid: '[ONLY_FOR_iOS=THE_UDID_OF_DEVICE]'
//        autoWebview : true,
//        autoWebviewTimeout: 10000,
//        autoAcceptAlerts: 'true',
//		deviceReadyTimeout: 120
    },
    
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../test/zoo_test_spec_testrail-api.js'],
  
  // Options to be passed to Jasmine-node.
/*  jasmineNodeOpts: {
	showColors: true, 
//	DEFAULT: defaultTimeoutInterval: 30000
	defaultTimeoutInterval: 30000
  },
  */
  
//	baseUrl: 'http://localhost:8000',
	baseUrl: 'http://www.thetestroom.com/jswebapp/index.html'
  
/*  onPrepare: function () {
	var wd = require('wd'),
		protractor = require('protractor'),
		wdBridge = require('wd-bridge')(protractor, wd);
	wdBridge.initFromProtractor(exports.config);
  }
*/  
};