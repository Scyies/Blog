const publicacoes = [{
    imagem: 'https://c4.wallpaperflare.com/wallpaper/211/732/863/tohsaka-rin-archer-fate-stay-night-fate-series-fate-stay-night-wallpaper-preview.jpg',
    titulo: 'Fate é muito based',
    descricao: 'Rin é a best grill'
},
{
    imagem: 'https://wallpaperaccess.com/full/768533.png',
    titulo: 'Steins;gate',
    descricao: 'El Psy Congroo'
},
{
    imagem: 'https://images6.alphacoders.com/512/thumb-1920-512323.jpg',
    titulo: 'No game no life',
    descricao: 'Sem jooojo sem vida'
}
];

publicacoes.forEach((publicacao) => {
    const div = document.querySelector('.main-destaques--posts');
    const itemContainer = document.createElement('li');

    itemContainer.classList.add('publicacaoContainer');

    itemContainer.innerHTML = ` <img class="publicacao-img" src="${publicacao.imagem}"</img>
                                <div class="publicacao-text">
                                    <h2 class="publicacao-titulo">${publicacao.titulo}</h2>
                                    <p class="publicacao-descricao">${publicacao.descricao}</p>
                                </div>`;
    div.appendChild(itemContainer);
});
