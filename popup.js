(function() {

	"use strict"

	var popup = {

		tab: [],	
		statusDisplay: null,

		init: function() {
			this.displayData();			
		},

		displayData: function() {
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {sendInfo: true}, function(response) {

					// console.log(response);

					var name = response[0];
					var headline = response[1];
					var competences = response[2];
					var linkedin = response[3];
					var tel = response[4];
					var email = response[5];

					document.getElementById('name').value = name;
					document.getElementById('headline').value = headline;
					document.getElementById('mail').value = email;
					document.getElementById('competence').value = competences;
					document.getElementById('linkedin').value = linkedin;
					document.getElementById('tel').value = tel;
				});
			});
		},

		addToJSON: function() {

			event.preventDefault();

			var postUrl = 'http://localhost:2018/insert.php';

			var xhr = new XMLHttpRequest();
			xhr.open('POST', postUrl, true);

			var name = document.getElementById('name').value;
			var headline = document.getElementById('headline').value;
			var competences = document.getElementById('competence').value;
			var linkedin = document.getElementById('linkedin').value;
			var tel = document.getElementById('tel').value;
			var email = document.getElementById('mail').value;

			var profil = 'name=' + name +
			'&headline=' + headline +
			'&linkedin=' + linkedin +
			'&email=' + email +
			'&tel=' + tel +
			'&competences=' + competences; 

			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

			xhr.onreadystatechange = function() { 

				if (xhr.readyState == 4) {
					popup.statusDisplay.innerHTML = '';

					if (xhr.status == 200) {
						popup.statusDisplay.innerHTML = 'Saved!';
						window.setTimeout(window.close, 2000);

					} else {
						popup.statusDisplay.innerHTML = 'Error saving: ' + xhr.statusText;
					}
				}
			};

			xhr.send(profil);

			popup.statusDisplay.innerHTML = 'Saving...';
		},

		toLoad: function() {

			window.addEventListener('load', function(evt) {

				popup.statusDisplay = document.getElementById('status-display');

				var saveBtn = document.getElementById('addToJSON');
				saveBtn.addEventListener('submit', popup.addToJSON);
			});
		}
	}

	popup.init();
	popup.toLoad();

})();

