/*36.	T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print a
sentence summarizing the size of the shirt and the message printed on it.
Call the function. */
// Define Function
var make_shirt = function (size, message) {
    console.log("Size : ".concat(size, " , Message : '").concat(message, "'"));
    return "Size : ".concat(size, " , Message : '").concat(message, "'");
};
// Call Function 
var message = "Hackerman";
var size = "Large";
make_shirt(size, message);
make_shirt("Medium", "Code Master");
