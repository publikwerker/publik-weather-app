// const square = function (x){
//   return x*x;
// }

// const square = (x) => {
//   return x*x;
// }

// const square = (x) => x*x;

// console.log(square(4));

const event = {
  name: 'birthday party',
  guestList: ['Jason', 'Else', 'Felix'],
  printGuestList() {
    console.log(`Guest list for the ${this.name}`)
    this.guestList.forEach((guest)=>{
      console.log(`${guest} is attending the ${this.name}`)
    })
  }
}

event.printGuestList();