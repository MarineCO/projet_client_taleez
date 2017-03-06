(function() {

	"use strict"

	var app = {

		XPathName: "/html/body//h1[contains(@class, 'name')]",
		XPathHeadline: "/html/body//h2[contains(@class, 'headline')]",
		XPathEmail: "/html/body//section[contains(@class, 'ci-email')]",
		XPathCompetences: "/html/body//span[contains(@class, 'pv-skill-entity__skill-name')]",
		XPathTab: [],
		tab: [],

		init: function() {
			this.getData();
		},

		getData: function() {

			this.XPathTab.push(this.XPathName, this.XPathHeadline, this.XPathLinkedin, this.XPathEmail, this.XPathCompetences);
			
			chrome.runtime.onMessage.addListener(
				function(request, sender, sendResponse) {

					app.triggerClick();

					//récupération lien linkedin et tél séparément car class identique indifféreciable avec le Xpath
					var allDiv = document.querySelectorAll('div.pv-contact-info__contact-item');
					
					var linkedin = allDiv[0].innerHTML;
					var tel = allDiv[1].innerHTML;
					

					app.XPathTab.forEach(function(element) {
						var headings = document.evaluate(element, document, null, XPathResult.ANY_TYPE, null);

						var thisHeading = headings.iterateNext(); 
						var element = "";
						while (thisHeading) {
							element += thisHeading.textContent + "\n";
							thisHeading = headings.iterateNext();
						}
						app.tab.push(element);
					});

					app.tab.push(linkedin, tel);
					console.log(app.tab);
					sendResponse(app.tab);
					
				}
				);
		},

		triggerClick: function() {
			var btnContact = document.querySelector('.contact-see-more-less');
			//var btnCompetence = document.getElementsByClassName('.tooltip-container');

			console.log(btnContact);
			//console.log(btnCompetence);
			
			btnContact.click();
			//btnCompetence.click();
		},
	}
	document.addEventListener("DOMContentLoaded", app.init());

})();
