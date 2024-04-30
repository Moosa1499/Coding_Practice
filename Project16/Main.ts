/*17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16.
 Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

let guestList : Array <String> = [
    "Dr Zia Khan ",
    "Sir Ukasha",
    "Governor Kamran Tessouri",
    "Daniyal Nagori",
    "Bill Gates",
    "Elon Musk",
    "Satoshi Nakamura"
];


console.log(`We can only invite 2 Guests to our Dinner Event.`);

while(guestList.length > 2)
{
 let removeGuest = guestList.pop()
 console.log(`sorry ${removeGuest}, We cant Invite You To Our Annual Dinner .`)
}


// Print a message to each of the two people still on your list, letting them know they’re still invited.

for(let Guest of guestList) 
    {
        console.log(`Greetings , ${Guest}, You are Invited to our Annual Dinner .`);
    }

    // Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

    guestList.pop()
    guestList.pop()
    // Print empty string
    console.log(`guest list after dinner : ${guestList}`);
    