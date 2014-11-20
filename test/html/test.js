describe("html load", function(){
  var tdstyle = window.tdstyle;
  var assert = window.assert;

  before(function(done) {
    tdstyle.karmaLoadHtmlCss('test/html', 'test.html', null, done);
  });


  it('should fill body', function() {
      assert.equal(1, $('.cont1').length);
      assert.equal(0, $('body meta').length);
  });

});