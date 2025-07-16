const mainDiv = document.createElement('div')
console.log(mainDiv);

mainDiv.className = "mainContainer";
mainDiv.id = Math.round(Math.random()*10 + 1)
mainDiv.setAttribute("name","main")

document.body.appendChild(mainDiv)//here document's child node body appends child mainDiv 