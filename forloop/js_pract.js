
// array,loop

let languages=['java','python','c','c++','Notejs','React','Angular','Php','Reaxt Js','.Net'];

console.log(languages);
console.log('first value:',languages[0]);
console.log('secont value:',languages[1])
console.log('fifth value:',languages[4])
console.log('last value:',languages[languages.length -1])


 // odd even

for (let i=0; i<languages.length; i++) {
   

   if (i%2==1) {
    console.log(i+'=',languages[i]);
    
   }
}
  
for (let i=0 ;i<languages.length;i++){
    if (i%2==0) {

        console.log(i +'=',languages[i]);

        
    }
}
for (var i=0; i<languages.length; i++) {
   
    

var oddValue=(i%2==1)? console.log(i+'='+languages[i]):"";

}

var name='jaya naveen';

// console.log('totel letters:',name.length);

// console.log('first letter:',name[0]);

// console.log('fifth letter:',name[6]);

// console.log('last letter:',name[name.length-1]);

// for (let i = 0; i < name.length; i++) {
//     console.log(i+'='+name[i]);    
// }

for(var i=0;i<name.length;i++){

    var evenValue= (i%2==0)? console.log(i+'='+name[i]):'';
    
}


let vowels=['a','e','i','o','u'];
 console.log(vowels);

 console.log('first letter:'+vowels[0]);

 console.log('thirt letter:'+vowels[3]);

 console.log('last letter:'+vowels[vowels.length-1]);

 for (let i = 0; i < vowels.length; i++) {
    console.log(i+'='+vowels[i]);
      
    
 }

 for (let i = 0; i < vowels.length; i++) {
   if (i%2==0) {
     console.log(i+'='+vowels[i]);
     
   }
    
 }
 
 let climate=[15,20,30,40,50,60,70,80,90];

 console.log('total weather condition:'+climate.length);
 console.log('first number:'+climate[0]);
 console.log('last number:'+climate[climate.length-1]);

 for (let  i=0;i<climate.length;i++){
         
  console.log(i+'='+climate[i]);
  
 }

 for (let i=0;i<climate.length;i++){

  var evenValue=(i%2==0)?console.log('even number:'+i+'='+climate[i]):'=';
  
 }

 for (let i=0;i<climate.length;i++){

  var oddValue=(i%2==1)?console.log('odd value:'+i+'='+climate[i]):'=';

 }
 
 for(var i=0; i<climate.length;i++){

  if((climate[i]>=15) &&  (climate[i]<20)){
     console.log('weather is very hot:'+climate[i]);
   }
     else if ((climate[i]>=20) &&(climate[i]<30) ) {
     console.log('weather is much hot:'+climate[i]);
     
   }
   else if ((climate[i]>=30) && (climate[i]<40) ) {
     console.log('weather is little bit cold:'+climate[i]); 
   }
   else if ((climate[i]>=40) && (climate[i]<50) ) {
     console.log('weather is to much hold:'+climate[i]); 
   }
   else if ((climate[i]>=50) && (climate[i]<60) ) {
     console.log('weather is very very cold:'+climate[i]);
   }
   else{
     console.log('weather is rainy:'+climate[i]);
   }
 }
 
/*

Ex:1
-----
1 * 1 = 1
1 * 2 = 2


ex:2
----
names = ["ramar","dgfsdh","fjhsdjfhdsf","fdsfhsdjfhs","dsjfhjashfs","jdhfsjfh","dfjhsdjfhsd","ds"] count = 5

*/

 var a = 5;
// a=a+1
 console.log(a++); 
console.log(a);

 var b = 10;
//   b=b+1
 console.log(++b);
 console.log(b);
 
    
var names=['kajdioj','whfwspodj','asd','asdf','as','adlikaika','aaaaaa','ooadjia','assd','ahduhux'];

var count = 0;
for (let i= 0; i < names.length; i++) {
console.log(names[i] + " = " + names[i].length);
if(names[i].length >= 5){
  console.log(names[i]);
  count++;
} 
}
console.log("count names : " + count);

var a =Number(prompt('enter the value'));
for (let i=1;i<=20;i++){
  b=a*i
  console.log(i+'*'+a+'='+b);
  
}



