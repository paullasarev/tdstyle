describe("vertical-center", function(){
  var tdstyle = window.tdstyle;

  before(function(done) {
    tdstyle.karmaLoadHtmlCss('test/vertical-center', 'test.html', 'test.css', done);
  });

  it('should be centered in div', function () {
     tdstyle.isTextVCentered('.block');
  });
});
