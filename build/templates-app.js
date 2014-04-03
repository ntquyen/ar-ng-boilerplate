angular.module('templates-app', ['apiInfo/apiInfo.tpl.html', 'changeRequests/changeRequest.tpl.html', 'dashboard/dashboard.tpl.html', 'fileUploads/fileUpload.tpl.html', 'helps/help.tpl.html', 'setupInstructions/AMS360/AMS360.tpl.html', 'setupInstructions/DORIS/DORIS.tpl.html', 'setupInstructions/EbixASP/EbixASP.tpl.html', 'setupInstructions/Eclipse/Eclipse.tpl.html', 'setupInstructions/Epic/Epic.tpl.html', 'setupInstructions/FSC/FSC.tpl.html', 'setupInstructions/HawkSoft/HawkSoft.tpl.html', 'setupInstructions/HawkSoftDesktop/HawkSoftDesktop.tpl.html', 'setupInstructions/InStar/InStar.tpl.html', 'setupInstructions/PartnerXE/PartnerXE.tpl.html', 'setupInstructions/PowerBroker/PowerBroker.tpl.html', 'setupInstructions/QQCatalyst/QQCatalyst.tpl.html', 'setupInstructions/TAM/TAM.tpl.html', 'setupInstructions/Vision/Vision.tpl.html', 'setupInstructions/Xanatek/Xanatek.tpl.html', 'setupInstructions/setupInstruction.tpl.html', 'status/status.tpl.html']);

