var listarAvaliacoesEscolaCtrl = function($scope, escolaApi) {
              $scope.escolaAvaliacoes = [];
              $scope.listarAvaliacoesEscola = function(codEscola) {
                escolaApi.getListarAvaliacoesEscola(codEscola)
                      .then(function (response) {
                          $scope.escolaAvaliacoes = response.data;
                      })
                      .catch(function (error) {
                          console.error(error);
                      });
              }
        };

escolaApp.controller("listarAvaliacoesEscolaCtrl", listarAvaliacoesEscolaCtrl);