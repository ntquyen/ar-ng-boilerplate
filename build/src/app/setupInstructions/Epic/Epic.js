angular.module('contactIntegration.setupInstruction.Epic', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.Epic.config()');
    $stateProvider.state('setupInstruction.Epic', {
      url: '/Epic',
      views: {
        'main': {
          controller: 'EpicSetupInstructionCtrl',
          templateUrl: 'setupInstructions/Epic/Epic.tpl.html'
        }
      },
      data: { pageTitle: 'Epic Setup Instruction' }
    });
  }
]).controller('EpicSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.Epic.EpicSetupInstructionCtrl');
  }
]);