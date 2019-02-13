 var listarAvaliacaoMediaCtrl = function($scope, escolaApi) {
            $scope.avaliacaoMedia = {};
            $scope.listarAvaliacaoMedia = function(codEscola) {
                escolaApi.getListarAvaliacaoMedia(codEscola)
                    .then(function(response) {
                        $scope.avaliacaoMedia = response.data;
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        };

escolaApp.controller("listarAvaliacaoMediaCtrl", listarAvaliacaoMediaCtrl);
