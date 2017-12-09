// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
// DEFAULT: allScriptsTimeout: 30000,
  allScriptsTimeout: 30000,

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['zoo_spec_tutorial7.js'],
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	isVerbose: true,
	includeStackTrace: true, 
	showColors: true, 
//	DEFAULT: defaultTimeoutInterval: 30000
	defaultTimeoutInterval: 30000
  }
 
};