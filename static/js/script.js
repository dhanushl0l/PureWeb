document.addEventListener("DOMContentLoaded", function () {
  // Set 'about' section as active by default
  const defaultSection = document.getElementById("about");
  defaultSection.classList.add("active");

  // Adjust based on header height if necessary
  const headerHeight = document.querySelector("header")
    ? document.querySelector("header").offsetHeight
    : 0;

  // Get all the navigation links
  const links = document.querySelectorAll("nav ul li a");

  // Function to set the active link
  function setActiveLink(activeId) {
    links.forEach((link) => {
      link.classList.remove("active"); // Remove active class from all links
      if (link.getAttribute("href") === `#${activeId}`) {
        link.classList.add("active"); // Add active class to the current link
      }
    });
  }

  // Set active link for default section
  setActiveLink("about");

  // Function to handle section activation and scrolling
  function activateSection(targetId) {
    const targetSection = document.getElementById(targetId);
    // Remove 'active' class from all sections
    document.querySelectorAll(".section").forEach(function (section) {
      section.classList.remove("active");
    });

    // Add 'active' class to the target section
    targetSection.classList.add("active");

    // Scroll to the target section smoothly, considering header height
    window.scrollTo({
      top: targetSection.offsetTop - headerHeight,
      behavior: "smooth",
    });

    // Set the active link
    setActiveLink(targetId);
  }

  // Add click event listeners to the navigation links
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor click behavior
      const targetId = this.getAttribute("href").substring(1); // Get target section ID
      activateSection(targetId);
    });
  });

  // Add event listeners for the "RESUME" and "PROJECTS" buttons
  document
    .querySelector(".about-button-1")
    .addEventListener("click", function () {
      activateSection("resume");
    });

  document
    .querySelector(".about-button-2")
    .addEventListener("click", function () {
      activateSection("projects");
    });

  // Function to simulate navigation button clicks based on the current URL hash
  function simulateButtonClickBasedOnUrl() {
    const currentHash = window.location.hash; // Get the current URL hash

    // Define a mapping of hash values to their corresponding link selectors
    const sections = {
      "#resume": "nav ul li a[href='#resume']",
      "#projects": "nav ul li a[href='#projects']",
      "#about": "nav ul li a[href='#about']",
      "#contact": "nav ul li a[href='#contact']",
    };

    // Check if the current hash matches any defined sections
    if (sections[currentHash]) {
      document.querySelector(sections[currentHash]).click(); // Simulate click on the corresponding link
      // Remove the hash from the URL
      window.history.pushState(null, null, " "); // Update URL to remove the hash
    }
  }

  // Call the function to simulate button click on page load
  simulateButtonClickBasedOnUrl();
});

document
  .querySelector(".about-button-2")
  .addEventListener("click", function () {
    const projectsSection = document.getElementById("projects");
    document.querySelectorAll(".section").forEach(function (section) {
      section.classList.remove("active");
    });
    projectsSection.classList.add("active");

    // Scroll to the projects section with a smooth transition
    window.scrollTo({
      top: projectsSection.offsetTop - headerHeight,
      behavior: "smooth",
    });
  });

document.querySelector(".nav-b").addEventListener("click", function (event) {
  document.querySelector(".nav").classList.toggle("open");
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
});

document.querySelectorAll(".nav .nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("open");
  });
});

document.body.addEventListener("click", function (event) {
  const nav = document.querySelector(".nav");
  if (
    nav.classList.contains("open") &&
    !event.target.closest(".nav-b") &&
    !event.target.closest(".nav-item")
  ) {
    nav.classList.remove("open");
  }
});

document.body.addEventListener("click", function (event) {
  var checkbox = document.querySelector('.nav-b input[type="checkbox"]');
  // Check if the checkbox is checked and the click is not on the .nav-b element or its children
  if (checkbox.checked && !event.target.closest(".nav-b")) {
    checkbox.checked = false; // Uncheck the checkbox
  }
});

function sendEmail(emailAddress) {
  window.location.href = "mailto:" + emailAddress;
}
