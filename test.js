/*var db_planos = {};

var planosCorrente = {};

const planosIniciais = {
  planos: [
    /*{
        "planoSalvo": plano,
    },
    {
        "planoSalvo": plano,
    }*/
//]
//};

/*function initPlanoApp() {
  planosCorrenteJSON = sessionStorage.getItem('planosCorrente');
  if (planosCorrenteJSON) {
      planosCorrente = JSON.parse(planosCorrenteJSON);
  }

  var planosJSON = localStorage.getItem('db_planos');

  if (!planosJSON) {
      //alert('Dados de usuário não encontrador. \n Cadastre-se.');

      db_planos = planosIniciais;

      localStorage.setItem('db_planos', JSON.stringify(planosIniciais));
  }
  else {
      db_cartao = JSON.parse(planosJSON);
  }
};

function adcPlanos(textPlan, valuePlan) {
    let planoS = {
    "planoSalvo": textPlan,
    "planoValor": valuePlan
  }

  db_planos.planos.push(planoS);

  localStorage.setItem('db_planos', JSON.stringify(db_planos));
}*/
/*function carrega() {
localStorage.setItem('value', 0);
}*/
var salvarPlanos = function () {
  //var select = document.getElementById('choicePlan');
  //var option = select.options[select.selectedIndex];
  var nomeCD = document.getElementById('username').value
  var numeroCD = document.getElementById('numeroCard').value
  var senhaCD = document.getElementById('password_confirm').value
  if (nomeCD == 0 || numeroCD == 0 || senhaCD == 0) {
    alert('Campo em branco. Favor preenchê-lo')
  }
  else {
    var select = document.getElementById('choicePlan');
    var option = select.options[select.selectedIndex];
    var text = option.text
    var value = document.getElementById('choicePlan').value
    localStorage.setItem('text', text);
    localStorage.setItem('value', value)
    alert('Contrato de plano efetuado com sucesso.')
    window.location.href = 'TechMove.html'
 }
}
//document.getElementById('confirmPlano').addEventListener('click', salvarPlanos);

var salvarPlanosBoleto = function () {
  //var select = document.getElementById('choicePlan');
  //var option = select.options[select.selectedIndex];
  var nomeBoleto = document.getElementById('usernameBoleto').value
  var numeroBoleto = document.getElementById('numeroCardBoleto').value
  if (nomeBoleto == 0 || numeroBoleto == 0) {
    alert('Campo em branco. Favor preenchê-lo')
  }
  else {
    var select = document.getElementById('choicePlan');
    var option = select.options[select.selectedIndex];
    var text = option.text
    var value = document.getElementById('choicePlan').value
    localStorage.setItem('text', text);
    localStorage.setItem('value', value)
    alert('Contrato de plano efetuado com sucesso.')
    window.location.href = 'TechMove.html'
 }
}

var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

document.getElementById("btnConfirmar").disabled = true;
document.getElementById("btnCancelar").disabled = true;
function setWeather() {
  //Mostra plano e valor
  //var select = document.getElementById('choicePlan');
  //var option = select.options[select.selectedIndex];
  //document.getElementById('value').value = option.value;
  //document.getElementById('text').value = option.text;
  //Mostra detalhes do plano
  var choice = select.value;
  if (choice != '0') {
    document.getElementById("btnConfirmar").disabled = false;
    document.getElementById("btnCancelar").disabled = false;
    if (choice === '180') {
      para.textContent = 'Assine agora o plano Urbano "TechMove", com ele você ganha R$200,00 em créditos no seu cartão para andar com o transporte público que quiser, seja patinete, bicicleta, ônibus ou metrô... Quer saber mais? Tudo isso por apenas R$180,00 mensais...';
    } else if (choice === '340') {
      para.textContent = 'Assine hoje, o plano InterUrbano "TechMove", mais completo, para você que usa o transporte todo dia! Com esse plano você recebe R$400 reais em créditos mensais acumuláveis, e possui aumento na quantidade de avaliações e tudo isso por R$340,00 mensais.';
    } else if (choice === '500') {
      para.textContent = 'Adquira já o plano Estadual, você tem acesso a tudo, e os créditos. Com o Plano Estadual TechMove você consegue fazer viagens interestaduais e além de possuir R$600,00 em créditos, isso mesmo, R$600 reais pelo valor de R$500 em dinheiro por mês.';
    } else {
      para.textContent = '';
    }
  }
}

function escolha() {
  var escolhaHTML = '';

  escolhaHTML = escolhaHTML + `
    <h1 class="titulo-metodo" >Métodos de pagamento</h1>
    <div id="caixa-choice" class="row">
      <div>
      <h1 class="titulo-pag">Cartão</h1>
      <a href="#"><img src="icons/cartaoPag.png" alt="" width="100" height="100" class="iconPag1" onclick="cartaoPag()"></a>
      </div>
      <div>
      <h1 class="titulo-pag">Boleto</h1>
      <a href="#"><img src="icons/boleto.png" alt="" width="100" height="70" class="iconPag2" onclick="boletoPag()"></a>
      </div>
      <div>
      <h1 class="titulo-pag">Paypal</h1>
      <a href="#"><img src="icons/paypal.png" alt="" width="100" height="90" class="iconPag3" onclick="paypal()"></a>
      </div>
    </div>
    `

  document.getElementById('conteudo').innerHTML = escolhaHTML;
}

