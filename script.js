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

typeText('typedH1', originalH1, 0, 50); 
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
