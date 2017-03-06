(function() {

	"use strict"

	var app = {

		tab: [],

		init: function() {
			this.displayData();
		},

		displayData: function() {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {sendInfo: true}, function(response) {

					console.log(response);

					var name = response[0];
					var headline = response[1];
					var linkedin = response[2];
					var email = response[3];
					var competences = response[4];

					document.getElementById('name').value = name;
					document.getElementById('headline').value = headline;
					document.getElementById('linkedin').value = linkedin;
					document.getElementById('mail').value = email;
					document.getElementById('competence').value = competences;
				
				});
			});
		}
	}
	app.init();
})();

