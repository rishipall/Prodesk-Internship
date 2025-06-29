const one = document.querySelector('.form')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const next = document.querySelector('.next')
const formstep = document.querySelectorAll('section')
console.log(formstep);
let count = 0
next.addEventListener("click",function(elem , idx){
    count++
    if(count==1){
   two.style.display = "block"


  
    }
    if(count==2){
   three.style.display = "block"
   
    }
    if(count==3){
   four.style.display = "block"
  
   
    }
    
    
})
