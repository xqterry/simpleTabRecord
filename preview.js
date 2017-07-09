
// chrome.runtime.connect();

var rtport;

chrome.runtime.onConnect.addListener(
	function(port)
	{
		alert("wtf");
		rtport = port;
		rtport.onMessage.addListener(
  function(request, sender, sendResponse) {
  	alert("hi");
    if(request.action == "setBackground") document.body.style.background = "red";
  });
	});

