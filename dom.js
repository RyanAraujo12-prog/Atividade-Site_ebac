// Alerta de boas-vindas quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    alert('Bem-vindo ao site do Verdão! 💚');

    // Destacar o título principal com uma borda animada
    const titulo = document.querySelector('h1');
    titulo.style.borderBottom = '3px solid #ff0000';
    titulo.style.paddingBottom = '10px';
    titulo.style.transition = '0.3s ease';

    // Adiciona dinamicamente uma nova notícia
    const noticias = document.querySelector('#inicio div');
    const novaNoticia = document.createElement('p');
    novaNoticia.textContent = 'Dudu volta aos treinos após lesão!';
    novaNoticia.style.color = '#026422';
    novaNoticia.style.fontWeight = 'bold';
    noticias.appendChild(novaNoticia);

    // Trocar texto do botão ao clicar no envio do formulário
    const botao = document.querySelector('#contato button');
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        botao.textContent = 'Enviado com sucesso!';
        botao.style.backgroundColor = '#0bb140';
        botao.style.transition = '0.2s';
    });
});

