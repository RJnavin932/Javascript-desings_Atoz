// Object Topic

var name = "gladson";
var age = "29";
var study = "mca";

var details = ["gladson","29","mca"];

// object create 
// step 1 : { }
// step 2 : key : value,

var person = {
    
    name : "gladson",  // key : value
    age : 29,
    study : "MCA",
    inital : "A",
    married : true,
    hobby : ["reading,sports,singing"],
    Address : {
        street : "polepettai",
        city:"Tuticorin",
    },

    fullname: () => { // method
        return  this.inital;
        
    }

};
let entries = Object.entries(person);
let keys = Object.keys(person);
let value_1 = Object.values(person);
console.log("person :" + person.inital);
console.log("name : "+ person.name);
console.log("Age : "+ person.age);
console.log("Hobby : "+ person.hobby);
console.log("Address : "+ person.Address.street, person.Address.city);
console.log("Full name : "+ person.fullname());
console.log("initial " + person["inital"],person['name']);
console.log(keys );
console.log(value_1);
console.log(entries);


// how to get value from object 
//  . (dot)  => objectname.key ==> person.name
//  [] (square bracket) ==> objcetname["key"]   => person["name"]

// Object.keys(person) ==> ['name', 'age', 'study', 'inital', 'married', 'hobby', 'Address', 'fullname']

// Object.values(person) ==> ['gladson', 29, 'MCA', 'A', true, Array(1), {…}, ƒ]

// 



let person1 = {
     
        my_initial : "R",
        my_name : "naveen",
        my_study:'B.A(ECO)',
        my_age:22,
        my_phoneno:1234556,
        my_married:false,
        my_hobby:['games','reading'],
        my_Address:{
            my_street:'athimarapatti',
            my_city:'thoothukudi',
            pincode:628005
        

    },
    full_name:()=>{
        return this.my_name+this.my_name;  
     }
    }
let entries1=Object.entries(person1);
let value1=Object.values(person1);
let key1=Object.keys(person1);
console.log('NAME:'+person1.my_name.toLocaleUpperCase());
console.log('AGE:'+person1.my_age);
console.log('STUDY:'+person1.my_study);
console.log('HOBBY:'+person1.my_hobby);
console.log(entries1);
console.log(key1);
console.log(value1);

let student=[
    {
        stdname:'raja',
        stude_std:8,
        status:'pass',
    },
    {
        stdname:'ram',
        stude_std:7,
        status:'pass',
    },
    {
        stdname:'ramesh',
        stude_std:6,
        status:'fail',
    },
    {
        stdname:'raj',
        stude_std:8,
        status:'fail',
    }
]
// let stude_std=student.filter((data)=>{
//     return data.stude_std==0;
// })
    let pass=[];
    let fail=[];
    let filterstudent=student.filter((data)=>{
        if (data.status=='pass'){
            pass.push(data)
        }
        else{
            fail.push(data)
        }
    
})
console.log(pass,fail);
let bloodgroup=['b+','A+','o+','o-'];
let stdvalue=Object.values(student);
let stdkey=Object.keys(student)
let stdentries=Object.entries(student);
console.log(stdvalue);
console.log(stdkey);
console.log(stdentries);
// student.forEach((data,i)=>{
//     i==0?delete data:'';
// })
let result=student.filter((v,i)=>{
    return i=0?v:null;
})
console.log(result);

 student.map((value,index)=>{
    value.blood=bloodgroup[index]
 })

 
 

 
