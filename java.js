function add(a,b){
    return((a/1)+(b.slice(0,-1)/1));
            

}
function mult(a,b){
    return((a/1)*(b.slice(0,-1)/1));
}
function divi(a,b){
    return((a/1)/(b.slice(0,-1)/1));
}
function sub(a,b){
    return((a/1)-(b.slice(0,-1)/1));
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
const display=document.querySelector(".dis");
const up=document.querySelector(".up");
let currentValue="";
console.log(display);
button.forEach(button=>{
    
     button.addEventListener("click",(e)=>{
          
          let content=e.target.innerHTML;
          if (content==="delete"){
            up.innerHTML="";
            display.innerHTML="";
            currentValue="";
          }
          if (content!=="equal" && content!=="delete"){
          currentValue+=content;
          console.log(currentValue);
          display.innerHTML=currentValue;
          }

        

        

          if (content==="equal"){
            let operations=currentValue.split(/([\+\-\*\/])/);
            let result=0;
            console.log(operations);
            for (let i=0;i<operations.length-1;i++){
                
             
              
               if (operations[i]==="*"){
                result =result*parseInt(operations[i+1]);
              i=i+1;
            }
              else if (operations[i]==="+"){
                result =result+parseInt(operations[i+1]);
                i=i+1;            
            }
            else if (operations[i]==="/"){
              result =result/parseInt(operations[i+1]);
                i=i+1;
          }
          else if (operations[i]==="-"){
            result =result-parseInt(operations[i+1]);
             i=i+1;
        }
            else {
              result+=parseInt(operations[i]);
              console.log(result);
              console.log(operations[i+1]);
           
            
          }
        }
          display.innerHTML=result;
          
        
         
        };
      });
    });


