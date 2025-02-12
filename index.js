const lamp1 = document.getElementById("lamp1");
const lamp2 = document.getElementById("lamp2");
const lamp3 = document.getElementById("lamp3");

const desligarTudo = document.getElementById("desligarTudo");
const alternar = document.getElementById("alternar");

const lampada1 = document.getElementById("lampada1");
const lampada2 = document.getElementById("lampada2");
const lampada3 = document.getElementById("lampada3");

const menuIcon = document.getElementById("menuIcon");
menuIcon.textContent = "close";

lamp1.textContent = "Acender";
lamp2.textContent = "Acender";
lamp3.textContent = "Acender";

menuIcon.addEventListener("click", () => {
  if (menuIcon.textContent === "menu") {
    menuIcon.textContent = "close";
    document.querySelector(".container").style.display = "inline-block";
  } else {
    menuIcon.textContent = "menu";
    document.querySelector(".container").style.display = "none";
  }
});

function verificacaoGeral() {
  if (
    lamp1.textContent === "Apagar" &&
    lamp2.textContent === "Apagar" &&
    lamp3.textContent === "Apagar"
  ) {
    desligarTudo.textContent = "Desligar Tudo";
  } else {
    desligarTudo.textContent = "Ligar Tudo";
  }
}

function verificacaoIndividual() {
  if (
    lamp1.textContent === "Apagar" &&
    lamp2.textContent === "Apagar" &&
    lamp3.textContent === "Apagar"
  ) {
    return (desligarTudo.textContent = "Desligar Tudo");
  }

  if (lamp1.textContent === "Apagar" && lamp2.textContent === "Apagar") {
    return (desligarTudo.textContent = "Desligar L1/L2");
  }

  if (lamp2.textContent === "Apagar" && lamp3.textContent === "Apagar") {
    return (desligarTudo.textContent = "Desligar L2/L3");
  }

  if (lamp1.textContent === "Apagar" && lamp3.textContent === "Apagar") {
    return (desligarTudo.textContent = "Desligar L1/L3");
  }

  if (lamp1.textContent === "Apagar") {
    return (desligarTudo.textContent = "Desligar L1");
  } else if (lamp2.textContent === "Apagar") {
    desligarTudo.textContent = "Desligar L2";
  } else if (lamp3.textContent === "Apagar") {
    desligarTudo.textContent = "Desligar L3";
  }

  if (
    lamp1.textContent === "Quebrada" &&
    lamp2.textContent === "Quebrada" &&
    lamp3.textContent === "Quebrada"
  ) {
    document.getElementById("alerta").innerHTML =
      "Você quebrou todas as lampadas, clique no botão interruptor Geral para restaura-las";
    return;
  }

  if (lamp1.textContent === "Quebrada" && lamp2.textContent === "Quebrada") {
    document.getElementById("alerta").innerHTML =
      "Você quebrou as lampadas L1 e L2, clique no botão interruptor Geral para restaura-las";
    return;
  } else if (
    lamp1.textContent === "Quebrada" &&
    lamp3.textContent === "Quebrada"
  ) {
    document.getElementById("alerta").innerHTML =
      "Você quebrou as lampadas L1 e L3, clique no botão interruptor Geral para restaura-las";
    return;
  } else if (
    lamp2.textContent === "Quebrada" &&
    lamp3.textContent === "Quebrada"
  ) {
    document.getElementById("alerta").innerHTML =
      "Você quebrou as lampadas L2 e L3, clique no botão interruptor Geral para restaura-las";
    return;
  }

  if (
    lamp1.textContent === "Acender" &&
    lamp2.textContent === "Acender" &&
    lamp3.textContent === "Acender"
  ) {
    document.getElementById("alerta").innerHTML = " ";
    desligarTudo.textContent = "Ligar Tudo";
  }

  if (
    lamp1.textContent === "Quebrada" ||
    lamp2.textContent === "Quebrada" ||
    lamp3.textContent === "Quebrada"
  ) {
    desligarTudo.textContent = "Restaurar lampada";
    document.getElementById("alerta").innerHTML =
      "Uma das lampada está quebrada, clique no interruptor Geral para restaura-la";

    document.getElementById("alerta").style.color = "red";
    return;
  }
}

lamp1.addEventListener("click", () => {
  if (lamp1.textContent === "Quebrada") {
    return;
  }

  if (lamp1.textContent === "Acender") {
    lamp1.style.backgroundColor = "red";
    lamp1.textContent = "Apagar";
    lampada1.src = "./img/ligada.png";
  } else {
    lamp1.textContent = "Acender";
    lamp1.style.backgroundColor = "green";
    lampada1.src = "./img/desligada.png";
  }

  verificacaoIndividual();
});

lamp2.addEventListener("click", () => {
  if (lamp2.textContent === "Quebrada") {
    return;
  }

  if (lamp2.textContent === "Acender") {
    lamp2.style.backgroundColor = "red";
    lamp2.textContent = "Apagar";
    lampada2.src = "./img/ligada.png";
  } else {
    lamp2.textContent = "Acender";
    lamp2.style.backgroundColor = "green";
    lampada2.src = "./img/desligada.png";
  }

  verificacaoIndividual();
});

lamp3.addEventListener("click", () => {
  if (lamp3.textContent === "Quebrada") {
    return;
  }

  if (lamp3.textContent === "Acender") {
    lamp3.style.backgroundColor = "red";
    lamp3.textContent = "Apagar";
    lampada3.src = "./img/ligada.png";
  } else {
    lamp3.style.backgroundColor = "green";
    lamp3.textContent = "Acender";
    lampada3.src = "./img/desligada.png";
  }

  verificacaoIndividual();
});

desligarTudo.addEventListener("click", () => {
  if (
    lamp1.textContent === "Acender" &&
    lamp2.textContent === "Acender" &&
    lamp3.textContent === "Acender"
  ) {
    lamp1.textContent = "Apagar";
    lamp2.textContent = "Apagar";
    lamp3.textContent = "Apagar";

    lamp1.style.backgroundColor = "red";
    lamp2.style.backgroundColor = "red";
    lamp3.style.backgroundColor = "red";

    lampada1.src = "./img/ligada.png";
    lampada2.src = "./img/ligada.png";
    lampada3.src = "./img/ligada.png";

    desligarTudo.textContent = "Desligar Tudo";
  } else {
    lamp1.textContent = "Acender";
    lamp2.textContent = "Acender";
    lamp3.textContent = "Acender";

    lamp1.style.backgroundColor = "green";
    lamp2.style.backgroundColor = "green";
    lamp3.style.backgroundColor = "green";

    lampada1.src = "./img/desligada.png";
    lampada2.src = "./img/desligada.png";
    lampada3.src = "./img/desligada.png";

    desligarTudo.textContent = "Ligar Tudo";

    document.getElementById("alerta").innerHTML = "";
    return;
  }
});

lampada1.addEventListener("dblclick", () => {
  lampada1.src = "./img/quebrada.png";
  lamp1.textContent = "Quebrada";
  lamp1.style.backgroundColor = "blue";

  return verificacaoIndividual();
});

lampada2.addEventListener("dblclick", () => {
  lampada2.src = "./img/quebrada.png";
  lamp2.textContent = "Quebrada";
  lamp2.style.backgroundColor = "blue";

  return verificacaoIndividual();
});

lampada3.addEventListener("dblclick", () => {
  lampada3.src = "./img/quebrada.png";
  lamp3.textContent = "Quebrada";
  lamp3.style.backgroundColor = "blue";

  return verificacaoIndividual();
});
