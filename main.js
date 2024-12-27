document.addEventListener("DOMContentLoaded", () => {
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    const btnVoltar = document.getElementById("btn-voltar");
    const card = document.querySelector(".card");
    const cardBack = document.querySelector(".card-back");
    const face = document.querySelector('.face');
  
    function toggleCards() {
        face.classList.toggle('active');
        card.classList.toggle('active');
        cardBack.classList.toggle('active');
    
        // Alterna as classes de visibilidade
        card.classList.toggle('hidden');
        cardBack.classList.toggle('visible');
    
        // Atualiza o texto dos botões
        btnSaibaMais.classList.toggle('hidden');
        btnVoltar.classList.toggle('visible');
    }
  
    // Event listeners para os dois botões
    btnSaibaMais.addEventListener("click", toggleCards);
    btnVoltar.addEventListener("click", toggleCards);
});