//! QUESTION NO1
// var date = new Date();
// document.write(date);

//!QUESTION NO2
// var fname = prompt("ENTER YOUR FIRST");
// var lname = prompt("ENTER YOUR SECOND");
// var greet = alert("Asalamualikum " + fname+lname);

//!QUESTION NO3
// var num1 = +prompt("ENTER FIRST NUMBER")
// var num2 = +prompt("ENTER SECOND NUMBER")
// var result = num1 + num2;
// document.write(result);

//!QUESTION NO4


//! QUESTION NO5
// function squ() {
//     var num1 = +prompt("Enter a number that you want to square of...")
//     var num2 = num1 * num1
//     document.write(num2);
// }
// squ();

//! QUESTION NO6
// function fact(num1) {
//     if (num1 === 0 || num1 === 1) {
//         return 1;
//     } else {
//         return num1 * fact(num1 - 1);
//     }
// }

// var num = +prompt("Enter a number for FACTORIAL.");

// if (num < 0) {
//     document.write("Error: Factorial is only defined for non-negative integers.");
// } else {
//     var result = fact(num);
//     document.write(`The factorial of ${num} is: ${result}`);
// }

//! QUESTION NO6
function lub(){
    var num1 = +prompt("Enter Starting NUMBER!");
    var num2 = +prompt("Enter ENDING NUMBER!");
    
    for(let i = num1; i <=num2; i++){
        document.write(i + '<br>' )
    }
}
lub();