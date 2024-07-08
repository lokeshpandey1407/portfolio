const hamburger = document.querySelector(".hamburger");
const lineOne = document.querySelector(".first");
const lineTwo = document.querySelector(".second");
const lineThree = document.querySelector(".third");

const dropdownMenu = document.querySelector(".dropdown_menu_small");

const navLinks = document.querySelectorAll(".dropdown_link");

const handleCloseMenu = () => {
  dropdownMenu.classList.remove("dropdown_menu_small_open");
  lineOne.classList.remove("firstOpen");
  lineTwo.classList.remove("secondOpen");
  lineThree.classList.remove("thirdOpen");
};

const handleOpenMenu = () => {
  dropdownMenu.classList.add("dropdown_menu_small_open");
  lineOne.classList.add("firstOpen");
  lineTwo.classList.add("secondOpen");
  lineThree.classList.add("thirdOpen");
};

const handleHamburger = () => {
  if (dropdownMenu.classList.contains("dropdown_menu_small_open")) {
    handleCloseMenu();
  } else {
    handleOpenMenu();
  }
};

hamburger.addEventListener("click", handleHamburger);
navLinks.forEach((link) => link.addEventListener("click", handleCloseMenu));
