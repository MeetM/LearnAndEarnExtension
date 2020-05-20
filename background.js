
alert("running background");
chrome.cookies.getAll({domain: "www.khanacademy.org"}, function(cookies) {
console.log('Callback for cookies came in fine.');
console.log('cookies.length=' + cookies.length);        
    for(var i=0; i<cookies.length;i++) {
      console.log('cookie=' + cookies[i].name);
    }
});

chrome.cookies.set({"name":"address","url":"https://www.khanacademy.org","value":"Adress"},function (cookie){
        console.log(JSON.stringify(cookie));
        console.log(chrome.extension.lastError);
        console.log(chrome.runtime.lastError);
    });

alert("done background");

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request === "getStorageData") {
        sendResponse(localStorage["data"]);
    }
});