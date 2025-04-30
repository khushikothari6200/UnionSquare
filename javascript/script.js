window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navigation-bar");
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });