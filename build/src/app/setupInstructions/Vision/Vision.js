angular.module('contactIntegration.setupInstruction.Vision', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.Vision.config()');
    $stateProvider.state('setupInstruction.Vision', {
      url: '/Vision',
      views: {
        'main': {
          controller: 'VisionSetupInstructionCtrl',
          templateUrl: 'setupInstructions/Vision/Vision.tpl.html'
        }
      },
      data: { pageTitle: 'Vision Setup Instruction' }
    });
  }
]).controller('VisionSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.Vision.VisionSetupInstructionCtrl');
  }
]);