function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");

  const banner = document.querySelector(".banner-link-wrapper");
  banner.classList.toggle("banner-expanded");
}

function closeLoginBanner() {
  const innerGrid = document.querySelector(".inner-grid");
  innerGrid.classList.toggle("innergrid-hide-banners");

  const loginBanner = document.querySelector(".login-banner");
  loginBanner.classList.toggle("close-login-banner");
}
