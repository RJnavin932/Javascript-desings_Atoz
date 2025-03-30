// Even Number or Odd Number

// let evenno = new Promise((resolve,reject)=>{
//     let no = Number(prompt("enter the number"));

//     if(no%2 == 0){
//         resolve("event no")
//     }
//     else{
//         reject("odd no");
//     }
// });

// evenno.then((data)=>{
// console.log(data);

// }).catch((err)=>{
// console.log(err);

// })


// function evenno(){
//    return  new Promise((resolve,reject)=>{
//         let no = Number(prompt("enter the number"));
    
//         if(no%2 == 0){
//             resolve("event no")
//         }
//         else{
//             reject("odd no");
//         }
//     });
// } 


// evenno().then((data)=>{
// console.log(data);

// }).catch((err)=>{
// console.error(err);

// })

// let data = ["ram","raja","book","data","link"];

// console.table(data);

// vowels or Not vowels

// function  vowels(){
//     return new Promise((resolve,reject)=>{
//         let letter=prompt('Enter the letter');
//         if(letter=='a' || letter=='e'||letter=='o' ||letter=='i' ||letter=='u'){
//             resolve('it is vowels letter');
//         }
//         else{
//             reject('it is not vowel');
//         }
//     });
// }
// vowels().then((res)=>{
//     console.log(res);
// }).catch((res)=>{console.log(res);
// })

// Negative number or Posstive number

// function number(){
//     return new Promise((resolve,reject)=>{
//         let no=Number(prompt('Enter the number'));
//         if(no >=0){
//             resolve('posstive Number');
//         }
//         else{
//             reject('Negative Numbber');
//         }
//     })
// }
// number().then((res)=>{
//     console.log(res);
// }).catch((res)=>{console.log(res);
// });


// function number(){
//     return new Promise((resolve,reject)=>{
//         let no=Number(prompt('enter the number')); 
//         if(no>=0){
//             resolve(no);
//         }
//         else{
//             reject('Negative number : ' +no);
//         }
//     });
// }

// function evenno(num){
//     return new Promise((resolve,reject)=>{
    
//        if(num%2==0){
//         resolve('even number : '+num);
//        }
//        else{
//         reject('odd number : '+num);
//        }
//     });
// }
// number().then((file_data)=>{
//     console.log(file_data);

//     return evenno(file_data);
// }).then((res)=>{
//     console.log(res);
// })
// .catch((er)=>{
//     console.log(er);
// }).finally(()=>{
//     console.log('programe completed'); 
// });


// try catch throw 

// function demo(){
//     try {
//         let age=Number(prompt('enter the age'));
//         if(age<18){
//            throw new Error('Error Show: Not Eligible');
//         }
//         if(isNaN(age)){
//             throw new Error("Is Not a number,Please Reenter age"); 
//         }
//         else{
//             console.log('Eligible: ' +age); 
//         }
//     }
//     catch (error) {
//         console.log(error.message);
//     //    console.error(error.message);
//     }finally{
//         console.log('programe ented');
//     }  
// }
// demo()

