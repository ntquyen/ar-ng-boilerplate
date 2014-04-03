angular.module('contactIntegration.setupInstruction.Eclipse', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.Eclipse.config()');
    $stateProvider.state('setupInstruction.Eclipse', {
      url: '/Eclipse',
      views: {
        'main': {
          controller: 'EclipseSetupInstructionCtrl',
          templateUrl: 'setupInstructions/Eclipse/Eclipse.tpl.html'
        }
      },
      data: { pageTitle: 'Eclipse Setup Instruction' }
    });
  }
]).controller('EclipseSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.Eclipse.EclipseSetupInstructionCtrl');
  }
]);