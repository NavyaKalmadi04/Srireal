// Function to update the navbar heading based on the current section
function updateNavbarHeading() {
  const headings = {
    home: 'Sri Sarojini High School',
    about: 'About Us',
    curriculum:'Curriculum & Co-curriculum',
    alumni: 'Alumni',
    contact: 'Contact Us'
  };

  let currentSection = '';
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id;
    }
  });

  const headingElement = document.getElementById('navbar-heading');
  if (headingElement && headings[currentSection]) {
    headingElement.textContent = headings[currentSection];
  }
}

// Event listener for scroll events
window.addEventListener('scroll', updateNavbarHeading);

// Initial call to set the heading on page load
window.addEventListener('load', updateNavbarHeading);

// Event listeners for nav links to update heading when clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(updateNavbarHeading, 500);
  });
});