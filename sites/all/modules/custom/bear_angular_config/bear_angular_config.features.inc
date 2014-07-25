<?php
/**
 * @file
 * bear_angular_config.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function bear_angular_config_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}
