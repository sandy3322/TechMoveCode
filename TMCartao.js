
const CARTAO_URL = "TMCartao.html";

var db_cartao = {};

var cartaoCorrente = {};

function generateUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;

    return 'xxxxxx-x'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 10;
        if (d > 0) {
            r = (d + r) % 10 | 0;
            d = Math.floor(d / 10);
        } else {
            r = (d2 + r) % 10 | 0;
            d2 = Math.floor(d2 / 10);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(10);
    });
}

const codIniciais = {
    cartoes: [
        /*{
            "id": generateUUID (),
        },
        {
            "id": generateUUID (),
        }*/
    ]
};

function initCartaoApp() {
    cartaoCorrenteJSON = sessionStorage.getItem('cartaoCorrente');
    if (cartaoCorrenteJSON) {
        cartaoCorrente = JSON.parse(cartaoCorrenteJSON);
    }

    var cartaoJSON = localStorage.getItem('db_cartao');

    if (!cartaoJSON) {
        //alert('Dados de usuário não encontrador. \n Cadastre-se.');

        db_cartao = codIniciais;

        localStorage.setItem('db_cartao', JSON.stringify(codIniciais));
    }
    else {
        db_cartao = JSON.parse(cartaoJSON);
    }
};

function cartaoUser(SCard) {
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        //var sandycartao = db_cartao.cartoes[i];
        var usuario = db_usuarios.usuarios[i];

        if (SCard == usuario.senhaC1) {
            //cartaoCorrente.card = sandycartao.numeroCartao;
            cartaoCorrente.senha = usuario.senhaC1;


            sessionStorage.setItem('cartaoCorrente', JSON.stringify(cartaoCorrente));

            return true;
        }
    }

    return false;
}

function logoutUser() {
    cartaoCorrente = {};
    sessionStorage.setItem('cartaoCorrente', JSON.stringify(cartaoCorrente));
    window.location = LOGIN_URL;
}

function adcCodigo() {
    let newID = generateUUID();
    let ncartao = {
        "numeroCartao": newID,
        "senhaCartao": db_usuarios.usuarios.senhaC1
    };

    db_cartao.cartoes.push(ncartao);

    localStorage.setItem('db_cartao', JSON.stringify(db_cartao));
}

function setUserPass() {

}

initCartaoApp();


/*document.getElementById ('numeroCard').value = generateUUID();*/
