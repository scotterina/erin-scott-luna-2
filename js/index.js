// get the body element
const body = document.body;
//---------- Footer ---------

let footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
//get the current footer element
footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Erin Scott ${thisYear}`;
footer.appendChild(copyright);
footer.style.textAlign = "right";
//---------- Skills ---------
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
//select the skills section by id
const skillsSection = document.getElementById("Skills");
//select the empty <ul>
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
