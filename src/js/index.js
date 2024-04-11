/*
obejtivo 1 - quando o usuario clicar no botão de mostar mais deve abrir os projetos que estão escondidos no html

    passo 1 - pegar o botão mostra mais no js pra poder virificar quanod o usuario clicar em cima dele 

    passo 2 - identificar o clique o botão

    passo 3 - adicionar a classe ativo nos prjetos escondidos

objetivo 2 - esconder o botão de mostar mais 
    passo 1 - pegar o botão e esconder ele 
*/
 // obejtivo 1 - quando o usuario clicar no botão de mostar mais deve abrir os projetos que estão escondidos no html

 // passo 1 - pegar o botão mostra mais no js pra poder virificar quanod o usuario clicar em cima dele 

 const botaoMostrarProjetos = (document.querySelector(".btn-mostrar-projetos"));
 const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

 botaoMostrarProjetos.addEventListener("click",() => {
    // passo 3 - adicionar a classe "ativo" nos projetos escondidos 
    mostrarmaisProjetos();
     // objetivo 2 - escoder o botão de mostra mais 
     // passo 1 - pegar o bo~tao e esconder ele 
     esconderBotao();
 });

 

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarmaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");

    });
}
 