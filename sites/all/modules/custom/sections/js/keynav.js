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
        //li.css('pointer-events', 'none');
        e.preventDefault();
        $('li a').css('pointer-events', 'none');
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
        $('li a').css('pointer-events', 'none');
      }
      var lia = $('li.selected a');
      if(e.which === 39){
        lia.click();
        e.preventDefault();
      }
      if(e.which === 37){
        document.location = '/#/';
      }
      $('body').mousemove(function() {
        $('li').removeClass('selected');
        $('li a').css('pointer-events', 'auto');
      });
    });

    /* Unrelated to keynav, but more of a theming improv on the search input */
    $( "#content" ).delegate( "input.text", "focus blur", function() {
      var elem = $( this );
      setTimeout(function() {
        elem.toggleClass( "focused", elem.is( ":focus" ) );
        $('.search-section').toggleClass( "focused", elem.is( ":focus" ) );
      }, 0 );
    });

    return this;

  }

})(jQuery, window, document);
