(function() {

	"use strict"

	var app = {

		XPath: ["/html/body//h1[contains(@class, 'name')]", "/html/body//h2[contains(@class, 'headline')]", "/html/body//section[contains(@class, 'ci-email')]", "/html/body//span[contains(@class, 'pv-skill-entity__skill-name')]"],
		tab: [],

		init: function() {
			this.getData();
		},

		getData: function() {
			
			chrome.runtime.onMessage.addListener(
				function(request, sender, sendResponse) {

					app.triggerClick();

					app.XPath.forEach(function(element) {
						var headings = document.evaluate(element, document, null, XPathResult.ANY_TYPE, null);

						var thisHeading = headings.iterateNext(); 
						var element = "";
						while (thisHeading) {
							element += thisHeading.textContent + "\n";
							thisHeading = headings.iterateNext();
						}
						app.tab.push(element);
					console.log(element);
					});
					sendResponse(app.tab);
				}
			);
		},

		triggerClick: function() {
			var btnContact = document.querySelector('.contact-see-more-less');
			//var btnCompetence = document.querySelector('.pv-skills-section__additional-skills');
			
			console.log(btnContact);
			//console.log(btnCompetence);
			
			btnContact.click();
			//btnCompetence.click();
		},
	}
	document.addEventListener("DOMContentLoaded", app.init());

})();
