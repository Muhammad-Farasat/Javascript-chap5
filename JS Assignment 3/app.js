//! QUESTON NO.1

// var check = prompt("Enter anything")
// var char_code;
// if (!isNaN(check)){
//     document.write("It is a number.")
// }else{
//     char_code = check.charCodeAt(0)
//     if(char_code>=65 && char_code<=90){
//         document.write("It is charater of capital case.")
//     }
//     else if(char_code>=97 && char_code<=122){
//         document.write("Its is character of lower case.")
//     }
// }

//! QUESTION NO.2

// var num1 = prompt("Enter first number")
// var num2 = prompt("Enter second number")

// if (num1>num2) {
//     document.write("The first number is greater")
// }else{
//     document.write("The second number is greater")
// }

//! QUESTION NO.3

// var num1 = prompt("Enter a number")


// if (num1 >= 1) {
//         document.write("The number is positive")
//     }else if(num1 < 0){
//         document.write("The is negative")
//     }else{
//         document.write("It is zero")
//     }

//! QUESTION NO.4

// var alpha = prompt("Enter a signal alphabet or the code won't work")

// if (alpha.length === 1)
// if (alpha === 'a' || alpha === 'e' || alpha === 'i' || alpha === 'o' || alpha === 'u') 
// {
//     document.write(true)
// }
// else
// {
//     document.write(false)
// }

//!  QUESTION NO.5

// var corrpassword = "farasatking"
// var passwor = prompt("Enter a password")

// if(passwor === ""){
//     document.write("Please enter password.")
// }
// else if(passwor === corrpassword){
//     document.write("Its correct password.")
// }
// else{
//     document.write("Incorrect.")
// }

//! QUESTION NO.6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

//! QUESTION NO.7

var time = prompt("Enter time in second (e.g. 7pm = 1900.)")

if(time >= 0000 && time < 1200 ){
    document.write("Good Morning.")
}
else if(time >= 1200 && time < 1700){
    document.write("Good Afternoon.")
}else if(time >= 1700 && time < 2100){
    document.write("Good Evening.")
}else if(time >= 2100 && time < 2359){
    document.write("Good Night.")
}else{
    document.write("Looks like you are illetrate.")
}