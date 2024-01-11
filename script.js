// document.addEventListener("DOMContentLoaded", function () {
//   // const hamburger = document.querySelector(".hamburger");
//   // const megaMenus = document.querySelectorAll(".mega-menu");
//   const searchInput = document.getElementById("searchInput");
//   const searchSuggestions = document.getElementById("searchSuggestions");

//   // hamburger.addEventListener("mouseover", function () {
//   //   megaMenus.forEach((menu) => (menu.style.display = "none"));
//   // });

//   // hamburger.addEventListener("click", function () {
//   //   megaMenus.forEach((menu) => (menu.style.display = "none"));
//   // });

//   // const categoryLinks = document.querySelectorAll(".category-link");

//   // categoryLinks.forEach((link) => {
//   //   link.addEventListener("mouseover", function () {
//   //     const category = this.getAttribute("data-category");
//   //     megaMenus.forEach((menu) => (menu.style.display = "none"));
//   //     const categoryMenu = document.getElementById(`${category}-menu`);
//   //     if (categoryMenu) {
//   //       categoryMenu.style.display = "block";
//   //     }
//   //   });
//   // });

//   searchInput.addEventListener("focus", function () {
//     searchSuggestions.style.display = "block";
//   });

//   searchInput.addEventListener("blur", function () {
//     searchSuggestions.style.display = "none";
//   });
// });

// document.querySelector(".hamburger").addEventListener("mouseover", openSidebar);
// document.querySelector(".navbar").addEventListener("mouseleave", closeSidebar);

// function openSidebar() {
//   document.getElementById("sidebar").style.left = "0";
// }

// function closeSidebar() {
//   document.getElementById("sidebar").style.left = "-250px";
// }

const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".category-link");
const submenus = document.querySelectorAll(".submenu");
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");

hamburger.addEventListener("mouseover", openSidebar);
sidebar.addEventListener("mouseleave", closeSidebar);

searchInput.addEventListener("focus", function () {
  searchSuggestions.style.display = "block";
});

searchInput.addEventListener("blur", function () {
  searchSuggestions.style.display = "none";
});
// Add event listeners for each main menu item
navLinks.forEach((link) => {
  link.addEventListener("mouseover", showSubmenu);
});

function openSidebar() {
  sidebar.style.left = "0";
}

function closeSidebar() {
  sidebar.style.left = "-250px";
  submenus.forEach((submenu) => {
    submenu.style.display = "none";
  });
}

function showSubmenu(event) {
  const category = event.target.getAttribute("data-category");
  submenus.forEach((submenu) => {
    submenu.style.display = "none";
  });

  const submenuToShow = document.getElementById(`${category}-submenu`);
  if (submenuToShow) {
    submenuToShow.style.display = "block";
  }
}
