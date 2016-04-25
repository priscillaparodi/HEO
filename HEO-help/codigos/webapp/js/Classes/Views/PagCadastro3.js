function PagCadastro3() {
    this.construtor = function () {
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var aux = 1;
        var main_0 = document.createElement('main');
        main_0.className = "container center noHeader";

        var div_0 = document.createElement('div');
        div_0.className = "row white-text";

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var h3_0 = document.createElement('h4');
        h3_0.appendChild(document.createTextNode("Guilherme, "));
        div_1.appendChild(h3_0);

        div_0.appendChild(div_1);


        var div_2 = document.createElement('div');
        div_2.className = "col s12";

        var h4_0 = document.createElement('h5');
        h4_0.appendChild(document.createTextNode("Seu cadastro foi concluído com sucesso ;) "));
        div_2.appendChild(h4_0);

        div_0.appendChild(div_2);


        var div_3 = document.createElement('div');
        div_3.className = "col s12";

        var h5_0 = document.createElement('h5');
        h5_0.appendChild(document.createTextNode("Veja como o Divanum funciona "));
        div_3.appendChild(h5_0);

        div_0.appendChild(div_3);


        var div_4 = document.createElement('div');
        div_4.className = "col s12 container";

        var div_5 = document.createElement('div');
        div_5.className = "row vertAlign";

        var div_6 = document.createElement('div');
        div_6.className = "col s4";
        div_6.addEventListener("click", function () {
            if (aux == 3) {
                img_0.src = "img/tutorial/telaTutorial3.jpg";
                p_0.innerHTML = "Pressione o botão abaixo para inicar um chat com alguém anônimo";
                aux = 2;
            } else if (aux == 2) {
                img_0.src = "img/tutorial/telaTutorial2.jpg";
                p_0.innerHTML = "Para trocar de conversa basta acessar o menu lateral";
                aux = 1;
            } else {
                img_0.src = "img/tutorial/telaTutorial.jpg";
                p_0.innerHTML = "Pressione o botão abaixo para inicar um chat com alguém anônimo";
                aux = 3;
            }
        });

        var i_0 = document.createElement('i');
        i_0.className = "material-icons";
        i_0.appendChild(document.createTextNode("arrow_back"));
        div_6.appendChild(i_0);

        div_5.appendChild(div_6);


        var div_7 = document.createElement('div');
        div_7.className = "col s4 pointer";

        var img_0 = document.createElement('img');
        img_0.style.borderRadius = 0;
        img_0.src = "img/tutorial/telaTutorial.jpg";
        img_0.className = "circle responsive-img";
        div_7.appendChild(img_0);

        div_5.appendChild(div_7);


        var div_8 = document.createElement('div');
        div_8.className = "col s4 pointer";
        div_8.addEventListener("click", function () {
            if (aux == 1) {
                img_0.src = "img/tutorial/telaTutorial.jpg";
                p_0.innerHTML = "O objetivo é juntar pessoas para conversarem sobre coisas legais para que todos se animem! E fiquem felizes!";
                aux = 2;
            } else if (aux == 2) {
                img_0.src = "img/tutorial/telaTutorial2.jpg";
                p_0.innerHTML = "Para trocar de conversa basta acessar o menu lateral";
                aux = 3;
            } else {
                img_0.src = "img/tutorial/telaTutorial3.jpg";
                p_0.innerHTML = "Pressione o botão abaixo para inicar um chat com alguém anônimo";
                aux = 1;
            }
        });

        var i_1 = document.createElement('i');
        i_1.className = "material-icons";
        i_1.appendChild(document.createTextNode("arrow_forward"));
        div_8.appendChild(i_1);

        div_5.appendChild(div_8);

        div_4.appendChild(div_5);


        var div_9 = document.createElement('div');
        div_9.className = "row";

        var p_0 = document.createElement('p');
        var txt = document.createTextNode("O objetivo é juntar pessoas para conversarem sobre coisas legais para que todos se animem! E fiquem felizes!");
        p_0.appendChild(txt);
        div_9.appendChild(p_0);

        div_4.appendChild(div_9);

        div_0.appendChild(div_4);

        main_0.appendChild(div_0);

        pagina.getPagina().appendChild(main_0);


        var footer_0 = document.createElement('footer');
        footer_0.className = "container";

        var a_0 = document.createElement('a');
        a_0.className = "light-blue waves-effect waves-light btn-large btn-extra-large";
        a_0.appendChild(document.createTextNode("Finalizar"));
        a_0.addEventListener("click", function () {
            var hr = new XMLHttpRequest();
            hr.onreadystatechange = function () {
                if (hr.readyState == 4 && hr.status == 200) {
                    if (hr.response && hr.response != '') {
                        var a = JSON.parse(hr.response);
                        console.log(a);
                        usuario_id = a._id;
                        usuario_nome = a.nome;
                        pagina.abrirPaginas("Index");
                    } else {
                        alert('Autenticação inválida');
                    }
                }
            };
            hr.open("POST", "http://divanum.mybluemix.net/api/cadastrar", true);
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.send("nome=" + usuario_nome + "&sexo=" + usuario_sexo + "&email=" + usuario_email + "&senha=" + usuario_senha + "&nascimento=" + usuario_nascimento);


            pagina.abrirPaginas("Index");
        });
        footer_0.appendChild(a_0);

        pagina.getPagina().appendChild(footer_0);

    }


    pagina.setTitle("Cadastro");
    this.construtor();
}