;(function($, window, document, undefined) {

  $.fn.keynav = function() {

    var li = $('li');
    var liSelected;

    $(window).keydown(function(e){
      if(e.which === 40){
        if(liSelected){
          liSelected.removeClass('selected');
          next = liSelected.next();
          if(next.length > 0){
            liSelected = next.addClass('selected');
          }
          else{
            liSelected = li.eq(0).addClass('selected');
          }
        }
        else{
          liSelected = li.eq(0).addClass('selected');
        }
        e.preventDefault();
      }
      else if(e.which === 38){
        if(liSelected){
          liSelected.removeClass('selected');
          next = liSelected.prev();
          if(next.length > 0){
            liSelected = next.addClass('selected');
          }
          else{
            liSelected = li.last().addClass('selected');
          }
        }
        else{
          liSelected = li.last().addClass('selected');
        }
        e.preventDefault();
      }
      var lia = $('li.selected a');
      if(e.which === 39){
        lia.click();
        e.preventDefault();
      }
      if(e.which === 37){
        //$('#logo').click();
        document.location = '/#/';
      }
    });

    return this;
  }

})(jQuery, window, document);
