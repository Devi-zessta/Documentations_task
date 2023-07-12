Exercise-1:

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

Solution:

1.Destructuring

const newBaskets = baskets.map(({firstName = '-', basketValue = 0}) => ({firstName,basketValue}));
  console.log(newBaskets);

2.Using “||”

 const newBaskets = baskets.map((item)=>{
 return {firstName:item.firstName || '-',basketValue:item.basketValue || 0}
  });
 console.log(newBaskets1);




 Exercise 2:

Create a object (with name basketProto) with the following methods:
●	addToBasket( value ) adds value to the basket value,
●	clearBasket() sets the basket value to 0
●	getBasketValue() returns the basket value
●	pay() logs the message {getBasketValue()} has been paid, where {getBasketValue()} is the return value of the method with the same name. We can pay for the same basket as many times as we’d like. 


Solution:

const basketProto={

    basketvalue:0,
    addToBasket(value){
        this.basketvalue=this.basketvalue+value;
    },
   clearBasket(){
        this.basketvalue=0;
    },
   getBasketValue(){
        return this.basketvalue;
    },
    pay(){
        console.log(this.getBasketValue()); 
    }
  }
  basketProto.addToBasket(2)
  basketProto.pay()   // 2
  basketProto.clearBasket()
  basketProto.pay()   // 0
  basketProto.addToBasket(2)
  basketProto.addToBasket(2)
  basketProto.pay()   // 4
  
  
  

Exercise-3:
Create an object myBasket, and set its prototype to the object created in Exercise 2. 
Create an array field in myBasket, containing all the items that you purchase in the following format:
{ itemName: 'string', itemPrice: 9.99 }
Redefine the addToBasket method such that it accepts an itemName and an itemPrice. Call the addToBasket method in the prototype for the price administration, 
and store the itemName-itemPrice data locally in your array. Make sure you modify the clearBasket method accordingly.

Solution:

const basketProto={

    basketvalue:0,
    addToBasket(value){
        this.basketvalue=this.basketvalue+value;
    },
   clearBasket(){
        this.basketvalue=0;
    },
   getBasketValue(){
        return this.basketvalue;
    },
    pay(){
        console.log(this.getBasketValue()); 
    }
  }
const myBasket={
       basket:[],
       addToBasket(itemName, itemPrice)
     {
         super.addToBasket(itemPrice);
         this.basket.push({itemName,itemPrice});
    }
}
Object.setPrototypeOf(myBasket,basketProto);

myBasket.addToBasket("cake2",2)
myBasket.addToBasket("rice",22) 
myBasket.pay()   //    24
myBasket.clearBasket()
myBasket.pay()  // 0

Exercise 4:
Extend your solution in Exercise 3 by adding a removeFromBasket( index ) method. 
The parameter index should be the index of the element in the array that you would like to remove.


Solution:

const basketProto={
    basketvalue:0,
    addToBasket(value){
        this.basketvalue=this.basketvalue+value;
    },
   clearBasket(){
       this.basketvalue=0;
    },
   getBasketValue(){
        return this.basketvalue;
    },
    pay(){
        console.log(this.getBasketValue()); 
    }
  }
const myBasket={
     
       basket:[],
       clearBasket(){
        this.basket=[];
        super.clearBasket();

       },
       addToBasket (itemName, itemPrice)
     {
         super.addToBasket(itemPrice);
       this.basket.push({itemName,itemPrice});
       
    },
    removeFromBasket( index ){

       let res=this.basket[index].itemPrice;
      this.basketvalue=this.basketvalue-res;
      this.basket.splice( index,1);
      },
}

Object.setPrototypeOf(myBasket,basketProto);

myBasket.addToBasket("cake",2)
myBasket.addToBasket("rice",22) 
myBasket.basket
/*0:{itemName: 'cake', itemPrice: 2}
1: {itemName: 'rice', itemPrice: 22}*/
myBasket.pay()   //    24
myBasket.removeFromBasket(0);
myBasket.basket
/*0: {itemName: 'rice', itemPrice: 22}*/
myBasket.pay() // 22
myBasket.clearBasket()
myBasket.basket // []
myBasket.pay() // 0




