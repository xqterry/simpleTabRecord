// (function() {
	// var runtimePort = chrome.runtime.connect({
 //        name: location.href.replace(/\/|:|#|\?|\$|\^|%|\.|`|~|!|\+|@|\[|\||]|\|*. /g, '').split('\n').join('').split('\r').join('')
 //    });

function register()
{
	chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    
	    // alert("resume video playing : " + msg.text);

	    /* If the received message has the expected format... */
	    if (msg.text && (msg.text == "resume_video")) {
	        
	    	// alert("resume video playing");

	    	sendResponse(" - mission acomplished");

	    	var div=document.createElement("div"); 
			document.body.appendChild(div); 
			div.innerText="save/export";

			var video = document.createElement("video");
			div.appendChild(video);
			// video.src = URL.createObjectURL(msg.data);
	    }

	  //   setTimeout(function() {
			// register();
   //      }, 1500);

	});
}

	register();
	

// })();
