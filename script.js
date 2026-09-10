/*------------------------------------------------------ PROJECT CARD ----------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const one = document.querySelectorAll(".img3");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 200); // Staggered smooth animation
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    one.forEach(img3 => observer.observe(img3));
});

/*------------------------------------------------- DYNAMIC NAVBAR SCROLL SPY -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.pageYOffset + 120; // Offset for navbar height

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (current && link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

/*------------------------------------------------- CONTACT US PAGE VALIDATION -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill out all required fields.");
                return;
            }

            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            this.reset();
        });
    }
});

/*------------------------------------------------- TAMBLE BOOKING FORM -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".btn4");
  const overviewBtn = document.querySelector(".btn3");
  const overview = document.querySelector(".overview");
  const menu = document.querySelector(".menu-list");

  if (menuBtn && overviewBtn && overview && menu) {
    menuBtn.addEventListener("click", () => {
      overview.style.display = "none";
      menu.style.display = "block";
    });

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
      e.preventDefault();

      const name = document.getElementById("fname").value.trim();
      const guests = document.getElementById("number").value.trim();

      popupMessage.innerHTML = `Hi <strong>${name || "Guest"}</strong>, your table for <strong>${guests || "0"}</strong> guest(s) has been booked successfully!`;
      popup.style.display = "flex";
    });

    okBtn.addEventListener("click", function () {
      popup.style.display = "none";
      form.reset();
    });
  }
});