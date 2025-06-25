/*------------------------------------------------------TOGGLE BUTTON ----------------------------------------------------*/
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
}

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
