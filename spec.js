var page = require('./pageobject');
describe('Developer here App', function() {
  it('Open the web page', function() {
    page.get();

   });
  it('Validate links', function(){
    page.getLinks();
  });
});