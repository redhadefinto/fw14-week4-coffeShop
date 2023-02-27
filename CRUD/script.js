const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const cardsDiv = document.getElementById("cards");

let data = [];

function addCard(index) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const h3 = document.createElement("h3");
  h3.innerText = data[index].name;
  cardDiv.appendChild(h3);

  const p = document.createElement("p");
  p.innerText = data[index].email;
  cardDiv.appendChild(p);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
    data.splice(index, 1);
    cardsDiv.innerHTML = "";
    renderCards();
  };
  cardDiv.appendChild(deleteButton);

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.onclick = function () {
    nameInput.value = data[index].name;
    emailInput.value = data[index].email;
    data.splice(index, 1);
    cardsDiv.innerHTML = "";
    renderCards();
  };
  cardDiv.appendChild(editButton);

  cardsDiv.appendChild(cardDiv);
}

function renderCards() {
  for (let i = 0; i < data.length; i++) {
    addCard(i);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  data.push({
    name: nameInput.value,
    email: emailInput.value,
  });
  nameInput.value = "";
  emailInput.value = "";
  cardsDiv.innerHTML = "";
  renderCards();
});
