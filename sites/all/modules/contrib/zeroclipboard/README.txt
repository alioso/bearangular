Drupal Zero Clipboard module:
----------------------------
Author - Matt Vance (mvance at pobox dot com)

Overview:
--------
This module integrates a Javascript library called Zero Clipboard with Drupal.
According to the documentation (http://code.google.com/p/zeroclipboard/),
Zero Clipboard:

    "...provides an easy way to copy text to the clipboard using an
     invisible Adobe Flash movie, and a JavaScript interface. The "Zero"
     signifies that the library is invisible and the user interface is
     left entirely up to you."

This module requires that the Libraries API module be installed:
http://drupal.org/project/libraries


Installation:
------------
1) Download the Libraries module and Zero Clipboarde module files into your
'modules' directory (usually /sites/all/modules)

2) Download the Zero Clipboard project files into your 'libraries' directory
(usually /sites/all/libraries). Visit the code.google.com page above for
download links and be sure the resulting directory is named "zeroclipboard".
Alternatively, Drush users can use the command: drush zeroclipboard-plugin

3) On the "Administer > Site building > Modules" page, enable the Zero Clipboard module.

4) @TODO: In the module settings page "Administer > Site Configuration > Zero Clipboard",
enter the selectors of the items that you want to be processed with
Zero Clipboard.

5) To process an element with zeroClipboard, you only need to invoke
   Drupal.zeroClipboard.process(selector, clipCallback)
   The first argument would be a CSS/jQuery selector of the element
   The second argument is either:
     - The string that should be copied to the clipboard
     OR
     - A function that would return the string to be copied to the clipboard.


Contributions:
-------------
* This module would not be possible without the Zero Clipboard script itself.
Thanks to Will at SteamDev for making it available.
* Integration with the Libraries API module is largely based on code in the
following blog post:
http://engineeredweb.com/blog/10/5/3-tips-using-external-libraries-drupal