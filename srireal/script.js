const headings = {
  home: 'Sri Sarojini High School',
  about: 'About Us',
  curriculum: 'Curriculum & Co-curriculum',
  alumni: 'Alumni',
  contact: 'Contact Us'
};
let currentSectionGlobal = ''
let clickRefreshed = false;
// Function to update the navbar heading based on the current section
function updateNavbarHeading() {
  let currentSection = '';
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id;
      currentSectionGlobal = section.id
    }
  });
  const headingElement = document.getElementById('navbar-heading');
  console.log("headingElement.textContent", headingElement.textContent);
  console.log("headings[currentSection]", headings[currentSection]);
  if (headingElement && headings[currentSection]) {
    headingElement.textContent = headings[currentSection];
  }
}
window.addEventListener('load', main())
function main() {
  // Event listener for scroll events
  window.addEventListener('scroll', updateNavbarHeading);

  // Initial call to set the heading on page load
  updateNavbarHeading()

  // Event listeners for nav links to update heading when clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      // const headingElement = document.getElementById('navbar-heading');
      // if (headingElement.textContent == headings[currentSectionGlobal]) {
      //   headingElement.style.fontSize = '3.5rem';
      //   headingElement.style.color = '#444';
      //   setTimeout(function () {
      //     headingElement.style.fontSize = '3rem';
      //     headingElement.style.color = 'black';
      //   }, 500);
      // }
      setTimeout(updateNavbarHeading, 500);
      // if (!clickRefreshed) {

      //   clickRefreshed = true
      // }
    });
  });
  document.getElementById('nav-link-home').addEventListener('click', ()=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
  })

  // document.getElementById('navbar-brand')
  document.getElementsByClassName('navbar-brand')[0].addEventListener('click', () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    const headingElement = document.getElementById('navbar-heading');
    headingElement.textContent = headings.home
  })
  console.log("script loaded");
}