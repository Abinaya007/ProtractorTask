var AngularHomepage = function() {
  var nameInput = element(by.model('yourName'));

  this.get = function() {
    browser.get('https://developer.here.com/documentation');
  };

//Validate links in the webpage
  this.getLinks = function() {
    $$('a').map(function(link) {
      return link.getAttribute("href");
  }).then(function(links) {
      links.forEach(function(link) {
          browser.get(link);
          expect(browser.getCurrentUrl()).not.toContain('/Error/');
      });
  });
  browser.executeScript("return !!(window.angular || window.ng);")
    .then(function(isAngular){
        if(isAngular) {
          console.log('The page is Angular');
        }
        else {
          console.log('The page is not Angular');
        }
    });
  };

};

module.exports = new AngularHomepage();