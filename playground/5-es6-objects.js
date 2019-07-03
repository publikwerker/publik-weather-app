//Object property shorthand

const name = 'Jason';
const userAge = 45;
 const user = {
   name,
   age: userAge,
   location: "Portland"
 }

 console.log(user);

 //Object destructuring

 const product = {
   label: 'squirrel skull',
   price: 20,
   stock: 101,
   salePrice: undefined,
 }

//  const { label:productLabel, price, rating=5 } = product;



const transaction = ( type, {label, price}, rating=5) => {
  console.log(`${type}: ${label} has the price of ${price}, and has ${rating} stars.`);
}

transaction('wholesale', product);