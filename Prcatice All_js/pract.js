//  practie.1

let fruit = 'apple';
oddoreven = (fruit) => {
    if (fruit.length % 2 == 0) {
        console.log('even', fruit.length);
    }
    else {
        console.log('odd', fruit.length);
    }
}
oddoreven(fruit)

let animal = 'cats';
oddoreven = (animal) => {
    if (animal.length % 2 == 0) {
        console.log('even', animal.length);

    } else {
        console.log('odd', animal.length);
    }
}
oddoreven(animal);

// practice.2

// even push find call back function with foreach method
var tnumber = [1, 3, 2, 6, 4, 5];
var fun = ((tnumber, cb) => {
    even = [];
    tnumber.forEach((value, index) => {
        if ((value == index) && (value % 2 == 0)) {
            even.push(tnumber[value]);
        }
    });
    cb(even);
});
fun(tnumber, (numbe) => {
    console.log(numbe);
});

// // ex.2
var tnumber1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var fun1 = ((tnumber1, cb) => {
    even = [];
    tnumber1.forEach((value, index) => {
        if ((value == index) && (value % 2 == 0))
            even.push(tnumber1[value]);
    });
    cb(even);
});
fun1(tnumber1, (num) => {
    console.log(num);
});

// // ex.3
var tnumber2 = [1, 2, 3, 4, 5];
let fun2 = ((tnumber2, cb) => {
    even = [];
    tnumber2.forEach((value, index) => {
        if ((value == index) && (value % 2 == 0)) {
            even.push(tnumber2[value]);
        }
    });
    cb(even)
});
fun2(tnumber2, (result) => {
    console.log(result);
})

// odd even callback function with filter method
// ex.1
var tnumber3 = [1, 3, 2, 6, 4, 8, 6];
var fun3 = ((tnumber3) => {
    // even=[];
    var number1 = tnumber3.filter((value, index) => {
        return ((value == index) && (value % 2 == 0)) ? value : '';
    });
    console.log(number1);

});
fun3(tnumber3, (numb) => {
    console.log(numb);
});

// ex.2
var tnumber4=[0,1,2,3,4,5,6,7,8];
var fun4=((tnumber4)=>{
   var num2=tnumber4.filter((value,index)=>{
     if((value==index)&&(value%2==0)){
        return value;
     }
   });
   console.log(num2);
});
fun4(tnumber4,(result1)=>{
    console.log(result1);
});

// ex.3
var tnumber5=[1,2,3,4,5,];
var fun5=((tnumber5)=>{
    var insitefun=tnumber5.filter((value,index)=>{
        return ((value==index)&&(value%2==0))?value:'';
    });
    console.log(insitefun);
});
fun5(tnumber5,(result2)=>{
    console.log(result2);
});

// odd even callback function with map method with return and without return
// ex.1
var tnumber6=[0,1,2,3,4,5,6,7,8];
var mfun=((tnumber6)=>{
    var func=tnumber6.map((value,index)=>{
       return ((value==index)&&(value%2==0))?value:'';
    });
    console.log(func);
});
mfun(tnumber6,(result3)=>{
    console.log(result3);
});
//    (or)
var tnumber7=[0,1,2,3,4,5,6,7,8];
var mfun1=((tnumber7)=>{
    tnumber7.map((value,index)=>{
       if ((value==index)&&(value%2==0)){
           console.log(value);    
       }
    });
    // console.log(func);
});
mfun1(tnumber7,(result4)=>{
    console.log(result4);
});

// ex.2
var tnumber8=[1,3,2,6,4,8];
var tfun=((tnumber8)=>{
    tnumber8.map((value,index)=>{
        if ((value==index)&&(value%2==0)){
            console.log(value);
        }
    });
});
tfun(tnumber8,(result5)=>{
    console.log(result5);
});

