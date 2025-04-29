document.addEventListener('DOMContentLoaded', () => {
    alert('Bem-vindo ao site do Verdão! 💚');

    const titulo = document.querySelector('h1');
    titulo.style.borderBottom = '3px solid #ff0000';
    titulo.style.paddingBottom = '10px';
    titulo.style.transition = '0.3s ease';

    const noticias = document.querySelector('#inicio div');
    const novaNoticia = document.createElement('p');
    novaNoticia.textContent = 'Dudu volta aos treinos após lesão!';
    novaNoticia.style.color = '#026422';
    novaNoticia.style.fontWeight = 'bold';
    novaNoticia.classList.add('noticia-extra');
    noticias.appendChild(novaNoticia);

    const botao = document.querySelector('#contato button');
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        botao.textContent = idiomaAtual === 'br' ? 'Enviado com sucesso!' : 'Sent successfully!';
        botao.style.backgroundColor = '#0bb140';
        botao.style.transition = '0.2s';
    });

    const modo = localStorage.getItem('modo');
    if (modo === 'dark') document.body.classList.add('dark');
});

const botaoTema = document.querySelector('#toggle-tema');
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('modo', document.body.classList.contains('dark') ? 'dark' : 'light');
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
            noticiaExtra: 'Dudu returns to training after injury!',
            contato: 'Contact',
            nome: 'Name:',
            email: 'Email:',
            mensagem: 'Message:',
            enviar: 'Send',
            enviado: 'Sent successfully!'
        },
        br: {
            titulo: 'Informações do meu Verdão',
            bemVindo: 'Bem vindo ao site de fãs do nosso verdão!',
            noticia: 'Paulinho acaba de fazer estreia em jogo contra o Corinthians.',
            noticiaExtra: 'Dudu volta aos treinos após lesão!',
            contato: 'Contato',
            nome: 'Nome:',
            email: 'Email:',
            mensagem: 'Nos atualize:',
            enviar: 'Enviar',
            enviado: 'Enviado com sucesso!'
        }
    };

    const t = traducoes[lang];
    document.querySelector('h1').textContent = t.titulo;
    document.querySelector('#inicio h2').textContent = t.bemVindo;
    document.querySelectorAll('#inicio p')[0].textContent = t.noticia;
    document.querySelector('#contato h2').textContent = t.contato;
    document.querySelector('label[for="nome"]').textContent = t.nome;
    document.querySelector('label[for="email"]').textContent = t.email;
    document.querySelector('label[for="mensagem"]').textContent = t.mensagem;
    document.querySelector('#contato button').textContent = t.enviar;

    // Atualizar a notícia extra se ela existir
    const noticiaExtra = document.querySelector('.noticia-extra');
    if (noticiaExtra) {
        noticiaExtra.textContent = t.noticiaExtra;
    }
}

