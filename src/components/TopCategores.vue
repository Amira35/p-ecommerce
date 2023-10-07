<template>
    <div class="top-cat">
        <div class="cyper-banner">
            <img src="../assets/images/cyber-banner.webp" style="width:100% ; margin: 40px 0;">
        </div>
        <div class="top-cat__head">
            <h2 class="text-black text-center my-4 font-weight-bold">Top Categories</h2>
            <div class="categories px-5">
            <v-container fluid>
            <v-row>
                <v-col cols="12" v-if="!category.length">
                    <v-row>
                        <v-col cols="2" v-for="num in 12" :key="num">
                            <v-skeleton-loader type="image,article"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
                    <v-row>
                        <v-col cols="6" sm="4" md="3" lg="2" v-for="cat in category" :key="cat.id">
                            <v-card elevation="0" class="text-center">
                                <img :src="cat.thumbnail" style="width:130px ; height: 130px ; border-radius: 50%;">
                                <v-card-text class="pt-1">{{ cat.title }}</v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
export default {
    name : 'TopCategores' , 
    data : ()=>{
        return {
            
        }
    },
    props : {
        category:{
            type : Array
        }
    },
    components:{
        // eslint-disable-next-line vue/no-unused-components
        VSkeletonLoader
    }
} 
</script>