angular.module('topic', ['fakeApi']).factory('topicApi', [
  '$http',
  'fakeApiService',
  function ($http, fakeApiService) {
    var baseUrl = '/desktopmodules/AgencyRevContactIntegrations/API/Topics';
    return {
      find: function (amsType) {
        return fakeApiService.buildFakeResponse({
          'count': 5,
          'next_page': null,
          'prev_page': null,
          'results': [
            {
              'name': null,
              'title': 'Error Message: "Error Reading File"',
              'body': '<p>If you receive this message with the Applied TAM upload tool, follow these directions:</p>\r\n<p>The file must be a valid Excel 2003 or 2007 file.&nbsp; Furthermore, if the file has an XLSX extension (Excel 2007) the agent must have Excel 2007 installed on the computer that they have installed the import application.</p>\r\n<p>It is known that Applied has installed Office 2007 on some of their customer\'s installations. Therefore, you will need an Office 2007 version of Excel on the computer you are using in order to import the file.</p>',
              'description': null,
              'notes': null,
              'via': null,
              'priority': null,
              'topic_type': 'Articles',
              'submitter_id': 19230532,
              'updater_id': 19230532,
              'forum_id': 305287,
              'organization_id': null,
              'group_id': null,
              'custom_fields': null,
              'tags': [
                'applied',
                'tam',
                'error',
                'reading',
                'file'
              ],
              'attachments': [],
              'comments_count': 0,
              'created_at': '2010-12-16T23:21:03Z',
              'updated_at': '2010-12-16T23:21:03Z',
              'id': 361727,
              'result_type': 'topic',
              'url': 'https://agencyrevolution.zendesk.com/api/v2/topics/361727.json'
            },
            {
              'name': null,
              'title': 'Read "Do Not Market" information from TAM',
              'body': '<p>TAM tracks "Do Not Market." Would be useful if we fed this information into the Revolution Engine to stop emails.</p>\r\n<p>Using the same information to stop VidBiscuit will be more challenging.</p>',
              'description': null,
              'notes': null,
              'via': null,
              'priority': null,
              'topic_type': 'Ideas',
              'submitter_id': 19230532,
              'updater_id': 19230532,
              'forum_id': 376330,
              'organization_id': null,
              'group_id': null,
              'custom_fields': null,
              'tags': [
                'tam',
                'do_not_market'
              ],
              'attachments': [{
                  'id': 18950717,
                  'file_name': 'Lori-_APPLIED_SCREEN_SHOT.png',
                  'content_url': 'https://agencyrevolution.zendesk.com/attachments/token/1ywydknwhtw5gaa/?name=Lori-_APPLIED_SCREEN_SHOT.png',
                  'content_type': 'image/png',
                  'size': 127698,
                  'thumbnails': [{
                      'id': 18950718,
                      'file_name': 'Lori-_APPLIED_SCREEN_SHOT_thumb.png',
                      'content_url': 'https://agencyrevolution.zendesk.com/attachments/token/cxy7wmbony3eh9z/?name=Lori-_APPLIED_SCREEN_SHOT_thumb.png',
                      'content_type': 'image/png',
                      'size': 127698
                    }]
                }],
              'comments_count': 0,
              'created_at': '2011-03-15T15:58:29Z',
              'updated_at': '2011-12-01T17:51:31Z',
              'id': 487149,
              'result_type': 'topic',
              'url': 'https://agencyrevolution.zendesk.com/api/v2/topics/487149.json'
            },
            {
              'name': null,
              'title': 'Applied TAM: Gain complete control of your contacts names',
              'body': '<p>One common problem with Applied TAM is the names that show up in the Engine.&nbsp;</p>\r\n<p>In TAM, on the customer level there are a few name fields that are used to fill out the First Name, Last Name and Company field in the Engine. The fields that influence the name in TAM are Name (which could be full name, company name or partial of either), Attention (which is sometimes used for first name, sometimes used as a spillover field) and Heading.</p>\r\n<p>The issues with using TAM\'s customer level names fields are:</p>\r\n<ul>\r\n<li>There is no unique first name, last name or company field</li>\r\n<li>Those pieces of data are often stored in the generic "name" field</li>\r\n<li>That field is limited to 25 characters</li>\r\n</ul>\r\n<div><span style="line-height: normal;">So, be default, we parse the Name field. If it\'s a commercial account, we map it to the Company field. If it\'s a personal account, we guess at which parts of the field are a First Name and Last Name and put them in the corresponding fields in the Engine.</span></div>\r\n<div><span style="line-height: normal;"><br /></span></div>\r\n<div><span style="line-height: normal;">As a result of this, names are never perfect. It\'s impossible to perfectly parse the many variations of a full name into first name and last name. Additionally, in this scenario, if it\'s a commercial client there is now no first name and last name to read.</span></div>\r\n<div><span style="line-height: normal;"><br /></span></div>\r\n<h2><span style="line-height: normal;">But there is a solution!</span></h2>\r\n<p><span style="line-height: normal;">The solution is quite simple. In TAM, each customer has a "Contacts" screen. Add a corresponding First Name, Last Name, Company and Email to the Contacts screen. Indicate that the contact is the "Primary Contact." That\'s it. The next time you upload your data we will read this information.</span></p>',
              'description': null,
              'notes': null,
              'via': null,
              'priority': null,
              'topic_type': 'Articles',
              'submitter_id': 19230532,
              'updater_id': 19230532,
              'forum_id': 305287,
              'organization_id': null,
              'group_id': null,
              'custom_fields': null,
              'tags': ['tam'],
              'attachments': [],
              'comments_count': 0,
              'created_at': '2012-06-13T16:17:03Z',
              'updated_at': '2012-06-13T16:17:03Z',
              'id': 21541481,
              'result_type': 'topic',
              'url': 'https://agencyrevolution.zendesk.com/api/v2/topics/21541481.json'
            },
            {
              'name': null,
              'title': '2b) CREATING A SAVED REPORT (For Firefly Members WITHOUT Integration)',
              'body': '<p><em><strong>DISCLAIMER:</strong> These instructions are created by Agency Revolution for the sole purpose of making it easier for you to export contact records to the Revolution Engine.&nbsp; That being said, TAM is a 3rd party system created and managed by Applied Systems, and we are not responsible for any changes that may be made to TAM in the future.&nbsp; If our instructions are out-of-date, please let us know.&nbsp; If you have questions specifically about your TAM system, please contact your Applied Rep.</em></p>\r\n<p>&nbsp;</p>\r\n<h1>CREATING A SAVED REPORT (For Firefly Members Without Integration)</h1>\r\n<p><em><strong><span style="text-decoration: underline;">IMPORTANT</span>: These instructions apply ONLY to Firefly members who have NOT purchased integration.&nbsp; If you have integration, please click here for different instructions.</strong></em></p>\r\n<p><em><strong></strong><em>In this step you will be creating and saving a user-defined report.&nbsp; This will allow you to run the report more quickly on an ongoing basis.</em><br /></em></p>\r\n<p>1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In TAM, click \u201cReports\u201d on the left sidebar</p>\r\n<p>2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From the TAM Reports screen, click \u201cSearch\u201d</p>\r\n<p>3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Select the \u201cReport Selection\u201d tab.</p>\r\n<p style="padding-left: 30px;">a.&nbsp;&nbsp; In the "Report Type" box select \u201cCustomer\u201d</p>\r\n<p style="padding-left: 30px;">b.&nbsp;&nbsp; In the "Report Choices" box select \u201cPolicies \u2013 Current</p>\r\n<p style="padding-left: 30px;">c.&nbsp;&nbsp; For output type, select \u201cUser-Defined\u201d</p>\r\n<p>4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Select the \u201cCriteria\u201d tab</p>\r\n<p style="padding-left: 30px;">a.&nbsp;&nbsp; Set each criteria to \u201cAll\u201d (if any criteria does not say all, simply double-click it and clear all special criteria from the selection box on the right side, then save changes and it should reset that criteria to "all" by default.</p>\r\n<p style="padding-left: 30px;">b.&nbsp;&nbsp; Set Record Listings to \u201cList Each Time Found\u201d</p>\r\n<p>5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Select the \u201cDescription\u201d tab</p>\r\n<p style="padding-left: 30px;">a.&nbsp;&nbsp;&nbsp; Either leave the description blank or enter a description if you want one (like \u201cCustomer Export Report for Revolution Engine\u201d)</p>\r\n<p>6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Select the \u201cFields/Sort\u201d tab</p>\r\n<p style="padding-left: 30px;">a.&nbsp;&nbsp; If there are already items in the field selection area (the box on the right side) clear them all out<em></em></p>\r\n<p style="padding-left: 30px;"><em></em>b.&nbsp;&nbsp; Select the fields listed below.&nbsp; This is done by clicking a field in the box on the left side, then clicking the \u201cSelect\u201d button to pull it over into the selection box on the right.&nbsp; (NOTE: <em>Which fields you need to select depends on whether you\'re pulling the name and contact info from TAM\'s Customer screen or TAM\'s Contact screen.&nbsp; For more info about this, see \u201cPreliminary TAM Setup \u2013 Avoiding Common Problems)</em></p>\r\n<p style="padding-left: 30px;"><strong><span style="text-decoration: underline;">EVERYONE should select these fields</span>:</strong></p>\r\n<p style="padding-left: 30px;"><strong>-<em>Policy Data</em></strong></p>\r\n<p style="padding-left: 60px;"><em>-Policy Expiration Date</em></p>\r\n<p style="padding-left: 30px;"><em><strong>-Customer Data</strong></em></p>\r\n<p style="padding-left: 60px;"><em>-Customer Number</em><em></em><em></em><strong><em><br /></em></strong></p>\r\n<p style="padding-left: 30px;"><strong style="text-decoration: underline;"><em><br /> </em>-<span style="text-decoration: underline;">IF your data from the \u201cContact\u201d screen is consistent, select these fields</span>:</strong></p>\r\n<p style="padding-left: 30px;"><em><strong><strong>-Contact Info</strong></strong><strong></strong></em></p>\r\n<p style="padding-left: 60px;"><em><strong></strong>-Contact First Name</em><br /><em>-Contact Last Name</em><br /><em>-Contact Company</em><br /><em>-Contact Street</em><br /><em>-Contact City</em><br /><em>-Contact State</em><br /><em>-Contact Zip</em><br /><em>-Primary Phone</em><br /><em>-Primary Email Address</em><br /><em>-Birth Date</em><strong><br /></strong></p>\r\n<p style="padding-left: 30px;"><strong><em><br /> </em>-<span style="text-decoration: underline;">IF you need to pull data from the \u201cCustomer\u201d screen <em>instead of</em> the \u201cContact\u201d screen, then select these fields:</span></strong></p>\r\n<p style="padding-left: 30px;"><strong><span style="text-decoration: underline;"></span><em>-Customer Data</em></strong></p>\r\n<p style="padding-left: 60px;"><em>-Customer Name<br />-Customer Attention<br />-Customer Street<br />-Customer City<br />-Customer State<br />-Customer Zip Code<br />-Phone \u2013 Business<br />-Phone \u2013 Residential<br />-Phone \u2013 Fax<br />-Email Address</em></p>\r\n<p style="padding-left: 60px;"><em><br /></em></p>\r\n<p>7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click \u201cRun\u201d (upper-left corner)</p>\r\n<p>8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; When prompted, name the report \u201cAgency Revolution Cust Export\u201d and continue</p>\r\n<p>&nbsp;</p>\r\n<p>Your report is now saved for future use!</p>',
              'description': null,
              'notes': null,
              'via': null,
              'priority': null,
              'topic_type': 'Articles',
              'submitter_id': 21920167,
              'updater_id': 21920167,
              'forum_id': 21124322,
              'organization_id': null,
              'group_id': null,
              'custom_fields': null,
              'tags': [
                'applied',
                'export',
                'report',
                'tam'
              ],
              'attachments': [],
              'comments_count': 0,
              'created_at': '2012-07-26T18:31:56Z',
              'updated_at': '2013-01-07T19:13:46Z',
              'id': 21765033,
              'result_type': 'topic',
              'url': 'https://agencyrevolution.zendesk.com/api/v2/topics/21765033.json'
            },
            {
              'name': null,
              'title': '1) Avoiding common issues with TAM',
              'body': '<p><em><strong>DISCLAIMER:</strong> These instructions are created by Agency Revolution for the sole purpose of making it easier for you to export contact records to the Revolution Engine.&nbsp; That being said, TAM is a 3rd party system created and managed by Applied Systems, and we are not responsible for any changes that may be made to TAM in the future.&nbsp; If our instructions are out-of-date, please let us know.&nbsp; If you have questions specifically about your TAM system, please contact your Applied Rep.</em></p>\r\n<p>&nbsp;</p>\r\n<h1>PRELIMINARY TAM SETUP \u2013 AVOIDING COMMON PROBLEMS</h1>\r\n<p>To help you get the \u201ccleanest\u201d and most useful customer list from TAM, there is one very helpful thing you can do...</p>\r\n<p>The most common problem with importing data from TAM is the names that show up in the Engine.&nbsp; In TAM, names can be stored in more than one location, in more than one format, and this can create complications when importing your customers to the Engine.&nbsp; So, to help avoid these problems, please make sure your data is as \u201cclean\u201d as possible with respect to names.</p>\r\n<h3>SOME VERY IMPORTANT TIPS:</h3>\r\n<ul>\r\n<li>The Revolution Engine uses "First Name", "Last Name" and "Company" fields so you can more accurately customize your marketing.</li>\r\n<li>In the Customer section of TAM is a generic \u201cName\u201d field. &nbsp;This field is not very reliable since it sometimes contains a company name (for commercial lines clients) and sometimes contains the name of an individual, or even multiple individuals (for personal lines clients).</li>\r\n<li>In the Contacts section of TAM there are more specific "first name", "last name" and "company" fields. &nbsp;Since these perfectly match the fields that are used in the Revolution Engine, they are the absolute best way to ensure high quality data in the Revolution Engine, so that you can customize your marketing as effectively as possible.</li>\r\n</ul>\r\n<h3>WHAT IF I DON\'T HAVE CONTACTS IN TAM FOR ALL OF MY CUSTOMERS?&nbsp;</h3>\r\n<ul>\r\n<li>THE BEST SOLUTION is to "clean up" your TAM listings before running your first import. &nbsp;Go through every customer record in TAM and make sure each one has at least one Contact associated with it, and that at least one (and only one) contact per customer is marked in TAM as the "Primary Contact". &nbsp;Also, make sure each contact has accurate data in the First Name, Last Name and Company fields, as well as the other contact fields like email, phone, etc. (make sure the email listed for a contact belongs to that individual and isn\'t their wife or husband\'s email, etc.)</li>\r\n<li><span>If you absolutely don\'t have the time or manpower right now to take the step above, you can still import data from TAM\'s Customer section instead. &nbsp;HOWEVER, PLEASE BE AWARE that it will not be as "clean" and you may not be able to customize your marketing in certain ways (For example, without a consistent first name, you cannot address your messages "Dear [First Name],")</span></li>\r\n</ul>\r\n<div><span style="line-height: normal;">&nbsp;</span></div>',
              'description': null,
              'notes': null,
              'via': null,
              'priority': null,
              'topic_type': 'Articles',
              'submitter_id': 21920167,
              'updater_id': 19230532,
              'forum_id': 21124322,
              'organization_id': null,
              'group_id': null,
              'custom_fields': null,
              'tags': [
                'export',
                'tam'
              ],
              'attachments': [],
              'comments_count': 0,
              'created_at': '2012-07-26T17:45:02Z',
              'updated_at': '2014-04-01T04:48:14Z',
              'id': 21771797,
              'result_type': 'topic',
              'url': 'https://agencyrevolution.zendesk.com/api/v2/topics/21771797.json'
            }
          ],
          'error': null,
          'description': null
        });
      },
      get: function (topicId) {
        if (topicId == 361727) {
          return fakeApiService.buildFakeResponse({
            'topic': {
              'url': 'https://agencyrevolution.zendesk.com/api/v2/topics/361727.json',
              'id': 361727,
              'title': 'Error Message: "Error Reading File"',
              'body': '<p>If you receive this message with the Applied TAM upload tool, follow these directions:</p>\r\n<p>The file must be a valid Excel 2003 or 2007 file.&nbsp; Furthermore, if the file has an XLSX extension (Excel 2007) the agent must have Excel 2007 installed on the computer that they have installed the import application.</p>\r\n<p>It is known that Applied has installed Office 2007 on some of their customer\'s installations. Therefore, you will need an Office 2007 version of Excel on the computer you are using in order to import the file.</p>',
              'topic_type': 'Articles',
              'submitter_id': 19230532,
              'updater_id': 19230532,
              'forum_id': 305287,
              'locked': false,
              'pinned': false,
              'highlighted': false,
              'position': null,
              'tags': [
                'applied',
                'tam',
                'error',
                'reading',
                'file'
              ],
              'attachments': [],
              'comments_count': 0,
              'created_at': '2010-12-16T23:21:03Z',
              'updated_at': '2010-12-16T23:21:03Z',
              'uploads': null
            }
          });
        } else if (topicId == 487149) {
          return fakeApiService.buildFakeResponse({
            'topic': {
              'url': 'https://agencyrevolution.zendesk.com/api/v2/topics/487149.json',
              'id': 487149,
              'title': 'Read "Do Not Market" information from TAM',
              'body': '<p>TAM tracks "Do Not Market." Would be useful if we fed this information into the Revolution Engine to stop emails.</p>\r\n<p>Using the same information to stop VidBiscuit will be more challenging.</p>',
              'topic_type': 'Ideas',
              'submitter_id': 19230532,
              'updater_id': 19230532,
              'forum_id': 376330,
              'locked': false,
              'pinned': false,
              'highlighted': false,
              'position': null,
              'tags': [
                'tam',
                'do_not_market'
              ],
              'attachments': [{
                  'id': 18950717,
                  'file_name': 'Lori-_APPLIED_SCREEN_SHOT.png',
                  'content_url': 'https://agencyrevolution.zendesk.com/attachments/token/1ywydknwhtw5gaa/?name=Lori-_APPLIED_SCREEN_SHOT.png',
                  'content_type': 'image/png',
                  'size': 127698,
                  'thumbnails': [{
                      'id': 18950718,
                      'file_name': 'Lori-_APPLIED_SCREEN_SHOT_thumb.png',
                      'content_url': 'https://agencyrevolution.zendesk.com/attachments/token/cxy7wmbony3eh9z/?name=Lori-_APPLIED_SCREEN_SHOT_thumb.png',
                      'content_type': 'image/png',
                      'size': 127698
                    }]
                }],
              'comments_count': 0,
              'created_at': '2011-03-15T15:58:29Z',
              'updated_at': '2011-12-01T17:51:31Z',
              'uploads': null
            }
          });
        } else {
          return fakeApiService.buildFakeResponse({
            'topic': {
              'url': 'https://agencyrevolution.zendesk.com/api/v2/topics/21771797.json',
              'id': 21771797,
              'title': '1) Avoiding common issues with TAM',
              'body': '<p><em><strong>DISCLAIMER:</strong> These instructions are created by Agency Revolution for the sole purpose of making it easier for you to export contact records to the Revolution Engine.&nbsp; That being said, TAM is a 3rd party system created and managed by Applied Systems, and we are not responsible for any changes that may be made to TAM in the future.&nbsp; If our instructions are out-of-date, please let us know.&nbsp; If you have questions specifically about your TAM system, please contact your Applied Rep.</em></p>\r\n<p>&nbsp;</p>\r\n<h1>PRELIMINARY TAM SETUP \u2013 AVOIDING COMMON PROBLEMS</h1>\r\n<p>To help you get the \u201ccleanest\u201d and most useful customer list from TAM, there is one very helpful thing you can do...</p>\r\n<p>The most common problem with importing data from TAM is the names that show up in the Engine.&nbsp; In TAM, names can be stored in more than one location, in more than one format, and this can create complications when importing your customers to the Engine.&nbsp; So, to help avoid these problems, please make sure your data is as \u201cclean\u201d as possible with respect to names.</p>\r\n<h3>SOME VERY IMPORTANT TIPS:</h3>\r\n<ul>\r\n<li>The Revolution Engine uses "First Name", "Last Name" and "Company" fields so you can more accurately customize your marketing.</li>\r\n<li>In the Customer section of TAM is a generic \u201cName\u201d field. &nbsp;This field is not very reliable since it sometimes contains a company name (for commercial lines clients) and sometimes contains the name of an individual, or even multiple individuals (for personal lines clients).</li>\r\n<li>In the Contacts section of TAM there are more specific "first name", "last name" and "company" fields. &nbsp;Since these perfectly match the fields that are used in the Revolution Engine, they are the absolute best way to ensure high quality data in the Revolution Engine, so that you can customize your marketing as effectively as possible.</li>\r\n</ul>\r\n<h3>WHAT IF I DON\'T HAVE CONTACTS IN TAM FOR ALL OF MY CUSTOMERS?&nbsp;</h3>\r\n<ul>\r\n<li>THE BEST SOLUTION is to "clean up" your TAM listings before running your first import. &nbsp;Go through every customer record in TAM and make sure each one has at least one Contact associated with it, and that at least one (and only one) contact per customer is marked in TAM as the "Primary Contact". &nbsp;Also, make sure each contact has accurate data in the First Name, Last Name and Company fields, as well as the other contact fields like email, phone, etc. (make sure the email listed for a contact belongs to that individual and isn\'t their wife or husband\'s email, etc.)</li>\r\n<li><span>If you absolutely don\'t have the time or manpower right now to take the step above, you can still import data from TAM\'s Customer section instead. &nbsp;HOWEVER, PLEASE BE AWARE that it will not be as "clean" and you may not be able to customize your marketing in certain ways (For example, without a consistent first name, you cannot address your messages "Dear [First Name],")</span></li>\r\n</ul>\r\n<div><span style="line-height: normal;">&nbsp;</span></div>',
              'topic_type': 'Articles',
              'submitter_id': 21920167,
              'updater_id': 19230532,
              'forum_id': 21124322,
              'locked': false,
              'pinned': false,
              'highlighted': false,
              'position': null,
              'tags': [
                'export',
                'tam'
              ],
              'attachments': [],
              'comments_count': 0,
              'created_at': '2012-07-26T17:45:02Z',
              'updated_at': '2014-04-01T04:48:14Z',
              'uploads': null
            }
          });
        }
      }
    };
  }
]);