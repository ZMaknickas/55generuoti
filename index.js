const genDOM=document.querySelector(".btn");
const inputDOM=document.getElementById("input");


genDOM.addEventListener("click",  ()=> {    
    const select="abcd21";
    let pass="";
    for (i=0; i<=5; i++) {
        const num=Math.floor(Math.random()*5)
        pass+=select[num];
        console.log('test')    
    }
    inputDOM.value=pass;
});
