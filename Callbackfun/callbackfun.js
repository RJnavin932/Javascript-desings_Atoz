// callback fuction 
//  syntax
// ~~~~~~~~
//  function birthday(name,callback) ===>main function{
//      console.log('welcome:'+name);
//      callback();
// }
// function Invite(){ ====>callback function
//       colsole.log('wecolme to birthday function:');
// }

// EX.1
 function birthday(name,callback) {
    console.log('welcome',name);
    callback();
}
function Invite1(){
    console.log('welcome to birthday party:');
}
birthday('bevin',Invite1)
// ex.2
function skipity(fname,cb){
    console.log('toodles',fname);
    cb();
}
function Invite2(){
    console.log('how are you');    
}
skipity('naveen',Invite2);
// ex.3
function tname(age,cb){
    console.log('what is your age',age);
    cb();    
}
function Invite3() {
    console.log('my age is 22');   
}
tname('naveen',Invite3);

// callback function with arrow functoin
// ex.1
var myname = (cb)=>{
    cb();
}
const Invite=()=>{
    console.log('hello world');    
}
myname(Invite);

// ex.2
let vowels=(letters)=>{
    letters();
}
let Invite4=()=>{
    console.log('a','e','i','o','u');    
}
vowels(Invite4);

// ex.3
let sname=(me)=>{
    console.log('what is your name');
    me();
}
let name1=()=>{
    console.log('my name is Jaya Naveen');
}
sname(name1);

// callbackfunction with arrowfun and normal fun 
// ex.1
function bday(date){
    date();
}
bday(()=>{
    console.log('welcome to our birthday');
    
})
// ex.2
function day(weather){
    weather();
}
day(()=>{
    console.log('today is very cold');
})

// ex.3
var numb=[20,30,50,10,9,2,3,1,7,5,25,];
var even=0;
var odd=0;
function no(numb){
    numb();       
}
no(()=>{
    for (let i = 0; i < numb.length; i++) {
        (numb[i]%2==0)? even++:odd++;      
      }
      console.log('even numbers:',even);
      console.log('odd numbers:',odd); 
});
 
var num=[20,2,4,5,7,19,50,55,54,1,60,2,8];
var fun=(num,cb)=>{
    var even=[];
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0){
           even.push(num[i]);   
        }
    }
    cb(even);
}
fun(num,(numbe)=>{
    console.log(numbe);
    
})

var number=[20,30,40,-1,3,-4,-10,-3,5,9,10];
var fun =(number,cb2)=>{
    positive=[];
    for(let i=0;i<number.length;i++){
        
        if (number[i]>=0) {
            positive.push(number[i]);     
        }
    }
    cb2(positive)
}
fun(number,(mynum1)=>{
    console.log(mynum1);    
})

var marks=[24,19,20,30,35,40,60,45,43,57,68,70];
var fun=(marks,cb3)=>{
    pass=[];
    for(let i=0;i<marks.length;i++){
        if (marks[i]>=35) {
            pass.push(marks[i]);
        }
    }
    cb3(pass);
}
fun(marks,(totalpass)=>{
    console.log(totalpass);
    
})