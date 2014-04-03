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
angular.module('contactIntegration.changeRequest', ['ui.router', 'angularFileUpload', 'changeRequest'])
/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    console.log('contactIntegration.changeRequest.config()');
    $stateProvider.state('changeRequest', {
        url: '/changeRequest',
        views: {
            "main": {
                controller: 'ChangeRequestCtrl',
                templateUrl: 'changeRequests/changeRequest.tpl.html'
            }
        },
        data: {
            pageTitle: 'Change Request'
        }
    });
})
/**
 * And of course we define a controller for our route.
 */
.controller('ChangeRequestCtrl', function($scope, $state, $upload, changeRequestApi) {
    console.log('contactIntegration.changeRequest.ChangeRequestCtrl');
    // back to previous state
    if (!App.agencyLocation) {
        $state.transitionTo('apiInfo');
        return;
    }
    // back to previous state
    $scope.goBack = function() {
        $state.transitionTo('dashboard');
    };
    $scope.categories = [{
        text: 'Data Integration',
        value: 'cat_data_integration'
    }];
    $scope.changeTypeSelected = false;
    $scope.bugType = "Bug";
    $scope.changeType = "New Feature/Modification";
    $scope.requestType = $scope.changeType;
    $scope.requestTypes = [$scope.bugType, $scope.changeType];
    $scope.bugQuestions = [{
        question: "What happened?",
        answer: ""
    }, {
        question: "What you are expecting to happen?",
        answer: ""
    }, {
        question: "Steps to reproduce?",
        answer: ""
    }, {
        question: "Example Contact Record to Research?",
        answer: ""
    }, {
        question: "Relevant Fields?",
        answer: ""
    }];
    $scope.changeQuestions = [{
        question: "What happens today?",
        answer: ""
    }, {
        question: "What would you like to happen?",
        answer: ""
    }, {
        question: "Why is this important?",
        answer: ""
    }];
    // change request type
    $scope.changeRequestType = function(requestType) {
        $scope.changeTypeSelected = true;
        $scope.requestType = requestType;
        $scope.changeRequest.questions = $scope.requestType == $scope.bugType ? $scope.bugQuestions : $scope.changeQuestions;
    };
    // create a new change request
    $scope.createNewChangeRequest = function() { 
        $scope.changeRequest = {
            requester: {
                name: App.name,
                email: App.email
            },
            type: $scope.requestType,
            subject: null,
            questions: $scope.requestType == $scope.bugType ? $scope.bugQuestions : $scope.changeQuestions,
            attachment: {}
        };
        $scope.submitting = false;
        $scope.submitResponse = {};
        $scope.uploadPercent = 0;
    };
    // file upload
    $scope.onFileSelect = function($files) {
        if (!$files.length) {
            return;
        }
        var file = $files[0];
        $scope.upload = $upload.upload({
            url: '/desktopModules/AgencyRevContactIntegrations/api/FileUploads/Upload',
            method: 'POST',
            data: {},
            file: file
        }).progress(function(evt) {
            $scope.uploadPercent = parseInt(100.0 * evt.loaded / evt.total, 10);
            console.log('percent: ' + $scope.uploadPercent);
        }).success(function(data, status, headers, config) {
            // file is uploaded successfully
            console.log(data);
            $scope.changeRequest.attachment.fileName = data.result.name;
            $scope.changeRequest.attachment.contentType = data.result.contentType;
        }).error(function(err) {
            $scope.attachmentError = err;
            console.log(err);
        });
        //}
    };
    // get all change requests raised by this user
    $scope.getChangeRequests = function() {
        $scope.changeRequestsError = null;
        $scope.loadingChangeRequests = true;
        changeRequestApi.getChangeRequests().success(function(changeRequests) {
            $scope.changeRequests = changeRequests;
            $scope.loadingChangeRequests = false;
        }).error(function(err) {
            console.log(err);
            $scope.changeRequestsError = err;
            $scope.loadingChangeRequests = false;
        });
    };
    // submit change request
    $scope.submit = function() {
        $scope.changeRequestsError = null;
        $scope.submitting = true;
        changeRequestApi.create($scope.changeRequest).success(function(data) {
            $scope.submitResponse.success = true;
            $scope.submitting = false;
            $scope.submitResponse.ticketReference = data.ticket.id;
            $scope.getChangeRequests();
        }).error(function(err) {
            console.log(err);
            $scope.submitting = false;
            $scope.submitResponse.error = err;
        });
    };
    $scope.getChangeRequests();
    $scope.createNewChangeRequest();
});