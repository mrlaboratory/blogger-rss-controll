// Get the ad unit
var adUnit = document.getElementById("ad-unit");

// Add a click event listener to the ad unit
adUnit.addEventListener("click", function() {
  // Check if the "ad_clicks" cookie exists
  if (document.cookie.indexOf("ad_clicks") >= 0) {
    // Get the current value of the "ad_clicks" cookie
    var adClicks = parseInt(getCookie("ad_clicks"));

    // Increment the value of the "ad_clicks" cookie
    adClicks++;

    // Update the "ad_clicks" cookie with the new value
    document.cookie = "ad_clicks=" + adClicks;

    // Check if the limit has been reached
    if (adClicks >= 3) {
      // Hide the ad unit or replace it with a message
      adUnit.style.display = "none";
    }
  } else {
    // Create the "ad_clicks" cookie with a value of 1
    document.cookie = "ad_clicks=1";
  }
});

// Function to get the value of a cookie
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
