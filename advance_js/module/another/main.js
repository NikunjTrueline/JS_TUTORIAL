let { intro, webLanguage , loggedInStatus} = await import("./controller.js");

intro();
webLanguage();

function loggedInStatusCheck(status) {
  if (status) {
    console.log("Yes, user loggedIn.");
  } else {
    console.log("No, user not loggedIn");
  }
}

loggedInStatusCheck(loggedInStatus)

