function initMenuButton() {
  // Responsive Menu Button
  const menuBtn = document.querySelector('#menu-btn');
  const menu = document.querySelector('#menu-items');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuBtn.children[0].classList.toggle('fa-bars');
    menuBtn.children[0].classList.toggle('fa-times');
  });
}

function initNavDropdowns() {
  // Dropdowns
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
      if (dropdown.classList.contains('show')) hideDropdownItems(dropdown);
      else showDropdownItems(dropdown);
    });
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseleave', () => {
      if (isMobile()) return;
      hideDropdownItems(dropdown);
    });
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseover', () => {
      if (isMobile()) return;
      showDropdownItems(dropdown);
    });
  });

  document.addEventListener('click', (e) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  });
}

function showDropdownItems(dropdown) {
  dropdown.classList.add('show');
  dropdown.children[0].children[0].classList.add('fa-caret-up');
  dropdown.children[0].children[0].classList.remove('fa-caret-down');
}

function hideDropdownItems(dropdown) {
  dropdown.classList.remove('show');
  dropdown.children[0].children[0].classList.remove('fa-caret-up');
  dropdown.children[0].children[0].classList.add('fa-caret-down');
}

// To check isMobile
function isMobile() {
  return window.innerWidth <= 820;
}

// TABS
function initTabs() {
  const tabs = document.querySelectorAll('[data-tab]');
  const tabContents = document.querySelectorAll('[data-tab-content]');
  const visionMissionSection = document.querySelector('#vision-mission');

  // Setting the height
  if (window.innerWidth <= 650)
    visionMissionSection &&
      (visionMissionSection.style.height =
        254 + tabContents[0].clientHeight + 'px');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);

      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active');
      });

      target.classList.add('active');
      tab.classList.add('active');
      if (window.innerWidth <= 650) {
        visionMissionSection.style.height = 254 + target.clientHeight + 'px';
      } else visionMissionSection.style.height = '356px';
    });
  });
}

// toggle footer links
function footerToggle(footerBtn) {
  footerBtn.classList.toggle('btnActive');
  footerBtn.nextElementSibling.classList.toggle('active');
}

// show/hide the scroll to top button
function toggleScrollToTop() {
  const scrollToTopBtn = document.querySelector('.scroll-top-btn');

  window.addEventListener('scroll', (e) => {
    if (window.scrollY < 100) scrollToTopBtn.classList.remove('show');
    else scrollToTopBtn.classList.add('show');
  });
}

function addAOS() {
  const quickLinks = document.querySelectorAll('[data-quick-link]');

  quickLinks.forEach((link, index) => {
    link.dataset.aos = index % 2 === 0 ? 'flip-left' : 'flip-right';
    link.dataset.aosDuration = '500';
    link.dataset.aosDelay = 20 * (index + 1);
  });

  AOS.init({ once: true });
}

// Carousel
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

initMenuButton();

initNavDropdowns();

initTabs();

addAOS();

toggleScrollToTop();

// Copyright Year
document.querySelector('[data-copy-year]').innerText = new Date().getFullYear();
