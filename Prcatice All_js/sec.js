// prompt

// var  tamil=prompt('enter the mark')
// var eng=prompt('enter the mark')
// var math=prompt('enter the mark')
// var sci=prompt('enter the mark')
// var soci=prompt('enter the mark')

// var total=Number(tamil)+Number(eng)+Number(math)+Number(sci)+Number(soci); 

// console.log("total marks:"+total);

// arthemetic opprator
let a=5
let n=10
 let z=a+n

 console.log("ans:",z);
 
//  assingment opprator
 let m=50
   m+=50;
   console.log('m:',m);

//  comparision opprator

 console.log('value:',(5>=8)  );
 console.log('value:',(5<=4)  );
 console.log('value:',(5==5)  ); 

//  logical  opprator


console.log('value:' ,(10==10)&&(10==6));

console.log('value:' ,(10==10)||(10==6));

console.log('value:' ,(!(10==10)));


// ternary opprator

console.log('ans:',(5>=7)?'greater':'lesser');

console.log('ans:',(5==5)?'equal':'not equal');
console.log('ans:',(5==9)?'equal':'not equal');

// if else

// var s=prompt('enter the number');

// if(s>=prompt('enter the number')){
//     console.log('it is correct');

    
// }

// else{
//     console.log('it is not correct ');
    
// }


//  if else if else

let g=40

if(g==30){
    console.log("equal");
    
}
else if(g<=30){
    console.log('less than the number');
    
}
else{
    console.log('greater thant the number');
    
}

let marks=34

if(marks>=35){
    console.log('you are pass');

    if(marks<35){
        console.log('you are not pass');
        
    }
          
}
else{
    console.log('better luck next time');
    
}

let vowels='k'

if(vowels=='a'){
    console.log('this is vowel letter');
    
}
else if(vowels=='e'){
    console.log('this is vowel letter');
}

else if(vowels=='i'){
    console.log('this is vowel letter');
}

else if(vowels=='o'){
    console.log('this is vowel letter');
}

else if(vowels=='u'){
    console.log('this is vowel letter');
}
else{
    console.log('not a vowel letter');
    
}

// nestet if else if


let weather=10

if((weather>=0)&&(weather<20)){
    console.log('it is cold');

    if ((weather>=20)&&(weather<25)) {
        console.log('it is warm');
        
        
    }
    if ((weather>=25)&&(weather<40)) {
        console.log('it is hot');
        
        
    }
    
}

else{
    console.log('very hot');
    
}

// let letter=prompt('enter the letter');

// if(letter=='a'){
//     console.log(letter,'is vowel');

//     if(letter=='e'){
//         console.log(letter," is vowel:e");
        
//     }
    
//     if(letter=='o'){
//         console.log(letter,"is vowel");
        
//     }
    
//     if(letter=='u'){
//         console.log(letter ,"is vowel");
        
//     }
    
//     if(letter=='i'){
//         console.log(letter ,"is vowel");
        
//     }
    
// }

// else{
//     console.log(letter,'is not vowel letter');
    
// }


let username="navee"

let password=12345

if(username=='naveen'){
    if(password==12345){
        console.log('login successfully');
        
    }
   else{
    console.log('password is wrong');
    
   }
}
else{
    console.log('user name not match');
    
}



