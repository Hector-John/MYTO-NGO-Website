function animateText(element) {
    const text = element.innerHTML.trim();
    element.innerHTML = ''; // Clear the original text

    // Wrap each character in a span and append to the element
    text.split('').forEach((char, index) => {
      const charSpan = document.createElement('span');
      charSpan.innerHTML = char;
      charSpan.style.opacity = 0;
      charSpan.style.transition = `opacity 0.5s ${index * 0.1}s`;
      element.appendChild(charSpan);

      // Trigger reflow to apply the initial opacity
      void charSpan.offsetWidth;
      charSpan.style.opacity = 1;
    });
  }

  // Trigger text animation when the page loads
  window.onload = function () {
    const heading = document.querySelector('.heading h1');

    animateText(heading);
  };


  // -----------------------icons
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            document.getElementById("icon-container").style.display = "flex";
        } else {
            document.getElementById("icon-container").style.display = "none";
        }
    });
    document.getElementById("up-arrow-icon").addEventListener("click", function () {
        // Scroll back to the top
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      var topHomeIcon = document.getElementById("top-home-icon");
      if (window.scrollY > 120) {
          topHomeIcon.classList.add("faded");
      } else {
          topHomeIcon.classList.remove("faded");
      }

      var iconContainer = document.getElementById("icon-container");
      if (window.scrollY > 200) {
          iconContainer.style.display = "flex";
      } else {
          iconContainer.style.display = "none";
      }
  });

  document.getElementById("home-icon").addEventListener("click", function () {
      window.location.href = "../home.html";
  });

  document.getElementById("up-arrow-icon").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
