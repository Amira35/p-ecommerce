<template>
    <div class="product-details">
        <v-container>
            <h1 class="my-2">Product Details</h1>
            <v-row>
                <v-col cols="12" md="6">
                    <img :src="tab ? tab : productId.thumbnail" style="width: 100%;height: 350px;">
                    <v-tabs v-model="tab" center-active height="150px">
                        <v-tab v-for="(img , i) in productId.images" :key="i" :value="img">
                            <img :src="img" style="width: 100px; height: 200px;">
                        </v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12" md="5" class="mt-8 mt-md-0">
                    <div class="product-content">
                        <v-card elevation="0">
                            <v-card-title style="font-weight: 700; padding: 0;">
                                ({{ productId.title }}) Sample - {{ productId.category }} For Sale
                            </v-card-title>
                            <v-rating size="x-small" v-model="productId.rating" color="yellow-darken-2">
                            </v-rating>
                            <v-card-text style="padding:0 ; color: rgb(125, 118, 118);">
                                Stock : {{ productId.stock }}
                            </v-card-text>
                            <v-card-text style="padding: 10px 0; color: rgb(125, 118, 118);">
                                {{ productId.description }}
                            </v-card-text>
                            <v-card-text  style="padding: 10px 0; color: rgb(125, 118, 118);">
                                Avalability : {{ productId.stock > 0 ? 'In Stock' : 'Out Of Stock' }}
                            </v-card-text>
                            <v-card-text style="padding: 5px 0;">Price: <strong>${{ productId.price }}</strong></v-card-text>
                            <v-card-text class="pl-0 pt-1"> Quantity:</v-card-text>
                            <div class="counter">
                                <v-icon size="20" @click="quntitVal > 1 ? quntitVal-- : false">mdi-minus</v-icon>
                                <input type="number" v-model="quntitVal">
                                <v-icon size="20" @click="quntitVal++">mdi-plus</v-icon>
                            </div>
                            <v-btn @click="addToCart(productId)" variant="outline" density="combact" class="w-75 my-4 bg-black text-white" style="text-transform: none; border-radius: 30px;border : 1px solid black ; height: 35px;">
                                <strong>Add To Cart</strong>
                            </v-btn>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { productModules } from '@/store/products';
import { mapActions, mapState } from 'pinia';
import { cartStore } from '@/store/cart'
export default {
    data : ()=>{
        return { 
            quntitVal: 1,    
            tab : '' , 
        }
    },
    computed : {
        ...mapState(productModules , ['productId']),
        ...mapState(cartStore , ['cartItems'])
        
    }, 
    methods : {
        ...mapActions(productModules , ['getSingleCtegoryId']),
        ...mapActions(cartStore , ['addItem']),
        addToCart(product){
            product.quntitVal = this.quntitVal , 
            this.addItem(product)
        }
    },
    watch:{
        $route(){
            this.getSingleCtegoryId(this.$route.params.productId)
        }
    },
    beforeMount(){
        this.getSingleCtegoryId(this.$route.params.productId)
    },
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
    width: 60px;
    text-align: center;
}
input[type='number']::-webkit-inner-spin-button , input[type='number']::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
</style>