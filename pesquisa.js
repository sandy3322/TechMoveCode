const API_KEY = '746a5f539fcb433ab8c79c92082fe6b0';

function exibeNoticias() {
    let divTela = document.getElementById('noticia');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);
    for (i = 0; i < 8; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);

        texto = texto + `
        <div class="box-noticia">
            <img src="${noticia.urlToImage}" alt="">
            <span class="titulo">${noticia.title}</span><br>
            <span class="creditos">${data.toLocaleDateString()} - 
                ${noticia.source.name} - 
                ${noticia.author}</span><br>
            <span class="text">
            ${noticia.content} <a href="${noticia.url}">Leia mais ...</a>
            </span>
        </div>       
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();
}

function executaPesquisa2() {
    let procura = this.id;
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${procura}&apiKey=${API_KEY}`);
    xhr.send();
}
document.querySelectorAll('#btnFonte #fonte a').forEach(element => {
    element.addEventListener('click', executaPesquisa2);
});
document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);

//Código

var tema = document.getElementById('noticia');

onload = () => {

    if (window.location.hostname != "localhost") {
        window.location.href = `${window.location.protocol}//localhost:${window.location.port}/TechMove.html`;
    }

    exibeTags();
    addEvents();
}

//Função preencher pesquisas
function noticiasAPI() {
    let news = JSON.parse(this.responseText);
    let exclusive = document.getElementById('noticia');
    let gradeNews = document.getElementById('gradeNews');

  

    let textExclusive = '';
    let textNews = '';
    let contExclusive = 0;



    for (i = 0; i < news.articles.length; i++) {
        let data = new Date(news.articles[i].publishedAt);

        if (news.articles[i].urlToImage != null && contExclusive < 1 && textExclusive == '') {
            textExclusive += `
            <div class="box-noticia">
            <img src="${news.articles[i].urlToImage}" alt="">
            <span class="titulo">${news.articles[i].title.split(" - ")[0]}</span><br>
            <span class="creditos">${data.toLocaleDateString()} - 
                ${news.articles[i].source.name} - 
                ${news.articles[i].author}</span><br>
            <span class="text">
            ${news.articles[i].content} <a href="${news.articles[i].url}">Leia mais ...</a>
            </span>
        </div>   
                    `;
            contExclusive++;
        } else if (news.articles[i].urlToImage != null) {
            textNews += `
                <div class="box-noticia">
                <img src="${news.articles[i].urlToImage}" alt="">
                <span class="titulo">${news.articles[i].title.split(" - ")[0]}</span><br>
                <span class="creditos">${data.toLocaleDateString()} - 
                    ${news.articles[i].source.name} - 
                    ${news.articles[i].author}</span><br>
                <span class="text">
                ${news.articles[i].content} <a href="${news.articles[i].url}">Leia mais ...</a>
                </span>
            </div>   
                
                `;
        }
    }
    exclusive.innerHTML = textExclusive;
    gradeNews.innerHTML = textNews;
}
//noticia pesquisa


// Pesquisa por seção:
function executaPesquisa() {
    let fonte = this.id;
    let texto = this.text;

    if (this.classList.contains("tag")) {
        let xhr = new XMLHttpRequest();
        xhr.onload = noticiasAPI, tema.innerHTML = ``;
        xhr.open('GET', `https://newsapi.org/v2/top-headlines?q=${fonte}&apiKey=${API_KEY}&lang=pt`);
        xhr.send();
    } else {
        let xhr = new XMLHttpRequest();
        xhr.onload = noticiasAPI, tema.innerHTML = `<u>${texto}</u>`;
        xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${fonte}&apiKey=${API_KEY}&lang=pt`);
        xhr.send();
    }


}


function exibeNoticias() {
    let divTela = document.getElementById('noticia');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);
    for (i = 0; i < 8; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);

        texto = texto + `
        <div class="box-noticia">
            <img src="${noticia.urlToImage}" alt="">
            <span class="titulo">${noticia.title}</span><br>
            <span class="creditos">${data.toLocaleDateString()} - 
                ${noticia.source.name} - 
                ${noticia.author}</span><br>
            <span class="text">
            ${noticia.content} <a href="${noticia.url}">Leia mais ...</a>
            </span>
        </div>       
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

// Pesquisa por input
function executarPesquisa() {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();
}

function exibeTags() {
    let tagsList = JSON.parse(localStorage.getItem('tags'));
    if (tagsList) {
        let tagsMenu = document.getElementById('tagsMenu');
        let nav = document.getElementById('btnFonte');
        let ul = nav.getElementsByTagName('ul')[0];

        let texto = '';

        texto += `
            <li id="tagsMenu" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navTags" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: white; margin-top: 10px;">
                    Favoritos
                </a>
                <div class="dropdown-menu" aria-labelledby="navTags">
            
        `;
        for (let i = 0; i < tagsList.length; i++) {
            texto += `
                <a class="dropdown-item tag" id="${tagsList[i].tag}">${tagsList[i].tag}</a>
            `;
        }
        texto += `
                </div>
            </li>
        `;

        if (!tagsMenu)
            ul.innerHTML += texto;
        else {
            tagsMenu.innerHTML = texto;
        }

    }
}

// Adiciona dados no localStorage
function adicionaTag() {
    let textoTag = document.getElementById('txtPesquisa').value;
    let tags = JSON.parse(localStorage.getItem('tags'));

    if (textoTag.trim() != "") {
        if (!tags) { // Verifica se já existe uma tag adicionada
            let obj = [{
                tag: textoTag
            }];
            localStorage.setItem('tags', JSON.stringify(obj));
        } else { // Adiciona nova tag
            tags.push({
                tag: textoTag
            });
            localStorage.setItem('tags', JSON.stringify(tags));
        }
    } else {
        alert("Escreva algo no campo para adicionar uma tag")
        return false;
    }

    textoTag = '';

    location.reload();
}

function addEvents() {
    document.querySelectorAll(".dropdown-menu a").forEach(function (opt) {
        opt.addEventListener("click", executaPesquisa);
    });

    document.getElementById('btnPesquisa').addEventListener('click', executarPesquisa);
    document.getElementById('btnFav').addEventListener('click', adicionaTag);
}
/**/