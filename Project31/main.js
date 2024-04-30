/* 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
 */
// Non-Empty Array :
var userNames = ['admin', 'Moosa', 'Zeeshan', 'Dawood', 'Altamash'];
// Functional Case :
function greetUsers(userNames) {
    if (userNames.length === 0) {
        console.log('We need To Find Some Users .');
        return;
    }
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var userName = userNames_1[_i];
        if (userName.toLowerCase() === 'admin') {
            console.log('Greetings Admin , Would You Like To View a Status Report ?');
        }
        else {
            console.log("Greetings ".concat(userName, " , Welcome Back !"));
        }
    }
}
console.log("For Non-Empty Username : \n");
greetUsers(userNames);
//  Empty Array Case :
userNames = [];
console.log("For Empty User Name : \n");
greetUsers(userNames);
