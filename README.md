# Em(ai)l-o(b)f(us)c(ated)-l(i)nk

## Abstract
A simplistic Java-script module to create an Email-link (mailto:) with an arbitrary Email address on your website, in privacy protected way.

The Email in the link created cannot be ready by a static analysis tool or a simple passive contents parser, can not be matched by simple regular expressions etc.  
Furthermore, the Email address will also not be indexed by search engines nor will it be saved by e.g. the Internet Wayback Machine (aka Internet Archive).

Works for mobile and desktop clients, in all major browsers. Code is CSP-safe and strict.


## How to use
1. download and store this script on your web-server, under a path relative to your java-scripts  
   (e.g. under "/scripts/eml-ofc-lnk/eml-ofc-lnk.mjs")

2. in your HTML/website, mark an element with a unique ID, this element will later be the link  
   (e.g. an anchor, like: ```<a id="contact-link" href=".." title="A nice title">```)
  
3. choose or create a java-script in your website that will call this module,  
   (IMPORTANT: also call your own script also as module, otherwise it will not work (!):  
    ```<script type="module" src='/scripts/init.js'></script>```)

5. in your java-script, include a reference / import of this modul  
   (```import {registerContact, isAgent} from './eml-ofc-lnk/eml-ofc-lnk.mjs';```)

6. call the ```isAgent()``` function in your java-script to initialize  
   (optional for now)

7. call the ```registerContact()``` function to initialize.  
   You need three (3) parameters, set them according to your needs:
     - the **ID** of the HTML element to change  
     - the email **username** (the part of an Email address preceding the @) in clear text
     - the obfuscated email **domain** (everything after the @) base64 encoded string (btoa)

8. enjoy

## Example

For an integration example, see https://www.poggensee.it
