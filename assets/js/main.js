let nav = document.querySelector("nav");

// OPEN
document.querySelector(".open").addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
// Close
document.querySelector(".close").addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// Cleanup
let navs = document.getElementsByClassName("site-link");
for (let index = 0; index < navs.length; index++) {
  navs[index].addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}
