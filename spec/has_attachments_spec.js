require("spec_helper.js");
require("../public/lighthouse_images.js");

Screw.Unit(function() {
  describe("has image attachments", function(){
    it("should not use generic img.png background image for attachment links", function(){
      expect($('li#sbattachment_thomas a.item').css('background-image')).to_not(equal_basename, 'img.png');
    });
    it("should not change pdf.png background image for pdf attachment links", function(){
      expect($('li#sbattachment_pdf a.item').css('background-image')).to(equal_basename, 'pdf.png');
    });
    it("should thumbnail instead of generic img.png", function(){
      expect($('li#sbattachment_thomas a.item').css('background-image')).to(equal_basename, 'how-thomas-the-tank-engine-works.jpg');
    });
  });
});
