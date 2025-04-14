// var demoid=document.getElementById('demoid').innerHTML='Hello World';
// console.log(demoid);

// var ptag = document.getElementsByTagName('p');
// // ptag[0].style.backgroundColor="red"

// console.log(ptag);

// for(let i=0;i<ptag.length;i++){
//     if(i%2==0){
//         ptag[i].style.backgroundColor='gray'
//     }
//     else{
//                ptag[i].style.backgroundColor='yellow'
//     }
// }

// var demo=document.getElementsByClassName('th');
// console.log(demo);
// demo[0].style.backgroundColor='lightgrey'
// ptag[1].style.color='red'
// ptag[1].style.fontSize='30px'
// ptag[0].style.color='white'
// ptag[2].style.color='white'
// ptag[1].style.padding='10px'
// ptag[2].style.padding='10px'

// element inner content change method
var second=document.getElementById('second');
var third=document.getElementById('third');
var fourth=document.getElementById('fourth');

second.innerHTML='<b> welcome </b>';
third.innerText='<b>good morning</b>';
fourth.textContent='<u> how are you</u>';

// console.log(second);
// console.log(third);
// console.log(fourth);

var h1=document.createElement('h1');
h1.innerText='js tutorial';
document.body.append(h1);
// console.log(h1);
var div=document.createElement('div');
document.body.append(div)
var h2=document.createElement('h2');
h2.innerText='abc tutorial';
div.append(h2)

div.innerHTML +='<h1>first head </h1>';
var h1=document.createElement=('h1');
// h1.innertext=('div head');
// div.append(h1)
// document.body.append(div)

