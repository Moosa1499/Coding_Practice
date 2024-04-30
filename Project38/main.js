/* 38.	Cities: Write a function called describe_city()
that accepts the name of a city and its country.
The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the
country a default value.
Call your function for three different cities,
at least one of which is not in the default country. */
// Function :
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown Country"; }
    console.log("".concat(city, " is in ").concat(country, " ."));
}
//Call Function
describe_city("Karachi", "Pakistan");
//  City with unknown Country:
describe_city("Boston");
//  Additional Country :
describe_city("Milan", "Italy");
