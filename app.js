chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		//extract the name
		var headings = document.evaluate("/html/body//h1[contains(@class, 'name')]", document, null, XPathResult.ANY_TYPE, null); 

		var thisHeading = headings.iterateNext(); 
		var name = "";
		while (thisHeading) {
			name += thisHeading.textContent + "\n";
			thisHeading = headings.iterateNext();
		}

		//extract the headline
		var headings = document.evaluate("/html/body//h2[contains(@class, 'headline')]", document, null, XPathResult.ANY_TYPE, null); 

		var thisHeading = headings.iterateNext(); 
		var job = "";
		while (thisHeading) {
			job += thisHeading.textContent + "\n";
			thisHeading = headings.iterateNext();
		}

		var reponse={name,job};

		sendResponse(reponse);
	}
);
