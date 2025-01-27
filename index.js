const lamp1 = document.getElementById("lamp1");
const lamp2 = document.getElementById("lamp2");
const lamp3 = document.getElementById("lamp3");

const desligarTudo = document.getElementById("desligarTudo");
const alternar = document.getElementById("alternar");

const lampada1 = document.getElementById("lampada1");
const lampada2 = document.getElementById("lampada2");     
const lampada3 = document.getElementById("lampada3");

lamp1.textContent = "Acender";
lamp2.textContent = "Acender";
lamp3.textContent = "Acender";


function verificacaoGeral() {
      
    if ((lamp1.textContent === "Apagar") && (lamp2.textContent === "Apagar") && (lamp3.textContent === "Apagar")) {
        desligarTudo.textContent = "Desligar Tudo";
    } else {
        desligarTudo.textContent = "Ligar Tudo";
    };

};


function vericacaoIndividual () {
  if (
    lamp1.textContent === "Apagar" &&
    lamp2.textContent === "Apagar" &&
    lamp3.textContent === "Apagar"
  ) {
    return (desligarTudo.textContent = "Desligar Tudo");
  }

  if (lamp1.textContent === "Apagar" && lamp2.textContent === "Apagar") {
    return (desligarTudo.textContent = "Desligar L1/L2");
  }; 
  
  if (lamp2.textContent === "Apagar" && lamp3.textContent === "Apagar") {
   return desligarTudo.textContent = "Desligar L2/L3";
  };

  if (lamp1.textContent === "Apagar" && lamp3.textContent === "Apagar") {
    return (desligarTudo.textContent = "Desligar L1/L3");
  }

  if (lamp1.textContent === "Apagar") {
    return (desligarTudo.textContent = "Desligar L1");
  } else if (lamp2.textContent === "Apagar") {
    desligarTudo.textContent = "Desligar L2";
  } else if (lamp3.textContent === "Apagar") {
    desligarTudo.textContent = "Desligar L3";
  } else {
    desligarTudo.textContent = "Ligar Tudo";
  }
}



lamp1.addEventListener("click", () => {
    if (lamp1.textContent === "Acender") {
        lamp1.style.backgroundColor = "red";
        lamp1.textContent = "Apagar";
        lampada1.src = "./img/ligada.png";
        
    } else {
        lamp1.textContent = "Acender";
        lamp1.style.backgroundColor = "green";
        lampada1.src = "./img/desligada.png";
       
        
    };
     vericacaoIndividual();
     
});


lamp2.addEventListener("click", () => {
  if (lamp2.textContent === "Acender") {
    lamp2.style.backgroundColor = "red";
    lamp2.textContent = "Apagar";
    lampada2.src = "./img/ligada.png";

     
  } else {
    lamp2.textContent = "Acender";
    lamp2.style.backgroundColor = "green";
    lampada2.src = "./img/desligada.png";
    
  }
   
 vericacaoIndividual();
});


lamp3.addEventListener("click", () => {
  if (lamp3.textContent === "Acender") {
    lamp3.style.backgroundColor = "red";
    lamp3.textContent = "Apagar";
    lampada3.src = "./img/ligada.png";

    vericacaoIndividual();
  } else {
    lamp3.textContent = "Acender";
    lamp3.style.backgroundColor = "green";
    lampada3.src = "./img/desligada.png";

    
  }
  
 vericacaoIndividual();
});


desligarTudo.addEventListener ("click", () => {
    if ((lamp1.textContent === "Acender") && (lamp2.textContent === "Acender") && (lamp3.textContent === "Acender")) {

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
    
    };
    
     
})














   















