function PagCadastroPsicologo() {
    this.construtor = function () {
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var main_0 = document.createElement('main');
        main_0.className = "container center";

        var div_0 = document.createElement('div');
        div_0.className = "row white-text";

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var h1_0 = document.createElement('h3');
        h1_0.appendChild(document.createTextNode("Cadastro de Psicólogo"));
        div_1.appendChild(h1_0);

        div_0.appendChild(div_1);

        main_0.appendChild(div_0);

        var div_3 = document.createElement('div');
        div_3.className = "row";

        var form_0 = document.createElement('form');
        form_0.className = "col s12 white-text";
        form_0.setAttribute("onSubmit", "return false;");

        var div_row = document.createElement("div");
        div_row.className = "row";

        var div_col = document.createElement("div");
        div_col.className = "col s12";

        var div_img = document.createElement("div");
        div_img.id = "imgPerfil";
        div_img.className = "pointer";


        var div_leg = document.createElement("div");
        div_leg.id = "legendaFoto";

        div_col.appendChild(div_img);
        div_col.appendChild(div_leg);
        div_row.appendChild(div_col);
        form_0.appendChild(div_row);

        var div_4 = document.createElement('div');
        div_4.className = "row";

        var div_5 = document.createElement('div');
        div_5.className = "input-field col s12";



        var input_icon_prefix = document.createElement('input');
        input_icon_prefix.type = "text";
        input_icon_prefix.className = "validate";
        input_icon_prefix.id = "icon_prefix";
        div_5.appendChild(input_icon_prefix);


        var label_0 = document.createElement('label');
        label_0.htmlFor = "icon_prefix";
        label_0.appendChild(document.createTextNode("Qual é seu nome completo?"));
        div_5.appendChild(label_0);

        div_4.appendChild(div_5);

        form_0.appendChild(div_4);



        var div_r = document.createElement('div');
        div_r.className = "row input-field";

        var label_0 = document.createElement('label');
        label_0.className = "left";
        label_0.htmlFor = "dataUsuario";
        label_0.appendChild(document.createTextNode("Insira sua data"));
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


        div_3.appendChild(form_0);

        main_0.appendChild(div_3);

        pagina.getPagina().appendChild(main_0);


        var footer_0 = document.createElement('footer');
        footer_0.className = "container";

        var a_0 = document.createElement('a');
        a_0.className = "light-blue waves-effect waves-light btn-large btn-extra-large";
        a_0.addEventListener("click", function () {
            pagina.abrirPaginas("Cadastro2");
        });

        a_0.appendChild(document.createTextNode("Cadastrar"));
        footer_0.appendChild(a_0);

        pagina.getPagina().appendChild(footer_0);

        document.getElementById("imgPerfil").innerHTML = "<div class='image-upload'><label for='file-input'><i class='large material-icons'>account_circle</i></label><input id='file-input' type='file'  accept='image/*'/></div>";
        document.getElementById("legendaFoto").innerHTML = "Clique acima para adicionar uma foto e  deixar seu perfil bacana";

        $('select').material_select();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });

    }
    pagina.setTitle("Cadastro");

    this.construtor();
}