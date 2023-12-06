document.addEventListener('DOMContentLoaded', function () {
    // Get the text content of the spans
    var originalH1 = document.getElementById('typedH1').textContent;
    var originalP = document.getElementById('typedP').textContent;

    // Clear the original text content
    document.getElementById('typedH1').textContent = '';
    document.getElementById('typedP').textContent = '';

    // Function to simulate typing animation
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

    // Call the typing animation function on page load for h1 and p
    typeText('typedH1', originalH1, 0, 50); // Speed for h1
    typeText('typedP', originalP, 0, 25); // Faster speed for p
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

