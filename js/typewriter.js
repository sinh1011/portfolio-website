// TYPEWRITER EFFECT
const typewriterEl = document.getElementById('typewriter');
const words = [
  'Frontend Developer',
  'ReactJS Enthusiast',
  'UI/UX Designer',
  'Sinh Viên CNTT'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 120;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 2000; // pause before deleting
    }
  } else {
    typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 60;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 800);
});
