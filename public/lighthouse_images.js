(function($){ 
  $(function() {
    $('li.aimg a.item').each(function(index) {
      $(this).parent().removeClass('aimg');
      $(this).css('background-image', 'url(' + $(this).attr('href') + ')');
    });
  });
  
})(jQuery); 