function paypal() {
  window.location.href = 'https://www.paypal.com/br/home';
}

function cancela() {
  alert('Operação cancelada.')
  window.location.href = 'TM-Planos.html'
}

function cartaoPag() {
  var cartaoPagHTML = '';

  cartaoPagHTML = cartaoPagHTML + `
    <article class="card-body">
    <div class="texto">
        <h4 class="card-title text-left" style="font-size: 30px">
        <b><center>Cartão de Crédito/Débito</center></b></h4>
    </div>
    <div class="col-12">
        <form id="form-recarga">
        <div class="grupo de controle">
            <label class="control-label"  for="username">Nome do titular do cartão:</label>
        <div class="controls">
         <input type="text" id="username" name="username" placeholder="" class="input-xlarge">
        </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="Numero">Numero do cartão:</label>
            <div class="controls">
              <input type="text" id="numeroCard" name="Numero" placeholder="" class="input-xlarge">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="password">Data de validade do cartão:</label>
            <div class="controls">
              <select class="span3" name="expiry_month" id="expiry_month">
                <option></option>
                <option value="01">Jan (01)</option>
                <option value="02">Feb (02)</option>
                <option value="03">Mar (03)</option>
                <option value="04">Apr (04)</option>
                <option value="05">May (05)</option>
                <option value="06">June (06)</option>
                <option value="07">July (07)</option>
                <option value="08">Aug (08)</option>
                <option value="09">Sep (09)</option>
                <option value="10">Oct (10)</option>
                <option value="11">Nov (11)</option>
                <option value="12">Dec (12)</option>
              </select>
              <select class="span2" name="expiry_year">
                <option value="13">2020</option>
                <option value="14">2021</option>
                <option value="15">2022</option>
                <option value="16">2023</option>
                <option value="17">2024</option>
                <option value="18">2025</option>
                <option value="19">2026</option>
                <option value="20">2027</option>
                <option value="21">2028</option>
                <option value="22">2029</option>
                <option value="23">2030</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label"  for="password_confirm">Cartão CVV:</label>
            <div class="controls">
              <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="span4">
            </div>
          </div>
          <div class="control-group">
            <div class="controls">
              <label class="checkbox" for="save_card">
                <input type="checkbox" id="save_card" value="option1">
                Salvar cartão registrado?
              </label>
            </div>
          </div>
          <div class="control-group">
            <h1 style="font-size: large;" id="demo"></h1>
            <h1 style="font-size: large;">Selecione a bandeira do seu cartão.<h1>
            <div class="controls">           
              <div class="box">
                <img src="visa.png " hspace="5px width="60" height="50" style="margin: 0px 5px;" id="visa" onclick="seleciona()"/>
                <img src="mastercard.png"  hspace="5px" width="60" height="50"style="margin: 0px 5px;"/>
                <img src="elo.png" width="60" height="50"style="margin: 0px 5px;"/>
                <img src="hipercard.png" width="60" height="50"style="margin: 0px 5px;"/>                           
              </div>       
              <button id="confirmPlano" class="btn btn-success" onclick="salvarPlanos()">Recarregue agora</button>                               
            </div>
          </div>
        </form>
    </div>
</article>
    `

  document.getElementById('conteudo').innerHTML = cartaoPagHTML;
  
  //document.getElementById('btn2').addEventListener('click', init);
  //elemMain.innerHTML = textoHTML;
}
//Dados Cred


function boletoPag() {
  var boletoPagHTML = '';

  boletoPagHTML = boletoPagHTML + `
    <article class="card-body">
    <div class="texto">
        <h4 class="card-title text-left" style="font-size: 30px">
        <b><center>Boleto</center></b></h4>
    </div>
    <div class="col-12">
        <form id="form-recarga">
        <div class="grupo de controle">
            <label class="control-label"  for="username">Nome:</label>
        <div class="controls">
         <input type="text" id="usernameBoleto" name="username" placeholder="" class="input-xlarge">
        </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="Numero">CPF:</label>
            <div class="controls">
              <input type="text" id="numeroCardBoleto" name="Numero" placeholder="" class="input-xlarge">
            </div>
          </div>
          <div class="control-group" >
            <div class="controls">
              <label class="checkbox" for="save_card">
                <input type="checkbox" id="save_card" value="option1">
                Salvar dados?
              </label>
            </div>
          </div>
          <div class="control-group">
            <div class="controls">
              <button class="btn btn-success" onclick="salvarPlanosBoleto()">Gerar Boleto</button>                               
            </div>
          </div>
        </form>
    </div>
</article>
    `

  document.getElementById('conteudo').innerHTML = boletoPagHTML;
  //document.getElementById('btn2').addEventListener('click', init);
  //elemMain.innerHTML = textoHTML;
}

/**/