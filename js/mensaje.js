const contactContainer = document.querySelector('.contact-container');
const contactText = document.querySelector('.contact-text');

contactContainer.addEventListener('mouseover', () => {
  contactText.style.opacity = '1';
});

contactContainer.addEventListener('mouseout', () => {
  contactText.style.opacity = '0';
});
