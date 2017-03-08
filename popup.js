(function() {

	"use strict"

	var popup = {

		tab: [],

		

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
					app.envoiDonee(response);




				});
			});
		},

		envoiDonee:function(response){

			console.log(response);


			document.getElementById("valid").addEventListener("click",function(response){
				
				console.log(response);
				var request= new XMLHttpRequest();
				request.open("POST","insert.php", true);
				request.send(console.log(response[0]));
				

			});
		}


		

	}

	popup.init();

})();

