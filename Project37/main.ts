/* 37.	Large Shirts: Modify the make_shirt() 
function so that shirts are large by default with 
a message that reads I love TypeScript. Make a large 
shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.*/

// Define Function
 function make_shirt (size: string = "Large", message : 
string  = "I love TypeScript.") : void 
    {
console.log(`Size : ${size} , Message : '${message}'`);

    }
    //Large Shirt by Default
    make_shirt();

    //Medium Shirt
    make_shirt("Medium");

    // Any Size + Any Message
    make_shirt("Small","Hackerman");
