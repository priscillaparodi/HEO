function Carregando() {
    this.elemento = undefined;
    this.elemento1 = undefined;
    this.elemento2 = undefined;
    this.elemento3 = undefined;
    this.elemento4 = undefined;
    this.btnFechar = undefined;
    this.msg = undefined;
    this.msgTxt = undefined;
    this.msgTxtTempoEsgotado = undefined;
    this.idInterval = undefined;
    this.tempoEsgotado = undefined;
    this.contadorMsg = undefined;
    this.btnFecharTxt = undefined;

    this.construtor = function () {
        this.elemento = document.createElement("div");
        this.elemento.setAttribute("id", "telaCarregando");
        document.getElementsByTagName("body")[0].appendChild(this.elemento);
        this.msg = document.createElement("p");
        this.msg.setAttribute("id", "telaCarregandoMsg");
        this.msgTxt = document.createTextNode("Carregando...");
        this.msg.style.fontSize = "1.6em";
        this.msg.appendChild(this.msgTxt);
        this.elemento.appendChild(this.msg);
        this.contadorMsg = document.createElement("p");
        this.contadorMsg.setAttribute("id", "telaCarregandoContadorMsg");
        this.elemento.appendChild(this.contadorMsg);

        //Preloader
        this.preLoader = document.createElement("div");
        this.row = document.createElement("div");
        this.row.setAttribute("class", "row");
        this.col = document.createElement("div");
        this.col.setAttribute("class", "col s12 center");
        var div_0 = document.createElement('div');
        div_0.className = "preloader-wrapper big active";
        var div_1 = document.createElement('div');
        div_1.className = "spinner-layer spinner-blue";
        var div_2 = document.createElement('div');
        div_2.className = "circle-clipper left";
        var div_3 = document.createElement('div');
        div_3.className = "circle";
        div_2.appendChild(div_3);
        div_1.appendChild(div_2);


        var div_4 = document.createElement('div');
        div_4.className = "gap-patch";
        var div_5 = document.createElement('div');
        div_5.className = "circle";
        div_4.appendChild(div_5);
        div_1.appendChild(div_4);


        var div_6 = document.createElement('div');
        div_6.className = "circle-clipper right";
        var div_7 = document.createElement('div');
        div_7.className = "circle";
        div_6.appendChild(div_7);
        div_1.appendChild(div_6);
        div_0.appendChild(div_1);


        var div_8 = document.createElement('div');
        div_8.className = "spinner-layer spinner-red";

        var div_9 = document.createElement('div');
        div_9.className = "circle-clipper left";

        var div_10 = document.createElement('div');
        div_10.className = "circle";
        div_9.appendChild(div_10);

        div_8.appendChild(div_9);


        var div_11 = document.createElement('div');
        div_11.className = "gap-patch";

        var div_12 = document.createElement('div');
        div_12.className = "circle";
        div_11.appendChild(div_12);

        div_8.appendChild(div_11);


        var div_13 = document.createElement('div');
        div_13.className = "circle-clipper right";

        var div_14 = document.createElement('div');
        div_14.className = "circle";
        div_13.appendChild(div_14);

        div_8.appendChild(div_13);

        div_0.appendChild(div_8);


        var div_15 = document.createElement('div');
        div_15.className = "spinner-layer spinner-green";

        var div_16 = document.createElement('div');
        div_16.className = "circle-clipper left";

        var div_17 = document.createElement('div');
        div_17.className = "circle";
        div_16.appendChild(div_17);

        div_15.appendChild(div_16);


        var div_18 = document.createElement('div');
        div_18.className = "gap-patch";

        var div_19 = document.createElement('div');
        div_19.className = "circle";
        div_18.appendChild(div_19);

        div_15.appendChild(div_18);


        var div_20 = document.createElement('div');
        div_20.className = "circle-clipper right";

        var div_21 = document.createElement('div');
        div_21.className = "circle";
        div_20.appendChild(div_21);

        div_15.appendChild(div_20);

        div_0.appendChild(div_15);


        var div_22 = document.createElement('div');
        div_22.className = "spinner-layer spinner-yellow";

        var div_23 = document.createElement('div');
        div_23.className = "circle-clipper left";

        var div_24 = document.createElement('div');
        div_24.className = "circle";
        div_23.appendChild(div_24);

        div_22.appendChild(div_23);


        var div_25 = document.createElement('div');
        div_25.className = "gap-patch";

        var div_26 = document.createElement('div');
        div_26.className = "circle";
        div_25.appendChild(div_26);

        div_22.appendChild(div_25);


        var div_27 = document.createElement('div');
        div_27.className = "circle-clipper right";

        var div_28 = document.createElement('div');
        div_28.className = "circle";
        div_27.appendChild(div_28);

        div_22.appendChild(div_27);

        div_0.appendChild(div_22);

        this.col.appendChild(div_0);
        this.row.appendChild(this.col);
        this.preLoader.appendChild(this.row);
        this.elemento.appendChild(this.preLoader);


        //Botão Fechar
        this.row = document.createElement("div");
        this.row.setAttribute("class", "row");
        this.col = document.createElement("div");
        this.col.setAttribute("class", "col s12 center");
        this.btnFechar = document.createElement("button");
        this.btnFechar.setAttribute("id", "telaCarregandoBtnFechar");
        this.btnFechar.setAttribute("class", "red darken-4 white-text");
        this.btnFechar.classList.add("btn");
        this.btnFechar.classList.add("btnVermelho");
        this.btnFecharTxt = document.createTextNode("Fechar");
        this.btnFechar.appendChild(this.btnFecharTxt);
        this.col.appendChild(this.btnFechar);
        this.row.appendChild(this.col);
        this.elemento.appendChild(this.row);





        if (this.elemento) {
            this.btnFecharDesativar();
        } else {
            console.log("Elemento 'carregando' não encontrado.");
            alert("Elemento 'carregando' não encontrado.");
            div_0.style.display = "none";
        }
        this.btnFechar.addEventListener("click", function () {
            carregando.fechar();
        });
    }

    this.abrir = function (tempoEsgotadoM, tempoEsgotadoMsg) { // M de milisegundos
        if (this.idInterval != undefined) {
            this.fechar();
        }
        this.msgAlterar("Carregando...");
        if (tempoEsgotadoM != undefined) {
            this.tempoEsgotado = tempoEsgotadoM / 1000;
        }
        this.btnFecharDesativar();
        this.elemento.style.display = "block";
        if (this.tempoEsgotado > 0) {
            if (tempoEsgotadoMsg != undefined) {
                this.msgTxtTempoEsgotado = tempoEsgotadoMsg;
            } else {
                this.msgTxtTempoEsgotado = undefined;
            }
            this.contador();
        } else {
            this.tempoEsgotado = undefined;
            this.contadorMsg.innerHTML = "";
        }
        return true;
    }

    this.btnFecharAtivar = function () {
        this.btnFechar.style.display = "inline-block";
        this.preLoader.style.display = "none";
        return true;
    }

    this.btnFecharDesativar = function () {
        this.btnFechar.style.display = "none";
        this.preLoader.style.display = "inline-block";
        return true;
    }

    this.contador = function () {
        if (this.tempoEsgotado != undefined) {
            this.idInterval = window.setInterval(function () {
                carregando.tempoEsgotado--;
                carregando.contadorMsg.innerHTML = "(" + carregando.tempoEsgotado + ")";
                if (carregando.tempoEsgotado <= 0) {
                    carregando.terminar();
                }
            }, 1000);
            this.contadorMsg.innerHTML = "(" + this.tempoEsgotado + ")";
        } else {
            this.contadorMsg.innerHTML = "";
        }
        return true;
    }

    this.fechar = function () {
        this.elemento.style.display = "none";
        this.terminar();
        return true;
    }

    this.msgAlterar = function (m) {
        // this.msgTxt.remove();
        this.msg.empty();
        this.msgTxt = document.createTextNode(m);
        this.msg.appendChild(this.msgTxt);
        return true;
    }

    this.terminar = function (fcb) {
        if (this.idInterval != undefined) {
            window.clearInterval(carregando.idInterval);
            this.idInterval = undefined;
        }
        carregando.contadorMsg.innerHTML = "";
        carregando.btnFecharAtivar();
        if (carregando.msgTxtTempoEsgotado != undefined) {
            carregando.msgAlterar(carregando.msgTxtTempoEsgotado);
        } else {
            carregando.msgAlterar("");
        }
        carregando.tempoEsgotado = undefined;
        if (typeof fcbe == typeof Function) {
            fcb();
        }
    }

    this.construtor();
}