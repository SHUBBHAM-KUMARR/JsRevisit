// we cannot learn dom without visualising the nodes and childrens 

// this code file links the index.html file of this directory

const rootElement = document.getElementById('html')
rootElement.style.background="black"
rootElement.style.padding="0px"
rootElement.style.margin="0px"

const  firstDomLearning = document.getElementById('header')//here we are calling  the html document's div whose class is first

firstDomLearning.style.width = "100vw";
firstDomLearning.style.height = "80px"
firstDomLearning.style.background = " slategray"
firstDomLearning.style.color = " white"
firstDomLearning.style.padding="12px"
// so in similar way we can maipulate other nodelist and properties

// not practisiable in real world as it leads inline styling of elements