//14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let guestList : Array <String> = [
    "Dr Zia Khan ",
    "Sir Ukasha",
    "Governor Kamran Tessouri",
    "Daniyal Nagori",
    "Bill Gates",
    "Elon Musk",
    "Satoshi Nakamura"
];

// loop for each to print invitation

guestList.forEach((guestName)=>{
console.log(`Dear ${guestName}, You are Invited to Our End Of Semester Dinner , We will Be Awaiting Your Attendance of Our Humble Event  .`)
});
