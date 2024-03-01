// Add nav section selector 
const links = document.querySelectorAll("nav ul li a");

links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    document.querySelectorAll(".section").forEach(function(section) {
      section.classList.remove("active");
    });

    targetSection.classList.add("active");
  });
});

// Add event listeners for the "RESUME" and "PROJECTS" buttons
document.querySelector(".about-button-1").addEventListener("click", function() {
  const resumeSection = document.getElementById("resume");
  document.querySelectorAll(".section").forEach(function(section) {
    section.classList.remove("active");
  });
  resumeSection.classList.add("active");
});

document.querySelector(".about-button-2").addEventListener("click", function() {
  const projectsSection = document.getElementById("projects");
  document.querySelectorAll(".section").forEach(function(section) {
    section.classList.remove("active");
  });
  projectsSection.classList.add("active");
});
