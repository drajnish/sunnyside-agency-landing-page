"use strict";

const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
