// swiper feature for the titles
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.mySwiper-title', {
    loop: true,                 // Enables infinite looping
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Autoplay
    autoplay: {
      delay: 3000,  // Autoplay delay in ms
    },
  });
});

// load more content on the page

const loadMore = document.querySelector('.load-more');
let currentItems = 3;

loadMore.addEventListener('click', (e) => {
  const elementList = [...document.querySelectorAll('.post-list article')];
  
  // Loop through the next 3 items
  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].style.display = 'flex';
    }
  }
  
  currentItems += 3;

  // Check if all items are visible, then hide the "Load More" button
  if (currentItems >= elementList.length) {
    loadMore.style.display = 'none';
  }
});

// side menu trigger
const trigger = document.querySelector('.menu-trigger');
      addclass = document.querySelector('.site');
trigger.addEventListener('click', function() {
      addclass.classList.toggle('showmenu');
      document.body.classList.toggle('overflow');
      });

    // show sub menu in responsive mode

const subMenu = document.querySelectorAll('.has-child > a');

subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle() {
  // Loop through all submenu links and remove the 'expand' class from their parent nodes
  subMenu.forEach((item) => {
    if (item !== this) {
      item.parentNode.classList.remove('expand');
    }
  });

  // Toggle the 'expand' class on the clicked item's parent node
  if (this.parentNode.classList != 'expand') {
    this.parentNode.classList.toggle('expand');
  }
}
// fixed header

const nav = document.querySelector('.site > header');
 
function fixednav() {

  // will add a class fixed on scroll at 1000px
  if (window.scrollY > 800) {
      nav.classList.add('fixed');
  } else {
      nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixednav);

// Function to show the search page
function showSearch() {
  document.getElementById('searchOverlay').style.display = 'flex';
}

// Function to hide the search page
function hideSearch() {
  document.getElementById('searchOverlay').style.display = 'none';
}

