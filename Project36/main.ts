/*36.	T-Shirt: Write a function called make_shirt() that accepts a size and the 
text of a message that should be printed on the shirt. The function should print a 
sentence summarizing the size of the shirt and the message printed on it. 
Call the function. */

// Define Function
const make_shirt = (size : string, message : string) 
: string=>
    {
console.log(`Size : ${size} , Message : '${message}'`);
return `Size : ${size} , Message : '${message}'`

    }
    // Call Function 
let message : string = "Hackerman"
let size : string = "Large"
    make_shirt(size , message);
    make_shirt("Medium","Code Master");