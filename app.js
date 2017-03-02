



chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {


		var response = ["/html/body//h1[contains(@class, 'name')]", "/html/body//h2[contains(@class, 'headline')]"];
		var tab=[];
		
		response.forEach(function(element) {
			var headings = document.evaluate(element, document, null, XPathResult.ANY_TYPE, null); 

			var thisHeading = headings.iterateNext(); 
			var element = "";
			while (thisHeading) {
				element += thisHeading.textContent + "\n";
				thisHeading = headings.iterateNext();

			}
			console.log(element);
			tab.push(element);

		});
		sendResponse(tab);

		

		














	}
	);