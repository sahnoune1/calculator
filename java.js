function add(a,b){
    let x=parseInt(a,10);
    let y=parseInt(b,10)
    return(x+y);

}
function mult(a,b){
    let x=parseInt(a,10);
    let y=parseInt(b,10)
    return(x*y);
}
function divi(a,b){
    let x=parseInt(a,10);
    let y=parseInt(b,10)
    return(x/y);
}
function sub(a,b){
    let x=parseInt(a,10);
    let y=parseInt(b,10)
    return(x-y);
}
function operate (){
    let a=prompt("give me first number")
    let b=prompt("give me second number");
    let c=prompt("give me the operande")
    if (c==="+"){
        return(add(a,b))
    }
    else if (c==="*"){
        return(mult(a,b))
    }
    else if (c==="/"){
        return(divi(a,b))
    }
    else if (c==="-"){
        return(sub(a,b))
    }
}

const button=document.querySelectorAll(".butt");
const output1=document.querySelector(".output1");
const output2=document.querySelector(".output2");
console.log(output1);
button.forEach(butt=>{
    
     butt.addEventListener("click",()=>{
          
          output1.textContent=butt.textContent;
          
})  ;

});
button.forEach(butt=>{
    
    butt.removeEventListener("click",()=>{
         
         output1.textContent=butt.textContent;
         
})  ;

});