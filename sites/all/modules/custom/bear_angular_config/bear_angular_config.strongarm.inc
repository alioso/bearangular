<?php
/**
 * @file
 * bear_angular_config.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function bear_angular_config_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'angularjs_cdn';
  $strongarm->value = '1';
  $export['angularjs_cdn'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'angularjs_compression_type';
  $strongarm->value = '';
  $export['angularjs_compression_type'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'angularjs_files';
  $strongarm->value = array(
    0 => 'angular-animate',
    1 => 'angular-route',
    2 => 'angular-sanitize',
  );
  $export['angularjs_files'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'angularjs_version';
  $strongarm->value = '1.2.0-rc.3';
  $export['angularjs_version'] = $strongarm;

  return $export;
}
