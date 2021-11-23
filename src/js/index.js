import "../scss/main.scss";
import * as kk from "../js/projectsSection"
console.log("HELLO 🚀");



const buttonAbout = document.querySelector(".menu__list__item__about--js");
const buttonSkill = document.querySelector(".menu__list__item__skills--js");
const buttonProject = document.querySelector(".menu__list__item__projects--js");
const buttonContact = document.querySelector(".menu__list__item__contact--js");

const aboutSection = document.querySelector(".about--js");
const skillsSection = document.querySelector(".skills--js");
const projectsSection = document.querySelector(".projects--js");
const contactSection = document.querySelector(".contact--js");
const sectionArray = [
  aboutSection,
  skillsSection,
  projectsSection,
  contactSection,
];

for (let section of sectionArray) {
  section.classList.add("hide_section");
  console.log(section);
}
sectionArray[0].classList.remove("hide_section");

buttonAbout.addEventListener("click", () => {
  switchSection(0);
});
buttonSkill.addEventListener("click", () => {
  switchSection(1);
});
buttonProject.addEventListener("click", () => {
  switchSection(2);
});
buttonContact.addEventListener("click", () => {
  switchSection(3);
});

function switchSection(i) {
  for (let section of sectionArray) {
    section.classList.add("hide_section");
    console.log(section);
  }
  if (i === 0) {
    sectionArray[i].classList.remove("hide_section");
  }
  if (i === 1) {
    sectionArray[i].classList.remove("hide_section");
  }
  if (i === 2) {
    sectionArray[i].classList.remove("hide_section");
  }
  if (i === 3) {
    sectionArray[i].classList.remove("hide_section");
  }
}
