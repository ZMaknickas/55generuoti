const genDOM=document.querySelector('.btn');
const inputDOM=document.querySelector('.input');

genDOM=document.addEventListener('click',  () => {    
    const select='abcd21';
    for (i=0; i<=5; i++) {
        const num=Math.floor(Math.random()*6)
        inputDOM.value+=select[num];    
    }
});