const hamburger = document.getElementById("hamburger");
const iconX = document.getElementById('icon-x');
const hiddenNav = document.getElementById('hidden-nav')
const hamburgerTablet = document.getElementById('hamburger-tablet')
const iconXTablet = document.getElementById('icon-x-tablet');
hamburger.addEventListener("click", function () {
  hamburger.style.display = 'none';
  iconX.style.display = 'block';
  hiddenNav.style.right = '0';
  hiddenNav.style.display = 'block'
});
iconX.addEventListener('click', () => {
  iconX.style.display = 'none'
  hamburger.style.display = 'block';
  hiddenNav.style.right = '-100%'
  hiddenNav.style.display = 'none'
})
hamburgerTablet.addEventListener("click", function () {
  hamburgerTablet.style.display = 'none';
  iconXTablet.style.display = 'block';
  hiddenNav.style.right = '0';
  hiddenNav.style.display = 'block'
});
iconXTablet.addEventListener('click', () => {
  iconXTablet.style.display = 'none'
  hamburgerTablet.style.display = 'block';
  hiddenNav.style.right = '-100%'
  hiddenNav.style.display = 'none'
})