angular.module('contactIntegration.setupInstruction.QQCatalyst', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.QQCatalyst.config()');
    $stateProvider.state('setupInstruction.QQCatalyst', {
      url: '/QQCatalyst',
      views: {
        'main': {
          controller: 'QQCatalystSetupInstructionCtrl',
          templateUrl: 'setupInstructions/QQCatalyst/QQCatalyst.tpl.html'
        }
      },
      data: { pageTitle: 'QQCatalyst Setup Instruction' }
    });
  }
]).controller('QQCatalystSetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.QQCatalyst.QQCatalystSetupInstructionCtrl');
  }
]);