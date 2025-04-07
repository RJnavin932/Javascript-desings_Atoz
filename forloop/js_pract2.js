// var marks=[20,50,50,70,80]

// for (let i=0;i<marks.length;i++)
//     {
//     console.log(i+'='+marks[i]);
// }
// for (let i=0;i<marks.length;i++){

//     var passValue=(i%2==0)? console.log(i+'='+marks[i]):'';  
// }


var marks =[50,70,80,90,60,100]

console.log('total length:'+marks);
console.log('last value:'+ marks [marks.length-1]);
console.log('total numbers:'+marks.length)



for (let i = 0; i < marks.length; i++) {
    
   var evenValue=(i%2==0)?console.log(i+'='+marks[i]):'=';
   

    
}

var numbers=[10,15,9,20,60,70,13,5,6];

var count=0;

for(let i=0;i<numbers.length;i++){
   console.log(i+"="+numbers[i]);

   if (numbers[i]%5==0) {
      console.log('even number'+numbers[i]);
      count++;
   }
   // else{
   //    console.log('odd number'+numbers[i]);
      
   // }
}
console.log('total even numbers:'+count);

   var count=0
for(let i=0;i<numbers.length;i++){
   if (numbers[i]%2==1) {
      console.log('odd number:'+numbers[i]);
      count++;
   }

}
console.log('total odd numbers:'+count);

var mark=[30,35,40,46,33,47,59,66,31,20,30,32];

var count=0;
for (let i = 0; i < mark.length; i++) {
   console.log(i+'='+mark[i]);
   
 if (mark[i]>=35) {
   console.log('pass mark:'+mark[i]);
   count++;
 }  
 else{
   console.log('fail mark:'+mark[i]);
   
 }
}

for (let i = 0; i < mark.length; i++) {
   
var evenValue=(mark[i]%2==0)?console.log('even number:'+mark[i]):'';
var oddValue=(mark[i]%2==1)?console.log('odd number:'+mark[i]):'';

   
}

var names=['kjsfslmac','jbfuik','ssuk','jhsdh','hd','k','asd','iszicj','akjsxua','ailxhijia'];



var count=0;
for(let i=0;i<names.length;i++){
   
   if (names[i].length>=5) {
      console.log(names[i]+'='+names[i].length);
      count++;
      
   }
 
}
console.log(' count names:'+count);

var multi=Number(prompt('Enter the Number'));

for(let i=0;i<=20;i++){
   b=i*multi
   console.log(i+'*'+multi+'='+b);
   
}

var mul=Number(prompt('Enter The Value'));
for(let i=0;i<=20;i++){
    c=mul*i
   console.log(i+'*'+mul+'='+c);

}