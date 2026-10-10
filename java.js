
function darkmode(){
    document.body.classList.toggle('white-mode')
}

//Barra1

var cont = 0;
const Progresso = document.getElementById("Progresso");
while(cont < 60)
{
    cont = cont + 1;
    console.log(cont);
};

Progresso.style.setProperty("--Progresso", cont + "%");

//Barra2

var cont = 0;
const Progresso2 = document.getElementById("Progresso2");
while(cont < 60)
{
    cont = cont + 1;
    console.log(cont);
};

Progresso2.style.setProperty("--Progresso", cont + "%");

//Barra3

var cont = 0;
const Progresso3 = document.getElementById("Progresso3");
while(cont < 60)
{
    cont = cont + 1;
    console.log(cont);
};

Progresso3.style.setProperty("--Progresso", cont + "%");

//Barra4

var cont = 0;
const Progresso4 = document.getElementById("Progresso4");
while(cont < 60)
{
    cont = cont + 1;
    console.log(cont);
};

Progresso4.style.setProperty("--Progresso", cont + "%");

//Barra5

var cont = 0;
const Progresso5 = document.getElementById("Progresso5");
while(cont < 60)
{
    cont = cont + 1;
    console.log(cont);
};

Progresso5.style.setProperty("--Progresso", cont + "%");

//Barra6

var cont = 0;
const Progresso6 = document.getElementById("Progresso6");
while(cont < 60)
{
    cont = cont + 1;
    console.log(cont);
};

Progresso6.style.setProperty("--Progresso", cont + "%");


function animarTodasAsBarras() {
  // Pega todos os blocos de nível
  const itens = document.querySelectorAll(".nivel-item");

  itens.forEach((item) => {
    const barra = item.querySelector(".barra-progresso");
    const progresso = barra?.querySelector("div"); // Pega o #Progresso dentro da barra
    const textoPorcentagem = item.querySelector(".porcentagem");

    // Lê o número do atributo data-nivel (ex: 60, 80)
    const limite = parseInt(barra?.getAttribute("data-nivel")) || 0;

    let cont = 0;
    const intervalo = setInterval(() => {
      if (cont >= limite) {
        clearInterval(intervalo);
      } else {
        cont++;
        // Atualiza a barra
        if (progresso) {
          progresso.style.setProperty("--Progresso", cont + "%");
        }
        // Atualiza o texto de 0% subindo número a número
        if (textoPorcentagem) {
          textoPorcentagem.textContent = cont + "%";
        }
      }
    }, 20); // Velocidade do contador
  });
}

// Garante que roda após o carregamento da página
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", animarTodasAsBarras);
} else {
  animarTodasAsBarras();
}