angular.module("apiInfo/apiInfo.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apiInfo/apiInfo.tpl.html",
    "<div class=\"panel panel-primary\">\n" +
    "	<div class=\"panel panel-heading\">Api Key Information</div>\n" +
    "	<div class=\"panel panel-body\">\n" +
    "		<div ng-if=\"loading.agencyLocation\">Loading Agency Locations...</div>\n" +
    "		<div ng-if=\"!loading.agencyLocation\">\n" +
    "			<div ng-if=\"!error\">\n" +
    "				<div ng-if=\"agencyLocations.length > 0\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<label>Please select a location</label>\n" +
    "						<select ng-options=\"agencyLocation.agencyLocationDesc for agencyLocation in agencyLocations\" \n" +
    "								ng-model=\"agencyLocation\" \n" +
    "								ng-change=\"changeAgencyLocation(agencyLocation)\"\n" +
    "								class=\"form-control\">\n" +
    "						</select>\n" +
    "					</div>\n" +
    "					<div ng-if=\"agencyLocation\">\n" +
    "						<!--\n" +
    "						<div class=\"panel panel-info\">\n" +
    "							<div class=\"panel-heading\">Agency Location Info</div>\n" +
    "							<div class=\"panel-body\">\n" +
    "								<div class=\"form-group\">\n" +
    "						    		<label>Agency Location Name</label>\n" +
    "						    		<pre ng-bind=\"agencyLocation.agencyLocationDesc\"></pre>\n" +
    "						  		</div>\n" +
    "								<div class=\"form-group\">\n" +
    "						    		<label>Agency Location Key</label>\n" +
    "						    		<pre ng-bind=\"agencyLocation.agencyLocationKey\"></pre>\n" +
    "						  		</div>\n" +
    "								<div class=\"form-group\">\n" +
    "						    		<label>MoonRay App Id</label>\n" +
    "						    		<pre ng-bind=\"agencyLocation.moonrayAppId\"></pre>\n" +
    "						  		</div>\n" +
    "								<div class=\"form-group\">\n" +
    "						    		<label>MoonRay Key</label>\n" +
    "						    		<pre ng-bind=\"agencyLocation.moonrayKey\"></pre>\n" +
    "						  		</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<hr>\n" +
    "						-->\n" +
    "						<div ng-if=\"loading.amsTypeLogTypeMap\">Loading AMS Type...</div>\n" +
    "						<div ng-if=\"!loading.amsTypeLogTypeMap\" class=\"form-group\">\n" +
    "							<label>Please confirm the export system</label>\n" +
    "							<select ng-options=\"amsType for amsType in agencyLocation.amsTypes\" \n" +
    "									ng-model=\"agencyLocation.exportType\"\n" +
    "									class=\"form-control\">\n" +
    "							</select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div ng-if=\"agencyLocation && agencyLocation.exportType\" class=\"btn btn-primary\" ng-click=\"selectAgencyLocation()\">Go</div>\n" +
    "				</div>\n" +
    "				<div ng-if=\"!agencyLocations.length\" class=\"alert alert-warning\">Sorry, you do not have any agency location for this portal. Please contact our team to create one.</div>\n" +
    "			</div>\n" +
    "			<div ng-show=\"error\" class=\"alert alert-danger\" ng-bind=\"error\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("changeRequests/changeRequest.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("changeRequests/changeRequest.tpl.html",
    "<div class=\"panel\">\n" +
    "  <div class=\"panel-body\">\n" +
    "\n" +
    "	  <ol class=\"breadcrumb\">\n" +
    "	    <li><a href=\"#\" class=\"active\" ng-click=\"goBack()\">Home</a></li>\n" +
    "	    <li><a href=\"#\" class=\"active\">Change Requests</a></li>\n" +
    "	  </ol>\n" +
    "\n" +
    "		<div class=\"panel panel-info\">\n" +
    "\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div ng-if=\"loadingChangeRequests\"><div class=\"spinner\"></div></div>\n" +
    "				<div ng-if=\"!loadingChangeRequests\">\n" +
    "					<div ng-if=\"!changeRequests.length\" class=\"alert alert-warning\">You don't have any open requests.</div>\n" +
    "					<div ng-if=\"changeRequests.length\">\n" +
    "						<ol>\n" +
    "							<li ng-repeat=\"changeRequest in changeRequests\">\n" +
    "								<a href=\"https://agencyrevolution.zendesk.com/agent/#/tickets/{{changeRequest.id}}\" title=\"changeRequest.subject\" target=\"_blank\">\n" +
    "									<span ng-bind=\"changeRequest.subject\"></span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "						</ol>\n" +
    "					</div>\n" +
    "					<div ng-if=\"changeRequestsError\" class=\"alert alert-danger\" ng-bind=\"changeRequestsError\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"panel panel-info\">\n" +
    "			<div class=\"panel-heading\">Submit a new change request</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div ng-if=\"submitting\">Your change request is being submitted to our system, please wait...</div>\n" +
    "				<div ng-if=\"!submitting\">\n" +
    "					<div class=\"form-horizontal\" role=\"form\" ng-if=\"!submitResponse.success\" >\n" +
    "						<div class=\"form-group\">\n" +
    "							<label class=\"control-label\">Requester</label>\n" +
    "							<pre>\n" +
    "								\"<span ng-bind=\"changeRequest.requester.name\"></span>\" &lt;<span ng-bind=\"changeRequest.requester.email\"></span>&gt;\n" +
    "							</pre>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\">\n" +
    "							<label class=\"control-label\">Subject</label>\n" +
    "							<input class=\"form-control\" type=\"text\" ng-model=\"changeRequest.subject\" placeholder=\"Your request subject\" />\n" +
    "						</div>\n" +
    "						<div class=\"form-group\">\n" +
    "							<label class=\"control-label\">Request Type</label>\n" +
    "							<select class=\"form-control\" ng-options=\"requestType for requestType in requestTypes\" ng-model=\"requestType\" ng-change=\"changeRequestType(requestType)\" />\n" +
    "						</div>\n" +
    "						<div class=\"form-group\" ng-repeat=\"question in changeRequest.questions\">\n" +
    "							<label class=\"control-label\" ng-bind=\"question.question\"></label>\n" +
    "							<textarea class=\"form-control\" rows=\"5\" ng-model=\"question.answer\"></textarea>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\">\n" +
    "							<label class=\"control-label\">Upload any related screenshots/attachments</label>\n" +
    "							<div>\n" +
    "								<input type=\"file\" ng-file-select=\"onFileSelect($files)\" />\n" +
    "								<div ng-if=\"dropSupported\" class=\"drop-box\" ng-file-drop=\"onFileSelect($files);\" ng-file-drop-available=\"dropSupported=true\">or drop files here</div>\n" +
    "								<div ng-if=\"!dropSupported\">HTML5 Drop File is not supported on this browser</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"form-group\" ng-if=\"uploadPercent > 0 && uploadPercent < 100\">\n" +
    "							<label class=\"control-label\"></label>\n" +
    "							<div class=\"progress\">\n" +
    "								<span class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"{{uploadPercent}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{uploadpercent}}%\">\n" +
    "									<span class=\"sr-only\"><span ng-bind=\"uploadPercent\"></span>% Complete (success)</span>\n" +
    "								</span>\n" +
    "							</div>\n" +
    "							<button class=\"btn btn-alert\" ng-click=\"upload.abort()\">Cancel Upload</button>\n" +
    "						</div>\n" +
    "						<hr>\n" +
    "						<div class=\"dnnPrimaryAction\" ng-click=\"submit()\">Submit</div>\n" +
    "					</div>\n" +
    "					<div ng-if=\"submitResponse.success\" class=\"alert alert-success\">\n" +
    "						<div>Congratulation! Your change request has been submitted successfully. We will get it completed as soon as possible.</div>\n" +
    "						<div>ZenDesk Change Request Reference: <strong ng-bind=\"submitResponse.ticket.id\"></strong></div>\n" +
    "						<br>\n" +
    "						<div class=\"dnnPrimaryAction\" ng-click=\"createNewChangeRequest()\">New Change Request</div>\n" +
    "					</div>\n" +
    "					<div ng-if=\"submitResponse.error\" class=\"alert alert-danger\" ng-bind=\"submitResponse.error\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<hr>\n" +
    "		<div class=\"btn btn-default\" ng-click=\"goBack()\">Back</div>\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<div class=\"panel\">\n" +
    "  <div class=\"panel-body\">\n" +
    "\n" +
    "  <ol class=\"breadcrumb\">\n" +
    "    <li><a href=\"#\" class=\"active\">Home</a></li>\n" +
    "  </ol>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-4\" ng-show=\"agencyLocation.integrationType == 'FileUpload'\">\n" +
    "          <div class=\"btn btn-primary btn-large\" ui-sref=\"fileUpload\"><span class=\"fa fa-cloud-upload\"></span> Upload <span ng-bind=\"agencyLocation.exportType\"></span> File</div>\n" +
    "          <div>\n" +
    "            Upload your <span ng-bind=\"agencyLocation.exportType\"></span> file. This should be done at least twice a week.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-4\" ng-show=\"agencyLocation.integrationType != 'FileUpload'\">\n" +
    "          <div class=\"btn btn-default btn-large\" ui-sref=\"setupInstruction\"><span class=\"glyphicon glyphicon-list-alt\"></span> Setup Instructions</div>\n" +
    "          <div>\n" +
    "            Don't worry. Following the instruction to set up the import.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\" ng-show=\"agencyLocation.integrationType == 'FileUpload'\">\n" +
    "          <div class=\"btn btn-default btn-large\" ui-sref=\"setupInstruction\"><span class=\"glyphicon glyphicon-list-alt\"></span> <span ng-bind=\"agencyLocation.exportType\"></span> Export Instructions</div>\n" +
    "          <div>\n" +
    "            Follow these directions to export your data from <span ng-bind=\"agencyLocation.exportType\"></span>.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <div class=\"btn btn-default btn-large\" ui-sref=\"help\"><span class=\"fa fa-question-circle\"></span> Help</div>\n" +
    "          <div>\n" +
    "            Find common questions and resolve your problem.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <div class=\"btn btn-default btn-large\" ui-sref=\"changeRequest\"><span class=\"fa fa-edit\"></span> Change Request</div>\n" +
    "          <div>\n" +
    "            Submit your change request here and we will update to the system for you as soon as possible.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <div class=\"btn btn-default btn-large\" ui-sref=\"status\"><span class=\"fa fa-dashboard\"></span> Status</div>\n" +
    "          <div>\n" +
    "            We provide you a tool to monitor the status of message queues.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <hr>\n" +
    "\n" +
    "    <div class=\"well well-lg\">\n" +
    "      Your working on <strong ng-bind=\"informationMask\" ng-click=\"toggleInformation()\"></strong>, your export system is <strong ng-bind=\"agencyLocation.exportType\"></strong>. If you want to change location, please click <a href ng-click=\"changeLocation()\">here</a>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "");
}]);

