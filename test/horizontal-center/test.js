describe("horizontal-center", function(){
  var tdstyle = window.tdstyle;

  before(function(done) {
    tdstyle.karmaLoadHtmlCss('test/horizontal-center', 'test.html', 'test.css', done);
  });

  it('should fail fi is div is not centered in container', function () {
      tdstyle.isThrows(function(){
        tdstyle.isHorisontallyCentered('.container', '.not-centered-block');
      });
  });

  it('should be centered block with auto-margin and zero left/right', function(){
    tdstyle.isHorisontallyCentered('.container', '.centered-block');
  });

});

