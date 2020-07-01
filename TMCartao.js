
const CARTAO_URL = "TMCartao.html";

var db_cartao = {};

var cartaoCorrente = {};

function generateUUID () {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;

    return 'xxxx.xxxx.xxxx.xx-xx' .replace(/[xy]/g, function(c) {
        var r = Math.random() *16;
        if (d > 0) {
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
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

function initCartaoApp () {
    cartaoCorrenteJSON = sessionStorage.getItem('cartaoCorrente');
    if (cartaoCorrenteJSON) {
        cartaoCorrente = JSON.parse (cartaoCorrenteJSON);
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

function cartaoUser (idCard) {
    for(var i = 0; i < db_cartao.cartoes.length; i++) {
        var sandycartao = db_cartao.cartoes[i];

        if (idCard == sandycartao.id) {
            cartaoCorrente.id = sandycartao.id;


            sessionStorage.setItem('cartaoCorrente', JSON.stringify (cartaoCorrente));

            return true;
        }
    }

    return false;
}

function logoutUser () {
    cartaoCorrente = {};
    sessionStorage.setItem ('cartaoCorrente', JSON.stringify (cartaoCorrente));
    window.location = LOGIN_URL;
}

function adcCodigo () {
    let newID = generateUUID ();
    let ncartao = {
        "numeroCartao": newID,
    };

    db_cartao.cartoes.push (ncartao);
    
    localStorage.setItem('db_cartao', JSON.stringify(db_cartao));
}

function setUserPass () {

}

initCartaoApp ();


/*document.getElementById ('numeroCard').value = generateUUID();*/
