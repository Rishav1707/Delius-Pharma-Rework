document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    hidePreloader();
  }, 6000); // 6000 milliseconds (6 seconds)
});

function hidePreloader() {
  // Hide the loading screen
  document.getElementById("loading-screen").style.display = "none";

  // Display the main content
  document.getElementById("main").style.display = "block";
}
