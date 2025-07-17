/*------------------------------------------------------ PROJECT CARD ----------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const one = document.querySelectorAll(".img3");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 500); // Delay each item by 500ms
            } else {
                // Remove the class when out of view so animation restarts
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    one.forEach(img3 => observer.observe(img3));
});

/*------------------------------------------------- CONTACT US PAGE VALIDATION -----------------------------------------------*/
document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all required fields.");
        return;
      }

      // You can connect this to a backend or use EmailJS for real sending
      alert("Thank you! Your message has been sent successfully.");
      this.reset();
    });
