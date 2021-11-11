const list = document.querySelector(".listOfScills");

const skills = ["HTML5", "CSS", "JavaScript", "React", "Node"];

const result = skills.map((item) => {
  const skill = document.createElement("span");
  skill.className = "tech-skills-text";
  skill.textContent = item;
  const skillItem = document.createElement("li");
  skillItem.className = "tech-skills-item";
  skillItem.appendChild(skill);
  return skillItem;
});

list.append(...result);
