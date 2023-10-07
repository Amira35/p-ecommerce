<template>
    <div class="sidebar">
        <v-navigation-drawer location="right" v-model="drawer" temporary width="270"> 
            <v-container>
                <v-card elevation="0">
                    <v-card-title class="px-0 d-flex">
                        <strong>Shopping Cart</strong>
                    </v-card-title>
                    <v-card-text class="px-0 pt-0" style="color: rgb(139, 133, 133);">{{ cartItems.length }} Item</v-card-text>
                    <v-card-text class="px-0 pt-0" style="color: rgb(139, 133, 133);" v-if="!cartItems.length">
                        Free Shippingfor all orders over $800.00
                    </v-card-text>
                    <v-card-text class="px-0 pb-0 pt-1 text-center" style="color: rgb(139, 133, 133);" v-if="!cartItems.length">
                        Your cart is empty
                    </v-card-text>
                    <v-card-actions class="justify-center py-0" v-if="!cartItems.length">
                        <v-btn variant="outline" density="combact" class="py-4 px-15 my-3" style="text-transform: none; border-radius: 30px;border : 1px solid black" >
                            Continue Shopping
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-row v-for="item in cartItems" :key="item.id">
                    <v-col cols="4">
                        <v-icon @click="deleteItem(item.id)">mdi-close</v-icon>
                        <img :src="item.thumbnail" class="w-100">
                        <v-card-text class="pt-2"> Total: <strong>${{ item.price * item.quntitVal }}</strong></v-card-text>
                    </v-col>
                    <v-col cols="8">
                        <p style="font-size: 13px;">( {{ item.title }}) Sample- {{ item.category }} </p>
                        <p style="font-size: 13px;" class="py-1">Category: {{ item.category }}</p>
                        <p style="font-size: 13px;" class="py-1">Price: ${{ item.price }}</p>
                        <v-card-text class="pl-0 pt-1"> Quantity:</v-card-text>
                            <div class="counter">
                                <v-icon size="11" @click="item.quntitVal > 1 ? item.quntitVal-- : false">mdi-minus</v-icon>
                                <input type="number" v-model="item.quntitVal">
                                <v-icon size="11" @click="item.quntitVal++">mdi-plus</v-icon>
                            </div>
                    </v-col>
                </v-row>
                <v-card-actions class="justify-center mt-5" v-if="cartItems.length">
                    <v-btn variant="outline" density="combact" class="py-2 px-16 my-3" style="text-transform: none; border-radius: 30px;border : 1px solid black"
                        @click="cartItems.length ? $router.push({name : 'cart-details'}) : 'none'"
                        >View Cart
                    </v-btn>
                </v-card-actions>
            </v-container>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { cartStore } from '@/store/cart';
import { mapActions, mapState } from 'pinia';
export default {
    inject : ['Emitter'] ,
    props:{
        windowwidth : {
            type : Number
        }
    },
    data : ()=> ({
        drawer : false , 
    })
    ,
    computed :{ 
        ...mapState(cartStore , ['cartItems'])
    },
    methods : {
        ...mapActions(cartStore  , ['getCartItem' , 'deleteItem']),
    },
   mounted() {
       this.Emitter.on('openCart' , ()=>{
            this.drawer = true
       }) , 
       this.getCartItem() ;
       
   } , 
}
</script>


<style scoped>
.counter{
    border-radius: 30px ; 
    border: 2px solid rgb(125, 118, 118); 
    width: fit-content;
}
.counter input[type='number']{
    outline: none;
    width: 40px;
    text-align: center;
}
input[type='number']::-webkit-inner-spin-button , input[type='number']::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
</style>