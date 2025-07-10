/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2; 
//implicit type conversion
console.log("The implicit conversion result is: " + result);
let explicitConversionResult = Number("5") - 2; 
console.log("The explicit conversion result is: " + explicitConversionResult);

let isValid = false;
//In Boolean everything, including non-empty strings, non-zero numbers, objects, and arrays, will be converted to true. So, the string "false" is being evaluated to true which is not valid
//In order to fix it we need to remove explict type conversion and quotes. 
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age "  + totalAge);

//Examples for implicit and explicit are below

let totalCost = "5" * 10;
console.log("Implicit type converted total cost " +totalCost);

let mathScore = null;
let scienceScore = 60;
console.log("Before Implicit type converted overall score " + mathScore + scienceScore);
overAllScore = Number(mathScore) + 60;
console.log("After Implicit type converted overall score " +overAllScore);

