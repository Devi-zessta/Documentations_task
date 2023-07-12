const basketProto={
    
    basketvalue:0,
    addToBasket(value){
        this.basketvalue=this.basketvalue+value;
        
    },
   clearBasket(){
       //console.log(this.basketvalue);
       //console.log(this);
       this.basketvalue=0;
       //console.log(this.basketvalue);
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
      super.basketvalue=super.basketvalue-res;
      this.basket.splice( index,index+1);
      
    
    },

}

Object.setPrototypeOf(myBasket,basketProto);



console.log("pay()");
    myBasket.pay();
console.log("add");
myBasket.addToBasket("cake",1);

console.log("add");
myBasket.addToBasket("rice",1);

console.log("add");
myBasket.addToBasket("ice",1);

console.log("pay");
myBasket.pay();

console.log("basket");
console.log(myBasket.basket);









console.log("remove");
myBasket.removeFromBasket(0);
console.log(myBasket.basket);
console.log("pay()");
myBasket.pay();
console.log("clearBasket");
myBasket.clearBasket();


console.log("pay");
myBasket.pay();
