var name = "Hassan"; // String
document.write(name);
var nameTwo = "Adan"; // String
document.write("<br>" + nameTwo);
var num = 22 // Integer
document.write("<br>" + num);
var height = 5.8 // Float
document.write("<br>" + height);
var isVerified = false; // Boolean
document.write("<br>", isVerified, "<br>");
var mereStudents = ["Ahmed", "Ahyaan", "Adan", "Huzaifa", "Aman"]; // Array
document.write(mereStudents + "<br>");
//  OR OPERATOR AND OPERATOR
if (name == "Ahyaan" || nameTwo == "Irfan") {
    document.write("Class hogi <br>");
}else {
    document.write("Class nahin hogi <br>")
}

var subOne = 55;
var subTwo = 17;
var subThree = 60; 

var obtMarks = subOne + subTwo + subThree;
var totalMarks = 300;

var perc = obtMarks / totalMarks * 100;

var result; // Initialization
if (perc >= 40) {
    result = "Pass"; // Declaration
}else {
    result = "Fail" // Declaration
}

var grade;

if (perc >= 80) {
    grade = "A+";
}else if (perc < 80 && perc >= 70) {
    grade = "A";
}else if (perc < 70 && perc >= 60) {
    grade = "B";
}else if (perc < 60 && perc >= 50) {
    grade = "C";
}else if (perc < 50 && perc >= 40) {
    grade = "D";
}else {
    grade = "F";
}

document.write("Name: " + name);
document.write("<br>");
document.write("ObtainedMarks: " + obtMarks);
document.write("<br>");
document.write("Percentage: " + perc.toFixed(1));
document.write("<br>");
document.write("Result: " + result);
document.write("<br>");
document.write("Grade: " + grade);
document.write("<br>");
// Functions
// Function without parameter
function greet() {
    document.write("HELLO WORLD")
}

greet();

document.write("<br>");

// Function with parameter
function add(a, b) {
    return a + b;
}

var resAdd = add(18,3)
document.write(resAdd)

document.write("<br>");

function sub(c, d) {
    return c - d;
}

var resSub = sub(18,3)
document.write(resSub)

document.write("<br>");

function mul(x, y) {
    return x * y;
}

var resMul = mul(3,3)
document.write(resMul)

document.write("<br>");

function div(k, l) {
    return k / l;
}

var resDiv = div(3,5)
document.write(resDiv)

