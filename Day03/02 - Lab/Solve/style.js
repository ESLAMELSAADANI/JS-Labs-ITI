////Part01
var str = "Welcome To Js";

var myWindow = window.open("","","width = 500px , height = 500px")
var interval = setInterval(function(){
    if(i === str.length)
        myWindow.close();
    myWindow.document.write(str[i])
    i++
},500)

for(var i =0;i<str.length;){
    interval();
}

////Part02
do {
    var count = prompt("Enter The Count")
} while (count == null || isNaN(count) || !Number(count) || Number(count) <= 0 || count.trim() === "");

var myWindow02 = window.open("", "", "width = 500px , height = 500px")
var interval02 = setInterval(function () {
    if (i > count)
        myWindow02.close();
    myWindow02.document.write(`<div style="border:3px solid red; display:inline-block; margin:3px; padding:3px;">
            <div style="border:2px solid black; width:30px; height:30px;
                        font-weight:bold; text-align:center; line-height:30px;">
                ${i}
            </div>
        </div>
        </br>`)
    myWindow02.document.title = i;
    i++
}, 1000)

for (var i = 1; i <= count;) {
    interval02();
}

////Part03
// var res = window.document.location.search;

// if (res) {
//     var newRes = res.slice(1);
//     var resArr = newRes.split("&",);
//     var username = resArr[0];
//     var password = resArr[1];

//     if (username == "username=ali" && password == "password=123") {
//         var newWindow = window.open("", "", "width = 500px , height = 500px");
//         newWindow.document.write(`<h1 align = "center">Hello Ya Ali</h1>`)
//     }
//     else {
//         var errorWindow = window.open("", "", "width = 500px , height = 500px")
//         errorWindow.document.write(`<h1 align = "center">ERROR</h1>`)
//     }
// }


////Part04
var students = [
    { name: "Ali", age: 20, Crs: "CS" },
    { name: "Sara", age: 22, Crs: "Math" },
    { name: "Omar", age: 19, Crs: "Physics" },
    { name: "Laila", age: 16, Crs: "CS" },
    { name: "khaled", age: 23, Crs: "Engineering" },
    { name: "Mona", age: 20, Crs: "Biology" },
    { name: "Kareem", age: 24, Crs: "Math" },
    { name: "Noor", age: 18, Crs: "CS" }
];
// ////Q01 - Display all students
// document.write("Display all students => <br/>");
// document.write("<br/>");

// for (var i = 0; i < students.length; i++) {
//     document.write(students[i].name + "<br/>")
// }

// document.write("<hr/>")

// ////Q02 - find and Search for a student by name and print their details.
// document.write("find and Search for a student by name and print their details => <br/>");
// document.write("<br/>");

// function getStudentByName(_name) {
//     var student;
//     for (var i = 0; i < students.length; i++) {
//         if (students[i].name.toLowerCase() == _name.toLowerCase()) {
//             student = students[i];
//             return `name = ${student.name} - age = ${student.age} - Crs = ${student.Crs}`;
//         }
//     }
//     return `Not Found Student With This Name "${_name}"!`
// }

// do {
//     var _name = prompt("Enter Student Name: ")
// } while (_name == null || _name.trim() == "" || Number(_name));

// document.write(getStudentByName(_name));

// document.write("<hr/>")


// ////Q03 - Find how many students are in the array(count Students).
// document.write("Find how many students are in the array(count Students) => <br/>");
// document.write("<br/>");

// var studentsCount = students.length;
// document.write(`Count Of Students = ${studentsCount}`)

// document.write("<hr/>")

// ////Q04 - Get all students who are in "CS"
// document.write("Get all students who are in 'CS' => <br/>");
// document.write("<br/>");

// var studentsInCs = students.filter(x => x.Crs == "CS");
// for (var i = 0; i < studentsInCs.length; i++) {
//     document.write(`${i + 1} - name: ${studentsInCs[i].name} - age: ${studentsInCs[i].age} - Course: ${studentsInCs[i].Crs}<br/>`)
// }

// document.write("<hr/>")

// ////Q05 - Find youngest student
// document.write("Find youngest student => <br/>");
// document.write("<br/>");

// var youngestStudent = students[0];
// var youngestStudentAge = students[0].age;
// for (var i = 0; i < students.length; i++) {
//     if (students[i].age < youngestStudentAge) {
//         youngestStudent = students[i];
//         youngestStudentAge = students[i].age;
//     }
// }

// document.write(`Youngest Student => name = ${youngestStudent.name} - age = ${youngestStudent.age} - Crs = ${youngestStudent.Crs}`)

// document.write("<hr/>")

// ////Q06 - Sort Students by age
// document.write("Sort Students by age => <br/>");
// document.write("<br/>");

// var newStudentsArr = students;
// newStudentsArr.sort((a, b) => a.age - b.age)

// for (var i = 0; i < newStudentsArr.length; i++) {
//     document.write(`${i + 1}- ${newStudentsArr[i].name} - ${newStudentsArr[i].age} - ${newStudentsArr[i].Crs}<br/>`)
// }

// document.write("<hr/>")


// ////Q07 - Create a new array with only student names.
// document.write("Create a new array with only student names => <br/>");
// document.write("<br/>");

// var newNamesArr = [];

