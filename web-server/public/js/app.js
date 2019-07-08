console.log(`Client side javascript file is loaded!`);
const address = 'Portland';
fetch(`http://localhost:3000/weather?address=${address}`)
.then((response)=>{
  response.json().then((data)=>{
    if(data.error){
      console.log(data.error)
    } else {
      console.log(data.place);
      console.log(data.summary);
    };
  });
});