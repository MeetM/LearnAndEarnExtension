var LNR_DOMAIN = "http://localhost:3000";
// var LNR_DOMAIN = "https://www.khanacademy.org/";

var TEN_DAYS_IN_SECONDS = 864000;

$(function () {
  addCookie(LNR_DOMAIN, "test", "testValue");
  showCookies(LNR_DOMAIN);
});

function addCookie(url, name, value) {
  var current_time_in_epoch = new Date().getTime() / 1000;
  chrome.cookies.set({
    url: url,
    name: name,
    value: value,
    expirationDate: current_time_in_epoch + TEN_DAYS_IN_SECONDS,
  });
}

function showCookies(url) {
  chrome.tabs.getSelected(undefined, function (tab) {
    chrome.cookies.getAll(
      {
        url: url,
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
}
