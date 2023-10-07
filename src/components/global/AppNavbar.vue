<template>
    <nav>
        <v-app-bar color="#02218f" height="vit-content" absolute>
                <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
                <v-container>
                    <v-row>
                        <v-col cols="3">
                            <img src="../../assets/images/logo.png" @click="HomePage()" style="cursor: pointer;">
                        </v-col>
                        <v-col cols="4">
                            <input type="search" 
                            style="width: 85%; border-radius : 30px ; outline: none" 
                            class="py-2 bg-white px-4"
                            placeholder="Search the store">
                        </v-col>
                        <v-col cols="5">
                            <div class="items text-white d-flex">
                                <div class="available">
                                    <span>
                                        Available 24/7 at
                                        <br>
                                        <strong>(090) 123-4567</strong>
                                    </span>
                                </div>
                                <div class="lists d-flex align-center justify-end flex-1-1">
                                    <div class="icon-like d-flex flex-column align-center text-#ffb547" style="margin: 0 20px; cursor: pointer;">
                                        <v-icon>mdi-heart</v-icon>
                                        <span style="color : #ffb547">Wish List</span>
                                    </div>
                                    <div class="icon-user d-flex flex-column align-center text-#ffb547" style="margin: 0 20px; cursor: pointer;">
                                        <v-icon>mdi-account</v-icon>
                                        <span style="color : #ffb547">Sign In</span>
                                    </div>
                                    <div class="icon-cart d-flex flex-column align-center text-#ffb547" style="margin: 0 20px; cursor: pointer;" @click="openCart">
                                        <v-badge :content="cartItems.length" color="error">
                                            <v-icon icon="$vuetify">mdi-cart</v-icon>
                                        </v-badge>
                                        <span style="color : #ffb547">Cart</span>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        </v-row>
                        <v-row>
                        <v-col cols="5">
                            <ul class="link d-flex align-center justify-space-between" style="list-style: none;">
                                <li v-for="cat in categoriesPage " :key="cat.title"> 
                                    <router-link :to="{name: 'products-category' , params : {category: cat.route , title : cat.title}}"
                                    style="color: white; text-decoration: none;" class="px-2"
                                    >{{ cat.title }}</router-link>
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="2"></v-col>
                        <v-col cols="5" class="d-flex justify-end">
                            <v-icon>mdi-help</v-icon>
                            <span>Help</span>
                        </v-col>
                    </v-row>
                </v-container>
        </v-app-bar>
    </nav>
</template>

<script>
import { productModules } from '@/store/products';
import { mapActions, mapState } from 'pinia';
import route from '../../router/index'
import { cartStore } from '@/store/cart';
export default {
    inject : ['Emitter'],
    methods : {
        openCart(){
            this.Emitter.emit('openCart')
        } , 
        HomePage : function() {
            return route.push({name : 'home'})
        }, 
        ...mapActions(cartStore , ['getCartItem'])
    } , 
    computed : {
        ...mapState(productModules , ["categoriesPage"]) ,
        ...mapState(cartStore , ['cartItems'])
    }
}
</script>