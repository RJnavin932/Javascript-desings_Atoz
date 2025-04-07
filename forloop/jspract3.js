
// var a=Number(prompt('enter the number'));
// for (let i = 0; i < 20; i++) {
// b=a*i
// console.log(i+"*"+a+'='+b);

   
// }
for (let i = 0; i < 20; i++) {
   a=2
   b=a*i
   console.log(i+'*'+a+'='+b);
   

    
}

// Array

var names=['iujhfhuc' , 'opsrgiorijf' , 'sef' , 'hggf' , 'ifui' , 'skjdkhsh'  ,'kehf','aildxjiaj','iqhdwihi']
var count =0;
console.log("last name:"+names[names.length-1]);
console.log(names);
console.log('first name:',names[0]);
console.log('full names:'+names);
// for loop
 for (let i = 0; i < names.length; i++) {
    console.log(i+'='+names[i]);
}

for (let i = 0; i < names.length; i++) {
    if (names[i].length>=5) {
        console.log(i+'='+names[i]);
        count++;        
    }

    
}
console.log('total  count:'+count);

// for loop
var numbers=[20,50,60,80,30,25,43,32,15,70,51,27];

var count=0;
for(let i=0;i<numbers.length;i++){
    console.log(i+'='+numbers[i]);
    
}
// ternary opprator

for (let i = 0; i < numbers.length; i++) {
    var evenValue=(numbers[i]%2==0)?console.log('evennumber:'+i+'='+numbers[i]):'=';
    count++;
    
}
console.log('total numbers:'+count);

// (or)

// normal if else
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]%2==1){
        console.log('odd numbers:'+i+'='+numbers[i]);
        
    }
    
}
// loop
var age=[20,16,18,21,60,70,15,17,13];
var count=0;

for (let i=0;i<age.length;i++) {
   if (age[i]>=18) {
      console.log('you are eligible :'+i+'='+age[i]);
      count++;

      
   }
   else{
    console.log('you are not eligible:'+i+'='+age[i]);
    
   }
}
console.log('total voters:'+count);

var letters='abcdefghijklmnopqrstuvwxyz';

console.log('total letters:'+letters.length);
console.log('first letter:'+letters[0]);
console.log('last letter:'+letters[letters.length-1]);

for (let i = 0; i < letters.length; i++) {
   console.log(i+'='+letters[i]);
   
    
}

// var num=[20,19,17,13,20,25,70,25,90,9];
// var count=0;
// for (let i = 0; i < num.length; i++) {
//    if (num/5) {
//     console.log('numbers are divisible by 5:'+i+'='+num[i]);
//     count++;
    
//    }
    
// }


// let mynum=[1,2,3,1,5,2,5,5,5];
// let myres=[];
// mynum.forEach((value,index)=>{value==5?myres.push(index):'';console.log(myres);
// })

// let mynum=[1,2,3,4,5,6];
// let myres=[];
// let myfun=(mynum)=>{
//     mynum.forEach((_,i)=>{
//         sum=0;
//       mynum.forEach((v,index)=>{
//         if(i!=index){
//             sum+=v
//         }
//        })
//        myres.push(sum) 
//    })
//    return myres;
// }
// console.log(myfun(mynum));

// let letter='my name is jaya naveen';
// let res=0;
// let myfun=(letter)=>{
//     myarr=letter.split(' ');
//     let longestword=[];
//     myarr.forEach((value)=>{
//        if(res<=value.length){
//         res=value.length;
//         longestword=value
//        }
//     })
//     return longestword;
// }
// console.log(myfun(letter));




