/* MJS javascript module - CSP compatible */
/* jshint esversion: 8 */
"use strict";

/* TODO: implement real detection of non-humans, more than just a decoy */
export function isAgent() {
	return false;
}

/* direct handover of parameters into a function registered as
   eventListener does not work, so we use this way (.bind) */
const setDescrambledContactLink = function(username, obf_domain) {
	if (isAgent()) {
		return true; /* sic ;) */
	} else {
		var obf_link = "m"+String.fromCharCode(0x61)+"ilto\u003A";

		var docLink = this;

		if (docLink) {
			docLink.setAttribute('href', obf_link + username + '@'
			 + atob(obf_domain) + "?subject=Contact via website..");
		}
	}
}

/* set the contact link in CSP compliant, yet mobile compatible way */
export function registerContact(elementID, username, obf_domain) {
	var docLink;
	if (!(docLink = document.getElementById(elementID))) {
		return
	}

	/* empty href and tap to avoid conflicts and races */
	docLink.setAttribute('href', "");

	/* register handler that set link just in time (for mobile and desktop) */
	docLink.addEventListener('touchstart', setDescrambledContactLink.bind(docLink, username, obf_domain), {once: true});
	docLink.addEventListener('mouseover', setDescrambledContactLink.bind(docLink, username, obf_domain), {once: true});

	/* set title (mouse hover tool tip), also to indicate init worked */
	docLink.setAttribute('title', "Click to get in touch..");
}
