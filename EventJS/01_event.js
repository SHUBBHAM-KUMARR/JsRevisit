// document.getElementById('box3').onclick = () =>{alert("last box was clicked")}


document.getElementById('box2').addEventListener('dblclick',()=>{
  box2.style.backgroundColor= 'red'
}
) 

document.getElementById('mainContainer').addEventListener('click',(e)=>{
  mainContainer.style.backgroundColor ='pink'
  // console.log(e);//logs which type of event it is
  // console.log(e.timeStamp);//prints the  time of event since page load 
  // console.log(e.currentTarget);// targets  the snippet where event occur 
  // console.log("mainContainer");
})


// keyboard events
document.addEventListener('keydown', function(e) {
  // console.log(e.key);
  // console.log(e.key.length);//shows the length of string as our keyboard  events are string type data
  // console.log(e.keycode);//depricated
  
});
// bubbling and capturing =>event propgation
document.getElementById('box0').addEventListener('click',(e)=>{
  // console.log('from box0 to root or mainList');
  // console.log(e);
  // e.stopPropagation()
},false)//deafult false bubbles i.e. it takes path of event  from box0 to mainlist

// document.getElementById('mainList').addEventListener('click',(e)=>{
//   // console.log("from mainList to box0");
//   console.log(e.target);//produces the target on which the script is working
//   console.log(e.target.parentNode)
//   let removeIt = e.target.parentNode
//   removeIt.remove() // removes child of targetted  parent
// },true)// true captures the target i.e. box through parent  that is mainList 


//  target removal

document.getElementById('mainList').addEventListener('click',(e)=>{
  console.log(e.target);
  console.log(e.target.tagName);
  console.log(e.target.parentNode);
  if (e.target.tagName ==='DIV' ) {
    const remover = e.target.parentNode
  remover.remove()
  }
  // const remover = e.target.parentNode
  // remover.remove()//this reoves whole parent fi cilcked on li
  
})