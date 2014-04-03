angular.module('contactIntegration', ['templates-app', 'templates-common', 'contactIntegration.apiInfo', 'contactIntegration.dashboard', 'contactIntegration.fileUpload', 'contactIntegration.setupInstruction', 'contactIntegration.help', 'contactIntegration.changeRequest', 'contactIntegration.status', 'ui.router', 'ngRoute']).config(function myAppConfig($stateProvider, $urlRouterProvider) {
    console.log('contactIntegration.config()');
    $urlRouterProvider.otherwise('/apiInfo');
}).run(function run() {}).controller('AppCtrl', function AppCtrl($scope, $location, $http) {
    App = {
        userLoggedIn: 'host',
        email: 'host@change.me',
        name: 'SuperUser Account'
    };
    /*
        $http.defaults.headers.common = {
            "RequestVerificationToken": sf.getAntiForgeryValue()
        };
    */
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        // global variable for App
        App.fromState = fromState;
        App.toState = toState;
        App.fromParams = fromParams;
        App.toParams = toParams;
        console.log('App', App);
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | Contact Integration';
        }
    });
});