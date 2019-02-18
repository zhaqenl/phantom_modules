"use strict";
var fs = require("fs");
var page = require("webpage").create(),
    system = require("system"),

    // get arguments from command line
    favicon = system.args[1],
    oldHTML = system.args[2],
    outputHTML = system.args[3];

page.open(oldHTML, function() {
    
    var sourceHTML = page.evaluate(function() {

	// return html content of oldHTML
	return document.documentElement.outerHTML;
    }),    
        newHTML = page.evaluate(function(favicon) {
	    var headElement = document.getElementsByTagName("head")[0],
	        newLinkElement = document.createElement("link");

	    // set attributes of new link element
	    newLinkElement.setAttribute("rel", "icon");
	    newLinkElement.setAttribute("type", "img/ico");
	    newLinkElement.setAttribute("href", favicon);

	    // append new link element to head element
            headElement.appendChild(newLinkElement);
	    
	    return document.documentElement.outerHTML;
	}, favicon);

    console.log("\nOld HTML:");
    console.log(sourceHTML + "\n");
    console.log("New HTML:");
    console.log(newHTML);

    // write from newHTML content to outputHTML file 
    fs.write(outputHTML, newHTML, "w");
    
    phantom.exit();
});
