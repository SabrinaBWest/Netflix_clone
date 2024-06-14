// --------------sticky-nevbar-----------
function rolar() {
    let nav1 = document.querySelector(".netflix-navbar");
    let y = document.documentElement.scrollTop;

    if (y > 200) {
        nav1.classList.add('nav-sticky');
    } else {
        nav1.classList.remove('nav-sticky');
    }
}
window.onscroll = rolar;

// Função para buscar dados da API e criar elementos de imagem
function buscarDisplayDados(url, container) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then((dadosFilme) => {
            let listarFilmes = dadosFilme.results;

            listarFilmes.forEach((value) => {
                let poster = value.poster_path;
                let imgUrl = `https://image.tmdb.org/t/p/w500${poster}`;

                container.innerHTML += `
<div class="imgeicon ">
<img src="${imgUrl}" alt="" class="img-poster">
<img src="https://preview.colorlib.com/theme/tralive/assets/img/icon/play-butto.svg" alt="" class="playmovie">
</div>
`;
            });
        })
        .catch(error => {
            console.error('Erro ao buscar dados:',error);
        });
}

// Buscar e displayar dados para cada slide
let slide1 = document.querySelector(".slide1");
buscarDisplayDados("https://api.themoviedb.org/3/movie/popular?api_key=518ae89aa3a583207617957aae8e6fdc", slide1);

let slide2 = document.querySelector(".slide2");
buscarDisplayDados("https://api.themoviedb.org/3/tv/popular?api_key=518ae89aa3a583207617957aae8e6fdc", slide2);

let slide3 = document.querySelector(".slide3");
buscarDisplayDados("https://api.themoviedb.org/3/trending/all/day?api_key=518ae89aa3a583207617957aae8e6fdc", slide3);