angular.module('contactIntegration.setupInstruction.PartnerXE', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.PartnerXE.config()');
    $stateProvider.state('setupInstruction.PartnerXE', {
      url: '/PartnerXE',
      views: {
        'main': {
          controller: 'PartnerXESetupInstructionCtrl',
          templateUrl: 'setupInstructions/PartnerXE/PartnerXE.tpl.html'
        }
      },
      data: { pageTitle: 'PartnerXE Setup Instruction' }
    });
  }
]).controller('PartnerXESetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.PartnerXE.PartnerXESetupInstructionCtrl');
  }
]);