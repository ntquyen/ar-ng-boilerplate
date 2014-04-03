angular.module('contactIntegration.setupInstruction.AMS360', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.AMS360.config()');
    $stateProvider.state('setupInstruction.AMS360', {
      url: '/AMS360',
      views: {
        'main': {
          controller: 'AMS360SetupInstructionCtrl',
          templateUrl: 'setupInstructions/AMS360/AMS360.tpl.html'
        }
      },
      data: { pageTitle: 'AMS360 Setup Instruction' }
    });
  }
]).controller('AMS360SetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.AMS360.AMS360SetupInstructionCtrl');
  }
]);