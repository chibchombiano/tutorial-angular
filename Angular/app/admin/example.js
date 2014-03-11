(function () {
    'use strict';
    var controllerId = 'example';
    angular.module('app').controller(controllerId, ['common', example]);

    function example(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Example';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Vista de ejemplo activada'); });
        }
    }
})();