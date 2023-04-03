const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";

// - Passo 2: identificar quando o usuário clicar neste botão 
botaoTrailer.addEventListener("click", () => {
    // Passo 4: abrir a modal na tela.
    modal.classList.add("aberto");
});

// Obj1 - Passo 3: pegar o elemento da modal no JS;
// Ob2 Passo 1: pegar o elemento de fechar modal;
const botaoFecharModal = document.querySelector(".fechar-modal");

//Passo 2: identificar quando o 'x' do modal for clicado;
botaoFecharModal.addEventListener("click", () => {
    //passo 3 - fechar modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

