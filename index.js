//scrollreveal to reveal each section while scrolling down

ScrollReveal().reveal(".header");
ScrollReveal().reveal(".about", { delay: 500 });
ScrollReveal().reveal(".whatIsTechno", { delay: 500 });
ScrollReveal().reveal(".favArtists", { delay: 500 });
ScrollReveal().reveal(".contact", { delay: 500 });

ScrollReveal().reveal(".type1");
ScrollReveal().reveal(".type2", { delay: 500 });
ScrollReveal().reveal(".type3", { delay: 500 });
ScrollReveal().reveal(".type4", { delay: 500 });
ScrollReveal().reveal(".type5", { delay: 500 });

const copyright = document.querySelector(".copyright");

const year = new Date().getFullYear();

copyright.innerText = `Copyright © ${year} Antonio Beltrán`;
