const genDOM=document.querySelector('.btn');
const getDOM=document.getElementById('input');

genDOM=document.addEventListener('click', passw => {
    passw.preventDefault();
    getDOM.innerHTML=`<h1 class="password">${passw}</h1>`;
    let passw='';
    
    const select='abcd21';
    for (i=0; i<=5; i++) {
        const num=Math.floor(Math.random()*6)
        passw+=select[num];    
    }
});