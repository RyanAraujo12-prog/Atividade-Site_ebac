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
const botaoTema = document.querySelector('#toggle-tema');
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('modo', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Lembrar escolha
window.addEventListener('DOMContentLoaded', () => {
    const modo = localStorage.getItem('modo');
    if (modo === 'dark') document.body.classList.add('dark');
});
const botaoIdioma = document.querySelector('#toggle-idioma');
let idiomaAtual = 'br';

botaoIdioma.addEventListener('click', () => {
    idiomaAtual = idiomaAtual === 'br' ? 'en' : 'br';
    alternarIdioma(idiomaAtual);
});

function alternarIdioma(lang) {
    const traducoes = {
        en: {
            titulo: 'My Verdão Info',
            bemVindo: 'Welcome to our Verdão fan site!',
            noticia: 'Paulinho debuts against Corinthians.',
            contato: 'Contact',
            enviar: 'Send'
        },
        br: {
            titulo: 'Informações do meu Verdão',
            bemVindo: 'Bem vindo ao site de fãs do nosso verdão!',
            noticia: 'Paulinho acaba de fazer estreia em jogo contra o Corinthians.',
            contato: 'Contato',
            enviar: 'Enviar'
        }
    };

    const t = traducoes[lang];
    document.querySelector('h1').textContent = t.titulo;
    document.querySelector('#inicio h2').textContent = t.bemVindo;
    document.querySelector('#inicio p').textContent = t.noticia;
    document.querySelector('#contato h2').textContent = t.contato;
    document.querySelector('#contato button').textContent = t.enviar;
}

