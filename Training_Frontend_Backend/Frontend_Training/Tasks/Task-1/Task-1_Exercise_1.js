/*Exercise-1:

Suppose an array of firstName, email, basketValue triples are given. 
Create ONE JavaScript expression that puts a default value of '-' and 0 to the firstName or basketValue fields respectively,
whenever the firstName or the basketValue keys are missing. Remember to name your new object, newBaskets or your code won’t run.

Example: 
let baskets = [ 
{ firstName: 'Andrew', basketValue: 55 },
{ firstName: 'Andrew' },
{ basketValue: 55},
{}
]
newBaskets : [
{ firstName: 'Andrew', basketValue: 55 },
{ firstName: 'Andrew', basketValue: 0 },
{ firstName: '-', basketValue: 55},
{ firstName: '-', basketValue: 0}
]
*/
Solution:

//1.Destructuring

const newBaskets = baskets.map(({firstName = '-', basketValue = 0}) => ({firstName,basketValue}));
  console.log(newBaskets);

//2.Using “||”

 const newBaskets1 = baskets.map((item)=>{
 return {firstName:item.firstName || '-',basketValue:item.basketValue || 0}
  });
 console.log(newBaskets1);
