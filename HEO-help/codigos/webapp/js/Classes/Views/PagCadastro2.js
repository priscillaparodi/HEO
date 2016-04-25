function PagCadastro2() {
    this.construtor = function () {
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var main_0 = document.createElement('main');
        main_0.className = "container center noHeader";

        var div_0 = document.createElement('div');
        div_0.className = "row white-text";

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var h3_0 = document.createElement('h3');
        h3_0.appendChild(document.createTextNode(usuario_nome));
        div_1.appendChild(h3_0);

        div_0.appendChild(div_1);


        var div_2 = document.createElement('div');
        div_2.className = "col s12";

        var h5_0 = document.createElement('h5');
        h5_0.appendChild(document.createTextNode("Falta pouco :)"));
        div_2.appendChild(h5_0);

        div_0.appendChild(div_2);

        main_0.appendChild(div_0);


        var div_3 = document.createElement('div');
        div_3.className = "row";

        var form_0 = document.createElement('form');
        form_0.className = "col s12 white-text";
        form_0.setAttribute("onSubmit", "return false;");

        var div_4 = document.createElement('div');
        div_4.className = "row";

        var div_5 = document.createElement('div');
        div_5.className = "input-field col s12";

        var input_email = document.createElement('input');
        input_email.className = "validate";
        input_email.id = "email";
        input_email.type = "email";
        div_5.appendChild(input_email);


        var label_0 = document.createElement('label');
        label_0.htmlFor = "email";
        label_0.appendChild(document.createTextNode("Digite um e-mail para login"));
        div_5.appendChild(label_0);

        div_4.appendChild(div_5);

        form_0.appendChild(div_4);


        var div_6 = document.createElement('div');
        div_6.className = "row";

        var div_7 = document.createElement('div');
        div_7.className = "input-field col s12";

        var input_password = document.createElement('input');
        input_password.id = "password";
        input_password.type = "password";
        input_password.className = "validate";
        div_7.appendChild(input_password);


        var label_1 = document.createElement('label');
        label_1.htmlFor = "password";
        label_1.appendChild(document.createTextNode("Defina uma senha"));
        div_7.appendChild(label_1);

        div_6.appendChild(div_7);

        form_0.appendChild(div_6);


        var div_8 = document.createElement("div");
        div_8.className = "row";

        var p_0 = document.createElement('p');

        var input_test5 = document.createElement('input');
        input_test5.type = "checkbox";
        input_test5.id = "test5";
        p_0.appendChild(input_test5);


        var label_0 = document.createElement('label');
        label_0.htmlFor = "test5";
        label_0.appendChild(document.createTextNode("Aceito os "));
        var a = document.createElement("a");
        a.addEventListener("click", function () {
            $('#modalTermos').openModal();
        });
        a.appendChild(document.createTextNode("termos de uso"));
        label_0.appendChild(a);
        label_0.appendChild(document.createTextNode("."));
        p_0.appendChild(label_0);

        div_8.appendChild(p_0);
        form_0.appendChild(p_0);


        var div_8 = document.createElement('div');
        div_8.className = "row center white-text msgCadastro";

        var p_0 = document.createElement('p');
        p_0.className = "center";
        p_0.appendChild(document.createTextNode("Fique tranquilo, não utilizaremos seu e-mail para mandar spam!"));
        div_8.appendChild(p_0);

        form_0.appendChild(div_8);

        div_3.appendChild(form_0);

        main_0.appendChild(div_3);

        pagina.getPagina().appendChild(main_0);


        var footer_0 = document.createElement('footer');
        footer_0.className = "container";

        var a_0 = document.createElement('a');
        a_0.className = "light-blue waves-effect waves-light btn-large btn-extra-large";
        a_0.addEventListener("click", function () {
            usuario_email = document.getElementById("email").value;
            usuario_senha = document.getElementById("password").value;
            pagina.abrirPaginas("Cadastro3");
        });
        var i_3 = document.createElement('i');
        i_3.className = "material-icons right";
        i_3.appendChild(document.createTextNode("send"));
        a_0.appendChild(i_3);

        a_0.appendChild(document.createTextNode("Próximo"));
        footer_0.appendChild(a_0);

        pagina.getPagina().appendChild(footer_0);




    }
    pagina.setTitle("Cadastro");

    this.construtor();
}