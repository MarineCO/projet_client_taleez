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

		postJson: function() {

			event.preventDefault();

			var postUrl = 'http://0.0.0.0:3052/insert.php';

			var hr = new XMLHttpRequest();
			hr.open('POST', postUrl, true);

			var name = document.getElementById('name').value;
			var headline = document.getElementById('headline').value;
			var competences = document.getElementById('competence').value;
			var linkedin = document.getElementById('linkedin').value;
			var tel = document.getElementById('tel').value;
			var email = document.getElementById('mail').value;

			var profil = 'name=' + name +
			'headline=' + headline +
			'linkedin=' + linkedin +
			'email=' + email +
			'tel=' + tel +
			'competences=' + competences; 

			hr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

			hr.onreadystatechange = function() { 

				if (hr.readyState == 4) {
					popup.statusDisplay.innerHTML = '';

					if (hr.status == 200) {
						popup.statusDisplay.innerHTML = 'Infos was sended!';
						window.setTimeout(window.close, 1200);

					} else {
						popup.statusDisplay.innerHTML = 'Error ! ' + xhr.statusText;
					}
				}
			};

			hr.send(profil);

			popup.statusDisplay.innerHTML = 'processing...';
		},

		toLoad: function() {

			window.addEventListener('load', function(e) {

				popup.statusDisplay = document.getElementById('status-display');

				var saveBtn = document.getElementById('add');
				saveBtn.addEventListener('submit', popup.postJson);
			});
		}
	}

	popup.init();
	popup.toLoad();

})();

