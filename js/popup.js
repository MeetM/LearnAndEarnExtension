// var LNR_DOMAIN = "http://localhost";
var LNR_DOMAIN = "https://www.khanacademy.org/";

$(function () {
  chrome.tabs.getSelected(undefined, function (tab) {
    chrome.cookies.getAll(
      {
        url: LNR_DOMAIN,
      },
      function (cookies) {
        for (var i = 0; i < cookies.length; i++) {
          $("#container").append(
            "<div id='box'>" +
              cookies[i].name +
              " => " +
              cookies[i].value +
              "</div>"
          );
        }
      }
    );
  });
});
