angular.module('contactIntegration.setupInstruction.DORIS', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.DORIS.config()');
    $stateProvider.state('setupInstruction.DORIS', {
      url: '/DORIS',
      views: {
        'main': {
          controller: 'DORISSetupInstructionCtrl',
          templateUrl: 'setupInstructions/DORIS/DORIS.tpl.html'
        }
      },
      data: { pageTitle: 'DORIS Setup Instruction' }
    });
  }
]).controller('DORISSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.DORIS.DORISSetupInstructionCtrl');
  }
]);