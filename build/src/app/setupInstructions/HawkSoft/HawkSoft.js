angular.module('contactIntegration.setupInstruction.HawkSoft', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.HawkSoft.config()');
    $stateProvider.state('setupInstruction.HawkSoft', {
      url: '/HawkSoft',
      views: {
        'main': {
          controller: 'HawkSoftSetupInstructionCtrl',
          templateUrl: 'setupInstructions/HawkSoft/HawkSoft.tpl.html'
        }
      },
      data: { pageTitle: 'HawkSoft Setup Instruction' }
    });
  }
]).controller('HawkSoftSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.HawkSoft.HawkSoftSetupInstructionCtrl');
  }
]);