angular.module("fileUploads/fileUpload.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("fileUploads/fileUpload.tpl.html",
    "\n" +
    "<div class=\"panel\">\n" +
    "  <div class=\"panel-body\">\n" +
    "\n" +
    "  <ol class=\"breadcrumb\">\n" +
    "    <li><a ng-click=\"goBack()\" href=\"\">Home</a></li>\n" +
    "    <li><a href=\"#\" class=\"active\"><span ng-bind=\"agencyLocation.exportType\"></span> File Upload</a></li>\n" +
    "  </ol>\n" +
    "\n" +
    "    <div class=\"panel panel-primary\" ng-show=\"step >= 1\">\n" +
    "        <div class=\"panel-heading\">Step 1: Upload <span ng-bind=\"agencyLocation.exportType\"></span> File</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <p>Please select and upload the exported file. Unsure of <a href=\"\">how to export</a> this file?</p>\n" +
    "            <div>\n" +
    "                <input type=\"file\" ng-file-select=\"onFileSelect($files)\">\n" +
    "                <div ng-show=\"dropSupported\" class=\"drop-box well\" ng-file-drop=\"onFileSelect($files);\" ng-file-drop-available=\"dropSupported=true\">or drop files here</div>\n" +
    "                <div ng-show=\"!dropSupported\">HTML5 Drop File is not supported on this browser</div>\n" +
    "            </div>\n" +
    "            <div ng-show=\"step1.uploadPercent > 0 && step1.uploadPercent < 100\">\n" +
    "                <div class=\"progress\">\n" +
    "                    <span class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"{{step1.uploadPercent}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{step1.uploadpercent}}%\">\n" +
    "                        <span class=\"sr-only\"><span ng-bind=\"step1.uploadPercent\"></span>% Complete (success)</span>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <button class=\"btn btn-alert\" ng-click=\"upload.abort()\">Cancel Upload</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel panel-primary\" ng-show=\"step >= 2\">\n" +
    "        <div class=\"panel-heading\">Step 2: Verify and Import</div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <p>Are you ready?</p>\n" +
    "            <div class=\"btn btn-success\" ng-click=\"import()\">\n" +
    "                <span ng-show=\"step2.processing\">We are processing. Please wait...</span>\n" +
    "                <span ng-hide=\"step2.processing\">GO</span>\n" +
    "            </div>\n" +
    "            \n" +
    "            <div ng-show=\"responseData && responseData.message\">\n" +
    "                \n" +
    "                <div class=\"panel panel-warning\" ng-show=\"responseData.message.warnings.length\">\n" +
    "                    <div class=\"panel-heading\">Warning</div>\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div ng-repeat=\"warning in responseData.message.warnings\" class=\"dnnFormMessage dnnFormWarning\">\n" +
    "                            <span ng-bind=\"warning\"></span>\n" +
    "                        </div>        \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"panel panel-info\" ng-show=\"responseData.message.infos.length\">\n" +
    "                    <div class=\"panel-heading\">Info</div>\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div ng-repeat=\"info in responseData.message.infos\" class=\"dnnFormMessage dnnFormInfo\">\n" +
    "                            <span ng-bind=\"info\"></span>\n" +
    "                        </div>  \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"panel panel-danger\">\n" +
    "                    <div class=\"panel-heading\">Error</div>\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div ng-repeat=\"error in responseData.message.errors\" class=\"dnnFormMessage dnnFormValidationSummary\">\n" +
    "                            <span ng-bind=\"error\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-show=\"responseData.success\" class=\"dnnFormMessage dnnFormSuccess\">Congrats!</div>\n" +
    "\n" +
    "        </div>    \n" +
    "    </div>\n" +
    "\n" +
    "    <hr>\n" +
    "    <div class=\"btn btn-default\" ng-click=\"goBack()\">Back</div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("helps/help.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("helps/help.tpl.html",
    "\n" +
    "<div class=\"panel\">\n" +
    "  <div class=\"panel-body\">\n" +
    "  	<ol class=\"breadcrumb\">\n" +
    "      <li><a ng-click=\"goBack()\" href=\"\">Home</a></li>\n" +
    "      <li><a href=\"#\" class=\"active\">Help</a></li>\n" +
    "    </ol>\n" +
    "\n" +
    "  	<h1>Help</h1>\n" +
    "		<div class=\"panel panel-info\" ng-hide=\"error\">\n" +
    "			<div class=\"panel-heading\">FAQ</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div ng-if=\"loading\">Please wait...</div>\n" +
    "				<ol ng-if=\"!loading\">\n" +
    "					<li ng-repeat=\"topic in topics\">\n" +
    "						<a href=\"\" ng-click=\"getTopicDetail(topic)\">\n" +
    "							<span ng-bind=\"topic.title\"></span>\n" +
    "						</a>\n" +
    "						<div ng-show=\"topic.loading\">Loading detailed information....</div>\n" +
    "						<div ng-hide=\"topic.loading\">\n" +
    "							<div ng-show=\"!topic.error && topic.detail\" class=\"alert alert-info\">\n" +
    "								<p ng-bind-html=\"trustAsHtml(topic.detail.body)\"></p>\n" +
    "								<hr>\n" +
    "								<a href=\"https://agencyrevolution.zendesk.com/entries/{{topic.id}}\" title=\"Read more\" target=\"_blank\">Read more</a>\n" +
    "							</div>\n" +
    "							<div ng-show=\"topic.error\" class=\"alert alert-danger\" ng-bind=\"topic.error\"></div>\n" +
    "						</div>\n" +
    "					</li>\n" +
    "				</ol>\n" +
    "				<div ng-show=\"error\" class=\"alert alert-danger\" ng-bind=\"error\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<hr>\n" +
    "		<div class=\"btn btn-default\" ng-click=\"goBack()\">Back</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("setupInstructions/AMS360/AMS360.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/AMS360/AMS360.tpl.html",
    "<h2>AMS360 Instruction</h2>");
}]);

