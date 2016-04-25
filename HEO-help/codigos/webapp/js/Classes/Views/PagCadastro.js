function PagCadastro() {
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

        var h1_0 = document.createElement('h3');
        h1_0.appendChild(document.createTextNode("Olá! "));

        var i_0 = document.createElement('i');
        i_0.className = "material-icons";
        i_0.appendChild(document.createTextNode("tag_faces"));
        h1_0.appendChild(i_0);

        div_1.appendChild(h1_0);

        div_0.appendChild(div_1);


        var div_2 = document.createElement('div');
        div_2.className = "col s12";

        var h5_0 = document.createElement('h5');
        h5_0.appendChild(document.createTextNode("Vamos nos conhecer melhor?"));
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

        var input_icon_prefix = document.createElement('input');
        input_icon_prefix.type = "text";
        input_icon_prefix.className = "validate";
        input_icon_prefix.id = "nome";
        div_5.appendChild(input_icon_prefix);


        var label_0 = document.createElement('label');
        label_0.htmlFor = "nome";
        label_0.appendChild(document.createTextNode("Qual é seu nome completo?"));
        div_5.appendChild(label_0);

        div_4.appendChild(div_5);

        form_0.appendChild(div_4);



        var div_r = document.createElement('div');
        div_r.className = "row input-field";

        var label_0 = document.createElement('label');
        label_0.className = "left"
        label_0.htmlFor = "dataUsuario";
        label_0.appendChild(document.createTextNode("Insira sua data de nascimento"));
        div_r.appendChild(label_0);

        var input_dataUsuario = document.createElement('input');
        input_dataUsuario.className = "datepicker";
        input_dataUsuario.id = "dataUsuario";
        input_dataUsuario.type = "date";
        div_r.appendChild(input_dataUsuario);

        form_0.appendChild(div_r);


        var div_8 = document.createElement('div');
        div_8.className = "row";

        var div_9 = document.createElement('div');
        div_9.className = "input-field col s12 white-text";

        var select_0 = document.createElement('select');
        select_0.id = "sexo";

        var option_0 = document.createElement('option');
        option_0.disabled = "disabled";
        option_0.selected = "selected";
        option_0.value = "";
        option_0.appendChild(document.createTextNode("Selecione seu sexo"));
        select_0.appendChild(option_0);


        var option_1 = document.createElement('option');
        option_1.value = "M";
        option_1.appendChild(document.createTextNode("Masculino"));
        select_0.appendChild(option_1);


        var option_2 = document.createElement('option');
        option_2.value = "F";
        option_2.appendChild(document.createTextNode("Feminino"));
        select_0.appendChild(option_2);


        var option_3 = document.createElement('option');
        option_3.value = "NI";
        option_3.appendChild(document.createTextNode("Prefiro não informar"));
        select_0.appendChild(option_3);

        div_9.appendChild(select_0);


        var label_2 = document.createElement('label');
        label_2.appendChild(document.createTextNode("Qual é seu sexo?"));
        div_9.appendChild(label_2);

        div_8.appendChild(div_9);

        form_0.appendChild(div_8);


        var div_10 = document.createElement('div');
        div_10.className = "row center white-text msgCadastro";

        var p_0 = document.createElement('p');
        p_0.className = "center";
        p_0.appendChild(document.createTextNode("Fique tranquilo, não divulgaremos nenhum desses dados :) "));
        div_10.appendChild(p_0);

        form_0.appendChild(div_10);

        div_3.appendChild(form_0);

        main_0.appendChild(div_3);

        pagina.getPagina().appendChild(main_0);


        var footer_0 = document.createElement('footer');
        footer_0.className = "container";

        var a_0 = document.createElement('a');
        a_0.className = "light-blue waves-effect waves-light btn-large btn-extra-large";
        a_0.addEventListener("click", function () {
            usuario_nome = document.getElementById("nome").value;
            usuario_nascimento = document.getElementById("dataUsuario").value;
            usuario_sexo = document.getElementById("sexo").value;
            pagina.abrirPaginas("Cadastro2");
        });
        var i_3 = document.createElement('i');
        i_3.className = "material-icons right";
        i_3.appendChild(document.createTextNode("send"));
        a_0.appendChild(i_3);

        a_0.appendChild(document.createTextNode("Próximo"));
        footer_0.appendChild(a_0);

        pagina.getPagina().appendChild(footer_0);
        $('select').material_select();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });

    }
    pagina.setTitle("Cadastro");

    this.construtor();
}