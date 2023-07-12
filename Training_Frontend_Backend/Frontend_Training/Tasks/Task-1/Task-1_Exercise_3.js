/*Exercise-3:
Create an object myBasket, and set its prototype to the object created in Exercise 2. 
Create an array field in myBasket, containing all the items that you purchase in the following format:
{ itemName: 'string', itemPrice: 9.99 }
Redefine the addToBasket method such that it accepts an itemName and an itemPrice. Call the addToBasket method in the prototype for the price administration, 
and store the itemName-itemPrice data locally in your array. Make sure you modify the clearBasket method accordingly.

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
