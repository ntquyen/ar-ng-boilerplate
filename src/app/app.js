angular.module('contactIntegration', ['templates-app', 'templates-common', 'contactIntegration.apiInfo', 'contactIntegration.dashboard', 'contactIntegration.fileUpload', 'contactIntegration.setupInstruction', 'contactIntegration.help', 'contactIntegration.changeRequest', 'contactIntegration.status', 'ui.router', 'ngRoute', 'appConfig']).config(function myAppConfig($stateProvider, $urlRouterProvider) {
    console.log('contactIntegration.config()');
    $urlRouterProvider.otherwise('apiInfo');
}).run(function run() {
    console.log('run()');
}).controller('AppCtrl', function AppCtrl($scope, $location, $http, appConfig) {
    // this will be rendered from DNN module view
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
    appConfig.userLoggedIn = App.userLoggedIn;
    appConfig.email = App.email;
    appConfig.name = App.name;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        // global variable for App
        appConfig.fromState = fromState;
        appConfig.toState = toState;
        appConfig.fromParams = fromParams;
        appConfig.toParams = toParams;
        console.log('appConfig', appConfig);
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | Contact Integration';
        }
    });
});