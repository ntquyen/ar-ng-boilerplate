angular.module('contactIntegration.setupInstruction.PowerBroker', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.PowerBroker.config()');
    $stateProvider.state('setupInstruction.PowerBroker', {
      url: '/PowerBroker',
      views: {
        'main': {
          controller: 'PowerBrokerSetupInstructionCtrl',
          templateUrl: 'setupInstructions/PowerBroker/PowerBroker.tpl.html'
        }
      },
      data: { pageTitle: 'PowerBroker Setup Instruction' }
    });
  }
]).controller('PowerBrokerSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.PowerBroker.PowerBrokerSetupInstructionCtrl');
  }
]);