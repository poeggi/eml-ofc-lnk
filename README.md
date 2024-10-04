

How to use:

1. download and store this script on your website, in a path relative to your javascript contents

2. in your HTML, mark an element with a unique ID, this element will later be the link
   (e.g. an anchor with a dummy href, like: "<a id="contact-link" href=".." title="A nice title">")
  
3. choose or create a javascript in your website that will call this module,  
   (call your script also as module (!): <script type="module" src='/scripts/init.js'></script>)

5. in the javascript, include a reference / import of this module
    ("import {registerContact, isAgent} from './eml-ofc-lnk/eml-ofc-lnk.mjs';")

6. call the "isAgent()" function in your javascript to initialize

7. call the "registerContact()" function, as parameters: the ID to change, the obfuscated email

8. enjoy


For an integration example, see https://www.poggensee.it
