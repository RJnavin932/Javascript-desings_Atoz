console.log("External script");
// var , let , const
var x =5;
var y = 5;
var z = x+y;
console.log("x = " + z);


//  Number() -> string - number
// prompt() -> get value from user.
// var tamil = prompt("Enter the tamil mark :");
// var english = prompt("Enter the english mark : ");
// var total = Number(tamil) + Number(english);
// console.log("Total Mark : " + total);

// arithmetic operator -> +,-,/,*,%
// assignment operator -> =,  +=, -=, *= , /= ,%=  
// comparison operator - > == ,!= , >, < , >=, <=
//  logical operator -> && , || , !
// ternary operator -> (condition)? true : false

// assignment operator

var first = 5;
first += 6; // first = first + 6; => first = 5+6; => first = 11 
console.log(first);

// compare operator (value => true or false)

console.log("Equal value : " + (5 >= 5));

// logical operator (value => true or false)
// && ==> true , true = true
console.log("locial && value : " + ((5 == 5) && (7 == 7)));

 // || ==> true , false = true
console.log("locial || value : " + ((9 == 5) || (4 == 7)));
 
// ! ==> true = false, false = true
console.log("locial ! value : " + (!(4 == 7)));
 
 
// ternary operator (if...else)
console.log("Ternary operator: " , (6==7)? "Equal":"Not Equal");

// let age = Number(prompt("Enter the age: "));
// let msg = (age >= 18 )?"Eligible" : "not eligible";
// console.log(age+ " : " + msg);

// conditional statement (if...else, if...else if...else, nested if, switch)
// let age = 8;
// if(age >= 18){
//     console.log("Eligible");
    
// }
// else{
//     console.log("not eligible");
    
// }


// if...elseif...else
// var letter = 'u';
// if(letter == 'a'){
//     console.log("vowels");
    
// }
// else if(letter == 'e'){
//     console.log("vowels");
    
// }
// else if(letter == 'i'){
//     console.log("vowels");
    
// }
// else if(letter == 'o'){
//     console.log("vowels");
    
// }
// else if(letter == 'u'){
//     console.log("vowels");
    
// }
// else{
//     console.log("not vowel");
    
// }


// nested if statement

// var uname = "glad";
// var pwd = "1234";

// if(uname =="glad"){
//     if(pwd == "1234"){
//         console.log("login success fully");
        
//     }
//     else{
//         console.log("password not match");
        
//     }
// }
// else{
//     console.log("username not match");
    
// }

// if(uname == "glad" && pwd == "1234"){
//     console.log("login successfully");
    
// }
// else{
//     console.log("login failed");
    
// }

// switch statment

// let vowel = 'e';

// switch (vowel) {
//     case 'a':
//         console.log("vowel");
//         break;
//     case 'e':
//         console.log("vowel");
//         break;
//     case 'i':
//         console.log("vowel");
//         break;
//     case 'o':
//         console.log("vowel");
//         break;
//     case 'u':
//         console.log("vowel");
//         break;

//     default:
//         console.log("not vowel");
//         break;
// }


// let operation = "on";

// switch(operation){
// case "on":
//     console.log("Fan on");
//     break;
// case "off":
//     console.log("fan off");
//     break;
// default:
//     break;
// }



// Array 

let languages = ['java','c','c++','python','reactjs','angular','nodejs','go','rust','kotlin','flutter','react native'];
console.log("Full Array : " , languages);
console.log("First value : ", languages[0]);
console.log("seventh value :",languages[6]);
console.log("last value :", languages[11]);
console.log("last value :", languages[languages.length - 1]);

// loop 
//      (1)          (2)             (4)
// for(initial; conditonal, increment/decrement)
// {
//     ....code (3)
// }

for(var i = 0; i < languages.length; i++ )
    {
        // if(i%2 == 0){
        //     console.log(i + " = " + languages[i]); 
        // }
        // console.log(i + " = " + languages[i]);
        var evenValue = (i%2 == 1)? console.log(i + " = " + languages[i]) : "";
    }


// String
var institute_name = "Vijanthi Computer Institute";
console.log("Total letters : "+ institute_name.length);
console.log("First letter : " + institute_name[0]);
console.log("Last letter : "+ institute_name[institute_name.length-1]);
for (let index = 0; index < institute_name.length; index++) {
   console.log(index + " : " + institute_name[index]);
}















