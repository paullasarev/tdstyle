describe("fit", function(){
  var tdstyle = window.tdstyle;

  before(function(done) {
    tdstyle.karmaLoadHtmlCss('test/fit', 'test.html', 'test.css', done);
  });


  it('should be on top', function(){
      tdstyle.isOnTop('body', '.cont1');
  });

  it('non-top block should fail isOnOtop', function(){
    tdstyle.isThrows(function(){
      tdstyle.isOnTop('body', '.cont2');
    });
  });

});