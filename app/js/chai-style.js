(function(plugin){
  if (
    typeof require === "function"
    && typeof exports === "object"
    && typeof module === "object"
  ) {
    // NodeJS
    module.exports = plugin;
  } else if (
    typeof define === "function"
    && define.amd
  ) {
    // AMD
    define(function () {
      return plugin;
    });
  } else {
    // Other environment (usually <script> tag): plug in to global chai instance directly.
    chai.use(plugin);
  }
}(function(chai, utils){

    function isElementCenteredInPage(element) {
      var frameBody = frame.toDomElement().contentDocument.body;

      var bodyStyle = frame.toDomElement().contentWindow.getComputedStyle(frameBody);
      var bodyLeftMarginWidth = pixelsToInt(bodyStyle.getPropertyValue("margin-left"));
      var bodyRightMarginWidth = pixelsToInt(bodyStyle.getPropertyValue("margin-right"));

      // We can't just base the document width on the frame width because that doesn't account for scroll bars.
      var bodyBoundingBox = frameBody.getBoundingClientRect();
      var documentLeft = bodyBoundingBox.left - bodyLeftMarginWidth;
      var documentRight = bodyBoundingBox.right + bodyRightMarginWidth;

      var elementBoundingBox = getBoundingBox(element);
      var elementLeft = elementBoundingBox.left;
      var elementRight = elementBoundingBox.right;

      var documentCenter = (documentRight - documentLeft) / 2;
      var elementCenter = elementLeft + ((elementRight - elementLeft) / 2);

//      console.log("*** CENTER: element width", elementBoundingBox.width);
//      console.log("documentLeft", documentLeft);
//      console.log("documentRight", documentRight);
//      console.log("elementLeft", elementLeft);
//      console.log("elementRight", elementRight);
//      console.log("documentCenter", documentCenter);
//      console.log("elementCenter", elementCenter);

      var offset = Math.abs(documentCenter - elementCenter);
      var success = (offset <= 0.5);

//      console.log(success ? "✔ SUCCESS" : "✘ FAILURE");

      return success;
    }
    
  // like => _.isEqual
  chai.Assertion.addMethod('like', function(expected){
    var obj = this._obj
    this.assert(
      _.isEqual(obj, expected)
      , "expected #{this} to be like #{exp}"
      , "expected #{this} not to be like #{exp}"
      , expected
      , obj
      , true
    )
  });


}));