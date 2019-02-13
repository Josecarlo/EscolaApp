var listarAvaliacaoPorTipoCtrl = function($scope, escolaApi) {
                $scope.avaliacoes = [];
                $scope.listarAvaliacaoPorTipo = function(cod, tipo) {
                  escolaApi.getListarAvaliacaoPorTipo(cod, tipo)
                        .then(function (response) {
                            $scope.avaliacoes = response.data;
                            console.log($scope.avaliacoes);
                      })
                        .catch(function (error) {
                            console.error(error);
                      });
              }
        };

escolaApp.controller("listarAvaliacaoPorTipoCtrl", listarAvaliacaoPorTipoCtrl);