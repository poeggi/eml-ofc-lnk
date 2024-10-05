

How to use:

1. download and store this script on your website, in a path relative to your javascript contents  
   (e.g. "./eml-ofc-lnk/eml-ofc-lnk.mjs")

2. in your HTML, mark an element with a unique ID, this element will later be the link
   (e.g. an anchor, like: "<a id="contact-link" href=".." title="A nice title">")
  
3. choose or create a javascript in your website that will call this module,  
   (IMPORTANT: also call your own script also as module, otherwise it will not work (!):  
     <script type="module" src='/scripts/init.js'></script>)

5. in your javascript, include a reference / import of this modul  
   ("import {registerContact, isAgent} from './eml-ofc-lnk/eml-ofc-lnk.mjs';")

6. call the "isAgent()" function in your javascript to initialize  
   (optional for now)

7. call the "registerContact()" function to initialize.  
   You need three parameters to be set according to your needs:
     - the ID of the HTML element to change  
     - the email username (the part of an Email address preceding the @) in clear text
     - the obfuscated email damain (everything after the @) base64 encoded string (btoa)

9. enjoy

For an integration example, see https://www.poggensee.it
