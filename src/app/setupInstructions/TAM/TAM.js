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
angular.module('contactIntegration.setupInstruction.TAM', ['ui.router', 'ui.bootstrap'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    console.log('contactIntegration.setupInstruction.TAM.config()');
    $stateProvider.state('setupInstruction.TAM', {
        url: '/TAM',
        views: {
            "main": {
                controller: 'TAMSetupInstructionCtrl',
                templateUrl: 'setupInstructions/TAM/TAM.tpl.html'
            }
        },
        data: {
            pageTitle: 'TAM Setup Instruction'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('TAMSetupInstructionCtrl', ['$scope','$state', function($scope, $state) {
    $scope.navType = 'pills';
    console.log('contactIntegration.setupInstruction.TAM.TAMSetupInstructionCtrl');
}]);