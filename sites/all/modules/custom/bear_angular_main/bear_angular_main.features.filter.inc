<?php
/**
 * @file
 * bear_angular_main.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function bear_angular_main_filter_default_formats() {
  $formats = array();

  // Exported format: Bear Angular.
  $formats['bear_angular'] = array(
    'format' => 'bear_angular',
    'name' => 'Bear Angular',
    'cache' => 0,
    'status' => 1,
    'weight' => 0,
    'filters' => array(
      'filter_url' => array(
        'weight' => -48,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
      'filter_autop' => array(
        'weight' => -45,
        'status' => 1,
        'settings' => array(),
      ),
      'highlight_js' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
    ),
  );

  return $formats;
}
