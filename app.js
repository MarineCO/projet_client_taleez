(function() {

	"use strict"

	var app = {

		XPath: ["/html/body//h1[contains(@class, 'name')]", "/html/body//h2[contains(@class, 'headline')]"],
		tab: [],

		init: function() {
			this.getData();
		},

		getData: function() {
			chrome.runtime.onMessage.addListener(
				function(request, sender, sendResponse) {

					app.XPath.forEach(function(element) {
						var headings = document.evaluate(element, document, null, XPathResult.ANY_TYPE, null);

						var thisHeading = headings.iterateNext(); 
						var element = "";
						while (thisHeading) {
							element += thisHeading.textContent + "\n";
							thisHeading = headings.iterateNext();
						}
						app.tab.push(element);
					});

					sendResponse(app.tab);
				}
			);
		}
	}
	app.init();
})();
