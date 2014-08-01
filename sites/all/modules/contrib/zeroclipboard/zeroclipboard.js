(function ($) {
  Drupal.behaviors.zeroClipboard = {
    attach: function(context) {
      ZeroClipboard.setMoviePath(Drupal.settings.basePath + Drupal.settings.zeroClipboard.moviePath);

      for (var i in Drupal.settings.zeroClipboard.selectorsToProcess) {
        var selectorData = Drupal.settings.zeroClipboard.selectorsToProcess[i];
        Drupal.zeroClipboard.process(selectorData.selector, selectorData.value, {});
      }
    }
  };

  Drupal.zeroClipboard = {};
  Drupal.zeroClipboard.clips = {};
  Drupal.zeroClipboard.currentIndex = 0;

  Drupal.zeroClipboard.process = function(selector, clipCallback, containerStyle) {
    $(selector).not('.zeroclipboard-processed').each(function() {
      var elementID = $(this).attr('id');
    
      // If the element to be processed doesn't already have an ID, generate one for it
      if (!elementID) {
        elementID = 'zeroclipboard-dynamic-id-' + Drupal.zeroClipboard.currentIndex;
        $(this).attr('id', elementID);
        Drupal.zeroClipboard.currentIndex++;
      }
      $(this).wrap('<span id="'  + elementID + '-zeroclipboard-wrapper"/>');
    
      // These styles seem to be good make sure the flash is placed exactly over the selected element
      // It can still be overriden by the options sent for the container style
      var style = {position: 'relative', float: 'left'};
      if (containerStyle != null) {
        style = $.extend({position: 'relative', float: 'left'}, containerStyle);
      }
      $('#' + elementID + '-zeroclipboard-wrapper').css(style);
      $('#'  + elementID + '-zeroclipboard-wrapper').after('<div style="clear:both;"></div>');
    
      Drupal.zeroClipboard.clips[elementID] = new ZeroClipboard.Client();
      Drupal.zeroClipboard.clips[elementID].setHandCursor(true);
      Drupal.zeroClipboard.clips[elementID].glue(elementID, elementID + '-zeroclipboard-wrapper');
      Drupal.zeroClipboard.clips[elementID].setText('dummy');
      Drupal.zeroClipboard.clips[elementID].addEventListener('onMouseDown', function() {
        var newClipText = '';

        if (typeof(clipCallback) == 'function') {
          // On mouseDown (which is triggered exactly before mouseClick)
          // Set the clipText in the zeroclipboard flash using the clipCallback
          newClipText = clipCallback(elementID);
        }
        else if (typeof(clipCallback) == 'string') {
          newClipText = clipCallback;
        }
        Drupal.zeroClipboard.clips[elementID].setText(newClipText);
      });

      // Mark this element as processed to prevent re-processing
      $(this).addClass('zeroclipboard-processed');
    });
  };
})(jQuery);
