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
//---------- Message Form ---------

const messageForm = document.querySelector("form[name='leave_message']");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  console.log("Name: ", userName);
  console.log("Email: ", userEmail);
  console.log("Message: ", userMessage);

  const messageSection = document.getElementById("My Messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.className = "remove-btn";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
//-------------projects-------------
fetch("https://api.github.com/users/scotterina/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("GitHub request failed");
    }
    return response.json();
  })
  .then((repositories) => {
    console.log("Repositories: ", repositories);
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");
    projectList.innerHTML = "";
    //check each repository
    repositories.forEach((repo) => {
      const project = document.createElement("li");
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = repo.name;
      project.appendChild(link);
      projectList.appendChild(project);
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error);
    //if an empty project secion, error message
    const projectSection = document.getElementById("Projects");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "No available Projects.";
    projectSection.appendChild(errorMessage);
  });
