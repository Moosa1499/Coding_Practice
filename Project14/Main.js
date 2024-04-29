//14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
var guestList = [
    "Dr Zia Khan ",
    "Sir Ukasha",
    "Governor Kamran Tessouri",
    "Daniyal Nagori",
    "Elon Musk",
    "Bill Gates",
    "Satoshi Nakamura"
];
// Step#1 Print The Name of The Guest Unable To Attend :
var guestWhocantAttend = "Bill Gates";
console.log("".concat(guestWhocantAttend, " will be Unable to Attend The Event ."));
//Step#2 : Replace The Guest who cant Attend
var newGuest = "Zeeshan Afzal";
var indexOfguestWhocantAttend = guestList.indexOf(guestWhocantAttend);
console.log(indexOfguestWhocantAttend);
if (indexOfguestWhocantAttend !== -1) {
    guestList[indexOfguestWhocantAttend] = newGuest;
}
// console.log(guestList[5])
// Step 3 Print The new invitations.
console.log("Second Set Of Invitations : ");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " You are invited to our end of Semester Dinner."));
});
