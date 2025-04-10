
let students=[
    {
        rno:'s101',
        tamil:50,
        eng:60,
        maths:70,
    },
    {
        rno:'s102',
        tamil:56,
        eng:40,
        maths:55,
    },
    {
        rno:'s103',
        tamil:40,
        eng:35,
        maths:55,
    },
    {
        rno:'s104',
        tamil:70,
        eng:40,
        maths:40,
    },
    {
        rno:'s105',
        tamil:35,
        eng:40,
        maths:60,
    },
]
let blood=['o+','a+','b+','a-','a1+'];
let entries=Object.entries(students);
let values=Object.values(students);
let totalmarks=[];
let keys=Object.keys(students);
console.log(students.at(0));
console.log(entries);
console.log(keys);
console.log(values);

students.map((value,index)=>{
    value.bloodgroup=blood[index]
    value.totalmarks=value.tamil+value.eng+value.maths;
    console.log(value);
    value.totalmarks>=151?value.medal='gold':'';
});
let mystu=students.filter((value,i)=>{
   return i!=0?value:null;
})
console.log(mystu);



let arr1=[4,'+',5,'*',7,'-',6];
let vale=[];
let test=(data)=>{   
 if ((data[1]=='+')&&(data[5]=='-')&&(data[3]=='*')){
        vale=data[0]+data[2]*data[4]-data[data.length-1]
 }
//  if ((data[1]=='+')&&(data[5]=='-')&&(data[3]=='*')){
//         vale=data[0]+data[2]*data[4]-data[data.length-1]
//  }
 console.log(vale);
}
test(arr1);

let longestword='aaaaaaaaa bbbbb cccccccc dddddddddddd eeee';
let arr=(data1)=>{
    let longvalue=0;
    let longestword=data1.split(',');
    let bigword=[];
   longestword.forEach(element => {
    console.log(element+'='+element.length);
    if(longvalue<=element.length){
        longvalue=element.length
        bigword.push(element)
    }
   });
   console.log(longvalue);
   return bigword;
}
console.log(arr(longestword));


let array=[1,2,3,4];
let result=[];
let tsum=(array)=>{    
    array.forEach((_,i) => {
       let sum=0;
       array.forEach((v,inde)=>{
        if(i!=inde){
            sum+=v;
        }
       });
       result.push(sum)
    });
    return result;
}
console.log(tsum(array))

let my_arr=[1,2,3,4,5];
let mysum=(my_arr)=>{
    let myresult=[];
    my_arr.forEach((_,myindex)=>{
        let mysum=0;
        my_arr.forEach((myvalue,myind)=>{
            if(myindex!=myind){
                mysum+=myvalue
            }
        });
        myresult.push(mysum);
    });
    return myresult;
}
console.log(mysum(my_arr));


let voters=[
    {
        name:'ravi',
        age:20,
        vote:'eligible',
        sex:'male'
    },
    {
        name:'ram',
        age:15,
        vote:'noteligible',
        sex:'male'
    },
    {
        name:'ramesh',
        age:23,
        vote:'eligible',
        sex:'male'
    },
    {
        name:'priya',
        age:20,
        vote:'eligible',
        sex:'female'
    },
    {
        name:'ramya',
        age:16,
        vote:'noteligible',
        sex:'female'
    },
    {
        name:'divya',
        age:25,
        vote:'eligible',
        sex:'female'
    }
]
let votersvalue=Object.values(voters)
console.log(votersvalue);
let voterskeys=Object.keys(voters)
console.log(voterskeys);
let votersentries=Object.entries(voters)
console.log(votersentries);

// let vote=voters.filter((data)=>{
//     return data=[];
// })
let eligible=[];
let noteligible=[];
let filtervoters=voters.forEach((mydata)=>{
    if(mydata.vote='eligible'){
        eligible.push(mydata);
    }
    else{
        noteligible.push(mydata);
    } 
})
console.log(eligible,noteligible);

