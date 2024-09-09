sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/Binding"
],
    function (Controller,
	JSONModel,
	Binding) {
        "use strict";

        return Controller.extend("projetonetflix.controller.inicio", {
            onInit: function () {
                // DEFINIÇÃO DE LISTA VAZIA DE RESULTADOS
                let resultados = {
                    titles: []
                }

                //DEFINIÇÃO DE MODELO - VARIÁVEL ESPECIAL P/ MOSTRAR DADOS NA TELA
                let resultadosModel = new JSONModel();
                //ATRIBUIÇÃO DE DADOS
                resultadosModel.setData(resultados);
                //ANEXAR MODELO NA TELA
                let tela = this.getView();
                tela.setModel(resultadosModel, "APINetlix");


            },
            onINICIOLinkPress: function () {
                alert("Navegar para a tela inicial");
             

            },
            onBuscarDados: function () {
                   //busca de dados na API DA NETFLIX 
                   let searchField = this.byId("idSearchField")
                   let filtro = searchField.getValue();
                   alert(filtro);

                   const settings = {
                    async: true,
                    crossDomain: true,
                    url: 'https://netflix54.p.rapidapi.com/search/?query=' 
                    + filtro + '&offset=0&limit_titles=50&limit_suggestions=20&lang=en',
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '9fef556d7amshaeae284406ca15bp1d03eajsn3498912bbd6f',
                        'x-rapidapi-host': 'netflix54.p.rapidapi.com'
                    }
                };
                
                $.ajax(settings).done(function (response) {
                    console.log(response);
                    //RESGATAR O MODELO E ATUALIZAR OS DADOS
                    let tela = this.getView();
                    let modelo = tela.getModel("APINetlix");
                    let dados = modelo.getData();
                    //limpar a lista
                    dados.titles = [];
                    dados.titles = response.titles;
                    modelo.refresh();

                }.bind(this));


                //let sNome = 'Janaina'; string
                //let aLista = []; ARRAY
                //let oUser =() ; objeto


            }
        });
    });
