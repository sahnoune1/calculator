
const button=document.querySelectorAll(".butt");
const display=document.querySelector(".dis");
const up=document.querySelector(".up");



let dotClicked=false;
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
        if (content!=="equal" && content!=="delete"&& content!=="."){
        currentValue+=content;
        console.log(currentValue);
        display.innerHTML=currentValue;
        dotClicked=false;
        }
        if (content!=="equal" && content!=="delete" && content==="." && dotClicked===false){
           if (currentValue.includes(".")){
            return;
           }
           else {
          currentValue+=content;
          console.log(currentValue);
          display.innerHTML=currentValue;
          dotClicked=true;
           }
          }
        

      

      

        if (content==="equal"){
              let operations=currentValue.split(/[\s+|\+|\-|\*|\/]/);
          let result=0;
          console.log(operations);
          let res=0;
          let stack=[];
          for (let i=0; i<operations.length;i++){

            if (operations[i]==="*"){
              stack=operations.splice(i-1,3);
              console.log(operations);
              console.log(stack);
              res = parseFloat(stack[0])*parseFloat(stack[2]);
              console.log(res);
              operations.splice(i-1,0,res);
              console.log(operations);

              i--;
            }
            if (operations[i] === "/") {
              stack = operations.splice(i - 1, 3);
              console.log(operations);
              console.log(stack);
              res = parseFloat(stack[0]) / parseFloat(stack[2]);
              console.log(res);
              operations.splice(i - 1, 0, res);
              console.log(operations);

              i--;
            } 

          }
          
          for (let i=0;i<operations.length;i++){
         
            if (operations[i]==="+"){
              result =result+parseFloat(operations[i+1]);
              i=i+1;            
            }
      
            else if (operations[i]==="-"){
              result =result-parseFloat(operations[i+1]);
              i=i+1;
            }
            else {
              result+=parseFloat(operations[i]);
            
            }
         }
    
        
      display.innerHTML=result;
     
    };
   });
});

// The final result will be the top element on the stack


     
        
      
       
  

