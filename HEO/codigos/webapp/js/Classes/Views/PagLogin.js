function PagLogin() {
    this.construtor = function () {
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var main_0 = document.createElement('main');
        main_0.className = "container center noHeader";

        var div_0 = document.createElement('div');
        div_0.className = "row";

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var img_0 = document.createElement('img');
        img_0.src = "img/logoGrande.png";
        img_0.className = "responsive-img";
        div_1.appendChild(img_0);


        var h1_0 = document.createElement('h2');
        h1_0.className = "white-text";
        h1_0.appendChild(document.createTextNode("Divanum"));
        div_1.appendChild(h1_0);

        div_0.appendChild(div_1);

        main_0.appendChild(div_0);


        var div_2 = document.createElement('div');
        div_2.className = "row";

        var form_0 = document.createElement('form');
        form_0.className = "col s12";

        var div_3 = document.createElement('div');
        div_3.className = "row";

        var div_4 = document.createElement('div');
        div_4.className = "input-field col s12";

        var input_email = document.createElement('input');
        input_email.className = "validate";
        input_email.type = "email";
        input_email.id = "email";
        div_4.appendChild(input_email);


        var label_0 = document.createElement('label');
        label_0.htmlFor = "email";
        label_0.appendChild(document.createTextNode("Email"));
        div_4.appendChild(label_0);

        div_3.appendChild(div_4);

        form_0.appendChild(div_3);


        var div_5 = document.createElement('div');
        div_5.className = "row";

        var div_6 = document.createElement('div');
        div_6.className = "input-field col s12";

        var input_password = document.createElement('input');
        input_password.className = "validate";
        input_password.id = "password";
        input_password.type = "password";
        div_6.appendChild(input_password);


        var label_1 = document.createElement('label');
        label_1.htmlFor = "password";
        label_1.appendChild(document.createTextNode("Senha"));
        div_6.appendChild(label_1);

        div_5.appendChild(div_6);

        form_0.appendChild(div_5);

        div_2.appendChild(form_0);

        main_0.appendChild(div_2);

        pagina.getPagina().appendChild(main_0);


        var footer_0 = document.createElement('footer');
        footer_0.className = "container";

        var div_7 = document.createElement('div');
        div_7.className = "row";

        var a_0 = document.createElement('a');
        a_0.className = "light-blue waves-effect waves-light btn-large btn-extra-large";
        a_0.appendChild(document.createTextNode("Entrar"));
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
            hr.open("POST", "http://divanum.mybluemix.net/api/entrar", true);
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.send("email=" + document.getElementById('email').value + "&senha=" + document.getElementById('password').value);

        });
        div_7.appendChild(a_0);

        footer_0.appendChild(div_7);


        var div_8 = document.createElement('div');
        div_8.className = "row";

        var a_1 = document.createElement('a');
        a_1.addEventListener("click", function () {
            pagina.abrirPaginas("Cadastro");
        });
        a_1.className = "green waves-effect waves-light btn-large btn-extra-large";
        a_1.appendChild(document.createTextNode("Cadastre-se"));
        div_8.appendChild(a_1);

        footer_0.appendChild(div_8);


        var div_9 = document.createElement('div');
        div_9.className = "row center";

        var a_2 = document.createElement('a');
        a_2.className = "waves-effect waves-teal btn-flat white-text";
        a_2.appendChild(document.createTextNode("Não estou conseguindo logar"));
        div_9.appendChild(a_2);

        footer_0.appendChild(div_9);

        pagina.getPagina().appendChild(footer_0);

    }
    pagina.setTitle("Login");

    this.construtor();
}