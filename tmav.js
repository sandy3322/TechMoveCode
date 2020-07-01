$(function() {

    var operacao = "A"; //"A"=Adição; "E"=Edição

    var indice_selecionado = -1;

    var db_av = localStorage.getItem("db_av"); // Recupera os dados armazenados

    db_av = JSON.parse(db_av); // Converte string para objeto

    if (db_av == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    db_av = [];

    function Adicionar() {
        /*var cli = GetCliente("Codigo", $("#codigo").val());

        if (cli != null) {
            alert("Código já cadastrado.");
            return;
        }*/

        var av = JSON.stringify({
            NumeroV: $("#numerovAva").val(),
            Data: $("#dataAva").val(),
            Descricao: $("#descAva").val()
        });

        db_av.push(av);

        localStorage.setItem("db_av", JSON.stringify(db_av));

        alert("Registro adicionado.");
        return true;
    }

    function Editar() {
        db_av[indice_selecionado] = JSON.stringify({
            NumeroV: $("#numerovAva").val(),
            Data: $("#dataAva").val(),
            Descricao: $("#descAva").val()
        });
        localStorage.setItem("db_av", JSON.stringify(db_av));
        alert("Informações editadas.")
        operacao = "A";
        return true;
    }

    function Listar() {
        $("#tela").html("");
        $("#tela").html(

        );

        for (var i in db_av) {
            var avaliacao = JSON.parse(db_av[i]);
            $("#tela").append("<div class='text-av'>" +
                "<a href='#'><img src='icons/editar.png' alt='" + i + "' class='btnEditar'/></a> <a href='#'><img src='icons/excluir.png' alt='" + i + "' class='btnExcluir'/></a>" +
                "<h5 class='text-titulo'>Número do Veículo</h5> <p class='text-cont'> " + avaliacao.NumeroV + "</p>" +
                "<h5 class='text-titulo'>Data</h5> <p class='text-cont'> " + avaliacao.Data + "</p>" +
                "<h5 class='text-titulo'>Avaliação</h5> <p class='text-cont'> " + avaliacao.Descricao + "</p>" +
                "</div>");
        }
    }

    function Excluir() {
        db_av.splice(indice_selecionado, 1);
        localStorage.setItem("db_av", JSON.stringify(db_av));
        alert("Avaliação excluído.");
    }

    /*function GetCliente(propriedade, valor) {
        var cli = null;
        for (var item in tbClientes) {
            var i = JSON.parse(tbClientes[item]);
            if (i[propriedade] == valor)
                cli = i;
        }
        return cli;
    }*/

    Listar();

    $("#form-avaliacao").on("submit", function() {
        if (operacao == "A")
            return Adicionar();
        else
            return Editar();
    });

    $("#tela").on("click", ".btnEditar", function() {
        operacao = "E";
        indice_selecionado = parseInt($(this).attr("alt"));
        var avaliacao = JSON.parse(db_av[indice_selecionado]);
        $("#numerovAva").val(avaliacao.NumeroV);
        $("#dataAva").val(avaliacao.Data);
        $("#descAva").val(avaliacao.Descricao);
        $("#nome").focus();
    });

    $("#tela").on("click", ".btnExcluir", function() {
        indice_selecionado = parseInt($(this).attr("alt"));
        Excluir();
        Listar();
    });
});
/**/