
let darkMode=localStorage.getItem('darkMode');
let  darkModeToggle=document.querySelector('#btn');

const enableDarkMode = ()=>{
    document.body.classList.add('darkClass');
    darkModeToggle.innerHTML = `<img src=${'./icon/darrmode.png'} width='20px' height='20px'/>`
    localStorage.setItem('darkMode' , 'enabled');
}
const disableDarkMode = ()=>{
    document.body.classList.remove('darkClass');
    darkModeToggle.innerHTML = `<img src=${'./icon/sun_17216762.png'} width='20px' height='20px'/>`
    localStorage.setItem('darkMode',null)   
}

if( darkMode === 'enabled'){
    enableDarkMode();
}else{
    darkModeToggle.innerHTML = `<img src=${'./icon/sun_17216762.png'} width='20px' height='20px'/>`;
}
    darkModeToggle.addEventListener('click',()=>{
    darkMode=localStorage.getItem('darkMode') ;

    if(darkMode !=='enabled'){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
 })