$(function() {
	var link = $("._eil8noz a[href$='/donate']");
    link.text("Learn and Earn");
	setInterval(function(){
		link.attr("href", "http://localhost:5000"); 
 	}, 1000);
    
    var button = link.parent();
    button.css('background-color', '#4CAF50');
    button.css('color', '#ffffff');
    button.css('border-color', '#4CAF50');
    button.css('padding', '7px');
    button.hover(function() {
    	button.css('color', '#ffffff');
    });



 //    function getCookies(domain, name, callback) {
	//     chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
	//         if(callback) {
	//             callback(cookie.value);
	//         }
	//     });
	// }

	//usage:
	chrome.extension.sendRequest("getStorageData", function(response) {
	    console.log("response:", response);
	}

});


function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}
