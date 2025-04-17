// Mostrar alerta de boas-vindas ao carregar o site
window.addEventListener('load', () => {
    alert("Bem-vindo ao site do nosso Verdão! 🟢⚪");
});

// Mostrar botão "voltar ao topo" ao rolar a página
const topoBtn = document.createElement('button');
topoBtn.innerText = '↑';
topoBtn.id = 'topoBtn';
document.body.appendChild(topoBtn);

window.onscroll = () => {
    if (window.scrollY > 300) {
        topoBtn.style.display = 'block';
    } else {
        topoBtn.style.display = 'none';
    }
};

topoBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Feedback no envio do formulário
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Avanti Palestra! 💚");
    form.reset();
});
