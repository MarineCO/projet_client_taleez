chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {sendInfo: true}, function(response) {

		console.log(response);

		var name = response[0];
		var headline = response[1];

	});
});