<template>
    <div class="menu-drawer">
        <v-navigation-drawer style="padding-top:10px;" location="left" v-model="drawer" width="270" class="pr-1" temporary > 
            <v-container>
                <v-card elevation="0">
                    <v-card-title class="px-0 d-flex justify-space-between align-center">
                        <strong>Menu</strong>
                        <v-icon @click="closeCart()">mdi-close</v-icon>
                    </v-card-title>
                    <v-list>
                        <v-list-item  v-for="cat in categoriesPage " :key="cat.route">
                            <v-list-item-title @click="
                            $router.push({name: 'products-category' , params : {category: cat.route , title : cat.title}})">
                                {{ cat.title }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-container>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { productModules } from '@/store/products';
import { mapState } from 'pinia';
export default {
    inject : ['Emitter'] ,
    props:{
        windowwidth : {
            type : Number
        }
    },
    data : ()=>{
        return{
            drawer : false
        }
    } , 
    computed : {
        ...mapState(productModules , ["categoriesPage"]) ,
    },
    mounted(){
        this.Emitter.on('openMenue' , ()=>{
            this.drawer = true
        }) 
    },
    methods : {
        closeCart(){
            this.drawer = false
        },
    }
}
</script>