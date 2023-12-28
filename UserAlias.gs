// // [START apps_script_admin_sdk_list_all_groups]
/**
//  * Lists all the groups in the domain.
//  * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/groups/list
//  */
// function listAllGroups() {
//   let pageToken;
//   let page;
//   do {
//     page = AdminDirectory.Groups.list({
//       domain: 'Your Company Name "domain.com"',  **Change Domain Name**
//       maxResults: 1000,
//       pageToken: pageToken
//     });
//     const groups = page.groups;
//     if (!groups) {
//       console.log('No groups found.');
//       return;
//     }
//     // Print group name and email.
//     for (const group of groups) {
//       console.log('%s (%s)', group.name, group.email);
//     }
//     pageToken = page.nextPageToken;
//   } while (pageToken);
// }
// // // [END apps_script_admin_sdk_list_all_groups]
// function exportGroupsToSheets() {
//   var groups = AdminDirectory.Groups.list({ domain: 'domain.com' }).groups;
//   var spreadsheet = SpreadsheetApp.create('Groups Information'); // Create a new spreadsheet

//   for (var i = 0; i < groups.length; i++) {
//     var group = groups[i];
//     var groupSheet = spreadsheet.insertSheet(group.email); // Create a new sheet for each group
//     groupSheet.appendRow(['Group: ' + group.email]); // Write group email in the first row

//     var members = AdminDirectory.Members.list(group.email).members;

//     if (members && members.length > 0) {
//       groupSheet.appendRow(['Members:']); // Write 'Members:' in the sheet
//       for (var j = 0; j < members.length; j++) {
//         groupSheet.appendRow([members[j].email]); // Write each member in a new row
//       }
//     } else {
//       groupSheet.appendRow(['No members in this group.']);
//     }
//   }
// }
// This group will check all the groups that start with the letter "I"
// function exportGroupsStartingWithLetterToSheets(startingLetter) {
//   var groups = AdminDirectory.Groups.list({ domain: 'domain.com' }).groups;
//   var spreadsheet = SpreadsheetApp.create('Groups Information 12/6'); // Create a new spreadsheet

//   for (var i = 0; i < groups.length; i++) {
//     var group = groups[i];
    
//     // Check if the group name starts with the specified letter
//     if (group.email.charAt(4) === startingLetter) {
//       var groupSheet = spreadsheet.insertSheet(group.email); // Create a new sheet for each group
//       groupSheet.appendRow(['Group: ' + group.email]); // Write group email in the first row

//       var members = AdminDirectory.Members.list(group.email).members;

//       if (members && members.length > 0) {
//         groupSheet.appendRow(['Members:']); // Write 'Members:' in the sheet
//         for (var j = 0; j < members.length; j++) {
//           groupSheet.appendRow([members[j].email]); // Write each member in a new row
//         }
//       } else {
//         groupSheet.appendRow(['No members in this group.']);
//       }
//     }
//   }
// }
// exportGroupsStartingWithLetterToSheets('t');
function exportGroupsStartingWithLetterToSheet(startingLetter) {
  var groups = AdminDirectory.Groups.list({ domain: 'domain.com' }).groups;
  var spreadsheet = SpreadsheetApp.create('Groups Information 12/14'); // Create a new spreadsheet
  var sheet = spreadsheet.getActiveSheet(); // Get the active sheet
  
  sheet.appendRow(['Email Address', 'Role', 'Group Name']);

  for (var i = 0; i < groups.length; i++) {
    var group = groups[i];

    // Check if the group name starts with the specified letter
    if (group.name.charAt(0) === startingLetter) {
     // sheet.appendRow(['Group: ' + group.name]); // Write group email in the next available row and first column

      var members = AdminDirectory.Members.list(group.email).members;

      if (members && members.length > 0) {
        for (var j = 0; j < members.length; j++) {
          sheet.appendRow([members[j].email, members[j].role, group.name]); // Write each member in the next available row and first column
         
        }
      } else {
        //sheet.appendRow(['No members in this group.']);
      }

      sheet.appendRow([""]); // Add an empty row for better separation between groups
    }
  }
}
exportGroupsStartingWithLetterToSheet('t');
// function exportGroupsStartingWithLetterToSheet(startingLetter) {
//   var groups = AdminDirectory.Groups.list({ domain: 'domain.com' }).groups;
//   var spreadsheet = SpreadsheetApp.create('Groups Information 12/10'); // Create a new spreadsheet
//   var sheet = spreadsheet.getActiveSheet(); // Get the active sheet

//   var startProcessing = false; // Flag to indicate when to start processing groups

//   for (var i = 0; i < groups.length; i++) {
//     var group = groups[i];

//     // Check if the group email is long enough to have a fourth character
//     if (group.email.length > 4) {
//       // Check if the group name starts with the specified letter
//       if (group.email.charAt(4) === startingLetter) {
//         startProcessing = true; // Set the flag to start processing groups
//       }
//     }

//     // Check if we should start processing groups
//     if (startProcessing) {
//       sheet.appendRow(['Group: ' + group.email]); // Write group email in the next available row and first column

//       var members = AdminDirectory.Members.list(group.email).members;

//       if (members && members.length > 0) {
//         for (var j = 0; j < members.length; j++) {
//           sheet.appendRow([members[j].email]); // Write each member in the next available row and first column
//         }
//       } else {
//         sheet.appendRow(['No members in this group.']);
//       }

//       sheet.appendRow([""]); // Add an empty row for better separation between groups
//     }

//     // Check if we should stop processing groups (after 'idp_s')
//     if (group.email.charAt(4) === 's' && startProcessing) {
//       break; // Exit the loop after processing groups starting with 'idp_s'
//     }
//   }
// }

// exportGroupsStartingWithLetterToSheet('t');
