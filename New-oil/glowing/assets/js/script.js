'use strict';
/** 
 * Search field function
 */
const searchInput = document.querySelector('[data-search]')
searchInput.addEventListener("input" , (e)=> {
   const value = e.target.value
   console.log(value)
})
/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}
//Close button function 
function closeWindow(){
  document.getElementById("panel").style.display = "none"
}
/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);
//search bar
// function searchBar(){
//   var input , filter , ul , li , a ,i , txValue ;
//   input = document.getElementById('search-field');
//   filter = input.value.toUppercase();
//   ul = document.getElementById('myUl');
//   li = document.getElementsByTagName('li');
//   for (i=0 ; i<li.length ;i++){
//     a = li[i].getElementsByTagName('a')[0];
//     txValue= a.textContent || a.innerText;
//     if (txValue.toUpperCase().indexOf(filter)> -1 ){
//       li[i].style.display ="";
//     }else{
//       li[i].style.display = 'none';
//     }
  
//   }

// }
/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);