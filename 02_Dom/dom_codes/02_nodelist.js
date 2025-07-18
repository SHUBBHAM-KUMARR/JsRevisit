const cont = document.querySelector('span')
cont.addEventListener('click',()=>{
  cont.style.display = "none";
  
})// here selcted  span and set its display property to none

// query selector all 
const allH1 = document.querySelectorAll(".testH1")
allH1[0].style.color = "red"

const newALlh1 = Array.from(allH1)
newALlh1.forEach((val)=>(val.style.color = "yellow"))//color changed to yellow