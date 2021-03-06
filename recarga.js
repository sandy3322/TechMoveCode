var salvarRecarga = function () {
  //var select = document.getElementById('choicePlan');
  //var option = select.options[select.selectedIndex];
  var nomeCD = document.getElementById('username').value
  var numeroCD = document.getElementById('numeroCard').value
  var senhaCD = document.getElementById('password_confirm').value
  if (nomeCD == 0 || numeroCD == 0 || senhaCD == 0) {
    alert('Campo em branco. Favor preenchê-lo')
  }
  else {
    var select = document.getElementById('choiceRecar');
    var option = select.options[select.selectedIndex];
    //var text = option.text
    var valueR = document.getElementById('choiceRecar').value
    //localStorage.setItem('text', text);
    localStorage.setItem('valueRecarga', valueR)
    alert('Contrato de plano efetuado com sucesso.')
    window.location.href = 'TechMove.html'
 }
}

var salvarRecargaBoleto = function () {
  //var select = document.getElementById('choicePlan');
  //var option = select.options[select.selectedIndex];
  var nomeBoleto = document.getElementById('usernameBoleto').value
  var numeroBoleto = document.getElementById('numeroCardBoleto').value
  if (nomeBoleto == 0 || numeroBoleto == 0) {
    alert('Campo em branco. Favor preenchê-lo')
  }
  else {
    var select = document.getElementById('choiceRecar');
    var option = select.options[select.selectedIndex];
    //var text = option.text
    var value = document.getElementById('choiceRecar').value
    //localStorage.setItem('text', text);
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
    var choice = select.value;
    if (choice != '0') {
        document.getElementById("btnConfirmar").disabled = false;
        document.getElementById("btnCancelar").disabled = false;
        if (choice === '5') {
            para.textContent = 'Com esse valor você recarregará em seu cartão vinculado a sua conta o valor de "R$5,00", acumulativo e sem prazo de vencimento.';
        } else if (choice === '10') {
            para.textContent = 'Com esse valor você recarregará em seu cartão vinculado a sua conta o valor de "R$10,00", acumulativo e sem prazo de vencimento.';
        } else if (choice === '15') {
            para.textContent = 'Com esse valor você recarregará em seu cartão vinculado a sua conta o valor de "R$15,00", acumulativo e sem prazo de vencimento.';
        } else if (choice === '20') {
            para.textContent = 'Com esse valor você recarregará em seu cartão vinculado a sua conta o valor de "R$20,00", acumulativo e sem prazo de vencimento.';
        } else if (choice === '25') {
            para.textContent = 'Com esse valor você recarregará em seu cartão vinculado a sua conta o valor de "R$25,00", acumulativo e sem prazo de vencimento.';
        } else if (choice === '50') {
            para.textContent = 'Com esse valor você recarregará em seu cartão vinculado a sua conta o valor de "R$50,00", acumulativo e sem prazo de vencimento.';
        } else if (choice === '100') {
            para.textContent = 'Com esse valor você recarregará em seu cartão vinculado a sua conta o valor de "R$100,00", acumulativo e sem prazo de vencimento.';
        }  else if (choice === '200') {
            para.textContent = 'Com esse valor você recarregará em seu cartão vinculado a sua conta o valor de "R$200,00", acumulativo e sem prazo de vencimento.';
        } else {
            para.textContent = '';
        }
    }
}

function escolha () {
  var escolhaHTML = '';

    escolhaHTML = escolhaHTML + `
    <h1 class="titulo-metodo">Métodos de pagamento</h1>
    <div id="caixa-choice" class="row">
      <div>
      <h1 class="titulo-pag">Cartão</h1>
      <a href="#"><img src="icons/cartaoPag.png" alt="" width="100" height="100" class="iconPag1"  onclick="cartaoPag()"></a>
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

function paypal(){
  window.location.href = 'https://www.paypal.com/br/home';
}

function cancela(){
  alert('Operação cancelada.')
  window.location.href = 'recarga.html'
}

function cartaoPag () {
  var cartaoPagHTML = '';

    cartaoPagHTML = cartaoPagHTML + `
    <article class="card-body" >
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
            <h1 style="font-size: large;">Selecione a bandeira do seu cartão.<h1>
            <div class="controls">           
              <div class="box">
                <img src="visa.png " hspace="5px width="60" height="50" style="margin: 0px 5px;" id="visa" onclick="seleciona()"/>
                <img src="mastercard.png"  hspace="5px" width="60" height="50"style="margin: 0px 5px;"/>
                <img src="elo.png" width="60" height="50"style="margin: 0px 5px;"/>
                <img src="hipercard.png" width="60" height="50"style="margin: 0px 5px;"/>                           
              </div>       
              <button class="btn btn-success" onclick="salvarRecarga()">Recarregue agora</button>                               
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

function boletoPag () {
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
              <button class="btn btn-success"onclick="salvarRecargaBoleto()">Gerar Boleto</button>                               
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

  