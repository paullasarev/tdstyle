describe("fit", function(){
  var tdstyle = window.tdstyle;

  before(function(done) {
    tdstyle.karmaLoadHtmlCss('test/fit', 'test.html', 'test.css', done);
  });


  it('should be on top', function(){
      tdstyle.isOnTop('.cont1', '.cont1__block');
  });

  it('non-top block should fail isOnOtop', function(){
    tdstyle.isThrows(function(){
      tdstyle.isOnTop('.cont1', '.cont1__block2');
    });
  });


  it('should fitWitdh', function(){
      tdstyle.isFitWidth('.cont2', '.cont2__block');
  });

  it('should fail if not fitWitdh', function(){
    tdstyle.isThrows(function(){
      tdstyle.isFitWidth('.cont2', '.cont2__block2');
    });
  });

  it('should fitHeight', function(){
      tdstyle.isFitHeight('.cont3', '.cont3__block');
  });

  it('should fail if not fitHeight', function(){
    tdstyle.isThrows(function(){
      tdstyle.isFitHeight('.cont4', '.cont4__block');
    });
  });

  it('should isUnder', function(){
      tdstyle.isUnder('.cont5__block', '.cont5__block2');
  });

  it('should fail if not isUnder', function(){
    tdstyle.isThrows(function(){
      tdstyle.isUnder('.cont5__block2', '.cont5__block');
    });
  });

  it('should isStartOnLeft', function(){
      tdstyle.isStartOnLeft('.cont6', '.cont6__block');
  });

  it('should fail if not isStartOnLeft', function(){
    tdstyle.isThrows(function(){
      tdstyle.isStartOnLeft('.cont6', '.cont6__block2');
    });
  });

  it('should isOnRight', function(){
      tdstyle.isOnRight('.cont6__block', '.cont6__block2');
  });

  it('should fail if not isOnRight', function(){
    tdstyle.isThrows(function(){
      tdstyle.isOnRight('.cont6__block2', '.cont6__block');
    });
  });
});