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
        const highTemp = data.highTemp;
        const retTemp = data.temperature;
        const retPrecip = data.precip;
        messageOne.textContent = data.place;
        messageTwo.textContent = (`Currently ${retTemp}°F degrees with ${retPrecip}% chance of rain. ${retSummary} Possible high temperature around ${highTemp}°F, today.`);
      };
    });
  });
})