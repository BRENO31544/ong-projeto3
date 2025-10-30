// Máscara CPF
document.getElementById("cpf").addEventListener("input", function() {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 3) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 6) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 9) value = value.replace(/(\d{3})(\d)/, "$1-$2");
    this.value = value;
});

// Máscara telefone
document.getElementById("telefone").addEventListener("input", function() {
    let value = this.value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = value;
});

// Máscara CEP
document.getElementById("cep").addEventListener("input", function() {
    let value = this.value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = value;
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const dropBtns = document.querySelectorAll(".dropbtn");

// abrir/fechar menu mobile
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// abrir/fechar submenu mobile
dropBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault(); // evita navegação
    const parent = btn.parentElement;
    parent.classList.toggle("active");
  });
});

// fechar menu ao clicar em qualquer link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    dropBtns.forEach(btn => btn.parentElement.classList.remove("active"));
  });
});

const modal = document.getElementById('modal');
document.getElementById('openModal').onclick = () => modal.style.display = 'flex';
document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; }

