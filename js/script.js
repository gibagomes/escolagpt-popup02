document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const closeBtn = document.querySelector(".close-btn");

  // Função para abrir o modal
  function openModal() {
    modal.style.display = "block";
  }

  // Função para fechar o modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Fechar o modal quando o botão de fechar é clicado
  closeBtn.addEventListener("click", closeModal);

  // Fechar o modal quando clicar fora do modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Abrir o modal automaticamente quando a página for carregada
  openModal();
});
