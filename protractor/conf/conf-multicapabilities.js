// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  // Capabilities to be passed to the webdriver instance.
/*  capabilities: {
    'browserName': 'chrome'
  },
*/
  
	multiCapabilities: [{
	browserName: 'chrome',
	//mention machine1 ip-address in selenium address value
	//and give port id for selenium driver
	seleniumAddress: 'http://localhost:4444/wd/hub'
	},
	{
	browserName: 'firefox',
	//mention machine2 ip-address in selenium address value
	//and give port id for selenium driver
	seleniumAddress: 'http://localhost:4444/wd/hub'
	}],
   
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../test/zoo_test_spec_testrail-api.js'],
  
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
	showColors: true, 
//	DEFAULT: defaultTimeoutInterval: 30000
	defaultTimeoutInterval: 30000
  }
};