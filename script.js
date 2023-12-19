  // Define the typeText function
  function typeText(elementId, originalText, index, speed) {
    if (index < originalText.length) {
      // Append the next character to the typedText span
      document.getElementById(elementId).textContent += originalText.charAt(index);

      // Call the function recursively with a customized delay
      setTimeout(function () {
        typeText(elementId, originalText, index + 1, speed);
      }, speed); // Adjust the delay as needed
    }
  }

  // Define the original text for 'typedH1' and 'typedP'
  var originalH1 = "Empowerment on Education, Economic and Health Care.";
  var originalP = "To alleviate poverty, improve access to education, health care services and mitigating the impact of HIV/AIDs among orphans, vulnerable children and the poor in general.";

  // Clear the initial content before starting the typing animation
  document.getElementById('typedH1').textContent = '';
  document.getElementById('typedP').textContent = '';

  // Call the typeText function for the span with id "typedH1"
  typeText('typedH1', originalH1, 0, 50);

  // Call the typeText function for the span with id "typedP"
  typeText('typedP', originalP, 0, 25);





function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';

    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            window.location.href = link.href;

            hideSidebar();
        });
    });
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function redirectToIndex() {
    // window.location.href = 'blog.html';
    window.open('blog.html', '_blank');
}
