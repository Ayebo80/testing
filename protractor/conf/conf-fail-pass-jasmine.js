// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../test/zoo_test_spec_fail-pass-jasmine.js'],
  
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
	showColors: true, 
//	DEFAULT: defaultTimeoutInterval: 30000
	defaultTimeoutInterval: 30000
  }
};