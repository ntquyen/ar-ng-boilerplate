angular.module('contactIntegration.setupInstruction.InStar', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.InStar.config()');
    $stateProvider.state('setupInstruction.InStar', {
      url: '/InStar',
      views: {
        'main': {
          controller: 'InStarSetupInstructionCtrl',
          templateUrl: 'setupInstructions/InStar/InStar.tpl.html'
        }
      },
      data: { pageTitle: 'InStar Setup Instruction' }
    });
  }
]).controller('InStarSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.InStar.InStarSetupInstructionCtrl');
  }
]);