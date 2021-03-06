var myReporter = {

  jasmineStarted: function(suiteInfo) {
    console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
  },

  suiteStarted: function(result) {
    console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
  },

  specStarted: function(result) {
    console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
  },

  specDone: function(result) {
    console.log('Spec: ' + result.description + ' was ' + result.status);
    for(var i = 0; i < result.failedExpectations.length; i++) {
      console.log('Failure: ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }
    console.log(result.passedExpectations.length);
  },
  
  //suiteDone is invoked when all of the child specs and suites for a given suite have been run
  suiteDone: function(result) {
    console.log('Suite: ' + result.description + ' was ' + result.status);
    for(var i = 0; i < result.failedExpectations.length; i++) {
      console.log('AfterAll ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }
  },
  
  jasmineDone: function() {
    console.log('Finished suite');
  }
};

jasmine.getEnv().addReporter(myReporter);

describe('Top Level suite', function() {
  it('spec', function() {
    expect(1).toBe(1);
  });

  describe('Nested suite', function() {
    it('nested spec', function() {
      expect(true).toBe(true);
    });
  });
});



