chai.config.includeStack = true;
var expect = chai.expect;
var assert = chai.assert;


function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect()
    var body = document.body
    var docElem = document.documentElement
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft
    return { top: Math.round(top), left: Math.round(left), width: Math.round(box.width), height:Math.round(box.width)}
}

function isHorisontallyCentered(frameSelector, elementSelector)
{
  var frameEl=$(frameSelector);
  var elementEl=$(elementSelector);
  var frameRect=getOffsetRect(frameEl.get(0));
  var elementRect=getOffsetRect(elementEl.get(0));
  
  var documentCenter = frameRect.width / 2.0;
  var elementCenter = elementRect.width / 2.0;

  var offset = Math.abs(documentCenter - elementCenter);
  var success = (offset <= 0.5);

  //http://javascript.ru/ui/offset
  return success;
}

function isOnTop(frameSelector, elementSelector)
{
  return false;
}

describe('test', function(){
  describe('sample', function(){
    it('should be equal', function(){
      expect(13).be.equal(13);
    })
    it('should not be equal', function(){
      expect(13).not.be.equal(3);
    })
    it('header should be centered', function(){
      expect(isHorisontallyCentered('body', '.header')).ok;
    })
    it('header should be on top', function(){
      expect(isOnTop('body', '.header')).ok;
    })
  })
})

