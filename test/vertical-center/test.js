describe("vertical-center", function(){
  var tdstyle = window.tdstyle;

  before(function(done) {
    tdstyle.karmaLoadHtmlCss('test/vertical-center', 'test.html', 'test.css', done);
  });

  it('text should be centered in div by line-height', function () {
     tdstyle.isTextVCentered('.cont1');
  });

  it('block should be centered in relative container by auto margin and absolute position', function () {
     tdstyle.isVerticallyCentered('.cont2', '.cont2__block');
  });

  it('block should be centered in relative container with fixed height', function () {
     tdstyle.isVerticallyCentered('.cont3', '.cont3__block');
  });

  it('block should be centered by transform', function () {
     tdstyle.isVerticallyCentered('.cont4', '.cont4__block');
  });

  it('block should be v&h centered', function () {
     tdstyle.isCentered('.cont5', '.cont5__block');
  });
});
