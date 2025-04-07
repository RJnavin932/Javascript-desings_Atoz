// function 
// ~~~~~~~~
//  * this is specific task

// two types of functions
// ~~~~~~~~~~~~~~~~~~~~~~
// 1.inbuild function
// 2.user define function

// types
// ~~~~~
// 1.function without argument and without return Value.
// 2.function with argument and without return value.
// 3.function without argument and with return value.
// 4.function with argument and with return value.*******
// xx---------------------------------------------------------xx
// structure
// ~~~~~~~~
// function create
// ~~~~~~~~~~~~~~~
    //  function fname(arg1,arg2,arg3,arg4............argN){ ====>function create
            //   ........                                                ||
            // ...........                                           (fitting fan)
            // .............
                   
    //           }
    // fname(arg1....); ====>function calling(switch on fan)

    // type-1 function  without argument and without return value.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         function welcome(){
            console.log('welcome');
            
         }
         welcome();
    // type-2 with argument and without return value.
     // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         function fname(a) {
           console.log('welcome',a);
             
         }
        fname('naveen');
    // type-3 without argument and with return value.
     // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       function sum(){
        a=20
        b=20
        c=a+b
        return (c);
        
       }
       console.log(sum());

    // type-4 with argument and with return value.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function value(a,b,e){
       var c=a+b+e
       return (c);
        
    }
    console.log(value(20,20,20));
    // xxx-------------------------------------------------------------------xxx

//   Arrow function
// ~~~~~~~~~~~~~~~~~~
// syntax
//    var functionname=(parameter)=>{
//     functionbody
//     ----------
//     -----------
//     ------------
//    }
    // functionname(5);

// Ex1:
var msg=(fname)=>{
    console.log('welcome',fname);
    
}
msg('jaya naveen');
// Ex2:
var mes=(tname)=>{
    console.log('ick holly ',tname);
    
}
mes('molly');

// use single line
 var a=(aname)=>console.log('ohh my ghass');
 a();   

//  Ex.4:
       var sum=(a,b)=>{
        var z=a+b;
        return z;
       }
      console.log( sum(20,10));
//   (or) single line method
    var sum=(a,b)=>a+b;
    console.log(sum(6,5));

// ternary opprator(if else)
   var a=5
   var evenvalue=(a%2==0)?console.log('even velue'):console.log('odd value');
//    (or)
  var result=(a%2==0)?'even':'odd';
  console.log(result);

//   vowels
 var lett='i';
 var result=((lett=='a')||(lett=='e')||(lett=='i')||(lett=='o')||(lett=='u'))?'vowels':'Not vowels';
 console.log(result);
 var vowelscheck = (lett) =>((lett=='a')||(lett=='e')||(lett=='i')||(lett=='o')||(lett=='u'))?'vowels':'Not vowels';
console.log("Show vowels : "+ vowelscheck());
//  vote eligible
var age=20
var result=(age>=18)?'eligible':'Not eligible';
console.log(result);
 
// ex arrow and tenarry loop single qus

 var ages=[20,30,15,11,9,7,5,12,18];
 var even=0;
 var odd=0;
 var result=(ages)=>{
     for(i=0;i<ages.length;i++){
        var eo=(ages[i]%2==0)?even++:odd++;
        console.log(eo,i,'=',ages[i]);   
        // even++; 
     }
     console.log('even no:'+ even);
     console.log('odd no:'+ odd);
 } 
  result(ages);

// -------------------------------------------------------
//  functions
 function name(x,y){
       var f=x+y;
       return f;
 }
 console.log(name(20,30));

 var age=[20,30,21,32,50,60];
 function resuld(age){
    for(let i=0;i<age.length;i++){
        if ((age[i]>=20)&&(age[i]<26)) {
            console.log('you are adult:',age[i]);
        }
        else if ((age[i]>=26)&&(age[i]<30)) {
             console.log('you are late 20s:',age[i]);
        } 
        else if ((age[i]>=30)&&(age[i]<40)) {
            console.log('you are late 30s:',age[i]);
       } 
        else {
            console.log('you are old:',age[i]);
            
        }
    }
 }

resuld(age)
 
  
  


   
   
    