// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const date = document.getElementById("date")

date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
 const  linksContainerheight  = linksContainer.getBoundingClientRect().height;
 const linksHeight = links.getBoundingClientRect().height;
  if (linksContainerheight === 0) {
   linksContainer.style.height = `${linksHeight}px`;


 }
 else {
   linksContainer.style.height = "0"
 }
})

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
  const scroll = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if(scroll > navHeight){
    navbar.classList.add("fixed-nav")
  }
  else {
    navbar.classList.remove("fixed-nav")

  }

  if ( scroll > 500) {
    topLink.classList.add("show-link")

  }
  else {
    topLink.classList.remove("show-link")

  }
})

const scrollLink = document.querySelectorAll(".scroll-link");
 scrollLink.forEach(function(item){
   item.addEventListener("click" ,function(e){
     e.preventDefault();
     const id = e.currentTarget.getAttribute("href");
     const element = document.querySelector(id);
     const navHeight = navbar.getBoundingClientRect().height;
     const Containerheight = linksContainer.getBoundingClientRect().height;
     const fixedNav = navbar.classList.contains("fixed-nav")

     let position = element.offsetTop - navHeight;

     if(!fixedNav){
       position = position - navHeight;
     }

     if( navHeight > 82){
       position = position + Containerheight
     }
     window.scrollTo({
       left:0,
       top:position,
     });
     linksContainer.style.height = 0;

   })

 });
