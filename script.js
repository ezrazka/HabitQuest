"use strict";

window.addEventListener("scroll", () => {
    document.querySelector('header').classList.toggle('background', window.scrollY > 0);
});