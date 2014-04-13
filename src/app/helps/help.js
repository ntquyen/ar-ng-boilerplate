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
angular.module('contactIntegration.help', ['ui.router', 'topic', 'ngSanitize', 'underscore', 'appConfig'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    console.log('contactIntegration.help.config()');
    $stateProvider.state('help', {
        url: '/help',
        views: {
            "main": {
                controller: 'HelpCtrl',
                templateUrl: 'helps/help.tpl.html'
            }
        },
        data: {
            pageTitle: 'Help'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('HelpCtrl', function($scope, $state, $sce, topicApi, _, appConfig) {
    console.log('contactIntegration.help.HelpCtrl');
    // back to previous state
    if (!appConfig.agencyLocation) {
        $state.transitionTo('apiInfo');
        return;
    }
    // back to previous state
    $scope.goBack = function() {
        $state.transitionTo('dashboard');
    };
    $scope.loading = true;
    $scope.topics = [];
    // find all related topics
    topicApi.find(appConfig.agencyLocation.exportType).success(function(data) {
        $scope.loading = false;
        if (data.error) {
            $scope.error = data.error;
        } else {
            $scope.topics = data.results;
        }
    }).error(function(err) {
        $scope.error = error;
        $scope.loading = false;
    });
    // get topic detail
    $scope.getTopicDetail = function(topic) {
        if (topic.detail) {
            $scope.selectedTopic = topic;
            return;
        }
        topic.loading = true;
        topicApi.get(topic.id).success(function(result) {
            topic.detail = result.topic;
            // fix relative URL
            if (topic.detail && topic.detail.body) {
                topic.detail.body = topic.detail.body.replace("/attachments/", "https://agencyrevolution.zendesk.com/attachments/");
            }
            topic.loading = false;
            $scope.selectedTopic = topic;
        }).error(function(err) {
            console.log(err);
            topic.loading = false;
            topic.error = err;
            $scope.selectedTopic = topic;
        });
    };
    // trust as Html
    $scope.trustAsHtml = function(html) {
        return $sce.trustAsHtml(html);
    };
});