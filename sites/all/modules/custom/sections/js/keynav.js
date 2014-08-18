;(function($, window, document, undefined) {

  $.fn.keynav = function() {

    var li = $('.ngdata li');
    var liSelected;

    $(window).keydown(function(e){
      if(e.which === 40){
        $('.article li.selected code').attr('id', '');
        if(liSelected){
          liSelected.removeClass('selected');
          next = liSelected.next();
          if(next.length > 0){
            liSelected = next.addClass('selected');
          }
          else{
            liSelected = $('li.first').addClass('selected');
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
        $('.article li.selected code').attr('id', '');
        if(liSelected){
          liSelected.removeClass('selected');
          next = liSelected.prev();
          if(next.length > 0){
            liSelected = next.addClass('selected');
          }
          else{
            liSelected = $('li.first').addClass('selected');
          }
        }
        e.preventDefault();
        $('.section li a').css('pointer-events', 'none');
      }

      function SelectText(element) {
        var doc = document;
        var text = doc.getElementById(element);
        if (doc.body.createTextRange) { // ms
          var range = doc.body.createTextRange();
          range.moveToElementText(text);
          range.select();
        } else if (window.getSelection) {
          var selection = window.getSelection();
          var range = doc.createRange();
          range.selectNodeContents(text);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
      if($('.article li').hasClass('selected')) {
        $('.article li.selected code').attr('id', 'codesel');
      }
      else {
        $('.article li.selected code').attr('id', '');
      }
      if(e.which === 68){
        SelectText('codesel');
        e.preventDefault();
      }

      if(e.which === 83){
        setTimeout(function(){
         $('#search').focus().tap();
        },0);
      }

      if(e.which === 27){
        setTimeout(function(){
         $('#search').blur();
         //li.removeClass('selected');
        },0);
      }

      var lia = $('.section li.selected a');
      if(e.which === 39){
        lia.click();
        e.preventDefault();
      }
      if(e.which === 37){
        document.location = '/#/';
      }
      $('body').mousemove(function() {
        $('.section li').removeClass('selected');
        $('.section li a').css('pointer-events', 'auto');
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
