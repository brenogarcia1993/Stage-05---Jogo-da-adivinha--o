// Variáveis

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

//Eventos

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", enterKey);

// Função Callback - Uma função que é passada como argumento de outra função

// Funções

function enterKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

function handleTryClick(event) {
  event.preventDefault(); // Não faça o padrão desse evento

  emptySpace();

  const inputNumber = document.querySelector("#inputNumber");
  if (Number(inputNumber.value >= 0 && inputNumber.value <= 10)) {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen();
      document.querySelector(
        ".screen2 h2"
      ).innerText = `Você acertou em ${xAttemps} tentativas.`;

      // Neste caso não seria preciso fazer a pesquisa no documento inteiro com o "document"
      // screen2.querySelector("h2").innerText = `acertou em ${xAttemps} tentativas.`
    }
  } else {
    alert("Escolha um número de 0 a 10");
  }

  inputNumber.value = "";
  xAttemps++;
}

function emptySpace() {
  let emptySpace = inputNumber.value === "";
  if (emptySpace) {
    alert("Número não informado.");
    xAttemps = 0;
  }
}

function toggleScreen() {
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
}

function handleResetClick() {
  toggleScreen();
  document.getElementById("inputNumber").value = "";
  xAttemps = 1;
  randomNumber = Math.round(Math.random() * 10);
}
