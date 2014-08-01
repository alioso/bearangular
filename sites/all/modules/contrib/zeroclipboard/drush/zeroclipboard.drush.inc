<?php

/**
 * @file
 *   drush integration for zeroclipboard.
 */

/**
 * The zeroclipboard plugin URI.
 */
define('ZEROCLIPBOARD_DOWNLOAD_URI', 'http://zeroclipboard.googlecode.com/files/zeroclipboard-1.0.7.tar.gz');

/**
 * Implementation of hook_drush_command().
 *
 * In this hook, you specify which commands your
 * drush module makes available, what it does and
 * description.
 *
 * Notice how this structure closely resembles how
 * you define menu hooks. See drush_parse_command()
 * for a list of recognized keys.
 *
 * @return
 *   An associative array describing your command(s).
 */
function zeroclipboard_drush_command() {
  $items = array();

  // the key in the $items array is the name of the command.
  $items['zeroclipboard-plugin'] = array(
    'callback' => 'drush_zeroclipboard_plugin',
    'description' => dt("Downloads the zeroclipboard plugin."),
    'arguments' => array(
      'path' => dt('Optional. A path where to install the zeroclipboard plugin. If omitted Drush will use the default location.'),
    ),
  );

  return $items;
}

/**
 * Implementation of hook_drush_help().
 *
 * This function is called whenever a drush user calls
 * 'drush help <name-of-your-command>'
 *
 * @param
 *   A string with the help section (prepend with 'drush:')
 *
 * @return
 *   A string with the help text for your command.
 */
function zeroclipboard_drush_help($section) {
  switch ($section) {
    case 'drush:zeroclipboard-plugin':
      return dt("Downloads the zeroclipboard plugin from Google Code, default location is sites/all/libraries.");
  }
}

/**
 * Example drush command callback.
 *
 * This is where the action takes place.
 *
 * In this function, all of Drupals API is (usually) available, including
 * any functions you have added in your own modules/themes.
 *
 * To print something to the terminal window, use drush_print().
 *
 */
function drush_zeroclipboard_plugin() {
  if (!drush_shell_exec('type tar')) {
    return drush_set_error(dt('Missing dependency: tar. Install it before using this command.'));
  }

  $args = func_get_args();
  if ($args[0]) {
    $path = $args[0];
  }
  else {
    $path = 'sites/all/libraries';
  }

  // Create the path if it does not exist.
  if (!is_dir($path)) {
    drush_op('mkdir', $path);
    drush_log(dt('Directory @path was created', array('@path' => $path)), 'notice');
  }

  // Set the directory to the download location.
  $olddir = getcwd();
  chdir($path);

  $filename = basename(ZEROCLIPBOARD_DOWNLOAD_URI);
  $dirname = 'zeroclipboard';

  // Remove any existing zeroclipboard plugin directory
  if (is_dir($dirname)) {
    drush_log(dt('A existing zeroclipboard plugin was overwritten at @path', array('@path' => $path)), 'notice');
  }
  // Remove any existing zeroclipboard plugin zip archive
  if (is_file($filename)) {
    drush_op('unlink', $filename);
  }

  // Download the tar ball
  if (!drush_shell_exec('wget --no-check-certificate ' . ZEROCLIPBOARD_DOWNLOAD_URI . ' -O ' . $filename)) {
    drush_shell_exec('curl -O ' . ZEROCLIPBOARD_DOWNLOAD_URI);
  }

  if (is_file($filename)) {
    // Decompress the tar ball
    drush_shell_exec('tar xzvf ' . $filename);
    // Rename directory
    drush_shell_exec('mv zeroclipboard-* ' . $dirname);
    // Remove the zip archive
    drush_op('unlink', $filename);
  }

  // Set working directory back to the previous working directory.
  chdir($olddir);

  if (is_dir($path .'/'. $dirname)) {
    drush_log(dt('zeroclipboard plugin has been downloaded to @path', array('@path' => $path)), 'success');
  }
  else {
    drush_log(dt('Drush was unable to download the zeroclipboard plugin to @path', array('@path' => $path)), 'error');
  }
}
