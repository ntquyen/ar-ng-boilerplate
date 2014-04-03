angular.module('contactIntegration.setupInstruction', [
  'ui.router',
  'contactIntegration.setupInstruction.AMS360',
  'contactIntegration.setupInstruction.DORIS',
  'contactIntegration.setupInstruction.Eclipse',
  'contactIntegration.setupInstruction.FSC',
  'contactIntegration.setupInstruction.HawkSoft',
  'contactIntegration.setupInstruction.HawkSoftDesktop',
  'contactIntegration.setupInstruction.InStar',
  'contactIntegration.setupInstruction.PartnerXE',
  'contactIntegration.setupInstruction.PowerBroker',
  'contactIntegration.setupInstruction.TAM',
  'contactIntegration.setupInstruction.Vision',
  'contactIntegration.setupInstruction.Xanatek',
  'contactIntegration.setupInstruction.EbixASP',
  'contactIntegration.setupInstruction.Epic',
  'contactIntegration.setupInstruction.QQCatalyst'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.config()');
    $stateProvider.state('setupInstruction', {
      url: '/setupInstruction',
      views: {
        'main': {
          controller: 'SetupInstructionCtrl',
          templateUrl: 'setupInstructions/setupInstruction.tpl.html'
        }
      },
      data: { pageTitle: 'Setup Instruction' }
    });
  }
]).controller('SetupInstructionCtrl', [
  '$scope',
  '$state',
  function ($scope, $state) {
    console.log('contactIntegration.setupInstruction.SetupInstructionCtrl');
    if (!App.agencyLocation) {
      $state.transitionTo('apiInfo');
      return;
    }
    $scope.goBack = function () {
      $state.transitionTo('dashboard');
    };
    if (App.agencyLocation.exportType === 'AMS360') {
      $state.transitionTo('setupInstruction.AMS360');
    } else if (App.agencyLocation.exportType === 'DORIS') {
      $state.transitionTo('setupInstruction.DORIS');
    } else if (App.agencyLocation.exportType === 'EbixASP') {
      $state.transitionTo('setupInstruction.EbixASP');
    } else if (App.agencyLocation.exportType === 'Eclipse') {
      $state.transitionTo('setupInstruction.Eclipse');
    } else if (App.agencyLocation.exportType === 'Epic') {
      $state.transitionTo('setupInstruction.Epic');
    } else if (App.agencyLocation.exportType === 'FSC') {
      $state.transitionTo('setupInstruction.FSC');
    } else if (App.agencyLocation.exportType === 'HawkSoft') {
      $state.transitionTo('setupInstruction.HawkSoft');
    } else if (App.agencyLocation.exportType === 'HawkSoftDesktop') {
      $state.transitionTo('setupInstruction.HawkSoftDesktop');
    } else if (App.agencyLocation.exportType === 'InStar') {
      $state.transitionTo('setupInstruction.InStar');
    } else if (App.agencyLocation.exportType === 'PartnerXE') {
      $state.transitionTo('setupInstruction.PartnerXE');
    } else if (App.agencyLocation.exportType === 'PowerBroker') {
      $state.transitionTo('setupInstruction.PowerBroker');
    } else if (App.agencyLocation.exportType === 'TAM') {
      $state.transitionTo('setupInstruction.TAM');
    } else if (App.agencyLocation.exportType === 'Vision') {
      $state.transitionTo('setupInstruction.Vision');
    } else if (App.agencyLocation.exportType === 'Xanatek') {
      $state.transitionTo('setupInstruction.Xanatek');
    } else {
      $scope.error = 'Sorry, your system has not supported yet! Please contact our team to get it supported soon!';
    }
  }
]);