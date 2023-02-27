const email = document.getElementById('login');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const loader = document.getElementById('container-loader')

// modal
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalBtn = document.getElementById("modal-btn");

const dataLogin = {email: 'redha@gmail.com', password: 'password'}

btnLogin.addEventListener('click', () => {
  // ELement error
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  // style block element
  const dBlockEmail = () => {
    return (emailError.style.display = "block");
  };
  const dBlockPassword = () => {
    return (passwordError.style.display = "block");
  };

  // style none element
  const dNoneEmail = () => {
    return (emailError.style.display = "none");
  };
  const dNonePassword = () => {
    return (passwordError.style.display = "none");
  };

  // validasi inputs
  if (email.value == "" && password.value == "") {
    emailError.innerHTML = `Email Harus Di isi`;
    passwordError.innerHTML = `Password Harus Di isi`;
    dBlockEmail();
    dBlockPassword();
    return;
  }

  // validasi input
  if (email.value == "") {
    emailError.innerHTML = `Email Harus Di isi`;
    dBlockEmail();
    dNonePassword();
    return;
  } else if (password.value == "") {
    passwordError.innerHTML = `Password Harus Di isi`;
    dNoneEmail();
    dBlockPassword();
    return;
  }

  if (!email.value.includes("@")) {
    emailError.innerHTML = `Input wajib menggunakan @`;
    dBlockEmail();
    dNonePassword();
    return;
  } else if (password.value.length < 4) {
    passwordError.innerHTML = `Panjang password minimal 5`;
    dNoneEmail();
    dBlockPassword();
    return;
  }if(dataLogin.email !== email.value && dataLogin.password !== password.value) {
    modal.style.display = "block";
    modalContent.innerHTML = `User tidak ditemukan`;
    dNoneEmail();
    dNonePassword();
    email.value = '';
    password.value = '';
    setTimeout(() => {
      modal.style.display = 'none'
    }, 3000)
  } else {
    loader.style.display = 'flex'
    setTimeout(() => {
      loader.style.display = 'none';
      window.location.href = "http://127.0.0.1:5500/ProductCust";
    }, 3000)
  }
})