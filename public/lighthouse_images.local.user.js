// ==UserScript==
// @name          Threaded Gtalk GMScript
// @namespace     http://drnicwilliams.com/
// @description   Instant autocompletion for any <select> drop downs on any page
// @include       https://mail.google.com/mail/*
// @version       1.0
// ==/UserScript==

// THIS FILE IS FOR LOCAL QA TESTING
// It loads the public/lighthouse_images_complete.js file which is built by `rake build`
// The project must be mounted as http://lighthouse-images-gmscript.local
// I do this using Passenger (drop project folder into Passenger PrefPane)
// The lighthouse-images.user.js file contains the public url for downloading scripts and assets

(function() {
  var head = document.getElementsByTagName("head")[0];
  
  var require = function(src) {
    var script = document.createElement("script");
    script.setAttribute("src", src);
    head.appendChild(script);
  };

  require("http://lighthouse-images-gmscript.local/lighthouse_images_complete.js");
})();
