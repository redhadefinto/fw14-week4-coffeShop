const btnSignUp = document.getElementById('btn-signUp')

// modal box
const modal  = document.getElementById('modal')
const modalContent  = document.getElementById('modal-content')
const modalBtn  = document.getElementById('modal-btn')


const data = [];

btnSignUp.addEventListener('click', () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const noHp = document.getElementById("noHp");
  const cekNoHp = Number(noHp.value);

  // element error
  const emailError = document.getElementById('email-error')
  const passwordError = document.getElementById('password-error')
  const noHpError = document.getElementById('noHp-error')

  // style block element
  const dBlockEmail = () => {
    return emailError.style.display = 'block';
  }
  const dBlockPassword = () => {
    return passwordError.style.display = 'block';
  }
  const dBlockNoHp = () => {
    return noHpError.style.display = 'block'
  }

  // style none element 
  const dNoneEmail = () => {
    return emailError.style.display = 'none'
  }
  const dNonePassword = () => {
    return passwordError.style.display = 'none'
  }
  const dNoneNoHp = () => {
    return noHpError.style.display = 'none'
  }

  // validasi inputs
  if(email.value == "" && password.value == "" && noHp.value == "") {
    emailError.innerHTML = `Email Harus Di isi`;;
    passwordError.innerHTML = `Password Harus Di isi`;
    noHpError.innerHTML = `NoHp harus di isi`;
    dBlockEmail()
    dBlockPassword();
    dBlockNoHp();
    return;
  }

  // validasi input
  if (email.value == "") {
    emailError.innerHTML = `Email Harus Di isi`;
    dBlockEmail()
    dNonePassword()
    dNoneNoHp()
    return;
  } else if (password.value == "") {
    passwordError.innerHTML = `Password Harus Di isi`
    dNoneEmail()
    dBlockPassword()
    dNoneNoHp()
    return;
  } else if (noHp.value == "") {
    noHpError.innerHTML = `NoHp harus di isi`
    dNoneEmail()
    dBlockNoHp()
    dNonePassword()
    return;
  } else if (isNaN(cekNoHp)) {
    noHpError.innerHTML = `noHp harus berisikan angka`
    dNoneEmail()
    dBlockNoHp()
    dNonePassword()
    return;
  }


  if(!email.value.includes('@')) {
    emailError.innerHTML = `Input wajib menggunakan @`;
    dBlockEmail();
    dNoneNoHp();
    dNonePassword();
    return;
  } else if (!email.value.includes('.')) {
    emailError.innerHTML = `Input wajib menggunakan .`;
    dBlockEmail();
    dNoneNoHp();
    dNonePassword();
    return;
  }
  else if (password.value.length < 4) {
    passwordError.innerHTML = `Panjang password minimal 5`
    dNoneEmail()
    dNoneNoHp();
    dBlockPassword()
    return;
  } 
  else if(!noHp.value.startsWith(0)){
    noHpError.innerHTML = `No Hp wajib di awali dengan angka 0`;
    dBlockNoHp()
    dNoneEmail()
    dNonePassword()
    return;
  } else {
    dNoneEmail()
    dNonePassword()
    dNoneNoHp()
    modal.style.display = "block";
    modalContent.innerHTML = `Registered`;
    setTimeout(() => {
      modal.style.display = 'none';
      }, 3000)
      // return
  }
  // Mendapatkan nilai input
  const emailValue = email.value;
  const passwordValue = password.value;
  
  // Membuat objek JSON
  const newData = {
    email: emailValue,
    password: passwordValue,
    noHp: cekNoHp,
  };
  
  // Menambahkan objek ke dalam array data
  data.push(newData);  
  email.value = '';
  password.value ='';
  noHp.value = '';
  return;
})

const btnUser = document.getElementById('btn-user');
const modalUser = document.getElementById('modal-user')

// isian data base 
const modalUserTitle = document.createElement('p')
modalUserTitle.classList.add('modal-user-title')
modalUserTitle.innerHTML = `info`;
modalUser.appendChild(modalUserTitle)

const modalContentUser = document.createElement("p");
modalContentUser.classList.add("modal-content-user");
modalUser.appendChild(modalContentUser);

let btnModal = document.createElement('button')
btnModal.classList.add('btn-modal')
btnModal.classList.add('btn')
btnModal.innerHTML = `close`
modalUser.appendChild(btnModal)


btnUser.addEventListener('click', () => {
  if(data.length == 0) {
    modalUser.style.display = 'block';
    modalContentUser.innerHTML = `Tidak ada data yang terdaftar`;
    return;
  } else {
    modalContentUser.remove();
    btnModal.remove()
    data.forEach((data) => {
      const modalContentUser = document.createElement("p");
      modalContentUser.classList.add("modal-content-user");
      modalUser.appendChild(modalContentUser);
      modalUser.style.display = 'block';
      modalContentUser.innerHTML = `<p>Email: ${data.email} </p> <br/> <p>Password: ${data.password}</p> <br /> <p>No Hp: ${data.noHp}</p>`;
      modalUser.appendChild(btnModal)
      return;
    })
    data.pop()
  }
})


btnModal.addEventListener('click', () => {
  modalUser.style.display = 'none';
})