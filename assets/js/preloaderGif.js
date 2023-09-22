document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    hidePreloader();
  }, 6000); // 6000 milliseconds (6 seconds)
});

function hidePreloader() {
  // Hide the loading screen
  const loadingScreen = document.getElementById("loading-screen");

  // Add an event listener for the 'transitionend' event
  loadingScreen.addEventListener("transitionend", function () {
    // Once the opacity transition is complete
    if (loadingScreen.style.opacity == 0) {
      loadingScreen.style.display = "none";
      // Display the main content
      document.getElementById("nav").style.display = "block";
      document.getElementById("main").style.display = "block";
    }
  });

  // Hide the loading screen by setting opacity
  loadingScreen.style.opacity = 0;
}
