
let fruits=['mango','apple','orange','banana','kiwi'];
// 1.array length
console.log('array length()=',fruits.length);

// 2.array toString()
console.log('array tostring()=',fruits.toString());

// 3.array at()
console.log('array at()=',fruits.at(0));
console.log('array at()=',fruits.at(4));

// 4.array join()
console.log('array join()=',fruits.join(" , "));
console.log('array join()=',fruits.join(" "));
console.log('array join()=',fruits.join(" banana "));
console.log('array join()=',fruits.join(" 1"));

// 5.array pop() 
console.log('array pop()=',fruits.pop());
// console.log('array pop()=',fruits.pop());
// console.log('array pop()=',fruits.pop());

// 6.array Push()
console.log('array push()=',fruits.push());
fruits.push('strawberry');
console.log('array push()=',fruits);

// 7.array shift()
console.log("array shift()=",fruits.shift());
// console.log("array shift()=",fruits.shift());

// 8.array unshift()
console.log('array unshift()=',fruits.unshift());
fruits.unshift('watermelon');
console.log('array unshif()=',fruits);

// 9.array concat()
let name1=['kumar','ramesh','raju','ram','ravi','naveen'];
let name2=['mango','orange','apple','kiwi'];
let name3=['1','2','3','4','5','6','7'];
console.log('array concat()=',name1.concat(" ",name2," ",name3));

// xxx ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ xxx

// recall
//  1.array  length
console.log('array length()=',name1.length);
// 2.array to string()
console.log('array to string()=',name1.toString());
// 3.array at()
console.log('array at()=',name1.at(4));
console.log('array at()=',name1.at(-3));
// 4.array join()
console.log('array join()=',fruits.join('')); // without space
console.log('array join()=',fruits.join(' ')); // width space
console.log('array join()=',fruits.join(' 1'));
console.log('array join()=',fruits.join(' pineapple '));
// 5.array pop()
console.log('array pop()=',name1.pop());
console.log('array pop()=',name1.pop());
// 6.array push()
console.log('array push()=',fruits.push()); // ithu length kaatum
    //  (or)
    fruits.push('balck berry')
console.log('array push()=',(fruits)); // ithu new value add pannum
// 7.array shift()
console.log('array shift()=',name2.shift());
console.log('array shift()=',name2.shift());
// 8.array unshift()
console.log('array unshift()=',name3.unshift()); 
    //   (or)
    name3.unshift('');  
console.log('array unshift()=',(name3));
// 9.array.concat()
let name4=['a','b','c','d','e','f','g','h'];
let name5=['i','j','k','l','m','n','o'];
let name6=['p','q','r','s','t','u','v','w','x','y','z'];
console.log('array concat()=',name4.concat(name5,name6));


       

















