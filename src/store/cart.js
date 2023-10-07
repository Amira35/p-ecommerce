import { defineStore } from "pinia";

export const cartStore = defineStore('cartStore' , ({
    state : ()=> {
        return {
            cartItems :[] 
        }
    } , 
    actions : {
        addItem(item) {
            let exist = false
            for (let i = 0 ; i < this.cartItems.length ; i++){
                if(this.cartItems[i].id == item.id){
                    this.cartItems[i].quntitVal += item.quntitVal 
                    exist = true 
                    break
                }
            }
            if(!exist){
                this.cartItems.push(JSON.parse(JSON.stringify(item)))
            }
            localStorage.setItem('cart-item' , JSON.stringify(this.cartItems))
        } , 
        getCartItem(){
            if(localStorage.getItem('cart-item')){
                this.cartItems = JSON.parse(localStorage.getItem('cart-item'))
            }
        } , 
        deleteItem(id){
            for(let i = 0 ; i < this.cartItems.length ; i++){
                if(this.cartItems[i].id == id){
                    this.cartItems.splice(i , 1);
                    break
                }
            }
            localStorage.setItem('cart-item' , JSON.stringify(this.cartItems))
        }
        
    }
}))