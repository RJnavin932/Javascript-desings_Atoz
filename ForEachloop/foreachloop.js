// loops foreach,map and filter
// foreach ex.1
let names = ['ram', 'ravi', 'arun', 'ramesh'];
names.forEach((value, index, array) => {
  console.log('forecachloop:' + index + '=' + value);
  // console.log(array);
})
// ex.2
let tnames = ['ram', 'ravi', 'arun', 'ramesh'];
tnames.forEach((a, i) => {
  if (i % 2 == 0) {
    console.log("even names:" + a);
  }
})

// ex.3 only show index
let tnames2 = ['ram', 'ravi', 'arun', 'ramesh'];
tnames2.forEach((_, i) => {
  console.log(i);
})

// Map() method ex.1
let fnames = ['ram', 'ravi', 'arun', 'ramesh'];
fnames.map((value, index, array) => {
  console.log(index + '=' + value + '=' + array);
  console.log(value.toLocaleUpperCase());

})

// ex.2
let no = [1, 2, 3, 4, 5, 6, 7];
let fiveno = no.map((value) => {
  return value * 5;
})
console.log('no:' + no);
console.log('fiveno:', fiveno);

// filter method() ex.1
names.filter((value, index, array) => {
  console.log('filter ' + value + '+' + index + '=' + array);

})
// ex.2
// let=filtername=names.filter((value)=>{
// if(value.includes('s')){
//     return value;
// }
// })
// console.log(filtername);

// filter method with ternory opprator
let filtername1 = names.filter((value) => {
  return (value.includes('m')) ? value : '';
})
console.log(filtername1);

let num = [20, 30, 13, 15, 18, 40];
let eligible = num.filter((value) => {
  return (value >= 18);
})
console.log(eligible);

// practice 
// ex.1
let exam = [20, 35, 40, 50, 60, 80, 30, 34, 90];
let result = exam.forEach((value) => {
  if (value >= 35) {
    console.log('pass marks:' + value);
  }
  else {
    console.log('fail marks:' + value);
  }
});
//  ex.2
let letters = ['a', 'b', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'o', 'p', 'i', 'u'];
let vowels = letters.filter((value, index) => {
  if ((value == 'a') || (value == 'e') || (value == 'i') || (value == 'o') || (value == 'u')) {
    console.log(index + '=' + value.toUpperCase());
    return value;
  }
});
console.log('vowels =' + vowels);

// ex.3

let weather = [20, 30, 50, 60, 70, 90, 40, 45, 55, 15];
console.log("weather length:" + weather.length);

weather.forEach((value) => {
  if ((value >= 0) && (value < 10)) {
    console.log('it is very cold:' + value);
  }
  else if ((value >= 20) && (value < 30)) {
    console.log('weather is cold:' + value);
  }
  else if ((value >= 30) && (value < 40)) {
    console.log('weather is little bit cold:' + value);
  }
  else if ((value >= 40) && (value < 50)) {
    console.log('weather is warm:' + value);
  }
  else if ((value >= 50) && (value < 60)) {
    console.log('weather is so hot:' + value);
  }
  else {
    console.log('weather is much more hot:' + value);

  }
})

//  weather even numbers

let even = weather.filter((data) => {

  return data % 2 == 0 ? data : '';
})
console.log(even);

// negative possitive numbers
let numbe = [20, -1, -4, -5, -7, -8, 9, -6, 1, 2, 3, 4, 5];
let pn = numbe.forEach((value, index) => {
  if (value >= 0) {
    console.log('possitive Number:' + index + '=' + value);
  }
  else {
    console.log('negative number:' + index + '=' + value);

  }
});
let pn1 = numbe.filter((value) => {
  return (value % 2 == 1);
})
console.log('odd numbers:', pn1);
























