describe("props", function(){
  var tdstyle = window.tdstyle;

  before(function(done) {
    tdstyle.karmaLoadHtmlCss('test/props', 'test.html', 'test.css', done);
  });

  it('the same colors should be equal', function(){
    tdstyle.compareColor('#ddd', '#ddd');
    tdstyle.compareColor('#ddd', '#dddddd');
  });

  it('diff colors shoud should fail', function(){
    tdstyle.isThrows(function(){
      tdstyle.compareColor('#dddddd', '#ddddde');
    });
  });

  it('hex and rgb format should be equal', function(){
    tdstyle.compareColor('#ddd', 'rgb(221,221,221)');
  });

  it('predefined and hex format should be equal', function(){
    tdstyle.compareColor('AliceBlue ', '#F0F8FF');
  });

  it('predefined and hex format should be equal', function(){
    tdstyle.compareColor('red', 'rgb(255, 0,0)');
  });

  it('hsl and rgb format should be equal', function(){
    tdstyle.compareColor('hsl(120,100%,50%)', 'rgb(0,255,0)');
  });

  it('hsla and rgba format should be equal', function(){
    tdstyle.compareColor('hsla(120,100%,50%,0.3)', 'rgba(0,255,0,0.3)');
  });

  it('should get inherited color', function(){
    tdstyle.isColor('.cont1', 'background-color', '#e0e0e0');
    tdstyle.isColor('.cont1__block', 'background-color', '#e0e0e0');
  });

  it('isTag should check tag', function(){
    tdstyle.isTag('.cont1', 'div');
  });

  it('isTag should fail', function(){
    tdstyle.isThrows(function(){
      tdstyle.isTag('.cont1', 'input');
    });
  });

  it('isAttribute should check attr', function(){
    tdstyle.isAttribute('.cont1', 'class', 'cont1');
  });

  it('isAttribute should fail', function(){
    tdstyle.isThrows(function(){
      tdstyle.isAttribute('.cont1', 'class', 'asdf');
    });
  });

  it('isFont should check font', function(){
    tdstyle.isFont('.cont2', {
        size: "70px",
        weight: "bold",
        family: "sans-serif",
        style: "normal",
        variant: 'normal',
        color: '#9acc93'
    });
  });

  it('isBox should check color', function(){
    tdstyle.isBox('.cont2', {
        color: '#e0e0e0',
    });
  });

  it('isBox should check box', function(){
    tdstyle.isBox('.cont3', {
        paddingLeft: 10,
        paddingRight: 20,
        marginTop: 10,
        marginRight: 15,
        marginBottom: 5,
        marginLeft: 2,
        border: "solid 5px red",
        color: '#ddd',
        sizing: "border-box",
        outline: "none",
        width: 300,
        height: 100,
        left: 0,
    });
  });
});