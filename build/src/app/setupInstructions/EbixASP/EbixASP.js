angular.module('contactIntegration.setupInstruction.EbixASP', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.EbixASP.config()');
    $stateProvider.state('setupInstruction.EbixASP', {
      url: '/EbixASP',
      views: {
        'main': {
          controller: 'EbixASPSetupInstructionCtrl',
          templateUrl: 'setupInstructions/EbixASP/EbixASP.tpl.html'
        }
      },
      data: { pageTitle: 'EbixASP Setup Instruction' }
    });
  }
]).controller('EbixASPSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.EbixASP.EbixASPSetupInstructionCtrl');
  }
]);