// practice.3


 let arr=[4,'/',5];
 let val=0;
 let test=(data)=>{
    if(data[1]=='+'){
        val =data[0]+data[2];
    }
    else if(data[1]=='-'){
        val =data[0]+data[2];
    }
    else if(data[1]=='*'){
        val =data[0]+data[2];
    }
    else if(data[1]=='/'){
        if(data[2] != 0){
            val = data[0] / data[2];
        }
        else{
            val = undefined;
        }
    }
    console.log(val);
    
 }
 test(arr);
 


let sum_arr = [1,2,3,4];

let sumarr = (data)=>{
let result = [];


data.forEach((_,i)=>{
    let sum = 0;

    data.forEach((num,index)=>{
        if(i != index){
            sum += num; // sum = sum + num; ==> sum += num;
        }
    })
    result.push(sum);
})
return result;
}

console.log("Sum Array : "+ sumarr(sum_arr));

// let long='my name is jaya naveen ';
// let longword=(data)=>{
//     let bigvalue=0;
//     let sarr=data.split(" ");
//     let bigword=[];
// sarr.forEach((value)=>{
//     console.log(value+'='+value.length);
//     if (bigvalue<=value.length){
//         bigvalue=value
//         bigword.push(value)
//     }
//     console.log(bigvalue);
//     return bigword;   
// })

// }
// console.log(longword(long));


let num=[1,2,3,4];
let mynum=(data)=>{
    let result=[];
  data.forEach((_,index)=>{
    let add=0;
    data.forEach((value,i)=>{
        if (index!=i){
              add+=value
        }
    })
    result.push(add);
  })
  return result;
}
console.log(mynum(num));


// longestword
let mylongword='hello darkness my old friend';
let myfun=(mydata)=>{
    let bigvalue=0;
     myarr=mydata.split(' ');
    let bigword=[];
    myarr.forEach((element)=>{
        // console.log(element,'=',element.length);
        if(bigvalue <= element.length){
            bigvalue = element.length
            bigword=element;
        } 
        // console.log(bigvalue);
    }) 
    return bigword;
}

console.log(myfun(mylongword));

let mylongword2='hello there mate';
let myfun2=(mydata2)=>{
    let myword=0;
    array=mydata2.split(' ');
    let myvalue=[];
    array.forEach((v)=>{
        if(myword<v.length){
            myword=v.length;
            myvalue=v;
        }
    })
    return myvalue;
}
console.log(myfun2(mylongword2));

let mylongword3='kayalas toy is plastic';
let myfun3=(data3)=>{
    let bigvalue2=0;
    myarr2=data3.split(' ');
    let bigword2;
    myarr2.forEach((myval)=>{
        if(bigvalue2<myval.length){
            bigvalue2=myval.length;
            bigword2=myval;
        }
    })
    return bigword2;
}
console.log(myfun3(mylongword3));

let letter=['a','a','b','a','b','a'];
let myres=[]
letter.forEach((myvalue,myindex)=>{  
    myvalue=='a'?myres.push(myindex):''; })
    console.log(myres); 

let mynum1=[1,5,5,2,7];
let numresult=[];
mynum1.forEach((v,i)=>{v==5?numresult.push(i):'';})
console.log(numresult);


let mynum2=[1,5,5,2,7];
let op=[];
mynum2.forEach((d,e)=>{d==7?op.push(e):'';})
console.log(op);

let myuser={'name':'naveen','age':20}
console.log(myuser);
myuser.city??='tuty';
console.log(myuser);
console.table(myuser);
console.log(typeof myuser);

let res=tabel=2,i=1
do {
    console.log(tabel+'x'+i+'='+(tabel*i));
    i++
} while (i<=10);

let marks=40
if(marks>=35){
    if((marks>=90)&&(marks<=100)){
        console.log(marks+'='+'A GRADE');
    }
   else if((marks>=70)&&(marks<=80)){
        console.log(marks+'='+'B GRADE');
    }
    else if((marks>=50)&&(marks<=60)){
        console.log(marks+'='+'C GRADE');
    }
    else{
        console.log(marks+'='+'PASS MARK');
    }
}
else{
    console.log(marks+'='+'Fail');
}
