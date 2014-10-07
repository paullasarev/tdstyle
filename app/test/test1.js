var expect = chai.expect;
describe('test', function(){
  describe('sample', function(){
    it('should be equal', function(){
      expect(13).be.equal(13);
    })
    it('should not be equal', function(){
      expect(3).not.be.equal(13);
    })
  })
})

