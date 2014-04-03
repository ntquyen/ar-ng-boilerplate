/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('contactIntegration.setupInstruction', ['ui.router', 'contactIntegration.setupInstruction.AMS360', 'contactIntegration.setupInstruction.DORIS', 'contactIntegration.setupInstruction.Eclipse', 'contactIntegration.setupInstruction.FSC', 'contactIntegration.setupInstruction.HawkSoft', 'contactIntegration.setupInstruction.HawkSoftDesktop', 'contactIntegration.setupInstruction.InStar', 'contactIntegration.setupInstruction.PartnerXE', 'contactIntegration.setupInstruction.PowerBroker', 'contactIntegration.setupInstruction.TAM', 'contactIntegration.setupInstruction.Vision', 'contactIntegration.setupInstruction.Xanatek', 'contactIntegration.setupInstruction.EbixASP', 'contactIntegration.setupInstruction.Epic', 'contactIntegration.setupInstruction.QQCatalyst'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.config()');
    $stateProvider.state('setupInstruction', {
        url: '/setupInstruction',
        views: {
            "main": {
                controller: 'SetupInstructionCtrl',
                templateUrl: 'setupInstructions/setupInstruction.tpl.html'
            }
        },
        data: {
            pageTitle: 'Setup Instruction'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('SetupInstructionCtrl', function($scope, $state) {
    console.log('contactIntegration.setupInstruction.SetupInstructionCtrl');
    // back to previous state
    if (!App.agencyLocation) {
        $state.transitionTo('apiInfo');
        return;
    }
    // back to previous state
    $scope.goBack = function() {
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
        $scope.error = "Sorry, your system has not supported yet! Please contact our team to get it supported soon!";
    }
});