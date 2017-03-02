(function() {

	"use strict"

	var app = {

		init: function() {
			this.displayData();
		},

		displayData: function() {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {sendInfo: true}, function(response) {

					console.log(response);

					var name = response[0];
					var headline = response[1];

					document.getElementById('name').value = name;
					document.getElementById('headline').value = headline;
				});
			});
		}
	}
	app.init();
})();