// for (var i = 0; i < students.length; i++) {
//     newNamesArr[i] = students[i].name;
// }

// for (var i = 0; i < newNamesArr.length; i++) {
//     document.write(newNamesArr[i] + "<br/>");
// }

// document.write("<hr/>");


// ////Q08 - Check if all students are above age  18 and return true or false
// document.write("Check if all students are above age  18 and return true or false  => <br/>");
// document.write("<br/>");

// function CheckAllStudAbove18(_students) {
//     var flag = true;
//     for (var i = 0; i < _students.length; i++) {
//         if (_students[i].age <= 18)
//             flag = false;
//     }
//     return flag;
// }


// var x = CheckAllStudAbove18(students);
// if (x)
//     document.write("All Students Above 18!")
// else {
//     document.write(`All Students Not Above 18! `)
// }

// document.write("<hr/>");


// ////Q09 - return Students Who Have the Same Crs
// document.write("Students Who Have the Same Crs => <br/>");
// document.write("<br/>");

// var flag01 = true;
// for (var i = 0; i < students.length; i++) {
//     var StudentsWithSameCourse = [students[i]];
//     for (var j = i + 1; j < students.length; j++) {
//         if (students[i].Crs.toLowerCase() === students[j].Crs.toLowerCase()) {
//             StudentsWithSameCourse.push(students[j])
//         }
//     }
//     if (StudentsWithSameCourse.length > 1) {
//         flag01 = false;
//         for (var s = 0; s < StudentsWithSameCourse.length; s++) {
//             document.write(`${s + 1} - ${StudentsWithSameCourse[s].name} , ${StudentsWithSameCourse[s].age} , ${StudentsWithSameCourse[s].Crs} <br/>`);
//         }
//         document.write("<hr/>");
//     }

// }
// if (flag01)
//     document.write(`There are no students with the same Course Name!`)

// document.write("<hr/>");

// ////Q10 - Calculate the average age of all students.
// document.write("average age of all students => <br/>");
// document.write("<br/>");

// var ageArray = [];
// for (var i = 0; i < students.length; i++) {
//     ageArray.push(students[i].age);
// }

// var sumAges = ageArray.reduce((acc, curr) => acc + curr, 0);
// var avg = sumAges / ageArray.length;

// document.write(`Average Of Students Age Values => ${parseInt(avg)}`)

// document.write("<hr/>");

// ////Q11 - Sort and Find top 3 oldest students
// document.write("Sort and Find top 3 oldest students => <br/>");
// document.write("<br/>");

// var studentsArr = students;

// studentsArr.sort((a, b) => -(a.age - b.age));

// var oldestStudents = [];

// for (var i = 0; i < 3; i++) {
//     oldestStudents.push(studentsArr[i]);
// }

// for (var i = 0; i < oldestStudents.length; i++) {
//     document.write(`${i + 1} - ${oldestStudents[i].name} - ${oldestStudents[i].age} - ${oldestStudents[i].Crs} <br/>`)
// }

// document.write("<hr/>");

// ////Q12 - Find if there are students with the same name.
// document.write("Find if there are students with the same name => <br/>");
// document.write("<br/>");

// var flag02 = true;
// for (var i = 0; i < students.length; i++) {
//     var StudentsWithSameName = [students[i]];
//     for (var j = i + 1; j < students.length; j++) {
//         if (students[i].name.toLowerCase() === students[j].name.toLowerCase()) {
//             StudentsWithSameName.push(students[j])
//         }
//     }
//     if (StudentsWithSameName.length > 1) {
//         flag02 = false;
//         for (var s = 0; s < StudentsWithSameName.length; s++) {
//             document.write(`${s + 1} - ${StudentsWithSameName[s].name} , ${StudentsWithSameName[s].age} , ${StudentsWithSameName[s].Crs} <br/>`);
//         }
//         document.write("<hr/>");
//     }

// }
// if (flag02)
//     document.write(`There are no students with the same name!`)


// document.write("<hr/>");

// ////Q13 - Reverse the array without using .reverse().
// document.write("Reverse the array without using .reverse() => <br/>");
// document.write("<br/>");

// var RevArray = [];

// for (var i = students.length - 1; i >= 0; i--) {
//     RevArray.push(students[i]);
// }

// for (var i = 0; i < RevArray.length; i++) {
//     document.write(`${i + 1} - ${RevArray[i].name} - ${RevArray[i].age} - ${RevArray[i].Crs} <br/>`);
// }

// document.write("<hr/>");

// ////Q14 - Add a new property email for each student in the format: name.toLowerCase+"@iti.com"
// document.write("Add a new property email for each student in the format: name.toLowerCase+'@iti.com' => <br/>");
// document.write("<br/>");

// var newStudentsArray = students;

// for (var i = 0; i < newStudentsArray.length; i++) {
//     newStudentsArray[i].email = `${newStudentsArray[i].name.toLowerCase()}@iti.com`;
// }

// for (var i = 0; i < newStudentsArray.length; i++) {
//     document.write(`${i + 1} - name = ${newStudentsArray[i].name} - age = ${newStudentsArray[i].age} - Crs = ${newStudentsArray[i].Crs} - email = ${newStudentsArray[i].email}<br/>`)
// }