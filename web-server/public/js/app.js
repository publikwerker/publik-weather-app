const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const address = search.value;
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch(`/weather?address=${address}`)
  .then((response)=>{
    response.json().then((data)=>{
      if(data.error){
        messageOne.textContent = data.error;
      } else {
        const retSummary = data.summary;
        const retTemp = data.temperature;
        const retPrecip = data.precip;
        messageOne.textContent = data.place;
        messageTwo.textContent = (`Currently ${retTemp} degrees with ${retPrecip}% chance of rain. Forecast calls for ${retSummary.toLowerCase()}`);
      };
    });
  });
})