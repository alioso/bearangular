(function($) {

/**
 * Provide a Drupal-specific wrapper for JUSH Framework.
 */
Drupal.behaviors.highlight_js = {
  attach: function(context, settings) {
    // Act on anything that is classed with "jush".
    hljs.initHighlightingOnLoad();
  }
};

})(jQuery)
