/*Exercise 2:

Create a object (with name basketProto) with the following methods:
●	addToBasket( value ) adds value to the basket value,
●	clearBasket() sets the basket value to 0
●	getBasketValue() returns the basket value
●	pay() logs the message {getBasketValue()} has been paid, where {getBasketValue()} is the return value of the method with the same name. We can pay for the same basket as many times as we’d like. 


Solution:*/

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


