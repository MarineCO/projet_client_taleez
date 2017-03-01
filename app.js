

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		var headings = document.evaluate("//*[@id="ember3887"]/div[3]/div[1]/h1", document, null, XPathResult.ANY_TYPE, null); 
/* Search the document for all h2 elements.  
* The result will likely be an unordered node iterator. */
var thisHeading = headings.iterateNext(); 
var name = "";
while (thisHeading) {
	name += thisHeading.textContent + "\n";
	thisHeading = headings.iterateNext();
	// document.getElementById('job').innerHTML=alertText;
}
console.log("votre nom est :"+name);

var headings = document.evaluate("//*[@id="ember3843"]/div[3]/div[1]/h2", document, null, XPathResult.ANY_TYPE, null); 
/* Search the document for all h2 elements.  
* The result will likely be an unordered node iterator. */
var thisHeading = headings.iterateNext(); 
var job = "";
while (thisHeading) {
	job += thisHeading.textContent + "\n";
	thisHeading = headings.iterateNext();
	// document.getElementById('job').innerHTML=alertText;
}
console.log("votre travaille :"+job);




var reponse={name,job};

sendResponse(reponse);
});
