function PagEstatisticasPsicologo() {
    this.construtor = function () {
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();

        var main_0 = document.createElement('main');
        main_0.className = "container center";

        var div_0 = document.createElement('div');
        div_0.className = "row";

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var h5_0 = document.createElement('h3');
        h5_0.appendChild(document.createTextNode("Paciente: Robson"));
        div_1.appendChild(h5_0);

        div_0.appendChild(div_1);

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var h5_0 = document.createElement('h5');
        h5_0.appendChild(document.createTextNode("Estatísticas"));
        div_1.appendChild(h5_0);

        div_0.appendChild(div_1);

        main_0.appendChild(div_0);


        var div_2 = document.createElement('div');
        div_2.className = "row";

        var div_3 = document.createElement('div');
        div_3.className = "col s12";

        var ul_0 = document.createElement('ul');
        ul_0.className = "tabs";

        var li_0 = document.createElement('li');
        li_0.className = "tab col s4";

        var a_0 = document.createElement('a');
        a_0.href = "#test1";
        a_0.appendChild(document.createTextNode("Escrita"));
        li_0.appendChild(a_0);

        ul_0.appendChild(li_0);


        var li_1 = document.createElement('li');
        li_1.className = "tab col s4";

        var a_1 = document.createElement('a');
        a_1.href = "#test2";
        a_1.appendChild(document.createTextNode("Sociais"));
        li_1.appendChild(a_1);

        ul_0.appendChild(li_1);


        var li_2 = document.createElement('li');
        li_2.className = "tab col s4";

        var a_2 = document.createElement('a');
        a_2.href = "#test3";
        a_2.appendChild(document.createTextNode("Emocionais"));
        li_2.appendChild(a_2);

        ul_0.appendChild(li_2);

        div_3.appendChild(ul_0);

        div_2.appendChild(div_3);


        var div_test1 = document.createElement('div');
        div_test1.className = "col s12";
        div_test1.id = "test1";

        var div_4 = document.createElement('div');
        div_4.className = "row";

        var div_chartContainer = document.createElement('div');
        div_chartContainer.style.height = "300px";
        div_chartContainer.style.width = "100%";
        div_chartContainer.id = "chartContainer";
        div_4.appendChild(div_chartContainer);

        div_test1.appendChild(div_4);

        div_2.appendChild(div_test1);


        var div_test2 = document.createElement('div');
        div_test2.id = "test2";
        div_test2.className = "col s12";

        var div_5 = document.createElement('div');
        div_5.className = "row";

        var div_chartContainer2 = document.createElement('div');
        div_chartContainer2.style.height = "300px";
        div_chartContainer2.style.width = "100%";
        div_chartContainer2.id = "chartContainer2";
        div_5.appendChild(div_chartContainer2);

        div_test2.appendChild(div_5);

        div_2.appendChild(div_test2);


        var div_test3 = document.createElement('div');
        div_test3.className = "col s12";
        div_test3.id = "test3";

        var div_6 = document.createElement('div');
        div_6.className = "row";

        var div_chartContainer3 = document.createElement('div');
        div_chartContainer3.style.height = "300px";
        div_chartContainer3.style.width = "100%";
        div_chartContainer3.id = "chartContainer3";
        div_6.appendChild(div_chartContainer3);

        div_test3.appendChild(div_6);

        div_2.appendChild(div_test3);

        main_0.appendChild(div_2);


        var div_0 = document.createElement('div');
        div_0.className = "row";

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var h5_0 = document.createElement('h3');
        h5_0.appendChild(document.createTextNode("Paciente: " + usuario_nome));
        div_1.appendChild(h5_0);

        div_0.appendChild(div_1);

        var div_1 = document.createElement('div');
        div_1.className = "col s12";

        var h5_0 = document.createElement('h5');
        h5_0.appendChild(document.createTextNode("Estatísticas"));
        div_1.appendChild(h5_0);

        div_0.appendChild(div_1);

        main_0.appendChild(div_0);


        var div_2 = document.createElement('div');
        div_2.className = "row";

        var div_3 = document.createElement('div');
        div_3.className = "col s12";

        var ul_0 = document.createElement('ul');
        ul_0.className = "tabs";

        var li_0 = document.createElement('li');
        li_0.className = "tab col s4";

        var a_0 = document.createElement('a');
        a_0.href = "#test4";
        a_0.appendChild(document.createTextNode("Escrita"));
        li_0.appendChild(a_0);

        ul_0.appendChild(li_0);


        var li_1 = document.createElement('li');
        li_1.className = "tab col s4";

        var a_1 = document.createElement('a');
        a_1.href = "#test5";
        a_1.appendChild(document.createTextNode("Sociais"));
        li_1.appendChild(a_1);

        ul_0.appendChild(li_1);


        var li_2 = document.createElement('li');
        li_2.className = "tab col s4";

        var a_2 = document.createElement('a');
        a_2.href = "#test6";
        a_2.appendChild(document.createTextNode("Emocionais"));
        li_2.appendChild(a_2);

        ul_0.appendChild(li_2);

        div_3.appendChild(ul_0);

        div_2.appendChild(div_3);


        var div_test1 = document.createElement('div');
        div_test1.className = "col s12";
        div_test1.id = "test4";

        var div_4 = document.createElement('div');
        div_4.className = "row";

        var div_chartContainer = document.createElement('div');
        div_chartContainer.style.height = "300px";
        div_chartContainer.style.width = "100%";
        div_chartContainer.id = "chartContainer4";
        div_4.appendChild(div_chartContainer);

        div_test1.appendChild(div_4);

        div_2.appendChild(div_test1);


        var div_test2 = document.createElement('div');
        div_test2.id = "test5";
        div_test2.className = "col s12";

        var div_5 = document.createElement('div');
        div_5.className = "row";

        var div_chartContainer2 = document.createElement('div');
        div_chartContainer2.style.height = "300px";
        div_chartContainer2.style.width = "100%";
        div_chartContainer2.id = "chartContainer5";
        div_5.appendChild(div_chartContainer2);

        div_test2.appendChild(div_5);

        div_2.appendChild(div_test2);


        var div_test3 = document.createElement('div');
        div_test3.className = "col s12";
        div_test3.id = "test6";

        var div_6 = document.createElement('div');
        div_6.className = "row";

        var div_chartContainer3 = document.createElement('div');
        div_chartContainer3.style.height = "300px";
        div_chartContainer3.style.width = "100%";
        div_chartContainer3.id = "chartContainer6";
        div_6.appendChild(div_chartContainer3);

        div_test3.appendChild(div_6);

        div_2.appendChild(div_test3);

        main_0.appendChild(div_2);



        pagina.getPagina().appendChild(main_0);
        construtorGraficos(20, 30, 60, 70, 10, 30, 80, 20, 90, 10, 20, 30, 80, 30);
        construtorGraficos2();
        $('ul.tabs').tabs();

    }
    pagina.setTitle("Estatísticas");

    this.construtor();
}