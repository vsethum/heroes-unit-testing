// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4200/dashboard',
    specs: ['heroes-spec.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }