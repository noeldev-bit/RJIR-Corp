let search = document.querySelector("#search");
let myform = document.querySelector(".search-form");
let menubar = document.querySelector("#menu-bar")
let mymenubar = document.querySelector(".navbar")

search.onclick = () =>{
    myform.classList.toggle('active')
    mymenubar.classList.remove("active")
}
menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mymenubar.classList.toggle("active")
    myform.classList.remove('active')
}

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


