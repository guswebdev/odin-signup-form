const d = document;

const $formulario = d.getElementById("form");
const $inputPassword = d.getElementById("password");
const $inputPasswordConfirm = d.getElementById("password-confirm");

const submit = (e) => {
  e.preventDefault();

  if ($inputPassword.value === $inputPasswordConfirm.value) {
    $inputPassword.style.borderColor = "596d48";
    $inputPasswordConfirm.style.borderColor = "#596d48";
    $formulario.submit();
  } else {
    $inputPassword.style.borderColor = "#e09b9b";
    $inputPasswordConfirm.style.borderColor = "#e09b9b";
  }
};

$formulario.addEventListener("submit", submit);
