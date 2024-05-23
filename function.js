// function is a block of code which we want to use repeatedly any where
var tea = 2 + 2 + 2;
function maketea() {
    console.log(2 + 2 + 3);
}
maketea();
function makemeal() {
    var meal = 3 + 3 + 3;
    return meal;
}
var response = makemeal();
console.log(response);
function preparetea(sugar, milk) {
    if (sugar === void 0) { sugar = 4; }
    var tea = 2 + sugar + milk;
    console.log(tea);
    return preparetea;
}
preparetea(undefined, 2); // argument
preparetea(1, 2); // argument
// Basic syntax of function
// function nameOfFunction(param1, param2) {
// function body
// }
function admitCard(name, // parameter
rollNumber, // parameter
courseName, // parameter with default value
phone // optional parameter
) {
    if (courseName === void 0) { courseName = "Typescript"; }
    // function body
    console.log('#------------------------#');
    console.log("Name: " + name); // concatenation
    console.log("Roll Number:  + ".concat(rollNumber)); // template literal (ES6)
    console.log("Course Name: " + courseName);
    // check if phone is not undefined
    if (phone) {
        console.log("Phone Number: " + phone);
    }
    console.log('#------------------------#');
}
// invoke function
admitCard("sunny", 3537, "Next.js", 1234567890); // argument
admitCard("erum", 422422, undefined, 1090078601); // argument with default value 
// student list array object
var studentsList = [
    {
        name: "Farhan",
        rollNumber: 3537,
        courseName: "Next.js",
        phone: 12346777567890
    },
    {
        name: "sammy",
        rollNumber: 422422,
        courseName: "Typescript",
        phone: 1090078601
    },
    {
        name: "Laiba",
        rollNumber: 35787,
        courseName: "Python"
    },
];
// loop through array of object
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    // invoke function with object value as argument
    admitCard(student.name, student.rollNumber, student.courseName, student.phone);
}
// Manahil tea function
function makeTea(sugar, milk, water) {
    if (sugar === void 0) { sugar = 4; }
    var tea = 2 + sugar + milk;
    console.log(tea);
}
makeTea(undefined, 2); //argument
makeTea(1, 3); //argument
