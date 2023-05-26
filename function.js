function showPopup() {
alert("This is the web portfolio page!");
}
document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');

  toggleButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
  });

  // Close the dropdown menu when clicking outside
  document.addEventListener('click', function(event) {
    var targetElement = event.target;
    if (!dropdownMenu.contains(targetElement) && targetElement !== toggleButton) {
      dropdownMenu.classList.remove('show');
    }
  });
});

