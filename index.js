const genDOM=document.querySelector(".btn");
const inputDOM=document.getElementById("input");
const copyEl=document.querySelector(".fa-copy");

genDOM.addEventListener("click",  ()=> {    
    const select="abcdefghijklmonpstuvyz[].!";
    let pass="";
    for (i=0; i<7; i++) {
        const num=Math.floor(Math.random()*(select.length-1))
        pass+=select[num];
        console.log('test')    
    }
    inputDOM.value=pass;
});

copyEl.addEventListener('click', ()=>{
    inputDOM.select();
    inputDOM.setSelectionRange(0, 999);
    navigator.clipboard.writeText(inputDOM.value);
});
