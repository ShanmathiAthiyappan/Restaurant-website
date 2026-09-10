/*------------------------------------------------------ PROJECT CARD ----------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const one = document.querySelectorAll(".img3");

    if (one.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 200); // Smooth delay
                } else {
                    // Remove the class when out of view so animation restarts
                    entry.target.classList.remove("show");
                }
            });
        }, { threshold: 0.1 });

        one.forEach(img3 => observer.observe(img3));
    }
});

/*------------------------------------------------- CONTACT US PAGE VALIDATION -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const message = messageInput ? messageInput.value.trim() : "";

            if (!name || !email || !message) {
                alert("Please fill out all required fields.");
                return;
            }

            // You can connect this to a backend or use EmailJS for real sending
            alert("Thank you! Your message has been sent successfully.");
            this.reset();
        });
    }
});

/*------------------------------------------------- TABLE BOOKING FORM -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".btn4");
  const overviewBtn = document.querySelector(".btn3");
  const overview = document.querySelector(".overview");
  const menu = document.querySelector(".menu-list");

  // Show menu when clicking Menu
  if (menuBtn && menu && overview) {
      menuBtn.addEventListener("click", () => {
        overview.style.display = "none";
        menu.style.display = "block";
      });
  }

  // Show overview when clicking Overview
  if (overviewBtn && menu && overview) {
      overviewBtn.addEventListener("click", () => {
        menu.style.display = "none";
        overview.style.display = "flex";
      });
  }

  const form = document.querySelector(".bookform");
  const popup = document.getElementById("popup");
  const okBtn = document.getElementById("okBtn");
  const popupMessage = document.getElementById("popupMessage");

  if (form && popup && okBtn && popupMessage) {
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        const fnameInput = document.getElementById("fname");
        const numberInput = document.getElementById("number");

        const name = fnameInput ? fnameInput.value.trim() : "";
        const guests = numberInput ? numberInput.value.trim() : "0";

        popupMessage.innerHTML = `Hi <strong>${name || "Guest"}</strong>, your table for <strong>${guests || "0"}</strong> guest(s) has been booked successfully!`;
        popup.style.display = "flex"; // Show popup
      });

      okBtn.addEventListener("click", function () {
        popup.style.display = "none"; // Hide popup
        form.reset(); // Clear the form after booking
      });
  }
});