angular.module("setupInstructions/DORIS/DORIS.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/DORIS/DORIS.tpl.html",
    "<h2>DORIS Instruction</h2>");
}]);

angular.module("setupInstructions/EbixASP/EbixASP.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/EbixASP/EbixASP.tpl.html",
    "<h2>EbixASP Instruction</h2>");
}]);

angular.module("setupInstructions/Eclipse/Eclipse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/Eclipse/Eclipse.tpl.html",
    "<h2>Eclipse Instruction</h2>");
}]);

angular.module("setupInstructions/Epic/Epic.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/Epic/Epic.tpl.html",
    "<h2>Epic Instruction</h2>");
}]);

angular.module("setupInstructions/FSC/FSC.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/FSC/FSC.tpl.html",
    "<h2>FSC Instruction</h2>");
}]);

angular.module("setupInstructions/HawkSoft/HawkSoft.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/HawkSoft/HawkSoft.tpl.html",
    "<h2>HawkSoft Instruction</h2>");
}]);

angular.module("setupInstructions/HawkSoftDesktop/HawkSoftDesktop.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/HawkSoftDesktop/HawkSoftDesktop.tpl.html",
    "<h2>HawkSoftDesktop instruction</h2>");
}]);

angular.module("setupInstructions/InStar/InStar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/InStar/InStar.tpl.html",
    "<h2>InStar Instruction</h2>");
}]);

