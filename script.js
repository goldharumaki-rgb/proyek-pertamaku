var skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

var daftar = document.getElementById("daftar-skills");

for (var i = 0; i < skills.length; i++) {
  var item = document.createElement("li");
  item.textContent = skills[i];
  daftar.appendChild(item);
}