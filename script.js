// Smooth scroll for Start Here button
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
});

// Simple fade-in animation on scroll
const cards = document.querySelectorAll('.card, .platform-card, .quotes blockquote');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});

const infoBox = document.getElementById('info-box');
const infoTitle = document.getElementById('info-title');
const infoContent = document.getElementById('info-content');

function openSection(section) {
  infoBox.classList.remove('hidden');

  switch (section) {
    case 'roadmaps':
      infoTitle.textContent = 'Roadmaps';
      infoContent.textContent = 'Step-by-step guides to start learning new skills or careers — from coding to design.';
      break;

    case 'career':
      infoTitle.textContent = 'Career Options';
      infoContent.textContent = 'Explore career paths, roles, and the skills you need to grow in each one.';
      break;

    case 'experts':
      infoTitle.textContent = 'Ask Experts';
      infoContent.textContent = 'Get advice and mentorship from professionals who’ve already walked the path.';
      break;

    case 'study':
      infoTitle.textContent = 'Study Fields';
      infoContent.textContent = 'Browse different academic and practical study areas to see what fits you best.';
      break;

    case 'creators':
      infoTitle.textContent = 'Ask Creators';
      infoContent.textContent = 'Connect with content creators and educators for tips, ideas, and inspiration.';
      break;

    case 'help':
      infoTitle.textContent = 'Help';
      infoContent.textContent = 'Need assistance? Find FAQs, guidance, and resources to get you started smoothly.';
      break;

    default:
      infoBox.classList.add('hidden');
  }
}
