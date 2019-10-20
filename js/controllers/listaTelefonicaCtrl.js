            angular.module("listaTelefonica").controller("listaTelefonicaController", function ($scope) {
            $scope.app = "Lista Telefonica";
            $scope.contatos = [
                {nome: "Pedro", telefone: "991028830", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "red"},
                {nome: "Carlos", telefone: "991028830", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "green"},
                {nome: "Jose", telefone: "991028830", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "red"}
            ];
            $scope.operadoras = [
                {nome: "Oi", codigo: 14, categoria: "Celular"},
                {nome: "Vivo", codigo: 15, categoria: "Celular"},
                {nome: "Tim", codigo: 41, categoria: "Celular"},
                {nome: "Claro", codigo: 16, categoria: "Celular"},
                {nome: "Embratel", codigo: 16, categoria: "Fixo"}
            ];
            $scope.adicionarContato = function(contato){
                $scope.contatos.push(angular.copy(contato));
                $scope.contatoForm.$setPrestine();
            };
            $scope.apagarContatos = function(contatos) {
                $scope.contatos = contatos.filter(function (contato) {
                    if (!contato.selecionado) return contato;
                })
            };
            $scope.isContatoSelecionado = function (contatos) {
                return contatos.some(function (contato) {
                    return contato.selecionado;
                });
            };
        });
    