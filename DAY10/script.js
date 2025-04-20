// if else ladder

//check marks

// let marks = parseInt(prompt("enter your marks : "));

// if(marks >=90)
// {
//     console.log("Topper");
// }else if(marks>=75 && marks<=90)
// {
//     console.log("Pass with first class");
// }else if(marks>=35 && marks<=75)
// {
//     console.log("your pass");
// }
// else{
//     console.log("congratulations.....!");
//     console.log("But you are fail.....!");
// }

// check greater number between three numbers

// let num1 = parseInt(prompt("Enter first number : "));
// let num2 = parseInt(prompt("Enter second number "));
// let num3 = parseInt(prompt("Enter third number "));

// if(num1>=num2 && num1>=num3)
// {
//     console.log("First number is greater than second and third .");
// }else if(num2>=num1 && num2>=num3)
// {
//     console.log("Second number than first and third . ");
// }
// else
// {
//     console.log("Third number is greater than first and second . ");
// }

// switch statement

// let day = "Monday"
// switch(day)
// {
//     case "Monday" : 
//                     console.log("Today is Monday");
//                     break;
//     case "Tuesday" : 
//                     console.log("Today is Tuesday");
//                     break;
//     case "Wednesday" : 
//                     console.log("Today is Monday");
//                     break;
//     case "Thursday" : 
//                     console.log("Today is Thursday");
//                     break;
//     case "Friday" : 
//                     console.log("Today is Friday");
//                     break;
//     case "Saturday" : 
//                     console.log("Today is Saturday");
//                     break;
//     default :
//             console.log("Please Enter valid Day....! ");
// }

// check number is even or odd if number number even then print square of that number otherwise print cube
let n = parseInt(prompt("Enter the number : "));

if(n % 2 == 0){
    console.log("Square of the number is "+(n*n));
}
else{
    console.log("Cube of number is ",+(n*n));
}