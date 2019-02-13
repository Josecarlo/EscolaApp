/*var pesquisarEscolaPorAnoCtrl = function($scope, escolaApi) {
              $scope.escola = [];
              $scope.pesquisarEscolaPorAno = function(codEscola, anoEscola) {
                escolaApi.getPesquisarEscolaPorAno(codEscola, anoEscola)
                      .then(function (response) {
                          $scope.escola = response.data;
                      })
                          .catch(function (error) {
                          console.error(error);
                      });
              }
        };

escolaApp.controller("pesquisarEscolaPorAnoCtrl", pesquisarEscolaPorAnoCtrl);*/

var pesquisarEscolaPorAnoCtrl = function ($scope, escolaApi) {

    $scope.escola = {};
    /*$scope.codEscola = $stateParams.codEscola;
    $scope.anoEscola = $stateParams.anoEscola;*/

    $scope.pesquisarEscolaPorAno = function (codEscola, anoEscola) {
        escolaApi.getEscola(codEscola, anoEscola)
            .then(function (response) {
                $scope.escola = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

   /* let inicializarEscola = function() {
        var codEscola = $stateParams.codEscola;
        var anoEscola = $stateParams.anoEscola;
        console.log(codEscola, anoEscola);*/
       
    };

  


escolaApp.controller("pesquisarEscolaPorAnoCtrl", pesquisarEscolaPorAnoCtrl);