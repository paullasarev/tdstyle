
describe('test page', function() {
  var chai = need.import('chai');
  chai.config.includeStack = true;
  var expect = chai.expect;
  var assert = chai.assert;
  var cstyle = need.import('cstyle');

  describe('css', function() {
    // it('should be equal', function(){
    //   expect(13).be.equal(13);
    // })
    // it('should not be equal', function(){
    //   expect(13).not.be.equal(3);
    // })
    it('should be clean', function() {
      expect(cstyle.isContentOnly('body')).ok;
    });
    it('header should be centered', function() {
      expect(cstyle.isHorisontallyCentered('body', '.header')).ok;
    });
    it('header content should be centered', function() {
      expect(cstyle.isContentCentered('body', '.header')).ok;
    });
    // it('header should be on top', function(){
    //   expect(isOnTop('body', '.header')).ok;
    // })
  })
})

