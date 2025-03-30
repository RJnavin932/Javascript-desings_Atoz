// arrow function with ternary opprator and loop
// even (or) odd
 var num=[20,30,11,7,9,25,30,10,2,8];
 var even=0;
 var odd=0;
 var mynum=(num)=>{
    for(let i=0;i<num.length;i++){
        (num[i]%2==0)?even++:odd++;
        // console.log(i+'='+num[i]);
        
    }
    console.log('even numbers:',even);
    console.log('odd numbers:',odd);  
 }
 mynum(num);

// pass (or) fail
var marks=[30,20,25,35,40,45,50,60,22,70,80];
var pass=0;
var fail=0;
var result=(marks)=>{
    for(let i=0;i<marks.length;i++){
        (marks[i]>=35)?pass++:fail++;
    }
    console.log('pass marks:',pass);
    console.log('fail marks:',fail);
    
}
result(marks);

// vowels (or) constant
var lett=['a','b','d','f','e','i','o','u','h','z','m'];
var vowels=0;
var notvowels=0;
var letters=(lett)=>{
    for(let i=0;i<lett.length;i++){
        // console.log(lett[i]);     
     ((lett[i]=='a')||(lett[i]=='e')||(lett[i]=='i')||(lett[i]=='o')||(lett[i]=='u')) ? vowels++ : notvowels++;
    }
    console.log('vowels:',vowels);
    console.log('Not vowels:',notvowels);
}
letters(lett);

// ages eligible (or) not eligible
var ages=[20,10,18,50,60,15,17,40,16,16,35];
var eligible=0;
var noteligible=0;
var result=(ages)=>{
    for(let i=0;i<ages.length;i++){
        (ages[i]>=18)?eligible++:noteligible++;
    }
    console.log('voters:',eligible);
    console.log('Non voters:',noteligible);
}
result(ages);

// divisible (or) Notdivisible
var numb=[20,3,5,10,15,4,50,9,8,40];
var divisible=0;
var Notdivisible=0;
var ans=(numb)=>{
 for(let i=0;i<numb.length;i++){
    (numb[i]%=5)?divisible++:Notdivisible++;
 }
 console.log('divisible Numbers:',divisible);
 console.log('Notdivisible Numbers:',Notdivisible);
}
ans(numb)

// positive (or) negative
var number=[20,30,10,-7,-6,-10,-1,-8,5,6,9];
var positive=0;
var negative=0;
var answer=(number)=>{
    for (let i = 0; i < number.length; i++) {
        (number[i]>=0)?positive++:negative++;
    }
    console.log('positive Numbers:',positive);
    console.log('Negative Numbers:',negative);
}
answer(number);

// arrow function with if  else else if 
var age=[20,18,10,15,40,44,50,60,30,35,26,27];
var myages=(age)=>{
    for (let i=0;i<age.length;i++){
        
   if ((age[i]>=1)&&(age[i]<18)){
    console.log('you are child:',age[i]);
   }
   else if((age[i]>=18)&&(age[i]<25)){
    console.log('you are adult:',age[i]);
   }
   else if((age[i]>=25)&&(age[i]<30)){
    console.log('you are late 20s:',age[i]);
   }
   else if((age[i]>=30)&&(age[i]<40)){
    console.log('you are 30s:',age[i]);
   }
   else{
    console.log('you are senior:',age[i]);
   }
}
}
myages(age);

// 2.arrow function with if  else else if 
var mark=[20,35,30,50,40,55,60,70,80,85,90,100,110,-1];
var mymarks=(mark)=>{
    for(let i=0;i<mark.length;i++){
        if ((mark[i]>=0)&&(mark[i]<35)) {
            console.log('you are fail:',mark[i]);    
        }
        else if((mark[i]>=35)&&(mark[i]<45)){
            console.log('you are pass with D grade:',mark[i]);  
        }
        else if((mark[i]>=45)&&(mark[i]<60)){
            console.log('you are pass with C grade:',mark[i]);  
        }
        else if((mark[i]>=60)&&(mark[i]<70)){
            console.log('you are pass with B grade:',mark[i]);  
        }
        else if((mark[i]>=70)&&(mark[i]<85)){
            console.log('you are pass with A grade:',mark[i]);  
        }
        else if((mark[i]>=85)&&(mark[i]<=100)){
            console.log('you are pass with A++ grade:',mark[i]);  
        }
        else{
            console.log('your mark not idendify:',mark[i]);     
        }
    }
}
mymarks(mark);

// 3.arrow function with if  else else if 

var weather=[20,10,30,40,50,60,70,90,55,35];
var myweather=(weather)=>{
    for(let i=0;i<weather.length;i++){
        if ((weather[i]>=0)&&(weather[i]<30)) {
            console.log('weather is verry hot:',weather[i]);    
        }
        else if((weather[i]>=30)&&(weather[i]<40)){
            console.log(' weather is so hot:',weather[i]);  
        }
        else if((weather[i]>=40)&&(weather[i]<50)){
            console.log('weather is little bit hot:',weather[i]);  
        }
        else if((weather[i]>=50)&&(weather[i]<60)){
            console.log('weather is warm:',weather[i]);  
        }
        else{
            console.log('weather is cold:',weather[i]);     
        }
    }
}
myweather(weather);