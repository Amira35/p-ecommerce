<template>
    <div class="cart-details">
        <v-container>
            <h1>Your Cart</h1>
            <v-row>
                <v-col cols="12">
                    <table>
                        <thead>
                            <tr>
                                <th class="text-start">PRODUCT</th>
                                <th class="text-start">PRICE</th>
                                <th class="text-start">QUANTITY</th>
                                <th class="text-start">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cartItems" :key="item.id">
                                <td>
                                    <img :src="item.thumbnail">
                                </td>
                                <td>${{ item.price }}</td>
                                <td><div class="counter">
                                    <v-icon size="16" @click="item.quntitVal > 1 ? item.quntitVal-- : false">mdi-minus</v-icon>
                                    <input type="number" v-model="item.quntitVal">
                                    <v-icon size="16" @click="item.quntitVal++">mdi-plus</v-icon>
                                </div></td>
                                <td>${{ item.price * item.quntitVal }}</td>
                            </tr>
                        </tbody>
                    </table>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { cartStore } from '@/store/cart'
import { mapActions, mapState } from 'pinia'

export default {
    computed:{
        ...mapState(cartStore , ['cartItems'])
    }, 
    methods : {
        ...mapActions(cartStore , ['getCartItem' , 'deleteItem'])
    } , 
    mounted(){
        this.getCartItem()
    }
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
    width: 70px;
    text-align: center;
}
input[type='number']::-webkit-inner-spin-button , input[type='number']::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
table{
    width : 100%
}
thead{
    background-color: #f2f2f2;
}
thead th { 
    padding: 8px 2px;
}
td {
    border-bottom: 1px solid #ddd;
}
td img{
    width: 25%;
}
@media (max-width : 836.99px){
    .counter input[type='number']{
    width: 50px;
}
}
@media (max-width : 792.99px){
    .counter input[type='number']{
    width: 30px;
}
td img{
    width: 50%;
}
thead th {
    font-size: 12px;
    padding: 5px;
}
}
@media (max-width : 528.99px){
    .counter input[type='number']{
    width: 20px;
}
th{
    font-size: 15px;
}
td{
    font-size: 12px;
}
}
</style>