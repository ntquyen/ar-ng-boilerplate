angular.module('contactIntegration.setupInstruction.FSC', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.FSC.config()');
    $stateProvider.state('setupInstruction.FSC', {
      url: '/FSC',
      views: {
        'main': {
          controller: 'FSCSetupInstructionCtrl',
          templateUrl: 'setupInstructions/FSC/FSC.tpl.html'
        }
      },
      data: { pageTitle: 'FSC Setup Instruction' }
    });
  }
]).controller('FSCSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.FSC.FSCSetupInstructionCtrl');
  }
]);