//
 function eventfired()
{
  console.log('Entering Promise')
  fetch('http://localhost:8080/HollywoodFilmFetch',{method:'GET',mode:'cors',headers:{'Content-type':'application/json'}})
  .then((res)=>
  {
    if(res.ok)
    {
      return res.json();
    }
    else{
      throw new Error('response status code exceeded 200')
    }
  })
  .then((data)=>
  {
    let para=document.getElementById('Movie')
    para.innerText='';
    const obj=JSON.stringify(data[0],null,5)
    console.log(JSON.parse(obj))
    const realOBJ=JSON.parse(obj)
    // para.innerText=obj;
    for(let i in realOBJ)
    {
      console.log(i.toString() + " : " + realOBJ[i].toString())
      para.innerText+=i.toString() + " : " + realOBJ[i].toString()+ "\r\n";
    }

    console.log(obj)
    console.log('data stringified successfully')
    
    
    
      /*function formatObject(data) {
      return JSON.stringify(data, null, 2); 
      }
    para.innerText = formatObject(data[0]); */
    

  })
  .catch((error)=>
  {
    console.log(error.toString())
    throw new Error(error)
  })
}
  
document.addEventListener('DOMContentLoaded',()=>
  {
    console.log("Waiting")
    let element = document.getElementById("btn")
    console.log(element)
    element.addEventListener("click",eventfired)
  })
