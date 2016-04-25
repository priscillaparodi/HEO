function PagIndex() {
    this.construtor = function () {
        this.montaPagHtml();
    }

    this.montaPagHtml = function () {
        pagina.getPagina().empty();
        var socket = io.connect('http://divanum.mybluemix.net');
        var userLogin = usuario_id;
        socket.on('connect', function () {
            //CHAMAR HTTP GET BLUEMIX /api/getRoom - Retorna uma json

            //PASSAR AQUI O CÓDIGO DO USUÁRIO RECEBIDO DA API
            var roomCode = 'ABCDE';
            socket.emit('adduser', roomCode, userLogin);

        });

        var main_0 = document.createElement('main');
        main_0.className = "container center";

        var div_0 = document.createElement('div');
        div_0.className = "conversa";

        pagina.getPagina().appendChild(main_0);
        var footer_0 = document.createElement('footer');

        var form_0 = document.createElement('form');
        form_0.className = "row";
        form_0.setAttribute("onSubmit", "return false;");

        var div_15 = document.createElement('div');
        div_15.className = "input-field col s9";

        var input_inputMensagem = document.createElement('input');
        input_inputMensagem.className = "validate";
        input_inputMensagem.id = "inputMensagem";
        input_inputMensagem.type = "text";
        input_inputMensagem.style.color = "#000000";
        input_inputMensagem.addEventListener("keyup", function (event) {
            if (event.key == "Enter" || event.keyCode == 13) {
                var message = input_inputMensagem.value;
                //Usuario mandando mensagem
                socket.emit('sendchat', userLogin, message);
                input_inputMensagem.value = "";
            }
        });
        div_15.appendChild(input_inputMensagem);



        var label_labelMensagem = document.createElement('label');
        label_labelMensagem.id = "labelMensagem";
        label_labelMensagem.htmlFor = "inputMensagem";
        label_labelMensagem.appendChild(document.createTextNode("Digite a mensagem"));
        div_15.appendChild(label_labelMensagem);

        form_0.appendChild(div_15);


        var a_0 = document.createElement('a');
        a_0.className = "btn-floating btn-large waves-effect waves-light light-blue right";

        var i_0 = document.createElement('i');
        i_0.className = "material-icons";
        i_0.appendChild(document.createTextNode("send"));
        a_0.addEventListener("click", function () {
            var message = input_inputMensagem.value;

            //Usuario mandando mensagem
            socket.emit('sendchat', userLogin, message);
            input_inputMensagem.value = "";
        });




        //INCLUIR NOVA CONVERSA
        socket.on('updatechat', function (user, data) {

            if (user == userLogin) {
                var div_1 = document.createElement('div');
                div_1.className = "row mensagemEnviada";

                var div_2 = document.createElement('div');
                div_2.className = "col s3";

                var i_0 = document.createElement('i');
                i_0.className = "large material-icons";
                i_0.appendChild(document.createTextNode("tag_faces"));
                div_2.appendChild(i_0);

                div_1.appendChild(div_2);


                var div_3 = document.createElement('div');
                div_3.className = "col s9";

                var div_4 = document.createElement('div');
                div_4.className = "row";

                var div_5 = document.createElement('div');
                div_5.className = "col left  light-blue lighten-4 textoMensagem";

                var p_0 = document.createElement('p');
                p_0.className = "left";
                p_0.appendChild(document.createTextNode(data));
                div_5.appendChild(p_0);

                div_4.appendChild(div_5);

                div_3.appendChild(div_4);


                var div_6 = document.createElement('div');
                div_6.className = "row";

                var div_7 = document.createElement('div');
                div_7.className = "col s12";

                var p_1 = document.createElement('p');
                p_1.className = "left horaMensagem";

                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes();

                p_1.appendChild(document.createTextNode(h + ":" + m));
                div_7.appendChild(p_1);

                div_6.appendChild(div_7);

                div_3.appendChild(div_6);

                div_1.appendChild(div_3);

                div_0.appendChild(div_1);

                main_0.appendChild(div_0);
            } else {
                //Chat do outro
                var div_8 = document.createElement('div');
                div_8.className = "row mensagemRecebida";

                var div_9 = document.createElement('div');
                div_9.className = "col s9";

                var div_10 = document.createElement('div');
                div_10.className = "row";

                var div_11 = document.createElement('div');
                div_11.className = "col right  grey lighten-3 textoMensagem";

                var p_2 = document.createElement('p');
                p_2.className = "right";
                p_2.appendChild(document.createTextNode(data));
                div_11.appendChild(p_2);

                div_10.appendChild(div_11);

                div_9.appendChild(div_10);

                var div_12 = document.createElement('div');
                div_12.className = "row";

                var div_13 = document.createElement('div');
                div_13.className = "col s12";

                var p_3 = document.createElement('p');
                p_3.className = "right horaMensagem";
                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes();
                p_3.appendChild(document.createTextNode(h + ":" + m));
                div_13.appendChild(p_3);

                div_12.appendChild(div_13);

                div_9.appendChild(div_12);

                div_8.appendChild(div_9);


                var div_14 = document.createElement('div');
                div_14.className = "col s3";

                var i_0 = document.createElement('i');
                i_0.className = "large material-icons";
                i_0.appendChild(document.createTextNode("face"));
                div_14.appendChild(i_0);

                div_8.appendChild(div_14);

                div_0.appendChild(div_8);

                main_0.appendChild(div_0);

            }
        });


        a_0.appendChild(i_0);
        form_0.appendChild(a_0);


        footer_0.appendChild(form_0);

        pagina.getPagina().appendChild(footer_0);

        socket.on('deuMatch', function () {
            $('#modalMatch').openModal();
        });

        socket.on('naoDeuMatch', function () {
            $('#modalNoMatch').openModal();
        });
    }
    pagina.setTitle("Início");

    this.construtor();
}