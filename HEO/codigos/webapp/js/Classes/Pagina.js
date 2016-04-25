function Pagina() {
    var histPaginas = new Array();

    this.voltar = function () {
        histPaginas.pop();
        this.abrirPaginas(histPaginas[histPaginas.length - 1]);
        histPaginas.pop();
        return true;
    }
    this.setPaginaAtual = function (novaPagina) {
        histPaginas.push(novaPagina);
        return true;
    }
    this.scrollTo = function (ele) {
        ele.scrollIntoView(true);
    }
    this.getPagina = function () {
        return document.getElementById("pagina");
    }
    this.abrirPaginas = function (novaPagina) {
        var alteraAtual = true;
        if (novaPagina == "Index") {
            pagina.getPagina().style.backgroundImage = "";
            mostraHeader(true);
            pag = new PagIndex();
        } else if (novaPagina == "Estatisticas") {
            pagina.getPagina().style.backgroundImage = "";
            mostraHeader(true);
            pag = new PagEstatisticas();
        } else if (novaPagina == "Login") {
            pagina.getPagina().style.backgroundImage = "url('img/filter.png'), url('img/bg/telaLogin.jpg')";
            mostraHeader(false);
            pag = new PagLogin();
        } else if (novaPagina == "Cadastro") {
            mostraHeader(false);
            pagina.getPagina().style.backgroundImage = "url('img/filter.png'), url('img/bg/telaCadastro.jpg')";
            pag = new PagCadastro();
        } else if (novaPagina == "Cadastro2") {
            pagina.getPagina().style.backgroundImage = "url('img/filter.png'), url('img/bg/telaCadastro2.jpg')";
            mostraHeader(false);
            pag = new PagCadastro2();
        } else if (novaPagina == "Cadastro3") {
            pagina.getPagina().style.backgroundImage = "url('img/filter.png'), url('img/bg/telaCadastro3.jpg')";
            mostraHeader(false);
            pag = new PagCadastro3();
        } else if (novaPagina == "EstatisiticasPsicologo") {
            pagina.getPagina().style.backgroundImage = "";
            mostraHeader(true);
            pag = new PagEstatisticasPsicologo();
        } else if (novaPagina == "Financas") {
            pagina.getPagina().style.backgroundImage = "";
            mostraHeader(true);
            pag = new PagFinancas();

        } else if (novaPagina == "CadastroPsicologo") {
            mostraHeader(true);
            pag = new PagCadastroPsicologo();
            pagina.getPagina().style.backgroundImage = "url('img/filter.png'),url('img/bg/telaCadastro2.jpg')";


        } else {
            pag = new Pag404();
            alteraAtual = false;
        }

        if (alteraAtual) {
            this.setPaginaAtual(novaPagina);
        }
        window.setTimeout(function () {
            pagina.scrollTo(document.getElementsByTagName("body")[0]);
        }, 50);
        return true;
    }
    this.setTitle = function (title) {
        if (title == "Selecionar OAB") {
            document.getElementsByTagName("title")[0].innerHTML = title;
        }
        this.getWs = function () {
            return "https://wa-inopus2oab.rhcloud.com/ws/";
        }
    }
}

function mostraHeader(verificador) {
    if (verificador) {
        document.getElementsByTagName("header")[0].style.display = "block";
    } else {
        document.getElementsByTagName("header")[0].style.display = "none";
    }
}