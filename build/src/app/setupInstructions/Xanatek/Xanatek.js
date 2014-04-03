angular.module('contactIntegration.setupInstruction.Xanatek', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.Xanatek.config()');
    $stateProvider.state('setupInstruction.Xanatek', {
      url: '/Xanatek',
      views: {
        'main': {
          controller: 'XanatekSetupInstructionCtrl',
          templateUrl: 'setupInstructions/Xanatek/Xanatek.tpl.html'
        }
      },
      data: { pageTitle: 'Xanatek Setup Instruction' }
    });
  }
]).controller('XanatekSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.Xanatek.XanatekSetupInstructionCtrl');
  }
]);