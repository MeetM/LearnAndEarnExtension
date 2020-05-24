var LNR_DOMAIN = "https://iiptw.csb.app/";
// var LNR_DOMAIN = "https://www.khanacademy.org/";

var TEN_DAYS_IN_SECONDS = 864000;

$(function () {
  addCookie(LNR_DOMAIN, "test", "testValue");
  checkIfLoggedIn(LNR_DOMAIN, handleUser, showLoggedOutView);
});

function handleUser(address) {
  if (address) {
    showLoginView();
    setAddressView(address);
    addCourse("Art History", "90 days", "$100");
  }
}

function setAddressView(address) {
  $("#public-address").text(address);
}

function addCourse(courseName, time_left, amount_staked) {
  $(".course_list_data").append(
    '<div class="divTableCell">' +
      courseName +
      "<br />Time left : " +
      time_left +
      '</div><div class="divTableCell">' +
      amount_staked +
      "</div>"
  );
}

function showLoginView() {
  $("#userLoggedIn").css("visibility", "visible");
  $("#userNotLoggedIn").css("visibility", "hidden");
}

function showLoggedOutView() {
  $("#userLoggedIn").css("visibility", "hidden");
  $("#userNotLoggedIn").css("visibility", "visible");
}

function getStoredAddress(handle) {}

function addCookie(url, name, value) {
  var current_time_in_epoch = new Date().getTime() / 1000;
  chrome.cookies.set({
    url: url,
    name: name,
    value: value,
    expirationDate: current_time_in_epoch + TEN_DAYS_IN_SECONDS,
  });
}

function checkIfLoggedIn(url, loggedInCallBack, loggedOutCallBack) {
  // chrome.storage.local.get(["login-with-metamask:auth"], function (item) {
  //   $("#container").append("<div id='box'>" + item + "</div>");
  //   console.log(item["auth"]);
  // });
  chrome.cookies.get({ url: url, name: "auth" }, function (cookie) {
    if (cookie) {
      var obj = JSON.parse(decodeURIComponent(cookie.value));
      loggedInCallBack(obj["auth"]);
    } else {
      loggedOutCallBack();
    }
    // $("#container").append(
    //   "<div id='box'>" +
    //     cookie.name +
    //     " => " +
    //     decodeURIComponent(cookie.value) +
    //     "</div>"
    // );

    // console.log();
  });
}
