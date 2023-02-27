const email = document.getElementById("email");
const btnSend = document.getElementById('btn-send')

btnSend.addEventListener('click', () => {
  const emailError = document.getElementById("email-error");
  const dBlockEmail = () => {
    return (emailError.style.display = "block");
  };
  const dNoneEmail = () => {
    return (emailError.style.display = "none");
  };
  if (email.value == "") {
    emailError.innerHTML = `Email Harus Di isi`;
    dBlockEmail();
    return;
  } else if (!email.value.includes("@")) {
    emailError.innerHTML = `Input wajib menggunakan @`;
    dBlockEmail();
    return;
  } else if (!email.value.includes(".")) {
    emailError.innerHTML = `Input wajib menggunakan .`;
    dBlockEmail();
    return;
  } else {
    dBlockEmail();
    emailError.style.color = "green";
    emailError.innerHTML = `Send the code to your email`;
  }
})