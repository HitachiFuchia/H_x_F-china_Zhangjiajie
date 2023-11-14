"use strict";

// About me Section

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("show");
  } else {
    entries[0].target.classList.remove("show");
  }
});

const aboutZhangjiajieHeading = document.querySelector(".about__Zhangjiajie--heading");

observer.observe(aboutZhangjiajieHeading);

const tour__Zhangjiajie = document.querySelector(".tour__Zhangjiajie");

observer.observe(tour__Zhangjiajie);


const observer_secSkills = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show2")
    } else {
      entry.target.classList.remove("show2");
    }
  });
})

const about__Zhangjiajie = document.querySelectorAll(".about-flex-container");

about__Zhangjiajie.forEach((el) => observer_secSkills.observe((el)));


const observer_secBenefits = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show3")
    } else {
      entry.target.classList.remove("show3");
    }
  });
})

const tourBenefits = document.querySelectorAll(".flex-benefits-container");

tourBenefits.forEach((el) => observer_secBenefits.observe((el)));

const tour__ZhangjiajieChooseTour = document.querySelector(".tour__Zhangjiajie--choose-tour");

observer.observe(tour__ZhangjiajieChooseTour);


const observer_flexTourContainer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show4")
    } else {
      entry.target.classList.remove("show4");
    }
  });
})

const flexTourContainer = document.querySelectorAll(".flex-tour-container");

flexTourContainer.forEach((el) => observer_flexTourContainer.observe((el)));

const Footer = document.querySelector("footer");

observer.observe(Footer);
