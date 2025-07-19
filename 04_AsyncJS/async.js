// console.log('shubham');
// console.log('shubham');
// setInterval(()=>{
//   console.log("shubham , from set interval");
  
// },2000)
const hexColorGenrator = function() {
  const range = '0123456789ABCDEF'; 
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += range[Math.floor(Math.random() * 16)];
  }
  return color;
};

const btnStr = document.getElementById('start');
const btnStp = document.getElementById('stop');
const textAr = document.getElementById('text');
 let interval;
btnStr.addEventListener('click', function() {
  // generate hex code every second
   if(!interval){
    interval = setInterval(() => {
    textAr.innerText = hexColorGenrator();
    document.getElementById('screen').style.background = textAr.innerText
  }, 1000);
   }
});

btnStp.addEventListener('click',()=>{
  clearInterval(interval)
  interval= null;
}
)