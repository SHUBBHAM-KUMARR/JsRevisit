const Container = document.getElementsByClassName('container')
const btn = document.getElementById('btn')
const dis = document.getElementById('show')

let a = prompt()
btn.addEventListener('click',()=>{
  dis.innerHTML = a;
})
heros