angular.module('contactIntegration.setupInstruction.HawkSoftDesktop', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.HawkSoftDesktop.config()');
    $stateProvider.state('setupInstruction.HawkSoftDesktop', {
      url: '/HawkSoftDesktop',
      views: {
        'main': {
          controller: 'HawkSoftDesktopSetupInstructionCtrl',
          templateUrl: 'setupInstructions/HawkSoftDesktop/HawkSoftDesktop.tpl.html'
        }
      },
      data: { pageTitle: 'HawkSoftDesktop Setup Instruction' }
    });
  }
]).controller('HawkSoftDesktopSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.HawkSoftDesktop.HawkSoftDesktopSetupInstructionCtrl');
  }
]);