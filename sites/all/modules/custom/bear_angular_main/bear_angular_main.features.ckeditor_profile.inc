<?php
/**
 * @file
 * bear_angular_main.features.ckeditor_profile.inc
 */

/**
 * Implements hook_ckeditor_profile_defaults().
 */
function bear_angular_main_ckeditor_profile_defaults() {
  $data = array(
    'Bear_Angular_Ckeditor' => array(
      'name' => 'Bear_Angular_Ckeditor',
      'settings' => array(
        'ss' => 2,
        'toolbar' => '[
    [\'Source\'],
    [\'Bold\',\'Italic\',\'Underline\',\'RemoveFormat\'],
    [\'JustifyLeft\',\'JustifyCenter\',\'JustifyRight\',\'JustifyBlock\'],
    [\'BulletedList\',\'Blockquote\'],
    [\'Link\',\'Unlink\'],
    [\'Maximize\',\'-\',\'Highlight\']
]',
        'expand' => 't',
        'default' => 't',
        'show_toggle' => 't',
        'uicolor' => 'default',
        'uicolor_user' => 'default',
        'width' => '100%',
        'lang' => 'en',
        'auto_lang' => 't',
        'language_direction' => 'default',
        'allowed_content' => 'f',
        'extraAllowedContent' => '',
        'enter_mode' => 'p',
        'shift_enter_mode' => 'br',
        'font_format' => 'p;div;pre;address;h1;h2;h3;h4;h5;h6',
        'custom_formatting' => 'f',
        'formatting' => array(
          'custom_formatting_options' => array(
            'indent' => 'indent',
            'breakBeforeOpen' => 'breakBeforeOpen',
            'breakAfterOpen' => 'breakAfterOpen',
            'breakAfterClose' => 'breakAfterClose',
            'breakBeforeClose' => 0,
            'pre_indent' => 0,
          ),
        ),
        'css_mode' => 'theme',
        'css_path' => '',
        'css_style' => 'theme',
        'styles_path' => '',
        'filebrowser' => 'none',
        'filebrowser_image' => '',
        'filebrowser_flash' => '',
        'UserFilesPath' => '%b%f/',
        'UserFilesAbsolutePath' => '%d%b%f/',
        'forcePasteAsPlainText' => 'f',
        'html_entities' => 'f',
        'scayt_autoStartup' => 'f',
        'theme_config_js' => 'f',
        'js_conf' => 'config.extraPlugins = \'codesnippet\',\'widget\',\'lineutils\',\'clipboard\',\'dialog\',\'dialogui\';',
        'loadPlugins' => array(
          'clipboard' => array(
            'name' => 'clipboard',
            'desc' => 'Plugin file: clipboard',
            'path' => '%plugin_dir%clipboard/',
            'buttons' => FALSE,
            'default' => 'f',
          ),
          'codesnippet' => array(
            'name' => 'codesnippet',
            'desc' => 'Plugin file: codesnippet',
            'path' => '%plugin_dir%codesnippet/',
            'buttons' => FALSE,
            'default' => 'f',
          ),
          'dialog' => array(
            'name' => 'dialog',
            'desc' => 'Plugin file: dialog',
            'path' => '%plugin_dir%dialog/',
            'buttons' => FALSE,
            'default' => 'f',
          ),
          'dialogui' => array(
            'name' => 'dialogui',
            'desc' => 'Plugin file: dialogui',
            'path' => '%plugin_dir%dialogui/',
            'buttons' => FALSE,
            'default' => 'f',
          ),
          'highlight_js' => array(
            'name' => 'highlight_js',
            'desc' => 'Plugin file: highlight_js',
            'path' => '%plugin_dir%highlight_js/',
            'buttons' => array(
              'Highlight' => array(
                'label' => 'Highlight',
                'icon' => 'icons/highlight_js.gif',
              ),
            ),
            'default' => 'f',
          ),
          'lineutils' => array(
            'name' => 'lineutils',
            'desc' => 'Plugin file: lineutils',
            'path' => '%plugin_dir%lineutils/',
            'buttons' => FALSE,
            'default' => 'f',
          ),
          'widget' => array(
            'name' => 'widget',
            'desc' => 'Plugin file: widget',
            'path' => '%plugin_dir%widget/',
            'buttons' => FALSE,
            'default' => 'f',
          ),
        ),
      ),
      'input_formats' => array(
        'bear_angular' => 'Bear Angular',
      ),
    ),
  );
  return $data;
}
