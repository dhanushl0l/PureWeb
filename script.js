document.addEventListener("DOMContentLoaded", function() {
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
  });
  