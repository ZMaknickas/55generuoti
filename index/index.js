const btEl=document.querySelector(".btn");
const inputEl=document.getElementById("input");
const copyIconEl=document.querySelector(".fa-copy");
const alertcontainerEl=document.querySelector(".alert-container");

btEl.addEventListener("click", ()=>{
    createPassword();
})

copyIconElPassword("click")

function createPassword()
{
    const chars="abcd21";
    const passwordLength=6;
    let password="";
    for (let i=0; i<passwordLength; i++)
    {
        const randomNum=Math.floor(Math.random()*chars.length)
        password+=chars[randomNum]
    }
    inputEl.value=password;
    alertcontainerEl.innerText=password+
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 999);
    navigator.clipboard.writeText(inputEl.value);
}