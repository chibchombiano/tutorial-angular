(function () {
    'use strict';
    var controllerId = 'example';
    angular.module('app').controller(controllerId, ['common', 'AzureMobileClient', example]);

    function example(common, AzureMobileClient) {
        var azureService = AzureMobileClient;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Example';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () {
                    log('Vista de ejemplo activada');
                    azureService.addDataAsync('Estudiante', { Nombre: 'Jose douglas ramirez', Codigo: 12345 })
                        .then(
                        function (result) {
                            alert(result);
                        },
                        function (error) {
                            alert(error);
                        }

                        );
                });
        }
    }
})();