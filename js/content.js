$(function () {
  function changeSubmitTestButton() {
    if ($("._1alfwn7n").text().includes("Done")) {
      // $("._1alfwn7n").text("Submit to Learn and Earn");
      $("._1alfwn7n").text("");
      $("._1alfwn7n").append(
        '<a herf="https://iiptw.csb.app/loggedin">Submit to Learn and Earn</a>'
      );

      $("._1alfwn7n").click(function (event) {
        event.preventDefault();
        openLoggedIn();
      });
      $("._1alfwn7n")
        .parent()
        .click(function (event) {
          event.preventDefault();
          openLoggedIn();
        });
    }
  }
  function openLoggedIn() {
    var win = window.open("https://iiptw.csb.app/loggedin", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert("Please allow popups for this website");
    }
  }

  function changeLNRLink() {
    if (timer) {
      clearInterval(timer);
    }
    // console.log(location.href);
    var timer = setInterval(function () {
      var params = window.location.href.split("/");
      console.log("params ", params);
      if (params[4]) {
        var topic = params[3];
        var course = params[4];
        var link = $("._eil8noz a[href$='/donate']");
        link.text("$ Learn and Earn");
        // var newUrl =
        //   "http://localhost:3000?topic=" + topic + "&course=" + course;
        var newUrl =
          "https://iiptw.csb.app/login?topic=" + topic + "&course=" + course;
        link.attr("href", newUrl);

        link.click(function (event) {
          event.preventDefault();
          window.open(newUrl, "_blank");
        });
      }
    }, 2000);
  }

  changeLNRLink();
  setInterval(changeSubmitTestButton, 2000);

  function hackForOnUrlChange(callback) {
    var oldHref = document.location.href;

    window.onload = function () {
      var bodyList = document.querySelector("body"),
        observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (oldHref != document.location.href) {
              oldHref = document.location.href;
              callback();
            }
          });
        });

      var config = {
        childList: true,
        subtree: true,
      };

      observer.observe(bodyList, config);
    };
  }

  hackForOnUrlChange(changeLNRLink);
});
