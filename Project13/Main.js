"use strict";
//14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    "Dr Zia Khan ",
    "Sir Ukasha",
    "Governor Kamran Tessouri",
    "Daniyal Nagori",
    "Bill Gates",
    "Elon Musk",
    "Satoshi Nakamura"
];
exports.guestList = guestList;
// loop for each to print invitation
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName}, You are Invited to Our End Of Semester Dinner , We will Be Awaiting Your Attendance of Our Humble Event  .`);
});
