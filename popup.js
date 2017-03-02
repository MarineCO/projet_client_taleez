chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {sendInfo: true}, function(tab) {
		

		console.log(tab);

		var a = document.createElement('h5');
		a.innerHTML = "your name is "+tab;
		document.body.appendChild(a);
	});
});



