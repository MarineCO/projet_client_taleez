chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {sendInfo: true}, function(response) {
		

		console.log(response);
		var a = document.createElement('h5');
		a.innerHTML = "your name is "+response['name']+"your job is : "+response['job'];
		document.body.appendChild(a);
	});
});



