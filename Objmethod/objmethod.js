// object methods  //Enumurable
// 1.hasownproperty
const user={
    name:'naveen',
    age:22,
    fullname:()=>{
      console.log('fullname function');
    }
  }
const address={
    street:'polpettai',
    city:'thoothukudi'
}
const dob={
    birth:'09/03/02',
    age:22
}
console.log(address.hasOwnProperty('street'));
// console.log('value of'+address.at(0));
// console.log(user);

// Object.assign(user,address,dob);
// console.log(user);
console.log(address.hasOwnProperty('age'));

// Object.seal(user)
// user.name='java'
// delete age;
// console.log(user);
// console.log(Object.is(user.age,dob.age));


// Object.freeze(user)
// user.name='java'
// console.log(user);

// number methods
const number=500.1231231
console.log(typeof number.valueOf());
console.log(typeof number.toString());
console.log(number.toFixed(3));
console.log(number.toFixed(2));

// Math methods
console.log(Math.PI);
console.log(Math.abs(-33));
console.log(Math.ceil(21.34));
console.log(Math.floor(21.9));
console.log(Math.max(2,1,3,5,4,8));
console.log(Math.min(2,3,5,4,6));
console.log(Math.random()*10);
console.log(Math.ceil(Math.random()*10));
console.log(Math.pow(4,4));
console.log(Math.round(33.50));
console.log(Math.sign(6));
let num1=(Math.random()*100).toFixed()
let num2=(Math.random()*100).toFixed()
console.log('num1:'+num1+'num2:'+num2,'result='+(num1>=num2?('num1:'+num1):('num2:'+num2)));

// number methods
const no=512.65809
console.log(typeof no.valueOf());
console.log(typeof no.toString());
console.log(no.toFixed(2));
console.log(no.toFixed());

// Math methods
console.log(Math.PI);
console.log(Math.abs(-20));
console.log(Math.ceil(35.2));
console.log(Math.floor(34.9));
console.log(Math.max(5,6,7,8,9,10));
console.log(Math.min(5,6,7,8,9,10));
console.log(Math.random()*5);
console.log(Math.ceil(Math.random()*5));
console.log(Math.sign(190));
console.log(Math.round(50.50));
console.log(Math.pow(5,5));
let num=(Math.random()*20).toFixed()
let mynum=(Math.random()*10).toFixed()
console.log('num:'+num,'mynum:'+mynum,'result='+(num>=mynum?('num:'+num):('mynum:'+mynum)));




























