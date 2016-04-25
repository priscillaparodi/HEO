function PagFinancas() {
    this.construtor = function () {
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();

        var main_0 = document.createElement('main');
        main_0.className = "container center";

        var div_0 = document.createElement('div');
        div_0.className = "row";

        var h5_0 = document.createElement('h5');
        h5_0.appendChild(document.createTextNode("Gastos"));
        div_0.appendChild(h5_0);


        var table_0 = document.createElement('table');
        table_0.className = "bordered";

        var thead_0 = document.createElement('thead');

        var tr_0 = document.createElement('tr');

        var th_0 = document.createElement('th');
        tr_0.appendChild(th_0);


        var th_1 = document.createElement('th');
        tr_0.appendChild(th_1);

        thead_0.appendChild(tr_0);

        table_0.appendChild(thead_0);


        var tbody_0 = document.createElement('tbody');

        var tr_1 = document.createElement('tr');

        var td_0 = document.createElement('td');
        td_0.appendChild(document.createTextNode("Minutos gastos"));
        tr_1.appendChild(td_0);


        var td_1 = document.createElement('td');
        td_1.appendChild(document.createTextNode("30 minutos"));
        tr_1.appendChild(td_1);

        tbody_0.appendChild(tr_1);


        var tr_2 = document.createElement('tr');

        var td_2 = document.createElement('td');
        td_2.appendChild(document.createTextNode("Quanto deverá pagar"));
        tr_2.appendChild(td_2);


        var td_3 = document.createElement('td');
        td_3.appendChild(document.createTextNode("R$ 300"));
        tr_2.appendChild(td_3);

        tbody_0.appendChild(tr_2);

        table_0.appendChild(tbody_0);

        div_0.appendChild(table_0);

        main_0.appendChild(div_0);


        var div_1 = document.createElement('div');
        div_1.className = "row";

        var h5_1 = document.createElement('h5');
        h5_1.appendChild(document.createTextNode("Histórico de ligações"));
        div_1.appendChild(h5_1);


        var table_1 = document.createElement('table');
        table_1.className = "bordered";

        var thead_1 = document.createElement('thead');

        var tr_3 = document.createElement('tr');

        var th_2 = document.createElement('th');
        th_2.appendChild(document.createTextNode("Número"));
        tr_3.appendChild(th_2);


        var th_3 = document.createElement('th');
        th_3.appendChild(document.createTextNode("Data"));
        tr_3.appendChild(th_3);


        var th_4 = document.createElement('th');
        th_4.appendChild(document.createTextNode("Duração"));
        tr_3.appendChild(th_4);

        thead_1.appendChild(tr_3);

        table_1.appendChild(thead_1);


        var tbody_1 = document.createElement('tbody');

        var tr_4 = document.createElement('tr');

        var td_4 = document.createElement('td');
        td_4.appendChild(document.createTextNode(981737437));
        tr_4.appendChild(td_4);


        var td_5 = document.createElement('td');
        td_5.appendChild(document.createTextNode("16/04/2016"));
        tr_4.appendChild(td_5);


        var td_6 = document.createElement('td');
        td_6.appendChild(document.createTextNode("27 min"));
        tr_4.appendChild(td_6);

        tbody_1.appendChild(tr_4);


        var tr_5 = document.createElement('tr');

        var td_7 = document.createElement('td');
        td_7.appendChild(document.createTextNode(981735544));
        tr_5.appendChild(td_7);


        var td_8 = document.createElement('td');
        td_8.appendChild(document.createTextNode("17/04/2016"));
        tr_5.appendChild(td_8);


        var td_9 = document.createElement('td');
        td_9.appendChild(document.createTextNode("10 min"));
        tr_5.appendChild(td_9);

        tbody_1.appendChild(tr_5);


        var tr_6 = document.createElement('tr');

        var td_10 = document.createElement('td');
        td_10.appendChild(document.createTextNode(981743397));
        tr_6.appendChild(td_10);


        var td_11 = document.createElement('td');
        td_11.appendChild(document.createTextNode("18/04/2016"));
        tr_6.appendChild(td_11);


        var td_12 = document.createElement('td');
        td_12.appendChild(document.createTextNode("3 min"));
        tr_6.appendChild(td_12);

        tbody_1.appendChild(tr_6);

        table_1.appendChild(tbody_1);

        div_1.appendChild(table_1);

        main_0.appendChild(div_1);

        pagina.getPagina().appendChild(main_0);



    }


    pagina.setTitle("Finaças");
    this.construtor();
}