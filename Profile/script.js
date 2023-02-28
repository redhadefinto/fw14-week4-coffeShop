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

const save = document.getElementById("btn-save");
const cancel = document.getElementById("btn-cancel");

// elemetn error
const emailError = document.getElementById('email-error')
const adressError = document.getElementById('adress-error')
const phoneError = document.getElementById('phone-error')
const DNameError = document.getElementById('display-name-error')
const firstNameError = document.getElementById('first-name-error')
const lastNameError = document.getElementById('last-name-error')
const dateError = document.getElementById('date-error')
save.addEventListener('click', () => {
  // element value
  const email = document.getElementById("email").value;
  const adress = document.getElementById("adress").value;
  const DName = document.getElementById("display-name").value;
  const phone = document.getElementById("phone").value;
  const cekPhone = Number(phone)
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const date = document.getElementById('date').value;
  const gender = document.querySelector("input[type=radio]:checked").value;
  // const RegexPhone = /^[0-9]+$/g
  const dBlockEmail = () => {
    return (emailError.style.display = "block");
  };
  const dBlockPhone = () => {
    return (phoneError.style.display = "block");
  };
  const dBlockadress = () => {
    return (adressError.style.display = "block");
  };
  const dBlockDName = () => {
    return (DNameError.style.display = "block");
  };
  const dBlockFirstName = () => {
    return (firstNameError.style.display = "block");
  };
  const dBlocklastName = () => {
    return (lastNameError.style.display = "block");
  };
  const dBlockDate = () => {
    return (dateError.style.display = "block");
  };

  // style none element
  const dNoneEmail = () => {
    return (emailError.style.display = "none");
  };
  const dNoneAdress = () => {
    return (adressError.style.display = "none");
  };
  const dNonePhone = () => {
    return (phoneError.style.display = "none");
  };
  const dNoneDName = () => {
    return (DNameError.style.display = "none");
  };
  const dNoneFisrtName = () => {
    return (firstNameError.style.display = "none");
  };
  const dNoneLastName = () => {
    return (lastNameError.style.display = "none");
  };
  const dNoneDate = () => {
    return (dateError.style.display = "none");
  };

  // cek kosong
  if (email == "") {
    dBlockEmail();
    emailError.innerHTML = `Email Harus di isi`;
    dNoneAdress();
    dNonePhone();
    dNoneDName();
    dNoneFisrtName();
    dNoneLastName();
    dNoneDate();
    return;
  } else if (adress == "") {
    dBlockadress();
    adressError.innerHTML = `Adress harus di isi`;
    dNoneEmail();
    dNonePhone();
    dNoneDName();
    dNoneFisrtName();
    dNoneLastName();
    dNoneDate();
    return;
  } else if (phone == "") {
    dBlockPhone();
    phoneError.innerHTML = `No hp harus di isi`;
    dNoneEmail();
    dNoneAdress();
    dNoneDName();
    dNoneFisrtName();
    dNoneLastName();
    dNoneDate();
    return;
  } else if (DName == "") {
    dBlockDName();
    DNameError.innerHTML = `No hp harus di isi`;
    dNoneEmail();
    dNonePhone();
    dNoneAdress();
    dNoneFisrtName();
    dNoneLastName();
    dNoneDate();
    return;
  } else if (firstName == "") {
    dBlockFirstName();
    firstNameError.innerHTML = `Nama awal harus di isi`;
    dNoneEmail();
    dNonePhone();
    dNoneAdress();
    dNoneDName();
    dNoneLastName();
    dNoneDate();
    return;
  } else if (lastName == "") {
    dBlocklastName();
    lastNameError.innerHTML = `Nama akhir harus di isi`;
    dNoneEmail();
    dNonePhone();
    dNoneAdress();
    dNoneDName();
    dNoneFisrtName();
    dNoneDate()
    return;
  } else if (date == "") {
    dBlockDate();
    dateError.innerHTML = `Date harus di isi`;
    dNoneEmail();
    dNonePhone();
    dNoneAdress();
    dNoneDName();
    dNoneFisrtName();
    dNoneLastName()
  }

  // cek value
  if (!email.includes("@")) {
    emailError.innerHTML = `Input wajib menggunakan @`;
    dBlockEmail();
    dNoneAdress();
    dNonePhone();
    dNoneDName();
    dNoneFisrtName();
    dNoneLastName();
    dNoneDate();
    return;
  } else if (!email.includes(".")) {
    emailError.innerHTML = `Input wajib menggunakan .`;
    dBlockEmail();
    dNoneAdress();
    dNonePhone();
    dNoneDName();
    dNoneFisrtName();
    dNoneLastName();
    dNoneDate();
    return;
  } else if (isNaN(cekPhone)) {
    dBlockPhone()
    phoneError.innerHTML = `noHp harus berisikan angka`;
    dNoneEmail();
    dNoneAdress();
    dNoneDName();
    dNoneFisrtName();
    dNoneLastName();
    dNoneDate();
    return;
  } else {
    const data = [];
    const newData = { email, adress, phone, DName, firstName, lastName, date, gender };
    data.push(newData);
    console.log(data);
    return;
  }
})

cancel.addEventListener('click', () => {
  window.location.reload()
})
