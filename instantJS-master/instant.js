"use strict";
var fs = require("fs");
var page = require("webpage").create(),
    system = require("system"),

    // get arguments from command line
    oldHTML = system.args[1],
    outputHTML = system.args[2];

page.open(oldHTML, function() {
    
    var sourceHTML = page.evaluate(function() {

	// return html content of oldHTML
	return document.documentElement.outerHTML;
    }),    
        newHTML = page.evaluate(function(favicon) {
	    var bodyElement = document.getElementsByTagName("body")[0],
	        newScriptElement = document.createElement("script");

	    // set attributes of new script element
	    newScriptElement.setAttribute("src", "//instant.page/1.1.0");
	    newScriptElement.setAttribute("type", "module");
	    newScriptElement.setAttribute("integrity", "sha384-EwBObn5QAxP8f09iemwAJljc+sU+eUXeL9vSBw1eNmVarwhKk2F9vBEpaN9rsrtp");

	    // append new script element to body element
            bodyElement.appendChild(newScriptElement);
	    
	    return document.documentElement.outerHTML;
	});

    console.log("\nOld HTML:");
    console.log(sourceHTML + "\n");
    console.log("New HTML:");
    console.log(newHTML);

    // write from newHTML content to outputHTML file 
    fs.write(outputHTML, newHTML, "w");
    
    phantom.exit();
});
