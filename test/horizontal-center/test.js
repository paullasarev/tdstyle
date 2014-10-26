describe("horizontal-center", function(){
  var tdstyle = window.tdstyle;

  before(function(done) {
    tdstyle.karmaLoadHtmlCss('test/horizontal-center', 'test.html', 'test.css', done);
  });


  it('should fail when text is not centered', function(){
    tdstyle.isThrows(function(){
      tdstyle.isTextCentered('.not-centered-text');
    });
  });

  it('should be ok when text is centered', function(){
    tdstyle.isTextCentered('.centered-text');
  });

  it('should fail when div is not centered in container', function () {
    tdstyle.isThrows(function(){
      tdstyle.isHorisontallyCentered('.container', '.not-centered-block');
    });
  });

  it('should be centered block with auto-margin and zero left/right', function(){
    tdstyle.isHorisontallyCentered('.container', '.center-block-auto-margin');
  });

  it('should be centered block with absolute display', function(){
    tdstyle.isHorisontallyCentered('.container-relative', '.center-block-absolute');
  });

  it('should be centered block with percent width', function(){
    tdstyle.isHorisontallyCentered('.container-relative2', '.center-block-percent-width');
  });
});

