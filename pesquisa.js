const API_KEY = '746a5f539fcb433ab8c79c92082fe6b0';

function exibeNoticias () {

    let divTela = document.getElementById('noticia');
    let texto = '';
    let divTitulo = document.getElementById('titulo');
    let titulo = `<center><h1 style="color: white; margin-left: 80px; margin-top:80px;">Notícias/Pesquisas</h1></center>`;

    
    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    
    for (i=0; i < 8; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
        <div class="box-noticia">
            <img src="${noticia.urlToImage}" alt="">
            <span class="titulo">${noticia.title}</span><br>
            <span class="creditos">${data.toLocaleDateString ()} - 
                ${noticia.source.name} - 
                ${noticia.author}</span><br>
            <span class="text">
            ${noticia.content} <a class="link" href="${noticia.url}">Leia mais ...</a>
            </span>
        </div>       
        `;
    };
        
    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
    divTitulo.innerHTML = titulo;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

/*function executaPesquisa2 () {
    let procura = this.id;
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/top-headlines?sources=${procura}&apiKey=${API_KEY}`);
    xhr.send ();
}
  document.querySelectorAll('#btnFonte #fonte a').forEach(element => {
    element.addEventListener('click', executaPesquisa2);
});*/
document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);