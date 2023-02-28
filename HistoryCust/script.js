const containerCard = document.getElementById("container-card");

for (let i = 1; i <= 15; i++) {
  // Membuat elemen baru
  const card = document.createElement("div");
  card.className = "card";
  card.id = `card${i}`;

  // Mengisi konten dalam elemen
  card.innerHTML = `
    <div class="left-card">
      <img src="./assets/Main/makanan.png" alt="" width="80%" class="img-card" />
    </div>
    <div class="right-card">
      <p class="title-card">Veggie tomato mix</p>
      <p class="price-card">IDR 34.000</p>
      <p class="description-card">Delivered</p>
    </div>
    <div class="icon-sampah"></div>
    <div class="icon-x" id="icon-x">
      <p class="icon-x-content">X</p>
    </div>
  `;

  // Menambahkan elemen ke dalam dokumen
  containerCard.appendChild(card);

  const iconSampah = card.querySelector(".icon-sampah");
  const iconX = card.querySelector(`#icon-x`);

  card.addEventListener("click", () => {
    card.classList.add("opacity-min");
    iconSampah.style.display = "block";
    iconX.style.display = "block";
    console.log("card di klik");
  });
  
  iconX.addEventListener('click', (event) => {
    event.stopPropagation()
    card.classList.remove('opacity-min')
    iconSampah.style.display = "none";
    iconX.style.display = "none";
  })

  iconSampah.addEventListener("click", (event) => {
    event.stopPropagation()
    card.parentNode.removeChild(card);
  });
}

const hamburger = document.getElementById("hamburger");
const iconX = document.getElementById("icon-x");
const hiddenNav = document.getElementById("hidden-nav");
const hamburgerTablet = document.getElementById("hamburger-tablet");
const iconXTablet = document.getElementById("icon-x-tablet");
hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  iconX.style.display = "block";
  hiddenNav.style.right = "0";
  hiddenNav.style.display = "block";
});
iconX.addEventListener("click", () => {
  iconX.style.display = "none";
  hamburger.style.display = "block";
  hiddenNav.style.right = "-100%";
  hiddenNav.style.display = "none";
});
hamburgerTablet.addEventListener("click", function () {
  hamburgerTablet.style.display = "none";
  iconXTablet.style.display = "block";
  hiddenNav.style.right = "0";
  hiddenNav.style.display = "block";
});
iconXTablet.addEventListener("click", () => {
  iconXTablet.style.display = "none";
  hamburgerTablet.style.display = "block";
  hiddenNav.style.right = "-100%";
  hiddenNav.style.display = "none";
});
