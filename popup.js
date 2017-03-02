chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {sendInfo: true}, function(response) {

		console.log(response);
		let a = document.createElement('h1');
		a.innerHTML = response['name'] + '<br>'+ response['job'];
		document.body.appendChild(a);
	});
});