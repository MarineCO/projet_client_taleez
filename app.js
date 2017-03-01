<<<<<<< HEAD
console.log('cette extension est liée a linkedin');
console.log('hohoho');
=======
var headings = document.evaluate("/html/body//h1", document, null, XPathResult.ANY_TYPE, null); 
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

var headings = document.evaluate("/html/body//h2", document, null, XPathResult.ANY_TYPE, null); 
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
>>>>>>> b5f5f9acdbc00a477976e32c46612c8722e22665
