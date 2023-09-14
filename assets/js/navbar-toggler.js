document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button and collapsible div
  var button = document.getElementById("navbar-toggler");
  var collapseDiv = document.getElementById("navbarSupportedContent");

  // Add an event listener to the button to toggle the "show" class on the collapsible div
  button.addEventListener("click", function () {
    if (collapseDiv.classList.contains("show-nav")) {
      collapseDiv.classList.remove("show-nav");
    } else {
      collapseDiv.classList.add("show-nav");
    }
  });

  // Add an event listener to the collapsible div to remove the "show" class when a link inside of it is clicked
  collapseDiv.addEventListener("click", function () {
    if (collapseDiv.classList.contains("show-nav")) {
      collapseDiv.classList.remove("show-nav");
    }
  });
});
