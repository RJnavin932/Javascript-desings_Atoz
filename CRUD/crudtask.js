items=[];
var fname=document.getElementById('crud');
fname.addEventListener('submit',(event)=>{
    event.preventDefault();
    var iname=document.getElementById('iname').value;
    console.log(iname);
    items.push(iname);
    iname.value=''
    showlists()
})
    var list=document.getElementById('items');
     function showlists(){
        list.innerHTML= " "
        items.forEach((val,index) => {
            let li =document.createElement('li');
           
     li.innerHTML=`<input type="checkbox"  id="check${index}" onClick="edit(${index})" class="checkbx"> <span id="span${index}">${val}</span>
     <div class ="imgpare"><img src="./javascript/icon/delete.png" alt=""  onClick="delval(${index})" class="img" > </div> `
            console.log(val,index);
            list.appendChild(li)
    
        });
    }   
 function edit(i){
    
    let checkBtn=document.getElementById(`check${i}`);
    let spanText=document.getElementById(`span${i}`);   
    if(checkBtn.checked){                                                
        spanText.style.textDecoration = 'line-through';
    }
    else{
        spanText.style.textDecoration = 'none'; 
    }
 }

 function delval(i){
    console.log(i);
    items.splice(i)
    event.preventDefault();
    showlists()
 }