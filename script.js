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

/*------------------------------------------------- TAMBLE BOOKING FORM -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".btn4");
  const overviewBtn = document.querySelector(".btn3");
  const overview = document.querySelector(".overview");
  const menu = document.querySelector(".menu-list");

  // Show menu when clicking Menu
  menuBtn.addEventListener("click", () => {
    overview.style.display = "none";
    menu.style.display = "block";
  });

  // Show overview when clicking Overview
  overviewBtn.addEventListener("click", () => {
    menu.style.display = "none";
    overview.style.display = "flex";
  });

  const form = document.querySelector(".bookform");
  const popup = document.getElementById("popup");
  const okBtn = document.getElementById("okBtn");
  const popupMessage = document.getElementById("popupMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("fname").value.trim();
    const guests = document.getElementById("number").value.trim();

    popupMessage.innerHTML = `Hi <strong>${name || "Guest"}</strong>, your table for <strong>${guests || "0"}</strong> guest(s) has been booked successfully!`;
    popup.style.display = "flex"; // Show popup
  });

  okBtn.addEventListener("click", function () {
    popup.style.display = "none"; // Hide popup
    form.reset(); // Clear the form after booking
  });
});
