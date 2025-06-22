/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .project1,.project2,.project3, .contact__input', { interval: 200 });


/*==================  TYPEWRITER  ================== */

const textElement = document.getElementById('text');
const words = ['Java Full-Stack', 'Web'];
let index = 0;

function typeWriterEffect(text, callback) {
  let i = 0;
  textElement.textContent = '';
  function type() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    } else if (callback) {
      setTimeout(callback, 2000);
    }
  }
  type();
}

function cycleWords() {
  typeWriterEffect(words[index], () => {
    index = (index + 1) % words.length;
    cycleWords();
  });
}
cycleWords();

/*====================CONTACT Email======================*/ 
(function(){
    emailjs.init("9_1KjjnPNopkCMJsq"); // Replace with your EmailJS public key
  })();

  document.querySelector(".contact__form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_cr082sq", "template_q39863b", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message. Try again later.");
      });
  });