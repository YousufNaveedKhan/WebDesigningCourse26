// OPERATORS => Signs
// = ( EQUALS TO )
// + ( PLUS )
// - ( MINUS )
// / ( DIVIDE )
// * ( MULTIPLY )
// && ( AND )
// || ( OR )
// ! ( NOT )
// > ( GREATER THAN )
// < ( LESS THAN )
// % ( REMAINDER )
// == ( DOUBLE EQUALS TO )
// === ( TRIPPLE EQUALS TO )
// != ( NOT EQUAL TO )

// ASSIGNMENT OPERATORS
// ARITHMETIC OPERATORS
// LOGICAL OPERATORS
// COMPARISON OPERATORS

// INTERPRETER => Line by line execution 
// name
// var name = ""



document.write("<h2> OPERATORS </h2>")
// Comparison Operator
document.write("Ahyaan" == "Ahad");
document.write("<br>");

var name = "Ahyaan"; // Terminator ( ; )

document.write(name == "Ahad");
document.write("<br>");

var nameTwo = "Ahad";

document.write(name == nameTwo);
document.write("<br>");

// Arithmetic Operators
var numOne = 5;
var numTwo = 7;

document.write("Addition: ", numOne + numTwo, "<br>");
document.write("Substract: ", numOne - numTwo, "<br>");
document.write("Multiply: ", numOne * numTwo, "<br>");
document.write("Divide: ", numOne / numTwo, "<br>");

// Logical Operators

document.write("numOne is greater than numTwo: ", numOne > numTwo, "<br>");
document.write("numOne is less than numTwo: ", numOne < numTwo, "<br>");

var year = 2009;

if (year % 4 == 0) {
    document.write("It's a leap year");
}else {
    document.write("It's not a leap year");
}
document.write("<br>");
var num = 0;

if (num % 2 == 0) {
    document.write("Even Number");
}else {
    document.write("Odd Number");
}


