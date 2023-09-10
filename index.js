const mybutton = document.querySelector(".clique")
const pau = document.querySelector(".hidden") 
mybutton.addEventListener("click",()=>{
  if(pau.style.display == "none"){
    pau.style.display = "block"
    }else{pau.style.display = "none"}})
    