angular.module("setupInstructions/PartnerXE/PartnerXE.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/PartnerXE/PartnerXE.tpl.html",
    "<h2>PartnerXE Instruction</h2>");
}]);

angular.module("setupInstructions/PowerBroker/PowerBroker.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/PowerBroker/PowerBroker.tpl.html",
    "<h2>PowerBroker Instruction</h2>");
}]);

angular.module("setupInstructions/QQCatalyst/QQCatalyst.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/QQCatalyst/QQCatalyst.tpl.html",
    "<h2>QQCatalyst Instruction</h2>");
}]);

angular.module("setupInstructions/TAM/TAM.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/TAM/TAM.tpl.html",
    "<ol class=\"breadcrumb\">\n" +
    "    <li>\n" +
    "        <a ng-click=\"goBack()\" href=\"\">Home</a>\n" +
    "    </li>\n" +
    "    <li class=\"active\">\n" +
    "        TAM Export Instructions\n" +
    "    </li>\n" +
    "</ol>\n" +
    "\n" +
    "<tabset>\n" +
    "  <tab heading=\"Setup\">\n" +
    "    <h2>\n" +
    "        TAM File Export Instructions\n" +
    "    </h2>\n" +
    "    <p>\n" +
    "        These directions are necessary for the setup, but don't need to be repeated each time the report is generated. After building the custom report, all you'll need to do is export the report and upload the file.\n" +
    "    </p>\n" +
    "    <h3>\n" +
    "        Preliminary TAM Setup - Avoiding Common Problems\n" +
    "    </h3>\n" +
    "    <p>\n" +
    "        To help you get the \"cleanest\" and most useful customer list from TAM, there is one very helpful thing you can do...\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        The most common problem with importing data from TAM is the names that show up in the Engine.&nbsp; In TAM, names can be stored in more than one location, in more than one format, and this can create complications when importing your customers to the Engine.&nbsp; So, to help avoid these problems, please make sure your data is as \"clean\" as possible with respect to names.\n" +
    "    </p>\n" +
    "    <h4>\n" +
    "        3 Tips:\n" +
    "    </h4>\n" +
    "    <ol>\n" +
    "        <li>The Revolution Engine uses \"First Name\", \"Last Name\" and \"Company\" fields so you can more accurately customize your marketing.\n" +
    "        </li>\n" +
    "        <li>In the Customer section of TAM is a generic \"Name\" field. &nbsp;This field is not very reliable since it sometimes contains a company name (for commercial lines clients) and sometimes contains the name of an individual, or even multiple individuals (for personal lines clients).\n" +
    "        </li>\n" +
    "        <li>In the Contacts section of TAM there are more specific \"first name\", \"last name\" and \"company\" fields. &nbsp;Since these perfectly match the fields that are used in the Revolution Engine, they are the absolute best way to ensure high quality data in the Revolution Engine, so that you can customize your marketing as effectively as possible.\n" +
    "        </li>\n" +
    "    </ol>\n" +
    "    <h4>\n" +
    "        What if I don't have contact in TAM for all of my customers?\n" +
    "    </h4>\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            <strong>The best solution</strong> is to \"clean up\" your TAM listings before running your first import. &nbsp;Go through every customer record in TAM and make sure each one has at least one Contact associated with it, and that at least one (and only one) contact per customer is marked in TAM as the \"Primary Contact\". &nbsp;Also, make sure each contact has accurate data in the First Name, Last Name and Company fields, as well as the other contact fields like email, phone, etc. (make sure the email listed for a contact belongs to that  individual and isn't their wife or husband's email, etc.)\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <span>If you absolutely don't have the time or manpower right now to take the step above, you can still import data from TAM's Customer section instead. &nbsp;<strong>However, please be aware</strong> that it will not be as \"clean\" and you may not be able to customize your marketing in certain ways (For example, without a consistent first name, you cannot address your messages \"Dear [First Name],\")</span>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <h3>\n" +
    "        Creating a saved report\n" +
    "    </h3>\n" +
    "    <p>\n" +
    "        <em><em>In this step you will be creating and saving a user-defined report. This will allow you to run the report more quickly on an ongoing basis.</em><br></em>\n" +
    "    </p>\n" +
    "    <ol>\n" +
    "        <li>In TAM, click \"Reports\" on the left sidebar\n" +
    "        </li>\n" +
    "        <li>From the TAM Reports screen, click \"Search\"\n" +
    "        </li>\n" +
    "        <li>Select the \"Report Selection\" tab.\n" +
    "            <ul>\n" +
    "                <li>In the \"Report Type\" box select \"Customer\"\n" +
    "                </li>\n" +
    "                <li>In the \"Report Choices\" box select \"Policies - Current\n" +
    "                </li>\n" +
    "                <li>For output type, select \"User-Defined\"\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "        <li>Select the \"Criteria\" tab\n" +
    "            <ul>\n" +
    "                <li>Set each criteria to \"All\" (if any criteria does not say all, simply double-click it and clear all special criteria from the selection box on the right side, then save changes and it should reset that criteria to \"all\" by default.\n" +
    "                </li>\n" +
    "                <li>Set Record Listings to \"List Each Time Found\"\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "        <li>Select the \"Description\" tab\n" +
    "            <ul>\n" +
    "                <li>Either leave the description blank or enter a description if you want one (like \"Customer Export Report for Revolution Engine\")\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "        <li>Select the \"Fields/Sort\" tab\n" +
    "            <ul>\n" +
    "                <li>a. If there are already items in the field selection area (the box on the right side) clear them all out\n" +
    "                </li>\n" +
    "                <li>b. Select the fields listed below. This is done by clicking a field in the box on the left side, then clicking the \"Select\" button to pull it over into the selection box on the right.\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <p>\n" +
    "                <strong>-<em>Policy Data</em></strong>\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                -Customer/Pol_Idx<br>\n" +
    "                -Policy Type<br>\n" +
    "                -Policy Status<br>\n" +
    "                -Department<br>\n" +
    "                -Line of Business<br>\n" +
    "                -Policy Effective Date<br>\n" +
    "                -Policy Expiration Date<br>\n" +
    "                -Policy Customer Service Rep (or CSR)<br>\n" +
    "                -Carrier<br>\n" +
    "                -Premium<br>\n" +
    "                -\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                <em><strong>-Customer Data</strong></em>\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                -Customer Number<br>\n" +
    "                -Customer Code<br>\n" +
    "                -Customer Name<br>\n" +
    "                -Customer Attention<br>\n" +
    "                -Customer Street<br>\n" +
    "                -Customer City<br>\n" +
    "                -Customer State<br>\n" +
    "                -Customer Zip Code<br>\n" +
    "                -Phone - Business<br>\n" +
    "                -Phone - Residence<br>\n" +
    "                -Phone - Fax<br>\n" +
    "                -Email Address<br>\n" +
    "                -Customer Heading<br>\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                <em><strong>-Contact Info</strong></em>\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                -Contact Full Name<br>\n" +
    "                -Contact First Name<br>\n" +
    "                -Contact Last Name<br>\n" +
    "                -Contact Company<br>\n" +
    "                -Contact Street<br>\n" +
    "                -Contact City<br>\n" +
    "                -Contact State<br>\n" +
    "                -Contact Zip Code<br>\n" +
    "                -Primary Phone Type<br>\n" +
    "                -Primary Phone<br>\n" +
    "                -Primary Email Type<br>\n" +
    "                -Primary Email Address<br>\n" +
    "                -Method of Contact<br>\n" +
    "                -Contact Indicator<br>\n" +
    "                -Birth Date<br>\n" +
    "                -Relationship to Client\n" +
    "            </p>\n" +
    "        </li>\n" +
    "        <li>Click \"Run\" (upper-left corner)\n" +
    "        </li>\n" +
    "        <li>When prompted, name the report \"Agency Revolution Customer Export\" and continue\n" +
    "        </li>\n" +
    "    </ol>\n" +
    "  </tab>\n" +
    "  <tab heading=\"Export\">\n" +
    "\n" +
    "  </tab>\n" +
    "</tabset>\n" +
    "\n" +
    "");
}]);

