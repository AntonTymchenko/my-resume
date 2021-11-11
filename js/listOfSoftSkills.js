const listSoft = document.querySelector(".listSoft-js");

const soft = ["Scrum", "Agile", "Teamwork"];

const result = soft.map((item) => {
  const skill = document.createElement("span");
  skill.className = "soft-skills-text";
  skill.textContent = item;
  const skillItem = document.createElement("li");
  skillItem.className = "soft-skills-item";
  skillItem.appendChild(skill);
  return skillItem;
});

listSoft.append(...result);
