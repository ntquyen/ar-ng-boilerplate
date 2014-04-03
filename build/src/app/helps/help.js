angular.module('contactIntegration.help', [
  'ui.router',
  'topic',
  'ngSanitize'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    console.log('contactIntegration.help.config()');
    $stateProvider.state('help', {
      url: '/help',
      views: {
        'main': {
          controller: 'HelpCtrl',
          templateUrl: 'helps/help.tpl.html'
        }
      },
      data: { pageTitle: 'Help' }
    });
  }
]).controller('HelpCtrl', [
  '$scope',
  '$state',
  '$sce',
  'topicApi',
  function ($scope, $state, $sce, topicApi) {
    console.log('contactIntegration.help.HelpCtrl');
    if (!App.agencyLocation) {
      $state.transitionTo('apiInfo');
      return;
    }
    $scope.goBack = function () {
      $state.transitionTo('dashboard');
    };
    $scope.loading = true;
    $scope.topics = [];
    topicApi.find(App.agencyLocation.exportType).success(function (data) {
      $scope.loading = false;
      if (data.error) {
        $scope.error = data.error;
      } else {
        $scope.topics = data.results;
      }
    }).error(function (err) {
      $scope.error = error;
      $scope.loading = false;
    });
    $scope.getTopicDetail = function (topic) {
      if (topic.detail) {
        return;
      }
      topic.loading = true;
      topicApi.get(topic.id).success(function (result) {
        topic.detail = result.topic;
        if (topic.detail && topic.detail.body) {
          topic.detail.body = topic.detail.body.replace('/attachments/', 'https://agencyrevolution.zendesk.com/attachments/');
        }
        topic.loading = false;
      }).error(function (err) {
        console.log(err);
        topic.loading = false;
        topic.error = err;
      });
    };
    $scope.trustAsHtml = function (html) {
      return $sce.trustAsHtml(html);
    };
  }
]);