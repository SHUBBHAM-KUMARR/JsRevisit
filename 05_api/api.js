const requestUrl = "https://api.github.com/users/SHUBBHAM-KUMARR";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);

xhr.onreadystatechange = ()=> {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
  //  console.log(xhr.responseText);
  const data = xhr.responseText
     console.log(typeof data);//string in most cases api request gives a string type of data


    //  this converts strinf data to an object data
     const dataNew = JSON.parse(xhr.responseText)
    //  console.log(dataNew, typeof dataNew);//object
     
     console.log(dataNew.name);
     console.log(data.length);//1476
     
     console.log(dataNew.avatar_url);//https://avatars.githubusercontent.com/u/186911871?v=4
   console.log(dataNew.bio);
     
  }
}
xhr.send();