angular.module("setupInstructions/Vision/Vision.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/Vision/Vision.tpl.html",
    "<h2>Vision Instruction</h2>");
}]);

angular.module("setupInstructions/Xanatek/Xanatek.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/Xanatek/Xanatek.tpl.html",
    "<h2>Xanatek Instruction</h2>");
}]);

angular.module("setupInstructions/setupInstruction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("setupInstructions/setupInstruction.tpl.html",
    "<div class=\"panel\">\n" +
    "  <div class=\"panel-body\">\n" +
    "    <div class=\"alert alert-warning\" ng-bind=\"error\" ng-show=\"error\"></div>\n" +
    "\n" +
    "    <div ui-view=\"main\"></div>\n" +
    "\n" +
    "    <hr>\n" +
    "    <div class=\"btn btn-default\" ng-click=\"goBack()\">Back</div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("status/status.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("status/status.tpl.html",
    "<div class=\"panel\">\n" +
    "  <div class=\"panel-body\">\n" +
    "\n" +
    "	  <ol class=\"breadcrumb\">\n" +
    "	    <li><a href=\"#\" class=\"active\" ng-click=\"goBack()\">Home</a></li>\n" +
    "	    <li><a href=\"#\" class=\"active\">Status</a></li>\n" +
    "	  </ol>\n" +
    "\n" +
    "\n" +
    "		<div ng-show=\"error\" ng-bind=\"error\" class=\"alert alert-danger\"></div>\n" +
    "		<div class=\"panel panel-info\">\n" +
    "			<div class=\"panel-heading\">Status</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				<hr>\n" +
    "				<h3>Last sync</h3>\n" +
    "				<div ng-if=\"loading\">Please wait...</div>\n" +
    "				<div ng-if=\"!loading\" class=\"row\">\n" +
    "					<div class=\"col-md-4\">\n" +
    "						<div class=\"panel\" ng-class=\"{'panel-success': status.enabled, 'panel-danger': !status.enabled}\">\n" +
    "							<div class=\"panel-heading text-align-center\">\n" +
    "								<h1 ng-show=\"status.enabled\">YES</h1>\n" +
    "								<h1 ng-hide=\"status.enabled\">NO</h1>\n" +
    "							</div>\n" +
    "							<div class=\"panel-body text-align-center\">\n" +
    "								<h4>Enabled</h4>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-4\">\n" +
    "						<div class=\"panel panel-info\">\n" +
    "							<div class=\"panel-heading text-align-center\">\n" +
    "								<h1 ng-bind=\"status.lastSyncActivity\" ng-show=\"status.lastSyncActivity\"></h1>\n" +
    "								<h1 ng-hide=\"status.lastSyncActivity\">_ _</h1>\n" +
    "							</div>\n" +
    "							<div class=\"panel-body text-align-center\">\n" +
    "								<h4>Minutes</h4>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-4\">\n" +
    "						<div class=\"panel\" ng-class=\"{'panel-success': status.triggerPointsEnabled, 'panel-danger': !status.triggerPointsEnabled}\">\n" +
    "							<div class=\"panel-heading text-align-center\">\n" +
    "								<h1 ng-show=\"status.triggerPointsEnabled\">YES</h1>\n" +
    "								<h1 ng-hide=\"status.triggerPointsEnabled\">NO</h1>\n" +
    "							</div>\n" +
    "							<div class=\"panel-body text-align-center\">\n" +
    "								<h4>Trigger Point</h4>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<h3>Messages in 7 days</h3>\n" +
    "				<div ng-if=\"loading\">Please wait...</div>\n" +
    "				<div ng-if=\"!loading\" class=\"row\">\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"panel panel-info\">\n" +
    "							<div class=\"panel-heading text-align-center\">\n" +
    "								<h1 ng-bind=\"status.messages7DaysCount\" style=\"align: center;\"></h1>\n" +
    "							</div>\n" +
    "							<div class=\"panel-body text-align-center\">\n" +
    "								<h4>Message<span ng-show=\"status.messages7DaysCount > 0\">s</span></h4>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"panel panel-warning\">\n" +
    "							<div class=\"panel-heading text-align-center\">\n" +
    "								<h1 ng-bind=\"status.warnings7DaysCount\"></h1>\n" +
    "							</div>\n" +
    "							<div class=\"panel-body text-align-center\">\n" +
    "								<h4>Warning<span ng-show=\"status.warnings7DaysCount > 0\">s</span></h4>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"panel panel-danger\">\n" +
    "							<div class=\"panel-heading text-align-center\">\n" +
    "								<h1 ng-bind=\"status.errors7DaysCount\"></h1>\n" +
    "							</div>\n" +
    "							<div class=\"panel-body text-align-center\">\n" +
    "								<h4>Error<span ng-show=\"status.errors7DaysCount > 0\">s</span></h4>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"panel panel-info\">\n" +
    "							<div class=\"panel-heading text-align-center\">\n" +
    "								<h1 ng-bind=\"status.triggerPointsFired7DaysCount\"></h1>\n" +
    "							</div>\n" +
    "							<div class=\"panel-body text-align-center\">\n" +
    "								<h4>Trigger Point<span ng-show=\"status.triggerPointsFired7DaysCount > 0\">s</span></h4>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<hr>\n" +
    "		<div class=\"btn btn-default\" ng-click=\"goBack()\">Back</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>");
}]);
