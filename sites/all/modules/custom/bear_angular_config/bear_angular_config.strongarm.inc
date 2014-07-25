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
    0 => 'angular-bootstrap-prettify',
    1 => 'angular-bootstrap',
    2 => 'angular-cookies',
    3 => 'angular-loader',
    4 => 'angular-mocks',
    5 => 'angular-resource',
    6 => 'angular-sanitize',
  );
  $export['angularjs_files'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'angularjs_version';
  $strongarm->value = '1.0.8';
  $export['angularjs_version'] = $strongarm;

  return $export;
}
