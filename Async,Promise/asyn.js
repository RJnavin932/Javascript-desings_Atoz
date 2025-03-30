
// asyn await

async function mymsg(){
    let msg=new Promise((resolve,reject)=>{
        let data=true;

        if(data){
            resolve('success')
        }
        else{
            
            reject('Failed')
        }
    });
    console.log(await msg)
}
mymsg()

// (or)

async function myfun() {
   try {
    let msg= new Promise((resolve,reject)=>{
        let data =false;
        
        if(data){
            resolve('success');
        }
        else{
            throw new Error("Failed error");
        }
       });
       console.log(await msg);
   } catch (error) {
    console.log(error.message);
   }
}
myfun()


// async function mymark() {
//    try {
//     let data=new Promise((resolve,reject)=>{
//         let mark=Number(prompt('Enter Your Mark')) 
//      if(mark>=35){
//         resolve('success you are pass')
//      }
//      else{
//         throw new Error("Error You are Failed");
//      }
//     });
//     console.log(await data);
//    } catch (error) {
//     console.log(error.message);
//    }finally{
//     console.log('programe End');
//    }
// }
// mymark();



async function vowels(){
    try{
        let data=new Promise((resolve,reject)=>{
            let letter=prompt('Enter any letter');
            if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
                resolve('Success It Is Vowel Letter');
            }
            else{
                throw new Error('Error Not A Vowel');
            }
        });
        console.log(await data);
    }catch(error){
       console.log(error.message);
    }finally{
        console.log('Programe End');
    }
}
vowels();

async function evenno(){
    try{
        let num=new Promise((resolve,reject)=>{
            let no=Number(prompt('Enter Valit Number'));
            if(no%2==0){
                resolve('Success Even Number');
            }
            else{
                throw new Error('Error Not A Even Number');
            }
        });
        console.log(await num);
    }catch(error){
        console.log(error.message);   
    }finally{
        console.log('Programe End');  
    }
} 
evenno()