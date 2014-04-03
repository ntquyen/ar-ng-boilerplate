angular.module('contactIntegration.setupInstruction.TAM', [
  'ui.router',
  'ui.bootstrap'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.TAM.config()');
    $stateProvider.state('setupInstruction.TAM', {
      url: '/TAM',
      views: {
        'main': {
          controller: 'TAMSetupInstructionCtrl',
          templateUrl: 'setupInstructions/TAM/TAM.tpl.html'
        }
      },
      data: { pageTitle: 'TAM Setup Instruction' }
    });
  }
]).controller('TAMSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    $scope.navType = 'pills';
    console.log('contactIntegration.setupInstruction.TAM.TAMSetupInstructionCtrl');
  }
]);