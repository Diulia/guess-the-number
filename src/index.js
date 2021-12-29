import "./styles.css";
var formulario = document.getElementById("form");
formulario.addEventListener("submit", handleSubmit);

let msg = document.getElementById("status");
let attempt = document.getElementById("attempt");
let result = document.getElementById("resultado");

var guess = {
  max: 10,
  attemptNumber: 0,
  numberDrawn: function randomValue() {
    return Math.round(Math.random() * this.max);
  }
};

let numberDrawn = guess.numberDrawn();

function update(attempt, value) {
  attempt.innerHTML = "Tentativa: " + value;
}

function handleSubmit(e) {
  e.preventDefault();

  let kick = document.getElementById("kick").value;

  if (!kick) {
    alert("Digite um número!");
    return;
  }

  update(attempt, ++guess.attemptNumber);

  if (numberDrawn == kick) {
    playagain();
    msg.innerHTML = "Você acertou!";
    resultado.style.transition = "0.4s";
    resultado.style.backgroundColor = "#37c978";
    resultado.style.color = "#fff";
    msg.style.color = "#fff";
    clear();
  } else if (numberDrawn > kick) {
    msg.innerHTML = 'O número é maior"';
    resultado.style.backgroundColor = "#de4251";
    msg.style.color = "#fff";
    clear();
  } else if (numberDrawn < kick) {
    msg.innerHTML = 'O número é menor"';
    resultado.style.backgroundColor = "#de4251";
    msg.style.color = "#fff";
    clear();
  }
}

function playagain() {
  document.getElementById("btn-restart").style.display = "flex";
}

function restart() {
  document.location.reload(true);
}

function clear() {
  document.getElementById("kick").value = "";
}
