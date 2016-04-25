window.addEventListener("load", function () {
    //carregando = new Carregando();
    //localStorage.clear();
    funcionalidadesDisponiveis();
    //alerta = new Alerta();
    //banco = new Banco();
    //    if (typeof document.getElementsByTagName("main")[0].empty != typeof Function) {
    //        Element.prototype.empty = function () {
    //            while (this.firstChild) this.removeChild(this.firstChild);
    //        }
    //        console.log("Element.empty() criado manualmente.");
    //    }
    pagina = new Pagina();
    $('.button-collapse').sideNav({
        edge: 'right',
    });
    $('.modal-trigger').leanModal();
    pagina.abrirPaginas("Login");
});

function abrirURL(url) {
    window.open(url, '_system');
    navigator.app.loadUrl(url, {
        openExternal: true
    });
    return true;
}

function geraId() {
    var id = Date.now() + parseInt(Math.random() * 100);
    return id;
}


function construtorGraficos(var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13, var14) {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: ""
        },
        animationEnabled: true,
        axisX: {
            interval: 1,
            gridThickness: 0,
            labelFontSize: 10,
            labelFontStyle: "normal",
            labelFontWeight: "normal",
            labelFontFamily: "Roboto"

        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)"
        },
        data: [
            {
                type: "bar",
                name: "Sociais",
                axisYType: "secondary",
                color: "#03a9f4",
                dataPoints: [

                    {
                        y: var1,
                        label: "Analítico"
                                },
                    {
                        y: var2,
                        label: "Confidente"
                                },
                    {
                        y: var3,
                        label: "Tentador"
                                }
				]
			}

			]
    });


    var chart2 = new CanvasJS.Chart("chartContainer2", {
        title: {
            text: ""
        },
        animationEnabled: true,
        axisX: {
            interval: 1,
            gridThickness: 0,
            labelFontSize: 10,
            labelFontStyle: "normal",
            labelFontWeight: "normal",
            labelFontFamily: "Roboto"

        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)"
        },
        data: [
            {
                type: "bar",
                name: "Sociais",
                axisYType: "secondary",
                color: "#fb8c00",
                dataPoints: [

                    {
                        y: var4,
                        label: "Aberto"
                                },
                    {
                        y: var5,
                        label: "Consistente"
                                },
                    {
                        y: var6,
                        label: "Extrovertido"
                                },
                    {
                        y: var7,
                        label: "Agressivo"
                                },
                    {
                        y: var8,
                        label: "Range emocional"
                                }
				]
			}

			]
    });

    var chart3 = new CanvasJS.Chart("chartContainer3", {
        title: {
            text: ""
        },
        animationEnabled: true,
        axisX: {
            interval: 1,
            gridThickness: 0,
            labelFontSize: 10,
            labelFontStyle: "normal",
            labelFontWeight: "normal",
            labelFontFamily: "Roboto"

        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)"
        },
        data: [
            {
                type: "bar",
                name: "Sociais",
                axisYType: "secondary",
                color: "#4CAF50",
                dataPoints: [

                    {
                        y: var9,
                        label: "Bravo"
                                },
                    {
                        y: var10,
                        label: "Aversão"
                                },
                    {
                        y: var11,
                        label: "Extrovertido"
                                },
                    {
                        y: var12,
                        label: "Medo"
                                },
                    {
                        y: var13,
                        label: "Alegria"
                                },
                    {
                        y: var14,
                        label: "Triste"
                                }

				]
			}

			]
    });
    chart.render();
    chart2.render();
    chart3.render();
}

function construtorGraficos2() {

    var chart4 = new CanvasJS.Chart("chartContainer4", {
        title: {
            text: ""
        },
        animationEnabled: true,
        axisX: {
            interval: 1,
            gridThickness: 0,
            labelFontSize: 10,
            labelFontStyle: "normal",
            labelFontWeight: "normal",
            labelFontFamily: "Roboto"

        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)"
        },
        data: [
            {
                type: "bar",
                name: "Sociais",
                axisYType: "secondary",
                color: "#03a9f4",
                dataPoints: [

                    {
                        y: 40,
                        label: "Analítico"
                                },
                    {
                        y: 30,
                        label: "Confidente"
                                },
                    {
                        y: 100,
                        label: "Tentador"
                                }
				]
			}

			]
    });


    var chart5 = new CanvasJS.Chart("chartContainer5", {
        title: {
            text: ""
        },
        animationEnabled: true,
        axisX: {
            interval: 1,
            gridThickness: 0,
            labelFontSize: 10,
            labelFontStyle: "normal",
            labelFontWeight: "normal",
            labelFontFamily: "Roboto"

        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)"
        },
        data: [
            {
                type: "bar",
                name: "Sociais",
                axisYType: "secondary",
                color: "#fb8c00",
                dataPoints: [

                    {
                        y: 40,
                        label: "Aberto"
                                },
                    {
                        y: 30,
                        label: "Consistente"
                                },
                    {
                        y: 100,
                        label: "Extrovertido"
                                },
                    {
                        y: 20,
                        label: "Agressivo"
                                },
                    {
                        y: 10,
                        label: "Range emocional"
                                }
				]
			}

			]
    });

    var chart6 = new CanvasJS.Chart("chartContainer6", {
        title: {
            text: ""
        },
        animationEnabled: true,
        axisX: {
            interval: 1,
            gridThickness: 0,
            labelFontSize: 10,
            labelFontStyle: "normal",
            labelFontWeight: "normal",
            labelFontFamily: "Roboto"

        },
        axisY2: {
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)"
        },
        data: [
            {
                type: "bar",
                name: "Sociais",
                axisYType: "secondary",
                color: "#4CAF50",
                dataPoints: [

                    {
                        y: 40,
                        label: "Bravo"
                                },
                    {
                        y: 30,
                        label: "Aversão"
                                },
                    {
                        y: 100,
                        label: "Extrovertido"
                                },
                    {
                        y: 20,
                        label: "Medo"
                                },
                    {
                        y: 10,
                        label: "Alegria"
                                },
                    {
                        y: 10,
                        label: "Triste"
                                }

				]
			}

			]
    });
    chart4.render();
    chart5.render();
    chart6.render();
}